---
home: true
title: Home
heroImage: logo.png
heroText: Rule Engine
tagline: Rules based on pipeline concept created with a visual editor for javascript.
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

hello-world.rule

![Hello World](/hello.png)

hello-world.js

```javascript
export default (context, next) => {
  console.log('Hello, world!');
  next();
}
```

App.js

Use the rollup plugin or webpack loader to compile the rule file into javascript.

```javascript
import helloWorld from './hello-world.rule';

helloWorld.execute();
```
