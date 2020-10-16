class Box{
    constructor(x, y, width, height) {
        var options = {
            restitution:0.8,
            friction:0.8,
            density:0.1       
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        push();
        fill("blue")
        rect(this.body.position.x, this.body.position.y, this.width, this.heigt)
        pop();
      }
}