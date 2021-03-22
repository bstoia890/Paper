class Crumple {
    constructor(x, y, w, h) {
        var options = {
            isStatic: false,
            friction: .5,
            restitution: .3,
            density: 1.2
        }
        
        this.x = x;
        this.y = y;
        this.w = w
        this.h = h
        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);
        this.image = loadImage("paper.png");

    }
    display() {
        var crumplePos = this.body.position;
        if (keyWentDown("space")) {

            this.body.position.y = 595;
            this.body.position.x = 710;

        }
        push()
        translate(crumplePos.x, crumplePos.y);

        //rectMode(CENTER)
        
        
        //fill(128, 128, 128);
        //rect(0, 0, this.w, this.h);
        imageMode(CENTER)
        image(this.image, 0, 0, 150, 150);
        
        pop()
    }
}







