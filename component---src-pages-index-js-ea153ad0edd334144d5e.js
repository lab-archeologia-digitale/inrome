"use strict";(self.webpackChunkinrome=self.webpackChunkinrome||[]).push([[678],{526:function(e,t,a){a.r(t),a.d(t,{Head:function(){return z},default:function(){return U}});var n=a(7294),r=a(2503),c=a(1707),l=a(8146);var s=function(e,t){var a=(0,n.useRef)(!0);(0,n.useEffect)((function(){if(!a.current)return e();a.current=!1}),t)},i=a(2029),o=a(6454),u=a(5088),d=Math.pow(2,31)-1;function m(e,t,a){var n=a-Date.now();e.current=n<=d?setTimeout(t,n):setTimeout((function(){return m(e,t,a)}),d)}function b(){var e=(0,o.Z)(),t=(0,n.useRef)();return(0,u.Z)((function(){return clearTimeout(t.current)})),(0,n.useMemo)((function(){var a=function(){return clearTimeout(t.current)};return{set:function(n,r){void 0===r&&(r=0),e()&&(a(),r<=d?t.current=setTimeout(n,r):m(t,n,Date.now()+r))},clear:a}}),[])}var p=a(3735),f=a(4184),g=a.n(f),h=a(2081),v=(0,a(4680).Z)("carousel-caption"),w=a(6792),E=a(5893);const x=n.forwardRef((({as:e="div",bsPrefix:t,className:a,...n},r)=>{const c=g()(a,(0,w.vE)(t,"carousel-item"));return(0,E.jsx)(e,{ref:r,...n,className:c})}));x.displayName="CarouselItem";var N=x;function y(e,t){let a=0;return n.Children.map(e,(e=>n.isValidElement(e)?t(e,a++):e))}var S=a(492),C=a(4509),k=a(360);const Z=n.forwardRef((({defaultActiveIndex:e=0,...t},a)=>{const{as:r="div",bsPrefix:c,slide:o=!0,fade:u=!1,controls:d=!0,indicators:m=!0,indicatorLabels:f=[],activeIndex:v,onSelect:x,onSlide:N,onSlid:Z,interval:I=5e3,keyboard:T=!0,onKeyDown:j,pause:O="hover",onMouseOver:R,onMouseOut:_,wrap:M=!0,touch:P=!0,onTouchStart:$,onTouchMove:L,onTouchEnd:D,prevIcon:A=(0,E.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:U="Previous",nextIcon:z=(0,E.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:B="Next",variant:W,className:H,children:K,...J}=(0,h.Ch)({defaultActiveIndex:e,...t},{activeIndex:"onSelect"}),F=(0,w.vE)(c,"carousel"),V=(0,w.SC)(),X=(0,n.useRef)(null),[q,Q]=(0,n.useState)("next"),[G,Y]=(0,n.useState)(!1),[ee,te]=(0,n.useState)(!1),[ae,ne]=(0,n.useState)(v||0);(0,n.useEffect)((()=>{ee||v===ae||(X.current?Q(X.current):Q((v||0)>ae?"next":"prev"),o&&te(!0),ne(v||0))}),[v,ee,ae,o]),(0,n.useEffect)((()=>{X.current&&(X.current=null)}));let re,ce=0;!function(e,t){let a=0;n.Children.forEach(e,(e=>{n.isValidElement(e)&&t(e,a++)}))}(K,((e,t)=>{++ce,t===v&&(re=e.props.interval)}));const le=(0,i.Z)(re),se=(0,n.useCallback)((e=>{if(ee)return;let t=ae-1;if(t<0){if(!M)return;t=ce-1}X.current="prev",null==x||x(t,e)}),[ee,ae,x,M,ce]),ie=(0,l.Z)((e=>{if(ee)return;let t=ae+1;if(t>=ce){if(!M)return;t=0}X.current="next",null==x||x(t,e)})),oe=(0,n.useRef)();(0,n.useImperativeHandle)(a,(()=>({element:oe.current,prev:se,next:ie})));const ue=(0,l.Z)((()=>{!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;const t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(oe.current)&&(V?se():ie())})),de="next"===q?"start":"end";s((()=>{o||(null==N||N(ae,de),null==Z||Z(ae,de))}),[ae]);const me=`${F}-item-${q}`,be=`${F}-item-${de}`,pe=(0,n.useCallback)((e=>{(0,C.Z)(e),null==N||N(ae,de)}),[N,ae,de]),fe=(0,n.useCallback)((()=>{te(!1),null==Z||Z(ae,de)}),[Z,ae,de]),ge=(0,n.useCallback)((e=>{if(T&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void(V?ie(e):se(e));case"ArrowRight":return e.preventDefault(),void(V?se(e):ie(e))}null==j||j(e)}),[T,j,se,ie,V]),he=(0,n.useCallback)((e=>{"hover"===O&&Y(!0),null==R||R(e)}),[O,R]),ve=(0,n.useCallback)((e=>{Y(!1),null==_||_(e)}),[_]),we=(0,n.useRef)(0),Ee=(0,n.useRef)(0),xe=b(),Ne=(0,n.useCallback)((e=>{we.current=e.touches[0].clientX,Ee.current=0,"hover"===O&&Y(!0),null==$||$(e)}),[O,$]),ye=(0,n.useCallback)((e=>{e.touches&&e.touches.length>1?Ee.current=0:Ee.current=e.touches[0].clientX-we.current,null==L||L(e)}),[L]),Se=(0,n.useCallback)((e=>{if(P){const t=Ee.current;Math.abs(t)>40&&(t>0?se(e):ie(e))}"hover"===O&&xe.set((()=>{Y(!1)}),I||void 0),null==D||D(e)}),[P,O,se,ie,xe,I,D]),Ce=null!=I&&!G&&!ee,ke=(0,n.useRef)();(0,n.useEffect)((()=>{var e,t;if(!Ce)return;const a=V?se:ie;return ke.current=window.setInterval(document.visibilityState?ue:a,null!=(e=null!=(t=le.current)?t:I)?e:void 0),()=>{null!==ke.current&&clearInterval(ke.current)}}),[Ce,se,ie,le,I,ue,V]);const Ze=(0,n.useMemo)((()=>m&&Array.from({length:ce},((e,t)=>e=>{null==x||x(t,e)}))),[m,ce,x]);return(0,E.jsxs)(r,{ref:oe,...J,onKeyDown:ge,onMouseOver:he,onMouseOut:ve,onTouchStart:Ne,onTouchMove:ye,onTouchEnd:Se,className:g()(H,F,o&&"slide",u&&`${F}-fade`,W&&`${F}-${W}`),children:[m&&(0,E.jsx)("div",{className:`${F}-indicators`,children:y(K,((e,t)=>(0,E.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=f&&f.length?f[t]:`Slide ${t+1}`,className:t===ae?"active":void 0,onClick:Ze?Ze[t]:void 0,"aria-current":t===ae},t)))}),(0,E.jsx)("div",{className:`${F}-inner`,children:y(K,((e,t)=>{const a=t===ae;return o?(0,E.jsx)(k.Z,{in:a,onEnter:a?pe:void 0,onEntered:a?fe:void 0,addEndListener:S.Z,children:(t,r)=>n.cloneElement(e,{...r,className:g()(e.props.className,a&&"entered"!==t&&me,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&be)})}):n.cloneElement(e,{className:g()(e.props.className,a&&"active")})}))}),d&&(0,E.jsxs)(E.Fragment,{children:[(M||0!==v)&&(0,E.jsxs)(p.Z,{className:`${F}-control-prev`,onClick:se,children:[A,U&&(0,E.jsx)("span",{className:"visually-hidden",children:U})]}),(M||v!==ce-1)&&(0,E.jsxs)(p.Z,{className:`${F}-control-next`,onClick:ie,children:[z,B&&(0,E.jsx)("span",{className:"visually-hidden",children:B})]})]})]})}));Z.displayName="Carousel";var I=Object.assign(Z,{Caption:v,Item:N}),T=a(8032),j=a(2788);const O=j.default.section.withConfig({displayName:"slide__Slider",componentId:"sc-187gqy4-0"})([".slide{min-height:auto;border-bottom:#3e281c solid 10px;}.subTitle{text-align:center;}.btn-primary{background-color:#8b5a40 !important;color:#fff;border-color:#8b5a40;padding-left:40px;padding-right:40px;}.btn:hover{border-color:#3e281c;}"]);var R=function(){return n.createElement(O,null,n.createElement(I,null,n.createElement(I.Item,null,n.createElement(T.S,{src:"../images/slide1.jpg",className:"d-block w-100",formats:["AUTO","WEBP"],alt:"InRome",__imageData:a(7261)}),n.createElement(I.Caption,null,n.createElement("h3",null,"LORE IPSUM DOLOR SIT AMET"),n.createElement("span",{className:"subTitle"},"Nulla vitae elit libero, a pharetra augue mollis interdum."),n.createElement("br",null),n.createElement("button",{className:"btn btn-primary m-4"},"LINK"))),n.createElement(I.Item,null,n.createElement(T.S,{src:"../images/slide1.jpg",className:"d-block w-100",formats:["AUTO","WEBP"],alt:"InRome",__imageData:a(7261)}),n.createElement(I.Caption,null,n.createElement("h3",null,"LORE IPSUM DOLOR SIT AMET"),n.createElement("span",{className:"subTitle"},"Nulla vitae elit libero, a pharetra augue mollis interdum."),n.createElement("br",null),n.createElement("button",{className:"btn btn-primary m-4"},"LINK"))),n.createElement(I.Item,null,n.createElement(T.S,{src:"../images/slide1.jpg",className:"d-block w-100",formats:["AUTO","WEBP"],alt:"InRome",__imageData:a(7261)}),n.createElement(I.Caption,null,n.createElement("h3",null,"LORE IPSUM DOLOR SIT AMET"),n.createElement("span",{className:"subTitle"},"Nulla vitae elit libero, a pharetra augue mollis interdum."),n.createElement("br",null),n.createElement("button",{className:"btn btn-primary m-4"},"LINK")))))},_=a(1883),M=a(682),P=a(4051),$=a(1555),L=a(6025);const D=j.default.section.withConfig({displayName:"home__Wrapper",componentId:"sc-10vt2n6-0"})([".news{background-color:#f3e9e3;}.card{border-radius:5px;}.card-body{background-color:#588aa9;}.card-title a{color:#fff;text-decoration:none;}.card-title a:hover{color:#000;text-decoration:none;}.gatsby-image-wrapper:hover img{opacity:0.7 !important;transition:all 1s ease;}"]);var A=()=>{const e=(0,_.useStaticQuery)("4040680521");return n.createElement(D,null,n.createElement("section",{className:"py-5"},n.createElement(M.Z,null,n.createElement(P.Z,null,n.createElement("h1",null,e.directus.articles_by_id.title),n.createElement("div",{dangerouslySetInnerHTML:{__html:e.directus.articles_by_id.text}})))),n.createElement("section",{className:"py-5 text-center news"},n.createElement(M.Z,null,n.createElement(P.Z,null,n.createElement($.Z,{sm:4,xs:12},n.createElement(L.Z,null,n.createElement(T.S,{src:"../images/progetti.png",formats:["AUTO","WEBP"],alt:"progetti",className:"card-img-top",height:300,__imageData:a(3846)}),n.createElement("div",{className:"card-body"},n.createElement("h5",{className:"card-title"}," ",n.createElement("a",{href:"/"},"Sub Projects"))))),n.createElement($.Z,{sm:4,xs:12},n.createElement(L.Z,null,n.createElement(T.S,{src:"../images/news.png",formats:["AUTO","WEBP"],alt:"news",className:"card-img-top",height:300,__imageData:a(5258)}),n.createElement("div",{className:"card-body"},n.createElement("h5",{className:"card-title"},n.createElement("a",{href:"/"},"News"))))),n.createElement($.Z,{sm:4,xs:12},n.createElement(L.Z,null,n.createElement(T.S,{src:"../images/output.png",formats:["AUTO","WEBP"],alt:"output",className:"card-img-top",height:300,__imageData:a(8231)}),n.createElement("div",{className:"card-body"},n.createElement("h5",{className:"card-title"},n.createElement("a",{href:"/"},"Outputs")))))))))};var U=()=>n.createElement(r.Z,null,n.createElement("div",{className:"slide"},n.createElement(R,null)),n.createElement(A,null));const z=()=>n.createElement(c.p,null)},6025:function(e,t,a){a.d(t,{Z:function(){return C}});var n=a(4184),r=a.n(n),c=a(7294),l=a(6792),s=a(4680),i=a(9602),o=a(5893);const u=c.forwardRef((({bsPrefix:e,className:t,variant:a,as:n="img",...c},s)=>{const i=(0,l.vE)(e,"card-img");return(0,o.jsx)(n,{ref:s,className:r()(a?`${i}-${a}`:i,t),...c})}));u.displayName="CardImg";var d=u,m=a(9059);const b=c.forwardRef((({bsPrefix:e,className:t,as:a="div",...n},s)=>{const i=(0,l.vE)(e,"card-header"),u=(0,c.useMemo)((()=>({cardHeaderBsPrefix:i})),[i]);return(0,o.jsx)(m.Z.Provider,{value:u,children:(0,o.jsx)(a,{ref:s,...n,className:r()(t,i)})})}));b.displayName="CardHeader";var p=b;const f=(0,i.Z)("h5"),g=(0,i.Z)("h6"),h=(0,s.Z)("card-body"),v=(0,s.Z)("card-title",{Component:f}),w=(0,s.Z)("card-subtitle",{Component:g}),E=(0,s.Z)("card-link",{Component:"a"}),x=(0,s.Z)("card-text",{Component:"p"}),N=(0,s.Z)("card-footer"),y=(0,s.Z)("card-img-overlay"),S=c.forwardRef((({bsPrefix:e,className:t,bg:a,text:n,border:c,body:s=!1,children:i,as:u="div",...d},m)=>{const b=(0,l.vE)(e,"card");return(0,o.jsx)(u,{ref:m,...d,className:r()(t,b,a&&`bg-${a}`,n&&`text-${n}`,c&&`border-${c}`),children:s?(0,o.jsx)(h,{children:i}):i})}));S.displayName="Card";var C=Object.assign(S,{Img:d,Title:v,Subtitle:w,Body:h,Link:E,Text:x,Header:p,Footer:N,ImgOverlay:y})},8231:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#182828","images":{"fallback":{"src":"/inrome/static/a612f8c936187f6c668005ba07c2a71c/30cdc/output.png","srcSet":"/inrome/static/a612f8c936187f6c668005ba07c2a71c/7458e/output.png 75w,\\n/inrome/static/a612f8c936187f6c668005ba07c2a71c/de3a1/output.png 150w,\\n/inrome/static/a612f8c936187f6c668005ba07c2a71c/30cdc/output.png 300w","sizes":"(min-width: 300px) 300px, 100vw"},"sources":[{"srcSet":"/inrome/static/a612f8c936187f6c668005ba07c2a71c/18188/output.webp 75w,\\n/inrome/static/a612f8c936187f6c668005ba07c2a71c/c65bc/output.webp 150w,\\n/inrome/static/a612f8c936187f6c668005ba07c2a71c/078c3/output.webp 300w","type":"image/webp","sizes":"(min-width: 300px) 300px, 100vw"}]},"width":300,"height":300}')},3846:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8e8e8","images":{"fallback":{"src":"/inrome/static/4c475f0aad1adb85ced661b2b08b83ef/30cdc/progetti.png","srcSet":"/inrome/static/4c475f0aad1adb85ced661b2b08b83ef/7458e/progetti.png 75w,\\n/inrome/static/4c475f0aad1adb85ced661b2b08b83ef/de3a1/progetti.png 150w,\\n/inrome/static/4c475f0aad1adb85ced661b2b08b83ef/30cdc/progetti.png 300w","sizes":"(min-width: 300px) 300px, 100vw"},"sources":[{"srcSet":"/inrome/static/4c475f0aad1adb85ced661b2b08b83ef/18188/progetti.webp 75w,\\n/inrome/static/4c475f0aad1adb85ced661b2b08b83ef/c65bc/progetti.webp 150w,\\n/inrome/static/4c475f0aad1adb85ced661b2b08b83ef/078c3/progetti.webp 300w","type":"image/webp","sizes":"(min-width: 300px) 300px, 100vw"}]},"width":300,"height":300}')},7261:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#b8d8e8","images":{"fallback":{"src":"/inrome/static/20990f8a9b88a624d768b05e314cb875/31fc3/slide1.jpg","srcSet":"/inrome/static/20990f8a9b88a624d768b05e314cb875/7f724/slide1.jpg 300w,\\n/inrome/static/20990f8a9b88a624d768b05e314cb875/af1d9/slide1.jpg 600w,\\n/inrome/static/20990f8a9b88a624d768b05e314cb875/31fc3/slide1.jpg 1200w","sizes":"(min-width: 1200px) 1200px, 100vw"},"sources":[{"srcSet":"/inrome/static/20990f8a9b88a624d768b05e314cb875/091a1/slide1.webp 300w,\\n/inrome/static/20990f8a9b88a624d768b05e314cb875/763bf/slide1.webp 600w,\\n/inrome/static/20990f8a9b88a624d768b05e314cb875/d7336/slide1.webp 1200w","type":"image/webp","sizes":"(min-width: 1200px) 1200px, 100vw"}]},"width":1200,"height":627}')},5258:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#c8a888","images":{"fallback":{"src":"/inrome/static/0d3b63214f42a8506f95a7ca687199c7/30cdc/news.png","srcSet":"/inrome/static/0d3b63214f42a8506f95a7ca687199c7/7458e/news.png 75w,\\n/inrome/static/0d3b63214f42a8506f95a7ca687199c7/de3a1/news.png 150w,\\n/inrome/static/0d3b63214f42a8506f95a7ca687199c7/30cdc/news.png 300w","sizes":"(min-width: 300px) 300px, 100vw"},"sources":[{"srcSet":"/inrome/static/0d3b63214f42a8506f95a7ca687199c7/18188/news.webp 75w,\\n/inrome/static/0d3b63214f42a8506f95a7ca687199c7/c65bc/news.webp 150w,\\n/inrome/static/0d3b63214f42a8506f95a7ca687199c7/078c3/news.webp 300w","type":"image/webp","sizes":"(min-width: 300px) 300px, 100vw"}]},"width":300,"height":300}')}}]);
//# sourceMappingURL=component---src-pages-index-js-ea153ad0edd334144d5e.js.map