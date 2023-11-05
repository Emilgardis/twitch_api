(function() {var type_impls = {
"twitch_api":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Request%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.9/src/http/request.rs.html#423\">source</a><a href=\"#impl-Request%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"struct\" href=\"https://docs.rs/http/0.2.9/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.9/src/http/request.rs.html#439\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/http/0.2.9/http/request/struct.Request.html#tymethod.new\" class=\"fn\">new</a>(body: T) -&gt; <a class=\"struct\" href=\"https://docs.rs/http/0.2.9/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new blank <code>Request</code> with the body</p>\n<p>The component parts of this request will be set to their default, e.g.\nthe GET method, no headers, etc.</p>\n<h5 id=\"examples\"><a href=\"#examples\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>request = Request::new(<span class=\"string\">&quot;hello world&quot;</span>);\n\n<span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">*</span>request.method(), Method::GET);\n<span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">*</span>request.body(), <span class=\"string\">&quot;hello world&quot;</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_parts\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.9/src/http/request.rs.html#459\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/http/0.2.9/http/request/struct.Request.html#tymethod.from_parts\" class=\"fn\">from_parts</a>(parts: <a class=\"struct\" href=\"https://docs.rs/http/0.2.9/http/request/struct.Parts.html\" title=\"struct http::request::Parts\">Parts</a>, body: T) -&gt; <a class=\"struct\" href=\"https://docs.rs/http/0.2.9/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new <code>Request</code> with the given components parts and body.</p>\n<h5 id=\"examples-1\"><a href=\"#examples-1\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>request = Request::new(<span class=\"string\">&quot;hello world&quot;</span>);\n<span class=\"kw\">let </span>(<span class=\"kw-2\">mut </span>parts, body) = request.into_parts();\nparts.method = Method::POST;\n\n<span class=\"kw\">let </span>request = Request::from_parts(parts, body);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.method\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.9/src/http/request.rs.html#476\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/http/0.2.9/http/request/struct.Request.html#tymethod.method\" class=\"fn\">method</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"https://docs.rs/http/0.2.9/http/method/struct.Method.html\" title=\"struct http::method::Method\">Method</a></h4></section></summary><div class=\"docblock\"><p>Returns a reference to the associated HTTP method.</p>\n<h5 id=\"examples-2\"><a href=\"#examples-2\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>request: Request&lt;()&gt; = Request::default();\n<span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">*</span>request.method(), Method::GET);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.method_mut\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.9/src/http/request.rs.html#491\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/http/0.2.9/http/request/struct.Request.html#tymethod.method_mut\" class=\"fn\">method_mut</a>(&amp;mut self) -&gt; &amp;mut <a class=\"struct\" href=\"https://docs.rs/http/0.2.9/http/method/struct.Method.html\" title=\"struct http::method::Method\">Method</a></h4></section></summary><div class=\"docblock\"><p>Returns a mutable reference to the associated HTTP method.</p>\n<h5 id=\"examples-3\"><a href=\"#examples-3\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span><span class=\"kw-2\">mut </span>request: Request&lt;()&gt; = Request::default();\n<span class=\"kw-2\">*</span>request.method_mut() = Method::PUT;\n<span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">*</span>request.method(), Method::PUT);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.uri\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.9/src/http/request.rs.html#505\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/http/0.2.9/http/request/struct.Request.html#tymethod.uri\" class=\"fn\">uri</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"https://docs.rs/http/0.2.9/http/uri/struct.Uri.html\" title=\"struct http::uri::Uri\">Uri</a></h4></section></summary><div class=\"docblock\"><p>Returns a reference to the associated URI.</p>\n<h5 id=\"examples-4\"><a href=\"#examples-4\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>request: Request&lt;()&gt; = Request::default();\n<span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">*</span>request.uri(), <span class=\"kw-2\">*</span><span class=\"string\">&quot;/&quot;</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.uri_mut\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.9/src/http/request.rs.html#520\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/http/0.2.9/http/request/struct.Request.html#tymethod.uri_mut\" class=\"fn\">uri_mut</a>(&amp;mut self) -&gt; &amp;mut <a class=\"struct\" href=\"https://docs.rs/http/0.2.9/http/uri/struct.Uri.html\" title=\"struct http::uri::Uri\">Uri</a></h4></section></summary><div class=\"docblock\"><p>Returns a mutable reference to the associated URI.</p>\n<h5 id=\"examples-5\"><a href=\"#examples-5\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span><span class=\"kw-2\">mut </span>request: Request&lt;()&gt; = Request::default();\n<span class=\"kw-2\">*</span>request.uri_mut() = <span class=\"string\">&quot;/hello&quot;</span>.parse().unwrap();\n<span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">*</span>request.uri(), <span class=\"kw-2\">*</span><span class=\"string\">&quot;/hello&quot;</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.version\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.9/src/http/request.rs.html#534\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/http/0.2.9/http/request/struct.Request.html#tymethod.version\" class=\"fn\">version</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://docs.rs/http/0.2.9/http/version/struct.Version.html\" title=\"struct http::version::Version\">Version</a></h4></section></summary><div class=\"docblock\"><p>Returns the associated version.</p>\n<h5 id=\"examples-6\"><a href=\"#examples-6\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>request: Request&lt;()&gt; = Request::default();\n<span class=\"macro\">assert_eq!</span>(request.version(), Version::HTTP_11);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.version_mut\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.9/src/http/request.rs.html#549\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/http/0.2.9/http/request/struct.Request.html#tymethod.version_mut\" class=\"fn\">version_mut</a>(&amp;mut self) -&gt; &amp;mut <a class=\"struct\" href=\"https://docs.rs/http/0.2.9/http/version/struct.Version.html\" title=\"struct http::version::Version\">Version</a></h4></section></summary><div class=\"docblock\"><p>Returns a mutable reference to the associated version.</p>\n<h5 id=\"examples-7\"><a href=\"#examples-7\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span><span class=\"kw-2\">mut </span>request: Request&lt;()&gt; = Request::default();\n<span class=\"kw-2\">*</span>request.version_mut() = Version::HTTP_2;\n<span class=\"macro\">assert_eq!</span>(request.version(), Version::HTTP_2);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.headers\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.9/src/http/request.rs.html#563\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/http/0.2.9/http/request/struct.Request.html#tymethod.headers\" class=\"fn\">headers</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"https://docs.rs/http/0.2.9/http/header/map/struct.HeaderMap.html\" title=\"struct http::header::map::HeaderMap\">HeaderMap</a></h4></section></summary><div class=\"docblock\"><p>Returns a reference to the associated header field map.</p>\n<h5 id=\"examples-8\"><a href=\"#examples-8\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>request: Request&lt;()&gt; = Request::default();\n<span class=\"macro\">assert!</span>(request.headers().is_empty());</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.headers_mut\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.9/src/http/request.rs.html#579\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/http/0.2.9/http/request/struct.Request.html#tymethod.headers_mut\" class=\"fn\">headers_mut</a>(&amp;mut self) -&gt; &amp;mut <a class=\"struct\" href=\"https://docs.rs/http/0.2.9/http/header/map/struct.HeaderMap.html\" title=\"struct http::header::map::HeaderMap\">HeaderMap</a></h4></section></summary><div class=\"docblock\"><p>Returns a mutable reference to the associated header field map.</p>\n<h5 id=\"examples-9\"><a href=\"#examples-9\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span><span class=\"kw-2\">mut </span>request: Request&lt;()&gt; = Request::default();\nrequest.headers_mut().insert(HOST, HeaderValue::from_static(<span class=\"string\">&quot;world&quot;</span>));\n<span class=\"macro\">assert!</span>(!request.headers().is_empty());</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.extensions\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.9/src/http/request.rs.html#593\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/http/0.2.9/http/request/struct.Request.html#tymethod.extensions\" class=\"fn\">extensions</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"https://docs.rs/http/0.2.9/http/extensions/struct.Extensions.html\" title=\"struct http::extensions::Extensions\">Extensions</a></h4></section></summary><div class=\"docblock\"><p>Returns a reference to the associated extensions.</p>\n<h5 id=\"examples-10\"><a href=\"#examples-10\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>request: Request&lt;()&gt; = Request::default();\n<span class=\"macro\">assert!</span>(request.extensions().get::&lt;i32&gt;().is_none());</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.extensions_mut\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.9/src/http/request.rs.html#609\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/http/0.2.9/http/request/struct.Request.html#tymethod.extensions_mut\" class=\"fn\">extensions_mut</a>(&amp;mut self) -&gt; &amp;mut <a class=\"struct\" href=\"https://docs.rs/http/0.2.9/http/extensions/struct.Extensions.html\" title=\"struct http::extensions::Extensions\">Extensions</a></h4></section></summary><div class=\"docblock\"><p>Returns a mutable reference to the associated extensions.</p>\n<h5 id=\"examples-11\"><a href=\"#examples-11\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span><span class=\"kw-2\">mut </span>request: Request&lt;()&gt; = Request::default();\nrequest.extensions_mut().insert(<span class=\"string\">&quot;hello&quot;</span>);\n<span class=\"macro\">assert_eq!</span>(request.extensions().get(), <span class=\"prelude-val\">Some</span>(<span class=\"kw-2\">&amp;</span><span class=\"string\">&quot;hello&quot;</span>));</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.body\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.9/src/http/request.rs.html#623\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/http/0.2.9/http/request/struct.Request.html#tymethod.body\" class=\"fn\">body</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;T</a></h4></section></summary><div class=\"docblock\"><p>Returns a reference to the associated HTTP body.</p>\n<h5 id=\"examples-12\"><a href=\"#examples-12\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>request: Request&lt;String&gt; = Request::default();\n<span class=\"macro\">assert!</span>(request.body().is_empty());</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.body_mut\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.9/src/http/request.rs.html#638\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/http/0.2.9/http/request/struct.Request.html#tymethod.body_mut\" class=\"fn\">body_mut</a>(&amp;mut self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut T</a></h4></section></summary><div class=\"docblock\"><p>Returns a mutable reference to the associated HTTP body.</p>\n<h5 id=\"examples-13\"><a href=\"#examples-13\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span><span class=\"kw-2\">mut </span>request: Request&lt;String&gt; = Request::default();\nrequest.body_mut().push_str(<span class=\"string\">&quot;hello world&quot;</span>);\n<span class=\"macro\">assert!</span>(!request.body().is_empty());</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_body\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.9/src/http/request.rs.html#653\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/http/0.2.9/http/request/struct.Request.html#tymethod.into_body\" class=\"fn\">into_body</a>(self) -&gt; T</h4></section></summary><div class=\"docblock\"><p>Consumes the request, returning just the body.</p>\n<h5 id=\"examples-14\"><a href=\"#examples-14\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>request = Request::new(<span class=\"number\">10</span>);\n<span class=\"kw\">let </span>body = request.into_body();\n<span class=\"macro\">assert_eq!</span>(body, <span class=\"number\">10</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_parts\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.9/src/http/request.rs.html#668\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/http/0.2.9/http/request/struct.Request.html#tymethod.into_parts\" class=\"fn\">into_parts</a>(self) -&gt; (<a class=\"struct\" href=\"https://docs.rs/http/0.2.9/http/request/struct.Parts.html\" title=\"struct http::request::Parts\">Parts</a>, T)</h4></section></summary><div class=\"docblock\"><p>Consumes the request returning the head and body parts.</p>\n<h5 id=\"examples-15\"><a href=\"#examples-15\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>request = Request::new(());\n<span class=\"kw\">let </span>(parts, body) = request.into_parts();\n<span class=\"macro\">assert_eq!</span>(parts.method, Method::GET);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.map\" class=\"method\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.9/src/http/request.rs.html#687-689\">source</a><h4 class=\"code-header\">pub fn <a href=\"https://docs.rs/http/0.2.9/http/request/struct.Request.html#tymethod.map\" class=\"fn\">map</a>&lt;F, U&gt;(self, f: F) -&gt; <a class=\"struct\" href=\"https://docs.rs/http/0.2.9/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;U&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(T) -&gt; U,</span></h4></section></summary><div class=\"docblock\"><p>Consumes the request returning a new request with body mapped to the\nreturn type of the passed in function.</p>\n<h5 id=\"examples-16\"><a href=\"#examples-16\">Examples</a></h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>request = Request::builder().body(<span class=\"string\">&quot;some string&quot;</span>).unwrap();\n<span class=\"kw\">let </span>mapped_request: Request&lt;<span class=\"kw-2\">&amp;</span>[u8]&gt; = request.map(|b| {\n  <span class=\"macro\">assert_eq!</span>(b, <span class=\"string\">&quot;some string&quot;</span>);\n  b.as_bytes()\n});\n<span class=\"macro\">assert_eq!</span>(mapped_request.body(), <span class=\"kw-2\">&amp;</span><span class=\"string\">&quot;some string&quot;</span>.as_bytes());</code></pre></div>\n</div></details></div></details>",0,"twitch_api::client::Request"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-Request%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.9/src/http/request.rs.html#698\">source</a><a href=\"#impl-Default-for-Request%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"https://docs.rs/http/0.2.9/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.9/src/http/request.rs.html#699\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"https://docs.rs/http/0.2.9/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;T&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","twitch_api::client::Request"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Request%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.9/src/http/request.rs.html#704\">source</a><a href=\"#impl-Debug-for-Request%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"https://docs.rs/http/0.2.9/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/http/0.2.9/src/http/request.rs.html#705\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","twitch_api::client::Request"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-HttpBody-for-Request%3CB%3E\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/http-body/0.4.5/src/http_body/lib.rs.html#223\">source</a><a href=\"#impl-HttpBody-for-Request%3CB%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B&gt; <a class=\"trait\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a> for <a class=\"struct\" href=\"https://docs.rs/http/0.2.9/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;B&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Data\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Data\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html#associatedtype.Data\" class=\"associatedtype\">Data</a> = &lt;B as <a class=\"trait\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html#associatedtype.Data\" title=\"type http_body::Body::Data\">Data</a></h4></section></summary><div class='docblock'>Values yielded by the <code>Body</code>.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = &lt;B as <a class=\"trait\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a></h4></section></summary><div class='docblock'>The error type this <code>Body</code> might generate.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.poll_data\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/http-body/0.4.5/src/http_body/lib.rs.html#227-230\">source</a><a href=\"#method.poll_data\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html#tymethod.poll_data\" class=\"fn\">poll_data</a>(\n    self: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;&amp;mut <a class=\"struct\" href=\"https://docs.rs/http/0.2.9/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;B&gt;&gt;,\n    cx: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/task/wake/struct.Context.html\" title=\"struct core::task::wake::Context\">Context</a>&lt;'_&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/task/poll/enum.Poll.html\" title=\"enum core::task::poll::Poll\">Poll</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.9/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;B&gt; as <a class=\"trait\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html#associatedtype.Data\" title=\"type http_body::Body::Data\">Data</a>, &lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.9/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;B&gt; as <a class=\"trait\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>&gt;&gt;&gt;</h4></section></summary><div class='docblock'>Attempt to pull out the next data buffer of this stream.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.poll_trailers\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/http-body/0.4.5/src/http_body/lib.rs.html#237-240\">source</a><a href=\"#method.poll_trailers\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html#tymethod.poll_trailers\" class=\"fn\">poll_trailers</a>(\n    self: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;&amp;mut <a class=\"struct\" href=\"https://docs.rs/http/0.2.9/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;B&gt;&gt;,\n    cx: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/task/wake/struct.Context.html\" title=\"struct core::task::wake::Context\">Context</a>&lt;'_&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/task/poll/enum.Poll.html\" title=\"enum core::task::poll::Poll\">Poll</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.9/http/header/map/struct.HeaderMap.html\" title=\"struct http::header::map::HeaderMap\">HeaderMap</a>&gt;, &lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.9/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;B&gt; as <a class=\"trait\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>&gt;&gt;</h4></section></summary><div class='docblock'>Poll for an optional <strong>single</strong> <code>HeaderMap</code> of trailers. <a href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html#tymethod.poll_trailers\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_end_stream\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/http-body/0.4.5/src/http_body/lib.rs.html#247\">source</a><a href=\"#method.is_end_stream\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html#method.is_end_stream\" class=\"fn\">is_end_stream</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Returns <code>true</code> when the end of stream has been reached. <a href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html#method.is_end_stream\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.size_hint\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/http-body/0.4.5/src/http_body/lib.rs.html#251\">source</a><a href=\"#method.size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html#method.size_hint\" class=\"fn\">size_hint</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://docs.rs/http-body/0.4.5/http_body/size_hint/struct.SizeHint.html\" title=\"struct http_body::size_hint::SizeHint\">SizeHint</a></h4></section></summary><div class='docblock'>Returns the bounds on the remaining length of the stream. <a href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html#method.size_hint\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.map_data\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/http-body/0.4.5/src/http_body/lib.rs.html#103-107\">source</a><a href=\"#method.map_data\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html#method.map_data\" class=\"fn\">map_data</a>&lt;F, B&gt;(self, f: F) -&gt; <a class=\"struct\" href=\"https://docs.rs/http-body/0.4.5/http_body/combinators/map_data/struct.MapData.html\" title=\"struct http_body::combinators::map_data::MapData\">MapData</a>&lt;Self, F&gt;<span class=\"where fmt-newline\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(Self::<a class=\"associatedtype\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html#associatedtype.Data\" title=\"type http_body::Body::Data\">Data</a>) -&gt; B,\n    B: Buf,</span></h4></section></summary><div class='docblock'>Maps this body’s data value to a different value.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.map_err\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/http-body/0.4.5/src/http_body/lib.rs.html#113-116\">source</a><a href=\"#method.map_err\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html#method.map_err\" class=\"fn\">map_err</a>&lt;F, E&gt;(self, f: F) -&gt; <a class=\"struct\" href=\"https://docs.rs/http-body/0.4.5/http_body/combinators/map_err/struct.MapErr.html\" title=\"struct http_body::combinators::map_err::MapErr\">MapErr</a>&lt;Self, F&gt;<span class=\"where fmt-newline\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(Self::<a class=\"associatedtype\" href=\"https://docs.rs/http-body/0.4.5/http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>) -&gt; E,</span></h4></section></summary><div class='docblock'>Maps this body’s error value to a different value.</div></details></div></details>","Body","twitch_api::client::Request"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RequestExt%3CT%3E-for-Request%3CT%3E\" class=\"impl\"><a href=\"#impl-RequestExt%3CT%3E-for-Request%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; RequestExt&lt;T&gt; for <a class=\"struct\" href=\"https://docs.rs/http/0.2.9/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_builder\" class=\"method trait-impl\"><a href=\"#method.to_builder\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">to_builder</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://docs.rs/http/0.2.9/http/request/struct.Builder.html\" title=\"struct http::request::Builder\">Builder</a></h4></section></summary><div class='docblock'>Create a new request builder with the method, URI, and headers cloned\nfrom this request. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.send\" class=\"method trait-impl\"><a href=\"#method.send\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">send</a>(self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.9/http/response/struct.Response.html\" title=\"struct http::response::Response\">Response</a>&lt;Body&gt;, Error&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;Body&gt;,</span></h4></section></summary><div class='docblock'>Send the HTTP request synchronously using the default client. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.send_async\" class=\"method trait-impl\"><a href=\"#method.send_async\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">send_async</a>(self) -&gt; ResponseFuture&lt;'static&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;Body&gt;,</span></h4></section></summary><div class='docblock'>Sends the HTTP request asynchronously using the default client. <a>Read more</a></div></details></div></details>","RequestExt<T>","twitch_api::client::Request"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RequestExt-for-Request%3CBuffer%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/twitch_api/client.rs.html#157-171\">source</a><a href=\"#impl-RequestExt-for-Request%3CBuffer%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Buffer&gt; <a class=\"trait\" href=\"twitch_api/client/trait.RequestExt.html\" title=\"trait twitch_api::client::RequestExt\">RequestExt</a> for <a class=\"struct\" href=\"https://docs.rs/http/0.2.9/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;Buffer&gt;<span class=\"where fmt-newline\">where\n    Buffer: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"twitch_api/client/struct.Body.html\" title=\"struct twitch_api::client::Body\">Body</a>&gt;,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"twitch_api/client/trait.RequestExt.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"struct\" href=\"https://docs.rs/hyper/0.14.27/hyper/error/struct.Error.html\" title=\"struct hyper::error::Error\">Error</a></h4></section></summary><div class='docblock'>Error returned</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_request_vec\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/twitch_api/client.rs.html#163-170\">source</a><a href=\"#method.into_request_vec\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"twitch_api/client/trait.RequestExt.html#tymethod.into_request_vec\" class=\"fn\">into_request_vec</a>&lt;'a&gt;(\n    self\n) -&gt; <a class=\"type\" href=\"twitch_api/client/type.BoxedFuture.html\" title=\"type twitch_api::client::BoxedFuture\">BoxedFuture</a>&lt;'a, <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.9/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;&gt;, Self::<a class=\"associatedtype\" href=\"twitch_api/client/trait.RequestExt.html#associatedtype.Error\" title=\"type twitch_api::client::RequestExt::Error\">Error</a>&gt;&gt;</h4></section></summary><div class='docblock'>Return the body as a vector of bytes</div></details></div></details>","RequestExt","twitch_api::client::Request"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()