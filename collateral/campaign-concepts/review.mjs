const key='playbook-campaign-preferences-v1';
let choices={};
try{const value=JSON.parse(localStorage.getItem(key));if(value&&typeof value==='object'&&!Array.isArray(value))choices=value;}catch{}
for(const section of document.querySelectorAll('[data-concept]')){
  const id=section.dataset.concept,buttons=[...section.querySelectorAll('[data-choice]')],output=section.querySelector('output');
  function show(saved=false){for(const button of buttons)button.setAttribute('aria-pressed',String(button.dataset.choice===choices[id]));output.textContent=buttons.some(b=>b.dataset.choice===choices[id])?(saved?'Preference saved':'Saved preference'):'';}
  show();
  for(const button of buttons)button.addEventListener('click',()=>{if(choices[id]===button.dataset.choice)delete choices[id];else choices[id]=button.dataset.choice;show();try{localStorage.setItem(key,JSON.stringify(choices));show(true);}catch{output.textContent='Selected for this visit; browser saving unavailable.';}});
}
