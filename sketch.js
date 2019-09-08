let arrayOfRoutineSkills;

function setup() {
    createCanvas(800, 800);
	canvasColor = color(122,244,222);
	noStroke();
    background(color(122,244,222)); 

    arrayOfRoutineSkills = [];

    fill(255);
    rect(70, 100, 100, 100);
    rect(210, 100, 100, 100);
    rect(490,100,240,100);
    rect(70,600,240,100);
    


}

function mouseClicked() {

    if (mouseX >= 70 && mouseX <= 170 && mouseY >= 100 && mouseY <= 200){
    
        if (arrayOfRoutineSkills.length == 0){
             arrayOfRoutineSkills.push(new Skill(
                "split leap forward",
                a,
                0,
                "leap",
                0,
                0,
                100,
                100,
                green
            ));
             
            console.log(arrayOfRoutineSkills);
         }


//adding skill

//check where mouse is
//set this.x & this.y off that?
//arrayOfRoutineSkills.push(new Skill(find skill in library?));
//or change this.x & this.y off mouse here?

}
}