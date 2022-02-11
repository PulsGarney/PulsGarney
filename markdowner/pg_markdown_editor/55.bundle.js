(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{13:function(e,n,t){"use strict";var r,i,o,a,u,c,s,d,f,l,g,h,p,m,v;t.d(n,"i",function(){return r}),t.d(n,"j",function(){return i}),t.d(n,"g",function(){return o}),t.d(n,"e",function(){return s}),t.d(n,"c",function(){return l}),t.d(n,"a",function(){return h}),t.d(n,"m",function(){return p}),t.d(n,"b",function(){return x}),t.d(n,"f",function(){return C}),t.d(n,"h",function(){return T}),t.d(n,"d",function(){return R}),t.d(n,"k",function(){return D}),t.d(n,"l",function(){return U}),function(e){e.create=function(e,n){return{line:e,character:n}},e.is=function(e){var n=e;return B.objectLiteral(n)&&B.number(n.line)&&B.number(n.character)}}(r||(r={})),function(e){e.create=function(e,n,t,i){if(B.number(e)&&B.number(n)&&B.number(t)&&B.number(i))return{start:r.create(e,n),end:r.create(t,i)};if(r.is(e)&&r.is(n))return{start:e,end:n};throw new Error("Range#create called with invalid arguments["+e+", "+n+", "+t+", "+i+"]")},e.is=function(e){var n=e;return B.objectLiteral(n)&&r.is(n.start)&&r.is(n.end)}}(i||(i={})),function(e){e.create=function(e,n){return{uri:e,range:n}},e.is=function(e){var n=e;return B.defined(n)&&i.is(n.range)&&(B.string(n.uri)||B.undefined(n.uri))}}(o||(o={})),function(e){e.create=function(e,n,t,r){return{red:e,green:n,blue:t,alpha:r}},e.is=function(e){var n=e;return B.number(n.red)&&B.number(n.green)&&B.number(n.blue)&&B.number(n.alpha)}}(a||(a={})),function(e){e.create=function(e,n){return{range:e,color:n}},e.is=function(e){var n=e;return i.is(n.range)&&a.is(n.color)}}(u||(u={})),function(e){e.create=function(e,n,t){return{label:e,textEdit:n,additionalTextEdits:t}},e.is=function(e){var n=e;return B.string(n.label)&&(B.undefined(n.textEdit)||p.is(n))&&(B.undefined(n.additionalTextEdits)||B.typedArray(n.additionalTextEdits,p.is))}}(c||(c={})),function(e){e.Comment="comment",e.Imports="imports",e.Region="region"}(s||(s={})),function(e){e.create=function(e,n,t,r,i){var o={startLine:e,endLine:n};return B.defined(t)&&(o.startCharacter=t),B.defined(r)&&(o.endCharacter=r),B.defined(i)&&(o.kind=i),o},e.is=function(e){var n=e;return B.number(n.startLine)&&B.number(n.startLine)&&(B.undefined(n.startCharacter)||B.number(n.startCharacter))&&(B.undefined(n.endCharacter)||B.number(n.endCharacter))&&(B.undefined(n.kind)||B.string(n.kind))}}(d||(d={})),function(e){e.create=function(e,n){return{location:e,message:n}},e.is=function(e){var n=e;return B.defined(n)&&o.is(n.location)&&B.string(n.message)}}(f||(f={})),function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4}(l||(l={})),function(e){e.create=function(e,n,t,r,i,o){var a={range:e,message:n};return B.defined(t)&&(a.severity=t),B.defined(r)&&(a.code=r),B.defined(i)&&(a.source=i),B.defined(o)&&(a.relatedInformation=o),a},e.is=function(e){var n=e;return B.defined(n)&&i.is(n.range)&&B.string(n.message)&&(B.number(n.severity)||B.undefined(n.severity))&&(B.number(n.code)||B.string(n.code)||B.undefined(n.code))&&(B.string(n.source)||B.undefined(n.source))&&(B.undefined(n.relatedInformation)||B.typedArray(n.relatedInformation,f.is))}}(g||(g={})),function(e){e.create=function(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var i={title:e,command:n};return B.defined(t)&&t.length>0&&(i.arguments=t),i},e.is=function(e){var n=e;return B.defined(n)&&B.string(n.title)&&B.string(n.command)}}(h||(h={})),function(e){e.replace=function(e,n){return{range:e,newText:n}},e.insert=function(e,n){return{range:{start:e,end:e},newText:n}},e.del=function(e){return{range:e,newText:""}},e.is=function(e){var n=e;return B.objectLiteral(n)&&B.string(n.newText)&&i.is(n.range)}}(p||(p={})),function(e){e.create=function(e,n){return{textDocument:e,edits:n}},e.is=function(e){var n=e;return B.defined(n)&&k.is(n.textDocument)&&Array.isArray(n.edits)}}(m||(m={})),function(e){e.is=function(e){var n=e;return n&&(void 0!==n.changes||void 0!==n.documentChanges)&&(void 0===n.documentChanges||B.typedArray(n.documentChanges,m.is))}}(v||(v={}));var b,k,y,_,w,x,C,E,I,T,S,M,P,R,A,D,F,O=function(){function e(e){this.edits=e}return e.prototype.insert=function(e,n){this.edits.push(p.insert(e,n))},e.prototype.replace=function(e,n){this.edits.push(p.replace(e,n))},e.prototype.delete=function(e){this.edits.push(p.del(e))},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e}();!function(){function e(e){var n=this;this._textEditChanges=Object.create(null),e&&(this._workspaceEdit=e,e.documentChanges?e.documentChanges.forEach(function(e){var t=new O(e.edits);n._textEditChanges[e.textDocument.uri]=t}):e.changes&&Object.keys(e.changes).forEach(function(t){var r=new O(e.changes[t]);n._textEditChanges[t]=r}))}Object.defineProperty(e.prototype,"edit",{get:function(){return this._workspaceEdit},enumerable:!0,configurable:!0}),e.prototype.getTextEditChange=function(e){if(k.is(e)){if(this._workspaceEdit||(this._workspaceEdit={documentChanges:[]}),!this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for versioned document changes.");var n=e;if(!(r=this._textEditChanges[n.uri])){var t={textDocument:n,edits:i=[]};this._workspaceEdit.documentChanges.push(t),r=new O(i),this._textEditChanges[n.uri]=r}return r}if(this._workspaceEdit||(this._workspaceEdit={changes:Object.create(null)}),!this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var r;if(!(r=this._textEditChanges[e])){var i=[];this._workspaceEdit.changes[e]=i,r=new O(i),this._textEditChanges[e]=r}return r}}();!function(e){e.create=function(e){return{uri:e}},e.is=function(e){var n=e;return B.defined(n)&&B.string(n.uri)}}(b||(b={})),function(e){e.create=function(e,n){return{uri:e,version:n}},e.is=function(e){var n=e;return B.defined(n)&&B.string(n.uri)&&B.number(n.version)}}(k||(k={})),function(e){e.create=function(e,n,t,r){return{uri:e,languageId:n,version:t,text:r}},e.is=function(e){var n=e;return B.defined(n)&&B.string(n.uri)&&B.string(n.languageId)&&B.number(n.version)&&B.string(n.text)}}(y||(y={})),function(e){e.PlainText="plaintext",e.Markdown="markdown"}(_||(_={})),function(e){e.is=function(n){var t=n;return t===e.PlainText||t===e.Markdown}}(_||(_={})),function(e){e.is=function(e){var n=e;return B.objectLiteral(e)&&_.is(n.kind)&&B.string(n.value)}}(w||(w={})),function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25}(x||(x={})),function(e){e.PlainText=1,e.Snippet=2}(C||(C={})),function(e){e.create=function(e){return{label:e}}}(E||(E={})),function(e){e.create=function(e,n){return{items:e||[],isIncomplete:!!n}}}(I||(I={})),function(e){e.fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},e.is=function(e){var n=e;return B.string(n)||B.objectLiteral(n)&&B.string(n.language)&&B.string(n.value)}}(T||(T={})),function(e){e.is=function(e){var n=e;return B.objectLiteral(n)&&(w.is(n.contents)||T.is(n.contents)||B.typedArray(n.contents,T.is))&&(void 0===e.range||i.is(e.range))}}(S||(S={})),function(e){e.create=function(e,n){return n?{label:e,documentation:n}:{label:e}}}(M||(M={})),function(e){e.create=function(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var i={label:e};return B.defined(n)&&(i.documentation=n),B.defined(t)?i.parameters=t:i.parameters=[],i}}(P||(P={})),function(e){e.Text=1,e.Read=2,e.Write=3}(R||(R={})),function(e){e.create=function(e,n){var t={range:e};return B.number(n)&&(t.kind=n),t}}(A||(A={})),function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26}(D||(D={})),function(e){e.create=function(e,n,t,r,i){var o={name:e,kind:n,location:{uri:r,range:t}};return i&&(o.containerName=i),o}}(F||(F={}));var L,j,W,N,H,K=function(){return function(){}}();!function(e){e.create=function(e,n,t,r,i,o){var a={name:e,detail:n,kind:t,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a},e.is=function(e){var n=e;return n&&B.string(n.name)&&B.string(n.detail)&&B.number(n.kind)&&i.is(n.range)&&i.is(n.selectionRange)&&(void 0===n.deprecated||B.boolean(n.deprecated))&&(void 0===n.children||Array.isArray(n.children))}}(K||(K={})),function(e){e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports"}(L||(L={})),function(e){e.create=function(e,n){var t={diagnostics:e};return void 0!==n&&null!==n&&(t.only=n),t},e.is=function(e){var n=e;return B.defined(n)&&B.typedArray(n.diagnostics,g.is)&&(void 0===n.only||B.typedArray(n.only,B.string))}}(j||(j={})),function(e){e.create=function(e,n,t){var r={title:e};return h.is(n)?r.command=n:r.edit=n,void 0!==t&&(r.kind=t),r},e.is=function(e){var n=e;return n&&B.string(n.title)&&(void 0===n.diagnostics||B.typedArray(n.diagnostics,g.is))&&(void 0===n.kind||B.string(n.kind))&&(void 0!==n.edit||void 0!==n.command)&&(void 0===n.command||h.is(n.command))&&(void 0===n.edit||v.is(n.edit))}}(W||(W={})),function(e){e.create=function(e,n){var t={range:e};return B.defined(n)&&(t.data=n),t},e.is=function(e){var n=e;return B.defined(n)&&i.is(n.range)&&(B.undefined(n.command)||h.is(n.command))}}(N||(N={})),function(e){e.create=function(e,n){return{tabSize:e,insertSpaces:n}},e.is=function(e){var n=e;return B.defined(n)&&B.number(n.tabSize)&&B.boolean(n.insertSpaces)}}(H||(H={}));var V=function(){return function(){}}();!function(e){e.create=function(e,n,t){return{range:e,target:n,data:t}},e.is=function(e){var n=e;return B.defined(n)&&i.is(n.range)&&(B.undefined(n.target)||B.string(n.target))}}(V||(V={}));var U,z;!function(e){e.create=function(e,n,t,r){return new q(e,n,t,r)},e.is=function(e){var n=e;return!!(B.defined(n)&&B.string(n.uri)&&(B.undefined(n.languageId)||B.string(n.languageId))&&B.number(n.lineCount)&&B.func(n.getText)&&B.func(n.positionAt)&&B.func(n.offsetAt))},e.applyEdits=function(e,n){for(var t=e.getText(),r=function e(n,t){if(n.length<=1)return n;var r=n.length/2|0,i=n.slice(0,r),o=n.slice(r);e(i,t),e(o,t);for(var a=0,u=0,c=0;a<i.length&&u<o.length;){var s=t(i[a],o[u]);n[c++]=s<=0?i[a++]:o[u++]}for(;a<i.length;)n[c++]=i[a++];for(;u<o.length;)n[c++]=o[u++];return n}(n,function(e,n){var t=e.range.start.line-n.range.start.line;return 0===t?e.range.start.character-n.range.start.character:t}),i=t.length,o=r.length-1;o>=0;o--){var a=r[o],u=e.offsetAt(a.range.start),c=e.offsetAt(a.range.end);if(!(c<=i))throw new Error("Ovelapping edit");t=t.substring(0,u)+a.newText+t.substring(c,t.length),i=u}return t}}(U||(U={})),function(e){e.Manual=1,e.AfterDelay=2,e.FocusOut=3}(z||(z={}));var B,q=function(){function e(e,n,t,r){this._uri=e,this._languageId=n,this._version=t,this._content=r,this._lineOffsets=null}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!0,configurable:!0}),e.prototype.getText=function(e){if(e){var n=this.offsetAt(e.start),t=this.offsetAt(e.end);return this._content.substring(n,t)}return this._content},e.prototype.update=function(e,n){this._content=e.text,this._version=n,this._lineOffsets=null},e.prototype.getLineOffsets=function(){if(null===this._lineOffsets){for(var e=[],n=this._content,t=!0,r=0;r<n.length;r++){t&&(e.push(r),t=!1);var i=n.charAt(r);t="\r"===i||"\n"===i,"\r"===i&&r+1<n.length&&"\n"===n.charAt(r+1)&&r++}t&&n.length>0&&e.push(n.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var n=this.getLineOffsets(),t=0,i=n.length;if(0===i)return r.create(0,e);for(;t<i;){var o=Math.floor((t+i)/2);n[o]>e?i=o:t=o+1}var a=t-1;return r.create(a,e-n[a])},e.prototype.offsetAt=function(e){var n=this.getLineOffsets();if(e.line>=n.length)return this._content.length;if(e.line<0)return 0;var t=n[e.line],r=e.line+1<n.length?n[e.line+1]:this._content.length;return Math.max(Math.min(t+e.character,r),t)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!0,configurable:!0}),e}();!function(e){var n=Object.prototype.toString;e.defined=function(e){return void 0!==e},e.undefined=function(e){return void 0===e},e.boolean=function(e){return!0===e||!1===e},e.string=function(e){return"[object String]"===n.call(e)},e.number=function(e){return"[object Number]"===n.call(e)},e.func=function(e){return"[object Function]"===n.call(e)},e.objectLiteral=function(e){return null!==e&&"object"==typeof e},e.typedArray=function(e,n){return Array.isArray(e)&&e.every(n)}}(B||(B={}))},479:function(e,n,t){"use strict";t.r(n);var r=monaco.Promise,i=function(){function e(e){var n=this;this._defaults=e,this._worker=null,this._idleCheckInterval=setInterval(function(){return n._checkIfIdle()},3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(function(){return n._stopWorker()})}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},e.prototype._checkIfIdle=function(){this._worker&&(Date.now()-this._lastUsedTime>12e4&&this._stopWorker())},e.prototype._getClient=function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=monaco.editor.createWebWorker({moduleId:"vs/language/css/cssWorker",label:this._defaults.languageId,createData:{languageSettings:this._defaults.diagnosticsOptions,languageId:this._defaults.languageId}}),this._client=this._worker.getProxy()),this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,n=this,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return function(e){var n,t,i=new r(function(e,r){n=e,t=r},function(){});return e.then(n,t),i}(this._getClient().then(function(n){e=n}).then(function(e){return n._worker.withSyncedResources(t)}).then(function(n){return e}))},e}();var o=t(13),a=monaco.Uri,u=function(){function e(e,n,t){var r=this;this._languageId=e,this._worker=n,this._disposables=[],this._listener=Object.create(null);var i=function(e){var n,t=e.getModeId();t===r._languageId&&(r._listener[e.uri.toString()]=e.onDidChangeContent(function(){clearTimeout(n),n=setTimeout(function(){return r._doValidate(e.uri,t)},500)}),r._doValidate(e.uri,t))},o=function(e){monaco.editor.setModelMarkers(e,r._languageId,[]);var n=e.uri.toString(),t=r._listener[n];t&&(t.dispose(),delete r._listener[n])};this._disposables.push(monaco.editor.onDidCreateModel(i)),this._disposables.push(monaco.editor.onWillDisposeModel(o)),this._disposables.push(monaco.editor.onDidChangeModelLanguage(function(e){o(e.model),i(e.model)})),t.onDidChange(function(e){monaco.editor.getModels().forEach(function(e){e.getModeId()===r._languageId&&(o(e),i(e))})}),this._disposables.push({dispose:function(){for(var e in r._listener)r._listener[e].dispose()}}),monaco.editor.getModels().forEach(i)}return e.prototype.dispose=function(){this._disposables.forEach(function(e){return e&&e.dispose()}),this._disposables=[]},e.prototype._doValidate=function(e,n){this._worker(e).then(function(n){return n.doValidation(e.toString())}).then(function(t){var r=t.map(function(e){return function(e,n){var t="number"==typeof n.code?String(n.code):n.code;return{severity:function(e){switch(e){case o.c.Error:return monaco.MarkerSeverity.Error;case o.c.Warning:return monaco.MarkerSeverity.Warning;case o.c.Information:return monaco.MarkerSeverity.Info;case o.c.Hint:return monaco.MarkerSeverity.Hint;default:return monaco.MarkerSeverity.Info}}(n.severity),startLineNumber:n.range.start.line+1,startColumn:n.range.start.character+1,endLineNumber:n.range.end.line+1,endColumn:n.range.end.character+1,message:n.message,code:t,source:n.source}}(0,e)}),i=monaco.editor.getModel(e);i.getModeId()===n&&monaco.editor.setModelMarkers(i,n,r)}).done(void 0,function(e){console.error(e)})},e}();function c(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function s(e){if(e)return new monaco.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function d(e){if(e)return{range:s(e.range),text:e.newText}}var f=function(){function e(e){this._worker=e}return Object.defineProperty(e.prototype,"triggerCharacters",{get:function(){return[" ",":"]},enumerable:!0,configurable:!0}),e.prototype.provideCompletionItems=function(e,n,t){e.getWordUntilPosition(n);var r=e.uri;return w(t,this._worker(r).then(function(e){return e.doComplete(r.toString(),c(n))}).then(function(e){if(e){var n=e.items.map(function(e){var n={label:e.label,insertText:e.insertText,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,kind:function(e){var n=monaco.languages.CompletionItemKind;switch(e){case o.b.Text:return n.Text;case o.b.Method:return n.Method;case o.b.Function:return n.Function;case o.b.Constructor:return n.Constructor;case o.b.Field:return n.Field;case o.b.Variable:return n.Variable;case o.b.Class:return n.Class;case o.b.Interface:return n.Interface;case o.b.Module:return n.Module;case o.b.Property:return n.Property;case o.b.Unit:return n.Unit;case o.b.Value:return n.Value;case o.b.Enum:return n.Enum;case o.b.Keyword:return n.Keyword;case o.b.Snippet:return n.Snippet;case o.b.Color:return n.Color;case o.b.File:return n.File;case o.b.Reference:return n.Reference}return n.Property}(e.kind)};return e.textEdit&&(n.range=s(e.textEdit.range),n.insertText=e.textEdit.newText),e.additionalTextEdits&&(n.additionalTextEdits=e.additionalTextEdits.map(d)),e.insertTextFormat===o.f.Snippet&&(n.insertText={value:n.insertText}),n});return{isIncomplete:e.isIncomplete,items:n}}}))},e}();function l(e){return"string"==typeof e?{value:e}:function(e){return e&&"object"==typeof e&&"string"==typeof e.kind}(e)?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"}}var g=function(){function e(e){this._worker=e}return e.prototype.provideHover=function(e,n,t){var r=e.uri;return w(t,this._worker(r).then(function(e){return e.doHover(r.toString(),c(n))}).then(function(e){if(e)return{range:s(e.range),contents:function(e){if(e)return Array.isArray(e)?e.map(l):[l(e)]}(e.contents)}}))},e}();var h=function(){function e(e){this._worker=e}return e.prototype.provideDocumentHighlights=function(e,n,t){var r=e.uri;return w(t,this._worker(r).then(function(e){return e.findDocumentHighlights(r.toString(),c(n))}).then(function(e){if(e)return e.map(function(e){return{range:s(e.range),kind:function(e){switch(e){case o.d.Read:return monaco.languages.DocumentHighlightKind.Read;case o.d.Write:return monaco.languages.DocumentHighlightKind.Write;case o.d.Text:return monaco.languages.DocumentHighlightKind.Text}return monaco.languages.DocumentHighlightKind.Text}(e.kind)}})}))},e}();function p(e){return{uri:a.parse(e.uri),range:s(e.range)}}var m=function(){function e(e){this._worker=e}return e.prototype.provideDefinition=function(e,n,t){var r=e.uri;return w(t,this._worker(r).then(function(e){return e.findDefinition(r.toString(),c(n))}).then(function(e){if(e)return[p(e)]}))},e}(),v=function(){function e(e){this._worker=e}return e.prototype.provideReferences=function(e,n,t,r){var i=e.uri;return w(r,this._worker(i).then(function(e){return e.findReferences(i.toString(),c(n))}).then(function(e){if(e)return e.map(p)}))},e}();var b=function(){function e(e){this._worker=e}return e.prototype.provideRenameEdits=function(e,n,t,r){var i=e.uri;return w(r,this._worker(i).then(function(e){return e.doRename(i.toString(),c(n),t)}).then(function(e){return function(e){if(e&&e.changes){var n=[];for(var t in e.changes){for(var r=[],i=0,o=e.changes[t];i<o.length;i++){var u=o[i];r.push({range:s(u.range),text:u.newText})}n.push({resource:a.parse(t),edits:r})}return{edits:n}}}(e)}))},e}();var k=function(){function e(e){this._worker=e}return e.prototype.provideDocumentSymbols=function(e,n){var t=e.uri;return w(n,this._worker(t).then(function(e){return e.findDocumentSymbols(t.toString())}).then(function(e){if(e)return e.map(function(e){return{name:e.name,detail:"",containerName:e.containerName,kind:function(e){var n=monaco.languages.SymbolKind;switch(e){case o.k.File:return n.Array;case o.k.Module:return n.Module;case o.k.Namespace:return n.Namespace;case o.k.Package:return n.Package;case o.k.Class:return n.Class;case o.k.Method:return n.Method;case o.k.Property:return n.Property;case o.k.Field:return n.Field;case o.k.Constructor:return n.Constructor;case o.k.Enum:return n.Enum;case o.k.Interface:return n.Interface;case o.k.Function:return n.Function;case o.k.Variable:return n.Variable;case o.k.Constant:return n.Constant;case o.k.String:return n.String;case o.k.Number:return n.Number;case o.k.Boolean:return n.Boolean;case o.k.Array:return n.Array}return n.Function}(e.kind),range:s(e.location.range),selectionRange:s(e.location.range)}})}))},e}(),y=function(){function e(e){this._worker=e}return e.prototype.provideDocumentColors=function(e,n){var t=e.uri;return w(n,this._worker(t).then(function(e){return e.findDocumentColors(t.toString())}).then(function(e){if(e)return e.map(function(e){return{color:e.color,range:s(e.range)}})}))},e.prototype.provideColorPresentations=function(e,n,t){var r=e.uri;return w(t,this._worker(r).then(function(e){return e.getColorPresentations(r.toString(),n.color,function(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}(n.range))}).then(function(e){if(e)return e.map(function(e){var n={label:e.label};return e.textEdit&&(n.textEdit=d(e.textEdit)),e.additionalTextEdits&&(n.additionalTextEdits=e.additionalTextEdits.map(d)),n})}))},e}(),_=function(){function e(e){this._worker=e}return e.prototype.provideFoldingRanges=function(e,n,t){var r=e.uri;return w(t,this._worker(r).then(function(e){return e.provideFoldingRanges(r.toString(),n)}).then(function(e){if(e)return e.map(function(e){var n={start:e.startLine+1,end:e.endLine+1};return void 0!==e.kind&&(n.kind=function(e){switch(e){case o.e.Comment:return monaco.languages.FoldingRangeKind.Comment;case o.e.Imports:return monaco.languages.FoldingRangeKind.Imports;case o.e.Region:return monaco.languages.FoldingRangeKind.Region}return}(e.kind)),n})}))},e}();function w(e,n){return e.onCancellationRequested(function(){return n.cancel()}),n}function x(e){var n=new i(e),t=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return n.getLanguageServiceWorker.apply(n,[e].concat(t))},r=e.languageId;monaco.languages.registerCompletionItemProvider(r,new f(t)),monaco.languages.registerHoverProvider(r,new g(t)),monaco.languages.registerDocumentHighlightProvider(r,new h(t)),monaco.languages.registerDefinitionProvider(r,new m(t)),monaco.languages.registerReferenceProvider(r,new v(t)),monaco.languages.registerDocumentSymbolProvider(r,new k(t)),monaco.languages.registerRenameProvider(r,new b(t)),monaco.languages.registerColorProvider(r,new y(t)),monaco.languages.registerFoldingRangeProvider(r,new _(t)),new u(r,t,e)}t.d(n,"setupMode",function(){return x})}}]);