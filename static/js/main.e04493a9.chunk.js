(this.webpackJsonpMomentum=this.webpackJsonpMomentum||[]).push([[0],{226:function(e,t,a){e.exports=a(360)},310:function(e,t,a){},313:function(e,t,a){},314:function(e,t,a){},329:function(e,t,a){},330:function(e,t,a){},331:function(e,t,a){},332:function(e,t,a){},333:function(e,t,a){},334:function(e,t,a){},335:function(e,t,a){},336:function(e,t,a){},337:function(e,t,a){},338:function(e,t,a){},339:function(e,t,a){},340:function(e,t,a){},349:function(e,t,a){},350:function(e,t,a){},351:function(e,t,a){},352:function(e,t,a){},360:function(e,t,a){"use strict";a.r(t);a(227),a(253),a(255),a(256),a(258),a(259),a(260),a(261),a(262),a(263),a(264),a(265),a(267),a(268),a(269),a(270),a(271),a(272),a(273),a(274),a(275),a(276),a(278),a(279),a(280),a(281),a(282),a(283),a(284),a(285),a(286),a(287),a(288),a(289),a(290),a(291),a(292),a(293),a(294),a(295);var n=a(0),c=a.n(n),r=a(55),o=a.n(r),l=a(19),s=a.n(l),i=a(11),m=a(87),d=a.n(m),u=a(123),f=a(8),E=a(84),v=a.n(E),b=a(136),p=a.n(b),h=a(135),O=a.n(h),N=(a(308),a(29)),j=a.n(N),w=a(125),y=a.n(w),g=a(126),_=a.n(g),k=a(31),S=a.n(k),T=a(66),C=a.n(T),P=a(124),A=a.n(P),B=a(20),D=a(28),L=a.n(D),x=a(1),I=a.n(x),R=(a(310),function(e){var t=e.className,a=e.color,n=e.font,r=e.bold,o=e.children;return c.a.createElement("span",{className:I()(["text",t,"text-".concat(a),"text-".concat(n)],{"text-bold":r})},o)}),V=function(e){var t=e.className,a=e.children,n=Object(B.a)(e,["className","children"]);return c.a.createElement(L.a,{className:"header-title-wrapper"},c.a.createElement(R,Object.assign({className:t},n),a))},H=a(32),W=function(e){var t={},a={days:86400,hours:3600,minutes:60,seconds:1},n=(+e-+new Date)/1e3;return t.time=n>0?"future":"past",n=Math.abs(n),Object.keys(a).forEach((function(e){t[e]=Math.floor(n/a[e]),n-=t[e]*a[e]})),t},M=function(e){var t=Object(n.useState)(W(e)),a=Object(f.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){var t=setInterval((function(){r((function(t){return Object(H.a)(Object(H.a)({},t),W(e))}))}),1e3);return function(){clearInterval(t)}}),[e]),c},K=a(49),F=a.n(K);a(114);F.a.locale("ru");var U,q=function(e){return F()(e).format("LLL")},Y=a(48),z=[],J=[2,0,1,1,1,2],G=function(e,t){return z[e]||(z[e]=e%100>4&&e%100<20?2:J[Math.min(e%10,5)]),t[z[e]]},Q={seconds:["\u0441\u0435\u043a\u0443\u043d\u0434\u0430","\u0441\u0435\u043a\u0443\u043d\u0434\u044b","\u0441\u0435\u043a\u0443\u043d\u0434"],minutes:["\u043c\u0438\u043d\u0443\u0442\u0430","\u043c\u0438\u043d\u0443\u0442\u044b","\u043c\u0438\u043d\u0443\u0442"],hours:["\u0447\u0430\u0441","\u0447\u0430\u0441\u0430","\u0447\u0430\u0441\u043e\u0432"],days:["\u0434\u0435\u043d\u044c","\u0434\u043d\u044f","\u0434\u043d\u0435\u0439"]},X=function(e,t){for(var a=["days","hours","minutes","seconds"],n="seconds",c=0;c<a.length;c+=1)if(e[a[c]]>0){n=a[c];break}return t?[e[n],G(e[n],Q[n])]:a.reduce((function(t,a){return Object(H.a)(Object(H.a)({},t),{},Object(Y.a)({},a,[e[a],G(e[a],Q[a])]))}),{})},Z=(a(313),function(e){var t=e.id,a=e.className,n=e.name,r=e.date,o=e.theme,l=e.onPreviewCardClick,s=M(r),i=s.time,m=Object(B.a)(s,["time"]),d=X(m,!0),u=Object(f.a)(d,2),E=u[0],v=u[1];return c.a.createElement(L.a,{className:"preview-card-wrapper","data-to":"event",onClick:function(e){return l(e,t)}},c.a.createElement("div",{className:I()(["preview-card",a,"preview-card-".concat(o)])},c.a.createElement("div",{className:"card-event"},c.a.createElement(R,{color:"transparent",font:"body3"},"future"===i?"\u0414\u043e":"C"),c.a.createElement(R,{color:"white",font:"h3",bold:!0},n)),c.a.createElement("div",{className:"card-date"},c.a.createElement(R,{color:"transparent",font:"body3"},q(r)),c.a.createElement("div",{className:"date-inline"},c.a.createElement(R,{color:"white",font:"h3",bold:!0},E),c.a.createElement(R,{className:"date-inline-type",color:"transparent",font:"body3"},v)))))}),$=(a(314),function(e){var t=e.id,a=e.goForward,n=e.fetchedEvents,r=e.setEvent,o=function(e,t){a(e),r(t),s.a.send("VKWebAppTapticImpactOccurred",{style:"heavy"})};return c.a.createElement(j.a,{id:t,separator:!1},c.a.createElement(V,{className:"home-header",color:"softBlue",font:"h1",bold:!0},"\u041c\u043e\u0438 \u0421\u043e\u0431\u044b\u0442\u0438\u044f"),c.a.createElement(y.a,{title:"Events"},c.a.createElement(_.a,null,n&&n.map((function(e){var t=e.id,a=e.name,n=e.date,r=e.theme;return c.a.createElement(Z,{key:"event-".concat(t),id:t,name:a,date:n,theme:r,onPreviewCardClick:o})})))),c.a.createElement(C.a,{vertical:"bottom"},c.a.createElement(S.a,{className:"add-button",before:c.a.createElement(A.a,null),onClick:a,"data-to":"create_event_name"})))}),ee=a(12),te=a(129),ae=a.n(te),ne=a(127),ce=a.n(ne),re=a(128),oe=a.n(re),le=(a(329),function(e){var t=e.className,a=e.osName,n=e.goBack,r=e.color,o=e.text,l=e.edit;return c.a.createElement("div",{className:I()(["header-wrapper","header-wrapper-".concat(r),t])},n&&c.a.createElement(ae.a,{onClick:n,"data-to":"home",className:"header-button"},a===ee.b?c.a.createElement(ce.a,null):c.a.createElement(oe.a,null)),o&&c.a.createElement(R,{className:"header-text",font:"body3",bold:!0},o),l&&c.a.createElement(R,{className:"header-edit",font:"body3",bold:!0},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"))}),se=(a(330),a(331),a(332),a(333),a(334),a(335),"h3"),ie="body1",me="body3",de=7,ue=10,fe=(a(336),{"blue-gradient":function(e){var t=e.days,a=e.hours,n=e.minutes,r=e.seconds,o=e.fontSize;return c.a.createElement("div",{className:I()(["event-card-date","event-card-date-inline"])},c.a.createElement("div",{className:I()(["event-card-time","event-card-time-inline"])},c.a.createElement(R,{color:"white",font:o},t[0]),c.a.createElement(R,{color:"transparent",font:"body3"},t[1])),c.a.createElement(R,{className:"colon-separator",color:"white",font:o},":"),c.a.createElement("div",{className:I()(["event-card-time","event-card-time-inline"])},c.a.createElement(R,{color:"white",font:o},a[0]),c.a.createElement(R,{color:"transparent",font:"body3"}," ",a[1])),c.a.createElement(R,{className:"colon-separator",color:"white",font:o},":"),c.a.createElement("div",{className:I()(["event-card-time","event-card-time-inline"])},c.a.createElement(R,{color:"white",font:o},[n[0]]),c.a.createElement(R,{color:"transparent",font:"body3"}," ",n[1])),c.a.createElement(R,{className:"colon-separator",color:"white",font:o},":"),c.a.createElement("div",{className:I()(["event-card-time","event-card-time-inline"])},c.a.createElement(R,{color:"white",font:o},r[0]),c.a.createElement(R,{color:"transparent",font:"body3"}," ",r[1])))},"red-gradient":function(e){var t=e.days,a=e.hours,n=e.minutes,r=e.seconds;return c.a.createElement("div",{className:I()(["event-card-date","event-card-date-center"])},c.a.createElement(R,{className:I()(["event-card-time","event-card-time-center"]),color:"white",font:"h1"},t[0],c.a.createElement("div",{className:"event-card-days-after","data-width":t[1].length},c.a.createElement(R,{color:"transparent",font:"body2","data-width":"3"},t[1]))),c.a.createElement(R,{className:I()(["event-card-time","event-card-time-center"]),color:"white",font:"h1"},a[0],c.a.createElement("div",{className:"event-card-hours-before","data-width":a[1].length},c.a.createElement(R,{color:"transparent",font:"body2"},a[1]))),c.a.createElement(R,{className:I()(["event-card-time","event-card-time-center"]),color:"white",font:"h1"},n[0],c.a.createElement("div",{className:"event-card-minutes-after","data-width":n[1].length},c.a.createElement(R,{color:"transparent",font:"body2"},n[1]))),c.a.createElement(R,{className:I()(["event-card-time","event-card-time-center"]),color:"white",font:"h1"},r[0],c.a.createElement("div",{className:"event-card-seconds-before","data-width":r[1].length},c.a.createElement(R,{color:"transparent",font:"body2"},r[1]))))},"violet-gradient":function(e){var t=e.days,a=e.hours,n=e.minutes,r=e.seconds;return c.a.createElement("div",{className:I()(["event-card-date","event-card-date-square"])},c.a.createElement("div",{className:I()(["event-card-time","event-card-time-square"])},c.a.createElement(R,{color:"white",font:"h1"},t[0]),c.a.createElement(R,{color:"transparent",font:"body3"},t[1])),c.a.createElement("div",{className:I()(["event-card-time","event-card-time-square"])},c.a.createElement(R,{color:"white",font:"h1"},a[0]),c.a.createElement(R,{color:"transparent",font:"body3"}," ",a[1])),c.a.createElement("div",{className:I()(["event-card-time","event-card-time-square"])},c.a.createElement(R,{color:"white",font:"h1"},n[0]),c.a.createElement(R,{color:"transparent",font:"body3"}," ",n[1])),c.a.createElement("div",{className:I()(["event-card-time","event-card-time-square"])},c.a.createElement(R,{color:"white",font:"h1"},r[0]),c.a.createElement(R,{color:"transparent",font:"body3"}," ",r[1])))}}),Ee=function(e){var t=e.theme,a=Object(B.a)(e,["theme"]);return Object(n.createElement)(fe[t],a)},ve=function(e){var t=e.name,a=e.date,n=e.theme,r=M(a),o=r.time,l=Object(B.a)(r,["time"]),s=X(l),i=function(e){var t=Object.keys(e).reduce((function(t,a){return t+e[a]}),"").length;return t<=de?se:t>de&&t<ue?ie:me}(s);return c.a.createElement("div",{className:I()(["event-card-wrapper"])},c.a.createElement(R,{color:"white",font:"body2",bold:!0},"future"===o?"\u0414\u043e":"C",": ",t),c.a.createElement(R,{color:"transparent",font:"body3"},q(a)),c.a.createElement(Ee,Object.assign({theme:n,fontSize:i},s)))},be=Object(ee.c)(),pe=function(e){var t=e.id,a=e.goBack,n=e.eventId,r=Object(i.c)((function(e){return e.events.events.filter((function(e){return e.id===n}))})),o=Object(f.a)(r,1)[0];return c.a.createElement(j.a,{id:t,separator:!1,className:I()(["event-panel","event-panel-".concat(o.theme)])},c.a.createElement(le,{osName:be,goBack:a,color:"white",edit:!0}),c.a.createElement(ve,o))},he=(a(337),Object(n.forwardRef)((function(e,t){var a=e.className,n=e.color,r=e.font,o=Object(B.a)(e,["className","color","font"]);return c.a.createElement("input",Object.assign({className:I()(["input",a,"input-".concat(n),"input-".concat(r)]),ref:t},o))}))),Oe="NEW_EVENT:SET_NAME",Ne="NEW_EVENT:SET_DATE",je="NEW_EVENT:SET_THEME",we="NEW_EVENT:CLEAR",ye=(a(338),Object(ee.c)()),ge=function(e){var t=e.id,a=e.goForward,r=e.goBack,o=Object(i.b)(),l=Object(n.useState)(""),s=Object(f.a)(l,2),m=s[0],d=s[1],u=Object(n.useRef)(null);return Object(n.useEffect)((function(){u.current.focus()}),[u]),c.a.createElement(j.a,{id:t,separator:!1},c.a.createElement(le,{osName:ye,goBack:r,color:"black"}),c.a.createElement(L.a,{className:I()(["create-event-name-wrapper"])},c.a.createElement(R,{className:"create-event-name-title",color:"black",font:"body3",bold:!0},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f:"),c.a.createElement(he,{className:"create-event-name-input",placeholder:"\u041d\u0430\u0437\u043e\u0432\u0438 \u041c\u0435\u043d\u044f",onChange:function(e){var t=e.target.value;return d(t)},value:m,font:"h3",color:"softBlue",ref:u}),c.a.createElement(S.a,{className:"create-event-name-button",onClick:function(e){o(function(e){return{type:Oe,payload:{name:e}}}(m||"\u041d\u0430\u0437\u043e\u0432\u0438 \u041c\u0435\u043d\u044f")),a(e)},"data-to":"create_event_date"},"\u0413\u043e\u0442\u043e\u0432\u043e")))},_e=a(130),ke=a.n(_e),Se=a(131),Te=a.n(Se),Ce=(a(339),function(e){var t=e.className,a=e.children,n=e.isOpen;return c.a.createElement("div",{className:I()(["modal-wrapper",t,{hidden:!n}])},c.a.createElement("div",{className:"modal-content"},a))}),Pe=a(132),Ae=Object(ee.c)(),Be=(U={},Object(Y.a)(U,ee.b,"ios"),Object(Y.a)(U,ee.a,"android"),U),De=Be[Ae]?Be[Ae]:"default",Le={1:"\u044f\u043d\u0432\u0430\u0440\u044f",2:"\u0444\u0435\u0432\u0440\u0430\u043b\u044f",3:"\u043c\u0430\u0440\u0442\u0430",4:"\u0430\u043f\u0440\u0435\u043b\u044f",5:"\u043c\u0430\u044f",6:"\u0438\u044e\u043d\u044f",7:"\u0438\u044e\u043b\u044f",8:"\u0430\u0432\u0433\u0443\u0441\u0442\u0430",9:"\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f",10:"\u043e\u043a\u0442\u044f\u0431\u0440\u044f",11:"\u043d\u043e\u044f\u0431\u0440\u044f",12:"\u0434\u0435\u043a\u0430\u0431\u0440\u044f"},xe={date:{format:"DD",caption:"Day",step:1},month:{format:function(e){return Le[e.getMonth()+1]},caption:"Mon",step:1},year:{format:"YYYY",caption:"Year",step:1}},Ie={hour:{format:"hh",caption:"Hour",step:1},minute:{format:"mm",caption:"Min",step:1}},Re=function(e){var t=e.exactTime,a=Object(B.a)(e,["exactTime"]);return c.a.createElement(Pe,Object.assign({theme:De,isPopup:!1,showHeader:!1,showFooter:!1,dateConfig:t?Ie:xe},a))};F.a.locale("ru");a(340);var Ve=Object(ee.c)(),He=function(e){var t=e.id,a=e.goForward,r=e.goBack,o=Object(i.b)(),l=Object(n.useState)(new Date),s=Object(f.a)(l,2),m=s[0],d=s[1],u=Object(n.useState)(!1),E=Object(f.a)(u,2),v=E[0],b=E[1],p=Object(n.useState)(!1),h=Object(f.a)(p,2),O=h[0],N=h[1];return c.a.createElement(j.a,{id:t,separator:!1},c.a.createElement(Ce,{isOpen:O},c.a.createElement("div",{className:"create-event-date-modal"},c.a.createElement(R,{className:"title",color:"black",font:"body3",bold:!0},"\u0412\u0440\u0435\u043c\u044f \u0441\u043e\u0431\u044b\u0442\u0438\u044f:"),v&&c.a.createElement(Re,{value:v,onChange:function(e){return b(e)},exactTime:!0}),c.a.createElement(S.a,{className:"button",onClick:function(){N(!1)}},"\u0413\u043e\u0442\u043e\u0432\u043e"))),c.a.createElement(le,{osName:Ve,goBack:r,color:"black"}),c.a.createElement(L.a,{className:I()(["create-event-date-wrapper"])},c.a.createElement(R,{className:"create-event-date-title",color:"black",font:"body3",bold:!0},"\u0414\u0430\u0442\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u044f:"),c.a.createElement(Re,{value:m,onChange:function(e){return d(e)}}),c.a.createElement("div",{className:"time-picker",onClick:function(){v||b(new Date(0)),N(!0)}},c.a.createElement(ke.a,null),c.a.createElement(R,{className:"time-picker-text"},v?function(e){return F()(e).format("HH:mm")}(v):"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0432\u0440\u0435\u043c\u044f"),v&&c.a.createElement(Te.a,{onClick:function(e){e.stopPropagation(),b(!1)}})),c.a.createElement(S.a,{className:"create-event-date-button",onClick:function(e){m.setSeconds(0),m.setMilliseconds(0),v?(m.setHours(v.getHours()),m.setMinutes(v.getMinutes())):(m.setHours(0),m.setMinutes(0)),o(function(e){return{type:Ne,payload:{date:e}}}(m.getTime())),a(e)},"data-to":"create_event_theme"},"\u0413\u043e\u0442\u043e\u0432\u043e")))},We=a(133),Me=a(134),Ke=a.n(Me),Fe=(a(349),function(e){var t=e.className,a=e.theme,n=e.selected;return c.a.createElement("div",{className:I()(["event-card-example",t,"event-card-example-".concat(a)]),"data-theme":a},n&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"selected"}),c.a.createElement(Ke.a,{fill:"white",className:"done-icon"})))}),Ue=0,qe=1,Ye=2,ze=3,Je="EVENTS:SET_EVENTS",Ge="EVENTS:SET_LOADING_STATE",Qe="EVENTS:ADD_EVENT",Xe=function(e){return{type:Ge,payload:{loadingState:e}}},Ze=function(e){return function(t){t(Xe(qe)),fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_TOKEN:"47614f7547614f7547614f752b471042034476147614f7519f5aa91d3a24857b963183a",REACT_APP_PUBLIC_URL:"https://momentum-server.ru"}).REACT_APP_LOCAL_URL||"https://momentum-server.ru","/user/").concat(e,"/").concat("47614f7547614f7547614f752b471042034476147614f7519f5aa91d3a24857b963183a","/").concat(window.location.search)).then((function(e){return e.json()})).then((function(e){var a=e.events;t(function(e){return{type:Je,payload:{events:e}}}(a)),t(Xe(Ye))})).catch((function(e){console.log(e),t(Xe(ze))}))}},$e=function(e,t){return function(a){a(function(e){return{type:Qe,payload:{event:e}}}(t)),fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_TOKEN:"47614f7547614f7547614f752b471042034476147614f7519f5aa91d3a24857b963183a",REACT_APP_PUBLIC_URL:"https://momentum-server.ru"}).REACT_APP_LOCAL_URL||"https://momentum-server.ru","/user/").concat(e,"/").concat("47614f7547614f7547614f752b471042034476147614f7519f5aa91d3a24857b963183a","/add_event/").concat(window.location.search),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:t})})}},et=(a(350),Object(ee.c)()),tt=["red-gradient","blue-gradient","violet-gradient"],at=function(e){var t=e.id,a=e.goForward,r=e.goBack,o=e.clearHistory,l=e.userId,s=Object(i.b)(),m=Object(i.c)((function(e){return e.newEvent.newEvent})),d=Object(n.useState)("red-gradient"),u=Object(f.a)(d,2),E=u[0],v=u[1];return c.a.createElement(j.a,{id:t,separator:!1},c.a.createElement(le,{className:"create-event-theme-header",osName:et,goBack:r,color:"black",text:"\u0422\u0435\u043c\u044b \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f"}),c.a.createElement(L.a,{className:I()(["create-event-theme-wrapper"])},c.a.createElement("div",{className:"example-cards-container",onClick:function(e){var t=e.target.dataset.theme;t&&v(t)}},tt.map((function(e){return c.a.createElement(Fe,{key:e,theme:e,selected:E===e})}))),c.a.createElement(C.a,{vertical:"bottom"},c.a.createElement(S.a,{className:"create-event-theme-button",onClick:function(e){s($e(l,Object(H.a)(Object(H.a)({},m),{},{theme:E,id:Object(We.generate)()}))),s({type:we}),a(e),o()},"data-to":"home"},"\u0413\u043e\u0442\u043e\u0432\u043e"))))},nt=a(57),ct=(a(351),a(352),function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.events})),a=t.events,r=t.loadingState,o=Object(n.useState)(c.a.createElement(O.a,{size:"large"})),l=Object(f.a)(o,2),m=l[0],E=l[1],b=function(e){var t=Object(n.useState)(e),a=Object(f.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)([e]),l=Object(f.a)(o,2),i=l[0],m=l[1];return{activePanel:c,history:i,goForward:function(t){var a=t.currentTarget.dataset.to,n=Object(nt.a)(i);n.push(a),c===e&&s.a.send("VKWebAppEnableSwipeBack"),m(n),r(a)},goBack:function(){var t=Object(nt.a)(i);t.pop();var a=t[t.length-1];a===e&&s.a.send("VKWebAppDisableSwipeBack"),m(t),r(a)},clearHistory:function(){m([e])}}}("home"),h=b.activePanel,N=b.history,j=b.goForward,w=b.goBack,y=b.clearHistory,g=Object(n.useState)(null),_=Object(f.a)(g,2),k=_[0],S=_[1],T=Object(n.useState)(null),C=Object(f.a)(T,2),P=C[0],A=C[1];return Object(n.useEffect)((function(){function t(){return(t=Object(u.a)(d.a.mark((function t(){var a,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.send("VKWebAppGetUserInfo");case 2:a=t.sent,n=a.id,A(n),e(Ze(n));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),Object(n.useEffect)((function(){r===Ye&&E(null)}),[r]),c.a.createElement(p.a,{isWebView:!0},c.a.createElement(v.a,{activePanel:h,popout:m,onSwipeBack:w,history:N,header:!1},c.a.createElement($,{id:"home",fetchedEvents:a,goForward:j,setEvent:S}),c.a.createElement(pe,{id:"event",goBack:w,eventId:k}),c.a.createElement(ge,{id:"create_event_name",goForward:j,goBack:w}),c.a.createElement(He,{id:"create_event_date",goForward:j,goBack:w}),c.a.createElement(at,{id:"create_event_theme",goForward:j,goBack:w,clearHistory:y,userId:P})))}),rt=a(47),ot=a(67),lt={events:[],loadingState:Ue},st=Object(ot.a)((function(e,t){if(t){var a=t.payload;switch(t.type){case Je:e.events=a.events;break;case Qe:e.events=[].concat(Object(nt.a)(e.events),[a.event]);break;case Ge:e.loadingState=a.loadingState}}}),lt),it={newEvent:{}},mt=Object(ot.a)((function(e,t){if(t){var a=t.payload;switch(t.type){case Oe:e.newEvent.name=a.name;break;case Ne:e.newEvent.date=a.date;break;case je:e.newEvent.theme=a.theme;break;case we:e.newEvent=it}}}),it),dt=a(137),ut=Object(rt.c)({events:st,newEvent:mt});s.a.send("VKWebAppInit");var ft=Object(rt.d)(ut,Object(rt.a)(dt.a));o.a.render(c.a.createElement(i.a,{store:ft},c.a.createElement(ct,null)),document.getElementById("root"))}},[[226,1,2]]]);
//# sourceMappingURL=main.e04493a9.chunk.js.map