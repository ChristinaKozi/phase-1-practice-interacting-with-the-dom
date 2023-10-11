const time = document.querySelector('#counter');
let i = 0;
let startTimer = null

const loaded = document.addEventListener('DOMContentLoaded', (event)=> {
    startTimer = setInterval(timer, 1000);
    plusTimer()
    minusTimer()
    clickHeart()
    clickPause()
    submitForm()
})

function timer(){
    i++;
    time.textContent = i;
}

const plusButton = document.querySelector("button#plus")
function plusTimer(){
    plusButton.addEventListener('click',()=> {
        i++;
        time.textContent = i;
    })
}
const minusButton = document.querySelector('button#minus')
function minusTimer(){
    minusButton.addEventListener('click', ()=>{
        i--;
        time.textContent = i;
    })
}

const heartButton = document.querySelector('button#heart')
function clickHeart(){
    heartButton.addEventListener('click', ()=>{
        const p = document.createElement('p')
        p.textContent = `You loved ${i}!`
        const likes = document.querySelector('ul.likes')
        likes.appendChild(p)
    })
}

const pauseButton = document.querySelector('button#pause')
function clickPause(){
    pauseButton.addEventListener('click', ()=>{
        clearInterval(startTimer)
        pauseButton.textContent = 'resume'
        heartButton.disabled = true
        minusButton.disabled = true
        plusButton.disabled = true
        submitButton.disabled = true
        clickResume()
    })
}

function clickResume(){
    pauseButton.removeEventListener('click', clickPause)
    pauseButton.addEventListener('click', ()=>{
        if (pauseButton.textContent === 'resume'){
            startTimer = setInterval(timer, 1000)
            pauseButton.textContent = 'pause'
            heartButton.disabled = false
            minusButton.disabled = false
            plusButton.disabled = false
            submitButton.disabled = false
        }
        clickPause()
    })
}

const submitButton = document.querySelector('button#submit')
const form = document.querySelector('form')
function submitForm(){
    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        const comment = document.createElement('p')
        const input = document.querySelector('input#comment-input')
        const commentList = document.querySelector('#list.comments')
        comment.textContent = input.value
        commentList.appendChild(comment)
        form.reset()
    })
}