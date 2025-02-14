
// Ensure the math.js library is included
// <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/9.4.4/math.min.js"></script>

function solve(){
    let x = document.getElementById("one").value
    try{
    let y = math.evaluate(x)
    document.getElementById("one").value = y;
    }
    catch(error){
        document.getElementById("one").value="EOR 808"
    }
} 

// function solve() {
//     const display = document.querySelector('input[name="display"]');
//     try {
//         display.value = math.evaluate(display.value);
//     } catch (e) {
//         display.value = 'Error';
//     }
// }
    