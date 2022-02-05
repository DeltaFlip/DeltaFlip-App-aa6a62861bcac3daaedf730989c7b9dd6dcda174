(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[24],{1009:function(e,t,n){"use strict";var c,r,o,a,i,s=n(4),l=(n(0),n(1043)),b=n.n(l),j=n(1079),u=n.n(j),d=n(13),x=n(2),p=n(8),O=n(1),h=p.e.table(c||(c=Object(d.a)(["\n  margin-bottom: 32px;\n  margin-top: 32px;\n  width: 100%;\n\n  td,\n  th {\n    color: ",";\n    padding: 8px;\n  }\n"])),(function(e){return e.theme.colors.text})),f=p.e.div(r||(r=Object(d.a)(["\n  width: 100%;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n"]))),m=p.e.div(o||(o=Object(d.a)(["\n  color: ",";\n  margin-bottom: 16px;\n  margin-top: 16px;\n\n  li {\n    margin-bottom: 8px;\n  }\n"])),(function(e){return e.theme.colors.text})),v=function(e){return Object(O.jsx)(x.cb,Object(s.a)({as:"h4",scale:"lg",my:"16px"},e))},g={h1:v,h2:v,h3:v,h4:v,h5:v,h6:v,p:function(e){return Object(O.jsx)(x.Bc,Object(s.a)({as:"p",my:"16px"},e))},table:function(e){var t=Object.assign({},e);return Object(O.jsx)(f,{children:Object(O.jsx)(h,{children:t.children})})},ol:function(e){return Object(O.jsx)(m,Object(s.a)({as:"ol"},e))},ul:function(e){return Object(O.jsx)(m,Object(s.a)({as:"ul"},e))},pre:p.e.pre(a||(a=Object(d.a)(["\n  color: ",";\n  margin-bottom: 16px;\n  margin-top: 16px;\n  max-width: 100%;\n  overflow-x: auto;\n"])),(function(e){return e.theme.colors.text})),a:p.e.a(i||(i=Object(d.a)(["\n  word-break: break-all;\n"])))};t.a=function(e){return Object(O.jsx)(b.a,Object(s.a)({remarkPlugins:[u.a],components:g},e))}},1715:function(e,t,n){"use strict";n.r(t);var c,r,o,a=n(0),i=n(2),s=n(39),l=n(78),b=n(172),j=n(60),u=n(38),d=n(821),x=n(411),p=n(16),O=n(281),h=n(1009),f=n(394),m=n(23),v=n(769),g=n(864),B=n(932),w=n(13),y=n(8),k=n(1674),S=n(44),C=n(390),I=n(775),P=n(1),A=Object(y.e)(i.o)(c||(c=Object(w.a)(["\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 16px;\n"])),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.cardBorder})),L=function(e){var t=e.proposal,n=Object(p.b)().t,c=new Date(1e3*t.start),r=new Date(1e3*t.end);return Object(P.jsxs)(i.y,{mb:"16px",children:[Object(P.jsx)(i.B,{children:Object(P.jsx)(i.cb,{as:"h3",scale:"md",children:n("Details")})}),Object(P.jsxs)(i.z,{children:[Object(P.jsxs)(i.Z,{alignItems:"center",mb:"8px",children:[Object(P.jsx)(i.Bc,{color:"textSubtle",children:n("Identifier")}),Object(P.jsx)(i.qb,{href:"".concat(I.b,"/").concat(t.id),ml:"8px",children:t.id.slice(0,8)})]}),Object(P.jsxs)(i.Z,{alignItems:"center",mb:"8px",children:[Object(P.jsx)(i.Bc,{color:"textSubtle",children:n("Creator")}),Object(P.jsx)(i.qb,{href:Object(S.e)(t.author,"address"),ml:"8px",children:Object(C.a)(t.author)})]}),Object(P.jsxs)(i.Z,{alignItems:"center",mb:"16px",children:[Object(P.jsx)(i.Bc,{color:"textSubtle",children:n("Snapshot")}),Object(P.jsx)(i.qb,{href:Object(S.e)(t.snapshot,"block"),ml:"8px",children:t.snapshot})]}),Object(P.jsxs)(A,{p:"16px",children:[Object(P.jsx)(g.a,{proposalState:t.state,mb:"8px"}),Object(P.jsxs)(i.Z,{alignItems:"center",children:[Object(P.jsx)(i.Bc,{color:"textSubtle",fontSize:"14px",children:n("Start Date")}),Object(P.jsx)(i.Bc,{ml:"8px",children:Object(k.default)(c,"yyyy-MM-dd HH:mm")})]}),Object(P.jsxs)(i.Z,{alignItems:"center",children:[Object(P.jsx)(i.Bc,{color:"textSubtle",fontSize:"14px",children:n("End Date")}),Object(P.jsx)(i.Bc,{ml:"8px",children:Object(k.default)(r,"yyyy-MM-dd HH:mm")})]})]})]})]})},V=n(391),E=n.n(V),F=n(24),D=Object(y.e)(i.Bc)(r||(r=Object(w.a)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]))),N=function(e){var t=e.choices,n=e.votes,c=Object(p.b)().t,r=Object(v.a)(n),o=Object(d.e)(),a=Object(s.c)().account,l=Object(v.f)(n);return Object(P.jsxs)(i.y,{children:[Object(P.jsx)(i.B,{children:Object(P.jsx)(i.cb,{as:"h3",scale:"md",children:c("Current Results")})}),Object(P.jsxs)(i.z,{children:[o===m.b.Fetched&&t.map((function(e,t){var n=r[e]||[],o=Object(v.f)(n),s=0===l?0:o/l*100,b=n.some((function(e){return a&&e.voter.toLowerCase()===a.toLowerCase()}));return Object(P.jsxs)(i.o,{mt:t>0?"24px":"0px",children:[Object(P.jsxs)(i.Z,{alignItems:"center",mb:"8px",children:[Object(P.jsx)(D,{mb:"4px",title:e,children:e}),b&&Object(P.jsxs)(i.yc,{variant:"success",outline:!0,ml:"8px",children:[Object(P.jsx)(i.I,{mr:"4px"})," ",c("Voted")]})]}),Object(P.jsx)(i.o,{mb:"4px",children:Object(P.jsx)(i.Zb,{primaryStep:s,scale:"sm"})}),Object(P.jsxs)(i.Z,{alignItems:"center",justifyContent:"space-between",children:[Object(P.jsx)(i.Bc,{color:"textSubtle",children:c("%total% Votes",{total:Object(F.e)(o,0,2)})}),Object(P.jsxs)(i.Bc,{children:[s.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),"%"]})]})]},e)})),o===m.b.Fetching&&E()(t.length).map((function(e,t){return Object(P.jsx)(i.o,{mt:t>0?"24px":"0px",children:Object(P.jsx)(i.hc,{height:"36px",mb:"4px"})},e)}))]})]})},Z=n(4),z=n(3),T=n.n(z),M=n(9),H=n(11),K=n(74),q=n(108),J=n(173),Y=n(17),Q=n(196),R=n(27),W=n(128);!function(e){e.MAIN="main",e.DETAILS="details"}(o||(o={}));var _,G,U,X,$,ee,te,ne,ce=n(871),re=function(e){var t=e.vote,n=e.total,c=e.isPending,r=e.isLoading,o=e.onConfirm,a=e.onViewDetails,s=e.onDismiss,l=Object(p.b)().t;return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(ce.a,{children:[Object(P.jsx)(i.Bc,{color:"secondary",mb:"8px",textTransform:"uppercase",fontSize:"12px",bold:!0,children:l("Voting For")}),Object(P.jsx)(D,{bold:!0,fontSize:"20px",mb:"8px",title:t.label,children:t.label}),Object(P.jsx)(i.Bc,{color:"secondary",mb:"8px",textTransform:"uppercase",fontSize:"12px",bold:!0,children:l("Your Voting Power")}),r?Object(P.jsx)(i.hc,{height:"64px",mb:"24px"}):Object(P.jsxs)(ce.b,{onClick:a,style:{cursor:"pointer"},children:[Object(P.jsx)(i.Bc,{bold:!0,fontSize:"20px",children:Object(F.e)(n,0,3)}),Object(P.jsx)(i.fb,{scale:"sm",variant:"text",children:Object(P.jsx)(i.M,{width:"24px"})})]}),Object(P.jsx)(i.Bc,{as:"p",color:"textSubtle",fontSize:"14px",children:l("Are you sure you want to vote for the above choice? This action cannot be undone.")})]}),Object(P.jsx)(i.t,{isLoading:c,endIcon:c?Object(P.jsx)(i.i,{spin:!0,color:"currentColor"}):null,disabled:r||0===n,width:"100%",mb:"8px",onClick:o,children:l("Confirm Vote")}),Object(P.jsx)(i.t,{variant:"secondary",width:"100%",onClick:s,children:l("Cancel")})]})},oe=n(933),ae=n(934),ie=function(e){var t,n=e.onSuccess,c=e.proposalId,r=e.vote,l=e.block,b=e.onDismiss,j=Object(a.useState)(o.MAIN),d=Object(H.a)(j,2),x=d[0],O=d[1],h=Object(a.useState)(!0),f=Object(H.a)(h,2),m=f[0],g=f[1],B=Object(a.useState)(!1),w=Object(H.a)(B,2),y=w[0],k=w[1],S=Object(s.c)().account,C=Object(p.b)().t,I=Object(q.a)().toastError,A=Object(R.a)(),L=A.library,V=A.connector,E=Object(W.a)().theme,F=Object(ae.a)(l,m),D=F.isLoading,N=F.total,z=F.cakeBalance,K=F.cakeVaultBalance,J=F.cakePoolBalance,_=F.poolsBalance,G=F.cakeBnbLpBalance,U=F.ifoPoolBalance,X=F.verificationHash,$=x===o.MAIN,ee=$?null:function(){return O(o.MAIN)},te=(t={},Object(Y.a)(t,o.MAIN,C("Confirm Vote")),Object(Y.a)(t,o.DETAILS,C("Voting Power")),t),ne=function(){g(!1),b()},ce=function(){var e=Object(M.a)(T.a.mark((function e(){var t,o,a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),t=JSON.stringify(Object(Z.a)(Object(Z.a)({},Object(v.e)()),{},{type:u.f.VOTE,payload:{proposal:c,choice:r.value,metadata:{votingPower:N.toString(),verificationHash:X}}})),e.next=5,Object(Q.c)(V,L,S,t);case 5:return o=e.sent,a={address:S,msg:t,sig:o},e.next=9,Object(v.i)(a);case 9:return k(!1),e.next=12,n();case 12:ne(),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(0),k(!1),I(C("Error"),null===e.t0||void 0===e.t0?void 0:e.t0.message),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();return Object(P.jsx)(i.Eb,{title:te[x],onBack:ee,onDismiss:b,hideCloseButton:!$,headerBackground:E.colors.gradients.cardHeader,children:Object(P.jsxs)(i.o,{mb:"24px",width:"320px",children:[x===o.MAIN&&Object(P.jsx)(re,{vote:r,isLoading:D,isPending:y,total:N,onConfirm:ce,onViewDetails:function(){return O(o.DETAILS)},onDismiss:ne}),x===o.DETAILS&&Object(P.jsx)(oe.a,{total:N,cakeBalance:z,ifoPoolBalance:U,cakeVaultBalance:K,cakePoolBalance:J,poolsBalance:_,cakeBnbLpBalance:G})]})})},se=["proposal"],le=y.e.label(_||(_=Object(w.a)(["\n  align-items: center;\n  border: 1px solid ",";\n  border-radius: 16px;\n  cursor: ",";\n  display: flex;\n  margin-bottom: 16px;\n  padding: 16px;\n"])),(function(e){var t=e.theme,n=e.isChecked;return t.colors[n?"success":"cardBorder"]}),(function(e){return e.isDisabled?"not-allowed":"pointer"})),be=y.e.div(G||(G=Object(w.a)(["\n  flex: 1;\n  padding-left: 16px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 0;\n"]))),je=function(e){var t=e.proposal,n=Object(K.a)(e,se),c=Object(a.useState)(null),r=Object(H.a)(c,2),o=r[0],l=r[1],b=Object(p.b)().t,u=Object(q.a)().toastSuccess,d=Object(j.b)(),O=Object(s.c)().account,h=function(){var e=Object(M.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u(b("Vote cast!")),d(Object(x.d)({proposalId:t.id,block:Number(t.snapshot)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=Object(i.ed)(Object(P.jsx)(ie,{onSuccess:h,proposalId:t.id,vote:o,block:Number(t.snapshot)})),m=Object(H.a)(f,1)[0];return Object(P.jsxs)(i.y,Object(Z.a)(Object(Z.a)({},n),{},{children:[Object(P.jsx)(i.B,{children:Object(P.jsx)(i.cb,{as:"h3",scale:"md",children:b("Cast your vote")})}),Object(P.jsxs)(i.z,{children:[t.choices.map((function(e,t){var n=t+1===(null===o||void 0===o?void 0:o.value);return Object(P.jsxs)(le,{isChecked:n,isDisabled:!O,children:[Object(P.jsx)("div",{style:{flexShrink:0},children:Object(P.jsx)(i.cc,{scale:"sm",value:e,checked:n,onChange:function(){l({label:e,value:t+1})},disabled:!O})}),Object(P.jsx)(be,{children:Object(P.jsx)(i.Bc,{as:"span",title:e,children:e})})]},e)})),O?Object(P.jsx)(i.t,{onClick:m,disabled:null===o,children:b("Cast Vote")}):Object(P.jsx)(J.a,{})]})]}))},ue=n(286),de=n.n(ue),xe=Object(y.e)(i.Z)(U||(U=Object(w.a)(["\n  border-bottom: 1px solid ",";\n  padding: 16px 24px;\n"])),(function(e){return e.theme.colors.cardBorder})),pe=Object(y.e)(i.hc)(X||(X=Object(w.a)(["\n  flex: 1;\n"]))),Oe=function(){return Object(P.jsx)(i.o,{children:E()(10).map((function(e){return Object(P.jsxs)(xe,{children:[Object(P.jsx)(i.hc,{height:"21px",mr:"32px",width:"100px"}),Object(P.jsx)(pe,{height:"21px",mr:"32px",width:"100%"}),Object(P.jsx)(pe,{height:"21px",width:"100%"})]},e)}))})},he=Object(y.e)(i.o).attrs({alignItems:"center"})($||($=Object(w.a)(["\n  grid-area: address;\n"]))),fe=Object(y.e)(i.o)(ee||(ee=Object(w.a)(["\n  grid-area: choice;\n  overflow: hidden;\n"]))),me=Object(y.e)(i.o)(te||(te=Object(w.a)(["\n  justify-self: end;\n  grid-area: vote;\n"]))),ve=Object(y.e)(i.ab)(ne||(ne=Object(w.a)(["\n  border-bottom: 1px solid ",";\n  grid-gap: 8px;\n  grid-template-areas:\n    'address address address'\n    'choice choice vote';\n  grid-template-columns: 1fr 1fr 120px;\n  padding: 8px 16px;\n\n  "," {\n    grid-gap: 16px;\n    grid-template-areas: 'address choice vote';\n    padding: 16px 24px;\n  }\n"])),(function(e){return e.theme.colors.cardBorder}),(function(e){return e.theme.mediaQueries.sm})),ge=function(e){var t,n=e.vote,c=e.isVoter,r=Object(p.b)().t,o=!!(null===(t=n.metadata)||void 0===t?void 0:t.votingPower),a=o?parseFloat(n.metadata.votingPower).toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:3}):"--";return Object(P.jsxs)(ve,{children:[Object(P.jsx)(he,{children:Object(P.jsxs)(i.Z,{alignItems:"center",children:[Object(P.jsx)(i.qb,{href:Object(S.e)(n.voter,"address"),children:Object(C.a)(n.voter)}),c&&Object(P.jsxs)(i.yc,{variant:"success",outline:!0,ml:"8px",children:[Object(P.jsx)(i.I,{mr:"4px"})," ",r("Voted")]})]})}),Object(P.jsx)(fe,{children:Object(P.jsx)(D,{title:n.proposal.choices[n.choice-1],children:n.proposal.choices[n.choice-1]})}),Object(P.jsx)(me,{children:Object(P.jsxs)(i.Z,{alignItems:"center",justifyContent:"end",children:[Object(P.jsx)(i.Bc,{title:n.metadata.votingPower,children:a}),o&&Object(P.jsx)(i.qb,{href:"".concat(I.b,"/").concat(n.id)})]})})]})},Be=function(e){var t,n=parseFloat(null===e||void 0===e||null===(t=e.metadata)||void 0===t?void 0:t.votingPower);return n||(n=0),n},we=function(e){var t=e.votes,n=Object(a.useState)(!1),c=Object(H.a)(n,2),r=c[0],o=c[1],l=Object(p.b)().t,b=Object(s.c)().account,j=de()(t,[Be,"created"],["desc","desc"]),u=r?j:j.slice(0,20),x=Object(d.e)()===m.b.Fetched;return Object(P.jsxs)(i.y,{children:[Object(P.jsx)(i.B,{children:Object(P.jsxs)(i.Z,{alignItems:"center",justifyContent:"space-between",children:[Object(P.jsx)(i.cb,{as:"h3",scale:"md",children:l("Votes (%count%)",{count:t.length.toLocaleString()})}),!x&&Object(P.jsx)(i.i,{spin:!0,width:"22px"})]})}),!x&&Object(P.jsx)(Oe,{}),x&&u.length>0&&Object(P.jsxs)(P.Fragment,{children:[u.map((function(e){var t=b&&e.voter.toLowerCase()===b.toLowerCase();return Object(P.jsx)(ge,{vote:e,isVoter:t},e.id)})),Object(P.jsx)(i.Z,{alignItems:"center",justifyContent:"center",py:"8px",px:"24px",children:Object(P.jsx)(i.t,{width:"100%",onClick:function(){o(!r)},variant:"text",endIcon:r?Object(P.jsx)(i.N,{color:"primary",width:"21px"}):Object(P.jsx)(i.K,{color:"primary",width:"21px"}),disabled:!x,children:l(r?"Hide":"See All")})})]}),x&&0===u.length&&Object(P.jsx)(i.Z,{alignItems:"center",justifyContent:"center",py:"32px",children:Object(P.jsx)(i.cb,{as:"h5",children:l("No votes found")})})]})},ye=n(282);t.default=function(){var e=Object(l.i)().id,t=Object(d.a)(e),n=Object(p.b)().t,c=Object(s.c)().account,r=Object(j.b)(),o=Object(d.d)(e),w=Object(d.e)(),y=Object(d.b)(),k=c&&o.some((function(e){return e.voter.toLowerCase()===c.toLowerCase()})),S=null!==t&&void 0!==t?t:{},C=S.id,I=void 0===C?null:C,A=S.snapshot,V=void 0===A?null:A,E=w===m.b.Fetching||y===m.b.Fetching;return Object(a.useEffect)((function(){r(Object(x.b)(e))}),[e,r]),Object(a.useEffect)((function(){I&&V&&r(Object(x.d)({proposalId:I,block:Number(V)}))}),[I,V,r]),t?Object(P.jsxs)(O.a,{py:"40px",children:[Object(P.jsx)(ye.a,{}),Object(P.jsx)(i.o,{mb:"40px",children:Object(P.jsx)(i.t,{as:b.a,to:"/voting",variant:"text",startIcon:Object(P.jsx)(i.c,{color:"primary",width:"24px"}),px:"0",children:n("Back to Vote Overview")})}),Object(P.jsxs)(B.a,{children:[Object(P.jsxs)(i.o,{children:[Object(P.jsxs)(i.o,{mb:"32px",children:[Object(P.jsxs)(i.Z,{alignItems:"center",mb:"8px",children:[Object(P.jsx)(g.a,{proposalState:t.state}),Object(P.jsx)(g.b,{isCoreProposal:Object(v.h)(t),ml:"8px"})]}),Object(P.jsx)(i.cb,{as:"h1",scale:"xl",mb:"16px",children:t.title}),Object(P.jsx)(i.o,{children:Object(P.jsx)(h.a,{children:t.body})})]}),!E&&!k&&t.state===u.d.ACTIVE&&Object(P.jsx)(je,{proposal:t,mb:"16px"}),Object(P.jsx)(we,{votes:o})]}),Object(P.jsxs)(i.o,{children:[Object(P.jsx)(L,{proposal:t}),Object(P.jsx)(N,{choices:t.choices,votes:o})]})]})]}):Object(P.jsx)(f.a,{})}},769:function(e,t,n){"use strict";n.d(t,"h",(function(){return x})),n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return O})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return f})),n.d(t,"i",(function(){return m})),n.d(t,"g",(function(){return v})),n.d(t,"a",(function(){return g})),n.d(t,"f",(function(){return B}));var c=n(17),r=n(30),o=n(4),a=n(3),i=n.n(a),s=n(9),l=n(42),b=n(29),j=n(38),u=n(88),d=n(775),x=function(e){return d.a.includes(e.author.toLowerCase())},p=function(e,t){switch(t){case j.e.COMMUNITY:return e.filter((function(e){return!x(e)}));case j.e.CORE:return e.filter((function(e){return x(e)}));case j.e.ALL:default:return e}},O=function(e,t){return e.filter((function(e){return e.state===t}))},h=function(){return{plugins:{},network:56,strategies:[{name:"cake",params:{symbol:"CAKE",address:b.a.cake.address,decimals:18}}]}},f=function(){return{version:d.e,timestamp:(Date.now()/1e3).toFixed(),space:d.c}},m=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l.l,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 2:if((n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:throw c=e.sent,new Error(null===c||void 0===c?void 0:c.error_description);case 8:return e.next=10,n.json();case 10:return r=e.sent,e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(s.a)(i.a.mark((function e(t,n,c){var r,o,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=c,e.t0){e.next=5;break}return e.next=4,u.a.getBlockNumber();case 4:e.t0=e.sent;case 5:return r=e.t0,e.next=8,fetch("".concat(l.m,"/power"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({address:t,block:r,poolAddresses:n})});case 8:return o=e.sent,e.next=11,o.json();case 11:return a=e.sent,e.abrupt("return",a.data);case 13:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),g=function(e){return e.reduce((function(e,t){var n=t.proposal.choices[t.choice-1];return Object(o.a)(Object(o.a)({},e),{},Object(c.a)({},n,e[n]?[].concat(Object(r.a)(e[n]),[t]):[t]))}),{})},B=function(e){return e.reduce((function(e,t){var n,c=parseFloat(null===(n=t.metadata)||void 0===n?void 0:n.votingPower);return c||(c=0),e+c}),0)}},775:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"e",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"f",(function(){return s}));var c=10,r=["0x842B508681eE336E74600974B4623B709477d29D","0x977e0c1005dff8749f8cac22f4df0bd5f013d1a7","0x6eaf1b33b8672c5dc40ab8f4ba3a0111723126c7"].map((function(e){return e.toLowerCase()})),o="https://gateway.ipfs.io/ipfs",a="0.1.3",i="cake.eth",s=10},821:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return s}));var c=n(21),r=function(){var e=Object(c.d)((function(e){return e.voting.proposals}));return Object.values(e)},o=function(e){return Object(c.d)((function(t){return t.voting.proposals[e]}))},a=function(e){var t=Object(c.d)((function(t){return t.voting.votes[e]}));return t?t.filter((function(e){return!0!==e._inValid})):[]},i=function(){return Object(c.d)((function(e){return e.voting.voteLoadingStatus}))},s=function(){return Object(c.d)((function(e){return e.voting.proposalLoadingStatus}))}},864:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return j}));var c=n(4),r=n(74),o=(n(0),n(214)),a=n(38),i=n(1),s=["proposalState"],l=["isCoreProposal"],b=function(e){var t=e.proposalState,n=Object(r.a)(e,s);return t===a.d.ACTIVE?Object(i.jsx)(o.h,Object(c.a)({},n)):t===a.d.PENDING?Object(i.jsx)(o.g,Object(c.a)({},n)):Object(i.jsx)(o.a,Object(c.a)({},n))},j=function(e){var t=e.isCoreProposal,n=Object(r.a)(e,l);return t?Object(i.jsx)(o.d,Object(c.a)({},n)):Object(i.jsx)(o.b,Object(c.a)({},n))}},871:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return b}));var c,r=n(4),o=n(13),a=(n(0),n(2)),i=n(8),s=n(1),l=i.e.div(c||(c=Object(o.a)(["\n  align-items: center;\n  border: 1px solid ",";\n  border-radius: 12px;\n  display: flex;\n  height: 64px;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  padding: 0 16px;\n"])),(function(e){return e.theme.colors.cardBorder})),b=function(e){return Object(s.jsx)(a.o,Object(r.a)({mb:"24px",maxWidth:"320px"},e))}},932:function(e,t,n){"use strict";var c,r=n(13),o=n(8).e.div(c||(c=Object(r.a)(["\n  align-items: start;\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: minmax(0, 1fr);\n\n  "," {\n    grid-template-columns: 1fr 332px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg}));t.a=o},933:function(e,t,n){"use strict";n(0);var c=n(2),r=n(16),o=n(24),a=n(871),i=n(1);t.a=function(e){var t=e.total,n=e.cakeBalance,s=e.cakeVaultBalance,l=e.cakePoolBalance,b=e.poolsBalance,j=e.cakeBnbLpBalance,u=e.ifoPoolBalance,d=Object(r.b)().t;return Object(i.jsxs)(a.a,{mb:"0",children:[Object(i.jsx)(c.Bc,{as:"p",mb:"24px",fontSize:"14px",color:"textSubtle",children:d("Your voting power is determined by the amount of CAKE you held at the block detailed below. CAKE held in other places does not contribute to your voting power.")}),Object(i.jsx)(c.Bc,{color:"secondary",textTransform:"uppercase",mb:"4px",bold:!0,fontSize:"14px",children:d("Overview")}),Object(i.jsxs)(a.b,{children:[Object(i.jsx)(c.Bc,{color:"secondary",children:d("Your Voting Power")}),Object(i.jsx)(c.Bc,{bold:!0,fontSize:"20px",children:Object(o.e)(t,0,3)})]}),Object(i.jsx)(c.Bc,{color:"secondary",textTransform:"uppercase",mb:"4px",bold:!0,fontSize:"14px",children:d("Your Cake Held Now")}),Object(i.jsxs)(c.Z,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(i.jsx)(c.Bc,{color:"textSubtle",fontSize:"16px",children:d("Wallet")}),Object(i.jsx)(c.Bc,{textAlign:"right",children:Object(o.e)(n,0,3)})]}),Object(i.jsxs)(c.Z,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(i.jsx)(c.Bc,{color:"textSubtle",fontSize:"16px",children:d("Manual CAKE Pool")}),Object(i.jsx)(c.Bc,{textAlign:"right",children:Object(o.e)(l,0,3)})]}),Object(i.jsxs)(c.Z,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(i.jsx)(c.Bc,{color:"textSubtle",fontSize:"16px",children:d("Auto CAKE Pool")}),Object(i.jsx)(c.Bc,{textAlign:"right",children:Object(o.e)(s,0,3)})]}),Object(i.jsxs)(c.Z,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(i.jsx)(c.Bc,{color:"textSubtle",fontSize:"16px",children:d("IFO Pool")}),Object(i.jsx)(c.Bc,{textAlign:"right",children:Object(o.e)(u,0,3)})]}),Object(i.jsxs)(c.Z,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(i.jsx)(c.Bc,{color:"textSubtle",fontSize:"16px",children:d("Other Syrup Pools")}),Object(i.jsx)(c.Bc,{textAlign:"right",children:Object(o.e)(b,0,3)})]}),Object(i.jsxs)(c.Z,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(i.jsx)(c.Bc,{color:"textSubtle",fontSize:"16px",children:d("CAKE BNB LP")}),Object(i.jsx)(c.Bc,{textAlign:"right",children:Object(o.e)(j,0,3)})]})]})}},934:function(e,t,n){"use strict";var c=n(3),r=n.n(c),o=n(4),a=n(9),i=n(11),s=n(0),l=n(39),b=n(211),j=n(28),u=n(88),d=n(769),x={verificationHash:null,cakeBalance:0,cakeVaultBalance:0,cakePoolBalance:0,poolsBalance:0,cakeBnbLpBalance:0,ifoPoolBalance:0,total:0};t.a=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Object(l.c)(),c=n.account,p=Object(s.useState)(x),O=Object(i.a)(p,2),h=O[0],f=O[1],m=Object(s.useState)(!!c),v=Object(i.a)(m,2),g=v[0],B=v[1];return Object(s.useEffect)((function(){c&&t&&function(){var n=Object(a.a)(r.a.mark((function n(){var a,i,s,l,x,p,O,h,m,v,g,w;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(B(!0),n.prev=1,n.t0=e,n.t0){n.next=7;break}return n.next=6,u.a.getBlockNumber();case 6:n.t0=n.sent;case 7:return a=n.t0,n.next=10,Object(b.b)(a);case 10:return i=n.sent,s=i.map((function(e){var t=e.contractAddress;return Object(j.a)(t)})),n.next=14,Object(d.g)(c,s,a);case 14:l=n.sent,x=l.cakeBalance,p=l.cakeBnbLpBalance,O=l.cakePoolBalance,h=l.total,m=l.poolsBalance,v=l.cakeVaultBalance,g=l.verificationHash,w=l.IFOPoolBalance,t&&f((function(e){return Object(o.a)(Object(o.a)({},e),{},{verificationHash:g,cakeBalance:parseFloat(x),cakeBnbLpBalance:parseFloat(p),cakePoolBalance:parseFloat(O),poolsBalance:parseFloat(m),cakeVaultBalance:parseFloat(v),ifoPoolBalance:w?parseFloat(w):0,total:parseFloat(h)})}));case 24:return n.prev=24,B(!1),n.finish(24);case 27:case"end":return n.stop()}}),n,null,[[1,,24,27]])})));return function(){return n.apply(this,arguments)}}()()}),[c,e,f,t,B]),Object(o.a)(Object(o.a)({},h),{},{isLoading:g})}}}]);
//# sourceMappingURL=24.708e3941.chunk.js.map