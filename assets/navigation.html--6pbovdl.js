import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as t}from"./app-xEYoAD2G.js";const p={},o=t(`<h2 id="日志" tabindex="-1"><a class="header-anchor" href="#日志" aria-hidden="true">#</a> 日志</h2><h4 id="将文档导出为excel的方法-好用的arrayflat" tabindex="-1"><a class="header-anchor" href="#将文档导出为excel的方法-好用的arrayflat" aria-hidden="true">#</a> 将文档导出为Excel的方法&amp;&amp;好用的Arrayflat()</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> <span class="token constant">XLSX</span> <span class="token keyword">from</span> <span class="token string">&#39;xlsx&#39;</span>
<span class="token comment">// 注意这里要import * 不然会报错没有默认导出</span>
<span class="token keyword">function</span> <span class="token function">exportToExcel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
  <span class="token comment">// 创建一个工作簿</span>
  <span class="token keyword">const</span> workbook <span class="token operator">=</span> <span class="token constant">XLSX</span><span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">book_new</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> temExcelArray <span class="token operator">=</span> tempWebSiteList<span class="token punctuation">.</span><span class="token function">flatMap</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name<span class="token punctuation">,</span> bookmarks <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    bookmarks<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> title<span class="token punctuation">,</span> url<span class="token punctuation">,</span> icon <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token punctuation">,</span> title<span class="token punctuation">,</span> url<span class="token punctuation">,</span> icon <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>temExcelArray<span class="token punctuation">)</span>
  <span class="token comment">// 创建一个工作表</span>

  <span class="token keyword">const</span> worksheet <span class="token operator">=</span> <span class="token constant">XLSX</span><span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">json_to_sheet</span><span class="token punctuation">(</span>temExcelArray<span class="token punctuation">)</span>

  <span class="token comment">// 将工作表添加到工作簿</span>
  <span class="token constant">XLSX</span><span class="token punctuation">.</span>utils<span class="token punctuation">.</span><span class="token function">book_append_sheet</span><span class="token punctuation">(</span>workbook<span class="token punctuation">,</span> worksheet<span class="token punctuation">,</span> <span class="token string">&#39;拿到的所有书签数据&#39;</span><span class="token punctuation">)</span>

  <span class="token comment">// 将工作簿保存为Excel文件</span>
  <span class="token constant">XLSX</span><span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span>workbook<span class="token punctuation">,</span> <span class="token string">&#39;website_list.xlsx&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),e=[o];function c(l,i){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","navigation.html.vue"]]);export{r as default};