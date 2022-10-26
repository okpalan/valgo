

namespace Vector {
    export class Vec2 {
        constructor(public x: number = 0, public y: number = 0) {
        }
        static create(x: number, y: number) {
            return new Vec2(x, y)
        }
        static I = new Vec2(1, 0);
        static J = new Vec2(0, 1);
        add(vector) {
            this.x += vector.x;
            this.y += vector.x;
        }
        subtract(vector) {
            this.x -= vector.x;
            this.y -= vector.y;
        }
        div(vector) {
            this.x /= vector.x;
            this.y /= vector.y
        }
        dot(vector) {
            this.x *= vector.x;
            this.y *= vector.y
        }
        crossProduct(vector) {
            this.x /= vector.y;
            this.y /= vector.x;
        }
        scale(scalar: number) {
            this.x *= scalar;
            this.y *= scalar;
        }
        lenSquared(): number {
            return (this.x * this.x) + (this.y * this.y);
        }
        magnitude() {
            return Math.sqrt(this.lenSquared())
        }
        normalize() {
            var magnitude = this.magnitude();
            if (magnitude != 0) {
                this.div(magnitude);
            }
        }
        isNotZero() {
            var isNotZero = (this.x && this.y) !== 0;
            return this.lenSquared() >= 1 && isNotZero;
        }
        limit(lim: number) {
            if (this.magnitude() > lim) {
                this.normalize();
                this.dot(lim);
            }
        }
        unit() {
            this.x /= this.magnitude();
            this.y /= this.magnitude();
        }
        fromArray(arr: number[]) {
            return new Vec2(arr[0], arr[1])
        }
        toArray() {
            return [this.x, this.y]
        }
        clone() {
            return new Vec2(this.x, this.y)
        }
        toString() {
            return "<" + this.x + "," + this.y + '>'
        }
    }
    export class Vec3 {
        x!: number;
        y!: number;
        z!: number;
        constructor(x: number = 0, y: number = 0, z: number = 0) {

        }
        static I = new Vec3(1, 0, 0);
        static J = new Vec3(0, 1, 0);
        static K = new Vec3(0, 0, 1)
        scale(scalar) {
            this.x *= scalar;
            this.y *= scalar;
            this.z *= scalar;
        }
        add(vector) {
            this.x += vector.x;
            this.y += vector.y;
            this.z += vector.z;
        }
        subtract(vector) {
            this.x -= vector.x;
            this.y -= vector.y;
            this.z -= vector.z
        }
        dot(vector) {
            this.x *= vector.x;
            this.y *= vector.y;
            this.z *= vector.z;
        }
        div(vector) {
            this.x /= vector.x;
            this.y /= vector.y;
            this.z /= vector.z;
        }
        lenSquared() {
            return (this.x * this.x) + (this.y * this.y) + (this.z * this.z)
        }
        magnitude() {
            return Math.sqrt(this.lenSquared());
        }
        normalize() {
            var magnitude = this.magnitude();
            if (magnitude != 0) {
                this.div(magnitude);
            }
        }
        isNormalized() {
            var isNotZero = (this.x && this.y && this.z) !== 0;
            return this.lenSquared() >= 1 && isNotZero;
        }
        limit(lim) {
            if (this.magnitude() > lim) {
                this.normalize();
                this.dot(lim);
            }
        }
        cross(vector) {
            var x = this.y * vector.z - this.z * vector.y;
            var y = this.z * vector.x - this.x * vector.z;
            var z = this.x * vector.y - this.y * vector.x;
            return new Vec3(x, y, z)
        }
        unit() {
            this.x /= this.magnitude();
            this.y /= this.magnitude();
            this.z /= this.magnitude();
        }
        fromArray(arr) {
            return new Vec3(arr[0], arr[1]);
        }
        toArray() {
            return [this.x, this.y]
        }
        clone() {
            return new Vec3(this.x, this.y, this.z);
        }
        toString() {
            return '<' + this.x + ',' + this.y + ',' + this.z + '>'
        }
    }
}