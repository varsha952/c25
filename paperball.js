class Ball {
    constructor(x,y){
        var options = {
        restitution : 0.3 ,
        isStatic : false,
        density : 1.2,
        friction : 0.5  
        }
        this.image = loadImage("paper.png")
        this.body = Bodies.rectangle(x , y , 20,20, options)
        World.add(world,this.body)
    }
   display () {
     push()
     translate(this.body.position.x , this.body.position.y )
    ellipseMode(RADIUS)
    image(this.image , this.body.position.x , this.body.position.y , 20 ,20  )
    ellipse(0,0 , 20 ,20)
   pop()
   }
}