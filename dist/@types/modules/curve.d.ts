import Vector from "./vector";
declare class Curve {
    from: Vector.Vec3;
    to: Vector.Vec3;
    constructor(from: Vector.Vec3, to: Vector.Vec3);
}
export = Curve;
