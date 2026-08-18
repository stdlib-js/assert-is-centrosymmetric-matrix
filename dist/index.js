"use strict";var o=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var n=o(function(x,f){
var q=require('@stdlib/assert-is-square-matrix/dist'),v=require('@stdlib/math-base-special-floor/dist'),c=require('@stdlib/math-base-assert-is-odd/dist');function g(t){var r,i,s,u,a,e;if(!q(t))return!1;for(i=t.shape[0],s=v(i/2),r=i-1,a=0;a<s;a++)for(u=r-a,e=0;e<i;e++)if(t.get(a,e)!==t.get(u,r-e))return!1;if(c(i)){for(e=0;e<s;e++)if(t.get(a,e)!==t.get(s,r-e))return!1}return!0}f.exports=g
});var l=n();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
