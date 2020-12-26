class SlingShot{
    constructor(A, point){
        var options = {
            bodyA: A,
            pointB: point,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    birdreleased(){
        this.sling.bodyA=null;
    }

    display(){
        if(this.sling.bodyA){
        
        var XA = this.sling.bodyA.position;
        var XB = this.sling.pointB;
        strokeWeight(2);
        line(XA.x, XA.y, XB.x, XB.y);
    }
}
}