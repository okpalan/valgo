"use strict";
var Vector;
(function (Vector) {
    var Vec2 = (function () {
        function Vec2(x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            this.x = x;
            this.y = y;
        }
        Vec2.create = function (x, y) {
            return new Vec2(x, y);
        };
        Vec2.prototype.add = function (vector) {
            this.x += vector.x;
            this.y += vector.x;
        };
        Vec2.prototype.subtract = function (vector) {
            this.x -= vector.x;
            this.y -= vector.y;
        };
        Vec2.prototype.divide = function (vector) {
            this.x /= vector.x;
            this.y /= vector.y;
        };
        Vec2.prototype.dot = function (vector) {
            this.x *= vector.x;
            this.y *= vector.y;
        };
        Vec2.prototype.crossProduct = function (vector) {
            this.x /= vector.y;
            this.y /= vector.x;
        };
        Vec2.prototype.scale = function (scalar) {
            this.x *= scalar;
            this.y *= scalar;
        };
        Vec2.prototype.lenSquared = function () {
            return (this.x * this.x) + (this.y * this.y);
        };
        Vec2.prototype.magnitude = function () {
            return Math.sqrt(this.lenSquared());
        };
        Vec2.prototype.normalize = function () {
            var magnitude = this.magnitude();
            if (magnitude != 0) {
                this.divide(magnitude);
            }
        };
        Vec2.prototype.isNotZero = function () {
            var isNotZero = (this.x && this.y) !== 0;
            return this.lenSquared() >= 1 && isNotZero;
        };
        Vec2.prototype.limit = function (lim) {
            if (this.magnitude() > lim) {
                this.normalize();
                this.dot(lim);
            }
        };
        Vec2.prototype.unit = function () {
            this.x /= this.magnitude();
            this.y /= this.magnitude();
        };
        Vec2.prototype.fromArray = function (arr) {
            return new Vec2(arr[0], arr[1]);
        };
        Vec2.prototype.toArray = function () {
            return [this.x, this.y];
        };
        Vec2.prototype.clone = function () {
            return new Vec2(this.x, this.y);
        };
        Vec2.prototype.toString = function () {
            return "<" + this.x + "," + this.y + '>';
        };
        Vec2.I = new Vec2(1, 0);
        Vec2.J = new Vec2(0, 1);
        return Vec2;
    }());
    Vector.Vec2 = Vec2;
    var Vec3 = (function () {
        function Vec3(x, y, z) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
        }
        Vec3.prototype.scale = function (scalar) {
            this.x *= scalar;
            this.y *= scalar;
            this.z *= scalar;
        };
        Vec3.prototype.add = function (vector) {
            this.x += vector.x;
            this.y += vector.y;
            this.z += vector.z;
        };
        Vec3.prototype.subtract = function (vector) {
            this.x -= vector.x;
            this.y -= vector.y;
            this.z -= vector.z;
        };
        Vec3.prototype.dot = function (vector) {
            this.x *= vector.x;
            this.y *= vector.y;
            this.z *= vector.z;
        };
        Vec3.I = new Vec3(1, 0, 0);
        Vec3.J = new Vec3(0, 1, 0);
        Vec3.K = new Vec3(0, 0, 1);
        return Vec3;
    }());
    Vector.Vec3 = Vec3;
})(Vector || (Vector = {}));
