exports.ids=[3],exports.modules={67:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return B}));var r=n(5),a=n.n(r),o=n(6),c=n.n(o),u=n(10),i=n.n(u),s=n(2),f=n.n(s),l=n(7),p=n.n(l),y=n(0),d=n.n(y),h=n(71),m=n(3),v=n.n(m),g=n(24),P=n.n(g),b=n(8),O=n.n(b),R=n(56),E=n.n(R),j=n(13),C=n(57),D=n.n(C);function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function x(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function S(){var t=E()(["\nmutation addPost($post : PostInput!) {\n    addPost(post : $post) {\n        id\n        text\n        user {\n            username\n            avatar\n        }\n    }\n}"]);return S=function(){return t},t}function $(){var t=E()(["\n  query postsFeed($page: Int, $limit: Int) { \n    postsFeed(page: $page, limit: $limit) { \n      posts {\n        id\n        text\n        user {\n          avatar\n          username\n        }\n      }\n    }\n  }\n"]);return $=function(){return t},t}var _=D()($()),k=D()(S()),F=function(t){p()(r,t);var e,n=(e=r,function(){var t,n=f()(e);if(x()){var r=f()(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return i()(this,t)});function r(){var t;a()(this,r);for(var e=arguments.length,o=new Array(e),c=0;c<e;c++)o[c]=arguments[c];return t=n.call.apply(n,[this].concat(o)),O()(P()(t),"state",{postContent:""}),O()(P()(t),"changePostContent",(function(e){t.setState({postContent:e})})),t}return c()(r,[{key:"render",value:function(){var t=this,e=this.props,n=e.children,r=e.variables,a=this.state.postContent;return d.a.createElement(j.Mutation,{update:function(t,e){var n=e.data.addPost,a={query:_};"undefined"!==v()(r)&&(a.variables=r);var o=t.readQuery(a);o.postsFeed.posts.unshift(n),t.writeQuery(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(Object(n),!0).forEach((function(e){O()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},a,{data:o}))},optimisticResponse:{__typename:"Mutation",addPost:{__typename:"Post",text:a,id:-1,user:{__typename:"User",username:"Loading...",avatar:"/public/loading.gif"}}},mutation:k},(function(e){return d.a.Children.map(n,(function(n){return d.a.cloneElement(n,{addPost:e,postContent:a,changePostContent:t.changePostContent})}))}))}}]),r}(y.Component),I=n(76),L=n(72);function q(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var M=function(t){p()(r,t);var e,n=(e=r,function(){var t,n=f()(e);if(q()){var r=f()(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return i()(this,t)});function r(){return a()(this,r),n.apply(this,arguments)}return c()(r,[{key:"render",value:function(){var t={page:0,limit:10};return d.a.createElement("div",{className:"container"},d.a.createElement(F,{variables:t},d.a.createElement(L.a,null)),d.a.createElement(h.a,{variables:t},d.a.createElement(I.a,null)))}}]),r}(y.Component),Q=n(75),A=n(74),N=n(73),U=n(70);function z(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var B=function(t){p()(r,t);var e,n=(e=r,function(){var t,n=f()(e);if(z()){var r=f()(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return i()(this,t)});function r(){return a()(this,r),n.apply(this,arguments)}return c()(r,[{key:"render",value:function(){return d.a.createElement(N.a,null,d.a.createElement(A.a,{changeLoginState:this.props.changeLoginState}),d.a.createElement(M,null),d.a.createElement(U.a,null,d.a.createElement(Q.a,null)))}}]),r}(y.Component)}};