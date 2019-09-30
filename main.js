//DEFINING GLOBAL VARIABLES
let arrayOfRoutineSkills = [];
let libraryOfSkills = [];
let state; //static, in focus
let lastClick;
let routineX;
let routineY;

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
                new Skill("missing skill", "0", 0, "empty", 150, 400, 100, 100),
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
    console.log(state);

    //need to add swap

    //ADDING SKILLS
    //on mouse click, if the mouse is in skill in the library
    //and the state is static
    //the skill will be saved to variable lastClick
    //to then be clicked into its desired location




    if (state === "static") { //checks state when mouse is clicked


        //IF Static and clicked inside of a skill in the library
        for (let i = 0; i < libraryOfSkills.length; i++) {
            if (mouseX >= libraryOfSkills[i].x && mouseX <= (libraryOfSkills[i].x + libraryOfSkills[i].width) && mouseY >= libraryOfSkills[i].y && mouseY <= (libraryOfSkills[i].y + libraryOfSkills[i].height)) {
                lastClick = libraryOfSkills[i];
                state = "focus";
                libraryOfSkills[i].highlightColor = color(255, 255, 100);
                libraryOfSkills[i].drawHighlight();

                //draws highlight around routine
                for (let j = 0; j < arrayOfRoutineSkills.length; j++) {
                    arrayOfRoutineSkills[j].drawHighlight();

                }
            }
        }


        //Add if static and click is inside skill in routine for swap here

         //WIP, checks mouse location, does white highlight on skill selected and other skills, changes state
        //need to add color change for highlight
        //need to add variable for swap
        
        for (let i = 0; i < arrayOfRoutineSkills.length; i++) {
            if (mouseX >= arrayOfRoutineSkills[i].x && mouseX <= (arrayOfRoutineSkills[i].x + arrayOfRoutineSkills[i].width) && mouseY >= arrayOfRoutineSkills[i].y && mouseY <= (arrayOfRoutineSkills[i].y + arrayOfRoutineSkills[i].height)) {
                lastClick = arrayOfRoutineSkills[i];
                state = "focus";
                arrayOfRoutineSkills[i].highlightColor = color(255, 150, 20);
                arrayOfRoutineSkills[i].drawHighlight();
                
                
                for (let j = 0; j < arrayOfRoutineSkills.length; j++) {
                    arrayOfRoutineSkills[j].drawHighlight();
                    arrayOfRoutineSkills[j].highlightColor = color(255, 255, 255);
                }
            }
            
        }

    }



    //checks if state is focus
    //check which space the mouse is within
    //sets space to variable LastClick
    else if (state === "focus") {
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
                console.log(arrayOfRoutineSkills)
                arrayOfRoutineSkills[i].drawSkill();

            }
        }
    }

    console.log(state);


}
