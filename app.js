const toggleBarBtn = document.getElementById('toggleBar');
const containerNavItems = document.querySelector('.containerNavItems');
const toggleBar = document.querySelector('.toggleBar');

toggleBarBtn.onclick = () => {
    containerNavItems.classList.toggle('active');
    toggleBar.classList.toggle('active')
}