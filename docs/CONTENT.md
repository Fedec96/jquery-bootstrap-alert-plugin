[&#8592; General settings](SETTINGS.md) &nbsp; | &nbsp; [Callbacks &#8594;](CALLBACKS.md)

# Alert content

[:link: Back to the main document](../)

Information that can populate a target element. As stated in the [:link: fundamentals](../#fundamentals), the `heading` and/or `content` properties have to be declared and valid; otherwise the element will not be rendered at all.

# Table of contents

1. [content](#content)
2. [heading](#heading)
3. [icon](#icon)

# content

| Type   | Default     | Required |
| ------ | ----------- | -------- |
| String | `undefined` | :x:      |

The place where to put the alert's actual message.

```js
content: 'Something happened.'
```

```html
<div role="alert" class="alert alert-primary alert-dismissible fade show">
  Something happened.
  <button class="btn-close" type="button" title="Close" data-bs-dismiss="alert" aria-label="Close">
    <i class="bi bi-x-lg"></i>
  </button>
</div>
```

<div align="right"><a href="#alert-content">&#8593; Back to top</a></div>

# heading

| Type   | Default     | Required |
| ------ | ----------- | -------- |
| String | `undefined` | :x:      |

Showcase important information with a proper hero-like heading.

### Heading only

```js
heading: 'Attention required'
```

```html
<div role="alert" class="alert alert-primary alert-dismissible fade show">
  <h4 class="alert-heading">Attention required</h4>
  <button class="btn-close" type="button" title="Close" data-bs-dismiss="alert" aria-label="Close">
    <i class="bi bi-x-lg"></i>
  </button>
</div>
```

### Heading & content

```js
heading: 'Attention required',
content: 'Something happened.'
```

```html
<div role="alert" class="alert alert-primary alert-dismissible fade show">
  <h4 class="alert-heading">Attention required</h4>
  <hr>
  <p class="mb-0">Something happened.</div>
  <button class="btn-close" type="button" title="Close" data-bs-dismiss="alert" aria-label="Close">
    <i class="bi bi-x-lg"></i>
  </button>
</div>
```

<div align="right"><a href="#alert-content">&#8593; Back to top</a></div>

# icon

| Type   | Default     | Required |
| ------ | ----------- | -------- |
| String | `undefined` | :x:      |

It is possible to embed an icon within the alert's content. The icon will be placed right before the content, if any content is provided, or right before the heading, when no content is available.

The property relies on [:link: Bootstrap Icons](https://icons.getbootstrap.com/). Each icon's name will be in fact a Bootstrap Icons glyph, without the `bi bi-` prefix.

### Heading only

```js
heading: 'Attention required',
icon: 'exclamation-lg'
```

```html
<div role="alert" class="alert alert-primary alert-dismissible fade show">
  <h4 class="alert-heading mb-0">
    <i class="bi bi-exclamation-lg me-1"></i>Attention required
  </h4>
  <button class="btn-close" type="button" title="Close" data-bs-dismiss="alert" aria-label="Close">
    <i class="bi bi-x-lg"></i>
  </button>
</div>
```

### Content only

```js
content: 'Something happened.',
icon: 'exclamation-lg'
```

```html
<div role="alert" class="alert alert-primary alert-dismissible fade show">
  <i class="bi bi-exclamation-lg me-1"></i>Something happened.
  <button class="btn-close" type="button" title="Close" data-bs-dismiss="alert" aria-label="Close">
    <i class="bi bi-x-lg"></i>
  </button>
</div>
```

### Heading & content

```js
heading: 'Attention required',
content: 'Something happened.',
icon: 'exclamation-lg'
```

```html
<div role="alert" class="alert alert-primary alert-dismissible fade show">
  <h4 class="alert-heading mb-0">Attention required</h4>
  <hr>
  <p class="mb-0">
    <i class="bi bi-exclamation-lg me-1"></i>Something happened.
  </div>
  <button class="btn-close" type="button" title="Close" data-bs-dismiss="alert" aria-label="Close">
    <i class="bi bi-x-lg"></i>
  </button>
</div>
```

<div align="right"><a href="#alert-content">&#8593; Back to top</a></div>
