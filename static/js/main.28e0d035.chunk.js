(this.webpackJsonpmytodolist=this.webpackJsonpmytodolist||[]).push([[0],{125:function(t,e,n){},126:function(t,e,n){},154:function(t,e,n){"use strict";n.r(e);var a,r,c=n(0),i=n.n(c),s=n(13),o=n.n(s),u=(n(125),n(126),n(208)),l=n(16),d=n(211),j=n(192),b=n(194),O=n(195),f=n(196),p=n(157),h=n(156),m=n(103),x=n.n(m),v=n(197),T=n(216),y=n(12),g=n.n(y),S=n(20),I=n(6),k=n(98),C=n.n(k).a.create({withCredentials:!0,headers:{"API-KEY":"5c7c1e5a-aa4c-4b00-a92b-b6f5df506a28"},baseURL:"https://social-network.samuraijs.com/api/1.1/"}),D=function(){return C.get("todo-lists",{})},A=function(t){return C.post("todo-lists",{title:t},{})},w=function(t){return C.delete("todo-lists/".concat(t),{})},E=function(t,e){return C.put("todo-lists/".concat(t),{title:e},{})},L=function(t){return C.get("todo-lists/".concat(t,"/tasks"),{})},P=function(t,e){return C.post("todo-lists/".concat(t,"/tasks"),{title:e},{})},N=function(t,e){return C.delete("todo-lists/".concat(t,"/tasks/").concat(e),{})},H=function(t,e,n){return C.put("todo-lists/".concat(t,"/tasks/").concat(e),Object(I.a)({},n),{})},G=function(){return C.get("/auth/me",{})},R=function(t){return C.post("/auth/login",Object(I.a)({},t),{})},K=function(){return C.delete("/auth/login",{})},U=n(53),M=n(36);!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(a||(a={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(r||(r={}));var F,z={},B=function(t,e){return{type:"REMOVE-TASK",taskId:t,todolistID:e}},V=function(t,e){return{type:"ADD-TASK",todolistID:t,task:e}},q=function(t,e,n){return{type:"UPDATE-TASK",TaskId:t,module:e,todolistID:n}},Y=function(t,e,n){return{type:"CHANGE-TASK-ENTITY-STATUS",taskId:t,todolistID:e,entityStatus:n}},Z=function(t){return function(){var e=Object(S.a)(g.a.mark((function e(n){var a,r,c,i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(tt("loading")),a={title:t.title,description:t.description,status:t.status,priority:t.priority,startDate:t.startDate,deadline:t.deadline},e.next=4,H(t.todoListId,t.id,a);case 4:r=e.sent,c=r.data,i=c.data.item,c.messages,c.resultCode,n(q(t.id,i,t.todoListId)),n(tt("success"));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},J=[],W=function(t){return{type:"REMOVE-TODOLISTS",todolistID:t}},$=function(t,e){return{type:"CHANGE-TODOLIST-TITLE",title:t,todolistID:e}},_=function(t,e){return{type:"CHANGE-TODOLIST-ENTITY-STATUS",todolistID:t,entityStatus:e}},Q=function(t){return function(){var e=Object(S.a)(g.a.mark((function e(n){var a,r,c,i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(tt("loading")),e.prev=1,e.next=4,A(t);case 4:a=e.sent,r=a.data,c=r.data.item,i=r.messages,r.resultCode===F.OK?n({type:"ADD-TODOLIST",todolist:c}):n(et(i[0])),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n(et("Authorization has been denied for this request."));case 13:return e.prev=13,n(tt("success")),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(t){return e.apply(this,arguments)}}()};!function(t){t[t.OK=0]="OK",t[t.Error=1]="Error"}(F||(F={}));var X={status:"success",error:null,dataForm:{id:null,email:null,login:null,authMe:!1},spinner:!0},tt=function(t){return{type:"APP/LOAD-PROGRESS",payload:{status:t}}},et=function(t){return{type:"APP/ERROR-STATUS",payload:{error:t}}},nt=function(t){return{type:"APP/INITIALIZATION",dataForm:t}},at=function(){return function(){var t=Object(S.a)(g.a.mark((function t(e){var n,a,r,c,i;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G();case 2:n=t.sent,a=n.data,r=a.data,c=a.resultCode,i=a.messages,c===F.OK?(e(nt(Object(I.a)(Object(I.a)({},r),{},{authMe:!0}))),e(function(){var t=Object(S.a)(g.a.mark((function t(e){var n,a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(tt("loading")),t.prev=1,t.next=4,D();case 4:n=t.sent,a=n.data,e({type:"SET-TODOLIST",todolists:a}),a.forEach((function(t){return e((n=t.id,function(){var t=Object(S.a)(g.a.mark((function t(e){var a,r,c;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(tt("loading")),t.next=3,L(n);case 3:a=t.sent,(r=a.data).error,c=r.items,r.totalCount,e({type:"SET-TASK",todolistID:n,tasks:c}),e(tt("success"));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));var n})),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),e(et("Authorization has been denied for this request."));case 13:return t.prev=13,e(tt("success")),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[1,10,13,16]])})));return function(e){return t.apply(this,arguments)}}())):e(et(i[0])),e({type:"APP/SPINNER",spinner:!1});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},rt={isLoggedIn:!1},ct=n(2);function it(){var t=Object(l.c)((function(t){return t.app.dataForm.authMe})),e=Object(l.b)();return Object(ct.jsxs)(d.a,{sx:{flexGrow:1},children:[Object(ct.jsx)(j.a,{children:Object(ct.jsx)(b.a,{control:Object(ct.jsx)(O.a,{checked:t,onChange:function(){e(function(){var t=Object(S.a)(g.a.mark((function t(e){var n,a,r,c;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,K();case 2:n=t.sent,a=n.data,r=a.resultCode,c=a.messages,r===F.OK?(e({type:"AUTH/SET-IS-LOGGED-OUT",payload:{isLogIn:!1}}),e(nt({id:null,email:null,login:null,authMe:!1}))):e(et(c[0]));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},"aria-label":"login switch"}),label:t?"Logout":"Login"})}),Object(ct.jsx)(f.a,{position:"static",children:Object(ct.jsxs)(v.a,{style:{justifyContent:"space-between"},children:[Object(ct.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(ct.jsx)(p.a,{size:"medium",edge:"start",color:"inherit","aria-label":"menu",children:Object(ct.jsx)(x.a,{})}),Object(ct.jsx)(h.a,{variant:"h6",children:"Todolist"})]}),t&&Object(ct.jsx)("div",{children:Object(ct.jsx)(p.a,{size:"medium","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",color:"inherit",children:Object(ct.jsx)(T.a,{alt:"Remy Sharp",src:"/static/images/avatar/2.jpg"})})})]})})]})}var st=n(198),ot=function(){var t=Object(l.c)((function(t){return t.app.status}));return Object(ct.jsx)("div",{style:{height:"1px"},children:"loading"===t&&Object(ct.jsx)(d.a,{sx:{width:"100%"},children:Object(ct.jsx)(st.a,{})})})},ut=n(10),lt=n(206),dt=n(158),jt=n(27),bt=n(209),Ot=n(201),ft=n(202),pt=i.a.memo((function(t){var e=t.callBack,n=t.todolistStatus,a=Object(c.useState)(""),r=Object(jt.a)(a,2),i=r[0],s=r[1],o=Object(c.useState)(null),u=Object(jt.a)(o,2),l=u[0],d=u[1],j=function(){var t=i.trim();""!==t?(e(t),s("")):d("Title is required")};return Object(ct.jsxs)("div",{children:[Object(ct.jsx)(bt.a,{value:i,onChange:function(t){s(t.currentTarget.value)},onKeyPress:function(t){null!==l&&d(null),13===t.charCode&&"idle"===n&&j()},error:!!l,label:l||"Type value"}),Object(ct.jsx)(Ot.a,{color:"secondary",size:"small",onClick:j,disabled:"loading"===n,children:Object(ct.jsx)(ft.a,{})})]})})),ht=function(t){return t.todolist},mt=function(t){return t.app.error},xt=n(204),vt=n(203),Tt=i.a.memo((function(t){var e=t.name===t.filter?"primary":"inherit";return Object(ct.jsx)(vt.a,{endIcon:Object(ct.jsx)(xt.a,{}),variant:"contained",color:e,onClick:function(){return t.onClick()},children:t.name})})),yt=n(71),gt=i.a.memo((function(t){var e=t.spanTitle,n=Object(yt.a)(t,["spanTitle"]),a=Object(c.useState)(""),r=Object(jt.a)(a,2),i=r[0],s=r[1],o=Object(c.useState)(!1),u=Object(jt.a)(o,2),l=u[0],d=u[1],j=function(){n.callback(i),d(!1)};return l?Object(ct.jsx)("input",{value:i,onChange:function(t){s(t.currentTarget.value)},onBlur:j,onKeyPress:function(t){"Enter"===t.key&&j()},autoFocus:!0}):Object(ct.jsx)("span",{onDoubleClick:function(){d(!0),s(e)},children:e})})),St=n(205),It=i.a.memo((function(t){var e=t.task,n=t.onClickHandler,r=t.onChangeHandler,c=t.changeTaskTitleHandler;return Object(ct.jsxs)("li",{className:e.status===a.Completed?"is-done":"",children:[Object(ct.jsx)("input",{type:"checkbox",onChange:function(t){var n=t.currentTarget.checked;r(Object(I.a)(Object(I.a)({},e),{},{status:n?a.Completed:a.New}))},checked:e.status===a.Completed}),Object(ct.jsx)(gt,{spanTitle:e.title,callback:function(t){return c(Object(I.a)(Object(I.a)({},e),{},{title:t}))}}),Object(ct.jsx)(p.a,{disabled:"loading"===e.entityStatus,onClick:function(){return n(e.id)},size:"small",children:Object(ct.jsx)(St.a,{fontSize:"small"})})]})})),kt=i.a.memo((function(t){var e=Object.assign({},t),n=Object(l.b)(),r=Object(l.c)((function(t){return t.todolist.filter((function(t){return t.id===e.id}))[0]})),i=Object(l.c)((function(t){return t.tasks[e.id]})),s=i;"Active"===r.filter&&(s=i.filter((function(t){return t.status===a.New}))),"Completed"===r.filter&&(s=i.filter((function(t){return t.status===a.Completed})));var o=Object(c.useCallback)((function(t,e){n(function(t,e){return function(){var n=Object(S.a)(g.a.mark((function n(a){return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(tt("loading")),a(Y(t,e,"loading")),n.next=4,N(e,t);case 4:a(B(t,e)),a(tt("success"));case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}(t,e))}),[n]),u=Object(c.useCallback)((function(t,e){n(function(t,e){return function(){var n=Object(S.a)(g.a.mark((function n(a){var r,c,i,s;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(tt("loading")),n.prev=1,n.next=4,P(e,t);case 4:r=n.sent,c=r.data,i=c.data.item,s=c.messages,c.resultCode===F.OK?a(V(e,i)):a(et(s[0])),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),a(et("Authorization has been denied for this request."));case 13:return n.prev=13,a(tt("success")),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[1,10,13,16]])})));return function(t){return n.apply(this,arguments)}}()}(t,e))}),[n]),d=Object(c.useCallback)((function(t,e){n(function(t,e){return{type:"CHANGE-TODOLISTS",value:t,todolistID:e}}(t,e))}),[n]),j=Object(c.useCallback)((function(t,e){n(function(t,e){return function(){var n=Object(S.a)(g.a.mark((function n(a){return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(tt("loading")),n.next=3,E(e,t);case 3:a($(t,e)),a(tt("success"));case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}(t,e))}),[n]),b=Object(c.useCallback)((function(t){n(function(t){return function(){var e=Object(S.a)(g.a.mark((function e(n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(tt("loading")),n(_(t,"loading")),e.next=4,w(t);case 4:n(W(t)),n(tt("success"));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(t))}),[n]),O=Object(c.useCallback)((function(t){n(Z(t))}),[n]),f=Object(c.useCallback)((function(t){n(Z(t))}),[n]),h=Object(c.useCallback)((function(){b(e.id)}),[b,e.id]),m=Object(c.useCallback)((function(){return d("All",e.id)}),[d,e.id]),x=Object(c.useCallback)((function(){return d("Active",e.id)}),[d,e.id]),v=Object(c.useCallback)((function(){return d("Completed",e.id)}),[d,e.id]),T=Object(c.useCallback)((function(t){u(t,e.id)}),[u,e.id]),y=Object(c.useCallback)((function(t){j(t,e.id)}),[j,e.id]),I=Object(c.useCallback)((function(t){return o(t,e.id)}),[o,e.id]);return Object(ct.jsxs)("div",{children:[Object(ct.jsxs)("h3",{children:[Object(ct.jsx)(gt,{spanTitle:r.title,callback:y}),Object(ct.jsx)(p.a,{onClick:h,disabled:"loading"===r.entityStatus,size:"small",children:Object(ct.jsx)(St.a,{fontSize:"small"})})]}),Object(ct.jsx)(pt,{callBack:T,todolistStatus:r.entityStatus}),Object(ct.jsx)("ul",{style:{listStyleType:"none"},children:s&&s.map((function(t){return Object(ct.jsx)(It,{task:t,onClickHandler:I,onChangeHandler:f,changeTaskTitleHandler:O},t.id)}))}),Object(ct.jsxs)("div",{children:[Object(ct.jsx)(Tt,{onClick:m,name:"All",filter:r.filter}),Object(ct.jsx)(Tt,{onClick:x,name:"Active",filter:r.filter}),Object(ct.jsx)(Tt,{onClick:v,name:"Completed",filter:r.filter})]})]})})),Ct=function(){var t=Object(l.b)(),e=Object(l.c)(ht),n=Object(c.useCallback)(function(){var e=Object(S.a)(g.a.mark((function e(n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(Q(n));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),a=e.map((function(t){return Object(ct.jsx)(lt.a,{item:!0,children:Object(ct.jsx)(dt.a,{elevation:3,style:{padding:"20px"},children:Object(ct.jsx)(kt,{id:t.id},t.id)})},t.id)}));return Object(ct.jsxs)("div",{className:"App",children:[Object(ct.jsx)(lt.a,{container:!0,style:{margin:"50px 0",justifyContent:"center"},children:Object(ct.jsx)(pt,{callBack:n})}),Object(ct.jsx)(lt.a,{container:!0,spacing:6,children:a})]})},Dt=function(t){var e=t.children;Object(yt.a)(t,["children"]);return Object(l.c)((function(t){return t.app.dataForm.authMe}))?e:Object(ct.jsx)(ut.a,{to:"/login"})},At=n(214),wt=n(108),Et=n(199),Lt=n(200),Pt=n(106),Nt=n.n(Pt),Ht=function(){var t=Object(l.b)(),e=Object(l.c)((function(t){return t.app.dataForm.authMe})),n=Object(wt.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(e.email="Invalid email address"):e.email="Required",t.password||(e.password="Invalid email address"),e},onSubmit:function(e){var n;t((n=e,function(){var t=Object(S.a)(g.a.mark((function t(e){var a,r,c,i;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R(n);case 2:a=t.sent,(r=a.data).data,c=r.resultCode,i=r.messages,c===F.OK?(e({type:"AUTH/SET-IS-LOGGED-IN",payload:{isLogIn:!0}}),e(at())):e(et(i[0]));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}});return e?Object(ct.jsx)(ut.a,{to:Gt.TODOLIST}):Object(ct.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:"40px"},children:Object(ct.jsx)("div",{children:Object(ct.jsx)(dt.a,{elevation:3,style:{padding:"20px"},children:Object(ct.jsx)("form",{onSubmit:n.handleSubmit,children:Object(ct.jsxs)(Et.a,{children:[Object(ct.jsxs)(Lt.a,{children:[Object(ct.jsx)("p",{children:"Email: aleksmaifet@gmail.com"}),Object(ct.jsx)("p",{children:"Password: Free"})]}),Object(ct.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",margin:"30px 0"},children:[Object(ct.jsx)(T.a,{style:{backgroundColor:"red",marginBottom:"20px"},children:Object(ct.jsx)(Nt.a,{})}),Object(ct.jsx)(h.a,{component:"h1",variant:"h5",children:"Sign in"})]}),Object(ct.jsxs)(j.a,{children:[Object(ct.jsx)(bt.a,Object(I.a)({label:n.errors.email&&n.touched.email?n.errors.email:"Email",margin:"normal",error:!!n.errors.email&&!!n.touched.email},n.getFieldProps("email"))),Object(ct.jsx)(bt.a,Object(I.a)({type:"password",autoComplete:"on",label:n.errors.password&&n.touched.password?n.errors.password:"Password",margin:"normal",error:!!n.errors.password&&!!n.touched.password},n.getFieldProps("password"))),Object(ct.jsx)(b.a,Object(I.a)({style:{margin:"20px 0"},label:"Remember me",control:Object(ct.jsx)(At.a,{})},n.getFieldProps("rememberMe"))),Object(ct.jsx)(vt.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})]})})})})})},Gt={TODOLIST:"/Todolist",LOGIN:"/login"},Rt=function(){return Object(ct.jsx)("div",{children:Object(ct.jsxs)(ut.d,{children:[Object(ct.jsx)(ut.b,{path:"/",element:Object(ct.jsx)(Ht,{})}),Object(ct.jsx)(ut.b,{path:"/Todolist",element:Object(ct.jsx)(Dt,{children:Object(ct.jsx)(Ct,{})})}),Object(ct.jsx)(ut.b,{path:Gt.TODOLIST,element:Object(ct.jsx)(Ct,{})}),Object(ct.jsx)(ut.b,{path:Gt.LOGIN,element:Object(ct.jsx)(Ht,{})})]})})},Kt=n(215),Ut=n(212),Mt=i.a.memo((function(t){var e=t.errorStatus,n=Object(l.b)(),a=null!=e,r=function(t,e){"clickaway"!==e&&n(et(null))};return Object(ct.jsx)(ct.Fragment,{children:Object(ct.jsx)(Kt.a,{open:a,autoHideDuration:6e3,onClose:r,children:Object(ct.jsxs)(Ut.a,{style:{backgroundColor:"red"},onClose:r,variant:"filled",severity:"error",children:[e," \ud83d\ude20"]})})})})),Ft=n(207),zt=function(){return Object(ct.jsx)("div",{style:{minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(ct.jsx)(Ft.a,{color:"primary"})})};var Bt=function(){var t=Object(l.c)((function(t){return t.app.spinner})),e=Object(l.b)(),n=Object(l.c)(mt);return Object(c.useEffect)((function(){e(at())}),[e]),t?Object(ct.jsx)(zt,{}):Object(ct.jsxs)(u.a,{fixed:!0,children:[Object(ct.jsx)(it,{}),Object(ct.jsx)(ot,{}),Object(ct.jsx)(Rt,{}),Object(ct.jsx)(Mt,{errorStatus:n})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Vt=n(73),qt=n(107),Yt=Object(Vt.b)({todolist:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHANGE-TODOLISTS":return Object(U.a)(t.map((function(t){return t.id===e.todolistID?Object(I.a)(Object(I.a)({},t),{},{filter:e.value}):t})));case"REMOVE-TODOLISTS":return Object(U.a)(t.filter((function(t){return t.id!==e.todolistID})));case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.todolistID?Object(I.a)(Object(I.a)({},t),{},{title:e.title}):t}));case"ADD-TODOLIST":return[Object(I.a)(Object(I.a)({},e.todolist),{},{filter:"All",entityStatus:"idle"})].concat(Object(U.a)(t));case"SET-TODOLIST":return e.todolists.map((function(t){return Object(I.a)(Object(I.a)({},t),{},{filter:"All",entityStatus:"idle"})}));case"CHANGE-TODOLIST-ENTITY-STATUS":return t.map((function(t){return t.id===e.todolistID?Object(I.a)(Object(I.a)({},t),{},{entityStatus:e.entityStatus}):t}));default:return t}},tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASK":return Object(I.a)(Object(I.a)({},t),{},Object(M.a)({},e.todolistID,t[e.todolistID].filter((function(t){return t.id!==e.taskId}))));case"ADD-TASK":return Object(I.a)(Object(I.a)({},t),{},Object(M.a)({},e.todolistID,[Object(I.a)(Object(I.a)({},e.task),{},{entityStatus:"idle"})].concat(Object(U.a)(t[e.todolistID]))));case"UPDATE-TASK":return Object(I.a)(Object(I.a)({},t),{},Object(M.a)({},e.todolistID,t[e.todolistID].map((function(t){return t.id===e.TaskId?Object(I.a)(Object(I.a)({},t),e.module):t}))));case"ADD-TODOLIST":return Object(I.a)(Object(I.a)({},t),{},Object(M.a)({},e.todolist.id,[]));case"SET-TASK":return Object(I.a)(Object(I.a)({},t),{},Object(M.a)({},e.todolistID,e.tasks.map((function(t){return Object(I.a)(Object(I.a)({},t),{},{entityStatus:"idle"})}))));case"REMOVE-TODOLISTS":return delete t[e.todolistID],t;case"CHANGE-TASK-ENTITY-STATUS":return Object(I.a)(Object(I.a)({},t),{},Object(M.a)({},e.todolistID,t[e.todolistID].map((function(t){return t.id===e.taskId?Object(I.a)(Object(I.a)({},t),{},{entityStatus:e.entityStatus}):t}))));default:return t}},app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"APP/LOAD-PROGRESS":case"APP/ERROR-STATUS":return Object(I.a)(Object(I.a)({},t),e.payload);case"APP/INITIALIZATION":return Object(I.a)(Object(I.a)({},t),{},{dataForm:e.dataForm});case"APP/SPINNER":return Object(I.a)(Object(I.a)({},t),{},{spinner:e.spinner});default:return t}},auth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"AUTH/SET-IS-LOGGED-IN":case"AUTH/SET-IS-LOGGED-OUT":return Object(I.a)(Object(I.a)({},t),e.payload);default:return t}}}),Zt=Object(Vt.c)(Yt,Object(Vt.a)(qt.a));window.store=Zt;var Jt=n(55);o.a.render(Object(ct.jsx)(Jt.a,{children:Object(ct.jsx)(l.a,{store:Zt,children:Object(ct.jsx)(Bt,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[154,1,2]]]);
//# sourceMappingURL=main.28e0d035.chunk.js.map