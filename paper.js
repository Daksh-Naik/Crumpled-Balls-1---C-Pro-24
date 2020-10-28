class paper {
    constructor (x, y) {
        var options = {
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
    this.body = Bodies.rectangle(x, y, 15, 15, options)
    this.width = 20;
    this.height = 20;
    //Matter.Bodies.circle(x, y, 20, 20, options);
    World.add(world, this.body);

    }

    display() {
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("pink");
        ellipse(0, 0, this.width, this.height);
        pop();
    }
}