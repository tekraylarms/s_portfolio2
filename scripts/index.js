let ham_menu = document.querySelector('#ham-menu');

let homeContainer = document.querySelector('.home-js-container');

let flag=1;
ham_menu.addEventListener('click', ()=>{
   if(flag === 1){
       showNav(); 
       flag=0;
   }
   else if(flag===0){
        removeNav();
        flag=1;
   }
});

function showNav(){
      let item=document.querySelector('.nav-list2');
      item.innerHTML=`
      <li><a class="hover-link" href="index.html">Home</a></li>
      <li><a class="hover-link" href="#">About</a></li>
      <li><a class="hover-link" href="#">Contact</a></li>
      `;
      homeContainer.style.marginTop= '125px';
}
function removeNav(){
    let item=document.querySelector('.nav-list2');
    item.innerHTML='';
    homeContainer.style.marginTop= '65px';
}