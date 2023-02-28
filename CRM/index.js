const btnToggle = document.querySelector('.toggle_btn');

btnToggle.addEventListener('click', function(){
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('topbar').classList.toggle('active');
});

const openModal =  document.querySelector('.new_game');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close_button');

openModal.addEventListener('click',(e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');

});

closeModal.addEventListener('click',(e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');

});