import { BulkCreateResult, StudentDocument, StudentInput, StudentSearchQuery } from "../models/student.model";
declare class StudentService {
    create(studentData: StudentDocument): Promise<StudentDocument | {
        message: string;
    }>;
    findAll(): Promise<StudentDocument[]>;
    findByEmail(email: string): Promise<(import("mongoose").Document<unknown, {}, StudentDocument, {}, import("mongoose").DefaultSchemaOptions> & StudentDocument & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    updateStudent(email: string, student: StudentInput): Promise<StudentDocument | null>;
    bulkCreate(studentsData: StudentInput[]): Promise<BulkCreateResult>;
    search(query: StudentSearchQuery): Promise<StudentDocument[]>;
    deleteStudent(email: string): Promise<StudentDocument | null>;
    handleError(error: any): {
        status: number;
        error: any;
    };
}
export declare const studentService: StudentService;
export {};
//# sourceMappingURL=student.service.d.ts.map