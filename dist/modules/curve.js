"use strict";
var Curve = (function () {
    function Curve(from, to) {
        this.from = from;
        this.to = Curve.curve(this.from, to);
    }
    Curve.curve = function (v, t) {
        return new Vector.Vec3(t * v.x, t * v.y, t * v.z);
    };
    return Curve;
}());
