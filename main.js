//DEFINING GLOBAL VARIABLES
let arrayOfRoutineSkills = [];
let libraryOfSkills = [];
let state; //static, in focus
let lastClick;
let routineX;
let routineY;
let startValue;

let swapLocation;

let x = 25;
let y = 100;
let incredment = 5;
let height = 100;
let width = 100;

//let canvas2;
let canvas;


/*
var s = function (p) {

    p.setup = function () {
        p.createCanvas(800, 800);
        p.noStroke();
        p.background(p.color(122, 244, 222));



    libraryOfSkills = [
                new Skill("split leap forward", "a", "nonsalto", "leap", x, y, height, width),
                new Skill("tuck jump", "a", "nonsalto", "jump", (x + width + incredment), y, height, width),
                new Skill("pike jump", "b", "nonsalto", "jump", (x + 2 * width + 2 * incredment), y, height, width),
                new Skill("360 turn", "a", "nonsalto", "turn", (x + 3 * width + 3 * incredment), y, height, width),
                new Skill("540 turn", "b", "nonsalto", "turn", (x + 4 * width + 4 * incredment), y, height, width)
            ]
    }
    
    p.mouseClicked = function(){
        //ADDING SKILLS
    //on mouse click, if the mouse is in skill in the library
    //and the state is static
    //the skill will be saved to variable lastClick
    //to then be clicked into its desired location




    if (state === "static") { //checks state when mouse is clicked


        //IF Static and clicked inside of a skill in the library
        //it will be highlighted
        for (let i = 0; i < libraryOfSkills.length; i++) {
            if (mouseX >= libraryOfSkills[i].x && mouseX <= (libraryOfSkills[i].x + libraryOfSkills[i].width) && mouseY >= libraryOfSkills[i].y && mouseY <= (libraryOfSkills[i].y + libraryOfSkills[i].height)) {
                lastClick = libraryOfSkills[i];
                state = "focusLibrary";
                libraryOfSkills[i].highlightColor = color(255, 255, 100);
                libraryOfSkills[i].drawHighlight();

                //draws highlight around routine
                for (let j = 0; j < arrayOfRoutineSkills.length; j++) {
                    arrayOfRoutineSkills[j].drawHighlight();

                }
            }
        }


        //SWAP

        //checks mouse location, does orange highlight on focus
        //plan is to create an additional state depending on what was clicked 1st
        //to determine if a swap should happen or just regular replacement

        for (let i = 0; i < arrayOfRoutineSkills.length; i++) {
            if (mouseX >= arrayOfRoutineSkills[i].x && mouseX <= (arrayOfRoutineSkills[i].x + arrayOfRoutineSkills[i].width) && mouseY >= arrayOfRoutineSkills[i].y && mouseY <= (arrayOfRoutineSkills[i].y + arrayOfRoutineSkills[i].height)) {
                lastClick = arrayOfRoutineSkills[i];
                swapLocation = i;
                state = "focusRoutine";
                arrayOfRoutineSkills[i].highlightColor = color(255, 150, 20);
                arrayOfRoutineSkills[i].drawHighlight();

                for (let j = 0; j < arrayOfRoutineSkills.length; j++) {
                    arrayOfRoutineSkills[j].drawHighlight();
                    arrayOfRoutineSkills[j].highlightColor = color(255, 255, 255);
                }
            }

        }

    }


    //IF Focus and clicked inside of a skill in the routine
    //it will be updated to the previous click

    //checks if state is focus
    //check which space the mouse is within
    //sets space to variable LastClick
    else if (state === "focusLibrary") {
        state = "static"
        //erases and redraws skill in library to remove highlight
        lastClick.eraseSkill();
        lastClick.drawSkill();

        //removes highlight by erasing all skills and redrawing them
        for (let i = 0; i < arrayOfRoutineSkills.length; i++) {
            arrayOfRoutineSkills[i].eraseSkill();
            arrayOfRoutineSkills[i].drawSkill();
        }
        //state is now visually set back to static


        //checks through all elements in the routine
        for (let i = 0; i < arrayOfRoutineSkills.length; i++) {
            if (mouseX >= arrayOfRoutineSkills[i].x && mouseX <= (arrayOfRoutineSkills[i].x + arrayOfRoutineSkills[i].width) && mouseY >= arrayOfRoutineSkills[i].y && mouseY <= (arrayOfRoutineSkills[i].y + arrayOfRoutineSkills[i].height)) {

                //Changed variables rather than full replace because of errors
                //change routine skill to be equal to previous click
                arrayOfRoutineSkills[i].name = lastClick.name;
                arrayOfRoutineSkills[i].letter = lastClick.letter;
                arrayOfRoutineSkills[i].salto = lastClick.salto;
                arrayOfRoutineSkills[i].type = lastClick.type;

                arrayOfRoutineSkills[i].drawSkill();

            }
        }
    } else if (state === "focusRoutine") {

        state = "static"
        //erases and redraws skill in library to remove highlight
        lastClick.eraseSkill();
        lastClick.drawSkill();

        //removes highlight by erasing all skills and redrawing them
        for (let i = 0; i < arrayOfRoutineSkills.length; i++) {
            arrayOfRoutineSkills[i].eraseSkill();
            arrayOfRoutineSkills[i].drawSkill();
        }
        //state is now visually set back to static



        //checks through all elements in the routine
        for (let i = 0; i < arrayOfRoutineSkills.length; i++) {
            if (mouseX >= arrayOfRoutineSkills[i].x && mouseX <= (arrayOfRoutineSkills[i].x + arrayOfRoutineSkills[i].width) && mouseY >= arrayOfRoutineSkills[i].y && mouseY <= (arrayOfRoutineSkills[i].y + arrayOfRoutineSkills[i].height)) {

                //store vairables for swapping
                let swapName = arrayOfRoutineSkills[i].name;
                let swapLetter = arrayOfRoutineSkills[i].letter;
                let swapSalto = arrayOfRoutineSkills[i].salto;
                let swapType = arrayOfRoutineSkills[i].type;

                // swapLocation = focus click
                // i = new click

                //take focus click and make name equal to new click
                arrayOfRoutineSkills[i].name = arrayOfRoutineSkills[swapLocation].name;
                arrayOfRoutineSkills[i].letter = arrayOfRoutineSkills[swapLocation].letter;
                arrayOfRoutineSkills[i].salto = arrayOfRoutineSkills[swapLocation].salto;
                arrayOfRoutineSkills[i].type = arrayOfRoutineSkills[swapLocation].type;

                //take new click and make equal to stored variables
                arrayOfRoutineSkills[swapLocation].name = swapName;
                arrayOfRoutineSkills[swapLocation].letter = swapLetter;
                arrayOfRoutineSkills[swapLocation].salto = swapSalto;
                arrayOfRoutineSkills[swapLocation].type = swapType;


                arrayOfRoutineSkills[swapLocation].drawSkill();
                arrayOfRoutineSkills[i].drawSkill();


            }
        }
    }


    //sets start value after all changes have been made and the state is in static
    if (state === "static") { //checks state when mouse is clicked

        setStartValue(); //sets and draws start value of routine
    }

    }


}

var myp5 = new p5(s, 'large-container');

var t = function (p) {

    t.setup = function () {
        t.createCanvas(800, 800);
        t.noStroke();
        t.background(t.color(0, 0, 0));
        
        
        
    }
    
        t.mouseClicked = function(){
        //ADDING SKILLS
    //on mouse click, if the mouse is in skill in the library
    //and the state is static
    //the skill will be saved to variable lastClick
    //to then be clicked into its desired location




    if (state === "static") { //checks state when mouse is clicked


        //IF Static and clicked inside of a skill in the library
        //it will be highlighted
        for (let i = 0; i < libraryOfSkills.length; i++) {
            if (mouseX >= libraryOfSkills[i].x && mouseX <= (libraryOfSkills[i].x + libraryOfSkills[i].width) && mouseY >= libraryOfSkills[i].y && mouseY <= (libraryOfSkills[i].y + libraryOfSkills[i].height)) {
                lastClick = libraryOfSkills[i];
                state = "focusLibrary";
                libraryOfSkills[i].highlightColor = color(255, 255, 100);
                libraryOfSkills[i].drawHighlight();

                //draws highlight around routine
                for (let j = 0; j < arrayOfRoutineSkills.length; j++) {
                    arrayOfRoutineSkills[j].drawHighlight();

                }
            }
        }


        //SWAP

        //checks mouse location, does orange highlight on focus
        //plan is to create an additional state depending on what was clicked 1st
        //to determine if a swap should happen or just regular replacement

        for (let i = 0; i < arrayOfRoutineSkills.length; i++) {
            if (mouseX >= arrayOfRoutineSkills[i].x && mouseX <= (arrayOfRoutineSkills[i].x + arrayOfRoutineSkills[i].width) && mouseY >= arrayOfRoutineSkills[i].y && mouseY <= (arrayOfRoutineSkills[i].y + arrayOfRoutineSkills[i].height)) {
                lastClick = arrayOfRoutineSkills[i];
                swapLocation = i;
                state = "focusRoutine";
                arrayOfRoutineSkills[i].highlightColor = color(255, 150, 20);
                arrayOfRoutineSkills[i].drawHighlight();

                for (let j = 0; j < arrayOfRoutineSkills.length; j++) {
                    arrayOfRoutineSkills[j].drawHighlight();
                    arrayOfRoutineSkills[j].highlightColor = color(255, 255, 255);
                }
            }

        }

    }


    //IF Focus and clicked inside of a skill in the routine
    //it will be updated to the previous click

    //checks if state is focus
    //check which space the mouse is within
    //sets space to variable LastClick
    else if (state === "focusLibrary") {
        state = "static"
        //erases and redraws skill in library to remove highlight
        lastClick.eraseSkill();
        lastClick.drawSkill();

        //removes highlight by erasing all skills and redrawing them
        for (let i = 0; i < arrayOfRoutineSkills.length; i++) {
            arrayOfRoutineSkills[i].eraseSkill();
            arrayOfRoutineSkills[i].drawSkill();
        }
        //state is now visually set back to static


        //checks through all elements in the routine
        for (let i = 0; i < arrayOfRoutineSkills.length; i++) {
            if (mouseX >= arrayOfRoutineSkills[i].x && mouseX <= (arrayOfRoutineSkills[i].x + arrayOfRoutineSkills[i].width) && mouseY >= arrayOfRoutineSkills[i].y && mouseY <= (arrayOfRoutineSkills[i].y + arrayOfRoutineSkills[i].height)) {

                //Changed variables rather than full replace because of errors
                //change routine skill to be equal to previous click
                arrayOfRoutineSkills[i].name = lastClick.name;
                arrayOfRoutineSkills[i].letter = lastClick.letter;
                arrayOfRoutineSkills[i].salto = lastClick.salto;
                arrayOfRoutineSkills[i].type = lastClick.type;

                arrayOfRoutineSkills[i].drawSkill();

            }
        }
    } else if (state === "focusRoutine") {

        state = "static"
        //erases and redraws skill in library to remove highlight
        lastClick.eraseSkill();
        lastClick.drawSkill();

        //removes highlight by erasing all skills and redrawing them
        for (let i = 0; i < arrayOfRoutineSkills.length; i++) {
            arrayOfRoutineSkills[i].eraseSkill();
            arrayOfRoutineSkills[i].drawSkill();
        }
        //state is now visually set back to static



        //checks through all elements in the routine
        for (let i = 0; i < arrayOfRoutineSkills.length; i++) {
            if (mouseX >= arrayOfRoutineSkills[i].x && mouseX <= (arrayOfRoutineSkills[i].x + arrayOfRoutineSkills[i].width) && mouseY >= arrayOfRoutineSkills[i].y && mouseY <= (arrayOfRoutineSkills[i].y + arrayOfRoutineSkills[i].height)) {

                //store vairables for swapping
                let swapName = arrayOfRoutineSkills[i].name;
                let swapLetter = arrayOfRoutineSkills[i].letter;
                let swapSalto = arrayOfRoutineSkills[i].salto;
                let swapType = arrayOfRoutineSkills[i].type;

                // swapLocation = focus click
                // i = new click

                //take focus click and make name equal to new click
                arrayOfRoutineSkills[i].name = arrayOfRoutineSkills[swapLocation].name;
                arrayOfRoutineSkills[i].letter = arrayOfRoutineSkills[swapLocation].letter;
                arrayOfRoutineSkills[i].salto = arrayOfRoutineSkills[swapLocation].salto;
                arrayOfRoutineSkills[i].type = arrayOfRoutineSkills[swapLocation].type;

                //take new click and make equal to stored variables
                arrayOfRoutineSkills[swapLocation].name = swapName;
                arrayOfRoutineSkills[swapLocation].letter = swapLetter;
                arrayOfRoutineSkills[swapLocation].salto = swapSalto;
                arrayOfRoutineSkills[swapLocation].type = swapType;


                arrayOfRoutineSkills[swapLocation].drawSkill();
                arrayOfRoutineSkills[i].drawSkill();


            }
        }
    }


    //sets start value after all changes have been made and the state is in static
    if (state === "static") { //checks state when mouse is clicked

        setStartValue(); //sets and draws start value of routine
    }

    }
}
 
var myp5 = new p5(t, 'left-container');
    
    */

