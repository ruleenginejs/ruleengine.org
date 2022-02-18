---
title: Quick Start
description: Quick start with Rule Engine
meta:
  - name: og:title
    content: Quick Start
  - name: og:description
    content: Quick start with Rule Engine
---

# Quick Start

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

> You can create a pipeline in the Rule Engine manually, but it's better to do it using a [rule editor](/guide/essentials/rule-editor.html).

Create simple pipeline:

foo.js

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

export default pipeline;
```

App.js

```js
import foo from './foo.js';

const context = {};
foo.execute(context).catch(e => console.error(e));
```
