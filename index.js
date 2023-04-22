const textareaEl = document.getElementById("textarea");

const totalCounterEl = document.getElementById("total-counter");

const remaingCounterEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup",()=>{
    updateCounter();
});

//To initially set the values to 0 and 50
updateCounter();

function updateCounter(){
    totalCounterEl.innerText =  textareaEl.value.length;

    remaingCounterEl.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}

//textarea length is calculated by textareaEl.value.length and set to total counter
//maxlength attributen of textarea is got from textareaEl.getAttribute() and remaining counter is set to maxlength - current total length
