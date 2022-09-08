$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('.menu-toggle').toggleClass('active')
        $('nav').toggleClass('active')
    })
})

const pizzaImg = document.querySelectorAll(".single-menu img");
for (const pimg of pizzaImg) {
    pimg.addEventListener('click', e => {
        console.log("Pizza")        
    }) 
}

fetch('https://api.agify.io/?name=Kimkd', {
    headers: {
        'Content-Type': 'application/json'
    },
}).then(res => {
    return res.json()
})
.then(data => console.log(data))
.catch(error => console.log('Error'))




