import mongoose from "mongoose";
export interface StudentInput {
    name: string;
    age: number;
    email: string;
    isActive: boolean;
    nickname: string;
}
export interface StudentDocument extends StudentInput, mongoose.Document {
}
export interface BulkCreateResult {
    created: StudentDocument[];
    skipped: {
        email: string;
        reason: string;
    }[];
}
export interface StudentSearchQuery {
    isActive?: string;
    minAge?: string;
    maxAge?: string;
    name?: string;
}
export declare const StudentModel: mongoose.Model<StudentDocument, {}, {}, {}, mongoose.Document<unknown, {}, StudentDocument, {}, mongoose.DefaultSchemaOptions> & StudentDocument & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, StudentDocument>;
//# sourceMappingURL=student.model.d.ts.map