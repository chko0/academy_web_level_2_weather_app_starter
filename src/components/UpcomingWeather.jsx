import Upcomings from "./Upcomings";

export default function UpcomingWeather() {
    return <div className="flex pt-24 space-x-10">
        <Upcomings time={"03:00"} temperature={"8"} id={"800"}/>
        <Upcomings time="06:00" temperature="9" id={802}/>
        <Upcomings time="09:00" temperature="14" />
        <Upcomings time="12:00" temperature="17" />
        <Upcomings time="15:00" temperature="18" />
        <Upcomings time="18:00" temperature="16" />
        <Upcomings time="21:00" temperature="13" />
    </div>
}