(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){},25:function(e,t,a){e.exports=a.p+"static/media/red_robot_128.168b46bf.svg"},26:function(e,t,a){e.exports=a.p+"static/media/blue_robot_128.74e0a7af.svg"},30:function(e,t,a){e.exports=a(43)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),i=a.n(o),c=a(6),s=a(1),l=a(22),u=a(23),m=a(2),d=a(29),v=a(28),h=a(24),p={TAKE:"Take",MOVE:"Move",SPAWN:"Spawn"},b={N:"N",NE:"NE",NW:"NW",S:"S",SE:"SE",SW:"SW",E:"E",W:"W"},f="B",y="W",g="P",E="G",O="Worm",j=function(e,t,a){return e<=a&&a<=t},x=function(e){return String.fromCharCode.apply(null,new Uint16Array(e))},w=function(e,t,a){return Object(h.a)(e,function(n){var r=t.command,o=t.team,i=t.handle;switch(r){case p.MOVE:var c=t.direction,s=n.robots.find(function(e){return e.handle===i}),l=N(c),u=Object(m.a)(l,2),d=u[0],h=u[1],b=Object(m.a)(s.xy,2),y=b[0],g=b[1],x=n.map[g][y];if(!a){var w=[-d,-h];d=w[0],h=w[1]}j(0,n.width-1,y+d)&&j(0,n.height,g+h)&&(s.xy=[y+d,g+h]);var k=n.map[s.xy[1]][s.xy[0]];if(a)if(k===O)s.wormHistory.push(s.xy),s.xy=k.out;else if(k===f){var M=k.team;n.teams[M]+=s.gold,s.lastDeposit.push(s.gold),s.gold=0,s.wormHistory.push([-1,-1])}else s.wormHistory.push([-1,-1]);else{var S=s.wormHistory.pop();if(-1!==S[0]&&-1!==S[1])s.xy=[S[0]+d][S[-1]+h];else if(x===f){var C=s.lastDeposit.pop();void 0!==C?(n.teams[x.team]-=C,s.gold+=C):console.log("stepping back with undefined last deposit")}}break;case p.TAKE:var W=t.direction,B=t.amount,A=e.robots[i],D=Object(m.a)(A.xy,2),L=D[0],_=D[1],H=N(W),F=Object(m.a)(H,2),G=F[0],R=F[1],P=e.map[_+R][L+G];P.type===E&&(a?B>0&&(P.amount-=B,A.gold+=B):(P.amount+=B,A.gold-=B));break;case p.SPAWN:n.robots=a?[].concat(Object(v.a)(n.robots),[{handle:i,team:o,xy:n.bases[o],gold:0,lastDeposit:[],wormHistory:[]}]):n.robots.filter(function(e){return e.handle!==i})}})},N=function(e){switch(e){case b.N:return[0,-1];case b.NE:return[1,-1];case b.NW:return[-1,-1];case b.S:return[0,1];case b.SE:return[1,1];case b.SW:return[-1,1];case b.E:return[1,0];case b.W:return[-1,0];default:return[0,0]}},k="SMOVE",M="MOVE",S="LOAD_FILE";function C(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return{type:k,payload:{next:e}}}function W(e){var t=new Promise(function(t,a){var n=new FileReader;n.onloadend=function(){var e=n.result instanceof ArrayBuffer?x(n.result):n.result;t(JSON.parse(e))},n.onerror=function(){return a()},n.readAsBinaryString(e)});return{type:S,payload:t}}var B={},A=function(e,t,a){var n=Object(m.a)(a,2);return[t-n[0]-1,e-n[1]-1]},D=function(e){for(var t={},a=e.length,n=e[0].length,r=0;r<e.length;r++)for(var o=e[r],i=0;i<o.length;i++){var c=o[i];c.type===f&&(t[c.team]=A(a,n,[i,r]))}return t},L=function(e,t,a){for(var n=[],r=0,o=0,i=0;i<e.length;i++)void 0===n[r]&&(n[r]=[]),n[r][o]=e[i],r<t-1?r++:(o++,r=0);return n},_=Object(s.combineReducers)({board:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S+"_FULFILLED":var a=t.payload,n=a.map,r=a.width,o=a.height,i=a.teams,c=a.max_gold,s=a.max_bots,l=a.moves,u=L(n,o,r),m=D(u),v=[{handle:0,team:"Red",xy:m.Red,gold:0,lastDeposit:[],wormHistory:[]},{handle:1,team:"Blue",xy:m.Blue,gold:0,lastDeposit:[],wormHistory:[]}],h={};return i.forEach(function(e){return h[e]=0}),{map:u,maxGold:c,maxBots:s,width:r,height:o,teams:h,teamNames:i,bases:m,robots:v,moves:l,nextMove:0};case M:var p=t.payload,b=p.forward,f=p.move;return w(e,f,b);case k:var y=t.payload.next,g=e.moves,E=e.nextMove,O=y?g[E]:g[E-2],j=Object(d.a)({},e,{moves:e.moves,nextMove:y?E+1:E-1});return w(j,O,y);default:return e}}}),H=(a(39),a(3)),F=a(4),G=a(7),R=a(5),P=a(8),T=(a(40),a(10)),I=function(e){function t(e){var a;return Object(H.a)(this,t),(a=Object(G.a)(this,Object(R.a)(t).call(this,e))).onChange=a.onChange.bind(Object(T.a)(Object(T.a)(a))),a}return Object(P.a)(t,e),Object(F.a)(t,[{key:"onChange",value:function(e){var t=this.props.onChange;t(e.target.files[0])}},{key:"render",value:function(){var e=this.props,t=e.label,a=e.types;return r.a.createElement("div",null,r.a.createElement("div",{id:"section-head"},t),r.a.createElement("div",null,r.a.createElement("input",{type:"file",accept:a,onChange:this.onChange})))}}]),t}(n.Component),J=(a(41),function(e){function t(){return Object(H.a)(this,t),Object(G.a)(this,Object(R.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(F.a)(t,[{key:"render",value:function(){var e=this.props,t=e.teamNames,a=e.teams,n=e.maxGold,o=e.moves,i=e.next,c=r.a.createElement(I,{className:"header-item",label:"Import",types:".json",onChange:this.props.loadFile});return void 0===t?r.a.createElement("div",{id:"header-container"},c):r.a.createElement("div",{id:"header-container"},c,r.a.createElement("div",{className:"header-item",id:"Score"},r.a.createElement("div",{className:"section-head",key:-1},"Scores"),Object.keys(a).map(function(e,t){return r.a.createElement("div",{className:"score-item",key:t},"Team ",e,": ",a[e])})),r.a.createElement("div",{className:"header-item",id:"MovesLeft"},r.a.createElement("div",{className:"section-head",key:"gold"},"Gold Cap: ",n),r.a.createElement("div",{className:"section-head",key:"move-head"},"Moves Left:"),r.a.createElement("div",{id:"MovesCounter",key:"move"},i," / ",o.length)))}}]),t}(n.Component)),V=Object(c.b)(function(e){var t=e.board,a=t.teamNames,n=t.maxGold,r=t.maxBots;return{teamNames:a,teams:t.teams,robots:t.robots,maxGold:n,maxBots:r,moves:t.moves,nextMove:t.nextMove}},function(e){return Object(s.bindActionCreators)({loadFile:W},e)})(J),q=(a(20),a(25)),K=a.n(q),U=a(26),X=a.n(U),Y=function(e){var t=e.tile,a=e.robots,n=t.type,o={};n===f&&(o.border="1px solid ".concat(t.team.toLowerCase()));var i="";n===E?i=t.amount:n===g&&(i=t.cost);var c=a.map(function(e){var t=e.team,a=e.handle;return"Red"===t?r.a.createElement("img",{key:a,className:"bot-img",src:K.a,alt:"RBot"}):"Blue"===t?r.a.createElement("img",{key:a,className:"bot-img",src:X.a,alt:"BBot"}):null}),s="path";return n===E?s="gold":n===f?s="base":n===O?s="worm":n===y&&(s="wall"),r.a.createElement("div",{style:o,className:"map-tile ".concat(s)},i,c)},$=function(e){for(var t=e.tiles,a=e.robots,n=e.y,o=Array(t.length),i=0;i<t.length;i++)o[i]=[];return a.forEach(function(e){var t=Object(m.a)(e.xy,1)[0];o[t].push(e)}),r.a.createElement("div",{className:"map-row"},t.map(function(e,t){return r.a.createElement(Y,{key:t,tile:e,robots:o[t],x:t,y:n})}))},z=function(e){function t(){return Object(H.a)(this,t),Object(G.a)(this,Object(R.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(F.a)(t,[{key:"render",value:function(){var e=this.props,t=e.map,a=(e.width,e.height),n=(e.teams,e.bases,e.robots);if(null==t)return r.a.createElement("div",{id:"map-container"});for(var o=Array(a),i=0;i<a;i++)o[i]=[];n.forEach(function(e){var t=Object(m.a)(e.xy,2)[1];o[t].push(e)});var c=t.map(function(e,t){return r.a.createElement($,{tiles:e,key:t,robots:o[t],y:t})});return r.a.createElement("div",{id:"map-container"},c)}}]),t}(n.Component),Q=Object(c.b)(function(e){var t=e.board;return{map:t.map,width:t.width,height:t.height,teams:t.teams,bases:t.bases,robots:t.robots}})(z),Z=a(27),ee=a.n(Z),te=(a(42),function(e){function t(){return Object(H.a)(this,t),Object(G.a)(this,Object(R.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(F.a)(t,[{key:"render",value:function(){var e=this.props,t=e.moves,a=e.nextMove;if(null==t)return r.a.createElement("div",{id:"moves-container"});var n=t.map(function(e,t){var n=ee()({"move-element":!0,"past-move":t<a,"next-move":t===a});return t<a?null:r.a.createElement("p",{key:t,className:n},function(e){return JSON.stringify(e)}(e))}).filter(function(e){return null!==e});return r.a.createElement("div",{id:"moves-container"},n)}}]),t}(n.Component)),ae=Object(c.b)(function(e){var t=e.board;return{moves:t.moves,nextMove:t.nextMove}})(te),ne=function(e){function t(e){var a;return Object(H.a)(this,t),(a=Object(G.a)(this,Object(R.a)(t).call(this,e))).state={},a}return Object(P.a)(t,e),Object(F.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.height,n=t.nextMove,o=t.totalMoves;return void 0===a&&(a=0),r.a.createElement("div",{className:"App"},r.a.createElement(V,null),r.a.createElement("div",{id:"data",style:{height:52*a}},r.a.createElement("div",{style:{flex:2}},r.a.createElement(Q,null)),r.a.createElement("div",{style:{flex:"1",overflowY:"scroll",overflowX:"auto"}},r.a.createElement(ae,null))),r.a.createElement("button",{onClick:function(){return e.props.runSequentialMove(!1)},disabled:0===n},"Previous Move"),r.a.createElement("button",{onClick:function(){return e.props.runSequentialMove(!0)},disabled:n>=o},"Next Move"))}}]),t}(n.Component),re=Object(c.b)(function(e){var t=e.board,a=t.height,n=t.nextMove,r=t.moves;return{height:a,nextMove:n,totalMoves:"undefined"===typeof r?0:r.length}},function(e){return Object(s.bindActionCreators)({runSequentialMove:C},e)})(ne);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=Object(s.createStore)(_,Object(u.composeWithDevTools)(Object(s.applyMiddleware)(l.a)));i.a.render(r.a.createElement(c.a,{store:oe},r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.68cde6dc.chunk.js.map