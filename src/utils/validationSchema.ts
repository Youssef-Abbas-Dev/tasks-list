import { z } from "zod";

// Create Task Schema
export const createTaskSchema = z.object({
    title: z.string({
        required_error: "title is required",
        invalid_type_error: "title should be of type string"
    })
        .min(2, { message: "title should be at least 2 characters long" })
        .max(200, { message: "title should be less than 200 characters" }),

    description: z.string({
        required_error: "description is required",
        invalid_type_error: "description should be of type string"
    })
        .min(4, { message: "description should be at least 4 characters long" })
});