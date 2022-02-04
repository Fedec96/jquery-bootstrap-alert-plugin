[&#8592; BootstrapAlert](../../../) &nbsp; | &nbsp; [Alert content &#8594;](CONTENT.md)

# General settings

The general settings will describe how a specific alert behaves. They can be either tweaked locally (per-element) or for every single element that is a BootstrapAlert instance if the [:link: defaults are overridden](../../../#overriding-defaults).

# Table of contents

1. [dismissible](#dismissible)
2. [duration](#duration)
3. [fadeout](#fadeout)
4. [type](#type)

# dismissible

| Type    | Default | Required |
| ------- | ------- | -------- |
| Boolean | `true`  | :x:      |

By default, all the alerts will be dismissible, meaning each one of them will be provided a dismiss button on the top right.

To change that:

```js
dismissible: false
```

With `dismissible: true`

```html
<div role="alert" class="alert alert-primary alert-dismissible fade show">
  <!-- ... -->
  <button class="btn-close" type="button" title="Close" data-bs-dismiss="alert" aria-label="Close">
    <i class="bi bi-x-lg"></i>
  </button>
</div>
```

With `dismissible: false`

```html
<div role="alert" class="alert alert-primary">
  <!-- ... -->
</div>
```

See also: [:link: onDismiss @ Callbacks](CALLBACKS.md#ondismiss)

<div align="right"><a href="#general-settings">&#8593; Back to top</a></div>

# duration

| Type   | Default | Required |
| ------ | ------- | -------- |
| Number | 3       | :x:      |

For any alert that has the `fadeout` property set to `true`, the time that has to pass before the alert fades out and leaves the DOM can be set with this property.

The value represents the **seconds**.

```js
duration: 1
```

<div align="right"><a href="#general-settings">&#8593; Back to top</a></div>

# fadeout

| Type    | Default | Required |
| ------- | ------- | -------- |
| Boolean | `true`  | :x:      |

By default, the alerts will automatically fade out and leave the DOM after a certain amount of seconds (specified with the `duration` property). To change this behavior:

```js
fadeout: false
```

See also: [:link: onDismiss @ Callbacks](CALLBACKS.md#ondismiss)

<div align="right"><a href="#general-settings">&#8593; Back to top</a></div>

# type

| Type   | Default   | Required |
| ------ | --------- | -------- |
| String | `primary` | :x:      |

Specify the alert's type, that will change its overall appearance.

If an unsupported type is specified, the default value will be set.

This will determine the element's `alert-*` CSS class.

```js
type: 'danger'
```

```js
type: 'dark'
```

```js
type: 'info'
```

```js
type: 'light'
```

```js
type: 'primary'
```

```js
type: 'secondary'
```

```js
type: 'success'
```

```js
type: 'warning'
```

<div align="right"><a href="#general-settings">&#8593; Back to top</a></div>
