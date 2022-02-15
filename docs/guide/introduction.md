---
title: Introduction
description: Introduction in Rule Engine
meta:
  - name: og:title
    content: Introduction
  - name: og:description
    content: Introduction in Rule Engine
---

# Introduction

## What is Rule Engine?

Rule Engine is a javascript engine for creating complex pipelines. It is based on the concept of sequential execution of blocks of code, named steps that connect lines to each other through ports.

Example:

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
    console.log('Hello, world!');
    next();
  }
});

start.connectTo(step);
step.connectTo(end);

pipeline.add(start, end, step);

// Run pipeline
pipeline.execute().catch(e => console.error(e));
```

### With Use Editor

The editor uses its own JSON text [file format](/guide/essentials/rule-file.html) with `.rule` extension.

Example:

![Hello](/hello.png)

Next, we compile the rule file into a javascript that contains the generated pipeline code.

> There are several ways to compile the rule file: [webpack loader](/guide/essentials/webpack-loader.html), [rollup plugin](/guide/essentials/rollup-plugin.html) or [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=ruleengine.vscode-ruleengine-compiler).

After the compilation step, we import it into our application and execute pipeline.

App.js

```js
import foo from './foo.rule';  // if using webpack or rollup

const context = {}; // context is any custom object
foo.execute(context).catch(e => console.error(e));
```