//SETUP FOR CANVAS
function setup() {

    canvas2 = createCanvas(2000, 1000);
    noStroke();
    background(color(0, 0, 0));

    canvas2.parent('left-container');

    canvas = createCanvas(800, 800);
    noStroke();
    background(color(122, 244, 222));

    fill(255);
    canvas.parent('large-container');



    libraryOfSkills = [
                new Skill("split leap forward", "a", "nonsalto", "leap", x, y, height, width),
                new Skill("tuck jump", "a", "nonsalto", "jump", (x + width + incredment), y, height, width),
                new Skill("pike jump", "b", "nonsalto", "jump", (x + 2 * width + 2 * incredment), y, height, width),
                new Skill("360 turn", "a", "nonsalto", "turn", (x + 3 * width + 3 * incredment), y, height, width),
                new Skill("540 turn", "b", "nonsalto", "turn", (x + 4 * width + 4 * incredment), y, height, width)
            ]


    arrayOfRoutineSkills = [
                new Skill("missing skill", "0", "nonsalto", "empty", 25, 300, 100, 100),
                new Skill("missing skill", "0", "nonsalto", "empty", 150, 300, 100, 100),
                new Skill("missing skill", "0", "nonsalto", "empty", 275, 300, 100, 100),
                new Skill("missing skill", "0", "nonsalto", "empty", 400, 300, 100, 100),
                new Skill("missing skill", "0", "nonsalto", "empty", 25, 425, 100, 100),
                new Skill("missing skill", "0", "nonsalto", "empty", 150, 425, 100, 100),
                new Skill("missing skill", "0", "nonsalto", "empty", 275, 425, 100, 100),
                new Skill("missing skill", "0", "nonsalto", "empty", 400, 425, 100, 100),
            ]


    state = "static";
    startValue = 0.0;
    drawStartValue();

}

