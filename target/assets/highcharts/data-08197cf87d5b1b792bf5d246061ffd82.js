(function(e){"object"===typeof module&&module.exports?(e["default"]=e,module.exports=e):"function"===typeof define&&define.amd?define("highcharts/modules/data",["highcharts"],function(t){e(t);e.Highcharts=t;return e}):e("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(e){function t(e,t,n,r){e.hasOwnProperty(t)||(e[t]=r.apply(null,n))}e=e?e._modules:{};t(e,"mixins/ajax.js",[e["parts/Globals.js"],e["parts/Utilities.js"]],function(e,t){var n=t.objectEach;e.ajax=function(t){var r=e.merge(!0,{url:!1,type:"get",dataType:"json",success:!1,error:!1,data:!1,headers:{}},t);t={json:"application/json",xml:"application/xml",text:"text/plain",octet:"application/octet-stream"};var i=new XMLHttpRequest;if(!r.url)return!1;i.open(r.type.toUpperCase(),r.url,!0);r.headers["Content-Type"]||i.setRequestHeader("Content-Type",t[r.dataType]||t.text);n(r.headers,function(e,t){i.setRequestHeader(t,e)});i.onreadystatechange=function(){if(4===i.readyState){if(200===i.status){var e=i.responseText;if("json"===r.dataType)try{e=JSON.parse(e)}catch(t){r.error&&r.error(i,t);return}return r.success&&r.success(e)}r.error&&r.error(i,i.responseText)}};try{r.data=JSON.stringify(r.data)}catch(s){}i.send(r.data||!0)};e.getJSON=function(t,n){e.ajax({url:t,success:n,dataType:"json",headers:{"Content-Type":"text/plain"}})}});t(e,"modules/data.src.js",[e["parts/Globals.js"],e["parts/Utilities.js"]],function(e,t){var n=t.defined,r=t.isNumber,i=t.objectEach,s=t.splat;t=e.addEvent;var o=e.Chart,u=e.win.document,a=e.pick,f=e.merge,l=e.fireEvent,c=function(e,t,n){this.init(e,t,n)};e.extend(c.prototype,{init:function(e,t,n){var r=e.decimalPoint;t&&(this.chartOptions=t);n&&(this.chart=n);"."!==r&&","!==r&&(r=void 0);this.options=e;this.columns=e.columns||this.rowsToColumns(e.rows)||[];this.firstRowAsNames=a(e.firstRowAsNames,this.firstRowAsNames,!0);this.decimalRegex=r&&new RegExp("^(-?[0-9]+)"+r+"([0-9]+)$");this.rawColumns=[];if(this.columns.length){this.dataFound();var i=!0}this.hasURLOption(e)&&(clearTimeout(this.liveDataTimeout),i=!1);i||(i=this.fetchLiveData());i||(i=!!this.parseCSV().length);i||(i=!!this.parseTable().length);i||(i=this.parseGoogleSpreadsheet());!i&&e.afterComplete&&e.afterComplete()},hasURLOption:function(e){return!(!e||!(e.rowsURL||e.csvURL||e.columnsURL))},getColumnDistribution:function(){var t=this.chartOptions,r=this.options,s=[],o=function(t){return(e.seriesTypes[t||"line"].prototype.pointArrayMap||[0]).length},u=t&&t.chart&&t.chart.type,a=[],f=[],l=0;r=r&&r.seriesMapping||t&&t.series&&t.series.map(function(){return{x:0}})||[];var c;(t&&t.series||[]).forEach(function(e){a.push(o(e.type||u))});r.forEach(function(e){s.push(e.x||0)});0===s.length&&s.push(0);r.forEach(function(r){var s=new h,p=a[l]||o(u),d=(t&&t.series||[])[l]||{},v=e.seriesTypes[d.type||u||"line"].prototype.pointArrayMap,w=v||["y"];(n(r.x)||d.isCartesian||!v)&&s.addColumnReader(r.x,"x");i(r,function(e,t){"x"!==t&&s.addColumnReader(e,t)});for(c=0;c<p;c++)s.hasReader(w[c])||s.addColumnReader(void 0,w[c]);f.push(s);l++});r=e.seriesTypes[u||"line"].prototype.pointArrayMap;void 0===r&&(r=["y"]);this.valueCount={global:o(u),xColumns:s,individual:a,seriesBuilders:f,globalPointArrayMap:r}},dataFound:function(){this.options.switchRowsAndColumns&&(this.columns=this.rowsToColumns(this.columns));this.getColumnDistribution();this.parseTypes();!1!==this.parsed()&&this.complete()},parseCSV:function(e){function t(e,t,n,r){function i(t){l=e[t];c=e[t-1];p=e[t+1]}function s(e){h.length<y+1&&h.push([e]);h[y][h[y].length-1]!==e&&h[y].push(e)}function o(){a>g||g>f?(++g,m=""):(!isNaN(parseFloat(m))&&isFinite(m)?(m=parseFloat(m),s("number")):isNaN(Date.parse(m))?s("string"):(m=m.replace(/\//g,"-"),s("date")),d.length<y+1&&d.push([]),n||(d[y][t]=m),m="",++y,++g)}var u=0,l="",c="",p="",m="",g=0,y=0;if(e.trim().length&&"#"!==e.trim()[0]){for(;u<e.length;u++){i(u);if("#"===l){o();return}if('"'===l)for(i(++u);u<e.length&&('"'!==l||'"'===c||'"'===p);){if('"'!==l||'"'===l&&'"'!==c)m+=l;i(++u)}else r&&r[l]?r[l](l,m)&&o():l===v?o():m+=l}o()}}function n(e){var t=0,n=0,r=!1;e.some(function(e,r){var i=!1,s="";if(13<r)return!0;for(var o=0;o<e.length;o++){r=e[o];var u=e[o+1];var a=e[o-1];if("#"===r)break;if('"'===r)if(i){if('"'!==a&&'"'!==u){for(;" "===u&&o<e.length;)u=e[++o];"undefined"!==typeof p[u]&&p[u]++;i=!1}}else i=!0;else"undefined"!==typeof p[r]?(s=s.trim(),isNaN(Date.parse(s))?!isNaN(s)&&isFinite(s)||p[r]++:p[r]++,s=""):s+=r;","===r&&n++;"."===r&&t++}});r=p[";"]>p[","]?";":",";s.decimalPoint||(s.decimalPoint=t>n?".":",",i.decimalRegex=new RegExp("^(-?[0-9]+)"+s.decimalPoint+"([0-9]+)$"));return r}function r(e,t){var n=[],r=0,o=!1,u=[],a=[],f;if(!t||t>e.length)t=e.length;for(;r<t;r++)if("undefined"!==typeof e[r]&&e[r]&&e[r].length){var c=e[r].trim().replace(/\//g," ").replace(/\-/g," ").replace(/\./g," ").split(" ");n=["","",""];for(f=0;f<c.length;f++)f<n.length&&(c[f]=parseInt(c[f],10),c[f]&&(a[f]=!a[f]||a[f]<c[f]?c[f]:a[f],"undefined"!==typeof u[f]?u[f]!==c[f]&&(u[f]=!1):u[f]=c[f],31<c[f]?n[f]=100>c[f]?"YY":"YYYY":12<c[f]&&31>=c[f]?(n[f]="dd",o=!0):n[f].length||(n[f]="mm")))}if(o){for(f=0;f<u.length;f++)!1!==u[f]?12<a[f]&&"YY"!==n[f]&&"YYYY"!==n[f]&&(n[f]="YY"):12<a[f]&&"mm"===n[f]&&(n[f]="dd");3===n.length&&"dd"===n[1]&&"dd"===n[2]&&(n[2]="YY");e=n.join("/");return(s.dateFormats||i.dateFormats)[e]?e:(l("deduceDateFailed"),"YYYY/mm/dd")}return"YYYY/mm/dd"}var i=this,s=e||this.options,o=s.csv;e="undefined"!==typeof s.startRow&&s.startRow?s.startRow:0;var u=s.endRow||Number.MAX_VALUE,a="undefined"!==typeof s.startColumn&&s.startColumn?s.startColumn:0,f=s.endColumn||Number.MAX_VALUE,c=0,h=[],p={",":0,";":0,"	":0};var d=this.columns=[];o&&s.beforeParse&&(o=s.beforeParse.call(this,o));if(o){o=o.replace(/\r\n/g,"\n").replace(/\r/g,"\n").split(s.lineDelimiter||"\n");if(!e||0>e)e=0;if(!u||u>=o.length)u=o.length-1;if(s.itemDelimiter)var v=s.itemDelimiter;else v=null,v=n(o);var m=0;for(c=e;c<=u;c++)"#"===o[c][0]?m++:t(o[c],c-e-m);s.columnTypes&&0!==s.columnTypes.length||!h.length||!h[0].length||"date"!==h[0][1]||s.dateFormat||(s.dateFormat=r(d[0]));this.dataFound()}return d},parseTable:function(){var e=this.options,t=e.table,n=this.columns,r=e.startRow||0,i=e.endRow||Number.MAX_VALUE,s=e.startColumn||0,o=e.endColumn||Number.MAX_VALUE;t&&("string"===typeof t&&(t=u.getElementById(t)),[].forEach.call(t.getElementsByTagName("tr"),function(e,t){t>=r&&t<=i&&[].forEach.call(e.children,function(e,i){("TD"===e.tagName||"TH"===e.tagName)&&i>=s&&i<=o&&(n[i-s]||(n[i-s]=[]),n[i-s][t-r]=e.innerHTML)})}),this.dataFound());return n},fetchLiveData:function(){function t(f){function l(a,l,c){function h(){o&&r.liveDataURL===a&&(n.liveDataTimeout=setTimeout(t,u))}if(!a||0!==a.indexOf("http"))return a&&i.error&&i.error("Invalid URL"),!1;f&&(clearTimeout(n.liveDataTimeout),r.liveDataURL=a);e.ajax({url:a,dataType:c||"json",success:function(e){r&&r.series&&l(e);h()},error:function(e,t){3>++s&&h();return i.error&&i.error(t,e)}});return!0}l(a.csvURL,function(e){r.update({data:{csv:e}})},"text")||l(a.rowsURL,function(e){r.update({data:{rows:e}})})||l(a.columnsURL,function(e){r.update({data:{columns:e}})})}var n=this,r=this.chart,i=this.options,s=0,o=i.enablePolling,u=1e3*(i.dataRefreshRate||2),a=f(i);if(!this.hasURLOption(i))return!1;1e3>u&&(u=1e3);delete i.csvURL;delete i.rowsURL;delete i.columnsURL;t(!0);return this.hasURLOption(i)},parseGoogleSpreadsheet:function(){function t(n){var s=["https://spreadsheets.google.com/feeds/cells",i,o,"public/values?alt=json"].join("/");e.ajax({url:s,dataType:"json",success:function(e){n(e);r.enablePolling&&setTimeout(function(){t(n)},1e3*(r.dataRefreshRate||2))},error:function(e,t){return r.error&&r.error(t,e)}})}var n=this,r=this.options,i=r.googleSpreadsheetKey,s=this.chart,o=r.googleSpreadsheetWorksheet||1,u=r.startRow||0,a=r.endRow||Number.MAX_VALUE,f=r.startColumn||0,l=r.endColumn||Number.MAX_VALUE,c=1e3*(r.dataRefreshRate||2);4e3>c&&(c=4e3);i&&(delete r.googleSpreadsheetKey,t(function(e){var t=[];e=e.feed.entry;var r=(e||[]).length,i=0,o;if(!e||0===e.length)return!1;for(o=0;o<r;o++){var c=e[o];i=Math.max(i,c.gs$cell.col)}for(o=0;o<i;o++)o>=f&&o<=l&&(t[o-f]=[]);for(o=0;o<r;o++){c=e[o];i=c.gs$cell.row-1;var h=c.gs$cell.col-1;if(h>=f&&h<=l&&i>=u&&i<=a){var p=c.gs$cell||c.content;c=null;p.numericValue?c=0<=p.$t.indexOf("/")||0<=p.$t.indexOf("-")?p.$t:0<p.$t.indexOf("%")?100*parseFloat(p.numericValue):parseFloat(p.numericValue):p.$t&&p.$t.length&&(c=p.$t);t[h-f][i-u]=c}}t.forEach(function(e){for(o=0;o<e.length;o++)void 0===e[o]&&(e[o]=null)});s&&s.series?s.update({data:{columns:t}}):(n.columns=t,n.dataFound())}));return!1},trim:function(e,t){"string"===typeof e&&(e=e.replace(/^\s+|\s+$/g,""),t&&/^[0-9\s]+$/.test(e)&&(e=e.replace(/\s/g,"")),this.decimalRegex&&(e=e.replace(this.decimalRegex,"$1.$2")));return e},parseTypes:function(){for(var e=this.columns,t=e.length;t--;)this.parseColumn(e[t],t)},parseColumn:function(e,t){var n=this.rawColumns,i=this.columns,o=e.length,u=this.firstRowAsNames,a=-1!==this.valueCount.xColumns.indexOf(t),f,l=[],c=this.chartOptions,h,p=(this.options.columnTypes||[])[t];c=a&&(c&&c.xAxis&&"category"===s(c.xAxis)[0].type||"string"===p);for(n[t]||(n[t]=[]);o--;){var d=l[o]||e[o];var m=this.trim(d);var g=this.trim(d,!0);var y=parseFloat(g);void 0===n[t][o]&&(n[t][o]=m);c||0===o&&u?e[o]=""+m:+g===y?(e[o]=y,31536e6<y&&"float"!==p?e.isDatetime=!0:e.isNumeric=!0,void 0!==e[o+1]&&(h=y>e[o+1])):(m&&m.length&&(f=this.parseDate(d)),a&&r(f)&&"float"!==p?(l[o]=d,e[o]=f,e.isDatetime=!0,void 0!==e[o+1]&&(d=f>e[o+1],d!==h&&void 0!==h&&(this.alternativeFormat?(this.dateFormat=this.alternativeFormat,o=e.length,this.alternativeFormat=this.dateFormats[this.dateFormat].alternative):e.unsorted=!0),h=d)):(e[o]=""===m?null:m,0!==o&&(e.isDatetime||e.isNumeric)&&(e.mixed=!0)))}a&&e.mixed&&(i[t]=n[t]);if(a&&h&&this.options.sort)for(t=0;t<i.length;t++)i[t].reverse(),u&&i[t].unshift(i[t].pop())},dateFormats:{"YYYY/mm/dd":{regex:/^([0-9]{4})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{1,2})$/,parser:function(e){return Date.UTC(+e[1],e[2]-1,+e[3])}},"dd/mm/YYYY":{regex:/^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{4})$/,parser:function(e){return Date.UTC(+e[3],e[2]-1,+e[1])},alternative:"mm/dd/YYYY"},"mm/dd/YYYY":{regex:/^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{4})$/,parser:function(e){return Date.UTC(+e[3],e[1]-1,+e[2])}},"dd/mm/YY":{regex:/^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{2})$/,parser:function(e){var t=+e[3];t=t>(new Date).getFullYear()-2e3?t+1900:t+2e3;return Date.UTC(t,e[2]-1,+e[1])},alternative:"mm/dd/YY"},"mm/dd/YY":{regex:/^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{2})$/,parser:function(e){return Date.UTC(+e[3]+2e3,e[1]-1,+e[2])}}},parseDate:function(e){var t=this.options.parseDate,n,i=this.options.dateFormat||this.dateFormat,s;if(t)var o=t(e);else if("string"===typeof e){if(i)(t=this.dateFormats[i])||(t=this.dateFormats["YYYY/mm/dd"]),(s=e.match(t.regex))&&(o=t.parser(s));else for(n in this.dateFormats)if(t=this.dateFormats[n],s=e.match(t.regex)){this.dateFormat=n;this.alternativeFormat=t.alternative;o=t.parser(s);break}s||(s=Date.parse(e),"object"===typeof s&&null!==s&&s.getTime?o=s.getTime()-6e4*s.getTimezoneOffset():r(s)&&(o=s-6e4*(new Date(s)).getTimezoneOffset()))}return o},rowsToColumns:function(e){var t,n;if(e){var r=[];var i=e.length;for(t=0;t<i;t++){var s=e[t].length;for(n=0;n<s;n++)r[n]||(r[n]=[]),r[n][t]=e[t][n]}}return r},getData:function(){if(this.columns)return this.rowsToColumns(this.columns).slice(1)},parsed:function(){if(this.options.parsed)return this.options.parsed.call(this,this.columns)},getFreeIndexes:function(e,t){var n,r=[],i=[];for(n=0;n<e;n+=1)r.push(!0);for(e=0;e<t.length;e+=1){var s=t[e].getReferencedColumnIndexes();for(n=0;n<s.length;n+=1)r[s[n]]=!1}for(n=0;n<r.length;n+=1)r[n]&&i.push(n);return i},complete:function(){var e=this.columns,t,n=this.options,r,i,s=[];if(n.complete||n.afterComplete){if(this.firstRowAsNames)for(r=0;r<e.length;r++)e[r].name=e[r].shift();var o=[];var u=this.getFreeIndexes(e.length,this.valueCount.seriesBuilders);for(r=0;r<this.valueCount.seriesBuilders.length;r++){var a=this.valueCount.seriesBuilders[r];a.populateColumns(u)&&s.push(a)}for(;0<u.length;){a=new h;a.addColumnReader(0,"x");r=u.indexOf(0);-1!==r&&u.splice(r,1);for(r=0;r<this.valueCount.global;r++)a.addColumnReader(void 0,this.valueCount.globalPointArrayMap[r]);a.populateColumns(u)&&s.push(a)}0<s.length&&0<s[0].readers.length&&(a=e[s[0].readers[0].columnIndex],void 0!==a&&(a.isDatetime?t="datetime":a.isNumeric||(t="category")));if("category"===t)for(r=0;r<s.length;r++)for(a=s[r],u=0;u<a.readers.length;u++)"x"===a.readers[u].configName&&(a.readers[u].configName="name");for(r=0;r<s.length;r++){a=s[r];u=[];for(i=0;i<e[0].length;i++)u[i]=a.read(e,i);o[r]={data:u};a.name&&(o[r].name=a.name);"category"===t&&(o[r].turboThreshold=0)}e={series:o};t&&(e.xAxis={type:t},"category"===t&&(e.xAxis.uniqueNames=!1));n.complete&&n.complete(e);n.afterComplete&&n.afterComplete(e)}},update:function(e,t){var n=this.chart;e&&(e.afterComplete=function(e){e&&(e.xAxis&&n.xAxis[0]&&e.xAxis.type===n.xAxis[0].options.type&&delete e.xAxis,n.update(e,t,!0))},f(!0,n.options.data,e),this.init(n.options.data))}});e.Data=c;e.data=function(e,t,n){return new c(e,t,n)};t(o,"init",function(t){var n=this,r=t.args[0]||{},i=t.args[1];r&&r.data&&!n.hasDataDef&&(n.hasDataDef=!0,n.data=new c(e.extend(r.data,{afterComplete:function(e){var t;if(Object.hasOwnProperty.call(r,"series"))if("object"===typeof r.series)for(t=Math.max(r.series.length,e&&e.series?e.series.length:0);t--;){var s=r.series[t]||{};r.series[t]=f(s,e&&e.series?e.series[t]:{})}else delete r.series;r=f(e,r);n.init(r,i)}}),r,n),t.preventDefault())});var h=function(){this.readers=[];this.pointIsArray=!0};h.prototype.populateColumns=function(e){var t=!0;this.readers.forEach(function(t){void 0===t.columnIndex&&(t.columnIndex=e.shift())});this.readers.forEach(function(e){void 0===e.columnIndex&&(t=!1)});return t};h.prototype.read=function(t,n){var r=this.pointIsArray,i=r?[]:{};this.readers.forEach(function(s){var o=t[s.columnIndex][n];r?i.push(o):0<s.configName.indexOf(".")?e.Point.prototype.setNestedProperty(i,o,s.configName):i[s.configName]=o});if(void 0===this.name&&2<=this.readers.length){var s=this.getReferencedColumnIndexes();2<=s.length&&(s.shift(),s.sort(function(e,t){return e-t}),this.name=t[s.shift()].name)}return i};h.prototype.addColumnReader=function(e,t){this.readers.push({columnIndex:e,configName:t});"x"!==t&&"y"!==t&&void 0!==t&&(this.pointIsArray=!1)};h.prototype.getReferencedColumnIndexes=function(){var e,t=[];for(e=0;e<this.readers.length;e+=1){var n=this.readers[e];void 0!==n.columnIndex&&t.push(n.columnIndex)}return t};h.prototype.hasReader=function(e){var t;for(t=0;t<this.readers.length;t+=1){var n=this.readers[t];if(n.configName===e)return!0}}});t(e,"masters/modules/data.src.js",[],function(){})})