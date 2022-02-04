/**
 * BootstrapAlert
 * 
 * Bootstrap-based jQuery plugin for generating
 * customized alerts.
 * 
 * @requires jQuery {@link https://jquery.com/}
 * @author Federico Cappelletti <fedec96@gmail.com>
 * @license MIT (https://github.com/Fedec96/jquery-bootstrap-alert-plugin/blob/main/LICENSE.md)
 */

'use strict';

(function($, window, document, undefined) {
    /**
     * This plugin's name. Used for namespacing,
     * console errors, jQuery's data.
     * 
     * @type {string}
     * @private
     */
    const pluginName = 'bootstrapAlert';

    /**
     * Capitalized plugin name for the console messages.
     * 
     * @type {string}
     * @private
     */
    const displayName = pluginName.charAt(0).toUpperCase() + pluginName.slice(1);

    class Plugin {
        /**
         * Initialize the target element and extend the default options with the
         * caller's parameters; then, start rendering.
         * 
         * @param {object} element The target element's identifier.
         * @param {object} options Parameters - defaults extending eventual options.
         * @private
         */
        constructor(element, options) {
            this.element = $(element);
            this.settings = $.extend(true, {}, $.fn[pluginName].defaults, options);

            // Store all the console messages.
            this.messages = [];

            this._init();
            this._printMessages();
        }

        /**
         * Start this plugin's logic, such as checking settings,
         * building the expected output, and so on.
         * @private
         */
         _init() {
            this._buildAlert();
        }

        /**
         * Build the alert and populate it if all checks are passed.
         * @private
         */
        _buildAlert() {
            // Housekeeping
            const _this = this;

            // If no heading and no content are valid, the elements cannot be built.
            let hasHeading = true;
            if (!this._isValidString(this.settings.heading)) {
                hasHeading = false;
            }

            let hasContent = true;
            if (!this._isValidString(this.settings.content)) {
                hasContent = false;
            }

            if (!hasHeading && !hasContent) {
                this._sendMessage('no heading/content provided', 'error');
            }

            // If all the checks are passed, start crafting.
            if (hasHeading || hasContent) {
                // Check if a valid icon was declared.
                let hasIcon = false;
                if (this._isValidString(this.settings.icon)) {
                    hasIcon = true;
                }

                // If no valid type was provided, force a default one.
                const defaultAlert = 'primary';
                const allowedAlerts = [
                    defaultAlert, 'danger', 'dark', 'info',
                    'light', 'secondary', 'success', 'warning',
                ];

                let baseType;
                if (allowedAlerts.includes(this.settings.type)) {
                    baseType = this.settings.type;
                } else {
                    baseType = defaultAlert;
                }

                // Check if the alert should be dismissible.
                let isDismissible = false;
                if (this.settings.dismissible === true) {
                    isDismissible = true;
                }

                // Check the callbacks.
                let hasOnShow = false;
                if (this._isValidFunction(this.settings.onShow)) {
                    hasOnShow = true;
                }

                let hasOnDismiss = false;
                if (this._isValidFunction(this.settings.onDismiss)) {
                    hasOnDismiss = true;
                }

                // Check if a valid duration was provided.
                let defaultDuration = 3; // seconds
                if (typeof this.settings.duration === 'number' && this.settings.duration > 0 && this.settings.duration !== defaultDuration) {
                    defaultDuration = this.settings.duration;
                }

                // Check if automatic fadeout is enabled.
                let hasFadeout = false;
                if (this.settings.fadeout === true) {
                    hasFadeout = true;
                }

                // Base elements
                const baseAlert = $('<div>').attr('role', 'alert').addClass('alert alert-' + baseType);

                let icon;
                if (hasIcon) {
                    icon = $('<i>').addClass('bi bi-' + this.settings.icon + ' me-1');
                }

                // Build the heading, if a valid one is provided.
                if (hasHeading) {
                    const heading = $('<h4>').addClass('alert-heading').append(this.settings.heading);

                    // If an icon was provided, remove the heading's bottom margin.
                    if (hasIcon) {
                        heading.addClass('mb-0');
                    }

                    // If an icon was provided but without content, prepend it BEFORE the heading.
                    if (hasIcon && !hasContent) {
                        heading.prepend(icon);
                    }

                    baseAlert.append(heading);

                    // Create a separator between the heading and the content, if the latter is present.
                    if (hasContent) {
                        baseAlert.append('<hr>');
                    }
                }

                // Manage the content, if present..
                if (hasContent) {
                    let content;
                    if (hasHeading) {
                        // In case of heading, for semantic reasons, the content will be wrapped in a paragraph.
                        content = $('<p>').addClass('mb-0').append(this.settings.content);
                    } else {
                        content = this.settings.content;
                    }

                    // When the icon is present, prepend it.
                    if (hasIcon) {
                        // When both heading and content are provided, simply prepend the node.
                        if (hasHeading && hasContent) {
                            content.prepend(icon);
                        } else {
                            // Get the icon element's plain HTML text and concatenate it with the content otherwise.
                            content = icon.prop('outerHTML') + content;
                        }
                    }

                    baseAlert.append(content);
                }

                // Assign the proper CSS class to all the anchors.
                baseAlert.find('a').addClass('alert-link');

                // If the alert is set as 'dismissible', render the close button.
                if (isDismissible) {
                    const closeIcon = $('<i>').addClass('bi bi-x-lg');
                    const closeButton = $('<button>').addClass('btn-close').append(closeIcon).attr({
                        type: 'button',
                        title: 'Close',
                        'data-bs-dismiss': 'alert',
                        'aria-label': 'Close',
                    });

                    // Manage the onDismiss callback when the dismiss button is clicked.
                    if (hasOnDismiss && !hasFadeout) {
                        // The close button won't trigger the callback if the alert will fade out. The animation will.
                        closeButton.click(function(event) {
                            _this.settings.onDismiss();
                        });
                    }

                    baseAlert.append(closeButton);
                    baseAlert.addClass('alert-dismissible fade show');
                }

                // Finally, specify the render's dynamics.
                let alertElement = baseAlert.hide().fadeIn();

                // Duration/automatic fadeout rules.
                if (hasFadeout) {
                    const duration = defaultDuration * 1000; // milliseconds

                    alertElement = alertElement.delay(duration).fadeOut(function() {
                        // Trigger the callback.
                        if (hasOnDismiss) {
                            _this.settings.onDismiss();
                        }

                        // Make sure to remove the alert from the DOM.
                        alertElement.remove();
                    });
                }

                this.element.prepend(alertElement);

                // Trigger the onShow callback, if specified.
                if (hasOnShow) {
                    this.settings.onShow();
                }
            }
        }

        /**
         * Check if a given element is of the 'string' type
         * and contains an actual, non-empty string.
         * 
         * @param {mixed} element The element in exam.
         * @returns {boolean} Whether the element is a valid string or not.
         * @private
         */
        _isValidString(element) {
            return typeof element === 'string' && element.trim();
        }

        /**
         * Check if a given function os of the 'function' type
         * and has at least one instruction within its body.
         * 
         * @param {mixed} element The element in exam.
         * @returns {boolean} Whether the element is a running function or not.
         * @private
         */
        _isValidFunction(element) {
            // Step one: check the type.
            let isValidType = false;
            if (typeof element === 'function') {
                isValidType = true;
            }

            // Step two: check if there are instructions within the function.
            let hasInstructions = false;
            if (isValidType) {
                const functionBody = element.toString().match(/\{([\s\S]*)\}/m)[1].replace(/^\s*\/\/.*$/mg, '');

                if (functionBody.length > 0) {
                    hasInstructions = true;
                }
            }

            return isValidType && hasInstructions;
        }

        /**
         * Craft a message to send to the browser's console.
         * 
         * @param {string} content The message's content.
         * @param {(undefined|string)} type The message's type.
         * @private
         */
        _sendMessage(content, type) {
            const defaultType = 'log';
            const allowedTypes = [defaultType, 'error', 'info', 'warn',];

            let messageType = defaultType;
            if (allowedTypes.includes(type)) {
                messageType = type;
            }

            this.messages.push({
                type: messageType,
                content: content,
            });
        }

        /**
         * Print eventual messages that this plugin raised.
         * @private
         */
        _printMessages() {
            $.each(this.messages, function(i, message) {
                console[message.type](displayName + ': ' + message.content + '.');
            });
        }
    }

    /**
     * Initialize this plugin for each instanced element.
     * 
     * @example
     * $('#alert-container').bootstrapAlert({
     *     type: 'danger',
     *     content: 'Something went wrong.',
     * 
     *     onShow() {
     *       // ...
     *     },
     * 
     *     onDismiss() {
     *        // ...
     *     },
     * });
     * 
     * @param {object} config Instance options.
     * @returns {(undefined|function)} This plugin's instance.
     * @public
     */
    $.fn[pluginName] = function(config) {
        if (typeof config === 'object') {
            return this.each(function(i, target) {
                new Plugin(this, config);
            });
        } else {
            console.error(displayName + ': invalid options.');
        }
    };

    /**
     * This plugin's default attributes and callbacks.
     * Each element can be externally overridden.
     * 
     * @example
     * $.fn.bootstrapAlert.defaults.type = 'danger';
     * 
     * @type {object}
     * @public
     */
    $.fn[pluginName].defaults = {
        dismissible: true,
        fadeout: true,
    };
})(jQuery, window, document);
