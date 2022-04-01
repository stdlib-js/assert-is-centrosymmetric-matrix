// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-square-matrix@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-odd@esm/index.mjs";var r=t,i=s,a=e;var d=function(t){var s,e,d,m,n,o;if(!r(t))return!1;for(e=t.shape[0],d=i(e/2),s=e-1,n=0;n<d;n++)for(m=s-n,o=0;o<e;o++)if(t.get(n,o)!==t.get(m,s-o))return!1;if(a(e))for(o=0;o<d;o++)if(t.get(n,o)!==t.get(d,s-o))return!1;return!0};export{d as default};
//# sourceMappingURL=index.mjs.map
