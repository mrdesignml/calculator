var screen = document.getElementById('screen');

function butclick(value){
    screen.value += value;
}

function clearscreen(){
    screen.value = "";
    alert("Are you Sure to clear")
    
}

function findresult(){
    var result = eval(screen.value)
    screen.value = result

}