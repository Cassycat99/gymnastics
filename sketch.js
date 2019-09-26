//defining global varaibles 
let arrayOfRoutineSkills = [];
let libraryOfSkills = [];
let state; //static, in focus
let lastClick;
let routineX;
let routineY;

function setup() {
    createCanvas(800, 800);
    canvasColor = color(122, 244, 222);
    noStroke();
    background(color(122, 244, 222));


    //"library of skills"
    fill(255);
    //prepopulate library of skills skills[]
    //draw library of skills

    libraryOfSkills = [
    new Skill("split leap forward", "a", 0, "leap", 25, 100, 100, 100),
   new Skill("tuck jump", "a", 0, "jump", 200, 100, 100, 100),
        new Skill("pike jump", "b", 0, "jump", 375, 100, 100, 100)
]

    arrayOfRoutineSkills = [
     new Skill("missing skill", "0", 0, "empty", 25, 400, 100, 100),
        new Skill("missing skill", "0", 0, "empty", 150, 400, 100, 100),
         new Skill("missing skill", "0", 0, "empty", 275, 400, 100, 100),
         new Skill("missing skill", "0", 0, "empty", 400, 400, 100, 100),
         new Skill("missing skill", "0", 0, "empty", 25, 575, 100, 100),
         new Skill("missing skill", "0", 0, "empty", 150, 575, 100, 100),
         new Skill("missing skill", "0", 0, "empty", 275, 575, 100, 100),
         new Skill("missing skill", "0", 0, "empty", 400, 575, 100, 100),
    ]

    state = "static"; //state is not defined at 46 but defined here??

}


function mouseClicked() {
    //console.log(state);

    //need to add something to handle if nothing is clicked first

    //ADDING SKILLS
    //on mouse click, if the mouse is in skill in the library
    //and the state is static
    //the skill will be saved to variable lastClick
    //to then be clicked into its desired location



    if (mouseY <= 300) { //checks mouse location
        if (state === "static") { //checks state (errored when included in if statement above)

            for (let i = 0; i < libraryOfSkills.length; i++) {
                if (mouseX >= libraryOfSkills[i].x && mouseX <= (libraryOfSkills[i].x + libraryOfSkills[i].width) && mouseY >= libraryOfSkills[i].y && mouseY <= (libraryOfSkills[i].y + libraryOfSkills[i].height)) {
                    lastClick = libraryOfSkills[i];
                    console.log(state);
                    state = "focus";
                    console.log(state);

                    //draws highlight around routine
                    for (let j = 0; j < arrayOfRoutineSkills.length; j++) {
                        arrayOfRoutineSkills[j].drawHighlight();
                        libraryOfSkills[i].drawHighlight();

                    }
                }
            }
        }
        console.log(state);
        if (state === "focus") {
            console.log(state);
            console.log("fired");
        }
    }



    //checks if mouse if in routine of skills
    //check which space the mouse is within
    //sets space to variable LastClick

    if (mouseY >= 300) { //check if routine is being clicked to prevent library edits
        if (state === "focus") {

            //erases and redraws skill in library to remove highlight
            lastClick.eraseSkill();
            lastClick.drawSkill();

            //removes highlight by erasing all skills and redrawing them
            for (let i = 0; i < arrayOfRoutineSkills.length; i++) {
                arrayOfRoutineSkills[i].eraseSkill();
                arrayOfRoutineSkills[i].drawSkill();
            }


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
                    console.log(state);
                    state = "static"
                    console.log(state);
                }
            }
        }
    }

    console.log(state);

}
