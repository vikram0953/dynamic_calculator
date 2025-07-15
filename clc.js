function dis(n){
    //var a = document.getElement ById(n).value
    console.log(`Button ${n} pressed`)
    document.getElementById("result").value += n
}
function solve(){
    let x = document.getElementById("result").value
    let y = Math.evaluate(x)
    document.getElementById("result").value = y
}
