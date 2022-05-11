// ==UserScript==
// @name style-json-formatter
// @namespace https://github.com/mosrur/JSON-Formatter-Userscript
// @version 1.0
// @description Hack to fix dark mode for JSON formatter extension. 
// @author Mosrur
// @include /^http(s)?\:\/\/.*\.json(\?\=.*\b)?$
// @grant GM_addStyle
// ==/UserScript==

(function() {
  'use strict';
  GM_addStyle( [ 'body { background-color: white; }' ].join(' ') );
})();
