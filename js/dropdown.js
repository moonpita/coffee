// document.getElementById('nav').onmouseover = function(event) {
//     let target = event.target;
//     if (target.className == 'dropdown-menu__link') {
//         let s = target.getElementByClassName('submenu__list');
//         closeMenu();
//         s[0].style.display='block';
//     }
// }

// document.onmouseover = function (event) {
//     let target = event.target;
//     console.log(event.target);
//     if (target.className != 'submenu__list' && target.className != 'submenu' {
//         closeMenu
//     }) {}
// }

// function closeMenu() {
//     let menu = document.getElementById('nav');
//     let sumb=document.getElementByClassName('submenu');
//     for (let i=0; i <sumb.length; i++) {
//         subm[i].style.display='none';
//     }
// }




// document.querySelector('.c-click').addEventListener('click', function(e) {
//     e.preventDefault();
//     if (this.classList.contains('is-active')) {
//         this.classList.remove('is-active');
//         document.querySelector('#menu').classList.remove('nav-active');
//         document.body.classList.remove('body-active');
//     }
//     else {
//         this.classList.add('is-active');
//         document.querySelector('#menu').classList.add('nav-active');
//         document.body.classList.add('body-active');
//     }
// })

// document.querySelector('.c-consult').addEventListener('click', function(e) {
//     e.preventDefault();
//         document.querySelector('#menu').classList.remove('nav-active');
//         document.body.classList.remove('body-active');
// })


// const btns = document.querySelectorAll('.dropdown-menu__link').

// addEventListener('click', (e) => {
//         e.stopPropagation();
//         this.next().classList.toggle('dropdown-active');
//         console.log(button.next());
//     )
// }

// document.querySelectorAll('.dropdown-menu__link').addEventListener('click', function(e) {
//     e.preventDefault();
//     document.querySelectorAll('.submenu__list').classList.remove('dropdown-active');
//     if (this.classList.contains('.dropdown-active')) {
//         this.classList.remove('dropdown-active');
//         this.classList.add('dropdown-active');
//     }
//     else {
//         this.classList.add('dropdown-active');
//         this.nextElementSibling.classList.add('dropdown-active');
//     }
// })

// for (let li of TreeWalker.querySelectorAll('li')) {
//     let span = document.createElement('span');
//     span.classList.add('show');
//     li.prepend(span);
//     span.append(span.nextSibling)

// }

const elements = document.getElementsByClassName('dropdown-menu__main-item');
for (i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mousedown', showMenu);
    elements[i].addEventListener('mouseleave', hideMenu);
}

function showMenu(){
    if(this.children.length>1){
        this.children[1].style.height = 'auto';
        this.children[1].style.opacity = '1';
        this.children[1].style.overflow = 'visible';
    }
    document.getElementsByClassName('dropdown-menu__main-item').classList.add('hover-active');
}

function hideMenu(){
    if(this.children.length>1){
        this.children[1].style.height = '0';
        this.children[1].style.opacity = '0';
        this.children[1].style.overflow = 'hidden';
        
    }
    document.getElementsByClassName('dropdown-menu__main-item').classList.remove('hover-active');
}