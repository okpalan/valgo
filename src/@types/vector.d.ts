export = Vector;
declare namespace Vector {
    export interface IVec2 {
        x: number
        y: number
        add(vector: IVec2): IVec2
        subtract(vector: IVec2): IVec2
        divide(vector: IVec2): IVec2
        dotProduct(vector: IVec2): IVec2
        crossProduct(vector: IVec2): IVec2
        lenSquared(): number
        normalize(): IVec2
        scale(n: number): IVec2
        isNomalized(): boolean
        limit(): IVec2
        unit(vector: IVec2): IVec2
        rotX(theta: number): IVec2,
        rotY(theta: number): IVec2
        magnitude(): number
    }

    export interface IVec2Constructor {
        (x?: number, y?: number): IVec2// constructor 
        new(x?: number, y?: number): IVec2
        I: IVec2
        J: IVec2
    }
    export class Vec2 implements IVec2 {
        x: number;
        y: number;
        constructor(x: number, y: number);
        add(vector: IVec2): IVec2;
        subtract(vector: IVec2): IVec2;
        divide(vector: IVec2): IVec2;
        dotProduct(vector: IVec2): IVec2;
        crossProduct(vector: IVec2): IVec2;
        lenSquared(): number;
        normalize(): IVec2;
        scale(n: number): IVec2;
        isNomalized(): boolean;
        limit(): IVec2;
        unit(vector: IVec2): IVec2;
        rotX(theta: number): IVec2;
        rotY(theta: number): IVec2;
        magnitude(): number;

    }

    export interface IVec3 {
        x: number
        y: number
        z: number
    }
    export interface IVec3Constructor {
        (x?: number, y?: number, z?: number): IVec3Constructor
        new(x: number, y: number, z: number): IVec3
        I: IVec3
        J: IVec3,
        K: IVec3
    }
}