let e,t,n=!1;const l="undefined"!=typeof window?window:{},s=l.document||{head:{}},o={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},i=e=>Promise.resolve(e),c=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),r=new WeakMap,u=e=>"sc-"+e.o,a={},f=e=>"object"==(e=typeof e)||"function"===e,$=(e,t,...n)=>{let l=null,s=!1,o=!1,i=[];const c=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!f(l))&&(l+=""),s&&o?i[i.length-1].i+=l:i.push(s?d(null,l):l),o=s)};if(c(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}const r=d(e,null);return r.u=t,i.length>0&&(r.$=i),r},d=(e,t)=>({t:0,h:e,i:t,p:null,$:null,u:null}),h={},p=(e,t,n,s,i,c)=>{if(n!==s){let r=V(e,t),u=t.toLowerCase();if("class"===t){const t=e.classList,l=m(n),o=m(s);t.remove(...l.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!l.includes(e))))}else if(r||"o"!==t[0]||"n"!==t[1]){const l=f(s);if((r||l&&null!==s)&&!i)try{if(e.tagName.includes("-"))e[t]=s;else{let l=null==s?"":s;"list"===t?r=!1:null!=n&&e[t]==l||(e[t]=l)}}catch(e){}null==s||!1===s?!1===s&&""!==e.getAttribute(t)||e.removeAttribute(t):(!r||4&c||i)&&!l&&e.setAttribute(t,s=!0===s?"":s)}else t="-"===t[2]?t.slice(3):V(l,u)?u.slice(2):u[2]+t.slice(3),n&&o.rel(e,t,n,!1),s&&o.ael(e,t,s,!1)}},y=/\s/,m=e=>e?e.split(y):[],b=(e,t,n,l)=>{const s=11===t.p.nodeType&&t.p.host?t.p.host:t.p,o=e&&e.u||a,i=t.u||a;for(l in o)l in i||p(s,l,o[l],void 0,n,t.t);for(l in i)p(s,l,o[l],i[l],n,t.t)},w=(t,n,l)=>{let o,i,c=n.$[l],r=0;if(null!==c.i)o=c.p=s.createTextNode(c.i);else if(o=c.p=s.createElement(c.h),b(null,c,!1),null!=e&&o["s-si"]!==e&&o.classList.add(o["s-si"]=e),c.$)for(r=0;r<c.$.length;++r)i=w(t,c,r),i&&o.appendChild(i);return o},S=(e,n,l,s,o,i)=>{let c,r=e;for(r.shadowRoot&&r.tagName===t&&(r=r.shadowRoot);o<=i;++o)s[o]&&(c=w(null,l,o),c&&(s[o].p=c,r.insertBefore(c,n)))},g=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l.p.remove()},j=(e,t)=>e.h===t.h,v=(e,t)=>{const n=t.p=e.p,l=e.$,s=t.$,o=t.i;null===o?(b(e,t,!1),null!==l&&null!==s?((e,t,n,l)=>{let s,o=0,i=0,c=t.length-1,r=t[0],u=t[c],a=l.length-1,f=l[0],$=l[a];for(;o<=c&&i<=a;)null==r?r=t[++o]:null==u?u=t[--c]:null==f?f=l[++i]:null==$?$=l[--a]:j(r,f)?(v(r,f),r=t[++o],f=l[++i]):j(u,$)?(v(u,$),u=t[--c],$=l[--a]):j(r,$)?(v(r,$),e.insertBefore(r.p,u.p.nextSibling),r=t[++o],$=l[--a]):j(u,f)?(v(u,f),e.insertBefore(u.p,r.p),u=t[--c],f=l[++i]):(s=w(t&&t[i],n,i),f=l[++i],s&&r.p.parentNode.insertBefore(s,r.p));o>c?S(e,null==l[a+1]?null:l[a+1].p,n,l,i,a):i>a&&g(t,o,c)})(n,l,t,s):null!==s?(null!==e.i&&(n.textContent=""),S(n,null,t,s,0,s.length-1)):null!==l&&g(l,0,l.length-1)):e.i!==o&&(n.data=o)},M=(e,t,n)=>{const l=(e=>F(e).m)(e);return{emit:e=>k(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},k=(e,t,n)=>{const l=o.ce(t,n);return e.dispatchEvent(l),l},C=(e,t)=>{t&&!e.S&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.S=t)))},O=(e,t)=>{if(e.t|=16,!(4&e.t))return C(e,e.g),Y((()=>P(e,t)));e.t|=512},P=(e,t)=>{const n=e.j;return L(void 0,(()=>x(e,n,t)))},x=async(e,t,n)=>{const l=e.m,o=l["s-rc"];n&&(e=>{const t=e.v,n=e.m,l=t.t,o=((e,t)=>{let n=u(t),l=D.get(n);if(e=11===e.nodeType?e:s,l)if("string"==typeof l){let t,o=r.get(e=e.head||e);o||r.set(e,o=new Set),o.has(n)||(t=s.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(e);E(e,t),o&&(o.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>T(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},E=(n,l)=>{try{l=l.render(),n.t&=-17,n.t|=2,((n,l)=>{const s=n.m,o=n.M||d(null,null),i=(e=>e&&e.h===h)(l)?l:$(null,null,l);t=s.tagName,i.h=null,i.t|=4,n.M=i,i.p=o.p=s.shadowRoot||s,e=s["s-sc"],v(o,i)})(n,l)}catch(e){_(e,n.m)}return null},T=e=>{const t=e.m,n=e.g;64&e.t||(e.t|=64,R(t),e.k(t),n||A()),e.S&&(e.S(),e.S=void 0),512&e.t&&X((()=>O(e,!1))),e.t&=-517},A=()=>{R(s.documentElement),X((()=>k(l,"appload",{detail:{namespace:"ui-components"}})))},L=(e,t)=>e&&e.then?e.then(t):t(),R=e=>e.classList.add("hydrated"),U=(e,t,n)=>{if(t.C){const l=Object.entries(t.C),s=e.prototype;if(l.map((([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(s,e,{get(){return((e,t)=>F(this).O.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=F(e),o=s.O.get(t),i=s.t,c=s.j;n=((e,t)=>null==e||f(e)?e:1&t?e+"":e)(n,l.C[t][0]),8&i&&void 0!==o||n===o||(s.O.set(t,n),c&&2==(18&i)&&O(s,!1))})(this,e,n,t)},configurable:!0,enumerable:!0})})),1&n){const t=new Map;s.attributeChangedCallback=function(e,n,l){o.jmp((()=>{const n=t.get(e);if(this.hasOwnProperty(n))l=this[n],delete this[n];else if(s.hasOwnProperty(n)&&"number"==typeof this[n]&&this[n]==l)return;this[n]=(null!==l||"boolean"!=typeof this[n])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,n])=>{const l=n[1]||e;return t.set(l,e),l}))}}return e},W=(e,t={})=>{const n=[],i=t.exclude||[],r=l.customElements,a=s.head,f=a.querySelector("meta[charset]"),$=s.createElement("style"),d=[];let h,p=!0;Object.assign(o,t),o.l=new URL(t.resourcesUrl||"./",s.baseURI).href,e.map((e=>{e[1].map((t=>{const l={t:t[0],o:t[1],C:t[2],P:t[3]};l.C=t[2];const s=l.o,a=class extends HTMLElement{constructor(e){super(e),N(e=this,l),1&l.t&&e.attachShadow({mode:"open"})}connectedCallback(){h&&(clearTimeout(h),h=null),p?d.push(this):o.jmp((()=>(e=>{if(0==(1&o.t)){const t=F(e),n=t.v,l=()=>{};if(!(1&t.t)){t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){C(t,t.g=n);break}}n.C&&Object.entries(n.C).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=B(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(U(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){_(e)}t.t&=-9,e()}if(s.style){let e=s.style;const t=u(n);if(!D.has(t)){const l=()=>{};((e,t,n)=>{let l=D.get(e);c&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,D.set(e,l)})(t,e,!!(1&n.t)),l()}}}const o=t.g,i=()=>O(t,!0);o&&o["s-rc"]?o["s-rc"].push(i):i()})(0,t,n)}l()}})(this)))}disconnectedCallback(){o.jmp((()=>{}))}componentOnReady(){return F(this).T}};l.A=e[0],i.includes(s)||r.get(s)||(n.push(s),r.define(s,U(a,l,1)))}))})),$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),a.insertBefore($,f?f.nextSibling:a.firstChild),p=!1,d.length?d.map((e=>e.connectedCallback())):o.jmp((()=>h=setTimeout(A,30)))},q=new WeakMap,F=e=>q.get(e),H=(e,t)=>q.set(t.j=e,t),N=(e,t)=>{const n={t:0,m:e,v:t,O:new Map};return n.T=new Promise((e=>n.k=e)),e["s-p"]=[],e["s-rc"]=[],q.set(e,n)},V=(e,t)=>t in e,_=(e,t)=>(0,console.error)(e,t),z=new Map,B=e=>{const t=e.o.replace(/-/g,"_"),n=e.A,l=z.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(z.set(n,e),e[t])),_)},D=new Map,G=[],I=[],J=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&o.t?X(Q):o.raf(Q))},K=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){_(e)}e.length=0},Q=()=>{K(G),K(I),(n=G.length>0)&&o.raf(Q)},X=e=>i().then(e),Y=J(I,!0);export{W as b,M as c,$ as h,i as p,H as r}