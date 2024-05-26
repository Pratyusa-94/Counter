let count = 0
const value = document.getElementById("value")
const decrease = document.getElementById('decrease')
const reset = document.getElementById('reset')
const increase = document.getElementById('increase')

decrease.addEventListener('click',function(){
    if(count > 0){
        count--
    }
    value.textContent = count
})
increase.addEventListener('click',function(){
    count++
    value.textContent = count
})
reset.addEventListener("click",function(){
    value.textContent = 0
})
