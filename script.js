var i = 0;
var el = -1;
var targetHeader = document.getElementById('header-main');
function setAtrr(){document.getElementById('header-main').setAttribute('data-modal-was-shown', "true");}
document.querySelectorAll('.left-grid-right-text-cta').forEach(gCta => gCta.addEventListener('click', setAtrr()));

window.addEventListener('load', ()=>{
	let windowUrl = window.location.search;
	let params = new URLSearchParams(windowUrl);
  
  	if(params.has('subId') && params.get('subId') != "" || params.get('subId') != null){
        document.getElementById('thankyou-modal-button').click();
        targetHeader.setAttribute('data-modal-was-shown', "true");
  	}else{
        document.querySelectorAll('.category-title').forEach(t => {el++; t.setAttribute("data-hyperlink-number", el)})
            if(targetHeader.getAttribute('data-modal-was-shown') == "false"){
                setInterval(()=>{
                    i++;
                    if(i > 249 && targetHeader.getAttribute('data-modal-was-shown') == "false"){
                        document.getElementById('givenow').click();
                        targetHeader.setAttribute('data-modal-was-shown', "true");
                    }
                }, 100)
            }
	}
})
 
window.addEventListener('scroll',()=>{
    let catLinks = document.querySelectorAll('.category-menu');
    let category = document.querySelectorAll('.category-title');
    let header = document.getElementById('layout-header').clientHeight;                                                                     
    let linksHeight = document.getElementById('catalog-menu').clientHeight;
    let catalogMenu = document.getElementById('catalog-menu');
    category.forEach(item => {
        let itemNum = item.getAttribute('data-hyperlink-number');
        if(item.getBoundingClientRect().top < (50 + header + linksHeight) && item.getBoundingClientRect().bottom < (50 + header + linksHeight)){
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
    
	if(document.getElementById('menu-target-but-fancy').getBoundingClientRect().top < 0 + header + linksHeight){
    	catalogMenu.style = "top:" + header + "px;";
        catalogMenu.classList.add('sticky-cat-nav');
    }else {
    	catalogMenu.style = "";     
        catalogMenu.classList.remove('sticky-cat-nav');
    }
                                                                              
})
