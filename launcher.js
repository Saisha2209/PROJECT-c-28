class LAUNCHER{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }
     release(){
      this.launcher.bodyA=null
    }

    display(){
        if (this.launcher.bodyA){
        var pointA = this.launcher.bodyA.position;
        var point = this.pointB
        strokeWeight(4);
       line(pointA.x, pointA.y, point.x, point.y);
    }
}
}