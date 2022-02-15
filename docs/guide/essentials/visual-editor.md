---
title: Visual Editor
description: Creating a pipeline using the editor
meta:
  - name: og:title
    content: Visual Editor
  - name: og:description
    content: Creating a pipeline using the editor
---

# Visual Editor

## How To Use

- Install [VS Code Rule Engine Editor](https://marketplace.visualstudio.com/items?itemName=ruleengine.vscode-ruleengine-editor).
- Create new `foo.rule` and open file in VS Code editor.
- Drag the step elements from the toolbar to the canvas and connect them with lines. ***Any pipeline should begin with a start step and end with an end step.***
- Save changes and compile `foo.rule` file in javascript.

If you are using [webpack loader](https://github.com/ruleenginejs/rule-loader) or [rollup plugin](https://github.com/ruleenginejs/rollup-plugin-rule) to compile the rule file into javascript code, just import and call the asynchronous execute method:

```js
import foo from './foo.rule';

const context = {};
foo.execute(context).catch(e => console.error(e));
```

Or install [VS Code Rule Engine Compiler](https://marketplace.visualstudio.com/items?itemName=ruleengine.vscode-ruleengine-compiler) and right-click on the `foo.rule` file and select the menu `Rule Engine: Compile`. File `foo.js` will be created in the same directory. Next, import  the file in your code and call the asynchronous execute method:

```js
import foo from './foo.js';

const context = {};
foo.execute(context).catch(e => console.error(e));
```
