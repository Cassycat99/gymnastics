class Skill {
    constructor() {

        this.name; //Name of skill
        this.letter; //A, B, C (D, E, F)
        this.salto; //Yes/No
        this.type; //Category (Mount, Leap, Jump, Dismount, etc)

        this.x;
        this.y;

        this.height;
        this.width;

        this.fillColor;

        //image

        this.drawSkill()

    }


drawSkill(){
        fill(this.fillColor);
        rect(this.x,this.y,this.width,this.height);  
        
        
        //add to total point value w/ logic
        
    }

	
eraseSkill(){
    fill(canvasColor);
    rect(this.x,this.y,this.width,this.height);
    fill(42,104,112);
    rect(70,600,240,100);
    
    //take away from total point value w/ logic
    
}

}
