//initialize the count as 0

//listen for clicks on the increment btn

//increment the count variable when the button is clicked

//change the count-el in HTML to reflect the new count

let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let text = count + " - "
    saveEl.textContent += text          //use textContent instead of innerText when you want to consider the spaces as the later ignores them 
    countEl.textContent = 0
    count = 0
}