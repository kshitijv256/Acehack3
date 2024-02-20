import roadmap from '/assets/images/roadmap.png';

const Schedule = () => {
    return (
        <div className="p-10 bg-[#11162c] relative">
            <div className="flex flex-col items-center gap-6">
                <h1 className="grad-text text-5xl font-bold">Schedule</h1>
            <img src={roadmap} alt="schedule" className="w-full"/>
            </div>
        </div>
    );
};

export default Schedule;