// ==UserScript== 
// @name style-json-formatter 
// @namespace https://github.com/mosrur/JSON-Formatter-Userscript/
// @version 1.0
// @description Hack to fix dark mode for JSON formatter extension. 
// @author Mosrur 2022-05-11 12:30:36 PM 
// @include /^http(s)?\:\/\/.*\.json(\?\=.*\b)?$ 
// @grant none
// ==/UserScript== 

(function() { 'use strict'; 
  GM_addStyle( [ 'body { background-color: white; }' ].join(' ') ); 
})();
