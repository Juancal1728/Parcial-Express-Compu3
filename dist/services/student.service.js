"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentService = void 0;
const student_model_1 = require("../models/student.model");
class StudentService {
    async create(studentData) {
        try {
            const existStudent = await this.findByEmail(studentData.email);
            if (existStudent)
                return { message: `User ${studentData.email} already exist.` };
            const createStudent = await student_model_1.StudentModel.create(studentData);
            return createStudent;
        }
        catch (error) {
            console.log(this.handleError(error));
            throw error;
        }
    }
    async findAll() {
        try {
            const students = await student_model_1.StudentModel.find();
            return students;
        }
        catch (error) {
            console.log(this.handleError(error));
            throw error;
        }
    }
    async findByEmail(email) {
        try {
            const students = await student_model_1.StudentModel.findOne({ email });
            return students;
        }
        catch (error) {
            console.log(this.handleError(error));
            throw error;
        }
    }
    async updateStudent(email, student) {
        try {
            const updateStudent = await student_model_1.StudentModel.findOneAndUpdate({ email }, student, { returnOriginal: false });
            return updateStudent;
        }
        catch (error) {
            console.log(this.handleError(error));
            throw error;
        }
    }
    // TODO (Reto 1 - Bulk create): implementar.
    // Recibe un arreglo de StudentInput. Por cada uno:
    //   - si ya existe un estudiante con ese email (en BD o repetido en el mismo arreglo), agregarlo a "skipped" con un "reason"
    //   - si no existe, crearlo y agregarlo a "created"
    // Un solo estudiante inválido NO debe tumbar el resto del lote: atrapa el error por estudiante, no solo por el arreglo completo.
    async bulkCreate(studentsData) {
        const result = { created: [], skipped: [] };
    }
    // TODO (Reto 2 - Search): implementar.
    // Construye un filtro de Mongoose SOLO con los criterios presentes en el query (los ausentes no deben filtrar nada).
    // isActive: "true"/"false" -> boolean | minAge/maxAge -> rango con $gte/$lte sobre "age" | name -> coincidencia parcial case-insensitive con $regex
    async search(query) {
        try {
            const { isActive, minAge, maxAge, name } = query;
            const filter;
            /StudentDocument>;
        }
        finally {
        }
        throw new Error("Not implemented");
    }
    // TODO (Reto 3 - Delete): implementar.
    // Debe eliminar el estudiante con ese email y devolver el documento eliminado, o null si no existía.
    async deleteStudent(email) {
        try {
            const deletedStudent = await student_model_1.StudentModel.findOneAndDelete({ email });
            return deletedStudent;
        }
        catch (error) {
            console.log(this.handleError(error));
            throw error;
        }
    }
    handleError(error) {
        return {
            status: 404,
            error: error
        };
    }
}
exports.studentService = new StudentService();
//# sourceMappingURL=student.service.js.map