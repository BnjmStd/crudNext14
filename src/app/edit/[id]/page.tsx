import Box from "@/components/box"
import TaskForm from "@/components/task-form"
import prisma from "@/lib/prisma"

import { redirect } from "next/navigation"

export default async function UpdateTask ({ params }: { params: {
    id: string
}}) {

    const task = await prisma.task.findUnique({
        where: {
            id: params.id
        }
    })

    if (!task) {
        redirect('/')
    }

    return (
        <div className="py-6">
            <Box>
                <TaskForm task={task} />
            </Box>
        </div>
    )
}