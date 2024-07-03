import { Task } from '@prisma/client'

export default function Completion ({task}: {task: Task}) {
    return (
        <span className='p-1 rounded-xl text-gray-700 leading-tight text-sm cursor-pointer bg-orange-200'>
            Open
        </span>
    )
}