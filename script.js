var i = 0;
var el = -1;

document.querySelectorAll('.left-grid-right-text-cta').forEach(gCta => gCta.addEventListener('click',()=>{
 document.getElementById('header-main').setAttribute('data-modal-was-shown', "true");	
}));
document.querySelectorAll('.cta-button').forEach(cta => cta.addEventListener('click',()=>{
 document.getElementById('header-main').setAttribute('data-modal-was-shown', "true");	
}));

window.addEventListener('load', ()=>{
	let windowUrl = window.location.search;
	let params = new URLSearchParams(windowUrl);
        document.querySelectorAll('.category-title').forEach(t => {el++; t.setAttribute("data-hyperlink-number", el)})
  	if(params.has('subId') && params.get('subId') != "" || params.get('subId') != null){
		let nameField = document.getElementById('on_behalf_of-bf0c727e-e018-4107-bc9b-a4480dd1f5af');
		let nameData = document.getElementById('thankYouModal');
		try{
			let names = nameData.getAttribute('data-fname') + ' ' + nameData.getAttribute('data-lname');
			nameField.textContent = nameData.getAttribute('data-fname') + ' ' + nameData.getAttribute('data-lname');
			nameField.value = nameData.getAttribute('data-fname') + ' ' + nameData.getAttribute('data-lname');
		}catch(e){
			//do nothing
		}
	        document.getElementById('thankyou-modal-button').click();
	        document.getElementById('header-main').setAttribute('data-modal-was-shown', "true");
  	}else{
		setInterval(()=>{
		showSuggestion();
		}, 25000)
	}
})

function showSuggestion(){
	if(document.getElementById('header-main').getAttribute('data-modal-was-shown') == "false"){
		document.getElementById('suggestion-modal-button').click();
		document.getElementById('header-main').setAttribute('data-modal-was-shown', "true");
	}
}
 
window.addEventListener('scroll',()=>{
    let catLinks = document.querySelectorAll('.category-menu');
    let category = document.querySelectorAll('.category-title');
    let header = document.getElementById('layout-header').clientHeight;                                                                     
    let linksHeight = document.getElementById('catalog-menu').clientHeight;
    let catalogMenu = document.getElementById('catalog-menu');
    category.forEach(item => {
        let itemNum = item.getAttribute('data-hyperlink-number');
        if(item.getBoundingClientRect().top < (65 + header + linksHeight) && item.getBoundingClientRect().bottom < (65 + header + linksHeight)){
            catLinks.forEach(link => {
                if(link.getAttribute('data-number-index') == itemNum){
                    link.style = 'color: #59CAE8 !important; ';
                    link.setAttribute('underline', "true");
                }else {
                    link.style = '';
                    link.setAttribute('underline', "false");
                }
            })
        }
    })
    
    var targetMenu = document.getElementById('menu-target-but-fancy');
    var lastNavItem = document.querySelectorAll('.category-menu');
    var lastGridItem = document.querySelectorAll('.items');
	if(targetMenu.getBoundingClientRect().top < 0 + header + linksHeight){
    	catalogMenu.style = "top:" + header + "px;";
        catalogMenu.classList.add('sticky-cat-nav');
        if(lastNavItem[(lastNavItem.length - 1)].getAttribute('underline') == "true" && (lastGridItem[(lastGridItem.length - 1)].getBoundingClientRect().bottom < 0 + header + linksHeight)){
            catalogMenu.style = "";     
            catalogMenu.classList.add('hidden-nav');
        }else {
            catalogMenu.classList.remove('hidden-nav');

        }
    }else {
    	catalogMenu.style = "";     
        catalogMenu.classList.remove('sticky-cat-nav');
    }
                                                                              
})
