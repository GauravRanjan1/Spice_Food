window.addEventListener('scroll', () =>{
    const head = document.querySelector('header');
    head.classList.toggle('sticky', window.scrollY>0);
});

function mentog() {
    const mtoggle = document.querySelector('.menutoggle');
    const navigation = document.querySelector('.navig');
    mtoggle.classList.toggle('active');
    navigation.classList.toggle('active');
}