'use server'

import prisma from "../prisma"
import { redirect } from "next/navigation"

export async function createTask(formData: FormData) {

    console.log(formData)
    const name = formData.get("name")?.toString()
    const description = formData.get("description")?.toString()
    const priority = formData.get("priority")?.toString()
    const completion = formData.get("completion")?.toString()

    if (!name || !description || !priority || !completion) {
        return
    }
    
    const newTask =  await prisma.task.create({
        data: {
            name: name,
            description: description,
            priorty: priority,
            completion: completion
        }
    })

    redirect("/")
}