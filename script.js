let menu = document.querySelector("#menu");
let mlist = document.querySelector(".links");
let closeBtn = document.querySelector("#close");

// menu.onclick = () => {
//     // menu.classList.toggle('fa-close');
//     mlist.style.display = 'flex';
//     // mlist.classList.toggle('active');
    
// }

function openMenu(){
    mlist.style.display = 'flex';
    menu.style.display = 'none';
    closeBtn.style.display ='block';

}

function closeMenu(){
    mlist.style.display = 'none';
    menu.style.display = 'block';
    closeBtn.style.display ='none';

}