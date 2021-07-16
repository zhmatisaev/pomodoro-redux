(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(9),o=n.n(i),s=(n(28),n(6)),a=(n(32),n(11)),u=(n(33),n(34),n(2));var j=function(){var e=Object(s.c)((function(e){return e.minuteSecond})),t=Math.floor(e/60),n=e-60*t,c=Object(s.c)((function(e){return e.interval})),r=150,i=260*Math.PI;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"TimeDisplay",children:[Object(u.jsxs)("svg",{width:"100%",viewBox:"0 0 ".concat(300," ").concat(300),children:[Object(u.jsx)("circle",{stroke:"#ddd",fill:"#fff",strokeWidth:5,r:130,cx:r,cy:r}),Object(u.jsx)("circle",{stroke:"#D9534F",fill:"transparent",strokeWidth:5,strokeDasharray:i+" "+i,r:130,cx:r,cy:r})]}),Object(u.jsxs)("div",{class:"mainNumber",children:[t<10?("0"+t).slice(-2):t," : ",n<10?("0"+n).slice(-2):n,Object(u.jsx)("p",{children:"Pomodoro Technique"}),Object(u.jsx)("p",{children:c})]})]})})},b=(n(36),n(12)),l=n(13),d=n(21),O="SAVE_TIME",h="START_TIME",m="DECREASE_TIME",x="SWITCH_SESSION",v="SHORT_BREAK",f="LONG_BREAK",g="STOP_TIME",p="RESET_TIME",S=function(){return{type:h}},k=function(){return{type:m}},B=function(){return{type:x}},y=function(){return{type:v}},E=function(){return{type:f}};var _=function(e){var t=Object(c.useState)(!1),n=Object(a.a)(t,2),r=n[0],i=n[1],o=function(){return i(!1)},j=Object(s.b)();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b.a,{style:{width:50,height:50},onClick:function(){return i(!0)},children:Object(u.jsx)(d.a,{})}),Object(u.jsx)(l.a,{className:"settings_main",show:r,onHide:o,children:Object(u.jsxs)("div",{className:"settings__container",children:[Object(u.jsx)("h3",{children:"Settings"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:"Pomodoro"}),Object(u.jsx)("input",{type:"number",value:e.minute,onChange:function(t){return e.setMinute(t.target.value)}})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:"Short Break"}),Object(u.jsx)("input",{type:"number",value:e.shortBreak,onChange:function(t){return e.setShortBreak1(t.target.value)}})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:"Long Break"}),Object(u.jsx)("input",{type:"number",value:e.longBreak,onChange:function(t){return e.setLongBreak1(t.target.value)}})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:"Pomodoro Count"}),Object(u.jsx)("input",{type:"number",value:e.count1,onChange:function(t){return e.setCount1(t.target.value)}})]}),Object(u.jsx)("div",{className:"text",children:"Auto Play without push notifications"}),Object(u.jsx)("div",{children:Object(u.jsx)("input",{className:"checked",type:"checkbox"})}),Object(u.jsx)(l.a.Footer,{children:Object(u.jsx)(b.a,{style:{marginTop:15,textAlign:"center"},type:"primary",onClick:function(){var t;o(),j((t=e.obj,{type:O,obj:t}))},children:"all ok"})})]})})]})},N=(n(38),n(22));var T=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],r=t[1],i=function(){return r(!1)};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b.a,{style:{width:50,height:50,marginRight:100},onClick:function(){return r(!0)},children:Object(u.jsx)(N.a,{})}),Object(u.jsx)(l.a,{className:"settings_main",show:n,onHide:i,children:Object(u.jsxs)("div",{className:"settings__container",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"About Pomodoro Technique"}),Object(u.jsx)("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil labore sit quas nam repellat perspiciatis autem, distinctio suscipit ex, quae in fuga?"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Use Experience"}),Object(u.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aliquid cupiditate fugiat velit? Quam explicabo consequuntur, odio non qui recusandae vitae dolore nam odit eius maxime maiores voluptate quaerat provident?"})]}),Object(u.jsx)(b.a,{style:{marginTop:15},type:"primary",onClick:i,children:"close"})]})})]})},R=n(18),C=n.n(R),I=n.p+"static/media/finished.b35b538c.mp3";var L=function(e){var t=Object(s.b)(),n=Object(s.c)((function(e){return e.timerRunning}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"button",onClick:function(){t(n?{type:g}:S())},children:n?"stop":"continue"}),Object(u.jsx)("button",{className:"button",onClick:function(){var n;t((n=e.obj,{type:p,obj:n}))},children:"reset"})]})};var w=function(){var e=Object(s.c)((function(e){return e.button})),t=Object(s.c)((function(e){return e.interval})),n=Object(s.c)((function(e){return e.timerRunning})),r=Object(s.c)((function(e){return e.minuteSecond})),i=Object(s.c)((function(e){return e.longBreak})),o=Object(s.c)((function(e){return e.shortBreak})),b=Object(s.c)((function(e){return e.count})),l=Object(c.useState)(b),d=Object(a.a)(l,2),O=d[0],h=d[1],m=Math.floor(r/60),x=Object(c.useState)(m),v=Object(a.a)(x,2),f=v[0],g=v[1],p=Object(c.useState)(o),N=Object(a.a)(p,2),R=N[0],w=N[1],M=Object(c.useState)(i),A=Object(a.a)(M,2),q=A[0],D=A[1],F=Object(s.b)(),P=new Audio(I);Object(c.useEffect)((function(){var e=null;return n&&r>0?e=setInterval((function(){F(k())}),1e3):n&&0===r?(P.play(),"Session"===t?(F(y()),console.log(y),C.a.fire("Time to Rest!")):"Break"===t&&0===r&&(w(R-1),h(O-1),F(B()),C.a.fire("Time to Work!"),P.play(),0===R&&h(O-1))):clearInterval(e),function(){return clearInterval(e)}}),[P,n,r,t,B,k,y,E,O,h]);var H={shortBreak:R,longBreak:q,minuteSecond:f,sessionLength:f,countFromStore:b};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"header",children:Object(u.jsxs)("div",{children:[Object(u.jsxs)("span",{children:[Object(u.jsx)(T,{})," "]}),Object(u.jsx)("span",{children:Object(u.jsx)(_,{minuteSecond:r,longBreak:q,setLongBreak1:D,shortBreak:R,setShortBreak1:w,minute:f,minutes:m,setMinute:g,obj:H,setCount1:h,count1:O})})]})}),Object(u.jsx)("div",{children:Object(u.jsx)(j,{minuteSecond:r})}),e?Object(u.jsx)(L,{className:"button",obj:H}):Object(u.jsx)("button",{className:"button",onClick:function(){F(S())},children:"start"})]})]})};var M=function(){var e=Object(s.c)((function(e){return e}));return Object(c.useEffect)((function(){localStorage.setItem("time",JSON.stringify(e))}),[e]),Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(w,{})})},A=n(23),q=n(8);localStorage.removeItem("time");var D={shortBreak:5,longBreak:10,count:3,minuteSecond:1500,sessionLength:25,timerRunning:!1,interval:"Session",button:!1},F=Object(A.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(q.a)(Object(q.a)({},e),{},{shortBreak:t.obj.shortBreak,longBreak:t.obj.longBreak,minuteSecond:60*t.obj.minuteSecond,sessionLength:t.obj.sessionLength,count:t.obj.count});case h:return Object(q.a)(Object(q.a)({},e),{},{timerRunning:!0,button:!0,interval:"Session"});case m:return Object(q.a)(Object(q.a)({},e),{},{minuteSecond:e.minuteSecond-1});case g:return Object(q.a)(Object(q.a)({},e),{},{timerRunning:!1});case p:return Object(q.a)(Object(q.a)({},e),{},{shortBreak:t.obj.shortBreak,longBreak:t.obj.longBreak,minuteSecond:60*t.obj.minuteSecond,sessionLength:t.obj.sessionLength,count:t.obj.count,timerRunning:!1,interval:"Session",button:!1});case v:return Object(q.a)(Object(q.a)({},e),{},{interval:"Break",minuteSecond:60*e.shortBreak});case f:return Object(q.a)(Object(q.a)({},e),{},{interval:"LongBreak",minuteSecond:60*e.longBreak});case x:return Object(q.a)(Object(q.a)({},e),{},{interval:"Session",minuteSecond:60*e.sessionLength});default:return e}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(s.a,{store:F,children:Object(u.jsx)(M,{})})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.7d6d75c8.chunk.js.map