"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vector_1 = __importDefault(require("./vector"));
var Curve = (function () {
    function Curve(from, to) {
        this.from = from;
        this.to = to;
        if (!(this.from instanceof (vector_1.default.Vec3))) {
            this.from = new vector_1.default.Vec3(0, 0, 0);
        }
        ;
    }
    return Curve;
}());
