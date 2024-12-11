let display = document.querySelector(".display");
let backspace = document.querySelector(".backspace");
let dot = document.querySelector(".dot")
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let zero = document.querySelector(".zero");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");
let sum = document.querySelector(".sum");
let multiplication = document.querySelector(".multiplication");
let subtraction = document.querySelector(".subtraction");
let divison = document.querySelector(".divison");

let firstNum = 0;
let operatorSign = 0;
let secondNum = 0;




console.log(display.textContent);

one.addEventListener("click", function() {
    if (display.textContent == "") {
        display.textContent = "1"
        console.log(display.textContent)
    } else {
        display.textContent = display.textContent + "1";
        console.log(display.textContent) 
    }

})

two.addEventListener("click", function() {
    if (display.textContent == "") {
        display.textContent = "2"
        console.log(display.textContent)
    } else {
        display.textContent = display.textContent + "2";
        console.log(display.textContent) 
    }

})

three.addEventListener("click", function() {
    if (display.textContent == "") {
        display.textContent = "3"
        console.log(display.textContent)
    } else {
        display.textContent = display.textContent + "3";
        console.log(display.textContent) 
    }

})

four.addEventListener("click", function() {
    if (display.textContent == "") {
        display.textContent = "4"
        console.log(display.textContent)
    } else {
        display.textContent = display.textContent + "4";
        console.log(display.textContent) 
    }

})

five.addEventListener("click", function() {
    if (display.textContent == "") {
        display.textContent = "5"
        console.log(display.textContent)
    } else {
        display.textContent = display.textContent + "5";
        console.log(display.textContent) 
    }

})

six.addEventListener("click", function() {
    if (display.textContent == "") {
        display.textContent = "6"
        console.log(display.textContent)
    } else {
        display.textContent = display.textContent + "6";
        console.log(display.textContent) 
    }

})

seven.addEventListener("click", function() {
    if (display.textContent == "") {
        display.textContent = "7"
        console.log(display.textContent)
    } else {
        display.textContent = display.textContent + "7";
        console.log(display.textContent) 
    }

})

eight.addEventListener("click", function() {
    if (display.textContent == "") {
        display.textContent = "8"
        console.log(display.textContent)
    } else {
        display.textContent = display.textContent + "8";
        console.log(display.textContent) 
    }

})

nine.addEventListener("click", function() {
    if (display.textContent == "") {
        display.textContent = "9"
        console.log(display.textContent)
    } else {
        display.textContent = display.textContent + "9";
        console.log(display.textContent) 
    }

})

zero.addEventListener("click", function() {
    if (display.textContent == "") {
        display.textContent = "0"
        console.log(display.textContent)
    } else {
        display.textContent = display.textContent + "0";
        console.log(display.textContent) 
    }

})


equal.addEventListener("click", function() {
    secondNum = display.textContent.replace((firstNum + operatorSign), "")
    operate(operatorSign);
    

})

clear.addEventListener("click", function() {
    if (display.textContent = "") {
        null
    } else {
        display.textContent == "selam"
        console.log(display.textContent) 
    }
    // burada kaydıgını tuttugun bazı variablelların da içinin boşaltılması lazım bu click'te onu ekle
    //bu fonksiyon nasıl calısıyor????
})

sum.addEventListener("click", function() {
    if (display.textContent == "") {
        display.textContent = "+"
        console.log(display.textContent)
    } else if (display.textContent.includes("x") || display.textContent.includes("+") || display.textContent.includes("-") || display.textContent.includes("/")) {
        secondNum = display.textContent.replace((firstNum + operatorSign), "")
        operate(operatorSign);
        firstNum = display.textContent;
        display.textContent = display.textContent + "+"
        operatorSign = "+"
    } else {
        firstNum = display.textContent;
        display.textContent = display.textContent + "+";
        console.log(firstNum)
        operatorSign = "+"
        console.log(operatorSign) 
    }

})

multiplication.addEventListener("click", function() {
    if (display.textContent == "") {
        display.textContent = "x"
        console.log(display.textContent)
    } else if (display.textContent.includes("x") || display.textContent.includes("+") || display.textContent.includes("-") || display.textContent.includes("/") )  {
        secondNum = display.textContent.replace((firstNum + operatorSign), "")
        operate(operatorSign);
        firstNum = display.textContent;
        display.textContent = display.textContent + "x"
        operatorSign = "x"
    } else {
        firstNum = display.textContent;
        display.textContent = display.textContent + "x";
        console.log(firstNum)
        operatorSign = "x"
        console.log(operatorSign) 
    }

})

subtraction.addEventListener("click", function() {
    if (display.textContent == "") {
        display.textContent = "-"
        console.log(display.textContent)
    } else if (display.textContent.includes("x") || display.textContent.includes("+") || display.textContent.includes("-") || display.textContent.includes("/")) {
        secondNum = display.textContent.replace((firstNum + operatorSign), "")
        operate(operatorSign);
        firstNum = display.textContent;
        display.textContent = display.textContent + "-"
        operatorSign = "-"
         
    } else {
        firstNum = display.textContent;
        display.textContent = display.textContent + "-";
        console.log(firstNum)
        operatorSign = "-"
        console.log(operatorSign)
    }

})

divison.addEventListener("click", function() {
    if (display.textContent == "") {
        display.textContent = "/"
        console.log(display.textContent)
    } else if (display.textContent.includes("x") || display.textContent.includes("+") || display.textContent.includes("-") || display.textContent.includes("/")) {
        secondNum = display.textContent.replace((firstNum + operatorSign), "")
        operate(operatorSign);
        firstNum = display.textContent;
        display.textContent = display.textContent + "/"
        operatorSign = "/"
    } else {
        firstNum = display.textContent;
        display.textContent = display.textContent + "/";
        console.log(firstNum)
        operatorSign = "/"
        console.log(operatorSign) 
    }

})

backspace.addEventListener("click", function() {
    if (display.textContent.slice(-1) == "x" || display.textContent.slice(-1) == "+" || display.textContent.slice(-1) == "-" || display.textContent.slice(-1) == "/" ) {
        display.textContent = display.textContent.slice(0, -1);
        firstNum = 0;
        operatorSign = 0;
        secondNum = 0;

    } else {
        display.textContent = display.textContent.slice(0, -1);
    }
    
        
})

dot.addEventListener("click", function() {
    if (display.textContent == "") {
        display.textContent = "."
        console.log(display.textContent)
    } else if (display.textContent.includes(".")) {
        null
    } else {
        display.textContent = display.textContent + ".";
        console.log(display.textContent) 
    }
})

function sumit(num1, num2) {
    return Number(num1) + Number(num2)
}

function multiplicationit(num1, num2) {
    return num1 * num2
}

function subtractionit(num1, num2) {
    return num1 - num2
}

function divisonit(num1, num2) {
    if (num2 == 0) {
        alert("Can't divide by zero!")
    } else return num1 / num2
    
}

function operate(operator) {
    if (operator == "-") {
        display.textContent = subtractionit(firstNum, secondNum);
    } else if (operator == "+") {
        display.textContent = sumit(firstNum, secondNum);
    } else if (operator == "x") {
        display.textContent = multiplicationit(firstNum, secondNum);
    } else if (operator == "/") {
        display.textContent = divisonit(firstNum, secondNum);
    }
}
