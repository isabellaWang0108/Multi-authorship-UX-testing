(this.webpackJsonpmultiauthorshipuxtesting=this.webpackJsonpmultiauthorshipuxtesting||[]).push([[0],{13:function(e,t,s){},14:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var r=s(1),a=s.n(r),c=s(3),n=s.n(c),i=(s(13),s(14),s.p+"static/media/img.cc7c8f99.jpg"),o=s(6),l=s(4),d=s(5),j=s(8),h=s(7),u=s(0),m=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(l.a)(this,s);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={count:0,creators:[{name:"cryptogod",ownership:100}]},e}return Object(d.a)(s,[{key:"addCreator",value:function(){this.setState({creators:[].concat(Object(o.a)(this.state.creators),[{name:"",ownership:" "}])})}},{key:"deletCreator",value:function(e){var t=this.state.creators;t.splice(e,1),this.setState({creators:t});for(var s=100,r=0;r<this.state.creators.length;r++)s-=this.state.creators[r].ownership;this.setState({count:s})}},{key:"changeOwnership",value:function(e){var t=this.state.creators;t[e.target.id].ownership=e.target.value,this.setState({creators:t});for(var s=100,r=0;r<this.state.creators.length;r++)s-=this.state.creators[r].ownership;this.setState({count:s})}},{key:"changeName",value:function(e){var t=this.state.creators;t[e.target.id].name=e.target.value,this.setState({creators:t})}},{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{children:[this.state.creators.map((function(t,s){return Object(u.jsxs)("div",{className:"form-row",style:{marginBottom:16},children:[Object(u.jsx)("div",{className:"col-md-5",children:0===s?Object(u.jsx)("input",{type:"name",className:"form-control",value:t.name,readOnly:!0}):Object(u.jsx)("input",{type:"name",className:"form-control",placeholder:"username",id:s,value:t.name,onChange:e.changeName.bind(e)})}),Object(u.jsx)("div",{className:"col-md-4",children:Object(u.jsx)("input",{type:"number",value:t.ownership,id:s,className:"form-control",placeholder:"00",onChange:e.changeOwnership.bind(e)})}),Object(u.jsx)("div",{className:"col-md-2",children:" % credit "}),0===s?Object(u.jsx)("div",{}):Object(u.jsx)("div",{className:"col-md-1",style:{cursor:"pointer"},onClick:function(){return e.deletCreator(s)},children:" X "})]},s)})),0===this.state.count?Object(u.jsx)("p",{}):this.state.count<0?Object(u.jsxs)("p",{style:{color:"red"},children:["Subtract ",0-this.state.count," credits to total 100%"]}):Object(u.jsxs)("p",{style:{color:"red"},children:[" Add ",this.state.count," credits to total 100%"]}),Object(u.jsx)("div",{style:{cursor:"pointer",color:"blue"},onClick:function(){return e.addCreator()},id:"add_people",children:"Add a collaborator +"}),Object(u.jsx)("br",{}),0===this.state.count?Object(u.jsx)("button",{children:"submit"}):Object(u.jsx)("button",{disabled:!0,children:"submit"})]})}}]),s}(a.a.Component);var b=function(){return Object(u.jsxs)("div",{className:"container-sm",style:{maxWidth:450},children:[Object(u.jsx)("div",{style:{marginTop:100}}),Object(u.jsx)("h1",{children:"Create an Art piece"}),Object(u.jsxs)("form",{children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Name your piece"}),Object(u.jsx)("input",{value:"Trippy",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",readOnly:!0})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Image: "}),Object(u.jsx)("br",{}),Object(u.jsx)("img",{src:i,alt:"imag"})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Price"}),Object(u.jsx)("input",{value:"$100",className:"form-control",id:"exampleInputPassword1",readOnly:!0})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Creator(s)"}),Object(u.jsx)(m,{})]})]})]})},p=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,17)).then((function(t){var s=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,n=t.getTTFB;s(e),r(e),a(e),c(e),n(e)}))};n.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.00c7e6d8.chunk.js.map