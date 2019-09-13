let arrayOfRoutineSkills;

function setup() {
    createCanvas(800, 800);
    canvasColor = color(122, 244, 222);
    noStroke();
    background(color(122, 244, 222));

    arrayOfRoutineSkills = [];
    libraryOfSkills = [];


    //"library of skills"
    fill(255);
    //prepopulate library of skills skills[]
    //draw library of skills

    libraryOfSkills = [
    new Skill("split leap forward","a",0,"leap",25,100,100,100),
    new Skill("tuck jump","a",0,"jump",200,100,100,100)
]
    


}

function mouseClicked() {



    //index = libraryOfSkills.findIndex(clickedSkill => clickedSkill.name === "tuck jump");

    //console.log(index); // 3
    //console.log("index above of skill");
    //console.log(libraryOfSkills[index]); // grape
    //console.log("skill above");




    //change numbers to variables
    //if mouse is in skill, add skill

    console.log(libraryOfSkills.length);
    for (let i = 0; i < libraryOfSkills.length; i++) {
        console.log("fired");
        
        if (mouseX >= libraryOfSkills[i].x && mouseX <= (libraryOfSkills[i].x + libraryOfSkills[i].width) && mouseY >= libraryOfSkills[i].y && mouseY <= (libraryOfSkills[i].y + libraryOfSkills[i].height)) {
            console.log("click");
        }
    }




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



    //adding skill

    //check where mouse is
    //set this.x & this.y off that?
    //arrayOfRoutineSkills.push(new Skill(find skill in library?));
    //or change this.x & this.y off mouse here?


}
