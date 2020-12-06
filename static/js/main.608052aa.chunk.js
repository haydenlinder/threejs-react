(this["webpackJsonpreact-three-fiber-intro"]=this["webpackJsonpreact-three-fiber-intro"]||[]).push([[0],{46:function(e,t,n){},47:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var r=n(6),c=n(1),i=n.n(c),o=n(35),s=n.n(o),a=(n(46),n(47),n(12)),j=n(53),b=n(36);Object(a.b)({OrbitControls:b.a});var l=function(){var e=Object(a.e)(),t=e.camera,n=e.gl;return Object(r.jsx)("orbitControls",{attach:"orbitControls",args:[t,n.domElement]})},u=n(7),d=n(9),h=n(0),O=function(e){var t=Object(a.d)(h.TextureLoader,"/autoshop.jpg"),n=Object(a.e)().gl,i=Object(c.useMemo)((function(){return new h.WebGLCubeRenderTarget(t.image.height).fromEquirectangularTexture(n,t)}),[]);return Object(r.jsx)("primitive",{attach:"background",object:i})},f=function(e){var t=Object(j.c)((function(){return Object(u.a)({args:[20,1,10]},e)})),n=Object(d.a)(t,2),c=n[0];n[1];return Object(r.jsxs)("mesh",Object(u.a)(Object(u.a)({ref:c},e),{},{receiveShadow:!0,children:[Object(r.jsx)("boxBufferGeometry",{args:[200,1,200]}),Object(r.jsx)("meshPhysicalMaterial",{transparent:!0,opacity:.2})]}))},p=function(e){return Object(r.jsxs)("mesh",Object(u.a)(Object(u.a)({},e),{},{children:[Object(r.jsx)("pointLight",{castShadow:!0,"shadow-mapSize-height":Math.pow(2,10),"shadow-mapSize-width":Math.pow(2,10),"shadow-radius":10}),Object(r.jsx)("sphereBufferGeometry",{args:[.2,20,20]}),Object(r.jsx)("meshPhongMaterial",{emissive:"yellow"})]}))},g={activeMesh:{},activeMeshName:"Capot001_CAR_PAINT_0",cameraPos:new h.Vector3(9,2,4),target:new h.Vector3(4,0,0),shouldUpdate:!0},x=function(e){var t=function(e){g.activeMesh&&(g.activeMesh.material.color=new h.Color(e.target.style.background))};return Object(r.jsxs)("div",{style:{position:"absolute",zIndex:1,left:0,right:0,margin:"auto",width:"fit-content",display:"flex",top:"20px"},children:[Object(r.jsx)("div",{onClick:t,style:{background:"blue",height:50,width:50}}),Object(r.jsx)("div",{onClick:t,style:{background:"yellow",height:50,width:50}}),Object(r.jsx)("div",{onClick:t,style:{background:"white",height:50,width:50}})]})},m=n(18),v=function(e){var t=e.position,n=void 0===t?[0,0,0]:t,c=e.offset,i=void 0===c?[0,0,0]:c,o=e.dims,s=void 0===o?[1,1,1]:o,a=e.visible,b=void 0!==a&&a,l=e.children,u=Object(j.c)((function(){return{mass:1,args:s,position:n}})),h=Object(d.a)(u,2),O=h[0],f=h[1];return Object(r.jsxs)("group",{ref:O,api:f,children:[Object(r.jsxs)("mesh",{scale:s,visible:b,children:[Object(r.jsx)("boxBufferGeometry",{}),Object(r.jsx)("meshPhysicalMaterial",{wireframe:!0})]}),Object(r.jsx)("group",{position:i,children:l})]})},w=n(40),y=function(e){var t=Object(a.d)(w.a,e.path);return t.scene.traverse((function(e){e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,e.material.side=h.FrontSide)})),Object(r.jsx)("primitive",{object:t.scene,scale:e.scale})},C=n(41);Object(a.b)({DragControls:C.a});var k=function(e){var t=Object(c.useRef)(),n=Object(c.useRef)(),i=Object(c.useState)([]),o=Object(d.a)(i,2),s=o[0],j=o[1],b=Object(a.e)(),l=b.camera,u=b.gl,h=b.scene;return Object(c.useEffect)((function(){j(t.current.children)}),[]),Object(c.useEffect)((function(){n.current.addEventListener("hoveron",(function(e){return h.orbitControls.enabled=!1})),n.current.addEventListener("hoveroff",(function(e){return h.orbitControls.enabled=!0})),n.current.addEventListener("dragstart",(function(e){var t;null===(t=e.object.api)||void 0===t||t.mass.set(0)})),n.current.addEventListener("dragend",(function(e){var t;return null===(t=e.object.api)||void 0===t?void 0:t.mass.set(1)})),n.current.addEventListener("drag",(function(e){var t,n;null===(t=e.object.api)||void 0===t||t.position.copy(e.object.position),null===(n=e.object.api)||void 0===n||n.velocity.set(0,0,0)}))}),[s]),Object(r.jsxs)("group",{ref:t,children:[Object(r.jsx)("dragControls",{transformGroup:e.transformGroup,ref:n,args:[s,l,u.domElement]}),e.children]})},M=function(e){return Object(m.a)(e),Object(r.jsxs)(c.Suspense,{fallback:null,children:[Object(r.jsx)(k,{transformGroup:!0,children:Object(r.jsx)(v,{position:[4,4,0],dims:[3,2,6],offset:[0,-.4,.8],children:Object(r.jsx)(y,{path:"/tesla_model_3/scene.gltf",scale:new Array(3).fill(.01)})})}),Object(r.jsx)(k,{transformGroup:!0,children:Object(r.jsx)(v,{position:[-4,4,0],dims:[3,2,7],offset:[0,-.8,.2],children:Object(r.jsx)(y,{path:"/tesla_model_s/scene.gltf",scale:new Array(3).fill(.013)})})})]})},P=function(e){return Object(m.a)(e),Object(a.c)((function(e){var t=e.camera,n=e.scene;(g.activeMesh.name!==g.activeMeshName&&(g.activeMesh=n.getObjectByName(g.activeMeshName)||{}),g.shouldUpdate)&&(t.position.lerp(g.cameraPos,.1),n.orbitControls.target.lerp(g.target,.1),n.orbitControls.update(),t.position.clone().sub(g.cameraPos).length()<.1&&(g.shouldUpdate=!1))})),null},S=n(14),L={zIndex:1,position:"absolute",bottom:"30vh",height:"30px",width:"30px",background:"white",textAlign:"center",borderRadius:"100%",fontSize:20,fontWeight:"bold",opacity:.7,border:"1px solid black",cursor:"pointer"},_=function(e){Object(m.a)(e);var t={1:{cameraPos:[9,2,4],target:[4,0,0],name:"Capot001_CAR_PAINT_0"},2:{cameraPos:[1,2,5],target:[-4,0,0],name:"object005_bod_0"}},n=function(e){var n,r;(n=g.cameraPos).set.apply(n,Object(S.a)(t[e].cameraPos)),(r=g.target).set.apply(r,Object(S.a)(t[e].target)),g.activeMeshName=t[e].name,g.shouldUpdate=!0};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("button",{onClick:function(e){return n(2)},style:Object(u.a)({left:"40vw"},L),children:"<"}),Object(r.jsx)("button",{onClick:function(e){return n(1)},style:Object(u.a)({right:"40vw"},L),children:">"})]})},E=function(e){return Object(m.a)(e),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("ambientLight",{intensity:.2}),Object(r.jsx)("directionalLight",{intensity:.5,position:[6,3,0]}),Object(r.jsx)(p,{position:[-6,3,0]}),Object(r.jsx)(p,{position:[0,3,0]}),Object(r.jsx)(p,{position:[6,3,0]})]})},G=n(33);var A=function(){return Object(r.jsxs)("div",{style:{height:"100vh",width:"100vw"},children:[Object(r.jsx)(x,{}),Object(r.jsx)(_,{}),Object(r.jsxs)(a.a,{shadowMap:!0,style:{background:"black"},camera:{position:[7,7,7]},children:[Object(r.jsx)(c.Suspense,{fallback:null,children:Object(r.jsx)(O,{})}),Object(r.jsx)(P,{}),Object(r.jsx)(E,{}),Object(r.jsx)(l,{}),Object(r.jsxs)(j.a,{children:[Object(r.jsx)(M,{}),Object(r.jsx)(f,{position:[0,-.5,0]})]}),Object(r.jsx)(G.b,{children:Object(r.jsx)(G.a,{focusDistance:0,focalLength:.02,bokehScale:2,height:480})})]})]})},F=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,55)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),i(e),o(e)}))};s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(A,{})}),document.getElementById("root")),F()}},[[52,1,2]]]);
//# sourceMappingURL=main.608052aa.chunk.js.map