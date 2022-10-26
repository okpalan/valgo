declare namespace Vector {
    class Vec2 {
        x: number;
        y: number;
        constructor(x?: number, y?: number);
        static create(x: number, y: number): Vec2;
        static I: Vec2;
        static J: Vec2;
        add(vector: any): void;
        subtract(vector: any): void;
        div(vector: any): void;
        dot(vector: any): void;
        crossProduct(vector: any): void;
        scale(scalar: number): void;
        lenSquared(): number;
        magnitude(): number;
        normalize(): void;
        isNotZero(): boolean;
        limit(lim: number): void;
        unit(): void;
        fromArray(arr: number[]): Vec2;
        toArray(): number[];
        clone(): Vec2;
        toString(): string;
    }
    class Vec3 {
        x: number;
        y: number;
        z: number;
        constructor(x?: number, y?: number, z?: number);
        static I: Vec3;
        static J: Vec3;
        static K: Vec3;
        scale(scalar: any): void;
        add(vector: any): void;
        subtract(vector: any): void;
        dot(vector: any): void;
        div(vector: any): void;
        lenSquared(): number;
        magnitude(): number;
        normalize(): void;
        isNormalized(): boolean;
        limit(lim: any): void;
        cross(vector: any): Vec3;
        unit(): void;
        fromArray(arr: any): Vec3;
        toArray(): number[];
        clone(): Vec3;
    }
}
