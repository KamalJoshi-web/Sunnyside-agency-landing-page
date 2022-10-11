const menuBtn = document.getElementById('hamburger');
const navigationLinks =document.querySelector('.navigation-links');
const triangleBottomright =document.getElementById('triangle-bottomright');
menuBtn.addEventListener('click',()=>{
    navigationLinks.classList.toggle('active');
    if(navigationLinks.classList.contains('active')){
        triangleBottomright.style.display='block';
    }
    
    else{
        triangleBottomright.style.display='none';
    }
})