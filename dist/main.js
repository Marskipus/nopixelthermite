(()=>{const e=document.querySelector("[data-win-menu]"),t=document.querySelector("[data-end-menu]"),n=console.log,c=document.querySelector("[data-start-button]"),d=document.querySelector("[data-grid-container]"),l=document.querySelector("[data-decrease-grid-size]"),r=document.querySelector("[data-decrease-grid-difficulty]"),o=document.querySelector("[data-increase-grid-difficulty]"),a=document.querySelector("[data-increase-grid-size]"),i=document.querySelector("[data-difficulty]"),s=document.querySelector("[data-update-time]"),u=document.querySelector("[data-time]");document.querySelector("[data-end-play-again]").addEventListener("click",(()=>{t.style.display="none"})),document.querySelector("[data-win-play-again]").addEventListener("click",(()=>{e.style.display="none"})),a.addEventListener("click",(()=>{g(50),d.textContent="",$(6)})),l.addEventListener("click",(()=>{g(-50),d.textContent="",$(6)})),r.addEventListener("click",(()=>{h(-1),v()})),o.addEventListener("click",(()=>{h(1),v()})),c.addEventListener("click",(function(){f=[],q=[],d.textContent="",$(6),function(e,t){for(let c=0;c<e;c++)q.push(y[(n=y.length,Math.floor(Math.random()*n))]),document.querySelector(`.${q[c]}`).classList.add("red"),k(t).then((()=>{document.querySelector(`.${q[c]}`).classList.remove("red"),document.querySelector(`.${q[c]}`).classList.add("selected"),y.splice(c,1)}));var n}(S,p),function(){let e=3;n(f);for(let n=0;n<f.length;n++){let c=document.querySelector(`.${f[n]}`);document.querySelector(`.${f[n]}`).addEventListener("click",(()=>{var n;c.classList.contains("selected")?((n=c).classList.add("selected1"),n.classList.remove("selected"),E()):c.classList.contains("selected1")||(e-=1,x(c),e<=0&&k(500).then((()=>{t.style.display="flex";for(let e=0;e<f.length;e++)document.querySelector(`.${f[e]}`).classList.contains("selected")&&document.querySelector(`.${f[e]}`).classList.add("red")})))}))}}(),L()})),t.style.display="none",s.addEventListener("click",(e=>{e.preventDefault(),p=document.querySelector("[data-time-input]").value,L(),document.querySelector("[data-time-input]").value=""}));let m=300,y=[],f=[],q=[],S=5,p=1e3;function L(){u.textContent=`Time: ${p}ms`}function v(){return i.textContent=`Difficulty: ${S}`}function g(e){return m+=e}function h(e){return S+=e}function $(e){v();for(let n=0;n<e;n++){let c=document.createElement("div");c.className="row";for(let t=0;t<e;t++){let e=document.createElement("div");e.className=`box-${n}${t}`,e.classList.add("box"),y.push(`box-${n}${t}`),f.push(`box-${n}${t}`),c.appendChild(e)}document.getElementById("grid-container").appendChild(c);var t=document.getElementsByClassName("box");for(let n=0;n<t.length;n++)t[n].style.width=m/e+"px",t[n].style.height=m/e+"px"}return y}function x(e){e.classList.add("wrongchoice")}function E(){for(let e=0;e<f.length;e++)if(document.querySelector(`.${f[e]}`).classList.contains("selected"))return!1;e.style.display="flex"}function k(e){return new Promise((t=>setTimeout(t,e)))}$(6),L()})();