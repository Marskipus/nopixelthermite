(()=>{const e=document.querySelector("[data-win-menu]"),t=document.querySelector("[data-end-menu]"),n=console.log,c=document.querySelector("[data-start-button]"),d=document.querySelector("[data-grid-container]"),l=document.querySelector("[data-decrease-grid-size]"),r=document.querySelector("[data-decrease-grid-difficulty]"),o=document.querySelector("[data-increase-grid-difficulty]"),s=document.querySelector("[data-increase-grid-size]"),a=document.querySelector("[data-difficulty]");document.querySelector("[data-end-play-again]").addEventListener("click",(()=>{t.style.display="none"})),document.querySelector("[data-win-play-again]").addEventListener("click",(()=>{e.style.display="none"})),s.addEventListener("click",(()=>{q(50),d.textContent="",g(6)})),l.addEventListener("click",(()=>{q(-50),d.textContent="",g(6)})),r.addEventListener("click",(()=>{S(-1),L()})),o.addEventListener("click",(()=>{S(1),L()})),c.addEventListener("click",(function(){y=[],m=[],d.textContent="",g(6),function(e){for(let n=0;n<e;n++)m.push(u[(t=u.length,Math.floor(Math.random()*t))]),document.querySelector(`.${m[n]}`).classList.add("red"),v(1e3).then((()=>{document.querySelector(`.${m[n]}`).classList.remove("red"),document.querySelector(`.${m[n]}`).classList.add("selected"),u.splice(n,1)}));var t}(f),function(){let e=3;n(y);for(let n=0;n<y.length;n++){let c=document.querySelector(`.${y[n]}`);document.querySelector(`.${y[n]}`).addEventListener("click",(()=>{var n;c.classList.contains("selected")?((n=c).classList.add("selected1"),n.classList.remove("selected"),p()):c.classList.contains("selected1")||(e-=1,h(c),e<=0&&v(500).then((()=>{t.style.display="flex";for(let e=0;e<y.length;e++)document.querySelector(`.${y[e]}`).classList.contains("selected")&&document.querySelector(`.${y[e]}`).classList.add("red")})))}))}}()})),t.style.display="none";let i=300,u=[],y=[],m=[],f=5;function L(){return a.textContent=`Difficulty: ${f}`}function q(e){return i+=e}function S(e){return f+=e}function g(e){L();for(let n=0;n<e;n++){let c=document.createElement("div");c.className="row";for(let t=0;t<e;t++){let e=document.createElement("div");e.className=`box-${n}${t}`,e.classList.add("box"),u.push(`box-${n}${t}`),y.push(`box-${n}${t}`),c.appendChild(e)}document.getElementById("grid-container").appendChild(c);var t=document.getElementsByClassName("box");for(let n=0;n<t.length;n++)t[n].style.width=i/e+"px",t[n].style.height=i/e+"px"}return u}function h(e){e.classList.add("wrongchoice")}function p(){for(let e=0;e<y.length;e++)if(document.querySelector(`.${y[e]}`).classList.contains("selected"))return!1;e.style.display="flex"}function v(e){return new Promise((t=>setTimeout(t,e)))}g(6)})();