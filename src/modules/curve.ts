
import Vector from "./vector";
/*
* Modeling a 3D Curve 
*/
class Curve {
    from: Vector.Vec3;
    to: Vector.Vec3;
    constructor(from: Vector.Vec3, to: Vector.Vec3) {
        this.from = from;
        this.to = to;
        if (!(this.from instanceof (Vector.Vec3))) {
            this.from = new Vector.Vec3(0, 0, 0);
        };
        if (!(this.to instanceof Vector.Vec3)) {
            this.to = to;
        }
    }

}

export = Curve;