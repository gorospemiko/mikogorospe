const textarea = document.querySelector('.ingredient-area');
const inputField = document.querySelector('.i-have-input');
const submitButton = document.getElementById('submit');
textarea.addEventListener('input', function () {
    this.style.height = 'auto'; 
    this.style.height = (this.scrollHeight) + 'px';
});
//Practicing Dry principle refactoring (DONT REPEAT YOURSELF)
function digitRemover(string_inputted) {
    //if it has decimal value it will the value of lookfordecimal = 0 or where the decimal begin if thers no decimal it will return -1 
    var lookfor_decimal = string_inputted.search(/\d+\.\d+/);
    if (lookfor_decimal !== -1){
        var text_ingredients = string_inputted.replace(/.*?\d+\.\d+\s*/g, '').trim(); //removes evary on the index it found and the text before it then trim the space between if have
    }
    else{
        var text_ingredients = string_inputted.replace(/^\D*\d+/, '').trim(); //removes evary on the index it found and the text before it then trim the space between if have
    }
    //console.log(text_ingredients);
    return text_ingredients;
}

//DRY PRINCIPLE ULIT
function digitGetter(getDigitfromText){
    //hanapin ang digit sa parameter gamit ang regular expression na /\d/ meaning ay \d = digit / / = start to end of string
    var digitIndexGet = getDigitfromText.search(/\d/);
    //get natin lenght
    var digitLenghtGet = getDigitfromText.lenght;
    //trim natin gamit yung nakuwang index sa search tapos hanggang dulo ng lenght
    var stringCutterStart = getDigitfromText.substring(digitIndexGet, digitLenghtGet);
    //parse na para makuwa yung number value lang ng string
    var digitParse = parseFloat(stringCutterStart);
    //modulus shempre anything modular into 1 is == 0 unless its float/decimal 
    let finalDigitValue = (digitParse % 1 === 0) ? Number(digitParse.toFixed(0)) : Number(digitParse.toFixed(2)); //coverted back to number kasi kapag ginamit yung toFixed nagigigng string
    //console.log(finalDigitValue);
    return finalDigitValue;
}

function trimmer(numberValue){
    //remove any whitespace and fixed the value into 2
    const ingredients_inputted = numberValue.value.trim();
    return ingredients_inputted;
}
submitButton.addEventListener('click', function() {
    const resultsContainer = document.getElementById("results-container"); 
    resultsContainer.classList.add("results-container");
    resultsContainer.innerHTML = "";

    const ingredients = trimmer(textarea);
    const ingredientYouHave = trimmer(inputField);

    //seperate the string by enter and put it in array
    const values = ingredients.split('\n');
    //get the value in float

    //get the numeric value of ingredientYouHave that has been trimmed
    var ingredient_value_final = digitGetter(ingredientYouHave);
    
    //get the string value of ingredientYouHave that has been trimmed
    var ingredients_string_final = digitRemover(ingredientYouHave); //note 10/17/2024 kunin yung value para ma i compare  
    /*
        var search_for_value = string_new_values_test.search(/const text_ingredients_have/i);*///might be used later for search of the valeu of ingredients have using .search

    
    if (ingredients === "" || ingredientYouHave === "") {
        alert("Please fill in both fields.");
        return;
    }

    var finalValuesArray = [];

    values.forEach(function(arrayContainer){
        finalValues = digitGetter(arrayContainer);
        //finalValuesArray.push(finalValues); 
        finalValuesArray.push(finalValues); 
    });//lagay lang natin sa array yung values nya seperate ng foreach para ma render agad lahat ng value



    var multiplier = null;
    var matchingIndex = -1;
    for (var i = 0; i < values.length; i++) {
        var finalString = digitRemover(values[i]);
        if (finalString.includes(ingredients_string_final)) {
            multiplier = ingredient_value_final / finalValuesArray[i];
            
            matchingIndex = i;
            console.log(matchingIndex);
            break;
        }
    }

    if (multiplier === null) {
        console.error("Couldn't find a matching ingredient to calculate the multiplier");
        return;
    }



    values.forEach(function(newvalues, index) {
        //create div and assign it's id
        const containerforvalues = document.createElement("div");
        containerforvalues.className = "containerforvalues";
        //assign the function value to get the value of text_ingredients
        var finalString= digitRemover(newvalues);



    

    //get the value of the string by index for example the value of ingredients_string_final = 'miko' then in search ('23   miko') the value of searchString will be 5
        //var searchString = finalString.search(ingredients_string_final); 
        
        


        //computaion
        var results = (multiplier * finalValuesArray[index]).toFixed(2);
        console.log(results, finalString);
        //var results = (finalValues/ingredient_value_final).toFixed(2);

        containerforvalues.innerHTML = `<p>${results} ${finalString}</p>`;
        resultsContainer.appendChild(containerforvalues);
    });
    multiplier = null;
});