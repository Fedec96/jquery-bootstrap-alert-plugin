# BootstrapAlert

jQuery plugin for alerts creation based on Bootstrap.

# Requirements

* [:link: jQuery](https://jquery.com/) ver. 3.6.0+
* [:link: Bootstrap](https://getbootstrap.com/) ver. 5+
* [:link: Bootstrap Icons](https://icons.getbootstrap.com/) ver. 1.7+

# Table of contents

1. [Fundamentals](#fundamentals)
    - [Installation](#installation)
    - [Instance](#instance)
    - [Overriding defaults](#overriding-defaults)
2. [License](#license)
3. Browse in-depth documentation:
    - [:link: General settings](docs/SETTINGS.md)
    - [:link: Alert content](docs/CONTENT.md)
    - [:link: Callbacks](docs/CALLBACKS.md)

# Fundamentals

In order to work, this plugin expects a valid `content` and/or a valid `heading` content. If both are missing or wrongly declared, no output will be given. All the other general settings can be omitted.

Always remember to check the **browser's console** for potential warnings.

> :warning: Keep in mind that any property that supports the `string` type will potentially support HTML syntax.

<div align="right"><a href="#bootstrapalert">&#8593; Back to top</a></div>

## Installation

Load the CSS and JS files at last, respectively in `<head>` and `<body>`:

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <!-- Bootstrap Icons CSS -->
    <link rel="stylesheet" href="/css/bootstrap-icons.css">
    <!-- BootstrapAlert CSS -->
    <link rel="stylesheet" href="/css/jquery.bootstrap.alert.css">
  </head>
  <body>
    <!-- jQuery -->
    <script src="/js/jquery.min.js"></script>
    <!-- Bootstrap JS -->
    <script src="/js/bootstrap.bundle.min.js"></script>
    <!-- BootstrapAlert JS -->
    <script src="/js/jquery.bootstrap.alert.js"></script>
  </body>
</html>
```

<div align="right"><a href="#bootstrapalert">&#8593; Back to top</a></div>

## Instance

This plugin will *prepend* any alert in a specific container.

To create an instance on a specific target:

```js
$(element).bootstrapAlert(options);
```

### Example

```js
$('#alert-container').bootstrapAlert({
  type: 'warning',
  content: 'Something happened.',
});
```

Learn more: [:link: Alert content](docs/CONTENT.md)

<div align="right"><a href="#bootstrapalert">&#8593; Back to top</a></div>

## Overriding defaults

To override this plugin's default settings and making them work across all the instances:

```js
$.fn.bootstrapAlert.defaults.property = value;
```

### Example

```js
$.fn.bootstrapAlert.defaults.dismissible = false;
```

Works for adding custom properties too.

Learn more: [:link: General settings](docs/SETTINGS.md)

<div align="right"><a href="#bootstrapalert">&#8593; Back to top</a></div>

# License

Licensed under the [:link: MIT license](LICENSE.md).

<div align="right"><a href="#bootstrapalert">&#8593; Back to top</a></div>
