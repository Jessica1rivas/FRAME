const I={"valla": "imagenes/valla.webp", "m1": "imagenes/m1.webp", "m2": "imagenes/m2.webp", "m3": "imagenes/m3.webp", "m4": "imagenes/m4.webp", "m5": "imagenes/m5.webp", "m6": "imagenes/m6.webp", "m7": "imagenes/m7.webp", "logoW": "imagenes/logoW.webp", "logoD": "imagenes/logoD.webp", "g0": "imagenes/g0.webp", "g1": "imagenes/g1.webp", "g2": "imagenes/g2.webp", "g3": "imagenes/g3.webp", "g4": "imagenes/g4.webp", "g5": "imagenes/g5.webp", "g6": "imagenes/g6.webp", "g7": "imagenes/g7.webp", "g8": "imagenes/g8.webp", "g9": "imagenes/g9.webp", "g10": "imagenes/g10.webp", "g11": "imagenes/g11.webp", "g12": "imagenes/g12.webp", "g13": "imagenes/g13.webp", "g14": "imagenes/g14.webp", "g15": "imagenes/g15.webp", "g16": "imagenes/g16.webp", "g17": "imagenes/g17.webp", "g18": "imagenes/g18.webp", "g19": "imagenes/g19.webp", "g20": "imagenes/g20.webp", "g21": "imagenes/g21.webp", "g22": "imagenes/g22.webp", "g23": "imagenes/g23.webp", "g24": "imagenes/g24.webp", "g25": "imagenes/g25.webp", "g26": "imagenes/g26.webp", "g27": "imagenes/g27.webp", "g28": "imagenes/g28.webp", "g29": "imagenes/g29.webp", "g30": "imagenes/g30.webp", "g31": "imagenes/g31.webp", "v0": "imagenes/v0.webp", "v1": "imagenes/v1.webp", "v2": "imagenes/v2.webp", "v3": "imagenes/v3.webp", "v4": "imagenes/v4.webp", "v5": "imagenes/v5.webp", "v6": "imagenes/v6.webp", "v7": "imagenes/v7.webp", "v8": "imagenes/v8.webp", "v9": "imagenes/v9.webp", "s0": "imagenes/s0.webp", "s1": "imagenes/s1.webp", "s2": "imagenes/s2.webp", "s3": "imagenes/s3.webp", "ill": "imagenes/ill.webp", "ani": "imagenes/ani.webp", "aud": "imagenes/aud.webp", "qr": "imagenes/qr.webp"};
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const el=(h)=>{const d=document.createElement('div');d.innerHTML=h.trim();return d.firstChild};
const img=()=>$$('[data-i]').forEach(e=>{if(!e.src||e.dataset.d!=1){e.src=I[e.dataset.i];e.dataset.d=1}});
/* nav */
const S=[['inicio','Inicio'],['ficha','Producto'],['valla','Valla'],['mercado','Mercado'],['ideas','Ideas'],['encuesta','Encuesta'],['marca','Marca'],['diseno','Diseño'],['sistema','Sistema'],['carreras','Carreras'],['cierre','Cierre']];
$('#links').innerHTML=S.map(s=>`<a href="#${s[0]}">${s[1]}</a>`).join('');
$('#th').onclick=()=>{const r=document.documentElement,l=(r.dataset.theme||(matchMedia('(prefers-color-scheme:light)').matches?'light':'dark'))=='light';r.dataset.theme=l?'dark':'light';$('#th').textContent=l?'☾':'☀'};
/* hero */
const cols=['#22d3ee','#3b82f6','#8b5cf6','#d946ef','#fb6f5c'];
$('#stage').innerHTML=cols.map((c,i)=>`<div class="fr" style="color:${c};border-color:${c};width:${28+i*14}%;height:${34+i*13}%;--s:1;--x:${i*22-30}px;animation-delay:${i*.35}s"></div>`).join('');
$('#stage').onmousemove=e=>{const r=e.currentTarget.getBoundingClientRect();e.currentTarget.style.transform=`rotateY(${(e.clientX-r.left)/r.width*16-8}deg) rotateX(${-((e.clientY-r.top)/r.height*12-6)}deg)`};
$('#tk').innerHTML=('<span>IMAGINA<b>◆</b>CREA<b>◆</b>TRASCIENDE<b>◆</b>TU CREATIVIDAD NO TIENE LÍMITES<b>◆</b></span>').repeat(8);
/* ficha */
const F=[['Producto','<b>Instituto FRAME</b> (Instituto Superior Tecnológico FRAME). Tipo: <b>valla publicitaria</b>.'],
['Necesidad','Visibilizar la oferta educativa en industrias creativas captando la atención masiva en la vía pública.<br>'+['Diseño UX/UI','Producción Audiovisual','Animación 2D/3D','Ilustración Digital'].map(x=>`<span class="pill">${x}</span>`).join('')],
['Público','Jóvenes de unos 18 años que terminaron la secundaria.'],
['Objetivo','Informar y cautivar a los egresados con una pieza moderna e interactiva, motivando su asistencia a la feria de carreras.'],
['Mensaje','<h3 class="gt" style="font-size:3rem">Imagina · Crea · Trasciende</h3>Título de la valla: «Tu creatividad no tiene límites».'],
['Visual','<span class="sw" style="background:#fff"></span><span class="sw" style="background:#0b0e16"></span> Blanco y negro, lo elegante. Tipografía <b>Bahnschrift</b>.<br>Marcos rectangulares en perspectiva isométrica, de menor a mayor, que simulan profundidad y capas de software.'],
['Innovación','<b>Código QR gigante</b> que convierte la valla en un punto interactivo, más elementos troquelados en 3D.'],
['Beneficio','Conocer rápido y de forma atractiva las carreras de alta demanda laboral, resolviendo dudas sobre el futuro profesional en un solo vistazo.'],
['Formato','Gigantografía para valla en carretera o vía principal (ej. 8 m × 4 m), en vías de alto tráfico vehicular y peatonal. Entrega en CMYK / vectorial.']];
$('#fl').innerHTML=F.map((f,i)=>`<button class="chip" data-k="${i}">${i+1}. ${f[0]}</button>`).join('');
const fs=k=>{$$('#fl .chip').forEach((c,i)=>c.classList.toggle('on',i==k));const p=$('#fp');p.style.opacity=0;setTimeout(()=>{p.innerHTML=`<h3>${F[k][0]}</h3><div>${F[k][1]}</div>`;p.style.opacity=1},180)};
$('#fp').style.transition='opacity .25s';$('#fl').onclick=e=>e.target.dataset.k&&fs(+e.target.dataset.k);fs(0);
$('#dg').innerHTML=[['Institución','SENATI / Río Negro'],['Carrera','Diseño Gráfico Digital'],['Módulo','Seminario'],['Tiempo','4 horas']].map(x=>`<div><small>${x[0]}</small>${x[1]}</div>`).join('');
/* hotspots */
const H=[[13,13,'Isologo FRAME','Marcos que crecen de menor a mayor: perspectiva, capas de software y profundidad.'],[19,33,'«Tu creatividad no tiene límites»','Mensaje corto en sans-serif de peso grueso, blanco sobre fondo oscuro: se lee en menos de 3 segundos.'],[19,47,'Eslogan','Imagina · Crea · Trasciende, el mensaje institucional.'],[40,22,'Marcos isométricos','Serie de marcos con degradé de cian a coral que dan profundidad y llevan la mirada hacia el QR.'],[52,55,'Ventanas de carreras','Producción audiovisual e ilustración digital dentro de los marcos: renders y gráficos limpios en lugar de stock genérico.'],[80,45,'La feria','Una joven en un entorno de feria: invita a imaginarse en el evento.'],[14,84,'Diseño UX/UI','Una carrera mostrada en acción: un diseñador trabajando en su interfaz.'],[92,78,'Llamado a la acción + QR','«Descubre tu camino creativo». QR gigante: el puente directo al portal digital de la feria.']];
$('#hsx').outerHTML=H.map((h,i)=>`<button class="hs" style="left:${h[0]}%;top:${h[1]}%" data-h="${i}">${i+1}</button>`).join('');
$('.vb').onclick=e=>{const k=e.target.dataset.h;if(k==null)return;$$('.hs').forEach(b=>b.classList.toggle('on',b.dataset.h==k));$('#hi').innerHTML=`<h3>${+k+1}. ${H[k][2]}</h3><p>${H[k][3]}</p>`};
/* simulador */
const L=[['Mensaje principal',85],['Isologo',70],['Eslogan',50],['QR escaneable',32]];
$('#lg').innerHTML=L.map(l=>`<span>${l[0]}</span>`).join('');
const sim=()=>{const d=+$('#sr').value;$('#sm').style.transform=`scale(${Math.max(.28,1.25-d/85)})`;$('#sm').style.filter=`blur(${Math.max(0,(d-28)/16)}px)`;$$('#lg span').forEach((s,i)=>s.classList.toggle('ok',d<=L[i][1]))};
$('#sr').oninput=sim;sim();
/* QR demo */
const LC=[['Diseño UX/UI','Interfaces, web y apps.'],['Producción Audiovisual','Video y contenido.'],['Animación 2D/3D','Personajes y mundos.'],['Ilustración Digital','Arte conceptual.']];
$('#lc').innerHTML=LC.map(l=>`<button class="lc"><b>${l[0]}</b><small>${l[1]}</small></button>`).join('');
$('#lc').onclick=e=>{const b=e.target.closest('.lc');if(b){$$('.lc').forEach(x=>x.classList.toggle('on',x==b&&!b.classList.contains('on')))}};
const toast=t=>{const e=$('#ts');e.textContent=t;e.classList.add('on');setTimeout(()=>e.classList.remove('on'),2600)};
$('#sb').onclick=()=>{$('#s1').classList.remove('hide');$('#s2').classList.add('hide');$('#qb').classList.add('go');$('#st').textContent='Escaneando…';setTimeout(()=>{$('#st').textContent='¡Código detectado!'},1500);setTimeout(()=>{$('#s1').classList.add('hide');$('#s2').classList.remove('hide');$('#qb').classList.remove('go');$('#sb').textContent='Repetir escaneo'},2400)};
/* mercado */
$('#rf').innerHTML=[['Instituto / Academia de Diseño Local','Redes sociales (Facebook / Instagram)','Buena interacción con el público juvenil y publicaciones constantes.','Poca presencia física masiva e integración tecnológica.'],['Instituto Tecnológico de la Región','Paneles urbanos estáticos y volantes','Ubicación visible en puntos concurridos.','Mucho texto, tipografías poco legibles y sin códigos QR.'],['Centro de Capacitación y Computación','Afiches impresos y Facebook','Información directa sobre costos y fechas.','Estética tradicional, poco atractiva para el arte digital.']].map((r,i)=>`<div class="card"><div class="cond gt" style="font-size:3rem">0${i+1}</div><h3>${r[0]}</h3><p><b>Medio:</b> ${r[1]}</p><p><b>Fortaleza:</b> ${r[2]}</p><p><b>Por mejorar:</b> ${r[3]}</p></div>`).join('');
const C=[['Color','Tonos apagados o saturados que no captan la atención a distancia.','Paleta de alto contraste: fondos oscuros con acentos vibrantes, visible desde la carretera.'],['Tipografía','Fuentes delgadas o recargadas, con demasiado texto.','Sans-serif de gran cuerpo y peso grueso: el mensaje se lee en menos de 3 segundos.'],['Imágenes','Fotos de stock genéricas que no transmiten calidad técnica.','Renders 3D y gráficos vectoriales limpios que reflejan la identidad digital.'],['Llamado a la acción','Textos largos y confusos, sin un llamado directo.','Eslogan breve y un QR gigante y escaneable.'],['Formato y canal','Afiches y publicaciones que se pierden en la saturación visual.','Gran formato urbano que une lo físico con lo digital mediante QR.']];
$('#ct').innerHTML=C.map((c,i)=>`<button class="chip" data-c="${i}">${c[0]}</button>`).join('');
const cs=k=>{$$('#ct .chip').forEach((c,i)=>c.classList.toggle('on',i==k));$('#cp').innerHTML=`<div class="card"><h4>Qué observamos</h4>${C[k][1]}</div><div class="card"><h4>Cómo lo mejoramos</h4>${C[k][2]}</div>`};
$('#ct').onclick=e=>e.target.dataset.c&&cs(+e.target.dataset.c);cs(0);
/* ideas */
const B=[['Carrusel interactivo en Instagram','Muestra paso a paso la oferta y los proyectos.','Viable con herramientas digitales estándar.'],['Video reel con transiciones dinámicas','Atrae rápido al público joven.','Viable con Premiere o CapCut.'],['Afiches con QR de videos descriptivos','Conecta lo impreso con la experiencia digital.','Viable con generadores de QR gratuitos.'],['Valla publicitaria','Impacto visual masivo y alcance urbano.','Viable: soporte de gran formato y diseño vectorial escalable.'],['Infografía','Ordena beneficios, duración y perfil de cada carrera.','Viable con software vectorial.'],['Calendarios publicitarios','Marca presente todo el año.','Viable, pero requiere más presupuesto de impresión.']];
$('#bs').innerHTML=B.map((b,i)=>`<div class="flip rv ${i==3?'win':''}"><div class="fi"><div><span class="n">${i+1}</span><h3>${b[0]}</h3>${i==3?'<b style="color:var(--c1)">★ Idea seleccionada</b>':''}</div><div><b>Ventaja:</b> ${b[1]}<br><b>Viabilidad:</b> ${b[2]}</div></div></div>`).join('');
$('#bs').onclick=e=>{const f=e.target.closest('.flip');f&&f.classList.toggle('on')};
$('#sc').innerHTML=[['Originalidad','Identidad digital llevada al formato urbano.'],['Utilidad para el público','Acceso rápido a la feria con un QR visible.'],['Claridad del mensaje','Textos precisos, isologo y llamado directo.'],['Viabilidad con los recursos','Diseño vectorial listo para gigantografía.'],['Impacto visual','Gran formato y recordación de marca.']].map(s=>`<div class="sc"><span><b>${s[0]}</b><br><small style="color:var(--mut)">${s[1]}</small></span><div class="tr"><i data-w="100"></i></div><b>5/5</b></div>`).join('')+'<div class="sc"><b class="cond" style="font-size:1.6rem">TOTAL</b><div class="tr"><i data-w="100"></i></div><b class="cond gt" style="font-size:1.6rem">25/25</b></div>';
/* encuesta */
const E=[['Formato preferido: valla / panel',13],['Canal: Instagram y TikTok',12],['Información: campo laboral y carreras',11],['Estilo: moderno y tecnológico',12],['Escanearía un QR',14]];
$('#sv').innerHTML=E.map(e=>`<div class="sc" style="grid-template-columns:1fr 1.2fr 70px"><span>${e[0]}</span><div class="tr"><i data-w="${e[1]*5}"></i></div><b>${e[1]*5}% <small style="color:var(--mut)">(${e[1]})</small></b></div>`).join('');
/* marca */
$('#vt').innerHTML=[4,5,6,7,8,9].map(i=>`<button class="th ${i==4?'on':''}" data-v="${i}"><img data-i="v${i}" alt=""></button>`).join('');
$('#vt').onclick=e=>{const b=e.target.closest('.th');if(!b)return;$$('.th').forEach(x=>x.classList.toggle('on',x==b));$('#bg').src=I['v'+b.dataset.v]};
$('#sk').innerHTML=[0,1,2,3].map(i=>`<img data-i="s${i}" alt="Boceto ${i+1}" data-lb="Boceto a mano ${i+1}">`).join('');
/* galerías */
const G=[]; // {k,cap,grp}
const gal=(id,items)=>{$(id).innerHTML=items.map(x=>{G.push({k:x[0],c:x[1]});return `<figure data-g="${G.length-1}"><img data-i="${x[0]}" alt="${x[1]}"><figcaption>${x[1]}</figcaption></figure>`}).join('');img()};
gal('#bd',[['v0','Tablero de marca · violeta'],['v1','Tablero de marca · azul'],['v2','Tablero de marca · cálido'],['v3','Tablero de marca · turquesa']]);
const M=[['Todos'],['Ciudad',['m1','Frente a un centro comercial'],['m7','Panel peatonal']],['Carretera',['m2','Vía principal'],['m3','Avenida · dos tomas'],['m4','Avenida · dos tomas']],['Día y noche',['m5','Noche y día'],['m6','Esquina urbana']]];
const mk=(id,sel,list)=>{$(sel).innerHTML=list.map((l,i)=>`<button class="chip ${i?'':'on'}" data-f="${i}">${l[0]}</button>`).join('');const all=list.slice(1).flatMap(l=>l.slice(1).map(x=>x));const show=i=>{$$(sel+' .chip').forEach((c,j)=>c.classList.toggle('on',j==i));gal(id,i?list[i].slice(1):all)};$(sel).onclick=e=>e.target.dataset.f!=null&&show(+e.target.dataset.f);show(0)};
mk('#mg','#mf',M);
const A=[['Todo'],['Promoción',['g3','Banner «Diseña lo que viene»'],['g10','Afiche «Imagina, crea, trasciende»'],['g13','Banner «Convierte tus ideas en realidad»'],['g14','Roll-ups por carrera'],['g27','Piezas para redes sociales']],['Papelería',['g0','Carnets institucionales'],['g23','Tarjetas de presentación'],['g17','Papelería corporativa'],['g18','Diplomas y certificados'],['g30','Hoja membretada'],['g31','Cuadernos de marca'],['g12','Lanyards y fotocheck'],['g5','Sellos institucionales']],['Merchandising',['g2','Uniformes y hoodies'],['g6','Tazas y termos'],['g7','Gorras y mochilas'],['g15','Kit de bienvenida'],['g4','Stickers del isologo'],['g28','Polos institucionales']],['Espacios',['g9','Stand en la feria de carreras'],['g20','Fachada del instituto'],['g11','Recepción'],['g16','Mural del lobby'],['g21','Aula de diseño'],['g26','Señalética interior'],['g8','Taller gráfico'],['g22','Taller de impresión'],['g29','Laboratorio de plotter']]];
mk('#ag','#af',A);
/* control */
const K=[['Título y mensaje','Se entiende en menos de 3 segundos.'],['Jerarquía visual','Isologo, título y QR tienen el mayor peso.'],['Color y contraste','Texto blanco sobre fondo oscuro corporativo.'],['Tipografía','Geométrica institucional + sans-serif legible.'],['Imágenes','Vectores y perspectivas 3D acordes a las carreras.'],['Información del evento','Lugar: campus principal. Fecha, hora y contacto: por definir.'],['Llamado a la acción','Invita a escanear el QR para ver la feria.'],['Elemento innovador','QR a gran escala, legible a distancia.'],['Ortografía y revisión','Textos y eslogan revisados.'],['Exportación y entrega','CMYK / vectorial, gigantografía escalada.']];
$('#ck').innerHTML=K.map(k=>`<div class="ci"><i>✓</i><div><b>${k[0]}</b><span>${k[1]}</span></div></div>`).join('');
const cn=()=>{const n=$$('.ci.on').length;$('#cn').textContent=n+' de 10'+(n==10?' · ¡diseño aprobado!':'')};
$('#ck').onclick=e=>{const c=e.target.closest('.ci');c&&(c.classList.toggle('on'),cn())};
$('#ca').onclick=()=>$$('.ci').forEach((c,i)=>setTimeout(()=>{c.classList.add('on');cn()},i*120));
/* carreras */
$('#cr').innerHTML=[['ill','Ilustración Digital','Ilustración y arte conceptual.'],['ani','Animación 2D y 3D','Personajes, escenas y mundos animados.'],['aud','Producción Audiovisual','Video, cámara y contenido.'],['g21','Diseño UX/UI','Interfaces, web y apps.']].map(c=>`<div class="cc"><img data-i="${c[0]}" alt="${c[1]}"><div><h3>${c[1]}</h3><p>${c[2]}</p></div></div>`).join('');
$('#cr').onclick=e=>{const c=e.target.closest('.cc');c&&c.classList.toggle('on')};
/* justificación */
$('#ac').innerHTML=[['¿Qué problema resuelve?','La falta de visibilidad de la oferta en carreras digitales y creativas entre egresados de secundaria, posicionando la marca y la feria en la vía pública.'],['¿Qué hallazgos del mercado se consideraron?','La competencia usa publicidad recargada o solo digital. Por eso: diseño limpio, moderno y legible en carretera.'],['¿Cómo ayudó el brainstorming?','Permitió comparar redes, infografías y afiches con la valla, que ofrece mayor presencia y recordación.'],['¿Qué resultados de la encuesta influyeron?','La preferencia por formatos llamativos en espacios públicos y el 70 % dispuesto a usar QR llevaron a un QR de gran escala.'],['¿Qué la hace innovadora y profesional?','Estética vanguardista con la identidad de FRAME, más un QR gigante que convierte una valla estática en un punto interactivo.']].map(a=>`<details><summary>${a[0]}</summary><p>${a[1]}</p></details>`).join('');
/* lightbox */
let cur=0;const lb=n=>{cur=(n+G.length)%G.length;$('#li').src=I[G[cur].k];$('#lc2').textContent=G[cur].c;$('#lb').classList.add('on')};
document.addEventListener('click',e=>{const f=e.target.closest('figure[data-g]');if(f)lb(+f.dataset.g);const s=e.target.closest('[data-lb]');if(s){G.push({k:s.dataset.i,c:s.dataset.lb});lb(G.length-1)}});
$('#lp').onclick=()=>lb(cur-1);$('#ln').onclick=()=>lb(cur+1);$('#lb').onclick=e=>e.target.id=='lb'&&$('#lb').classList.remove('on');
document.addEventListener('keydown',e=>{if(e.key=='Escape')$('#lb').classList.remove('on')});
/* reveal + contadores + barras */
img();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const t=e.target;t.classList.add('in');t.querySelectorAll('[data-w]').forEach(b=>b.style.width=b.dataset.w+'%');if(t.id=='sv'||t.contains($('#rg'))){const r=$('#rg');let p=0;const iv=setInterval(()=>{p+=2;r.style.setProperty('--p',p+'%');$('#rn').textContent=p+'%';if(p>=70)clearInterval(iv)},25)}io.unobserve(t)}),{threshold:.2});
$$('.rv').forEach(e=>io.observe(e));
const ni=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;$$('[data-n]').forEach(b=>{const n=+b.dataset.n;let v=0;const iv=setInterval(()=>{v+=Math.max(1,n/40);if(v>=n){v=n;clearInterval(iv)}b.textContent=Math.round(v)+(b.dataset.s||'')},35)});ni.disconnect()}));ni.observe($('.stats'));
const sp=()=>{const h=document.documentElement;$('#bar').style.width=h.scrollTop/(h.scrollHeight-h.clientHeight)*100+'%';let a=S[0][0];S.forEach(s=>{if($('#'+s[0]).getBoundingClientRect().top<140)a=s[0]});$$('.links a').forEach(l=>l.classList.toggle('on',l.getAttribute('href')=='#'+a))};
addEventListener('scroll',sp,{passive:true});sp();
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
});
