
   let bar=document.querySelector('.fa-bars-staggered','.bars');
   let cross=document.querySelector('.fa-xmark');
   let menu=document.querySelector('.nav-links');

   bar.addEventListener('click',()=>{
      menu.style.right="34%";
   });
   cross.addEventListener('click',function(){
      menu.style.right="0";
   });