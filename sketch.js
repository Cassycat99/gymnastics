let arrayOfRoutineSkills;

function setup() {
    createCanvas(800, 800);
    canvasColor = color(122, 244, 222);
    noStroke();
    background(color(122, 244, 222));

    arrayOfRoutineSkills = [];
    libraryOfSkills = [];

    let state;
    let lastClick;

    //"library of skills"
    fill(255);
    //prepopulate library of skills skills[]
    //draw library of skills

    libraryOfSkills = [
    new Skill("split leap forward", "a", 0, "leap", 25, 100, 100, 100),
    new Skill("tuck jump", "a", 0, "jump", 200, 100, 100, 100)
]

    arrayOfRoutineSkills = [
     new Skill("missing skill", "0", 0, "empty", 25, 400, 100, 100),
        new Skill("missing skill", "0", 0, "empty", 150, 400, 100, 100),
         new Skill("missing skill", "0", 0, "empty", 275, 400, 100, 100),
         new Skill("missing skill", "0", 0, "empty", 400, 400, 100, 100),
         new Skill("missing skill", "0", 0, "empty", 25, 575, 100, 100),
         new Skill("missing skill", "0", 0, "empty", 150, 575, 100, 100),
         new Skill("missing skill", "0", 0, "empty", 275, 575, 100, 100),
         new Skill("smissing skill", "0", 0, "empty", 400, 575, 100, 100),
    ]

}

function mouseClicked() {
//need to add something to handle if nothing is clicked first

    //ADDING SKILLS
    //on mouse click, if the mouse is in skill in the library
    //the skill will be saved to variable lastClick
    //to then be clicked into its desired location

    console.log(libraryOfSkills.length);

    
        for (let i = 0; i < libraryOfSkills.length; i++) {

            if (mouseX >= libraryOfSkills[i].x && mouseX <= (libraryOfSkills[i].x + libraryOfSkills[i].width) && mouseY >= libraryOfSkills[i].y && mouseY <= (libraryOfSkills[i].y + libraryOfSkills[i].height)) {
                lastClick = libraryOfSkills[i];
            }
        }
    

    //checks if mouse if in routine of skills
    //check which space the mouse is within
    //sets space to variable LastClick
    
    if (mouseY >= 300) { //check if routine is being clicked to prevent library edits
    for (let i = 0; i < arrayOfRoutineSkills.length; i++) {

        if (mouseX >= arrayOfRoutineSkills[i].x && mouseX <= (arrayOfRoutineSkills[i].x + arrayOfRoutineSkills[i].width) && mouseY >= arrayOfRoutineSkills[i].y && mouseY <= (arrayOfRoutineSkills[i].y + arrayOfRoutineSkills[i].height)) {

            
            //change x y of last click to previous x and y of routine to update location
            lastClick.x = arrayOfRoutineSkills[i].x;
            lastClick.y = arrayOfRoutineSkills[i].y;
                        
            //change routine skill to be equal to previous click with new x and y
            arrayOfRoutineSkills[i] = lastClick;    
            console.log(lastClick);
            
            //draw replacement skill
            arrayOfRoutineSkills[i].drawSkill();
        }
    }
    }


    console.log(lastClick);
    console.log(arrayOfRoutineSkills);

    /*

        if (mouseX >= 70 && mouseX <= 170 && mouseY >= 100 && mouseY <= 200) {

            if (arrayOfRoutineSkills.length == 0) {
                //arrayOfRoutineSkills.push(new Skill("split leap forward","a",0,"leap",50,400,100,100));

                //let index;
                //index = libraryOfSkills.findIndex(s => s ==="spilt leap forward");
                // console.log(index);
                //console.log(libraryOfSkills.findIndex("split leap forward"));

                //find index
                //arrayOfRoutineSkills.push(libraryOfSkills[i]);
                //console.log(arrayOfRoutineSkills);
            } else if (arrayOfRoutineSkills.length == 1) {
                arrayOfRoutineSkills.push(new Skill("split leap forward", "a", 0, "leap", 210, 400, 100, 100));
                // arrayOfRoutineSkills.push(libraryOfSkills[][]);
                console.log(arrayOfRoutineSkills);
            }
        }





        //if mouse is in skill, remove skill
        if (mouseX >= 70 && mouseX <= 170 && mouseY >= 400 && mouseY <= 500) {

            arrayOfRoutineSkills[0].eraseSkill();
            arrayOfRoutineSkills.shift();
            console.log(arrayOfRoutineSkills);

        }

        if (mouseX >= 210 && mouseX <= 310 && mouseY >= 400 && mouseY <= 500) {


            if (arrayOfRoutineSkills.length == 1) {

                arrayOfRoutineSkills[0].eraseSkill();
                arrayOfRoutineSkills.shift();
            } else {
                arrayOfRoutineSkills[1].eraseSkill();
                arrayOfRoutineSkills.pop();
            }


            console.log(arrayOfRoutineSkills);
        }
    */


    //adding skill

    //check where mouse is
    //set this.x & this.y off that?
    //arrayOfRoutineSkills.push(new Skill(find skill in library?));
    //or change this.x & this.y off mouse here?


}
