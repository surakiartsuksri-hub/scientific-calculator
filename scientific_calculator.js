const form = document.querySelector("#myForm");
const input = document.querySelector("input[type='text']");
const resultDisplay = document.querySelector("#result")

form.addEventListener("submit", function(event){
    event.preventDefault();
    let text = input.value;

    let tokens = tokenize(text);
    console.log("แยกส่วนได้: ", tokens);

    let answer = tokens.join(" ");
    resultDisplay.textContent = "ผลลัพธ์: " + answer;
});

function tokenize(str){
    let tokens = [];
    let currentNumber = "";

    for(let i = 0; i < str.length; i++){
        let char = str[i];

        if (char == " ") continue;

        if (!isNaN(char)){
            currentNumber += char;
        } else{
            if (currentNumber !== ""){
                tokens.push(currentNumber);
                currentNumber = "";
            }

            tokens.push(char);
        }
    }

    if(currentNumber !== ""){
        tokens.push(currentNumber);
    }

    return tokens;
}