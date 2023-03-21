"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIgcseCourses = exports.getEveryoneCourses = exports.getYouthCourses = exports.getJuniorCourses = exports.getCoursesCount = exports.getStudentCounts = void 0;
const Course_1 = require("../types/Course");
const Setup_1 = __importDefault(require("./Setup"));
const getStudentCounts = () => __awaiter(void 0, void 0, void 0, function* () {
    const { items } = yield Setup_1.default.getEntries({
        content_type: 'course',
        select: 'fields.students',
    });
    const studentsCount = items.reduce((totalStudentsCount, item) => totalStudentsCount + item.fields.students, 0);
    return studentsCount;
});
exports.getStudentCounts = getStudentCounts;
const getCoursesCount = () => __awaiter(void 0, void 0, void 0, function* () {
    const { total } = yield Setup_1.default.getEntries({
        content_type: 'course',
    });
    return total;
});
exports.getCoursesCount = getCoursesCount;
const getCourses = (isHomePage, category) => __awaiter(void 0, void 0, void 0, function* () {
    const { items } = yield Setup_1.default.getEntries({
        content_type: 'course',
        select: isHomePage ? 'fields.name' : 'fields.name,fields.students,fields.thumbnail',
        'fields.classCategory': category,
    });
    return items;
});
const getJuniorCourses = (isHomePage) => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield getCourses(isHomePage, Course_1.ClassCategory.Junior);
    return items.map((item) => item.fields.name);
});
exports.getJuniorCourses = getJuniorCourses;
const getYouthCourses = (isHomePage) => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield getCourses(isHomePage, Course_1.ClassCategory.Youth);
    return items.map((item) => item.fields.name);
});
exports.getYouthCourses = getYouthCourses;
const getEveryoneCourses = (isHomePage) => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield getCourses(isHomePage, Course_1.ClassCategory.Everyone);
    return items.map((item) => item.fields.name);
});
exports.getEveryoneCourses = getEveryoneCourses;
const getIgcseCourses = (isHomePage) => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield getCourses(isHomePage, Course_1.ClassCategory.IGCSE);
    return items.map((item) => item.fields.name);
});
exports.getIgcseCourses = getIgcseCourses;
