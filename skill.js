class Skill {
    constructor(name, letter, salto, type, x, y, height, width) {

        this.name = name; //Name of skill
        this.letter = letter; //A, B, C (D, E, F)
        this.salto = salto; //Yes/No 0/1
        this.type = type; //Category (Mount, Leap, Jump, Dismount, etc)

        this.x = x;
        this.y = y;

        this.height = height;
        this.width = width;



        //image

        this.drawSkill()

    }


    drawSkill() {
        fill(200);
        rect(this.x, this.y, this.width, this.height);

        fill(color(42, 104, 112));
        textSize(10);
        text(this.name, this.x + 18, this.y + 88);

        //add to total point value w/ logic

    }


    eraseSkill() {
        fill(canvasColor);
        rect(this.x - 5, this.y - 5, this.width + 10, this.height + 10);

        //take away from total point value w/ logic

    }

    drawHighlight() {
        fill(300);
        rect(this.x - 5, this.y - 5, this.width + 10, this.height + 10);
        drawSkill();
    }

}
