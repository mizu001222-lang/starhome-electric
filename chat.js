// Simple local floating chat widget (UI-only)
(function(){
  const chat=document.getElementById('claudeChat');
  const toggle=document.getElementById('claudeToggle');
  const closeBtn=document.getElementById('claudeClose');
  const sendBtn=document.getElementById('claudeSend');
  const input=document.getElementById('claudeInput');
  const list=document.getElementById('claudeMessages');
  function openChat(){chat.style.display='flex';toggle.style.display='none';input.focus();}
  function closeChat(){chat.style.display='none';toggle.style.display='grid';}
  toggle.addEventListener('click',openChat);
  closeBtn.addEventListener('click',closeChat);
  function appendMsg(text,who){const el=document.createElement('div');el.className='msg '+(who==='user'?'user':'bot');el.innerHTML=text;list.appendChild(el);list.scrollTop=list.scrollHeight}
  sendBtn.addEventListener('click',()=>{const v=input.value.trim();if(!v) return;appendMsg(v,'user');input.value='';setTimeout(()=>{
    // dummy bot response — replace with API integration when available
    appendMsg('클로드(미리보기): "'+v.replace(/</g,'&lt;')+'" — (로컬 에코 응답입니다.)','bot');
  },500)});
  input.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();sendBtn.click()}});
  // init hint
  appendMsg('안내: 이 채팅창은 UI 데모입니다. 실제 Claude API 연동은 별도 구현이 필요합니다.','bot');
})();
