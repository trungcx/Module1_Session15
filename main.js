//common
//Luyen tap 02 - Bai 1:
function lab_exercise2_no1_fnt(){
    let myArray = [
        [1,2,1,24],
        [8,11,9,4],
        [7,0,7,27],
        [7,4,28,14],
        [3,10,26,7]
    ];
    console.log(myArray);
    let result = document.getElementById("lab_exercise2_no1_result");
    for(var childArrayIndex in myArray){
        result.innerHTML += `row ${childArrayIndex} <br>`;
        for(var childArrayElement of myArray[childArrayIndex]){
            result.innerHTML += childArrayElement + "<br>";
        }
    }
}









//randomArray
let randomArray = [];
let myArrayInput = document.getElementById("lab_exercise1_no1_input");
let greaterThan10_text = document.getElementById("lab_exercise1_no1_greaterThan10_text");
let maxValue_text = document.getElementById("lab_exercise1_no1_max_text");
let averageValue_text = document.getElementById("lab_exercise1_no1_average_text");
let reverseArray_text = document.getElementById("lab_exercise1_no1_reverse_text");
let negativeNumber_text = document.getElementById("lab_exercise1_no1_negativeCount_text");

//Bai 2. Từ điển
function lab_exercise1_no1_fnt() {
    let greaterThan10Count = 0;
    // creat randomArray
    for (let i = 0; i < 10; i++) {
        randomArray[i] = Math.floor(Math.random() * 100 - 50);
    }
    // Convert to string and display to text box
    myArrayInput.value = randomArray.join();
    //Bai 1: Greater than 10
    //Bai 3: Average
    let tempString = "";
    let sumValue = 0;
    for (var arrayValue of randomArray) {
        if (arrayValue >= 10) {
            tempString += arrayValue + ", ";
            greaterThan10Count++;
        }
        sumValue += arrayValue;
    }
    let averageValue = sumValue / randomArray.length;
    greaterThan10_text.innerHTML = `Bai1 : Have ${greaterThan10Count} value greater than 10 are :  <br>` + tempString;
    averageValue_text.innerHTML = `Bai 3: Average of array is : ${averageValue}`;
    //Bai 2: Max value and position
    maxValue_text.innerHTML = "Bai 2: Maximum value is : " + "<br>";
    let maxValue = 0;
    for (var arrayValue of randomArray) {
        if (arrayValue > maxValue) maxValue = arrayValue;
    }
    for (var arrayIndex in randomArray) {
        if (randomArray[arrayIndex] == maxValue) {
            maxValue_text.innerHTML += `${maxValue} at position ${arrayIndex} <br>`
        }
    }
    // Bai 4: Reverse array
    reverseArray_text.innerHTML = "Bai 4: Reverse array is: <br>" + randomArray.reverse();
    randomArray.reverse(); // Return to original
    // Bai 5: Count negative number
    tempString = "";
    for (var arrayValue of randomArray) {
        if (arrayValue < 0) {
            tempString += arrayValue + ", "
        }
    }
    negativeNumber_text.innerHTML = `Bai 5: Negative number are : <br> ` + tempString;
    // Bai 8: Sort array in decrease
    lab_exercise1_decreaseArray_fnt();

}
// Bai 6: Find number in array
function lab_exercise1_findNumber_btn_fnt() {
    let myNumber = parseInt(prompt("Nhap vao 1 so bat ky < 100 :"));
    if (randomArray.includes(myNumber) == true) {
        alert(`Có ${myNumber} trong mảng `);
        return myNumber;
    } else {
        alert(`Ko Có ${myNumber} trong mảng `);
        return null;
    }
}
// Bai 7: Find number in array and delete
function lab_exercise1_findAndDelete_btn_fnt() {
    let result = document.getElementById("lab_exercise1_no1_findAndDelete_text");
    let myNumber = lab_exercise1_findNumber_btn_fnt();
    if (myNumber != null) {
        while (randomArray.includes(myNumber) == true) {
            randomArray.splice(randomArray.indexOf(myNumber), 1);
        }
    }
    result.innerHTML = `New Array after Delete: ${myNumber} <br>` + randomArray.join();
    //restore randomArray after delete
    randomArray = myArrayInput.value.split(",");
}
// Bai 8: Sort array in decrease
function lab_exercise1_decreaseArray_fnt() {
    let decreaseArray_text = document.getElementById("lab_exercise1_no1_decreaseArray_text");
    let decreaseArray = [];
    randomArray = myArrayInput.value.split(",");
    // console.log(randomArray);
    for(var arrayIndex in randomArray){
        randomArray[arrayIndex] = parseInt(randomArray[arrayIndex]);
    }
    // console.log(randomArray);

    // let maxValue = 0;
    // let arrayLength = randomArray.length;

    // for (let i = 0; i < arrayLength; i++) {
    //     // console.log(randomArray);
    //     for (var arrayValue of randomArray) {
    //         if (arrayValue > maxValue) {
    //             maxValue = arrayValue;
    //             // console.log("maxValue in IF arrayValue > maxValue",maxValue);
    //         } else {
    //             // console.log("maxValue in ELSE",maxValue);
    //         }
    //     }
    //     decreaseArray[i] = maxValue;
    //     randomArray.splice(randomArray.indexOf(maxValue),1);
    //     maxValue = randomArray[0];
    //     // console.log("maxValue out IF redefined:", maxValue);
    // }
    // decreaseArray_text.innerHTML = `Bai 8:Decrease array ${decreaseArray.length} elements : <br>` + decreaseArray.join();

    randomArray.sort(function(a,b){
        return b-a;
    })
    console.log(randomArray);
}
