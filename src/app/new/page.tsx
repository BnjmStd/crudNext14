import Box from "@/components/box";
import TaskForm from "@/components/task-form";

export default function NewTaskPage() {
    return (
        <section className="py-6">
            <Box>
                <div className="w-full flex flex-col">
                    <h1 className="text-xl font-medium text-gray-800"> New Task </h1>
                    <p className="font-light text-gray-400 text-md"> Add New Task below </p>
                    <TaskForm />
                </div>
            </Box>
        </section>
    )
}