function setStartValue() {

    //CHECKS IF ALL SKILLS ARE MISSING, DON'T CALCULATE IF THEY ARE

    let missingSkills = 0;
    for (let i = 0; i < arrayOfRoutineSkills.length; i++) {
        if (arrayOfRoutineSkills[i].type === "empty") {
            missingSkills = missingSkills + 1;
        }
    }

    if (missingSkills != (arrayOfRoutineSkills.length)) {

        startValue = 10.0;

        let a = 0;
        let b = 0;
        let c = 0;

        let turnRequirement = "missing";
        let saltoRequirement = "missing";
        let dismountRequirement = "missing";

        //checks # of As, Bs, and Cs. turnRequirement and salto
        for (let i = 0; i < arrayOfRoutineSkills.length; i++) {
            //adds As
            if (arrayOfRoutineSkills[i].letter === "a") {
                a = a + 1;
            }
            //adds Bs
            if (arrayOfRoutineSkills[i].letter === "b") {
                b = b + 1;
            }
            //adds Cs
            if (arrayOfRoutineSkills[i].letter === "c") {
                c = c + 1;
            }
            //checks turn to be a B or C
            if (arrayOfRoutineSkills[i].type === "turn" && arrayOfRoutineSkills[i].letter === "b") {
                turnRequirement = "met";
            } else if (arrayOfRoutineSkills[i].type === "turn" && arrayOfRoutineSkills[i].letter === "c") {
                turnRequirement = "met";
            }
        }


        //CHANGE TO LOOK FOR LAST SALTO IN ROUTINE NOT LAST ELEMENT
        //checks dismount salto/last salto in routine
        if (arrayOfRoutineSkills[arrayOfRoutineSkills.length - 1].salto === "salto" && arrayOfRoutineSkills[arrayOfRoutineSkills.length - 1].letter === "b") {
            dismountRequirement = "met";
        } else if (arrayOfRoutineSkills[arrayOfRoutineSkills.length - 1].salto === "salto" && arrayOfRoutineSkills[arrayOfRoutineSkills.length - 1].letter === "c") {
            dismountRequirement = "met";
        }


        //CALCULATES START VALUE

        if (a <= 4) {

            startValue = startValue - (0.1 * (4.0 - a));
        }

        //1 B can equal a C in your routine
        if (c === 1) {
            b = b + 1;
        }

        if (c <= 2) {
            b = b + 1;
            startValue = (startValue - (0.2 * c));
        }

        if (b <= 4) {
            startValue = (startValue - (0.2 * (4.0 - b)));
        }


        if (turnRequirement === "missing") {
            startValue = startValue - 0.2;
        }

        drawStartValue();


    }

    //if all skills are missing, nothing is calculated
    else {
        startValue = 0;
    }


}

