!function(e){"use strict";var o=e.querySelector("#app"),n=new URLSearchParams(window.location.hash.replace(/^\W*/,"")),t=n.get("id_token");t&&(localStorage["ax-wizard-session"]=JSON.stringify(t),window.location.hash=""),o.displayInstalledToast=function(){e.querySelector("#caching-complete").show()},o.addEventListener("dom-change",function(){window.console.log("Our app is ready to rock!")}),window.addEventListener("WebComponentsReady",function(){}),o.onMenuSelect=function(){var o=e.querySelector("#paperDrawerPanel");o.narrow&&o.closeDrawer()},o.doLogout=function(){e.querySelector("#paperDrawerPanel").closeDrawer(),setTimeout(function(){o.logoutNow()},500)},o.logoutNow=function(){this.fire("iron-signal",{name:"ax-auth-invalidate",data:null})},o._reload=function(){window.location.reload()},o._utilCompare=function(e,o){return e===o},o._initUser=function(e,o){this.axUser=o},o.isAxPreviewMode=!1}(document);