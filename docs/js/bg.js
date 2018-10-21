"use strict";var container,camera,scene,renderer,particles,particle,canvasHeight=400,SEPARATION=100,AMOUNTX=80,AMOUNTY=40,particleColor="#3f3f3f",count=0,mouseX=0,mouseY=0;function getCanvasContainerWidth(){return document.querySelector(".canvas-container").clientWidth}(container=document.createElement("div")).classList.add("canvas-container"),container.classList.add("hidden"),setTimeout(function(){container.classList.remove("hidden")},1e3),document.body.appendChild(container);var windowHalfX=getCanvasContainerWidth()/2,windowHalfY=canvasHeight/2;function init(){(camera=new THREE.PerspectiveCamera(75,getCanvasContainerWidth()/canvasHeight,1,1e4)).position.z=1e4,scene=new THREE.Scene,particles=new Array;for(var n=2*Math.PI,e=new THREE.SpriteCanvasMaterial({color:particleColor,program:function(e){e.beginPath(),e.arc(0,0,.5,0,n,!0),e.fill()}}),a=0,i=0;i<AMOUNTX;i++)for(var t=0;t<AMOUNTY;t++)(particle=particles[a++]=new THREE.Sprite(e)).position.x=i*SEPARATION-AMOUNTX*SEPARATION/2,particle.position.z=t*SEPARATION-AMOUNTY*SEPARATION/2,scene.add(particle);(renderer=new THREE.CanvasRenderer).setPixelRatio(window.devicePixelRatio),renderer.setSize(getCanvasContainerWidth(),canvasHeight),container.appendChild(renderer.domElement),window.addEventListener("resize",onWindowResize,!1)}function onWindowResize(){var e=getCanvasContainerWidth();windowHalfX=e/2,windowHalfY=canvasHeight/2,camera.aspect=e/canvasHeight,camera.updateProjectionMatrix(),renderer.setSize(e,canvasHeight)}function animate(){requestAnimationFrame(animate),render()}function render(){camera.position.set(0,355,122);for(var e=0,n=0;n<AMOUNTX;n++)for(var a=0;a<AMOUNTY;a++)(particle=particles[e++]).position.y=50*Math.sin(.3*(n+count))+50*Math.sin(.5*(a+count)),particle.scale.x=particle.scale.y=4*(Math.sin(.3*(n+count))+1)+4*(Math.sin(.5*(a+count))+1);renderer.render(scene,camera),count+=.1}init(),animate();
//# sourceMappingURL=bg.js.map
