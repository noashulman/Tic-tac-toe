const cardPictures = ["./ca1.jpg", "./ca2.jpg", "./ca3.jpg", "./ca4.jpg", "./ca5.jpg", "./ca6.jpg", "./ca1.jpg", "./ca2.jpg", "./ca3.jpg", "./ca4.jpg", "./ca5.jpg", "./ca6.jpg"];

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a
}
let shuffled = shuffle(cardPictures)
let cards = document.querySelectorAll(".cards");
for (let i = 0; i < cards.length; i++) {

    let div = document.createElement("div");
    div.classList.add("background")
    div.style.backgroundImage = `url(${"./backcard.jpg"})`
    

    let background = document.querySelectorAll(".background")
    for (let i = 0; i < background.length; i++) {
        background[i].addEventListener("click", switchOn)
        console.log(background)
        function switchOn(event) {
            background[i].style.backgroundImage = `url(${shuffled[i]})`;
            background[i].classList.add("pair")
            event.preventDefault();

        }
    }
    cards[i].appendChild(div);
    div.style.width = "100%"
    div.style.height = "100%"
    div.style.backgroundRepeat = "round"


}




    //shuffle the cards
    //make two cards for each picture
    //flip pictures on event







