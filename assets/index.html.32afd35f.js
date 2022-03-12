import{r as o,o as p,c,a as s,b as e,F as l,d as t,e as n}from"./app.02013ef7.js";import{_ as r}from"./hello.c129bc5d.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const u={},d=t(`<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># install with npm</span>
<span class="token function">npm</span> <span class="token function">install</span> @ruleenginejs/runtime

<span class="token comment"># install with yarn</span>
<span class="token function">yarn</span> <span class="token function">add</span> @ruleenginejs/runtime
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>foo.rule</p><p><img src="`+r+`" alt="Hello"></p><p>hello-step.js</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, world!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>App.js</p>`,8),k=n("Use the "),m={href:"https://github.com/ruleenginejs/rollup-plugin-rule",target:"_blank",rel:"noopener noreferrer"},h=n("rollup plugin"),_=n(", "),b={href:"https://github.com/ruleenginejs/rule-loader",target:"_blank",rel:"noopener noreferrer"},g=n("webpack loader"),f=n(" or "),v={href:"https://marketplace.visualstudio.com/items?itemName=ruleengine.vscode-ruleengine-compiler",target:"_blank",rel:"noopener noreferrer"},x=n("VS Code Extension"),j=n(" to compile the rule file into javascript."),w=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> foo <span class="token keyword">from</span> <span class="token string">&#39;./foo.rule&#39;</span><span class="token punctuation">;</span>

foo<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,1);function y(N,V){const a=o("ExternalLinkIcon");return p(),c(l,null,[d,s("p",null,[k,s("a",m,[h,e(a)]),_,s("a",b,[g,e(a)]),f,s("a",v,[x,e(a)]),j]),w],64)}var C=i(u,[["render",y]]);export{C as default};
