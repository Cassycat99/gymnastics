let arrayOfRoutineSkills;

function setup() {
    createCanvas(800, 800);
    canvasColor = color(122, 244, 222);
    noStroke();
    background(color(122, 244, 222));

    arrayOfRoutineSkills = [];

    //"library of skills"
    fill(255);
    rect(70, 100, 100, 100);
    fill(color(42, 104, 112));
    textSize(40);
    text("leap", 82, 165);

    //prepopulate library of skills skills[]
    //draw library of skills

    var arr = [
        {
            name: "one"
        }, {
            name: "two"
        }, {
            name: "three"
        }
];
    arr.push(new Skill("split leap forward", "a", 0, "leap", 50, 400, 100, 100));

    // Find Element in Array with a loop
    for (var x = 0; x < arr.length; x++) {
        if (arr[x].name === "spilt leap forward")
            console.log("Found leap");
    }

    // Find Element in Array with a funcion
    function isTwo(elem, index, arr) {
        return elem.name === "spilt leap forward";
    }

    console.log(arr.findIndex(isTwo));


}

function mouseClicked() {


    let fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
    fruits.push("grape");
    fruits.push(new Skill("split leap forward", "a", 0, "leap", 50, 400, 100, 100));
    console.log(fruits);
    console.log("fruits array above");

    let index = fruits.findIndex(fruitz => fruitz === "grape");

    console.log(index); // 3
    console.log("index above of grape");
    console.log(fruits[index]); // grape
    console.log("fruit above");

    index = fruits.findIndex(fruitz => fruitz === "split leap forward");

    console.log(index); // 3
    console.log("index above of skill");
    console.log(fruits[index]); // grape
    console.log("fruit above");




    //change numbers to variables
    //if mouse is in skill, add skill

    for (let i = 0; i < libraryOfSkills.length; i++) {
        if (mouseX >= libraryOfSkills[i].x && mouseX <= libraryOfSkills[i].x && mouseY >= libraryOfSkills[i].y && mouseY <= libraryOfSkills[i].y) {
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
