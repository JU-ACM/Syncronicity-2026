import About from "./sections/about/About"
import { Dashboard } from "./sections/dashboard/Dashboard"
import Footer from "./sections/footer/Footer"
import MeetOurTeam from "./sections/meet-our-team/MeetOurTeam"
import WhySection from "./sections/whySection/WhySection"

export const HomeRoute = () => {
	return (
		<div className="w-full min-h-screen bg-[#131313]">
		<Dashboard /> 
		<About/>
		<WhySection/>
		<MeetOurTeam/>
		<Footer />
		</div>
	)
}
