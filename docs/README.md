---
home: true
title: Home
heroImage: logo.png
heroText: Rule Engine
tagline: Pipelines creating with the visual VS Code Editor for javascript.
actions:
  - text: Get Started →
    link: /guide/getting-started.html
    type: primary
  - text: Install VS Code Extension
    link: https://marketplace.visualstudio.com/items?itemName=ruleengine.vscode-ruleengine-pack
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

foo.rule

![Hello](/hello.png)

hello-step.js

```javascript
export default (context, next) => {
  console.log('Hello, world!');
  next();
}
```

App.js

Use the [rollup plugin](https://github.com/ruleenginejs/rollup-plugin-rule), [webpack loader](https://github.com/ruleenginejs/rule-loader) or [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=ruleengine.vscode-ruleengine-compiler) to compile the rule file into javascript.

```javascript
import foo from './foo.rule';

foo.execute().catch(e => console.error(e));
```
