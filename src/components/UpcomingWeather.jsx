import Upcomings from "./Upcomings";

export default function UpcomingWeather() {
    return (
        <div className="flex justify-center  pt-24 space-x-10">
            <Upcomings time="03:00" temperature={8} id={800} />
            <Upcomings time="06:00" temperature={9} id={802} />
            <Upcomings time="09:00" temperature={14} id={803} />
            <Upcomings time="12:00" temperature={17} id={801} />
            <Upcomings time="15:00" temperature={18} id={804} />
            <Upcomings time="18:00" temperature={16} id={803} />
            <Upcomings time="21:00" temperature={13} id={800} />
        </div>
    );
}