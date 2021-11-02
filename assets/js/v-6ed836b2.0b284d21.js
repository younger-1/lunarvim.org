"use strict";(self.webpackChunkLunarVim_com=self.webpackChunkLunarVim_com||[]).push([[7637],{2363:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-6ed836b2",path:"/languages/typescript.html",title:"TypeScript",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Install Syntax Highlighting",slug:"install-syntax-highlighting",children:[]},{level:2,title:"Install Language Server",slug:"install-language-server",children:[]},{level:2,title:"Formatters",slug:"formatters",children:[]},{level:2,title:"Linters",slug:"linters",children:[]},{level:2,title:"LSP Settings",slug:"lsp-settings",children:[]}],filePathRelative:"languages/typescript.md",git:{updatedTime:163584684e4,contributors:[{name:"Pasi Bergman",email:"pasi.bergman@iki.fi",commits:3},{name:"Thiago de Bastos",email:"thiago@thiagodebastos.com",commits:1},{name:"kylo252",email:"59826753+kylo252@users.noreply.github.com",commits:1}]}}},8821:(n,a,s)=>{s.r(a),s.d(a,{default:()=>c});var e=s(6252);const t=(0,e.uE)('<h1 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h1><h2 id="install-syntax-highlighting" tabindex="-1"><a class="header-anchor" href="#install-syntax-highlighting" aria-hidden="true">#</a> Install Syntax Highlighting</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>TSInstall typescript\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="install-language-server" tabindex="-1"><a class="header-anchor" href="#install-language-server" aria-hidden="true">#</a> Install Language Server</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>LspInstall tsserver\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Project root is recognized by having one of the folloing files/folders in the root directory of the project: <code>package.json</code>, <code>tsconfig.json</code>, <code>jsconfig.json</code>, <code>.git</code></p><h2 id="formatters" tabindex="-1"><a class="header-anchor" href="#formatters" aria-hidden="true">#</a> Formatters</h2><p>The configured formatter(s) must be installed separately.</p><p>Configuration in <code>~/.config/lvim/config.lua</code>:</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">-- exe value can be &quot;prettier&quot;, &quot;prettierd&quot;, &quot;eslint&quot;, or &quot;eslint_d&quot;</span>\nlvim<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>typescript<span class="token punctuation">.</span>formatters <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">{</span> exe <span class="token operator">=</span> <span class="token string">&quot;prettier&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>\nlvim<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>typescriptreact<span class="token punctuation">.</span>formatters <span class="token operator">=</span> lvim<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>typescript<span class="token punctuation">.</span>formatters\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Also combination of some prettier and eslint can be specified:</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">-- exe value can be &quot;prettier&quot;, &quot;prettierd&quot;, &quot;eslint&quot;, or &quot;eslint_d&quot;</span>\nlvim<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>typescript<span class="token punctuation">.</span>formatters <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">{</span> exe <span class="token operator">=</span> <span class="token string">&quot;eslint&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> exe <span class="token operator">=</span> <span class="token string">&quot;prettier&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>\nlvim<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>typescriptreact<span class="token punctuation">.</span>formatters <span class="token operator">=</span> lvim<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>typescript<span class="token punctuation">.</span>formatters\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>With <code>eslint</code> and <code>eslint_d</code>, the <code>--fix</code> functionality is used for formatting.</p><h2 id="linters" tabindex="-1"><a class="header-anchor" href="#linters" aria-hidden="true">#</a> Linters</h2><p>The configured linter must be installed separately.</p><p>Configuration in <code>~/.config/lvim/config.lua</code>:</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">-- exe value can be &quot;eslint&quot; or &quot;eslint_d&quot;</span>\nlvim<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>typescript<span class="token punctuation">.</span>linters <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">{</span> exe <span class="token operator">=</span> <span class="token string">&quot;eslint&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>\nlvim<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>typescriptreact<span class="token punctuation">.</span>linters <span class="token operator">=</span> lvim<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>typescript<span class="token punctuation">.</span>linters\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="lsp-settings" tabindex="-1"><a class="header-anchor" href="#lsp-settings" aria-hidden="true">#</a> LSP Settings</h2>',18),o=(0,e.Uk)("See "),p={href:"https://github.com/neovim/nvim-lspconfig/blob/master/CONFIG.md#tsserver",target:"_blank",rel:"noopener noreferrer"},i=(0,e.Uk)("nvim-lspconfig"),l=(0,e.Uk)(" for more information about the tsserver language server configuration options."),r={},c=(0,s(3744).Z)(r,[["render",function(n,a){const s=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,(0,e._)("p",null,[o,(0,e._)("a",p,[i,(0,e.Wm)(s)]),l])],64)}]])},3744:(n,a)=>{a.Z=(n,a)=>{for(const[s,e]of a)n[s]=e;return n}}}]);