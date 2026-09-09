import { Request, Response } from "express";
import { StudentDocument, StudentInput, BulkCreateResult, StudentSearchQuery } from "../models/student.model";
import { studentService } from '../services/student.service';

class StudentController{

    public async getAll(request: Request, response: Response){
        try{
            const students: StudentDocument[] = await studentService.findAll();
            response.status(200).json(students);

        }catch(error){
            response.status(500).json(error);
        }
    }

    async create(request: Request, response: Response){
        try{
            const students = await studentService.create(request.body);
            response.json(students);
        }catch(error){
            response.json(error);
        }
    }

    async getByEmail( request: Request, response: Response){
        try{
            const email = request.params.email;
            if (typeof email !== "string") {
                response.status(400).json({ message: "Pon un email valido" });
                return;
            }
            const students = await studentService.findByEmail(email);
            response.json(students);
        }catch(error){
            response.json(error);
        }
    }

    async updateStudent(request: Request, response: Response){
        try{
            const email = request.params.email;
            if (typeof email !== "string") {
                response.status(400).json({ message: "Pon un email valido" });
                return;
            }
            const student: StudentDocument | null = await studentService.updateStudent(email, request.body as StudentInput);
            if(student === null){
                response.status(404).json({message: `User ${email} not found`});
                return;
            }
            response.json(student);
        }catch(error){
            response.json(error);
        }
    }

    async bulkCreate(request: Request, response: Response){
        try{
            const studentsData = request.body;
            if (!Array.isArray(studentsData)) {
                response.status(400).json({ message: "El body debe ser un arreglo de estudiantes" });
                return;
            }
            const result: BulkCreateResult = await studentService.bulkCreate(studentsData as StudentInput[]);
            response.status(201).json(result);
        }catch(error){
            response.status(500).json(error);
        }
    }

    // TODO (Reto 2 - Search): tomar los query params y delegar en studentService.search
    async search(request: Request, response: Response){
        try{
            const students = await studentService.search(request.query as StudentSearchQuery);
            response.json(students);
        }catch(error){
            response.status(500).json(error);
        }
    }

    // TODO (Reto 3 - Delete): validar el email y delegar en studentService.deleteStudent (404/mensaje si no existe)
    async deleteStudent(request: Request, response: Response){
        try{
            const email = request.params.email;
            if (typeof email !== "string") {
                response.status(400).json({ message: "Pon un email valido" });
                return;
            }
            const student: StudentDocument | null = await studentService.deleteStudent(email);
            if(student === null){
                response.status(404).json({message: `User ${email} not found`});
                return;
            }
            response.json(student);
            
        }
        catch(error){
            response.json(error);
        }
    }
}

export const studentController = new StudentController();