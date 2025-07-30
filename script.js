let mainTitle = document.getElementById("main_title");
let titleInput = document.getElementById("title_input");
let noun = document.getElementById("noun");
let verb = document.getElementById("verb");
let adjective = document.getElementById("adjective");
let submitButton = document.getElementById("submit_button");
//notice that this isn't an "getElementById"
let form = document.querySelector("form");
let options = document.querySelectorAll(".adlib");
// console.log(options)
//I'm not sure how I'd grab the class, or ALL of the div class="adlib" either
let storyResult = document.getElementById("story_result");


//global variable!
let empty = true;

submitButton.onclick = function(event) {
    event.preventDefault();
    let userInputs = [titleInput.value,noun.value,verb.value,adjective.value];
    for (let i = 0; i < userInputs.length; i++) {
        if (userInputs[i].length != 0) {
            empty = false;
            console.log(empty)
        }
        else if (userInputs[i].length == 0) {
            empty = true;
            console.log(empty)
            //ends loop if an input field is false
            break;
        }    
    }
    //alerts user, but doesn't alter the page contents
    if (empty == true){
        alert("One of the fields is still empty!!!");
    }
    //alters page contents to the sentence
    else {
        form.style.display = "none";
        storyResult.innerHTML = "Last night I ate a " + noun.value + " and today I just had to " + verb.value + ". What a " + adjective.value + " day!"
        
    }


}


//changes the main title to match what is INPUTTED in the inputText space
titleInput.oninput = function(event) {
    // event.preventDefault()

    let inputText = titleInput.value;
    mainTitle.innerHTML = titleInput.value;
}