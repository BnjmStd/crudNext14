import { Task } from '@prisma/client'

export default function ({task}:{task:Task}) {

    const getColorClass = () => {
        switch (task.priorty) {
            case 'high':
                return 'bg-red-200'
        
            case 'medium':
                return 'bg-yellow-200'
            
            case 'low':
                return 'bg-green-200'
        
            default:
                return 'bg-gray-200'
        }

    }

    return (
        <div className={`h-full p-1 flex flex-col justify-center items-center ${getColorClass()}`}>
            <p className='text-sm font-bold text-gray-800'>
                {task.priorty[0]}
            </p>
            <p className='text-sm font-bold text-gray-800'>
                {task.priorty[1]}
            </p>
            <p className='text-sm font-bold text-gray-800'>
                {task.priorty[2]}
            </p>
            <p className='text-sm font-bold text-gray-800'>
                {task.priorty[3]}
            </p>
            <p className='text-sm font-bold text-gray-800'>
                {task.priorty[4]}
            </p>
            <p className='text-sm font-bold text-gray-800'>
                {task.priorty[5]}
            </p>
            <p className='text-sm font-bold text-gray-800'>
                {task.priorty[6]}
            </p>
        </div>
    )
}