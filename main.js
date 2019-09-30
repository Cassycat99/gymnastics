//DEFINING GLOBAL VARIABLES
let arrayOfRoutineSkills = [];
let libraryOfSkills = [];
let state; //static, in focus
let lastClick;
let routineX;
let routineY;

let swapLocation;

let x = 25;
let y = 100;
let incredment = 50;
let height = 100;
let width = 100;


//SETUP FOR CANVAS
function setup() {
    let canvas = createCanvas(800, 800);
    canvasColor = color(122, 244, 222);
    noStroke();
    background(color(122, 244, 222));

    fill(255);
    canvas.parent('large-container');


    //let canvas2 = createCanvas(800, 800);
    //canvasColor = color(222, 244, 222);
    //noStroke();
    //background(color(122, 244, 222));

    //canvas2.parent('large-container');

    libraryOfSkills = [
                new Skill("split leap forward", "a", 0, "leap", x, y, height, width),
                new Skill("tuck jump", "a", 0, "jump", (x + width + incredment), y, height, width),
                new Skill("pike jump", "b", 0, "jump", (x + 2 * width + 2 * incredment), y, height, width)
            ]


    arrayOfRoutineSkills = [
                new Skill("missing skill", "0", 0, "empty", 25, 400, 100, 100),
                new Skill("missing skill2", "0", 0, "empty", 150, 400, 100, 100),
                new Skill("missing skill", "0", 0, "empty", 275, 400, 100, 100),
                new Skill("missing skill", "0", 0, "empty", 400, 400, 100, 100),
                new Skill("missing skill", "0", 0, "empty", 25, 525, 100, 100),
                new Skill("missing skill", "0", 0, "empty", 150, 525, 100, 100),
                new Skill("missing skill", "0", 0, "empty", 275, 525, 100, 100),
                new Skill("missing skill", "0", 0, "empty", 400, 525, 100, 100),
            ]

    state = "static";

}




//MOUSE CLICKED
function mouseClicked() {


    //need to add swap

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


        //SWAP SET UP

        //WIP, checks mouse location, does orange highlight on focus
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
                
                let swap;
                swap = arrayOfRoutineSkills[i];
                //swap.name = arrayOfRoutineSkills[i].name;


                console.log(lastClick.name); //focus click
                console.log(swap.name); //new click

                console.log(swapLocation);
                console.log(i);
                                
                arrayOfRoutineSkills[swapLocation].name = lastClick.name;
                
                console.log(lastClick.name); //focus click
                console.log(swap.name); //new click
                
                arrayOfRoutineSkills[i].name = swap.name;
                                
                console.log(lastClick.name); //focus click
                console.log(swap.name); //new click

                console.log(swapLocation);
                console.log(i);

                /*
                //Changed variables rather than full replace because of errors
                //change routine skill to be equal to previous click
                arrayOfRoutineSkills[i].name = lastClick.name;
                arrayOfRoutineSkills[i].letter = lastClick.letter;
                arrayOfRoutineSkills[i].salto = lastClick.salto;
                arrayOfRoutineSkills[i].type = lastClick.type;
                                
                console.log(i);
                console.log(swapLocation);
                console.log(lastClick.name);
                console.log(swap.name);

                //arrayOfRoutineSkills[swapLocation].letter = arrayOfRoutineSkills[i].letter;
                //arrayOfRoutineSkills[swapLocation].salto = arrayOfRoutineSkills[i].salto;
               // arrayOfRoutineSkills[swapLocation].type = arrayOfRoutineSkills[i].type;
                
                console.log(i);
                console.log(swapLocation);
                console.log(lastClick.name);
                console.log(swap.name);*/

                arrayOfRoutineSkills[swapLocation].drawSkill();
                arrayOfRoutineSkills[i].drawSkill();




            }
        }
    }




}
