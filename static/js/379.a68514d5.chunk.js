"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[379],{2379:function(A,t,s){s.r(t),s.d(t,{ProfileContainer:function(){return N},default:function(){return T}});var e=s(8683),n=s(5671),r=s(3144),o=s(136),g=s(5716),i=s(2791),u="ProfileInfo_descriptionBlock__4m6c1",B=s(3445),a=s(5236),Q=s(885),l=s(184),E=function(A){var t=(0,i.useState)(!1),s=(0,Q.Z)(t,2),e=s[0],n=s[1],r=(0,i.useState)(A.status),o=(0,Q.Z)(r,2),g=o[0],u=o[1];(0,i.useEffect)((function(){u(A.status)}),[A.status]);return(0,l.jsxs)("div",{children:[!e&&(0,l.jsx)("div",{children:(0,l.jsxs)("span",{onDoubleClick:function(){n(!e)},children:[" ",A.status||"-------"," "]})}),e&&(0,l.jsx)("div",{children:(0,l.jsx)("input",{onChange:function(A){u(A.currentTarget.value)},autoFocus:!0,onBlur:function(){n(!e),A.updateStatus(g)},value:g})})]})},f=function(A){return A.profile?(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{children:(0,l.jsx)("img",{src:"https://codetheweb.blog/assets/img/posts/css-advanced-background-images/cover.jpg",alt:"cover"})}),(0,l.jsxs)("div",{className:u,children:[(0,l.jsx)("div",{children:(0,l.jsx)("img",{src:null!==A.profile.photos.small?A.profile.photos.small:a,alt:""})}),(0,l.jsxs)("div",{children:[(0,l.jsx)("b",{children:"Full Name:"})," ",A.profile.fullName]}),(0,l.jsx)("div",{children:(0,l.jsx)(E,{status:A.status,updateStatus:A.updateStatus})}),(0,l.jsxs)("div",{children:[(0,l.jsx)("b",{children:"Site:"})," ",A.profile.contacts.website]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("b",{children:"Github:"})," ",A.profile.contacts.github]})]})]}):(0,l.jsx)(B.p,{})},C=s(1801),c="Post_item__iNuD3",p=function(A){return(0,l.jsxs)("div",{className:c,children:[(0,l.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",alt:"avatar"}),(0,l.jsx)("span",{children:A.message}),(0,l.jsxs)("div",{children:[A.likes," likes"]})]})},d="MyPosts_posts__7i77Q",w="MyPosts_postsBlock__fhB5O",v=s(6139),D=s(704),P=s(1620),j=s(4254),m=(0,i.memo)((function(A){var t=A.posts.map((function(A){return(0,l.jsx)(p,{message:A.message,likes:A.likes},A.id)}));return(0,l.jsxs)("div",{className:w,children:[(0,l.jsx)("h3",{children:"my post"}),(0,l.jsxs)("div",{children:[(0,l.jsx)(h,{onSubmit:function(t){A.addPost(t.newPostText)}}),(0,l.jsx)("div",{className:d,children:t})]})]})})),I=(0,P.D)(30),h=(0,D.Z)({form:"postForm"})((function(A){return(0,l.jsxs)("form",{onSubmit:A.handleSubmit,children:[(0,l.jsx)("div",{children:(0,l.jsx)(v.Z,{placeholder:"Type your post",component:j.N,child:"textarea",name:"newPostText",validate:[P.P,I]})}),(0,l.jsx)("div",{children:(0,l.jsx)("button",{children:"Add post"})})]})})),x=s(364),Y=(0,x.$j)((function(A){return{posts:A.profilePage.posts,newPostText:A.profilePage.newPostText}}),{addPost:C.q2})(m),M=function(A){return(0,l.jsxs)("div",{children:[(0,l.jsx)(f,{profile:A.profile,status:A.status,updateStatus:A.updateStatus}),(0,l.jsx)(Y,{})]})},b=s(9271),y=s(3187),G=s(7781),N=function(A){(0,o.Z)(s,A);var t=(0,g.Z)(s);function s(){return(0,n.Z)(this,s),t.apply(this,arguments)}return(0,r.Z)(s,[{key:"componentDidMount",value:function(){var A=this.props.match.params.userId;A||(A=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getProfile(A),this.props.getStatus(A)}},{key:"render",value:function(){return(0,l.jsx)(M,(0,e.Z)((0,e.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(i.Component),T=(0,G.qC)((0,x.$j)((function(A){return{profile:A.profilePage.profile,status:A.profilePage.status,authorizedUserId:A.auth.userId,isAuth:A.auth.isAuth}}),{getProfile:C.Ai,getStatus:C.lR,updateStatus:C.Nf}),b.EN,y.n)(N)},3187:function(A,t,s){s.d(t,{n:function(){return B}});var e=s(8683),n=s(5987),r=(s(2791),s(9271)),o=s(364),g=s(184),i=["auth"],u=function(A){return{auth:A.auth}};function B(A){return(0,o.$j)(u)((function(t){var s=t.auth,o=(0,n.Z)(t,i);return s.isAuth?(0,g.jsx)(A,(0,e.Z)({},o)):(0,g.jsx)(r.l_,{to:"/login"})}))}},5236:function(A){A.exports="data:image/png;base64,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"},885:function(A,t,s){s.d(t,{Z:function(){return n}});var e=s(181);function n(A,t){return function(A){if(Array.isArray(A))return A}(A)||function(A,t){var s=null==A?null:"undefined"!==typeof Symbol&&A[Symbol.iterator]||A["@@iterator"];if(null!=s){var e,n,r=[],o=!0,g=!1;try{for(s=s.call(A);!(o=(e=s.next()).done)&&(r.push(e.value),!t||r.length!==t);o=!0);}catch(i){g=!0,n=i}finally{try{o||null==s.return||s.return()}finally{if(g)throw n}}return r}}(A,t)||(0,e.Z)(A,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=379.a68514d5.chunk.js.map