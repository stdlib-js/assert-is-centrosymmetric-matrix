"use strict";var o=function(t,e){return function(){return e||t((e={exports:{}}).exports,e),e.exports}};var n=o(function(x,f){
var q=require('@stdlib/assert-is-square-matrix/dist'),v=require('@stdlib/math-base-special-floor/dist'),c=require('@stdlib/math-base-assert-is-odd/dist');function g(t){var e,a,s,u,i,r;if(!q(t))return!1;for(a=t.shape[0],s=v(a/2),e=a-1,i=0;i<s;i++)for(u=e-i,r=0;r<a;r++)if(t.get(i,r)!==t.get(u,e-r))return!1;if(c(a)){for(r=0;r<s;r++)if(t.get(i,r)!==t.get(s,e-r))return!1}return!0}f.exports=g
});var l=n();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
