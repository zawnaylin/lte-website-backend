export declare enum ClassCategory {
    Junior = "Junior",
    Youth = "Youth",
    Everyone = "Everyone",
    IGCSE = "IGCSE"
}
export interface BaseCourse {
    name: string;
}
export interface CourseDetail extends BaseCourse {
    students: number;
}
export declare const getStudentCounts: () => Promise<number>;
export declare const getCoursesCount: () => Promise<number>;
export declare const getJuniorCourses: (isHomePage: boolean) => Promise<string[]>;
export declare const getYouthCourses: (isHomePage: boolean) => Promise<string[]>;
export declare const getEveryoneCourses: (isHomePage: boolean) => Promise<string[]>;
export declare const getIgcseCourses: (isHomePage: boolean) => Promise<string[]>;
//# sourceMappingURL=Course.d.ts.map