import Box from "@/components/box";
import TaskCard from "@/components/task-card";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { Suspense } from "react";

export default async function Homepage()  {
    return (
        <div className="my-6">
            <Box>
                <div className="flex items-center w-full justify-between">
                    <div>
                        <h1 className="text-xl font-medium text-gray-500">Task</h1>
                        <p className="font-light text-gray-400 text-md">
                            See all task listed below
                        </p>
                    </div>
                    <Link href={'/new'}> New Task </Link>
                </div>
                <Suspense fallback={'Loading ...'}>
                    <TaskList />
                </Suspense>
            </Box>
        </div>
    )
}

async function TaskList() {

    const tasks = await prisma.task.findMany({})

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 border p-2">
            {
                tasks.map(task => (
                    <TaskCard key={task.id} task={task}/>
                ))
            }
        </div>
    )

}