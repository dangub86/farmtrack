(function(e){function t(t){for(var s,o,i=t[0],l=t[1],c=t[2],d=0,p=[];d<i.length;d++)o=i[d],r[o]&&p.push(r[o][0]),r[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);u&&u(t);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(s=!1)}s&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},r={app:0},n=[];function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0778":function(e,t,a){},"0cf1":function(e,t,a){"use strict";var s=a("1801"),r=a.n(s);r.a},1801:function(e,t,a){},"31ee":function(e,t,a){"use strict";var s=a("de8a"),r=a.n(s);r.a},"41d3":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},n=[],o={name:"app",data:function(){return{}}},i=o,l=(a("5c0b"),a("2877")),c=Object(l["a"])(i,r,n,!1,null,null,null),u=c.exports,d=a("8c4f"),p=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},m=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("body",{staticClass:"bg"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-offset-5 col-md-5 text-center "},[a("form",{attrs:{action:"",method:"post"}},[a("div",{staticClass:"form-login"},[a("br"),a("h4",[e._v("Accesso riservato ai soci")]),a("br"),a("input",{staticClass:"form-control input-sm chat-input",attrs:{name:"nome",type:" fo",id:"userName",placeholder:"username"}}),a("br"),a("br"),a("input",{staticClass:"form-control input-sm chat-input",attrs:{name:"password",type:" fo",id:"password",placeholder:"password"}}),a("br"),a("br"),a("div",{staticClass:"wrapper"},[a("span",{staticClass:"group-btn"},[a("button",{staticClass:"btn btn-primary btn-md",attrs:{type:"login",href:""}},[e._v("\n                  Login\n                  "),a("i",{staticClass:"fa fa-sign-in"})])])])])])]),a("div",{staticClass:"col-md-6 text-center "},[a("div",{staticClass:"desc"},[a("br"),a("h4",[e._v("Descrizione")]),a("br"),a("h1",{staticClass:"test"},[e._v("\n            Dudley Wrangel Clarke (Johannesburg, 27 aprile 1899 – Londra, 7 maggio 1974)\n            è stato un militare britannico,ijgiuygyguygygygygguygyggyyggygygygygygygygy\n          ")])])])])])])}],f=a("bc3a"),v=a.n(f),h=v.a.create({baseURL:"/api"}),g={name:"service",data:function(){return{msg:"HowTo call REST-Services:",response:[],errors:[],value:75}}},b=g,_=(a("6ee6"),Object(l["a"])(b,p,m,!1,null,"fab97bf2",null)),w=_.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"servicemy"},[a("header",{staticClass:"navbar-nav"},[a("div",{staticClass:"bg-dark",attrs:{id:"nav"}},[a("b-dropdown",{staticClass:"m-2 w-15",attrs:{id:"ddown-offset",offset:"25",text:"Modifica account",variant:"outline-info btn-block"}},[a("b-dropdown-item",{staticStyle:{width:"auto"},attrs:{onclick:"document.getElementById('id01').style.display='block'"}},[e._v("Registra utente")]),a("b-dropdown-item",{staticStyle:{width:"auto"},attrs:{onclick:"document.getElementById('id02').style.display='block'"}},[e._v("Modifica la password")]),a("b-dropdown-item",{attrs:{href:"#"}},[e._v("Aggiorna dati socio")]),a("b-dropdown-item",{attrs:{href:"#"}},[e._v("Visualizza lista dei soci")]),a("b-dropdown-item",{attrs:{href:"#"}},[e._v("Lista soci PDF")])],1),a("b-dropdown",{staticClass:"m-2 w-15",attrs:{id:"ddown-offset",offset:"25",text:"Gestione bilancio",variant:"outline-info btn-block"}},[a("b-dropdown-item",{attrs:{href:"#"}},[e._v("Visualizza bilancio")]),a("b-dropdown-item",{attrs:{href:"#"}},[e._v("Bilancio in PDF")]),a("b-dropdown-item",{attrs:{href:"#"}},[e._v("Nuova voce di bilancio")]),a("b-dropdown-item",{attrs:{href:"#"}},[e._v("Rimuovi voce di bilancio")])],1),a("b-dropdown",{staticClass:"m-2 w-15",attrs:{id:"ddown-offset",offset:"25",text:"Modifica opzioni",variant:"outline-info btn-block"}},[a("b-dropdown-item",{attrs:{href:"#"}},[e._v("Inserisci importo bilancio")]),a("b-dropdown-item",{attrs:{href:"#"}},[e._v("Modifica importo bilancio")]),a("b-dropdown-item",{attrs:{href:"#"}},[e._v("Area amministratore")])],1),a("b-dropdown",{staticClass:"m-2 w-15",attrs:{id:"ddown-offset",offset:"25",text:"Visualizza file log",variant:"outline-info"}},[a("b-dropdown-item",{attrs:{href:"#"}},[e._v("Registro attivita")])],1)],1)]),a("body",[a("div",{staticClass:"modal",attrs:{id:"id01"}},[a("span",{staticClass:"close",attrs:{onclick:"document.getElementById('id01').style.display='none'",title:"Close Modal"}},[e._v("×")]),a("RegistraUtente")],1)])])},x=[],C=a("bd86"),S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{staticClass:"modal-content",attrs:{action:""}},[a("div",{staticClass:"container"},[a("h1",[e._v("Registrazione utente")]),a("hr"),e._m(0),a("div",{staticStyle:{width:"100%"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.nome,expression:"user.nome"}],staticClass:"anagrafica",attrs:{type:"text",placeholder:"Nome utente",name:"nome",required:""},domProps:{value:e.user.nome},on:{input:function(t){t.target.composing||e.$set(e.user,"nome",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.cognome,expression:"user.cognome"}],staticClass:"anagrafica",attrs:{type:"text",placeholder:"Cognome utente",name:"cognome",required:""},domProps:{value:e.user.cognome},on:{input:function(t){t.target.composing||e.$set(e.user,"cognome",t.target.value)}}})]),e._m(1),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.cf,expression:"user.cf"}],attrs:{type:"text",placeholder:"xxxxxxxxxxxxxxxxxx",name:"cf",required:""},domProps:{value:e.user.cf},on:{input:function(t){t.target.composing||e.$set(e.user,"cf",t.target.value)}}}),a("br"),e._m(2),a("div",{staticStyle:{width:"100%"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.indirizzo,expression:"user.indirizzo"}],staticClass:"ind",attrs:{type:"text",placeholder:"Via/Piazza, n°civico",name:"indirizzo",required:""},domProps:{value:e.user.indirizzo},on:{input:function(t){t.target.composing||e.$set(e.user,"indirizzo",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.nazione,expression:"user.nazione"}],staticClass:"ind",staticStyle:{width:"20%"},attrs:{type:"text",placeholder:"Nazione",name:"nazione",required:""},domProps:{value:e.user.nazione},on:{input:function(t){t.target.composing||e.$set(e.user,"nazione",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.cap,expression:"user.cap"}],staticClass:"ind",staticStyle:{width:"10%"},attrs:{type:"text",placeholder:" CAP",name:"cap",required:""},domProps:{value:e.user.cap},on:{input:function(t){t.target.composing||e.$set(e.user,"cap",t.target.value)}}})]),a("hr"),e._m(3),a("div",{staticStyle:{width:"100%"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"anagrafica",attrs:{type:"email",placeholder:"firsEmail@ccc.com",name:"email",required:""},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email2,expression:"user.email2"}],staticClass:"anagrafica",attrs:{type:"email",placeholder:"secondEmail@log.com",name:"email2"},domProps:{value:e.user.email2},on:{input:function(t){t.target.composing||e.$set(e.user,"email2",t.target.value)}}})]),e._m(4),a("div",{staticStyle:{width:"100%"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.fisso,expression:"user.fisso"}],staticClass:"anagrafica",attrs:{type:"text",placeholder:"Numero Fisso",name:"fisso"},domProps:{value:e.user.fisso},on:{input:function(t){t.target.composing||e.$set(e.user,"fisso",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.cellulare,expression:"user.cellulare"}],staticClass:"anagrafica",attrs:{type:"text",placeholder:"Numero cellulare*",name:"cellulare",required:""},domProps:{value:e.user.cellulare},on:{input:function(t){t.target.composing||e.$set(e.user,"cellulare",t.target.value)}}})]),a("hr"),e._m(5),a("br"),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.user.note,expression:"user.note"}],staticClass:"form-control md-textarea",attrs:{type:"text",id:"message",name:"note",rows:"2"},domProps:{value:e.user.note},on:{input:function(t){t.target.composing||e.$set(e.user,"note",t.target.value)}}}),a("div",{staticClass:"clearfix"},[a("button",{staticClass:"cancelbtn",attrs:{type:"button",onclick:"document.getElementById('id01').style.display='none'"}},[e._v("Cancel")]),a("button",{staticClass:"signupbtn",attrs:{type:"submit"},on:{click:function(t){return e.createSocio()}}},[e._v("Sign Up")])])])])},z=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("label",{staticStyle:{"margin-left":"2%"},attrs:{for:"nome"}},[a("b",[e._v("Nome*")])]),a("label",{staticStyle:{"margin-left":"43%"},attrs:{for:"cognome"}},[a("b",[e._v("Cognome*")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:"email"}},[a("b",[e._v("Codice Fiscale")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:"indirizzo"}},[a("b",[e._v("Idirizzo*")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:"email"}},[a("b",[e._v("User Email*")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:"email"}},[a("b",[e._v("Numeri di Telefono")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",[a("b",[e._v("Note")])])}],N={name:"person",data:function(){return{response:[],errors:[],user:{nome:"",cognome:"",cf:"",indirizzo:"",nazione:"",cap:"",email:"",email2:"",fisso:"",cellulare:"",note:"",id:0},showResponse:!1,retrievedUser:{},showRetrievedUser:!1}},methods:{createSocio:function(){var e=this,t=new URLSearchParams;t.append("nome",this.user.nome),t.append("cognome",this.user.cognome),t.append("cf",this.user.cf),t.append("indirizzo",this.user.indirizzo),t.append("nazione",this.user.nazione),t.append("cap",this.user.cap),t.append("email",this.user.email),t.append("email2",this.user.email2),t.append("fisso",this.user.fisso),t.append("cellulare",this.user.cellulare),t.append("note",this.user.note),h.post("/person",t).then(function(t){e.response=t.data,e.user.id=t.data,console.log(t.data),e.showResponse=!0}).catch(function(t){e.errors.push(t)})}}},R=N,P=(a("0cf1"),Object(l["a"])(R,S,z,!1,null,null,null)),$=P.exports,E={name:"service",data:function(){return Object(C["a"])({msg:"HowTo call REST-Services:",response:[],errors:[],value:75,modal:"id01"},"modal","id02")},components:{RegistraUtente:$},methods:{callRestService:function(){var e=this;h.get("/hello").then(function(t){e.response=t.data,console.log(t.data)}).catch(function(t){e.errors.push(t)})},onclick:function(e){e.target==modal&&(modal.style.display="none")}}},k=E,U=(a("cad1"),Object(l["a"])(k,y,x,!1,null,"55694ccc",null)),T=U.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bootstrap"},[a("h1",[e._v(e._s(e.msg))]),a("h5",[e._v("REST service call are easy to do with Vue.js, if you know how to do it.")]),a("p"),a("h6",[a("b-badge",{attrs:{variant:"primary"}},[e._v(" Let´s go!")]),e._v(" Call a Spring Boot REST backend service, by clicking a button:")],1),a("p"),a("b-btn",{attrs:{variant:"success",id:"btnCallHello"},on:{click:function(t){e.callRestService(),e.showResponse=!0}}},[e._v("/hello (GET)")]),a("p"),a("h4",[e._v("Backend response: "),a("b-alert",{attrs:{show:e.showResponse,dismissible:""},on:{dismissed:function(t){e.showResponse=!1}}},[e._v(e._s(e.response))])],1),a("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}]},[e._v("Show Response details")]),a("p"),a("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse1"}},[a("b-card",[a("p",{staticClass:"card-text"},[e._v("The Response hat this details")]),a("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1_inner",modifiers:{collapse1_inner:!0}}],attrs:{size:"sm",variant:"primary"}},[e._v("HTTP Status")]),a("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse1_inner"}},[a("b-card",[e._v("Status: "+e._s(e.httpStatusCode))]),a("b-card",[e._v("Statustext: "+e._s(e.httpStatusText))])],1),a("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse2_inner",modifiers:{collapse2_inner:!0}}],attrs:{size:"sm",id:"btnHttpHeaders",variant:"warning"}},[e._v("HTTP Headers")]),a("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse2_inner"}},[e.headers&&e.headers.length?a("div",e._l(e.headers,function(t,s){return a("li",{key:s},[a("b-card",[e._v("Header: "+e._s(t.valueOf()))])],1)}),0):e._e()]),a("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse3_inner",modifiers:{collapse3_inner:!0}}],attrs:{size:"sm",variant:"danger"}},[e._v("Full Request configuration")]),a("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse3_inner"}},[a("p",{staticClass:"card-text"},[e._v("Config: "+e._s(e.fullResponse.config)+" ")])])],1)],1),a("b-tooltip",{attrs:{target:"btnHttpHeaders",title:"You should always know your HTTP Headers!"}})],1)},O=[],H={name:"bootstrap",data:function(){return{msg:"HowTo call REST-Services:",showResponse:!1,response:"",fullResponse:{config:{foo:"",bar:""}},httpStatusCode:"",httpStatusText:"",headers:["Noting here atm. Did you call the Service?"],errors:[]}},methods:{callRestService:function(){var e=this;h.get("/hello").then(function(t){e.response=t.data,console.log(t.data),e.httpStatusCode=t.status,e.httpStatusText=t.statusText,e.headers=t.headers,e.fullResponse=t}).catch(function(t){e.errors.push(t)})}}},q=H,M=(a("31ee"),Object(l["a"])(q,j,O,!1,null,"1a31617f",null)),B=M.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user"},[a("h1",[e._v("Create User")]),a("h3",[e._v("Just some database interaction...")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.firstName,expression:"user.firstName"}],attrs:{type:"text",placeholder:"first name"},domProps:{value:e.user.firstName},on:{input:function(t){t.target.composing||e.$set(e.user,"firstName",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.lastName,expression:"user.lastName"}],attrs:{type:"text",placeholder:"last name"},domProps:{value:e.user.lastName},on:{input:function(t){t.target.composing||e.$set(e.user,"lastName",t.target.value)}}}),a("button",{on:{click:function(t){return e.createUser()}}},[e._v("Create User")]),e.showResponse?a("div",[a("h6",[e._v("User created with Id: "+e._s(e.response))])]):e._e(),e.showResponse?a("button",{on:{click:function(t){return e.retrieveUser()}}},[e._v("Retrieve user "+e._s(e.user.id)+" data from database")]):e._e(),e.showRetrievedUser?a("h4",[e._v("Retrieved User "+e._s(e.retrievedUser.firstName)+" "+e._s(e.retrievedUser.lastName))]):e._e()])},L=[],D={name:"user",data:function(){return{response:[],errors:[],user:{lastName:"",firstName:"",id:0},showResponse:!1,retrievedUser:{},showRetrievedUser:!1}},methods:{createUser:function(){var e=this,t=new URLSearchParams;t.append("firstName",this.user.firstName),t.append("lastName",this.user.lastName),h.post("/user",t).then(function(t){e.response=t.data,e.user.id=t.data,console.log(t.data),e.showResponse=!0}).catch(function(t){e.errors.push(t)})},retrieveUser:function(){var e=this;h.get("/user/"+this.user.id).then(function(t){e.retrievedUser=t.data,console.log(t.data),e.showRetrievedUser=!0}).catch(function(t){e.errors.push(t)})}}},F=D,V=(a("658f"),Object(l["a"])(F,I,L,!1,null,"752efef5",null)),A=V.exports;s["a"].use(d["a"]);var J=new d["a"]({routes:[{path:"/",name:"Hello",component:w},{path:"/callservice",name:"Service",component:T},{path:"/bootstrap",name:"Bootstrap",component:B},{path:"/user",name:"User",component:A}]}),G=a("9f7b"),W=a.n(G);a("f9e3"),a("2dd8");s["a"].config.productionTip=!1,s["a"].use(W.a),new s["a"]({router:J,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var s=a("5e27"),r=a.n(s);r.a},"5e27":function(e,t,a){},"658f":function(e,t,a){"use strict";var s=a("41d3"),r=a.n(s);r.a},"6ee6":function(e,t,a){"use strict";var s=a("6ff0"),r=a.n(s);r.a},"6ff0":function(e,t,a){},cad1:function(e,t,a){"use strict";var s=a("0778"),r=a.n(s);r.a},de8a:function(e,t,a){}});
//# sourceMappingURL=app.73740770.js.map