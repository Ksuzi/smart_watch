const mobile_menu = document.querySelector('#mobile-menu');
const menu_btn = document.querySelector('#navbar_btn');

menu_btn.addEventListener('click', () => {
    mobile_menu.style.display === 'none' ? mobile_menu.style.display = 'block' : mobile_menu.style.display = 'none';
    // mobile_menu.style.display = 'flex' ? : ''}
})
