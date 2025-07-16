function dis(n){
    //var a = document.getElement ById(n).value
    console.log(`Button ${n} pressed`)
    document.getElementById("result").value += n
}
function solve(){
    let x = document.getElementById("result").value
                        let y = math.evaluate(x)
                        document.getElementById("result").value = y
}
// Function that clear the display
		function clr() {
			document.getElementById("result").value = ""
		}
