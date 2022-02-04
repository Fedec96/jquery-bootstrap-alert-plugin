[&#8592; Alert content](CONTENT.md)

# Callbacks

[:link: Back to the main document](../)

Intercept specific alert events.

# Table of contents

1. [onShow](#onshow)
2. [onDismiss](#ondismiss)

# onShow

| Output      | Required |
| ----------- | -------- |
| `undefined` | :x:      |

Specify what happens when the target alert enters the DOM for the first time.

```js
onShow() {/* ... */}
```

<div align="right"><a href="#callbacks">&#8593; Back to top</a></div>

# onDismiss

| Output      | Required |
| ----------- | -------- |
| `undefined` | :x:      |

Specify what happens when the target alert leaves the DOM.

This event will be triggered in two possible scenarios:

- When the "Close" button is clicked on an alert that was not given the `fadeout: true` property
- When the alert fades away thanks to a `fadeout: true` property regardless of its dismissible capability

```js
onDismiss() {/* ... */}
```

See also: [:link: dismissible @ General settings](SETTINGS.md#dismissible) [:link: fadeout @ General settings](SETTINGS.md#fadeout)

<div align="right"><a href="#callbacks">&#8593; Back to top</a></div>
