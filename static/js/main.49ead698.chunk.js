(this.webpackJsonpMomentum=this.webpackJsonpMomentum||[]).push([[0],{237:function(e,t,a){e.exports=a(381)},321:function(e,t,a){},324:function(e,t,a){},325:function(e,t,a){},340:function(e,t,a){},341:function(e,t,a){},342:function(e,t,a){},343:function(e,t,a){},344:function(e,t,a){},345:function(e,t,a){},346:function(e,t,a){},347:function(e,t,a){},348:function(e,t,a){},349:function(e,t,a){},350:function(e,t,a){},351:function(e,t,a){},352:function(e,t,a){},353:function(e,t,a){},354:function(e,t,a){},355:function(e,t,a){},364:function(e,t,a){},365:function(e,t,a){},366:function(e,t,a){},372:function(e,t,a){},373:function(e,t,a){},381:function(e,t,a){"use strict";a.r(t);a(238),a(264),a(266),a(267),a(269),a(270),a(271),a(272),a(273),a(274),a(275),a(276),a(278),a(279),a(280),a(281),a(282),a(283),a(284),a(285),a(286),a(287),a(289),a(290),a(291),a(292),a(293),a(294),a(295),a(296),a(297),a(298),a(299),a(300),a(301),a(302),a(303),a(304),a(305),a(306);var n=a(0),c=a.n(n),r=a(57),o=a.n(r),l=a(21),i=a.n(l),s=a(14),m=a(90),d=a.n(m),u=a(126),f=a(6),E=a(87),v=a.n(E),b=a(147),p=a.n(b),h=a(146),O=a.n(h),N=(a(319),a(27)),_=a.n(N),g=a(69),w=a.n(g),y=a(128),j=a.n(y),k=a(16),T=a.n(k),C=a(44),S=a.n(C),P=a(127),A=a.n(P),R=a(28),x=a(26),I=a.n(x),B=a(1),L=a.n(B),U=(a(321),function(e){var t=e.className,a=e.color,n=e.font,r=e.bold,o=e.children,l=e.style;return c.a.createElement("span",{className:L()(["text",t,"text-".concat(a),"text-".concat(n)],{"text-bold":r}),style:l},o)}),D=function(e){var t=e.className,a=e.children,n=Object(R.a)(e,["className","children"]);return c.a.createElement(I.a,{className:"header-title-wrapper"},c.a.createElement(U,Object.assign({className:t},n),a))},W=a(22),F=function(e){var t={},a={days:86400,hours:3600,minutes:60,seconds:1},n=(+e-+new Date)/1e3;return t.time=n>0?"future":"past",n=Math.abs(n),Object.keys(a).forEach((function(e){t[e]=Math.floor(n/a[e]),n-=t[e]*a[e]})),t},V=function(e){var t=Object(n.useState)(F(e)),a=Object(f.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){var t=setInterval((function(){r((function(t){return Object(W.a)(Object(W.a)({},t),F(e))}))}),1e3);return function(){clearInterval(t)}}),[e]),c},H=a(52),K=a.n(H);a(118);K.a.locale("ru");var M,q=function(e){return K()(e).format("LLL")},J=a(51),Y=[],z=[2,0,1,1,1,2],G=function(e,t){return Y[e]||(Y[e]=e%100>4&&e%100<20?2:z[Math.min(e%10,5)]),t[Y[e]]},Q={seconds:["\u0441\u0435\u043a\u0443\u043d\u0434\u0430","\u0441\u0435\u043a\u0443\u043d\u0434\u044b","\u0441\u0435\u043a\u0443\u043d\u0434"],minutes:["\u043c\u0438\u043d\u0443\u0442\u0430","\u043c\u0438\u043d\u0443\u0442\u044b","\u043c\u0438\u043d\u0443\u0442"],hours:["\u0447\u0430\u0441","\u0447\u0430\u0441\u0430","\u0447\u0430\u0441\u043e\u0432"],days:["\u0434\u0435\u043d\u044c","\u0434\u043d\u044f","\u0434\u043d\u0435\u0439"]},X=function(e,t){for(var a=["days","hours","minutes","seconds"],n="seconds",c=0;c<a.length;c+=1)if(e[a[c]]>0){n=a[c];break}return t?[e[n],G(e[n],Q[n])]:a.reduce((function(t,a){return Object(W.a)(Object(W.a)({},t),{},Object(J.a)({},a,[e[a],G(e[a],Q[a])]))}),{})},Z=(a(324),function(e){var t=e.id,a=e.className,n=e.name,r=e.date,o=e.theme,l=e.onPreviewCardClick,i=V(r),s=i.time,m=Object(R.a)(i,["time"]),d=X(m,!0),u=Object(f.a)(d,2),E=u[0],v=u[1];return c.a.createElement(I.a,{className:"preview-card-wrapper","data-to":"event",onClick:function(e){return l(e,t)}},c.a.createElement("div",{className:L()(["preview-card",a,"preview-card-".concat(o)])},c.a.createElement("div",{className:"card-event"},c.a.createElement(U,{color:"transparent",font:"body3"},"future"===s?"\u0414\u043e":"C"),c.a.createElement(U,{color:"white",font:"h3",bold:!0},n)),c.a.createElement("div",{className:"card-date"},c.a.createElement(U,{color:"transparent",font:"body3"},q(r)),c.a.createElement("div",{className:"date-inline"},c.a.createElement(U,{color:"white",font:"h3",bold:!0},E),c.a.createElement(U,{className:"date-inline-type",color:"transparent",font:"body3"},v)))))}),$=(a(325),function(e){var t=e.id,a=e.goForward,n=e.fetchedEvents,r=e.setEvent,o=function(e,t){a(e),r(t),i.a.send("VKWebAppTapticImpactOccurred",{style:"heavy"})};return c.a.createElement(_.a,{id:t,separator:!1},c.a.createElement(D,{className:"home-header",color:"softBlue",font:"h1",bold:!0},"\u041c\u043e\u0438 \u0421\u043e\u0431\u044b\u0442\u0438\u044f"),c.a.createElement(w.a,{title:"Events"},c.a.createElement(j.a,null,n&&n.map((function(e){var t=e.id,a=e.name,n=e.date,r=e.theme;return c.a.createElement(Z,{key:"event-".concat(t),id:t,name:a,date:n,theme:r,onPreviewCardClick:o})})))),c.a.createElement(S.a,{vertical:"bottom"},c.a.createElement(T.a,{className:"add-button",before:c.a.createElement(A.a,null),onClick:a,"data-to":"create_event_name"})))}),ee=a(15),te=a(131),ae=a.n(te),ne=a(129),ce=a.n(ne),re=a(130),oe=a.n(re),le=(a(340),function(e){var t=e.className,a=e.osName,n=e.goBack,r=e.color,o=e.text;return c.a.createElement("div",{className:L()(["header-wrapper","header-wrapper-".concat(r),t])},n&&c.a.createElement(ae.a,{onClick:n,"data-to":"home",className:"header-button"},a===ee.b?c.a.createElement(ce.a,null):c.a.createElement(oe.a,null)),o&&c.a.createElement(U,{className:"header-text",font:"body3",bold:!0},o))}),ie=(a(341),a(342),a(343),a(344),a(345),a(346),a(347),a(348),a(349),{"blue-gradient":function(e){var t=e.days,a=e.hours,n=e.minutes,r=e.seconds,o=e.fontSize;return c.a.createElement("div",{className:L()(["event-card-date","event-card-date-inline"])},c.a.createElement("div",{className:L()(["event-card-time","event-card-time-inline"])},c.a.createElement(U,{color:"white",style:{font:o+"px Rubik, sans-serif"}},t[0]),c.a.createElement(U,{color:"transparent",font:"body3"},t[1])),c.a.createElement(U,{className:"colon-separator",color:"white",style:{font:o+"px Rubik, sans-serif"}},":"),c.a.createElement("div",{className:L()(["event-card-time","event-card-time-inline"])},c.a.createElement(U,{color:"white",style:{font:o+"px Rubik, sans-serif"}},a[0]),c.a.createElement(U,{color:"transparent",font:"body3"}," ",a[1])),c.a.createElement(U,{className:"colon-separator",color:"white",style:{font:o+"px Rubik, sans-serif"}},":"),c.a.createElement("div",{className:L()(["event-card-time","event-card-time-inline"])},c.a.createElement(U,{color:"white",style:{font:o+"px Rubik, sans-serif"}},[n[0]]),c.a.createElement(U,{color:"transparent",font:"body3"}," ",n[1])),c.a.createElement(U,{className:"colon-separator",color:"white",style:{font:o+"px Rubik, sans-serif"}},":"),c.a.createElement("div",{className:L()(["event-card-time","event-card-time-inline"])},c.a.createElement(U,{color:"white",style:{font:o+"px Rubik, sans-serif"}},r[0]),c.a.createElement(U,{color:"transparent",font:"body3"}," ",r[1])))},"red-gradient":function(e){var t=e.days,a=e.hours,n=e.minutes,r=e.seconds;return c.a.createElement("div",{className:L()(["event-card-date","event-card-date-center"])},c.a.createElement(U,{className:L()(["event-card-time","event-card-time-center"]),color:"white",font:"h1"},t[0],c.a.createElement("div",{className:"event-card-days-after","data-width":t[1].length},c.a.createElement(U,{color:"transparent",font:"body2","data-width":"3"},t[1]))),c.a.createElement(U,{className:L()(["event-card-time","event-card-time-center"]),color:"white",font:"h1"},a[0],c.a.createElement("div",{className:"event-card-hours-before","data-width":a[1].length},c.a.createElement(U,{color:"transparent",font:"body2"},a[1]))),c.a.createElement(U,{className:L()(["event-card-time","event-card-time-center"]),color:"white",font:"h1"},n[0],c.a.createElement("div",{className:"event-card-minutes-after","data-width":n[1].length},c.a.createElement(U,{color:"transparent",font:"body2"},n[1]))),c.a.createElement(U,{className:L()(["event-card-time","event-card-time-center"]),color:"white",font:"h1"},r[0],c.a.createElement("div",{className:"event-card-seconds-before","data-width":r[1].length},c.a.createElement(U,{color:"transparent",font:"body2"},r[1]))))},"violet-gradient":function(e){var t=e.days,a=e.hours,n=e.minutes,r=e.seconds;return c.a.createElement("div",{className:L()(["event-card-date","event-card-date-square"])},c.a.createElement("div",{className:L()(["event-card-time","event-card-time-square"])},c.a.createElement(U,{color:"white",font:"h1"},t[0]),c.a.createElement(U,{color:"transparent",font:"body3"},t[1])),c.a.createElement("div",{className:L()(["event-card-time","event-card-time-square"])},c.a.createElement(U,{color:"white",font:"h1"},a[0]),c.a.createElement(U,{color:"transparent",font:"body3"}," ",a[1])),c.a.createElement("div",{className:L()(["event-card-time","event-card-time-square"])},c.a.createElement(U,{color:"white",font:"h1"},n[0]),c.a.createElement(U,{color:"transparent",font:"body3"}," ",n[1])),c.a.createElement("div",{className:L()(["event-card-time","event-card-time-square"])},c.a.createElement(U,{color:"white",font:"h1"},r[0]),c.a.createElement(U,{color:"transparent",font:"body3"}," ",r[1])))},"green-gradient":function(e){var t=e.days,a=e.hours,n=e.minutes,r=e.seconds;return c.a.createElement("div",{className:L()(["event-card-date","event-card-date-column"])},c.a.createElement("div",{className:L()(["event-card-time","event-card-time-column"])},c.a.createElement(U,{color:"white",font:"h1"},t[0]),c.a.createElement(U,{color:"transparent",font:"body2"},t[1])),c.a.createElement("div",{className:L()(["event-card-time","event-card-time-column"])},c.a.createElement(U,{color:"white",font:"h1"},a[0]),c.a.createElement(U,{color:"transparent",font:"body2"}," ",a[1])),c.a.createElement("div",{className:L()(["event-card-time","event-card-time-column"])},c.a.createElement(U,{color:"white",font:"h1"},n[0]),c.a.createElement(U,{color:"transparent",font:"body2"}," ",n[1])),c.a.createElement("div",{className:L()(["event-card-time","event-card-time-column"])},c.a.createElement(U,{color:"white",font:"h1"},r[0]),c.a.createElement(U,{color:"transparent",font:"body2"}," ",r[1])))}}),se=function(e){var t=e.theme,a=Object(R.a)(e,["theme"]);return Object(n.createElement)(ie[t],a)},me=function(e){var t=e.name,a=e.date,n=e.time,r=e.timeMoments,o=e.theme,l=function(e){return(18-Object.keys(e).reduce((function(t,a){return t+String(e[a][0]).length}),0))*(window.innerWidth/100)}(r);return c.a.createElement("div",{className:L()(["event-card-wrapper"])},c.a.createElement(U,{color:"white",font:"body2",bold:!0},"future"===n?"\u0414\u043e":"C",": ",t),c.a.createElement(U,{color:"transparent",font:"body3"},q(a)),c.a.createElement(se,Object.assign({theme:o,fontSize:l},r)))},de=a(132),ue=a.n(de),fe=a(133),Ee=a.n(fe),ve=a(134),be=a.n(ve),pe=a(135),he=a.n(pe),Oe=(a(350),function(e){var t=e.goForward,a=e.storyShareClosure,r=e.wallPostShareClosure,o=Object(n.useState)(!1),l=Object(f.a)(o,2),i=l[0],s=l[1];return c.a.createElement(S.a,{vertical:"bottom",className:L()("container",{hidden:i})},c.a.createElement(T.a,{className:"buttons",before:c.a.createElement(Ee.a,null),onClick:r}),c.a.createElement(T.a,{className:"buttons",before:c.a.createElement(be.a,null),onClick:a}),c.a.createElement(T.a,{className:"buttons",before:c.a.createElement(ue.a,null),onClick:t,"data-to":"edit_event"}),c.a.createElement(T.a,{className:"buttons",before:c.a.createElement(he.a,null),onClick:function(){return s(!i)}}))}),Ne=a(136),_e=a.n(Ne),ge={"blue-gradient":"linear-gradient(315deg, #738bdc 0%, #48c3eb 74%)","red-gradient":"linear-gradient(315deg, #ee9617 0%, #fe5858 74%)","violet-gradient":"linear-gradient(315deg, #42378f 0%, #f53844 74%)","green-gradient":"linear-gradient(315deg, #08e1ae 0%, #98de5b 74%)"},we=function(e,t,a){var n=a.days,c=a.hours,r=a.minutes,o=a.seconds,l="";return l+="future"===e?'\u0414\u043e \u0441\u043e\u0431\u044b\u0442\u0438\u044f "'.concat(t,'" \u043e\u0441\u0442\u0430\u043b\u043e\u0441\u044c '):'C \u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u044f "'.concat(t,'" \u0443\u0436\u0435 \u043f\u0440\u043e\u0448\u043b\u043e '),l+="".concat(0!==n[0]?"".concat(n[0]," ").concat(n[1]," "):"")+"".concat(0!==c[0]?"".concat(c[0]," ").concat(c[1]," "):"")+"".concat(0!==r[0]?"".concat(r[0]," ").concat(r[1]," "):"")+"".concat(0!==o[0]?"".concat(o[0]," ").concat(o[1]):"","!\n\n")+"\u0417\u0430\u043f\u0435\u0447\u0430\u0442\u043b\u0438\u0442\u044c \u0441\u0432\u043e\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u043c\u043e\u0436\u043d\u043e \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 Momentum."},ye=(a(351),Object(ee.c)()),je=function(e){var t=e.id,a=e.goBack,n=e.eventId,r=e.goForward,o=Object(s.c)((function(e){return e.events.events.filter((function(e){return e.id===n}))})),l=Object(f.a)(o,1)[0],m=V(l.date),d=m.time,u=Object(R.a)(m,["time"]),E=X(u);return c.a.createElement(_.a,{id:t,separator:!1,className:L()(["event-panel","event-panel-".concat(l.theme)])},c.a.createElement(le,{osName:ye,goBack:a,color:"white"}),c.a.createElement(me,{name:l.name,date:l.date,time:d,timeMoments:E,theme:l.theme}),c.a.createElement(Oe,{goForward:r,storyShareClosure:function(){!function(e,t){var a={transform:"scale(".concat(2,")"),transformOrigin:"top left",width:"".concat(e.offsetWidth,"px"),height:"".concat(e.offsetHeight,"px"),padding:"20px",borderRadius:"15px",background:ge[t]},n={height:2*e.offsetHeight+150,width:2*e.offsetWidth+150,quality:1,style:a};_e.a.toPng(e,n).then((function(e){i.a.send("VKWebAppShowStoryBox",{background_type:"none",stickers:[{sticker_type:"renderable",sticker:{can_delete:0,content_type:"image",blob:e,transform:{relation_width:.75},clickable_zones:[{action_type:"link",action:{link:"https://vk.com/app7409014",tooltip_text_key:"tooltip_open_app"},clickable_area:[{x:17,y:110},{x:97,y:110},{x:97,y:132},{x:17,y:132}]}]}}]})})).catch((function(e){console.error("Story error",e)}))}(document.getElementsByClassName("event-card-wrapper")[0],l.theme)},wallPostShareClosure:function(){return function(e,t,a){i.a.send("VKWebAppShowWallPostBox",{message:we(e,t,a),attachments:"https://vk.com/app7409014"})}(d,l.name,E)}}))},ke=(a(352),Object(n.forwardRef)((function(e,t){var a=e.className,n=e.color,r=e.font,o=Object(R.a)(e,["className","color","font"]);return c.a.createElement("input",Object.assign({className:L()(["input",a,"input-".concat(n),"input-".concat(r)]),ref:t},o))}))),Te="NEW_EVENT:SET_NAME",Ce="NEW_EVENT:SET_DATE",Se="NEW_EVENT:SET_THEME",Pe="NEW_EVENT:CLEAR",Ae=(a(353),0),Re=1,xe=2,Ie=3,Be="EVENTS:SET_EVENTS",Le="EVENTS:SET_LOADING_STATE",Ue="EVENTS:ADD_EVENT",De="EVENTS:REMOVE_EVENT",We="EVENTS:UPDATE_EVENT",Fe=function(e){return{type:Le,payload:{loadingState:e}}},Ve=function(e){return function(t){t(Fe(Re)),fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/Momentum",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_TOKEN:"47614f7547614f7547614f752b471042034476147614f7519f5aa91d3a24857b963183a",REACT_APP_PUBLIC_URL:"https://momentum-server.ru",REACT_APP_URL:"https://vk.com/app7409014"}).REACT_APP_LOCAL_URL||"https://momentum-server.ru","/user/").concat(e,"/").concat("47614f7547614f7547614f752b471042034476147614f7519f5aa91d3a24857b963183a","/").concat(window.location.search)).then((function(e){return e.json()})).then((function(e){var a=e.events;t(function(e){return{type:Be,payload:{events:e}}}(a)),t(Fe(xe))})).catch((function(e){console.log(e),t(Fe(Ie))}))}},He=function(e,t){return function(a){a(function(e){return{type:Ue,payload:{event:e}}}(t)),fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/Momentum",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_TOKEN:"47614f7547614f7547614f752b471042034476147614f7519f5aa91d3a24857b963183a",REACT_APP_PUBLIC_URL:"https://momentum-server.ru",REACT_APP_URL:"https://vk.com/app7409014"}).REACT_APP_LOCAL_URL||"https://momentum-server.ru","/user/").concat(e,"/").concat("47614f7547614f7547614f752b471042034476147614f7519f5aa91d3a24857b963183a","/add_event/").concat(window.location.search),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:t})})}},Ke=function(e,t){return function(a){a(function(e){return{type:De,payload:{eventId:e}}}(t)),fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/Momentum",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_TOKEN:"47614f7547614f7547614f752b471042034476147614f7519f5aa91d3a24857b963183a",REACT_APP_PUBLIC_URL:"https://momentum-server.ru",REACT_APP_URL:"https://vk.com/app7409014"}).REACT_APP_LOCAL_URL||"https://momentum-server.ru","/user/").concat(e,"/").concat("47614f7547614f7547614f752b471042034476147614f7519f5aa91d3a24857b963183a","/delete_event/").concat(window.location.search),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({eventId:t})})}},Me=function(e,t,a){return function(n){n(function(e,t){return{type:We,payload:{eventId:e,changes:t}}}(t,a)),fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/Momentum",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_TOKEN:"47614f7547614f7547614f752b471042034476147614f7519f5aa91d3a24857b963183a",REACT_APP_PUBLIC_URL:"https://momentum-server.ru",REACT_APP_URL:"https://vk.com/app7409014"}).REACT_APP_LOCAL_URL||"https://momentum-server.ru","/user/").concat(e,"/").concat("47614f7547614f7547614f752b471042034476147614f7519f5aa91d3a24857b963183a","/update_event/").concat(window.location.search),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(W.a)({eventId:t},a))})}},qe=Object(ee.c)(),Je=function(e){var t=e.id,a=e.goForward,r=e.goBack,o=e.userId,l=e.event,i=e.isUpdater,m=Object(s.b)(),d=Object(n.useState)(l?l.name:""),u=Object(f.a)(d,2),E=u[0],v=u[1],b=Object(n.useRef)(null);return Object(n.useEffect)((function(){b.current.focus()}),[b]),c.a.createElement(_.a,{id:t,separator:!1},c.a.createElement(le,{osName:qe,goBack:r,color:"black"}),c.a.createElement(I.a,{className:L()(["select-event-name-wrapper"])},c.a.createElement(U,{className:"select-event-name-title",color:"black",font:"body3",bold:!0},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f:"),c.a.createElement(ke,{className:"select-event-name-input",placeholder:"\u041d\u0430\u0437\u043e\u0432\u0438 \u041c\u0435\u043d\u044f",onChange:function(e){var t=e.target.value;return v(t)},value:E,font:"h3",color:"softBlue",ref:b}),c.a.createElement(T.a,{className:"select-event-name-button",onClick:function(e){var t=E||"\u041d\u0430\u0437\u043e\u0432\u0438 \u041c\u0435\u043d\u044f";i?(m(Me(o,l.id,{name:t})),r()):(m(function(e){return{type:Te,payload:{name:e}}}(t)),a(e))},"data-to":"create_event_date"},"\u0413\u043e\u0442\u043e\u0432\u043e")))},Ye=a(137),ze=a.n(Ye),Ge=a(138),Qe=a.n(Ge),Xe=(a(354),function(e){var t=e.className,a=e.children,n=e.isOpen;return c.a.createElement("div",{className:L()(["modal-wrapper",t,{hidden:!n}])},c.a.createElement("div",{className:"modal-content"},a))}),Ze=a(139),$e=Object(ee.c)(),et=(M={},Object(J.a)(M,ee.b,"ios"),Object(J.a)(M,ee.a,"android"),M),tt=et[$e]?et[$e]:"default",at={1:"\u044f\u043d\u0432\u0430\u0440\u044f",2:"\u0444\u0435\u0432\u0440\u0430\u043b\u044f",3:"\u043c\u0430\u0440\u0442\u0430",4:"\u0430\u043f\u0440\u0435\u043b\u044f",5:"\u043c\u0430\u044f",6:"\u0438\u044e\u043d\u044f",7:"\u0438\u044e\u043b\u044f",8:"\u0430\u0432\u0433\u0443\u0441\u0442\u0430",9:"\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f",10:"\u043e\u043a\u0442\u044f\u0431\u0440\u044f",11:"\u043d\u043e\u044f\u0431\u0440\u044f",12:"\u0434\u0435\u043a\u0430\u0431\u0440\u044f"},nt={date:{format:"DD",caption:"Day",step:1},month:{format:function(e){return at[e.getMonth()+1]},caption:"Mon",step:1},year:{format:"YYYY",caption:"Year",step:1}},ct={hour:{format:"hh",caption:"Hour",step:1},minute:{format:"mm",caption:"Min",step:1}},rt=function(e){var t=e.exactTime,a=Object(R.a)(e,["exactTime"]);return c.a.createElement(Ze,Object.assign({theme:tt,isPopup:!1,showHeader:!1,showFooter:!1,dateConfig:t?ct:nt},a))};K.a.locale("ru");a(355);var ot=Object(ee.c)(),lt=function(e){var t=e.id,a=e.goForward,r=e.goBack,o=e.userId,l=e.event,i=e.isUpdater,m=Object(s.b)(),d=Object(n.useState)(l?new Date(l.date):new Date),u=Object(f.a)(d,2),E=u[0],v=u[1],b=Object(n.useState)(!1),p=Object(f.a)(b,2),h=p[0],O=p[1],N=Object(n.useState)(!1),g=Object(f.a)(N,2),w=g[0],y=g[1];return c.a.createElement(_.a,{id:t,separator:!1},c.a.createElement(Xe,{isOpen:w},c.a.createElement("div",{className:"select-event-date-modal"},c.a.createElement(U,{className:"title",color:"black",font:"body3",bold:!0},"\u0412\u0440\u0435\u043c\u044f \u0441\u043e\u0431\u044b\u0442\u0438\u044f:"),h&&c.a.createElement(rt,{value:h,onChange:function(e){return O(e)},exactTime:!0}),c.a.createElement(T.a,{className:"button",onClick:function(){y(!1)}},"\u0413\u043e\u0442\u043e\u0432\u043e"))),c.a.createElement(le,{osName:ot,goBack:r,color:"black"}),c.a.createElement(I.a,{className:L()(["select-event-date-wrapper"])},c.a.createElement(U,{className:"select-event-date-title",color:"black",font:"body3",bold:!0},"\u0414\u0430\u0442\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u044f:"),c.a.createElement(rt,{value:E,onChange:function(e){return v(e)}}),c.a.createElement("div",{className:"time-picker",onClick:function(){h||O(new Date(0)),y(!0)}},c.a.createElement(ze.a,null),c.a.createElement(U,{className:"time-picker-text"},h?function(e){return K()(e).format("HH:mm")}(h):"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0432\u0440\u0435\u043c\u044f"),h&&c.a.createElement(Qe.a,{onClick:function(e){e.stopPropagation(),O(!1)}})),c.a.createElement(T.a,{className:"select-event-date-button",onClick:function(e){E.setSeconds(0),E.setMilliseconds(0),h?(E.setHours(h.getHours()),E.setMinutes(h.getMinutes())):(E.setHours(0),E.setMinutes(0)),i?(m(Me(o,l.id,{date:E.getTime()})),r()):(m(function(e){return{type:Ce,payload:{date:e}}}(E.getTime())),a(e))},"data-to":"create_event_theme"},"\u0413\u043e\u0442\u043e\u0432\u043e")))},it=a(140),st=a(141),mt=a.n(st),dt=(a(364),function(e){var t=e.className,a=e.theme,n=e.selected;return c.a.createElement("div",{className:L()(["event-card-example",t,"event-card-example-".concat(a)]),"data-theme":a},n&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"selected"}),c.a.createElement(mt.a,{fill:"white",className:"done-icon"})))}),ut=(a(365),Object(ee.c)()),ft=["red-gradient","blue-gradient","violet-gradient","green-gradient"],Et=function(e){var t=e.id,a=e.goForward,r=e.goBack,o=e.setHistoryForce,l=e.userId,i=e.event,m=e.setEventId,d=e.isUpdater,u=Object(s.b)(),E=Object(s.c)((function(e){return e.newEvent.newEvent})),v=Object(n.useState)(i?i.theme:"red-gradient"),b=Object(f.a)(v,2),p=b[0],h=b[1];return c.a.createElement(_.a,{id:t,separator:!1},c.a.createElement(le,{className:"select-event-theme-header",osName:ut,goBack:r,color:"black",text:"\u0422\u0435\u043c\u044b \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f"}),c.a.createElement(I.a,{className:L()(["select-event-theme-wrapper"])},c.a.createElement("div",{className:"example-cards-container",onClick:function(e){var t=e.target.dataset.theme;t&&h(t)}},ft.map((function(e){return c.a.createElement(dt,{key:e,theme:e,selected:p===e})}))),c.a.createElement(S.a,{vertical:"bottom"},c.a.createElement(T.a,{className:"select-event-theme-button",onClick:function(e){if(d)u(Me(l,i.id,{theme:p})),r();else{var t=Object(it.generate)();u(He(l,Object(W.a)(Object(W.a)({},E),{},{theme:p,id:t}))),u({type:Pe}),m(t),a(e),o(["home","event"])}},"data-to":"event"},"\u0413\u043e\u0442\u043e\u0432\u043e"))))},vt=a(142),bt=a.n(vt),pt=a(59),ht=a.n(pt),Ot=a(145),Nt=a.n(Ot),_t=a(91),gt=a.n(_t),wt=a(143),yt=a.n(wt),jt=a(144),kt=a.n(jt),Tt=(a(366),Object(ee.c)()),Ct=function(e){var t=e.id,a=e.goBack,n=e.eventId,r=e.goForward,o=e.userId,l=e.setHistoryForce,i=Object(s.b)(),m=Object(s.c)((function(e){return e.events.events.filter((function(e){return e.id===n}))})),d=Object(f.a)(m,1)[0];return c.a.createElement(_.a,{id:t,separator:!1},c.a.createElement(le,{className:"edit-event-header",osName:Tt,goBack:a,color:"black",text:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),c.a.createElement(I.a,{className:L()(["edit-event-wrapper"])},c.a.createElement(w.a,null,c.a.createElement(ht.a,{className:L()(["edit-cell","edit-name"]),expandable:!0,before:c.a.createElement(gt.a,{className:"edit-icon",fill:"white"}),onClick:r,"data-to":"update_event_name"},d?d.name:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),c.a.createElement(ht.a,{className:L()(["edit-cell","edit-date"]),expandable:!0,before:c.a.createElement(yt.a,{className:"edit-icon",fill:"white"}),onClick:r,"data-to":"update_event_date"},q(d&&d.date)||"\u0414\u0430\u0442\u0430"),c.a.createElement(ht.a,{className:L()(["edit-cell","edit-notifications"]),before:c.a.createElement(kt.a,{className:"edit-icon",fill:"white"}),asideContent:c.a.createElement(Nt.a,{disabled:!0})},"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f"),d&&d.theme&&c.a.createElement(ht.a,{className:L()(["edit-cell","edit-theme","theme-".concat(d.theme)]),expandable:!0,before:c.a.createElement(gt.a,{className:"edit-icon",fill:"white"}),onClick:r,"data-to":"update_event_theme"},"\u041e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435")),c.a.createElement(S.a,{vertical:"bottom"},c.a.createElement(T.a,{className:"edit-event-button",onClick:function(e){i(Ke(o,n)),r(e),l(["home"])},"data-to":"home"},c.a.createElement("div",{className:"button-container"},c.a.createElement(bt.a,null),c.a.createElement("p",{className:"button-text"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))))))},St=a(54),Pt=(a(372),a(373),function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.events})),a=t.events,r=t.loadingState,o=Object(n.useState)(c.a.createElement(O.a,{size:"large"})),l=Object(f.a)(o,2),m=l[0],E=l[1],b=function(e){var t=Object(n.useState)(e),a=Object(f.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)([e]),l=Object(f.a)(o,2),s=l[0],m=l[1];return{activePanel:c,history:s,goForward:function(t){var a=t.currentTarget.dataset.to;c===e&&i.a.send("VKWebAppEnableSwipeBack"),m((function(e){return[].concat(Object(St.a)(e),[a])})),r(a)},goBack:function(){var t=Object(St.a)(s);t.pop();var a=t[t.length-1];a===e&&i.a.send("VKWebAppDisableSwipeBack"),m((function(e){return e.slice(0,e.length-1)})),r(a)},setHistoryForce:function(e){m(Object(St.a)(e))}}}("home"),h=b.activePanel,N=b.history,_=b.goForward,g=b.goBack,w=b.setHistoryForce,y=Object(n.useState)(null),j=Object(f.a)(y,2),k=j[0],T=j[1],C=Object(n.useState)(null),S=Object(f.a)(C,2),P=S[0],A=S[1],R=Object(s.c)((function(e){return e.events.events.filter((function(e){return e.id===k}))})),x=Object(f.a)(R,1)[0];return Object(n.useEffect)((function(){function t(){return(t=Object(u.a)(d.a.mark((function t(){var a,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.send("VKWebAppGetUserInfo");case 2:a=t.sent,n=a.id,A(n),e(Ve(n));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),Object(n.useEffect)((function(){r===xe&&E(null)}),[r]),c.a.createElement(p.a,{isWebView:!0},c.a.createElement(v.a,{activePanel:h,popout:m,onSwipeBack:g,history:N,header:!1},c.a.createElement($,{id:"home",fetchedEvents:a,goForward:_,setEvent:T}),c.a.createElement(je,{id:"event",goBack:g,goForward:_,eventId:k}),c.a.createElement(Je,{id:"create_event_name",goForward:_,goBack:g}),c.a.createElement(lt,{id:"create_event_date",goForward:_,goBack:g}),c.a.createElement(Et,{id:"create_event_theme",goForward:_,goBack:g,setHistoryForce:w,userId:P,setEventId:T}),c.a.createElement(Ct,{id:"edit_event",goForward:_,goBack:g,setHistoryForce:w,eventId:k,userId:P}),c.a.createElement(Je,{id:"update_event_name",goForward:_,goBack:g,userId:P,event:x,isUpdater:!0}),c.a.createElement(lt,{id:"update_event_date",goForward:_,goBack:g,userId:P,event:x,isUpdater:!0}),c.a.createElement(Et,{id:"update_event_theme",goForward:_,goBack:g,userId:P,event:x,isUpdater:!0})))}),At=a(50),Rt=a(70),xt={events:[],loadingState:Ae},It=Object(Rt.a)((function(e,t){if(t){var a=t.payload;switch(t.type){case Be:e.events=a.events;break;case Ue:e.events=[a.event].concat(Object(St.a)(e.events));break;case De:e.events=e.events.filter((function(e){return e.id!==a.eventId}));break;case We:e.events=e.events.map((function(e){return e.id!==a.eventId?e:Object(W.a)(Object(W.a)({},e),a.changes)}));break;case Le:e.loadingState=a.loadingState}}}),xt),Bt={newEvent:{}},Lt=Object(Rt.a)((function(e,t){if(t){var a=t.payload;switch(t.type){case Te:e.newEvent.name=a.name;break;case Ce:e.newEvent.date=a.date;break;case Se:e.newEvent.theme=a.theme;break;case Pe:e.newEvent=Bt}}}),Bt),Ut=a(148),Dt=Object(At.c)({events:It,newEvent:Lt});i.a.send("VKWebAppInit");var Wt=Object(At.d)(Dt,Object(At.a)(Ut.a));o.a.render(c.a.createElement(s.a,{store:Wt},c.a.createElement(Pt,null)),document.getElementById("root"))}},[[237,1,2]]]);
//# sourceMappingURL=main.49ead698.chunk.js.map