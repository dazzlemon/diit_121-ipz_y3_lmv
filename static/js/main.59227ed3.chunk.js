(this.webpackJsonpdiscord_clone=this.webpackJsonpdiscord_clone||[]).push([[0],{151:function(e,t,r){},168:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r(32),s=r.n(a),o=(r(151),r(48)),c=r(7),i=r(2),l=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"App"}),Object(i.jsx)("p",{children:"This is home page"})]})},d=r(12),u=r(6),b=r(53),j=r(78),x=r(23),h=r(88),g=r(108),O={borderColor:"#141414",itemBg:"#1e1e1e",white:"#ffffff",itemFontColor:"#707070",errorRed:"#ff1f1f"},f={height:40,borderRadius:5,borderWidth:1},m=r(5),p=m.a.create({input:{borderWidth:f.borderWidth,borderColor:O.borderColor,borderRadius:f.borderRadius,height:f.height,backgroundColor:O.itemBg,color:O.itemFontColor,fontSize:18,borderStyle:"inset"},picker:{backgroundColor:O.itemBg,borderColor:O.borderColor,borderWidth:f.borderWidth,height:f.height,color:O.itemFontColor,fontWeight:"bold",borderRadius:f.borderRadius,borderStyle:"inset"},box:{flexGrow:0,padding:25,backgroundColor:"#1e2124",borderRadius:7},textMain:{color:O.white,fontSize:24,fontWeight:"bold",textAlign:"center"},textInputTitle:{textTransform:"uppercase",fontSize:14,color:O.itemFontColor,marginBottom:5,fontWeight:"bold"},bg:{alignItems:"center",justifyContent:"center",flex:1,height:"100%",width:"100%",resizeMode:"stretch",position:"absolute",inset:"0 0 0 0"},clickableText:{color:"#30b2fd"},tosText:{color:"#404040",fontSize:12,marginTop:15},inBox:{padding:7},button:{borderRadius:f.borderRadius,backgroundColor:"#6665d2",height:f.height},buttonText:{color:O.white,textAlign:"center",padding:10,fontWeight:"bold"},clickableTextHover:{textDecorationLine:"underline",cursor:"pointer"},textInputError:{color:O.errorRed}}),y=function(e){var t,r,n=e.isRequiredError?"this field is required":null===(t=e.errorMessage)||void 0===t?void 0:t.call(e),a=null!=n;return Object(i.jsxs)(u.a,{style:p.inBox,children:[Object(i.jsxs)(b.a,{style:p.textInputTitle,children:[e.title,Object(i.jsx)(b.a,{style:p.textInputError,children:a?" - "+n:null})]}),Object(i.jsx)(g.a,{spellCheck:!1,style:a?[p.input,{borderColor:O.errorRed,borderWidth:2}]:p.input,onChangeText:e.onChangeText,secureTextEntry:null!==(r=e.secureTextEntry)&&void 0!==r?r:null})]})},v=r(104),w=r(36),C=function(e){return Object(i.jsx)(v.a,{source:"/diit_121-ipz_y3_lmv/assets/images/bg.jpg",style:p.bg,children:Object(i.jsx)(w.a,{style:p.box,children:e.content})})},S=r(4),T=r(146),k=r(145),M=r(96),A=r(73),I=function(e){return Object(i.jsx)(A.a,Object(S.a)(Object(S.a)({},e),{},{wrapperStyle:{right:{backgroundColor:"#6665d2",borderRadius:20},left:{backgroundColor:"#6665d2",borderRadius:20}},containerToPreviousStyle:{right:{borderTopRightRadius:5},left:{borderTopLeftRadius:5}},containerToNextStyle:{right:{borderBottomRightRadius:5},left:{borderBottomLeftRadius:5}},textStyle:{left:{color:"#fff",fontSize:16},right:{color:"#fff",fontSize:16}}}))},R=function(e){var t=Object(n.useState)(!1),r=Object(d.a)(t,2),a=r[0],s=r[1],o=Object(n.useState)(""),c=Object(d.a)(o,2),l=c[0],b=c[1],x=Object(n.useState)(1),h=Object(d.a)(x,2),O=h[0],f=h[1],m=function(){""!=l&&(e.sendMessage([{_id:1,text:l,createdAt:new Date,user:e.currentUser}]),b(""),f(1))};return Object(i.jsxs)(u.a,{style:D.messageInputView,children:[Object(i.jsx)(j.a,{style:D.messageSendView,children:Object(i.jsx)(M.b,{size:"25"})}),Object(i.jsx)(j.a,{style:D.messageSendView,children:Object(i.jsx)(M.a,{size:"25"})}),Object(i.jsx)(j.a,{style:D.messageSendView,children:Object(i.jsx)(k.a,{size:"25"})}),Object(i.jsx)(g.a,{defaultValue:l,inputContainerStyle:D.messageInput,style:a?[D.messageInput,{outline:"none",height:20+20*O}]:[D.messageInput,{height:20+20*O}],value:l,placeholder:"Message",onChangeText:function(e){b(e),f(Math.max(1,Math.min(l.split(/\r\n|\r|\n/).length-1,10)))},onSubmitEditing:m,onFocus:function(){return s(!0)},onBlur:function(){return s(!1)},autoFocus:!0,blurOnSubmit:!1,spellCheck:!1,multiline:!0}),Object(i.jsx)(j.a,{style:D.messageSendView,onPress:m,children:Object(i.jsx)(T.a,{size:"25"})})]})},D=m.a.create({container:{flex:1,backgroundColor:"#1e2124"},messageInputView:{display:"flex",flexDirection:"row"},messageInput:{paddingTop:10,flex:1,paddingHorizontal:10,backgroundColor:O.itemBg,color:O.itemFontColor,borderWidth:0,borderColor:"transparent"},messageSendView:{paddingHorizontal:10,justifyContent:"flex-end",paddingVertical:5,backgroundColor:O.itemBg,color:O.itemFontColor}}),F=function(e){return Object(i.jsx)(u.a,{style:D.container,children:Object(i.jsx)(A.b,{messages:e.messages,user:{_id:1},renderInputToolbar:function(){return Object(i.jsx)(R,{sendMessage:e.sendMessage,currentUser:e.currentUser})},renderBubble:function(e){return Object(i.jsx)(I,Object(S.a)({},e))}})})},_=r(55),B=r(79),E=m.a.create({container:{display:"flex",flexDirection:"row"},avatar:{padding:10,width:50,height:50,borderRadius:25},chatName:{color:O.white,fontWeight:"bold",fontSize:16,paddingTop:10},messageAuthor:{color:O.white,fontWeight:"bold"},message:{color:O.white,fontWeight:"normal"}}),z=function(e){return Object(i.jsxs)(u.a,{style:E.container,children:[Object(i.jsx)(u.a,{style:{padding:10},children:Object(i.jsx)(_.a,{style:E.avatar,source:{uri:e.avatar}})}),Object(i.jsxs)(u.a,{children:[Object(i.jsx)(b.a,{style:E.chatName,children:e.chatName}),Object(i.jsxs)(b.a,{style:E.messageAuthor,children:[e.lastMessage?"".concat(e.lastMessage.author,": "):"",Object(i.jsx)(b.a,{style:E.message,children:e.lastMessage?"".concat(e.lastMessage.text):""})]})]})]})},W=function(e){return Object(i.jsx)(B.a,{style:{backgroundColor:"#1e2124"},data:e.chats,renderItem:function(e){var t,r,n,a=e.item;return Object(i.jsx)(z,{avatar:a.avatar,chatName:a.name,lastMessage:a.lastMessage?{author:null===(t=a.lastMessage)||void 0===t?void 0:t.user.name,text:null===(r=a.lastMessage)||void 0===r?void 0:r.text,date:null===(n=a.lastMessage)||void 0===n?void 0:n.createdAt}:null})}})};var P=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),r=t[0],a=t[1],s=Object(n.useState)(!1),o=Object(d.a)(s,2),c=o[0],l=o[1],g=Object(n.useState)(!1),O=Object(d.a)(g,2),f=O[0],m=O[1],v=Object(n.useState)(),w=Object(d.a)(v,2),C=w[0],S=w[1],T=Object(n.useState)(),k=Object(d.a)(T,2),M=k[0],A=k[1],I=Object(n.useState)(),R=Object(d.a)(I,2),D=R[0],F=R[1],_=Object(n.useState)(1),B=Object(d.a)(_,2),E=B[0],z=B[1],W=Object(n.useState)(0),P=Object(d.a)(W,2),H=P[0],L=P[1],V=Object(n.useState)((new Date).getFullYear()),q=Object(d.a)(V,2),N=q[0],U=q[1],J=Object(n.useState)(!1),G=Object(d.a)(J,2),Y=G[0],Z=G[1],$=Object(n.useState)(!0),K=Object(d.a)($,2),Q=K[0],X=K[1],ee=Object(n.useState)(!1),te=Object(d.a)(ee,2),re=te[0],ne=te[1],ae=Object(n.useState)(!0),se=Object(d.a)(ae,2),oe=se[0],ce=se[1],ie=Object(n.useState)(!1),le=Object(d.a)(ie,2),de=le[0],ue=le[1],be=Object(n.useState)(!1),je=Object(d.a)(be,2),xe=je[0],he=je[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(u.a,{style:p.inBox,children:Object(i.jsx)(b.a,{style:p.textMain,children:"Create an account"})}),Object(i.jsx)(y,{title:"email",isRequiredError:Y,errorMessage:function(){return Q?re?"email address already registered":null:"please enter an email address"},onChangeText:function(e){return S(e)}}),Object(i.jsx)(y,{title:"username",isRequiredError:de,onChangeText:function(e){return A(e)}}),Object(i.jsx)(y,{title:"password",isRequiredError:xe,onChangeText:function(e){return F(e)},secureTextEntry:!0}),Object(i.jsxs)(u.a,{style:p.inBox,children:[Object(i.jsx)(b.a,{style:p.textInputTitle,children:"date of birth"}),Object(i.jsxs)(u.a,{style:{flexDirection:"row",width:"100%"},children:[Object(i.jsxs)(x.a,{style:[p.picker,{width:"40%"}],onValueChange:function(e,t){return L(e)},children:[Object(i.jsx)(x.a.Item,{label:"Jan",value:"0"}),Object(i.jsx)(x.a.Item,{label:"Feb",value:"1"}),Object(i.jsx)(x.a.Item,{label:"Mar",value:"2"})]}),Object(i.jsxs)(x.a,{style:[p.picker,{width:"20%",marginHorizontal:"10%"}],onValueChange:function(e,t){return z(e)},children:[Object(i.jsx)(x.a.Item,{label:"1",value:"1"}),Object(i.jsx)(x.a.Item,{label:"2",value:"2"}),Object(i.jsx)(x.a.Item,{label:"3",value:"3"}),Object(i.jsx)(x.a.Item,{label:"28",value:"28"}),Object(i.jsx)(x.a.Item,{label:"29",value:"29"}),Object(i.jsx)(x.a.Item,{label:"30",value:"30"}),Object(i.jsx)(x.a.Item,{label:"31",value:"31"})]}),Object(i.jsxs)(x.a,{style:[p.picker,{width:"30%"}],onValueChange:function(e,t){return U(e)},children:[Object(i.jsx)(x.a.Item,{label:"2021",value:"2021"}),Object(i.jsx)(x.a.Item,{label:"2020",value:"2020"}),Object(i.jsx)(x.a.Item,{label:"2019",value:"2019"})]})]}),Object(i.jsx)(b.a,{style:p.textInputError,children:oe?null:"Please enter a valid date of birth"})]}),Object(i.jsxs)(u.a,{style:p.inBox,children:[Object(i.jsx)(j.a,{style:p.button,onPress:function(){var e=null==C||""==C;Z(e);var t=!e&&/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(C.toLowerCase());X(t);var r=t&&"registered@email.com"==C;ne(r);var n=new Date(N,H,E),a=n.getDate()==E&&n.getFullYear()==N&&n.getMonth()==H;ce(a);var s=null==M||""==M;ue(s);var o=null==D||""==D;he(o),!t||r||!a||o||s||function(e,t,r,n){alert("\n    Email: ".concat(e,"\n    Username: ").concat(t,"\n    Password hash: ").concat(r.hashCode(),"\n    birthday: ").concat(n.toDateString(),"\n  "))}(C,M,D,n)},children:Object(i.jsx)(b.a,{style:p.buttonText,children:"Continue"})}),Object(i.jsx)(h.a,{onMouseEnter:function(){return a(!0)},onMouseLeave:function(){return a(!1)},to:"/login",underlayColor:"rgba(0, 0, 0, 0)",children:Object(i.jsx)(b.a,{style:r?[p.clickableText,p.clickableTextHover]:p.clickableText,children:"Already have an account?"})}),Object(i.jsxs)(b.a,{style:p.tosText,children:["By registering, you agree to AppName ",Object(i.jsx)(b.a,{onMouseEnter:function(){return l(!0)},onMouseLeave:function(){return l(!1)},style:c?[p.clickableText,p.clickableTextHover]:p.clickableText,onPress:function(){return alert("Redirect to ToS")},children:"Terms of Service"})," and ",Object(i.jsx)(b.a,{onMouseEnter:function(){return m(!0)},onMouseLeave:function(){return m(!1)},style:f?[p.clickableText,p.clickableTextHover]:p.clickableText,onPress:function(){return alert("Redirect to PP")},children:"Privacy Policy"}),"."]})]})]})};String.prototype.hashCode=function(){var e=0;if(0==this.length)return e;for(var t=0;t<this.length;t++){e=(e<<5)-e+this.charCodeAt(t),e&=e}return e};var H=function(){return Object(i.jsx)(C,{content:Object(i.jsx)(P,{})})},L=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),r=t[0],a=t[1],s=Object(n.useState)(""),o=Object(d.a)(s,2),c=o[0],l=o[1],x=Object(n.useState)(""),g=Object(d.a)(x,2),O=g[0],f=g[1],m=Object(n.useState)(!1),v=Object(d.a)(m,2),w=v[0],C=v[1],S=Object(n.useState)(!1),T=Object(d.a)(S,2),k=T[0],M=T[1],A=Object(n.useState)(!1),I=Object(d.a)(A,2),R=I[0],D=I[1],F=Object(n.useState)(!1),_=Object(d.a)(F,2),B=_[0],E=_[1],z=Object(n.useState)(!1),W=Object(d.a)(z,2),P=W[0],H=W[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(u.a,{style:p.inBox,children:Object(i.jsx)(b.a,{style:p.textMain,children:"Welcome back!"})}),Object(i.jsx)(y,{title:"email",isRequiredError:w,onChangeText:function(e){return l(e)},errorMessage:function(){return B?"email or password is invalid":P?"email does not exist":null}}),Object(i.jsx)(y,{title:"password",isRequiredError:k,secureTextEntry:!0,onChangeText:function(e){return f(e)},errorMessage:function(){return B?"email or password is invalid":null}}),Object(i.jsx)(u.a,{style:[p.inBox,{marginTop:-14}],onMouseEnter:function(){return D(!0)},onMouseLeave:function(){return D(!1)},children:Object(i.jsx)(b.a,{style:R?[p.clickableText,p.clickableTextHover]:p.clickableText,onPress:function(){M(!1),E(!1),C(!c),"registered@email.com"==c?(H(!1),alert("\nWe sent instructions to change your password to\n".concat(c,", please check both your inbox\nand spam folder.\n                            "))):H(!0)},children:"Forgot your password?"})}),Object(i.jsxs)(u.a,{style:p.inBox,children:[Object(i.jsx)(j.a,{style:p.button,onPress:function(){M(!O),C(!c),c&&O&&("registered@email.com"==c&&"12345"==O?(E(!1),alert("successfull login")):E(!0))},children:Object(i.jsx)(b.a,{style:p.buttonText,children:"Login"})}),Object(i.jsxs)(b.a,{style:p.tosText,children:["Need an account? ",Object(i.jsx)(h.a,{to:"/register",underlayColor:"rgba(0, 0, 0, 0)",onMouseEnter:function(){return a(!0)},onMouseLeave:function(){return a(!1)},children:Object(i.jsx)(b.a,{style:r?[p.clickableText,p.clickableTextHover]:p.clickableText,children:"Register"})})]})]})]})},V=function(){return Object(i.jsx)(C,{content:Object(i.jsx)(L,{})})},q=function(){var e={_id:2,name:"John Doe",avatar:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F66.media.tumblr.com%2F71bb701a109cff6608ba24bf7ef3f16e%2Ftumblr_pcchwbaHls1x72ag3o1_1280.png&f=1&nofb=1"},t={_id:1,name:"Robert Henry",avatar:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fqqa16cl4wbd21.png&f=1&nofb=1"},r=Object(n.useState)([{_id:1,text:"Hey there!",createdAt:new Date,user:t},{_id:2,text:"Hello, how are you doing?",createdAt:new Date,user:e},{_id:3,text:"I am good, how about you?",createdAt:new Date,user:t},{_id:4,text:"\ud83d\ude0a\ud83d\ude07",createdAt:new Date,user:t},{_id:5,text:"Can't wait to meet you.",createdAt:new Date,user:e},{_id:6,text:"That's great, when are you coming?",createdAt:new Date,user:t},{_id:7,text:"This weekend.",createdAt:new Date,user:e},{_id:8,text:"Around 4 to 6 PM.",createdAt:new Date,user:e},{_id:9,text:"Great, don't forget to bring me some mangoes.",createdAt:new Date,user:t},{_id:10,text:"Sure!",createdAt:new Date,user:e},{_id:11,text:"1",createdAt:new Date,user:t},{_id:12,text:"2",createdAt:new Date,user:t},{_id:13,text:"3",createdAt:new Date,user:t},{_id:14,text:"1",createdAt:new Date,user:e},{_id:15,text:"2",createdAt:new Date,user:e},{_id:16,text:"3",createdAt:new Date,user:e}].reverse()),a=Object(d.a)(r,2),s=a[0],o=a[1];var c=[{_id:1,name:"Chat1",avatar:"https://steamuserimages-a.akamaihd.net/ugc/759346451812931511/D878648B294DA2B94D18893BF363C9084BA1D8F1/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",lastMessage:s[0]},{_id:2,name:"Chat2",avatar:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fqqa16cl4wbd21.png&f=1&nofb=1"},{_id:3,name:"Chat3",avatar:"https://st2.depositphotos.com/1009634/7235/v/950/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg"},{_id:4,name:"Chat4",avatar:"https://www.neurosciencemarketing.com/wp-content/uploads/2016/08/mona-lisa.jpg"}];return Object(i.jsxs)(u.a,{style:{position:"absolute",inset:"0 0 0 0",display:"flex",flexDirection:"row"},children:[Object(i.jsx)(W,{chats:c}),Object(i.jsx)(F,{sendMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];o(A.b.append(s,e))},messages:s,currentUser:t})]})},N=r(106),U=m.a.create({container:{flex:1,backgroundColor:"#1e2124",position:"absolute",inset:"0 0 0 0"},item:{backgroundColor:"#6665d2",borderRadius:f.borderRadius,padding:20,marginVertical:8,marginHorizontal:16},title:{color:O.white,textAlign:"center",padding:10,fontWeight:"bold",fontSize:16}}),J=function(){var e=function(e){var t=e.title;return Object(i.jsx)(u.a,{style:U.item,children:Object(i.jsx)(b.a,{style:U.title,children:t})})};return Object(i.jsx)(N.a,{style:U.container,children:Object(i.jsx)(B.a,{data:[{id:"bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",title:"First Item"},{id:"3ac68afc-c605-48d3-a4f8-fbd91aa97f63",title:"Second Item"},{id:"58694a0f-3da1-471f-bd96-145571e29d72",title:"Third Item"}],renderItem:function(t){var r=t.item;return Object(i.jsx)(e,{title:r.title})},keyExtractor:function(e){return e.id}})})},G=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{children:Object(i.jsx)("nav",{children:Object(i.jsxs)("ul",{id:"navigation",children:[Object(i.jsx)("li",{children:Object(i.jsx)(o.b,{to:"/",children:"Home"})}),Object(i.jsx)("li",{children:Object(i.jsx)(o.b,{to:"/login",children:"Login"})}),Object(i.jsx)("li",{children:Object(i.jsx)(o.b,{to:"/register",children:"Register"})}),Object(i.jsx)("li",{children:Object(i.jsx)(o.b,{to:"/chat",children:"Chat"})}),Object(i.jsx)("li",{children:Object(i.jsx)(o.b,{to:"/settings",children:"Settings"})})]})})}),Object(i.jsxs)(c.d,{children:[Object(i.jsx)(c.b,{path:"/",element:Object(i.jsx)(l,{})}),Object(i.jsx)(c.b,{path:"/login",element:Object(i.jsx)(V,{})}),Object(i.jsx)(c.b,{path:"/register",element:Object(i.jsx)(H,{})}),Object(i.jsx)(c.b,{path:"/chat",element:Object(i.jsx)(q,{})}),Object(i.jsx)(c.b,{path:"/settings",element:Object(i.jsx)(J,{})})]})]})},Y=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,170)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;r(e),n(e),a(e),s(e),o(e)}))};s.a.render(Object(i.jsx)(o.a,{children:Object(i.jsx)(G,{})}),document.getElementById("root")),Y()}},[[168,1,2]]]);
//# sourceMappingURL=main.59227ed3.chunk.js.map