---
home: true
title: Home
heroImage: logo.png
heroText: Rule Engine
tagline: Pipeline using steps with visual editor for VS Code written on javascript.
actions:
  - text: Get Started →
    link: /guide/getting-started.html
    type: primary
  - text: Install VS Code Extension
    link: https://marketplace.visualstudio.com/items?itemName=ruleengine.vscode-ruleengine-editor
    type: secondary
features:
  - title: Editor
    details: VS Code visual editor of rule files, intuitive and simple editing, uses steps and connections.
  - title: Compiler
    details: Compiler of rule files for popular bundlers rollup and webpack, and extension for VS Code.
  - title: Where to use
    details: Pipelines can be used on both the UI and the backend. There are use cases for Express and NestJS.
footer: MIT Licensed | Copyright © 2022 Nikolay Naumenkov
---

## Installation

```bash
# install with npm
npm install @ruleenginejs/runtime

# install with yarn
yarn add @ruleenginejs/runtime
```

## Usage

foo.js

```javascript
import { Pipeline, StartStep, EndStep, SingleStep } from '@ruleenginejs/runtime';

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

export default pipeline;
```

App.js

```js
import foo from 'foo.js';

const context = {};
foo.execute(context).catch(e => console.error(e));
```
