const cookie = document.getElementById("cookie");
let counter = 0;

cookie.addEventListener('click', () => {
    counter++
    
    const countText = document.getElementById("counter");

    countText.textContent = `Number of clicks: ${counter}`
})
