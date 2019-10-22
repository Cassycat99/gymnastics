//attempt to fix color error below
//fixed color, but not fill
let whiteColor;
let grayColor;

function setup() {
    whiteColor = color('rgb(255, 255, 255)');
    grayColor = color(200, 200, 200);
}

//attempt to fix color error above

class Skill {
    constructor(name, letter, salto, type, x, y, height, width, imageName) {

        this.name = name; //Name of skill
        this.letter = letter; //A, B, C (D, E, F)
        this.salto = salto; //Yes/No 0/1
        this.type = type; //Category (Mount, Leap, Jump, Dismount, etc)

        this.x = x;
        this.y = y;

        this.height = height;
        this.width = width;

        this.imageName = imageName;
        
        this.highlightColor = whiteColor;

        this.drawSkill()

    }


    drawSkill() {
        fill(color(200, 200, 200));
        
        rect(this.x, this.y, this.width, this.height);

        fill(color(42, 104, 112));
        textSize(10);
        text(this.name, this.x + 18, this.y + 88);

        //DRAW IMAGE
        //image(this.anim[this.curF], this.xLoc, this.yLoc);
        //console.log(this.imageName);
        //TRYING TO DRAW IMAGE, UNCOMMENT BELOW
        //image(this.imageName, this.x, this.y);

    }


    eraseSkill() {
        canvasColor = color(122, 244, 222);
        fill(canvasColor);
        rect(this.x - 5, this.y - 5, this.width + 10, this.height + 10);

        //take away from total point value w/ logic


    }

    drawHighlight() {
        fill(this.highlightColor);
        rect(this.x - 5, this.y - 5, this.width + 10, this.height + 10);
        this.drawSkill();
    }

}
