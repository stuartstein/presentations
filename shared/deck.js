  const slides = Array.from(document.querySelectorAll('.slide'));
  const bar = document.getElementById('bar');
  const cur = document.getElementById('cur');
  const tot = document.getElementById('tot');
  const secLabel = document.getElementById('secLabel');
  const hint = document.getElementById('hint');
  const rail = document.getElementById('rail');
  const deck = document.getElementById('deck');
  let i = 0;
  tot.textContent = String(slides.length).padStart(2,'0');

  slides.forEach((s,idx)=>{ const b=document.createElement('button'); b.title='Slide '+(idx+1);
    b.addEventListener('click',e=>{e.stopPropagation(); show(idx);}); rail.appendChild(b); });
  const dots = Array.from(rail.children);

  const printButton = document.createElement('button');
  printButton.type = 'button';
  printButton.className = 'print-button';
  printButton.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9V3h12v6"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v7H6z"/><path d="M18 12h.01"/></svg><span>Print PDF</span>';
  printButton.addEventListener('click', e => {
    e.stopPropagation();
    document.body.classList.add('print-ready');
    window.print();
  });
  window.addEventListener('afterprint', () => document.body.classList.remove('print-ready'));
  if(deck) document.body.insertBefore(printButton, deck);

  /* typing animation */
  const typeEl = document.getElementById('typeword');
  const TYPE_TEXT = 'Coding.';
  const typeSlide = typeEl ? slides.indexOf(typeEl.closest('.slide')) : -1;
  let typeTimer = null;
  let typeLoopTimer = null;
  function stopType(){
    clearInterval(typeTimer);
    clearTimeout(typeLoopTimer);
  }
  function runType(){
    if(!typeEl) return;
    stopType();
    typeEl.textContent = '';
    let k = 0;
    typeTimer = setInterval(()=>{
      typeEl.textContent = TYPE_TEXT.slice(0, k+1);
      k++;
      if(k >= TYPE_TEXT.length){
        clearInterval(typeTimer);
        if(i===typeSlide) typeLoopTimer = setTimeout(runType, 7000);
      }
    }, 115);
  }

  function show(n){
    i = Math.max(0, Math.min(slides.length-1, n));
    slides.forEach((s,idx)=> s.classList.toggle('active', idx===i));
    dots.forEach((d,idx)=> d.classList.toggle('on', idx===i));
    bar.style.width = (i/(slides.length-1))*100 + '%';
    cur.textContent = String(i+1).padStart(2,'0');
    secLabel.textContent = slides[i].dataset.sec || '';
    if(i>0) hint.classList.add('gone');
    if(i===typeSlide){ typeLoopTimer = setTimeout(runType, 350); } else { stopType(); }
  }
  const next=()=>show(i+1), prev=()=>show(i-1);

  document.addEventListener('keydown', e=>{
    if(['ArrowRight','ArrowDown',' ','PageDown'].includes(e.key)){ e.preventDefault(); next(); }
    else if(['ArrowLeft','ArrowUp','PageUp'].includes(e.key)){ e.preventDefault(); prev(); }
    else if(e.key==='Home') show(0);
    else if(e.key==='End') show(slides.length-1);
  });
  document.addEventListener('click', e=>{
    if(e.target.closest('a,button,kbd,.rail')) return;
    (e.clientX < window.innerWidth*0.32) ? prev() : next();
  });
  let sx=0;
  document.addEventListener('touchstart', e=> sx=e.touches[0].clientX, {passive:true});
  document.addEventListener('touchend', e=>{ const dx=e.changedTouches[0].clientX-sx;
    if(Math.abs(dx)>45){ dx<0?next():prev(); } }, {passive:true});

  show(0);
