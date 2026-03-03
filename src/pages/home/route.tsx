import About from "./sections/about/About"
import { Dashboard } from "./sections/dashboard/Dashboard"
import Events from "./sections/events/Events"
import Footer from "./sections/footer/Footer"
import MeetOurTeam from "./sections/meet-our-team/MeetOurTeam"
import Stats from "./sections/stats/Stats"
import Timeline from "./sections/timeline/Timeline"
import WhySection from "./sections/whySection/WhySection"

export const HomeRoute = () => {
	return (
		<div className="w-full min-h-screen bg-[#131313]">
		<Dashboard /> 
		<WhySection/>
		<Stats />
		<Timeline />
		<Events/>
		<div className="h-[30vh]"/>
		<About/>
		<MeetOurTeam/>
		<Footer />
		
		</div>
	)
}
