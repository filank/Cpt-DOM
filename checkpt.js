

function like(id){
    document.getElementById(id).classList.add("Like")
}
        
    
function remove(id) {
        document.getElementById(id).remove()
        total()
    }


function add(id) {
   
    document.getElementById(id).value++
    total()

}
function drop(id) {
    
    if (document.getElementById(id).value >= 1){
    document.getElementById(id).value--
    total()
}
}



function total() {
    var res =0;
    for (let index = 1; index <= 6; index++) {
        if(document.getElementById('prix'+index) != null)
        res += document.getElementById('prix'+index).innerHTML * ((document.getElementById('Q'+index).value));
        
    }
    document.getElementById("total").value = res;
 }