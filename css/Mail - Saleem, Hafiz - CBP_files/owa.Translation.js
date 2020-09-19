self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.Translation.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[587],{10341:function(e,t,n){"use strict";n.r(t);var a="-",r=4;function u(e){if(0===(e=e.toLowerCase()).lastIndexOf("zh-",0))switch(e){case"zh-cht":case"zh-hant":case"zh-hk":case"zh-tw":return"zh-cht";default:return"zh-chs"}var t=e.indexOf(a,1);if(-1===t)return e;var n=e.indexOf(a,t+a.length);return-1===n&&(n=e.length),n-t==a.length+r&&(t=n),e.substring(0,t)}var s=n(4),o=n(428),i=Object(s.createStore)("TranslationStore",{sessionId:Object(o.a)(),localeOfSupportedLanguageMap:null,supportedLanguageMap:null,isUserLocaleSupported:!1,userLanguageName:null,userLanguageTag:null})();function c(e){return!!i.supportedLanguageMap&&i.supportedLanguageMap.has(e)}function g(e,t){void 0===t&&(t=null);var n=u(e);if(!c(n))return!1;if(null!=t){var a=u(t);return!!c(a)&&n!==a}return!0}var l=n(0),d=n(76),p=n(4586),f=n(3593),O=Object(s.mutatorAction)("setTargetLanguage",(function(e,t){e.targetLanguage=t})),h=Object(s.mutatorAction)("setTranslationMode",(function(e,t){e.translationMode=t}));var L="https://ogma.osi.office.net",v="/TradukoApi/api/v1.0/translateContentArray",b="/TradukoApi/api/v1.0/supportedLanguages",T="/TradukoApi/api/v1.0/detectLanguage",j="ows/api/v1/translation/translateText",m="ows/api/v1/translation/getSupportedLanguages";function w(e){return m+"?clientLocale="+e}var S=n(2),M=i.sessionId,_=Object(S.i)(),x=Object(S.j)();function A(e,t){return!!(t&&M&&_&&x)&&(e.setRequestHeader("Content-type","application/json"),e.setRequestHeader("Accept","application/json, text/plain, */*"),e.setRequestHeader("x-translator-sid",M),e.setRequestHeader("x-translator-cross-sid",M),e.setRequestHeader("x-translator-cid",t),e.setRequestHeader("x-translator-user-id",_),e.setRequestHeader("x-translator-client-version",x),e.setRequestHeader("x-translator-client-app","Outlook"),e.setRequestHeader("x-translator-client-type","Browser"),!0)}var G=n(103),y=i.sessionId,E=Object(G.i)().SessionSettings.UserPuid,R=Object(S.j)();function q(e){if(e&&y&&E&&R)return{"x-translator-sid":y,"x-translator-cross-sid":y,"x-translator-cid":e,"x-translator-user-id":E,"x-translator-client-version":R}}var I=n(287),N=3e4;function H(e,t){return Object(l.__awaiter)(this,void 0,void 0,(function(){return Object(l.__generator)(this,(function(n){return[2,new Promise((function(n,a){Object(d.h)("rp-inlineTranslation-UseOWS")?function(e,t,n,a){Object(l.__awaiter)(this,void 0,void 0,(function(){var r,s,o,i,c,g,d,p;return Object(l.__generator)(this,(function(l){switch(l.label){case 0:if(!(r=q(t)))return[3,5];s=u(e),o=!1,i=setTimeout((function(){o=!0,a("Request timed out")}),N),l.label=1;case 1:return l.trys.push([1,3,,4]),[4,Object(I.b)(w(s),t,!1,r,!0)];case 2:return c=l.sent(),o||(clearTimeout(i),(g=D(c))?n(g):a("OWS OGMA returned invalid response: "+c)),[3,4];case 3:return d=l.sent(),p=(null==d?void 0:d.message)?d.message:"",a("getSupportedLanguagesOWS failed:"+p),[3,4];case 4:return[3,6];case 5:a("getSupportedLanguagesOWS failed: headers were not set."),l.label=6;case 6:return[2]}}))}))}(e,t,n,a):function(e,t,n,a){var r=new XMLHttpRequest;r.timeout=N,r.onload=function(){if(200===r.status)if(this.responseText){var e=D(JSON.parse(this.responseText));e?n(e):a("OGMA returned invalid response: "+this.response)}else a("OGMA returned invalid response: "+this.response);else a("OGMA failed to retrieve supported languages: "+this.response)},r.onerror=function(){a("OGMA call failed: "+this.response)},r.ontimeout=function(){a("OGMA call timed out")};var s=u(e);r.open("GET",function(e){return""+L+b+"?clientLocale="+e}(s)),A(r,t)?r.send():a("getSupportedLanguagesOgma failed: headers were not set. ")}(e,t,n,a)}))]}))}))}function D(e){try{var t=new Map;return e.forEach((function(e){t.set(e.LanguageTag,e)})),t}catch(e){return null}}var U=n(26),W=Object(s.mutatorAction)("setSupportedLanguageMap",(function(e,t){var n=u(e),a=t.get(n);a?(i.localeOfSupportedLanguageMap=e,i.userLanguageName=a.LanguageName,i.userLanguageTag=n,i.supportedLanguageMap=t,i.isUserLocaleSupported=g(e)):i.isUserLocaleSupported=!1})),z=n(255),C=15e3,k=0,P=C;function J(){return Object(l.__awaiter)(this,void 0,void 0,(function(){var e,t,n,a,r,u,s;return Object(l.__generator)(this,(function(g){switch(g.label){case 0:if(e=Object(U.a)().SessionSettings.UserCulture,t=Date.now(),l=Object(f.a)(),Object(d.h)("rp-inlineTranslationAutomatic")||l.translationMode!==p.a.Automatic||h(l,p.a.Suggest),Object(d.h)("rp-inlineTranslation-targetLanguage")||null===l.targetLanguage||O(l,null),e===i.localeOfSupportedLanguageMap||!(0===k||t>k+P))return[3,5];n=null,a=Object(o.a)(),r=new z.a("InlineTranslationGetSupportedLanguages"),g.label=1;case 1:return g.trys.push([1,3,,4]),[4,H(e,a)];case 2:return n=g.sent(),k=0,P=C,r.end(),[3,4];case 3:throw u=g.sent(),s=new Error("[InlineTranslation] getSupportedLanguages failed. Error:"+u+" | cid:"+a),k=t,P*=2,r.endWithError("ServerError",s),u;case 4:return W(e,n),function(){var e=Object(f.a)();null===e.targetLanguage||c(e.targetLanguage)||(e.targetLanguage=null)}(),[2,!0];case 5:return[2,!1]}var l}))}))}function X(){return Object(l.__awaiter)(this,void 0,void 0,(function(){return Object(l.__generator)(this,(function(e){switch(e.label){case 0:return[4,J()];case 1:return e.sent(),[2,i.supportedLanguageMap]}}))}))}function $(){return i.localeOfSupportedLanguageMap}function B(e,t){return Object(l.__awaiter)(this,void 0,void 0,(function(){return Object(l.__generator)(this,(function(n){return[2,new Promise((function(n,a){var r=new XMLHttpRequest;r.onload=function(){if(200===r.status){var e=JSON.parse(this.responseText);e?n(e):a("OGMA returned invalid response: "+this.response)}else a("OGMA failed to detect email language: "+this.response)},r.onerror=function(){a("OGMA call failed: "+this.response)},r.open("POST",""+L+T),A(r,t)?r.send(JSON.stringify(e)):a("getOgmaDetectedLanguage failed: headers were not set. ")}))]}))}))}var F=1e4;function K(e){return Object(l.__awaiter)(this,void 0,void 0,(function(){var t,n,a,r,u,s;return Object(l.__generator)(this,(function(i){switch(i.label){case 0:t=Object(o.a)(),n=null,a=new z.a("InlineTranslationGetDetectedLanguage"),i.label=1;case 1:return i.trys.push([1,3,,4]),(r=e.join(" ")).length>F&&(r=r.substring(0,F)),[4,B(r,t)];case 2:return n=i.sent(),a.end(),[3,4];case 3:return u=i.sent(),s=new Error("[InlineTranslation] getOgmaDetectedLanguage failed. Error:"+u+" | cid:"+t),a.endWithError("ServerError",s),[3,4];case 4:return[2,n]}}))}))}function Q(e){return i.supportedLanguageMap.has(e)?i.supportedLanguageMap.get(e).LanguageName:null}function V(){return i.userLanguageName}function Y(){return i.userLanguageTag}function Z(){var e=Object(f.a)();return e.targetLanguage?Q(e.targetLanguage):V()}function ee(){var e=Object(f.a)();return e.targetLanguage?e.targetLanguage:i.userLanguageTag}function te(){return i.isUserLocaleSupported}var ne=3e4;function ae(e,t,n){return Object(l.__awaiter)(this,void 0,void 0,(function(){return Object(l.__generator)(this,(function(a){return[2,new Promise((function(a,r){Object(d.h)("rp-inlineTranslation-UseOWS")?function(e,t,n,a,r){Object(l.__awaiter)(this,void 0,void 0,(function(){var u,s,o,i,c;return Object(l.__generator)(this,(function(g){switch(g.label){case 0:if(!(u=q(n)))return[3,5];s=!1,o=setTimeout((function(){s=!0,r("Request timed out")}),ne),g.label=1;case 1:return g.trys.push([1,3,,4]),[4,Object(I.d)((l=t,j+"?toLang="+l),e,n,!1,u,!0)];case 2:return i=g.sent(),s||(clearTimeout(o),null!=i?a(re(i)):r("OGMA returned invalid response: "+i)),[3,4];case 3:return c=g.sent(),r("translateTextOWS failed:"+c.message),[3,4];case 4:return[3,6];case 5:r("translateTextOWS failed: headers were not set."),g.label=6;case 6:return[2]}var l}))}))}(e,t,n,a,r):function(e,t,n,a,r){var u=new XMLHttpRequest;u.timeout=ne,u.onload=function(){if(200===u.status){var e=JSON.parse(this.responseText);null!=e?a(re(e)):r("OGMA returned invalid response: "+this.response)}else r("OGMA failed to translate messaage: "+this.response)},u.onerror=function(){r("OGMA call failed: "+this.response)},u.ontimeout=function(){r("OGMA call timed out")},u.open("POST",function(e){return""+L+v+"?fromLang=&toLang="+e}(t)),A(u,n)?u.send(function(e){var t=[];return e.forEach((function(e){var n={Data:e,DataType:"html"};t.push(n)})),JSON.stringify(t)}(e)):r("getSupportedLanguagesOgma failed: headers were not set. ")}(e,t,n,a,r)}))]}))}))}function re(e){var t=[];return e.forEach((function(e){t.push(e.TranslatedText)})),t}var ue=n(960);function se(e,t){return Object(l.__awaiter)(this,void 0,void 0,(function(){return Object(l.__generator)(this,(function(n){switch(n.label){case 0:return e.translationMode!==t.translationMode&&Object(z.o)("InlineTranslationChangeTranslationMode",[],{cosmosOnlyData:t.translationMode.toString()}),e.targetLanguage!==t.targetLanguage&&Object(z.o)("InlineTranslationChangeTargetLanguage",[],{cosmosOnlyData:t.targetLanguage?t.targetLanguage:"none"}),t.excludedLanguages.forEach((function(t){e.excludedLanguages.includes(t)||Object(z.o)("InlineTranslationOptOutOfLanguage",[],{cosmosOnlyData:t})})),e.excludedLanguages.forEach((function(e){t.excludedLanguages.includes(e)||Object(z.o)("InlineTranslationRemoveOptOutOfLanguage",[],{cosmosOnlyData:e})})),[4,ue.e.importAndExecute(ue.a.Translation,t)];case 1:return n.sent(),[2]}}))}))}n.d(t,"checkCanTranslate",(function(){return g})),n.d(t,"initSupportedLanguages",(function(){return J})),n.d(t,"initAndGetSupportedLanguageMap",(function(){return X})),n.d(t,"getLocaleOfSupportedLanguageMap",(function(){return $})),n.d(t,"getOgmaSupportedLanguageTag",(function(){return u})),n.d(t,"getDetectedLanguage",(function(){return K})),n.d(t,"getLanguageNameFromTag",(function(){return Q})),n.d(t,"getUserLanguageName",(function(){return V})),n.d(t,"getUserLanguageTag",(function(){return Y})),n.d(t,"getTargetLanguageName",(function(){return Z})),n.d(t,"getTargetLanguageTag",(function(){return ee})),n.d(t,"getIsUserLocaleSupported",(function(){return te})),n.d(t,"translateText",(function(){return ae})),n.d(t,"updateTranslationOptions",(function(){return se}))}}]);
//# sourceMappingURL=owa.Translation.js.map
self.scriptsLoaded['owa.Translation.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.Translation.js'] = (new Date()).getTime();