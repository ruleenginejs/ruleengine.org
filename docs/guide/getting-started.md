---
title: Getting Started
description: Getting started with Rule Engine
meta:
  - name: og:title
    content: Getting Started
  - name: og:description
    content: Getting started with Rule Engine
---

# Getting Started

## Installation

#### npm

```bash
npm install @ruleenginejs/runtime
```

#### yarn

```bash
yarn add @ruleenginejs/runtime
```

## Usage

Create pipeline:

```js
import {
  Pipeline,
  StartStep,
  EndStep,
  SingleStep
} from "@ruleenginejs/runtime";

const pipeline = new Pipeline();
const start = new StartStep();
const end = new EndStep();
const step = new SingleStep({
  handler: (context, next) => {
    next();
  }
});

start.connectTo(step);
step.connectTo(end);

pipeline.add(start, end, step);

const context = {};
pipeline.execute(context).catch(e => console.error(e));
```

You can create a pipeline in the rules engine manually, but it's better to do it using a visual editor.

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
