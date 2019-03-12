# quickdrag

A tiny npm module to drag html elements on a page. This script was quickly made for developement purpose (do not use in production).

If you wish to use in production, please contact me for a quick collaboration towards making this script more complex.

This module will only work for elements not embedded in shadow doms.

## installation

```bash
yarn add quickdrag -D
```

## use

import the module in your document :

```html
<script type=module src=./node_modules/quickdrag/quickdrag.js></script>
```

Then tag the elements you want to drag :

```html
<div class="draggable">...</div>
```

The imported module will automatically process the `[class^=draggable]` elements.
Load the page and now you can drag the element holding a click.

If you wish to register a draggable element manually :

```html
<script type=module>
  import {registerForDraggable} from './node_modules/quickdrag/quickdrag.js';
  registerForDraggable(document.getElementById('dragMe'));
</script>
```