let arrayOfRoutineSkills;

function setup() {
    createCanvas(800, 800);
	canvasColor = color(122,244,222);
	noStroke();
    background(color(122,244,222)); 

    arrayOfRoutineSkills = [];

    fill(255);
    rect(70, 100, 100, 100);

    //build skills[]
    //display skills
    


}

function mouseClicked() {

    if (mouseX >= 70 && mouseX <= 170 && mouseY >= 100 && mouseY <= 200){
    
        if (arrayOfRoutineSkills.length == 0){
             arrayOfRoutineSkills.push(new Skill("split leap forward","a",0,"leap",50,400,100,100));
            // arrayOfRoutineSkills.push(skills[]);
            console.log(arrayOfRoutineSkills);
         }
        }
         

//adding skill

//check where mouse is
//set this.x & this.y off that?
//arrayOfRoutineSkills.push(new Skill(find skill in library?));
//or change this.x & this.y off mouse here?



if (mouseX >= 70 && mouseX <= 170 && mouseY >= 400 && mouseY <= 500){
    arrayOfRoutineSkills[0].eraseSkill();
    arrayOfRoutineSkills.pop();
    console.log(arrayOfRoutineSkills);
}



}