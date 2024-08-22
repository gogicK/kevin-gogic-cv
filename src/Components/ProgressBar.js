export default function ProgressBar({ level }) {
    return (
        <div className="grow bg-gray-300 rounded-xl shadow-sm overflow-hidden">
            <div className="relative h-6 flex items-center justify-center">
                <div className="absolute top-0 bottom-0 left-0 rounded-lg bg-indigo-500" style={{ width: level + '%' }}></div>
                <div className="relative text-white font-medium text-sm">{level}%</div>
            </div>
        </div>
    );
}