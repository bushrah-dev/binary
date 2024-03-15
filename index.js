let dec = document.getElementById("dec")
let bin = document.getElementById("bin")
let error = document.getElementById("error")

dec.addEventListener("input", () => {
    let value = parseInt(dec.value)
    bin.value = value.toString(2)
})


bin.addEventListener("input", () => {
    let binVal = bin.value

    if(binValid(binVal)){
        dec.value = parseInt(binVal, 2)
        error.textContent = ""
    }else{
        error.textContent = "Enter a valid input"
    }

    function binValid(num){
        for (let i =0; i < num.length; i++){
            if(num[i]!= "0" && num[i]!= "1") {
                return false
            }
        }
        return true
    }
})