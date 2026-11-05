(()=>{'use strict';
const dialog=document.querySelector('#menu'),open=document.querySelector('.menu-button'),close=document.querySelector('.menu-close');
open?.addEventListener('click',()=>{dialog.showModal();open.setAttribute('aria-expanded','true');document.body.style.overflow='hidden'});
const closeMenu=()=>{dialog.close();open.setAttribute('aria-expanded','false');document.body.style.overflow='';open.focus()};close?.addEventListener('click',closeMenu);dialog?.addEventListener('cancel',()=>{open.setAttribute('aria-expanded','false');document.body.style.overflow=''});
if('IntersectionObserver'in window){document.documentElement.classList.add('js');const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}})},{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))}
const projects=document.querySelector('#projects');document.querySelectorAll('[data-view]').forEach(button=>button.addEventListener('click',()=>{projects.classList.toggle('list',button.dataset.view==='list');document.querySelectorAll('[data-view]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)))}));
const form=document.querySelector('#brief-form');form?.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const data=new FormData(form);const text=['PROJECT ENQUIRY — NAVJOTGRAPHICS','',`Name: ${data.get('name')}`,`Email: ${data.get('email')}`,`Company: ${data.get('company')||'—'}`,`Services: ${data.getAll('service').join(', ')||'To discuss'}`,'',String(data.get('idea'))].join('\n');const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='navjotgraphics-project-brief.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);document.querySelector('#form-status').textContent='Your project brief has been saved. Nothing has been sent.'});
})();
// Draw variable-radius ink dots from the original portfolio photography.
(()=>{const ink='#111111',paper='#fafafa';const render=el=>{const images=[...el.querySelectorAll('img')];if(!images.length)return;const width=Math.round(el.clientWidth),height=Math.round(el.clientHeight);if(!width||!height)return;let canvas=el.querySelector('canvas');if(!canvas){canvas=document.createElement('canvas');canvas.setAttribute('aria-hidden','true');el.append(canvas)}canvas.width=width;canvas.height=height;const sample=document.createElement('canvas');sample.width=width;sample.height=height;const ctx=sample.getContext('2d',{willReadFrequently:true});ctx.fillStyle=paper;ctx.fillRect(0,0,width,height);const bounds=el.getBoundingClientRect();images.forEach(img=>{if(!img.complete||!img.naturalWidth)return;const r=img.getBoundingClientRect(),x=r.left-bounds.left-el.clientLeft,y=r.top-bounds.top-el.clientTop,w=r.width,h=r.height,scale=Math.max(w/img.naturalWidth,h/img.naturalHeight),sw=w/scale,sh=h/scale;ctx.drawImage(img,(img.naturalWidth-sw)/2,(img.naturalHeight-sh)/2,sw,sh,x,y,w,h)});const pixels=ctx.getImageData(0,0,width,height).data,out=canvas.getContext('2d');out.fillStyle=paper;out.fillRect(0,0,width,height);out.fillStyle=ink;const step=width<500?3:4;for(let y=1;y<height;y+=step)for(let x=1;x<width;x+=step){const i=(y*width+x)*4,l=(pixels[i]*.2126+pixels[i+1]*.7152+pixels[i+2]*.0722)/255,dark=Math.max(0,Math.min(1,(1-l)*1.35));if(dark<.04)continue;out.beginPath();out.arc(x,y,step*.69*Math.sqrt(dark),0,Math.PI*2);out.fill()}};const elements=[...document.querySelectorAll('.halftone')];elements.forEach(el=>{el.querySelectorAll('img').forEach(img=>{if(!img.complete)img.addEventListener('load',()=>render(el),{once:true})});render(el)});let timer;window.addEventListener('resize',()=>{clearTimeout(timer);timer=setTimeout(()=>elements.forEach(render),180)});})();
(()=>{const video=document.querySelector('#hero-video'),button=document.querySelector('.hero-video-toggle');if(!video||!button)return;const motion=matchMedia('(prefers-reduced-motion:reduce)');video.muted=true;const update=()=>{button.textContent=video.paused?'Play animation':'Pause animation';button.setAttribute('aria-label',button.textContent)};video.addEventListener('play',update);video.addEventListener('pause',update);button.addEventListener('click',()=>{if(video.paused)video.play().catch(update);else video.pause()});const preference=()=>{if(motion.matches)video.pause();else{video.autoplay=true;video.play().catch(update)}};motion.addEventListener('change',preference);preference();update()})();

/* Draw decoded scroll frames onto one persistent surface to avoid image swaps. */
(()=>{
 const footer=document.querySelector('.footer-reference'),scene=footer?.querySelector('.footer-reference-scene'),poster=scene?.querySelector('img.footer-reference-image');
 if(!poster)return;
 const reduced=matchMedia('(prefers-reduced-motion:reduce)');
 const canvas=document.createElement('canvas');canvas.className='footer-reference-image footer-sequence-canvas';canvas.setAttribute('aria-hidden','true');canvas.style.visibility='hidden';scene.insertBefore(canvas,poster.nextSibling);
 const ctx=canvas.getContext('2d',{alpha:false});if(!ctx){canvas.remove();return;}
 let frames=[],generation=0,drawn=-1,queued=false,started=false,active=false,width=0,height=0;
 const size=()=>{const ratio=Math.min(devicePixelRatio||1,1.5),w=Math.round(scene.clientWidth*ratio),h=Math.round(scene.clientHeight*ratio);if(w!==width||h!==height){width=canvas.width=w;height=canvas.height=h;drawn=-1}};
 const draw=()=>{queued=false;if(reduced.matches||!started)return;size();const distance=footer.offsetHeight-scene.offsetHeight,progress=Math.max(0,Math.min(1,-footer.getBoundingClientRect().top/Math.max(1,distance))),wanted=Math.round(progress*45);
 // Hold the current image until the exact requested frame has decoded.
 const frame=frames[wanted];if(!frame||wanted===drawn||!width||!height)return;
 const scale=Math.max(width/frame.naturalWidth,height/frame.naturalHeight),sw=width/scale,sh=height/scale;
 ctx.drawImage(frame,(frame.naturalWidth-sw)/2,(frame.naturalHeight-sh)/2,sw,sh,0,0,width,height);
 drawn=wanted;canvas.dataset.frame=String(wanted+1);poster.dataset.frame=String(wanted+1);
 if(!active){canvas.style.visibility='visible';poster.style.visibility='hidden';active=true}
 };
 const schedule=()=>{if(!queued){queued=true;requestAnimationFrame(draw)}};
 const start=()=>{if(started||reduced.matches)return;started=true;footer.classList.add('footer-scroll-sequence');const current=++generation;frames=[];drawn=-1;let next=0;
 const base='https://cdn.madeinevolve.com/media/img/sequence/'+(innerWidth<=650?'mobile':'desktop')+'/frame-';
 const loadNext=()=>{if(current!==generation||next>=46)return;const i=next++,frame=new Image();frame.decoding='async';frame.onload=async()=>{try{await frame.decode()}catch{return loadNext()}if(current!==generation)return;frames[i]=frame;schedule();loadNext()};frame.onerror=loadNext;frame.src=base+String(i+1).padStart(3,'0')+'.webp'};
 for(let i=0;i<4;i++)loadNext();schedule()};
 // Reserve scroll distance before entering the footer, preventing a layout jump.
 if(!reduced.matches)footer.classList.add('footer-scroll-sequence');
 if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){start();observer.disconnect()}},{rootMargin:'1600px'});observer.observe(footer)}else start();
 addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule,{passive:true});
 reduced.addEventListener('change',()=>{if(reduced.matches){generation++;started=false;active=false;canvas.style.visibility='hidden';poster.style.visibility='';footer.classList.remove('footer-scroll-sequence')}else start()});
})();

// Keep footer link labels free of decorative arrows.
document.querySelectorAll('.footer-reference a').forEach(link=>{for(const node of link.childNodes){if(node.nodeType===Node.TEXT_NODE)node.textContent=node.textContent.replace(/[↗↑→]/g,'').trimEnd()}});