function drawStartValue() {

    //erase previous number
    canvasColor = color(122, 244, 222);
    fill(canvasColor);
    rect(25, 0, 200, 100);

    //draw new number    
    fill(color(42, 104, 112));
    textSize(50);
    text(startValue.toFixed(1), 50, 50);
}


//MOUSE CLICKED
function mouseClicked() {

    //ADDING SKILLS
    //on mouse click, if the mouse is in skill in the library
    //and the state is static
    //the skill will be saved to variable lastClick
    //to then be clicked into its desired location




    if (state === "static") { //checks state when mouse is clicked


        //IF Static and clicked inside of a skill in the library
        //it will be highlighted
        for (let i = 0; i < libraryOfSkills.length; i++) {
            if (mouseX >= libraryOfSkills[i].x && mouseX <= (libraryOfSkills[i].x + libraryOfSkills[i].width) && mouseY >= libraryOfSkills[i].y && mouseY <= (libraryOfSkills[i].y + libraryOfSkills[i].height)) {
                lastClick = libraryOfSkills[i];
                state = "focusLibrary";
                libraryOfSkills[i].highlightColor = color(255, 255, 100);
                libraryOfSkills[i].drawHighlight();

                //draws highlight around routine
                for (let j = 0; j < arrayOfRoutineSkills.length; j++) {
                    arrayOfRoutineSkills[j].drawHighlight();

                }
            }
        }


        //SWAP

        //checks mouse location, does orange highlight on focus
        //plan is to create an additional state depending on what was clicked 1st
        //to determine if a swap should happen or just regular replacement

        for (let i = 0; i < arrayOfRoutineSkills.length; i++) {
            if (mouseX >= arrayOfRoutineSkills[i].x && mouseX <= (arrayOfRoutineSkills[i].x + arrayOfRoutineSkills[i].width) && mouseY >= arrayOfRoutineSkills[i].y && mouseY <= (arrayOfRoutineSkills[i].y + arrayOfRoutineSkills[i].height)) {
                lastClick = arrayOfRoutineSkills[i];
                swapLocation = i;
                state = "focusRoutine";
                arrayOfRoutineSkills[i].highlightColor = color(255, 150, 20);
                arrayOfRoutineSkills[i].drawHighlight();

                for (let j = 0; j < arrayOfRoutineSkills.length; j++) {
                    arrayOfRoutineSkills[j].drawHighlight();
                    arrayOfRoutineSkills[j].highlightColor = color(255, 255, 255);
                }
            }

        }

    }


    //IF Focus and clicked inside of a skill in the routine
    //it will be updated to the previous click

    //checks if state is focus
    //check which space the mouse is within
    //sets space to variable LastClick
    else if (state === "focusLibrary") {
        state = "static"
        //erases and redraws skill in library to remove highlight
        lastClick.eraseSkill();
        lastClick.drawSkill();

        //removes highlight by erasing all skills and redrawing them
        for (let i = 0; i < arrayOfRoutineSkills.length; i++) {
            arrayOfRoutineSkills[i].eraseSkill();
            arrayOfRoutineSkills[i].drawSkill();
        }
        //state is now visually set back to static


        //checks through all elements in the routine
        for (let i = 0; i < arrayOfRoutineSkills.length; i++) {
            if (mouseX >= arrayOfRoutineSkills[i].x && mouseX <= (arrayOfRoutineSkills[i].x + arrayOfRoutineSkills[i].width) && mouseY >= arrayOfRoutineSkills[i].y && mouseY <= (arrayOfRoutineSkills[i].y + arrayOfRoutineSkills[i].height)) {

                //Changed variables rather than full replace because of errors
                //change routine skill to be equal to previous click
                arrayOfRoutineSkills[i].name = lastClick.name;
                arrayOfRoutineSkills[i].letter = lastClick.letter;
                arrayOfRoutineSkills[i].salto = lastClick.salto;
                arrayOfRoutineSkills[i].type = lastClick.type;

                arrayOfRoutineSkills[i].drawSkill();

            }
        }
    } else if (state === "focusRoutine") {

        state = "static"
        //erases and redraws skill in library to remove highlight
        lastClick.eraseSkill();
        lastClick.drawSkill();

        //removes highlight by erasing all skills and redrawing them
        for (let i = 0; i < arrayOfRoutineSkills.length; i++) {
            arrayOfRoutineSkills[i].eraseSkill();
            arrayOfRoutineSkills[i].drawSkill();
        }
        //state is now visually set back to static



        //checks through all elements in the routine
        for (let i = 0; i < arrayOfRoutineSkills.length; i++) {
            if (mouseX >= arrayOfRoutineSkills[i].x && mouseX <= (arrayOfRoutineSkills[i].x + arrayOfRoutineSkills[i].width) && mouseY >= arrayOfRoutineSkills[i].y && mouseY <= (arrayOfRoutineSkills[i].y + arrayOfRoutineSkills[i].height)) {

                //store vairables for swapping
                let swapName = arrayOfRoutineSkills[i].name;
                let swapLetter = arrayOfRoutineSkills[i].letter;
                let swapSalto = arrayOfRoutineSkills[i].salto;
                let swapType = arrayOfRoutineSkills[i].type;

                // swapLocation = focus click
                // i = new click

                //take focus click and make name equal to new click
                arrayOfRoutineSkills[i].name = arrayOfRoutineSkills[swapLocation].name;
                arrayOfRoutineSkills[i].letter = arrayOfRoutineSkills[swapLocation].letter;
                arrayOfRoutineSkills[i].salto = arrayOfRoutineSkills[swapLocation].salto;
                arrayOfRoutineSkills[i].type = arrayOfRoutineSkills[swapLocation].type;

                //take new click and make equal to stored variables
                arrayOfRoutineSkills[swapLocation].name = swapName;
                arrayOfRoutineSkills[swapLocation].letter = swapLetter;
                arrayOfRoutineSkills[swapLocation].salto = swapSalto;
                arrayOfRoutineSkills[swapLocation].type = swapType;


                arrayOfRoutineSkills[swapLocation].drawSkill();
                arrayOfRoutineSkills[i].drawSkill();


            }
        }
    }


    //sets start value after all changes have been made and the state is in static
    if (state === "static") { //checks state when mouse is clicked

        setStartValue(); //sets and draws start value of routine
    }


}
