(() => {
  const CONTENT = {
    yoNunca: ["Yo nunca nunca he fingido estar ebrio para salir de un lugar.", "Yo nunca nunca he enviado un mensaje al ex estando de previa.", "Yo nunca nunca he dicho 'una última' y terminé viendo salir el sol.", "Yo nunca nunca he perdido algo importante en una fiesta.", "Yo nunca nunca he revisado una historia más de tres veces antes de responder.", "Yo nunca nunca he inventado una excusa para cancelar un plan."],
    verdadOReto: ["Verdad: ¿cuál fue tu peor excusa para llegar tarde?", "Reto: imita a alguien del grupo hasta que adivinen quién es.", "Verdad: ¿qué canción te sabes completa pero te da vergüenza admitirlo?", "Reto: baila 20 segundos sin música.", "Verdad: ¿cuál es tu red flag más inocente?", "Reto: deja que el grupo elija una palabra que debes usar en cada frase durante una ronda."],
    masProbable: ["¿Quién es más probable que olvide dónde dejó el teléfono? Señálenlo: toma 1.", "¿Quién es más probable que llegue tarde a su propia fiesta? Voten.", "¿Quién es más probable que se haga viral por accidente? El elegido toma 1.", "¿Quién es más probable que sobreviva a un apocalipsis? El grupo decide.", "¿Quién es más probable que mande un audio de 8 minutos? Señalen sin piedad."],
    versus: ["Duelo de miradas con la persona a tu derecha. Quien parpadee primero toma 2.", "Piedra, papel o tijera contra quien tú elijas. El perdedor toma 2.", "Compitan por nombrar canciones con 'amor' en el título. Quien se quede en blanco toma 2.", "Reto de pulso de pulgares contra otro jugador. El perdedor toma 2.", "Hagan una pose de portada de disco. El grupo decide quién pierde: toma 1."],
    hot: ["Pregunta Hot: ¿qué detalle romántico te conquista al instante?", "Reto Hot: di un cumplido sincero a la persona que elijas.", "Pregunta Hot: ¿cuál ha sido tu cita más memorable?", "Reto Hot: sostén la mirada de alguien del grupo durante 10 segundos.", "Pregunta Hot: ¿qué canción pondrías en una cita ideal?", "Reto Hot: toma la mano de alguien que acepte durante una ronda."],
    regla: ["Regla de mesa: durante una ronda nadie puede decir 'sí' ni 'no'. Quien falle toma 1.", "Elige quién toma 2 tragos.", "Todos toman 1. Salud.", "Regla de mesa: habla con acento hasta tu próximo turno. Quien rompa el personaje toma 1.", "El último en tocar algo morado toma 1.", "Brindis obligatorio: todos toman 1."],
  };
  const META = { yoNunca:["🍻","Yo nunca"], verdadOReto:["🎯","Verdad o reto"], masProbable:["👉","Más probable"], versus:["⚔️","Versus"], hot:["🔥","Hot / Pareja"], regla:["📣","Regla de mesa"] };
  const COLORS = ["#52e7ff", "#ff71bf", "#ffd45b", "#8dfb9b", "#af8bff", "#ff8e59", "#75b8ff", "#ff6d7a", "#d9ff6d", "#ff9ee6", "#8effdf", "#e3b1ff"];
  const AVATARS = ["😎","🦄","👾","🐸","😈","🤠","🦊","🐼","🧠","🍕","🛸","🦋"];
  const state = { players:[], avatar:AVATARS[0], boardType:"classic", board:[], enabled:[], current:0, moving:false, pending:null };
  const $ = id => document.getElementById(id);
  const random = array => array[Math.floor(Math.random()*array.length)];
  const avatarHTML = p => `<span class="player-avatar" style="--player-color:${p.color}">${avatarVisual(p)}</span>`;

  function renderAvatarChoices(){ $("avatar-picks").innerHTML = AVATARS.map((a,i)=>`<button class="avatar-pick ${i===0?"selected":""}" type="button" data-avatar="${a}">${a}</button>`).join(""); }
  function renderPlayers(){
    $("player-count").textContent = `${state.players.length} / 12`;
    $("go-mode").disabled = state.players.length < 2;
    $("players-list").innerHTML = state.players.length ? state.players.map((p,i)=>`<div class="player-row" style="--player-color:${p.color}">${avatarHTML(p)}<strong>${escapeText(displayName(p.name))}</strong><i class="player-color"></i><button class="remove-player" type="button" data-remove="${i}">Eliminar</button></div>`).join("") : '<div class="empty-players"></div>';
  }
  function escapeText(value){ const e=document.createElement("span"); e.textContent=value; return e.innerHTML; }
  function isFoxPlayer(name){ const normalized=name.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase(); return normalized.includes("edu") || normalized.includes("itu"); }
  function displayName(name){ return `${name}${isFoxPlayer(name) ? " 🪇" : ""}`; }
  function avatarVisual(player){ return isFoxPlayer(player.name) ? "🦊" : player.avatar.startsWith("data:") ? `<img src="${player.avatar}" alt="">` : player.avatar; }
  function showScreen(id){ document.querySelectorAll(".route-screen").forEach(s=>s.classList.toggle("active",s.id===id)); window.scrollTo({top:0,behavior:"smooth"}); }
  function enabledModes(){ const values=[...document.querySelectorAll(".mode-toggles input:checked")].map(i=>i.value); return values.length ? values : ["regla"]; }
  function lengthFor(type){ return type==="flash" ? 15 : type==="extreme" ? 42 : type==="hot" ? 28 : 28; }
  function buildBoard(){
    state.enabled=enabledModes(); if(state.boardType==="hot" && !state.enabled.includes("hot")) state.enabled.push("hot");
    const length=lengthFor(state.boardType); state.board=[];
    for(let i=1;i<=length;i++){
      let type=random(state.enabled);
      let special=null;
      if(i===1) type="start"; else if(i===length) type="finish";
      else if(i%11===0) special={kind:"advance",label:"Avanza 2",icon:"⏩",amount:2};
      else if(i%9===0) special={kind:"back",label:"Retrocede 1",icon:"⏪",amount:-1};
      else if(i%13===0) special={kind:"all",label:"Todos toman",icon:"🥂"};
      state.board.push({number:i,type,special});
    }
  }
  function renderBoard(){
    const board=$("route-board"), length=state.board.length, rows=Math.ceil(length/7), cells=[];
    for(let visualRow=0;visualRow<rows;visualRow++){
      const logicalRow=rows-1-visualRow, start=logicalRow*7+1, group=[];
      for(let col=0;col<7;col++){const n=start+col;if(n<=length)group.push(n);}
      if(logicalRow%2===1) group.reverse();
      group.forEach(n=>{const c=state.board[n-1], isSpecial=!!c.special, icon=isSpecial?c.special.icon:(c.type==="start"?"🚩":c.type==="finish"?"🏆":META[c.type][0]); const players=state.players.filter(p=>p.position===n); cells.push(`<div class="cell ${isSpecial?"special":c.type}" data-cell="${n}"><span class="cell-icon">${icon}</span><span class="cell-num">${n}</span><div class="tokens">${players.map(p=>`<span class="token" style="--player-color:${p.color}">${avatarVisual(p)}</span>`).join("")}</div></div>`);});
    }
    board.innerHTML=cells.join("");
    $("board-legend").innerHTML=state.enabled.map(t=>`<span>${META[t][0]} ${META[t][1]}</span>`).join("");
    renderControl();
  }
  function renderControl(){ const p=state.players[state.current]; if(!p)return; $("current-player").innerHTML=`${avatarHTML(p)}<span>${escapeText(displayName(p.name))}</span>`; $("turn-pill").textContent=`Casilla ${p.position} de ${state.board.length}`; $("score-list").innerHTML=state.players.map(p=>`<div class="score-row">${avatarHTML(p)}<b>${escapeText(displayName(p.name))}</b><span>${p.position}</span></div>`).join(""); }
  function setDice(n){ const map={1:[2],2:[0,4],3:[0,2,4],4:[0,1,3,4],5:[0,1,2,3,4],6:[0,1,3,4,5]}; [...$("dice").children].forEach((dot,i)=>dot.classList.toggle("show",map[n].includes(i))); }
  const wait=ms=>new Promise(r=>setTimeout(r,ms));
  async function roll(){ if(state.moving)return; state.moving=true; const button=$("roll-dice");button.disabled=true;$("dice").classList.add("rolling"); $("dice-copy").textContent="Rodando…"; await wait(720); const n=Math.floor(Math.random()*6)+1;setDice(n);$("dice").classList.remove("rolling");$("dice-copy").textContent=`Sacaste ${n}`; await movePlayer(n);button.disabled=false;state.moving=false; }
  async function movePlayer(steps){ const p=state.players[state.current], target=Math.min(state.board.length,p.position+steps); for(let i=p.position+1;i<=target;i++){p.position=i;renderBoard();await wait(260);} if(p.position>=state.board.length){win(p);return;} await resolveCell(state.board[p.position-1]); }
  async function resolveCell(cell){ if(cell.special){ $("modal-icon").textContent=cell.special.icon;$("modal-type").textContent="Casilla especial";$("modal-title").textContent=cell.special.label;$("modal-text").textContent=cell.special.kind==="all"?"Todos toman 1. ¡Salud!":cell.special.amount>0?"Después de cerrar esto avanzarás 2 casillas.":"Después de cerrar esto retrocederás 1 casilla.";state.pending={special:cell.special};openModal();return; } const [icon,name]=META[cell.type];$("modal-icon").textContent=icon;$("modal-type").textContent=name;$("modal-title").textContent=displayName(state.players[state.current].name);$("modal-text").textContent=random(CONTENT[cell.type]);state.pending=null;openModal(); }
  function openModal(){ $("challenge-modal").classList.add("open"); }
  async function finishChallenge(failed=false){ $("challenge-modal").classList.remove("open"); if(failed)$("dice-copy").textContent="Toma 2 tragos 🍻"; const special=state.pending?.special; state.pending=null; if(special?.amount){const p=state.players[state.current], to=Math.max(1,Math.min(state.board.length,p.position+special.amount));const direction=to>p.position?1:-1;while(p.position!==to){p.position+=direction;renderBoard();await wait(230);}if(p.position>=state.board.length){win(p);return;}} nextTurn(); }
  function nextTurn(){ state.current=(state.current+1)%state.players.length;renderBoard();$("dice-copy").textContent="Lanza el dado"; }
  function win(p){ $("winner-name").textContent=`${displayName(p.name)} gana`; $("win-modal").classList.add("open"); }
  function start(){ state.players.forEach(p=>p.position=1);state.current=0;buildBoard();renderBoard();setDice(1);showScreen("game-screen"); }
  $("player-form").addEventListener("submit",e=>{e.preventDefault();const name=$("player-name").value.trim();if(!name||state.players.length===12)return;state.players.push({name,avatar:state.avatar,color:COLORS[state.players.length],position:1});$("player-name").value="";state.avatar=AVATARS[0];document.querySelectorAll(".avatar-pick").forEach((b,i)=>b.classList.toggle("selected",i===0));$("avatar-file").value="";renderPlayers();});
  $("avatar-picks").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;state.avatar=b.dataset.avatar;document.querySelectorAll(".avatar-pick").forEach(x=>x.classList.toggle("selected",x===b));});
  $("avatar-file").addEventListener("change",e=>{const file=e.target.files[0];if(!file)return;const reader=new FileReader();reader.onload=()=>{state.avatar=reader.result;document.querySelectorAll(".avatar-pick").forEach(x=>x.classList.remove("selected"));};reader.readAsDataURL(file);});
  $("players-list").addEventListener("click",e=>{const b=e.target.closest("[data-remove]");if(!b)return;state.players.splice(Number(b.dataset.remove),1);renderPlayers();});
  $("go-mode").onclick=()=>showScreen("mode-screen"); document.querySelector("[data-back]").onclick=()=>showScreen("setup-screen");
  $("board-choices").onclick=e=>{const b=e.target.closest("[data-board]");if(!b)return;state.boardType=b.dataset.board;document.querySelectorAll(".board-choice").forEach(x=>x.classList.toggle("selected",x===b)); if(state.boardType==="hot")document.querySelector('input[value="hot"]').checked=true;};
  $("start-game").onclick=start;$("roll-dice").onclick=roll;$("complete-challenge").onclick=()=>finishChallenge();$("fail-challenge").onclick=()=>finishChallenge(true);$("restart-settings").onclick=()=>showScreen("mode-screen");$("play-again").onclick=()=>{$("win-modal").classList.remove("open");start();};$("new-game").onclick=()=>{$("win-modal").classList.remove("open");showScreen("setup-screen");};
  renderAvatarChoices();renderPlayers();setDice(1);
})();
