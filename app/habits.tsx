type Habit = {
    _id: string;
    title: string;
    description: string;
    createdAt: string;
    __v: number;
}

type HabitsProps = {
    habits: Habit[];    
}

export default function Habits({habits}: HabitsProps) {
    return (
        <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md mt-8">
            <h1 className="text-2xl font-bold mb-4 text-black">Habits</h1>
            <ul className="space-y-4">
            {habits.map((habit:Habit) => (
                    <li className="flex items-center justify-between gap-4" key={habit._id}>
                        <span className="text-black flex-1">{habit.title}</span>
                        <progress value="70" max="100" className="w-24"></progress>
                        <button className="bg-blue-500 text-white text-sm px-2 py-1 rounded whitespace-nowrap">Mark as done</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}