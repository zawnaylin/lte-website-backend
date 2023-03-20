"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCourses = exports.getAllCounts = void 0;
const dotenv_safe_1 = __importDefault(require("dotenv-safe"));
dotenv_safe_1.default.config();
var Home_1 = require("@src/Pages/Home");
Object.defineProperty(exports, "getAllCounts", { enumerable: true, get: function () { return Home_1.getAllCounts; } });
Object.defineProperty(exports, "getCourses", { enumerable: true, get: function () { return Home_1.getCourses; } });
