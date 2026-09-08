"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRouter = void 0;
const express_1 = require("express");
const student_controller_1 = require("../controllers/student.controller");
exports.studentRouter = (0, express_1.Router)();
exports.studentRouter.get("/", student_controller_1.studentController.getAll);
exports.studentRouter.post("/create", student_controller_1.studentController.create);
// TODO (Reto 1 - Bulk create): agregar POST /students/bulk -> studentController.bulkCreate
exports.studentRouter.post("bulk-create", student_controller_1.studentController.bulkCreate);
// TODO (Reto 2 - Search): agregar GET /students/search -> studentController.search
// IMPORTANTE: debe registrarse ANTES que GET /:email, o Express interpretará "search" como un email.
exports.studentRouter.get("/search", student_controller_1.studentController.search);
exports.studentRouter.get('/:email', student_controller_1.studentController.getByEmail);
exports.studentRouter.put("/update/:email", student_controller_1.studentController.updateStudent);
// TODO (Reto 3 - Delete): agregar DELETE /students/delete/:email -> studentController.deleteStudent
exports.studentRouter.delete("/deleteStudent", student_controller_1.studentController.deleteStudent);
//# sourceMappingURL=student.route.js.map