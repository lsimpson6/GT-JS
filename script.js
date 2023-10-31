window.addEventListener('scroll', ()=>{
  if(document.getElementById('header-main').getAttribute('data-was-clicked') == false){
  		document.getElementById('givenow').dispatchEvent(new Event('click'));
      document.getElementById('header-main').setAttribute('data-was-clicked', "true");
  alert(document.getElementById('header-main').getAttribute('data-was-clicked'));
  }
})
  
document.getElementById('givenow').addEventListner('click',()=>{
    document.getElementById('header-main').setAttribute('data-was-clicked', "true");
})
