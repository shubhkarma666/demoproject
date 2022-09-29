document.addEventListener('DOMContentLoaded', function(){
    const openbtn = document.querySelector('#sidebar-toggle-button-open');
    const closebtn = document.querySelector('#sidebar-toggle-button-close');
    const sidebar = document.querySelector('#sidebar');

    openbtn.addEventListener('click', function(){
        sidebar.style.left = '0';
    });
    closebtn.addEventListener('click', function(){
        sidebar.style.left = '-100vw';
    });
})