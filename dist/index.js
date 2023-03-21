"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutUsGetAllCounts = exports.HomeGetAllCounts = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var Counts_1 = require("./apis/Counts");
Object.defineProperty(exports, "HomeGetAllCounts", { enumerable: true, get: function () { return Counts_1.getAllCounts; } });
var Counts_2 = require("./apis/Counts");
Object.defineProperty(exports, "AboutUsGetAllCounts", { enumerable: true, get: function () { return Counts_2.getAllCounts; } });
