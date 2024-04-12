// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-square-matrix@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-odd@v0.2.1-esm/index.mjs";function r(r){var i,d,m,n,o,a;if(!t(r))return!1;for(d=r.shape[0],m=s(d/2),i=d-1,o=0;o<m;o++)for(n=i-o,a=0;a<d;a++)if(r.get(o,a)!==r.get(n,i-a))return!1;if(e(d))for(a=0;a<m;a++)if(r.get(o,a)!==r.get(m,i-a))return!1;return!0}export{r as default};
//# sourceMappingURL=index.mjs.map
