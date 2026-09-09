"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentController = void 0;
const student_service_1 = require("../services/student.service");
class StudentController {
    async getAll(request, response) {
        try {
            const students = await student_service_1.studentService.findAll();
            response.status(200).json(students);
        }
        catch (error) {
            response.status(500).json(error);
        }
    }
    async create(request, response) {
        try {
            const students = await student_service_1.studentService.create(request.body);
            response.json(students);
        }
        catch (error) {
            response.json(error);
        }
    }
    async getByEmail(request, response) {
        try {
            const email = request.params.email;
            if (typeof email !== "string") {
                response.status(400).json({ message: "Pon un email valido" });
                return;
            }
            const students = await student_service_1.studentService.findByEmail(email);
            response.json(students);
        }
        catch (error) {
            response.json(error);
        }
    }
    async updateStudent(request, response) {
        try {
            const email = request.params.email;
            if (typeof email !== "string") {
                response.status(400).json({ message: "Pon un email valido" });
                return;
            }
            const student = await student_service_1.studentService.updateStudent(email, request.body);
            if (student === null) {
                response.status(400).json({ message: `User ${email} not found` });
            }
            response.json(student);
        }
        catch (error) {
            response.json(error);
        }
    }
    async bulkCreate(request, response) {
        try {
            const studentsData = request.body;
            if (!Array.isArray(studentsData)) {
                response.status(400).json({ message: "El body debe ser un arreglo de estudiantes" });
                return;
            }
            const result = await student_service_1.studentService.bulkCreate(studentsData);
            response.status(201).json(result);
        }
        catch (error) {
            response.status(500).json(error);
        }
    }
    // TODO (Reto 2 - Search): tomar los query params y delegar en studentService.search
    async search(request, response) {
        try {
            const students = await student_service_1.studentService.search(request.query);
            response.json(students);
        }
        catch (error) {
            response.status(500).json(error);
        }
    }
    // TODO (Reto 3 - Delete): validar el email y delegar en studentService.deleteStudent (404/mensaje si no existe)
    async deleteStudent(request, response) {
        try {
            const email = request.params.email;
            if (typeof email !== "string") {
                response.status(400).json({ message: "Pon un email valido" });
                return;
            }
            const student = await student_service_1.studentService.deleteStudent(email);
            if (student === null) {
                response.status(404).json({ message: `User ${email} not found` });
            }
            response.json(student);
        }
        catch (error) {
            response.json(error);
        }
    }
}
exports.studentController = new StudentController();
//# sourceMappingURL=student.controller.js.map