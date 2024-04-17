"use server";

import prisma from "@/utils/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { CreateTaskDto } from "./dtos";

// Create Task
export async function createTask({ title, description }: CreateTaskDto) {
    if (typeof title !== 'string' || title.length < 2) return;
    if (typeof description !== 'string' || description.length < 4) return;

    await prisma.task.create({
        data: { title, description }
    });

    revalidatePath("/");
    redirect("/");
}