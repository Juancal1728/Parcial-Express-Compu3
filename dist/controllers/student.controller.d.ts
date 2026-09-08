import { Request, Response } from "express";
declare class StudentController {
    getAll(request: Request, response: Response): Promise<void>;
    create(request: Request, response: Response): Promise<void>;
    getByEmail(request: Request, response: Response): Promise<void>;
    updateStudent(request: Request, response: Response): Promise<void>;
    bulkCreate(request: Request, response: Response): Promise<void>;
    search(request: Request, response: Response): Promise<void>;
    deleteStudent(request: Request, response: Response): Promise<void>;
}
export declare const studentController: StudentController;
export {};
//# sourceMappingURL=student.controller.d.ts.map