"use strict";var bgColor=16777215;THREE.SpriteCanvasMaterial=function(e){THREE.Material.call(this),this.type="SpriteCanvasMaterial",this.color=new THREE.Color(16777215),this.program=function(){},this.setValues(e)},THREE.SpriteCanvasMaterial.prototype=Object.create(THREE.Material.prototype),THREE.SpriteCanvasMaterial.prototype.constructor=THREE.SpriteCanvasMaterial,THREE.SpriteCanvasMaterial.prototype.isSpriteCanvasMaterial=!0,THREE.SpriteCanvasMaterial.prototype.clone=function(){var e=new THREE.SpriteCanvasMaterial;return e.copy(this),e.color.copy(this.color),e.program=this.program,e},THREE.CanvasRenderer=function(e){console.log("THREE.CanvasRenderer",THREE.REVISION),e=e||{};var s,l,h,c,p,E,u,m,v,y,x,R,T,g,S,H,w,M,C,b=this,d=new THREE.Projector,i=void 0!==e.canvas?e.canvas:document.createElement("canvas"),f=i.width,z=i.height,V=Math.floor(f/2),j=Math.floor(z/2),L=0,O=0,B=f,P=z,o=1,W=i.getContext("2d",{alpha:!0===e.alpha}),t=new THREE.Color(bgColor),n=!0===e.alpha?0:1,a=1,N=0,k=null,A=null,F=null,D=null,G=null,r=[],I=new THREE.Color,U=new THREE.Color,q=new THREE.Color,J=new THREE.Color,K={},Q=new THREE.Box2,X=new THREE.Box2,Y=new THREE.Box2,Z=new THREE.Color,$=new THREE.Color,_=new THREE.Color,ee=new THREE.Vector3,re=new THREE.Vector3,te=new THREE.Vector3,ie=new THREE.Matrix3;function oe(e,r,t){de(t.opacity),fe(t.blending);var i=r.scale.x*V,o=r.scale.y*j,n=Math.sqrt(i*i+o*o);if(Y.min.set(e.x-n,e.y-n),Y.max.set(e.x+n,e.y+n),t.isSpriteMaterial){var a=t.map;if(null!==a){var s=K[a.id];if(void 0!==s&&s.version===a.version||(s=ce(a),K[a.id]=s),void 0!==s.canvas){ye(s.canvas);var l=a.image,c=l.width*a.offset.x,p=l.height*a.offset.y,E=l.width*a.repeat.x,d=l.height*a.repeat.y,f=i/E,h=o/d;W.save(),W.translate(e.x,e.y),0!==t.rotation&&W.rotate(t.rotation),W.translate(-i/2,-o/2),W.scale(f,h),W.translate(-c,-p),W.fillRect(c,p,E,d),W.restore()}}else ye(t.color.getStyle()),W.save(),W.translate(e.x,e.y),0!==t.rotation&&W.rotate(t.rotation),W.scale(i,-o),W.fillRect(-.5,-.5,1,1),W.restore()}else t.isSpriteCanvasMaterial?(ve(t.color.getStyle()),ye(t.color.getStyle()),W.save(),W.translate(e.x,e.y),0!==t.rotation&&W.rotate(t.rotation),W.scale(i,o),t.program(W),W.restore()):t.isPointsMaterial&&(ye(t.color.getStyle()),W.save(),W.translate(e.x,e.y),0!==t.rotation&&W.rotate(t.rotation),W.scale(i*t.size,-o*t.size),W.fillRect(-.5,-.5,1,1),W.restore())}function ne(e,r,t,i){if(de(i.opacity),fe(i.blending),W.beginPath(),W.moveTo(e.positionScreen.x,e.positionScreen.y),W.lineTo(r.positionScreen.x,r.positionScreen.y),i.isLineBasicMaterial){if(he(i.linewidth),ue(i.linecap),me(i.linejoin),i.vertexColors!==THREE.VertexColors)ve(i.color.getStyle());else{var o=t.vertexColors[0].getStyle(),n=t.vertexColors[1].getStyle();if(o===n)ve(o);else{try{var a=W.createLinearGradient(e.positionScreen.x,e.positionScreen.y,r.positionScreen.x,r.positionScreen.y);a.addColorStop(0,o),a.addColorStop(1,n)}catch(e){a=o}ve(a)}}i.isLineDashedMaterial&&xe([i.dashSize,i.gapSize]),W.stroke(),Y.expandByScalar(2*i.linewidth),i.isLineDashedMaterial&&xe([])}}function ae(e,r,t,i,o,n,a,s){var l,c,p,E,d,f;if(b.info.render.vertices+=3,b.info.render.faces++,de(s.opacity),fe(s.blending),u=e.positionScreen.x,m=e.positionScreen.y,v=r.positionScreen.x,y=r.positionScreen.y,x=t.positionScreen.x,R=t.positionScreen.y,l=u,c=m,p=v,E=y,d=x,f=R,W.beginPath(),W.moveTo(l,c),W.lineTo(p,E),W.lineTo(d,f),W.closePath(),(s.isMeshLambertMaterial||s.isMeshPhongMaterial||s.isMeshStandardMaterial)&&null===s.map)U.copy(s.color),q.copy(s.emissive),s.vertexColors===THREE.FaceColors&&U.multiply(a.color),I.copy(Z),re.copy(e.positionWorld).add(r.positionWorld).add(t.positionWorld).divideScalar(3),function(e,r,t){for(var i=0,o=h.length;i<o;i++){var n=h[i];if(J.copy(n.color),n.isDirectionalLight){var a=ee.setFromMatrixPosition(n.matrixWorld).normalize();if((s=r.dot(a))<=0)continue;s*=n.intensity,t.add(J.multiplyScalar(s))}else if(n.isPointLight){var s;if(a=ee.setFromMatrixPosition(n.matrixWorld),(s=r.dot(ee.subVectors(a,e).normalize()))<=0)continue;if(0==(s*=0==n.distance?1:1-Math.min(e.distanceTo(a)/n.distance,1)))continue;s*=n.intensity,t.add(J.multiplyScalar(s))}}}(re,a.normalModel,I),I.multiply(U).add(q),!0===s.wireframe?se(I,s.wireframeLinewidth,s.wireframeLinecap,s.wireframeLinejoin):le(I);else if(s.isMeshBasicMaterial||s.isMeshLambertMaterial||s.isMeshPhongMaterial||s.isMeshStandardMaterial){if(null!==s.map)s.map.mapping===THREE.UVMapping&&(T=a.uvs,pe(u,m,v,y,x,R,T[i].x,T[i].y,T[o].x,T[o].y,T[n].x,T[n].y,s.map));else null!==s.envMap?s.envMap.mapping===THREE.SphericalReflectionMapping&&(te.copy(a.vertexNormalsModel[i]).applyMatrix3(ie),g=.5*te.x+.5,S=.5*te.y+.5,te.copy(a.vertexNormalsModel[o]).applyMatrix3(ie),H=.5*te.x+.5,w=.5*te.y+.5,te.copy(a.vertexNormalsModel[n]).applyMatrix3(ie),M=.5*te.x+.5,C=.5*te.y+.5,pe(u,m,v,y,x,R,g,S,H,w,M,C,s.envMap)):(I.copy(s.color),s.vertexColors===THREE.FaceColors&&I.multiply(a.color),!0===s.wireframe?se(I,s.wireframeLinewidth,s.wireframeLinecap,s.wireframeLinejoin):le(I))}else s.isMeshNormalMaterial?(te.copy(a.normalModel).applyMatrix3(ie),I.setRGB(te.x,te.y,te.z).multiplyScalar(.5).addScalar(.5)):I.setRGB(1,1,1),!0===s.wireframe?se(I,s.wireframeLinewidth,s.wireframeLinecap,s.wireframeLinejoin):le(I)}function se(e,r,t,i){he(r),ue(t),me(i),ve(e.getStyle()),W.stroke(),Y.expandByScalar(2*r)}function le(e){ye(e.getStyle()),W.fill()}function ce(e){if(0===e.version||e instanceof THREE.CompressedTexture||e instanceof THREE.DataTexture)return{canvas:void 0,version:e.version};var r=e.image;if(!1===r.complete)return{canvas:void 0,version:0};var t=e.wrapS===THREE.RepeatWrapping||e.wrapS===THREE.MirroredRepeatWrapping,i=e.wrapT===THREE.RepeatWrapping||e.wrapT===THREE.MirroredRepeatWrapping,o=e.wrapS===THREE.MirroredRepeatWrapping,n=e.wrapT===THREE.MirroredRepeatWrapping,a=document.createElement("canvas");a.width=r.width*(o?2:1),a.height=r.height*(n?2:1);var s=a.getContext("2d");s.setTransform(1,0,0,-1,0,r.height),s.drawImage(r,0,0),!0===o&&(s.setTransform(-1,0,0,-1,r.width,r.height),s.drawImage(r,-r.width,0)),!0===n&&(s.setTransform(1,0,0,1,0,0),s.drawImage(r,0,r.height)),!0===o&&!0===n&&(s.setTransform(-1,0,0,1,r.width,0),s.drawImage(r,-r.width,r.height));var l="no-repeat";!0===t&&!0===i?l="repeat":!0===t?l="repeat-x":!0===i&&(l="repeat-y");var c=W.createPattern(a,l);return e.onUpdate&&e.onUpdate(e),{canvas:c,version:e.version}}function pe(e,r,t,i,o,n,a,s,l,c,p,E,d){var f=K[d.id];if(void 0!==f&&f.version===d.version||(f=ce(d),K[d.id]=f),void 0===f.canvas)return ye("rgba( 0, 0, 0, 1)"),void W.fill();ye(f.canvas);var h,u,m,v,y,x,R,T,g=d.offset.x/d.repeat.x,S=d.offset.y/d.repeat.y,H=d.image.width*d.repeat.x,w=d.image.height*d.repeat.y;l=(l+g)*H,c=(c+S)*w,p=(p+g)*H,E=(E+S)*w,t-=e,i-=r,o-=e,n-=r,0!==(R=(l-=a=(a+g)*H)*(E-=s=(s+S)*w)-(p-=a)*(c-=s))&&(y=e-(h=(E*t-c*o)*(T=1/R))*a-(m=(l*o-p*t)*T)*s,x=r-(u=(E*i-c*n)*T)*a-(v=(l*n-p*i)*T)*s,W.save(),W.transform(h,u,m,v,y,x),W.fill(),W.restore())}function Ee(e,r,t){var i,o=r.x-e.x,n=r.y-e.y,a=o*o+n*n;0!==a&&(o*=i=t/Math.sqrt(a),n*=i,r.x+=o,r.y+=n,e.x-=o,e.y-=n)}function de(e){a!==e&&(W.globalAlpha=e,a=e)}function fe(e){N!==e&&(e===THREE.NormalBlending?W.globalCompositeOperation="source-over":e===THREE.AdditiveBlending?W.globalCompositeOperation="lighter":e===THREE.SubtractiveBlending?W.globalCompositeOperation="darker":e===THREE.MultiplyBlending&&(W.globalCompositeOperation="multiply"),N=e)}function he(e){F!==e&&(W.lineWidth=e,F=e)}function ue(e){D!==e&&(W.lineCap=e,D=e)}function me(e){G!==e&&(W.lineJoin=e,G=e)}function ve(e){k!==e&&(W.strokeStyle=e,k=e)}function ye(e){A!==e&&(W.fillStyle=e,A=e)}function xe(e){r.length!==e.length&&(W.setLineDash(e),r=e)}void 0===W.setLineDash&&(W.setLineDash=function(){}),this.domElement=i,this.autoClear=!0,this.sortObjects=!0,this.sortElements=!0,this.info={render:{vertices:0,faces:0}},this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.getPixelRatio=function(){return o},this.setPixelRatio=function(e){void 0!==e&&(o=e)},this.setSize=function(e,r,t){f=e*o,z=r*o,i.width=f,i.height=z,V=Math.floor(f/2),j=Math.floor(z/2),!1!==t&&(i.style.width=e+"px",i.style.height=r+"px"),Q.min.set(-V,-j),Q.max.set(V,j),X.min.set(-V,-j),X.max.set(V,j),a=1,N=0,G=D=F=A=k=null,this.setViewport(0,0,e,r)},this.setViewport=function(e,r,t,i){L=e*o,O=r*o,B=t*o,P=i*o},this.setScissor=function(){},this.setScissorTest=function(){},this.setClearColor=function(e,r){t.set(e),n=void 0!==r?r:1,X.min.set(-V,-j),X.max.set(V,j)},this.setClearColorHex=function(e,r){console.warn("THREE.CanvasRenderer: .setClearColorHex() is being removed. Use .setClearColor() instead."),this.setClearColor(e,r)},this.getClearColor=function(){return t},this.getClearAlpha=function(){return n},this.getMaxAnisotropy=function(){return 0},this.clear=function(){!1===X.isEmpty()&&(X.intersect(Q),X.expandByScalar(2),X.min.x=X.min.x+V,X.min.y=-X.min.y+j,X.max.x=X.max.x+V,X.max.y=-X.max.y+j,n<1&&W.clearRect(0|X.min.x,0|X.max.y,X.max.x-X.min.x|0,X.min.y-X.max.y|0),0<n&&(de(1),fe(THREE.NormalBlending),ye("rgba("+Math.floor(255*t.r)+","+Math.floor(255*t.g)+","+Math.floor(255*t.b)+","+n+")"),W.fillRect(0|X.min.x,0|X.max.y,X.max.x-X.min.x|0,X.min.y-X.max.y|0)),X.makeEmpty())},this.clearColor=function(){},this.clearDepth=function(){},this.clearStencil=function(){},this.render=function(e,r){if(void 0!==r.isCamera){var t=e.background;t&&t.isColor?(de(1),fe(THREE.NormalBlending),ye(t.getStyle()),W.fillRect(0,0,f,z)):!0===this.autoClear&&this.clear(),b.info.render.vertices=0,b.info.render.faces=0,W.setTransform(B/f,0,0,-P/z,L,z-O),W.translate(V,j),s=d.projectScene(e,r,this.sortObjects,this.sortElements),l=s.elements,h=s.lights,ie.getNormalMatrix(r.matrixWorldInverse),function(){Z.setRGB(0,0,0),$.setRGB(0,0,0),_.setRGB(0,0,0);for(var e=0,r=h.length;e<r;e++){var t=h[e],i=t.color;t.isAmbientLight?Z.add(i):t.isDirectionalLight?$.add(i):t.isPointLight&&_.add(i)}}();for(var i=0,o=l.length;i<o;i++){var n=l[i],a=n.material;if(void 0!==a&&0!==a.opacity){if(Y.makeEmpty(),n instanceof THREE.RenderableSprite)(c=n).x*=V,c.y*=j,oe(c,n,a);else if(n instanceof THREE.RenderableLine)c=n.v1,p=n.v2,c.positionScreen.x*=V,c.positionScreen.y*=j,p.positionScreen.x*=V,p.positionScreen.y*=j,Y.setFromPoints([c.positionScreen,p.positionScreen]),!0===Q.intersectsBox(Y)&&ne(c,p,n,a);else if(n instanceof THREE.RenderableFace){if(c=n.v1,p=n.v2,E=n.v3,c.positionScreen.z<-1||1<c.positionScreen.z)continue;if(p.positionScreen.z<-1||1<p.positionScreen.z)continue;if(E.positionScreen.z<-1||1<E.positionScreen.z)continue;c.positionScreen.x*=V,c.positionScreen.y*=j,p.positionScreen.x*=V,p.positionScreen.y*=j,E.positionScreen.x*=V,E.positionScreen.y*=j,0<a.overdraw&&(Ee(c.positionScreen,p.positionScreen,a.overdraw),Ee(p.positionScreen,E.positionScreen,a.overdraw),Ee(E.positionScreen,c.positionScreen,a.overdraw)),Y.setFromPoints([c.positionScreen,p.positionScreen,E.positionScreen]),!0===Q.intersectsBox(Y)&&ae(c,p,E,0,1,2,n,a)}X.union(Y)}}W.setTransform(1,0,0,1,0,0)}else console.error("THREE.CanvasRenderer.render: camera is not an instance of THREE.Camera.")}},THREE.RenderableObject=function(){this.id=0,this.object=null,this.z=0,this.renderOrder=0},THREE.RenderableFace=function(){this.id=0,this.v1=new THREE.RenderableVertex,this.v2=new THREE.RenderableVertex,this.v3=new THREE.RenderableVertex,this.normalModel=new THREE.Vector3,this.vertexNormalsModel=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3],this.vertexNormalsLength=0,this.color=new THREE.Color,this.material=null,this.uvs=[new THREE.Vector2,new THREE.Vector2,new THREE.Vector2],this.z=0,this.renderOrder=0},THREE.RenderableVertex=function(){this.position=new THREE.Vector3,this.positionWorld=new THREE.Vector3,this.positionScreen=new THREE.Vector4,this.visible=!0},THREE.RenderableVertex.prototype.copy=function(e){this.positionWorld.copy(e.positionWorld),this.positionScreen.copy(e.positionScreen)},THREE.RenderableLine=function(){this.id=0,this.v1=new THREE.RenderableVertex,this.v2=new THREE.RenderableVertex,this.vertexColors=[new THREE.Color,new THREE.Color],this.material=null,this.z=0,this.renderOrder=0},THREE.RenderableSprite=function(){this.id=0,this.object=null,this.x=0,this.y=0,this.z=0,this.rotation=0,this.scale=new THREE.Vector2,this.material=null,this.renderOrder=0},THREE.Projector=function(){var r,X,n,Y,Z,$,_,ee,o,re,te,t=[],i=0,ie=[],a=0,s=[],l=0,c=[],p=0,E=[],d=0,oe={objects:[],lights:[],elements:[]},ne=new THREE.Vector3,ae=new THREE.Vector4,u=new THREE.Box3(new THREE.Vector3(-1,-1,-1),new THREE.Vector3(1,1,1)),m=new THREE.Box3,v=new Array(3),se=new THREE.Matrix4,le=new THREE.Matrix4,ce=new THREE.Matrix4,pe=new THREE.Matrix3,Ee=new THREE.Frustum,de=new THREE.Vector4,fe=new THREE.Vector4;this.projectVector=function(e,r){console.warn("THREE.Projector: .projectVector() is now vector.project()."),e.project(r)},this.unprojectVector=function(e,r){console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."),e.unproject(r)},this.pickingRay=function(){console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")};var he=new function(){var l=[],o=[],c=[],p=null,E=null,d=new THREE.Matrix3;function i(e){var r=e.position,t=e.positionWorld,i=e.positionScreen;t.copy(r).applyMatrix4(te),i.copy(t).applyMatrix4(le);var o=1/i.w;i.x*=o,i.y*=o,i.z*=o,e.visible=-1<=i.x&&i.x<=1&&-1<=i.y&&i.y<=1&&-1<=i.z&&i.z<=1}function f(e,r,t){return!0===e.visible||!0===r.visible||!0===t.visible||(v[0]=e.positionScreen,v[1]=r.positionScreen,v[2]=t.positionScreen,u.intersectsBox(m.setFromPoints(v)))}function h(e,r,t){return(t.positionScreen.x-e.positionScreen.x)*(r.positionScreen.y-e.positionScreen.y)-(t.positionScreen.y-e.positionScreen.y)*(r.positionScreen.x-e.positionScreen.x)<0}return{setObject:function(e){E=(p=e).material,d.getNormalMatrix(p.matrixWorld),l.length=0,o.length=0,c.length=0},projectVertex:i,checkTriangleVisibility:f,checkBackfaceCulling:h,pushVertex:function(e,r,t){(n=ve()).position.set(e,r,t),i(n)},pushNormal:function(e,r,t){l.push(e,r,t)},pushColor:function(e,r,t){o.push(e,r,t)},pushUv:function(e,r){c.push(e,r)},pushLine:function(e,r){var t=ie[e],i=ie[r];t.positionScreen.copy(t.position).applyMatrix4(ce),i.positionScreen.copy(i.position).applyMatrix4(ce),!0===Te(t.positionScreen,i.positionScreen)&&(t.positionScreen.multiplyScalar(1/t.positionScreen.w),i.positionScreen.multiplyScalar(1/i.positionScreen.w),(_=xe()).id=p.id,_.v1.copy(t),_.v2.copy(i),_.z=Math.max(t.positionScreen.z,i.positionScreen.z),_.renderOrder=p.renderOrder,_.material=p.material,p.material.vertexColors===THREE.VertexColors&&(_.vertexColors[0].fromArray(o,3*e),_.vertexColors[1].fromArray(o,3*r)),oe.elements.push(_))},pushTriangle:function(e,r,t){var i=ie[e],o=ie[r],n=ie[t];if(!1!==f(i,o,n)&&(E.side===THREE.DoubleSide||!0===h(i,o,n))){(Z=ye()).id=p.id,Z.v1.copy(i),Z.v2.copy(o),Z.v3.copy(n),Z.z=(i.positionScreen.z+o.positionScreen.z+n.positionScreen.z)/3,Z.renderOrder=p.renderOrder,Z.normalModel.fromArray(l,3*e),Z.normalModel.applyMatrix3(d).normalize();for(var a=0;a<3;a++){var s=Z.vertexNormalsModel[a];s.fromArray(l,3*arguments[a]),s.applyMatrix3(d).normalize(),Z.uvs[a].fromArray(c,2*arguments[a])}Z.vertexNormalsLength=3,Z.material=p.material,oe.elements.push(Z)}}}};function ue(e){(r=function(){if(X!==i)return t[X++];var e=new THREE.RenderableObject;return t.push(e),i++,X++,e}()).id=e.id,r.object=e,ne.setFromMatrixPosition(e.matrixWorld),ne.applyMatrix4(le),r.z=ne.z,r.renderOrder=e.renderOrder,oe.objects.push(r)}function me(e,r,t){var i=1/e.w;e.z*=i,-1<=e.z&&e.z<=1&&((o=function(){if(re!==d)return E[re++];var e=new THREE.RenderableSprite;return E.push(e),d++,re++,e}()).id=r.id,o.x=e.x*i,o.y=e.y*i,o.z=e.z,o.renderOrder=r.renderOrder,o.object=r,o.rotation=r.rotation,o.scale.x=r.scale.x*Math.abs(o.x-(e.x+t.projectionMatrix.elements[0])/(e.w+t.projectionMatrix.elements[12])),o.scale.y=r.scale.y*Math.abs(o.y-(e.y+t.projectionMatrix.elements[5])/(e.w+t.projectionMatrix.elements[13])),o.material=r.material,oe.elements.push(o))}function ve(){if(Y!==a)return ie[Y++];var e=new THREE.RenderableVertex;return ie.push(e),a++,Y++,e}function ye(){if($!==l)return s[$++];var e=new THREE.RenderableFace;return s.push(e),l++,$++,e}function xe(){if(ee!==p)return c[ee++];var e=new THREE.RenderableLine;return c.push(e),p++,ee++,e}function Re(e,r){return e.renderOrder!==r.renderOrder?e.renderOrder-r.renderOrder:e.z!==r.z?r.z-e.z:e.id!==r.id?e.id-r.id:0}function Te(e,r){var t=0,i=1,o=e.z+e.w,n=r.z+r.w,a=-e.z+e.w,s=-r.z+r.w;return 0<=o&&0<=n&&0<=a&&0<=s||!(o<0&&n<0||a<0&&s<0)&&(o<0?t=Math.max(t,o/(o-n)):n<0&&(i=Math.min(i,o/(o-n))),a<0?t=Math.max(t,a/(a-s)):s<0&&(i=Math.min(i,a/(a-s))),!(i<t)&&(e.lerp(r,t),r.lerp(e,1-i),!0))}this.projectScene=function(e,r,t,i){re=ee=$=0,!(oe.elements.length=0)===e.autoUpdate&&e.updateMatrixWorld(),null===r.parent&&r.updateMatrixWorld(),se.copy(r.matrixWorldInverse),le.multiplyMatrices(r.projectionMatrix,se),Ee.setFromMatrix(le),X=0,oe.objects.length=0,oe.lights.length=0,function e(r){if(!1!==r.visible){if(r instanceof THREE.Light)oe.lights.push(r);else if(r instanceof THREE.Mesh||r instanceof THREE.Line||r instanceof THREE.Points){if(!1===r.material.visible)return;if(!0===r.frustumCulled&&!1===Ee.intersectsObject(r))return;ue(r)}else if(r instanceof THREE.Sprite){if(!1===r.material.visible)return;if(!0===r.frustumCulled&&!1===Ee.intersectsSprite(r))return;ue(r)}for(var t=r.children,i=0,o=t.length;i<o;i++)e(t[i])}}(e),!0===t&&oe.objects.sort(Re);for(var o=oe.objects,n=0,a=o.length;n<a;n++){var s=o[n].object,l=s.geometry;if(he.setObject(s),te=s.matrixWorld,Y=0,s instanceof THREE.Mesh){if(l instanceof THREE.BufferGeometry){var c=l.attributes,p=l.groups;if(void 0===c.position)continue;for(var E=0,d=(Q=c.position.array).length;E<d;E+=3)he.pushVertex(Q[E],Q[E+1],Q[E+2]);if(void 0!==c.normal){var f=c.normal.array;for(E=0,d=f.length;E<d;E+=3)he.pushNormal(f[E],f[E+1],f[E+2])}if(void 0!==c.uv){var h=c.uv.array;for(E=0,d=h.length;E<d;E+=2)he.pushUv(h[E],h[E+1])}if(null!==l.index){var u=l.index.array;if(0<p.length)for(var m=0;m<p.length;m++){var v=p[m];for(E=v.start,d=v.start+v.count;E<d;E+=3)he.pushTriangle(u[E],u[E+1],u[E+2])}else for(E=0,d=u.length;E<d;E+=3)he.pushTriangle(u[E],u[E+1],u[E+2])}else for(E=0,d=Q.length/3;E<d;E+=3)he.pushTriangle(E,E+1,E+2)}else if(l instanceof THREE.Geometry){var y=l.vertices,x=l.faces,R=l.faceVertexUvs[0];pe.getNormalMatrix(te);for(var T=s.material,g=Array.isArray(T),S=0,H=y.length;S<H;S++){var w=y[S];if(ne.copy(w),!0===T.morphTargets)for(var M=l.morphTargets,C=s.morphTargetInfluences,b=0,z=M.length;b<z;b++){var V=C[b];if(0!==V){var j=M[b].vertices[S];ne.x+=(j.x-w.x)*V,ne.y+=(j.y-w.y)*V,ne.z+=(j.z-w.z)*V}}he.pushVertex(ne.x,ne.y,ne.z)}for(var L=0,O=x.length;L<O;L++){var B=x[L];if(void 0!==(T=!0===g?s.material[B.materialIndex]:s.material)){var P=T.side,W=ie[B.a],N=ie[B.b],k=ie[B.c];if(!1!==he.checkTriangleVisibility(W,N,k)){var A=he.checkBackfaceCulling(W,N,k);if(P!==THREE.DoubleSide){if(P===THREE.FrontSide&&!1===A)continue;if(P===THREE.BackSide&&!0===A)continue}(Z=ye()).id=s.id,Z.v1.copy(W),Z.v2.copy(N),Z.v3.copy(k),Z.normalModel.copy(B.normal),!1!==A||P!==THREE.BackSide&&P!==THREE.DoubleSide||Z.normalModel.negate(),Z.normalModel.applyMatrix3(pe).normalize();for(var F=B.vertexNormals,D=0,G=Math.min(F.length,3);D<G;D++){var I=Z.vertexNormalsModel[D];I.copy(F[D]),!1!==A||P!==THREE.BackSide&&P!==THREE.DoubleSide||I.negate(),I.applyMatrix3(pe).normalize()}Z.vertexNormalsLength=F.length;var U=R[L];if(void 0!==U)for(var q=0;q<3;q++)Z.uvs[q].copy(U[q]);Z.color=B.color,Z.material=T,Z.z=(W.positionScreen.z+N.positionScreen.z+k.positionScreen.z)/3,Z.renderOrder=s.renderOrder,oe.elements.push(Z)}}}}}else if(s instanceof THREE.Line){if(ce.multiplyMatrices(le,te),l instanceof THREE.BufferGeometry){if(void 0!==(c=l.attributes).position){for(E=0,d=(Q=c.position.array).length;E<d;E+=3)he.pushVertex(Q[E],Q[E+1],Q[E+2]);if(void 0!==c.color){var J=c.color.array;for(E=0,d=J.length;E<d;E+=3)he.pushColor(J[E],J[E+1],J[E+2])}if(null!==l.index)for(E=0,d=(u=l.index.array).length;E<d;E+=2)he.pushLine(u[E],u[E+1]);else{var K=s instanceof THREE.LineSegments?2:1;for(E=0,d=Q.length/3-1;E<d;E+=K)he.pushLine(E,E+1)}}}else if(l instanceof THREE.Geometry){if(0===(y=s.geometry.vertices).length)continue;(W=ve()).positionScreen.copy(y[0]).applyMatrix4(ce);for(K=s instanceof THREE.LineSegments?2:1,S=1,H=y.length;S<H;S++)(W=ve()).positionScreen.copy(y[S]).applyMatrix4(ce),0<(S+1)%K||(N=ie[Y-2],de.copy(W.positionScreen),fe.copy(N.positionScreen),!0===Te(de,fe)&&(de.multiplyScalar(1/de.w),fe.multiplyScalar(1/fe.w),(_=xe()).id=s.id,_.v1.positionScreen.copy(de),_.v2.positionScreen.copy(fe),_.z=Math.max(de.z,fe.z),_.renderOrder=s.renderOrder,_.material=s.material,s.material.vertexColors===THREE.VertexColors&&(_.vertexColors[0].copy(s.geometry.colors[S]),_.vertexColors[1].copy(s.geometry.colors[S-1])),oe.elements.push(_)))}}else if(s instanceof THREE.Points){if(ce.multiplyMatrices(le,te),l instanceof THREE.Geometry)for(S=0,H=(y=s.geometry.vertices).length;S<H;S++){w=y[S];ae.set(w.x,w.y,w.z,1),ae.applyMatrix4(ce),me(ae,s,r)}else if(l instanceof THREE.BufferGeometry){if(void 0!==(c=l.attributes).position){var Q;for(E=0,d=(Q=c.position.array).length;E<d;E+=3)ae.set(Q[E],Q[E+1],Q[E+2],1),ae.applyMatrix4(ce),me(ae,s,r)}}}else s instanceof THREE.Sprite&&(ae.set(te.elements[12],te.elements[13],te.elements[14],1),ae.applyMatrix4(le),me(ae,s,r))}return!0===i&&oe.elements.sort(Re),oe}};
//# sourceMappingURL=canvas-renderer-and-projector.js.map
