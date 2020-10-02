class Sling {
constructor(body1,body2){
    var options = {
        bodyA: body1,
        bodyB: body2,
        length: 10,
        stiffness: 0.04
 }

this.band = Constraint.create(options)
World.add(world, this.band)




}

display(){
   var point1 = this.band.bodyA.position
   var point2 = this.band.bodyB.position
    strokeWeight(5)
    line(point1.x,point1.y,point2.x,point2.y)
}




}