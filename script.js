let screen = document.getElementById('input');
console.log(screen);
function display(num){
    screen.value += num;
}
function ac() {
    screen.value = ""
}

function clr(){
    screen.value = screen.value.slice(0, -1)
}

function calculate(){
    try{
        screen.value = eval(screen.value)
    }catch{
        alert('Enter an Valid Operation')
    }
}
