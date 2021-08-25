(function(e){"object"===typeof module&&module.exports?(e["default"]=e,module.exports=e):"function"===typeof define&&define.amd?define("highcharts/modules/exporting",["highcharts"],function(t){e(t);e.Highcharts=t;return e}):e("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(e){function t(e,t,n,r){e.hasOwnProperty(t)||(e[t]=r.apply(null,n))}e=e?e._modules:{};t(e,"modules/full-screen.src.js",[e["parts/Globals.js"]],function(e){(e.FullScreen=function(e){this.init(e.parentNode)}).prototype={init:function(e){var t;e.requestFullscreen?t=e.requestFullscreen():e.mozRequestFullScreen?t=e.mozRequestFullScreen():e.webkitRequestFullscreen?t=e.webkitRequestFullscreen():e.msRequestFullscreen&&(t=e.msRequestFullscreen());if(t)t["catch"](function(){alert("Full screen is not supported inside a frame")})}}});t(e,"mixins/navigation.js",[],function(){return{initUpdate:function(e){e.navigation||(e.navigation={updates:[],update:function(e,t){this.updates.forEach(function(n){n.update.call(n.context,e,t)})}})},addUpdate:function(e,t){t.navigation||this.initUpdate(t);t.navigation.updates.push({update:e,context:t})}}});t(e,"modules/exporting.src.js",[e["parts/Globals.js"],e["parts/Utilities.js"],e["mixins/navigation.js"]],function(e,t,n){var r=t.isObject,i=t.objectEach;t=e.defaultOptions;var s=e.doc,o=e.Chart,u=e.addEvent,a=e.removeEvent,f=e.fireEvent,l=e.createElement,c=e.discardElement,h=e.css,p=e.merge,d=e.pick,v=e.extend,m=e.isTouchDevice,g=e.win,y=g.navigator.userAgent,b=e.SVGRenderer,w=e.Renderer.prototype.symbols,E=/Edge\/|Trident\/|MSIE /.test(y),S=/firefox/i.test(y);v(t.lang,{viewFullscreen:"View in full screen",printChart:"Print chart",downloadPNG:"Download PNG image",downloadJPEG:"Download JPEG image",downloadPDF:"Download PDF document",downloadSVG:"Download SVG vector image",contextButtonTitle:"Chart context menu"});t.navigation||(t.navigation={});p(!0,t.navigation,{buttonOptions:{theme:{},symbolSize:14,symbolX:12.5,symbolY:10.5,align:"right",buttonSpacing:3,height:22,verticalAlign:"top",width:24}});p(!0,t.navigation,{menuStyle:{border:"1px solid #999999",background:"#ffffff",padding:"5px 0"},menuItemStyle:{padding:"0.5em 1em",color:"#333333",background:"none",fontSize:m?"14px":"11px",transition:"background 250ms, color 250ms"},menuItemHoverStyle:{background:"#335cad",color:"#ffffff"},buttonOptions:{symbolFill:"#666666",symbolStroke:"#666666",symbolStrokeWidth:3,theme:{padding:5}}});t.exporting={type:"image/png",url:"https://export.highcharts.com/",printMaxWidth:780,scale:2,buttons:{contextButton:{className:"highcharts-contextbutton",menuClassName:"highcharts-contextmenu",symbol:"menu",titleKey:"contextButtonTitle",menuItems:"viewFullscreen printChart separator downloadPNG downloadJPEG downloadPDF downloadSVG".split(" ")}},menuItemDefinitions:{viewFullscreen:{textKey:"viewFullscreen",onclick:function(){this.fullscreen=new e.FullScreen(this.container)}},printChart:{textKey:"printChart",onclick:function(){this.print()}},separator:{separator:!0},downloadPNG:{textKey:"downloadPNG",onclick:function(){this.exportChart()}},downloadJPEG:{textKey:"downloadJPEG",onclick:function(){this.exportChart({type:"image/jpeg"})}},downloadPDF:{textKey:"downloadPDF",onclick:function(){this.exportChart({type:"application/pdf"})}},downloadSVG:{textKey:"downloadSVG",onclick:function(){this.exportChart({type:"image/svg+xml"})}}}};e.post=function(e,t,n){var r=l("form",p({method:"post",action:e,enctype:"multipart/form-data"},n),{display:"none"},s.body);i(t,function(e,t){l("input",{type:"hidden",name:t,value:e},null,r)});r.submit();c(r)};v(o.prototype,{sanitizeSVG:function(e,t){var n=e.indexOf("</svg>")+6,r=e.substr(n);e=e.substr(0,n);t&&t.exporting&&t.exporting.allowHTML&&r&&(r='<foreignObject x="0" y="0" width="'+t.chart.width+'" height="'+t.chart.height+'"><body xmlns="http://www.w3.org/1999/xhtml">'+r+"</body></foreignObject>",e=e.replace("</svg>",r+"</svg>"));e=e.replace(/zIndex="[^"]+"/g,"").replace(/symbolName="[^"]+"/g,"").replace(/jQuery[0-9]+="[^"]+"/g,"").replace(/url\(("|&quot;)(.*?)("|&quot;);?\)/g,"url($2)").replace(/url\([^#]+#/g,"url(#").replace(/<svg /,'<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ (|NS[0-9]+:)href=/g," xlink:href=").replace(/\n/," ").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g,'$1="rgb($2)" $1-opacity="$3"').replace(/&nbsp;/g," ").replace(/&shy;/g,"­");this.ieSanitizeSVG&&(e=this.ieSanitizeSVG(e));return e},getChartHTML:function(){this.styledMode&&this.inlineStyles();return this.container.innerHTML},getSVG:function(t){var n,r=p(this.options,t);r.plotOptions=p(this.userOptions.plotOptions,t&&t.plotOptions);var i=l("div",null,{position:"absolute",top:"-9999em",width:this.chartWidth+"px",height:this.chartHeight+"px"},s.body);var o=this.renderTo.style.width;var u=this.renderTo.style.height;o=r.exporting.sourceWidth||r.chart.width||/px$/.test(o)&&parseInt(o,10)||(r.isGantt?800:600);u=r.exporting.sourceHeight||r.chart.height||/px$/.test(u)&&parseInt(u,10)||400;v(r.chart,{animation:!1,renderTo:i,forExport:!0,renderer:"SVGRenderer",width:o,height:u});r.exporting.enabled=!1;delete r.data;r.series=[];this.series.forEach(function(e){n=p(e.userOptions,{animation:!1,enableMouseTracking:!1,showCheckbox:!1,visible:e.visible});n.isInternal||r.series.push(n)});this.axes.forEach(function(t){t.userOptions.internalKey||(t.userOptions.internalKey=e.uniqueKey())});var a=new e.Chart(r,this.callback);t&&["xAxis","yAxis","series"].forEach(function(e){var n={};t[e]&&(n[e]=t[e],a.update(n))});this.axes.forEach(function(t){var n=e.find(a.axes,function(e){return e.options.internalKey===t.userOptions.internalKey}),r=t.getExtremes(),i=r.userMin;r=r.userMax;n&&(void 0!==i&&i!==n.min||void 0!==r&&r!==n.max)&&n.setExtremes(i,r,!0,!1)});o=a.getChartHTML();f(this,"getSVG",{chartCopy:a});o=this.sanitizeSVG(o,r);r=null;a.destroy();c(i);return o},getSVGForExport:function(e,t){var n=this.options.exporting;return this.getSVG(p({chart:{borderRadius:0}},n.chartOptions,t,{exporting:{sourceWidth:e&&e.sourceWidth||n.sourceWidth,sourceHeight:e&&e.sourceHeight||n.sourceHeight}}))},getFilename:function(){var e=this.userOptions.title&&this.userOptions.title.text,t=this.options.exporting.filename;if(t)return t;"string"===typeof e&&(t=e.toLowerCase().replace(/<\/?[^>]+(>|$)/g,"").replace(/[\s_]+/g,"-").replace(/[^a-z0-9\-]/g,"").replace(/^[\-]+/g,"").replace(/[\-]+/g,"-").substr(0,24).replace(/[\-]+$/g,""));if(!t||5>t.length)t="chart";return t},exportChart:function(t,n){n=this.getSVGForExport(t,n);t=p(this.options.exporting,t);e.post(t.url,{filename:t.filename||this.getFilename(),type:t.type,width:t.width||0,scale:t.scale,svg:n},t.formAttributes)},print:function(){function e(e){(t.fixedDiv?[t.fixedDiv,t.scrollingContainer]:[t.container]).forEach(function(t){e.appendChild(t)})}var t=this,n=[],r=s.body,i=r.childNodes,o=t.options.exporting.printMaxWidth,u;if(!t.isPrinting){t.isPrinting=!0;t.pointer.reset(null,0);f(t,"beforePrint");if(u=o&&t.chartWidth>o){var a=[t.options.chart.width,void 0,!1];t.setSize(o,void 0,!1)}[].forEach.call(i,function(e,t){1===e.nodeType&&(n[t]=e.style.display,e.style.display="none")});e(r);setTimeout(function(){g.focus();g.print();setTimeout(function(){e(t.renderTo);[].forEach.call(i,function(e,t){1===e.nodeType&&(e.style.display=n[t])});t.isPrinting=!1;u&&t.setSize.apply(t,a);f(t,"afterPrint")},1e3)},1)}},contextMenu:function(t,n,i,o,a,c,p){var d=this,m=d.options.navigation,y=d.chartWidth,b=d.chartHeight,w="cache-"+t,E=d[w],S=Math.max(a,c);if(!E){d.exportContextMenu=d[w]=E=l("div",{className:t},{position:"absolute",zIndex:1e3,padding:S+"px",pointerEvents:"auto"},d.fixedDiv||d.container);var T=l("div",{className:"highcharts-menu"},null,E);d.styledMode||h(T,v({MozBoxShadow:"3px 3px 10px #888",WebkitBoxShadow:"3px 3px 10px #888",boxShadow:"3px 3px 10px #888"},m.menuStyle));E.hideMenu=function(){h(E,{display:"none"});p&&p.setState(0);d.openMenu=!1;h(d.renderTo,{overflow:"hidden"});e.clearTimeout(E.hideTimer);f(d,"exportMenuHidden")};d.exportEvents.push(u(E,"mouseleave",function(){E.hideTimer=g.setTimeout(E.hideMenu,500)}),u(E,"mouseenter",function(){e.clearTimeout(E.hideTimer)}),u(s,"mouseup",function(e){d.pointer.inClass(e.target,t)||E.hideMenu()}),u(E,"click",function(){d.openMenu&&E.hideMenu()}));n.forEach(function(e){"string"===typeof e&&(e=d.options.exporting.menuItemDefinitions[e]);if(r(e,!0)){if(e.separator)var t=l("hr",null,null,T);else t=l("div",{className:"highcharts-menu-item",onclick:function(t){t&&t.stopPropagation();E.hideMenu();e.onclick&&e.onclick.apply(d,arguments)},innerHTML:e.text||d.options.lang[e.textKey]},null,T),d.styledMode||(t.onmouseover=function(){h(this,m.menuItemHoverStyle)},t.onmouseout=function(){h(this,m.menuItemStyle)},h(t,v({cursor:"pointer"},m.menuItemStyle)));d.exportDivElements.push(t)}});d.exportDivElements.push(T,E);d.exportMenuWidth=E.offsetWidth;d.exportMenuHeight=E.offsetHeight}n={display:"block"};i+d.exportMenuWidth>y?n.right=y-i-a-S+"px":n.left=i-S+"px";o+c+d.exportMenuHeight>b&&"top"!==p.alignOptions.verticalAlign?n.bottom=b-o-S+"px":n.top=o+c-S+"px";h(E,n);h(d.renderTo,{overflow:""});d.openMenu=!0},addButton:function(e){var t=this,n=t.renderer,r=p(t.options.navigation.buttonOptions,e),i=r.onclick,s=r.menuItems,o=r.symbolSize||12;t.btnCount||(t.btnCount=0);t.exportDivElements||(t.exportDivElements=[],t.exportSVGElements=[]);if(!1!==r.enabled){var u=r.theme,a=u.states,f=a&&a.hover;a=a&&a.select;var l;t.styledMode||(u.fill=d(u.fill,"#ffffff"),u.stroke=d(u.stroke,"none"));delete u.states;i?l=function(e){e&&e.stopPropagation();i.call(t,e)}:s&&(l=function(e){e&&e.stopPropagation();t.contextMenu(c.menuClassName,s,c.translateX,c.translateY,c.width,c.height,c);c.setState(2)});r.text&&r.symbol?u.paddingLeft=d(u.paddingLeft,25):r.text||v(u,{width:r.width,height:r.height,padding:0});t.styledMode||(u["stroke-linecap"]="round",u.fill=d(u.fill,"#ffffff"),u.stroke=d(u.stroke,"none"));var c=n.button(r.text,0,0,l,u,f,a).addClass(e.className).attr({title:d(t.options.lang[r._titleKey||r.titleKey],"")});c.menuClassName=e.menuClassName||"highcharts-menu-"+t.btnCount++;if(r.symbol){var h=n.symbol(r.symbol,r.symbolX-o/2,r.symbolY-o/2,o,o,{width:o,height:o}).addClass("highcharts-button-symbol").attr({zIndex:1}).add(c);t.styledMode||h.attr({stroke:r.symbolStroke,fill:r.symbolFill,"stroke-width":r.symbolStrokeWidth||1})}c.add(t.exportingGroup).align(v(r,{width:c.width,x:d(r.x,t.buttonOffset)}),!0,"spacingBox");t.buttonOffset+=(c.width+r.buttonSpacing)*("right"===r.align?-1:1);t.exportSVGElements.push(c,h)}},destroyExport:function(t){var n=t?t.target:this;t=n.exportSVGElements;var r=n.exportDivElements,i=n.exportEvents,s;t&&(t.forEach(function(e,t){e&&(e.onclick=e.ontouchstart=null,s="cache-"+e.menuClassName,n[s]&&delete n[s],n.exportSVGElements[t]=e.destroy())}),t.length=0);n.exportingGroup&&(n.exportingGroup.destroy(),delete n.exportingGroup);r&&(r.forEach(function(t,r){e.clearTimeout(t.hideTimer);a(t,"mouseleave");n.exportDivElements[r]=t.onmouseout=t.onmouseover=t.ontouchstart=t.onclick=null;c(t)}),r.length=0);i&&(i.forEach(function(e){e()}),i.length=0)}});b.prototype.inlineToAttributes="fill stroke strokeLinecap strokeLinejoin strokeWidth textAnchor x y".split(" ");b.prototype.inlineBlacklist=[/-/,/^(clipPath|cssText|d|height|width)$/,/^font$/,/[lL]ogical(Width|Height)$/,/perspective/,/TapHighlightColor/,/^transition/,/^length$/];b.prototype.unstyledElements=["clipPath","defs","desc"];o.prototype.inlineStyles=function(){function e(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()})}function t(n){function s(t,i){d=v=!1;if(u){for(m=u.length;m--&&!v;)v=u[m].test(i);d=!v}"transform"===i&&"none"===t&&(d=!0);for(m=o.length;m--&&!d;)d=o[m].test(i)||"function"===typeof t;d||b[i]===t&&"svg"!==n.nodeName||f[n.nodeName][i]===t||(-1!==r.indexOf(i)?n.setAttribute(e(i),t):h+=e(i)+":"+t+";")}var h="",d,v,m;if(1===n.nodeType&&-1===a.indexOf(n.nodeName)){var y=g.getComputedStyle(n,null);var b="svg"===n.nodeName?{}:g.getComputedStyle(n.parentNode,null);if(!f[n.nodeName]){l=c.getElementsByTagName("svg")[0];var w=c.createElementNS(n.namespaceURI,n.nodeName);l.appendChild(w);f[n.nodeName]=p(g.getComputedStyle(w,null));"text"===n.nodeName&&delete f.text.fill;l.removeChild(w)}if(S||E)for(var x in y)s(y[x],x);else i(y,s);h&&(y=n.getAttribute("style"),n.setAttribute("style",(y?y+";":"")+h));"svg"===n.nodeName&&n.setAttribute("stroke-width","1px");"text"!==n.nodeName&&[].forEach.call(n.children||n.childNodes,t)}}var n=this.renderer,r=n.inlineToAttributes,o=n.inlineBlacklist,u=n.inlineWhitelist,a=n.unstyledElements,f={},l;n=s.createElement("iframe");h(n,{width:"1px",height:"1px",visibility:"hidden"});s.body.appendChild(n);var c=n.contentWindow.document;c.open();c.write('<svg xmlns="http://www.w3.org/2000/svg"></svg>');c.close();t(this.container.querySelector("svg"));l.parentNode.removeChild(l)};w.menu=function(e,t,n,r){return["M",e,t+2.5,"L",e+n,t+2.5,"M",e,t+r/2+.5,"L",e+n,t+r/2+.5,"M",e,t+r-1.5,"L",e+n,t+r-1.5]};w.menuball=function(e,t,n,r){e=[];r=r/3-2;return e=e.concat(this.circle(n-r,t,r,r),this.circle(n-r,t+r+4,r,r),this.circle(n-r,t+2*(r+4),r,r))};o.prototype.renderExporting=function(){var e=this,t=e.options.exporting,n=t.buttons,r=e.isDirtyExporting||!e.exportSVGElements;e.buttonOffset=0;e.isDirtyExporting&&e.destroyExport();r&&!1!==t.enabled&&(e.exportEvents=[],e.exportingGroup=e.exportingGroup||e.renderer.g("exporting-group").attr({zIndex:3}).add(),i(n,function(t){e.addButton(t)}),e.isDirtyExporting=!1);u(e,"destroy",e.destroyExport)};u(o,"init",function(){var e=this;e.exporting={update:function(t,n){e.isDirtyExporting=!0;p(!0,e.options.exporting,t);d(n,!0)&&e.redraw()}};n.addUpdate(function(t,n){e.isDirtyExporting=!0;p(!0,e.options.navigation,t);d(n,!0)&&e.redraw()},e)});o.prototype.callbacks.push(function(e){e.renderExporting();u(e,"redraw",e.renderExporting)})});t(e,"masters/modules/exporting.src.js",[],function(){})})