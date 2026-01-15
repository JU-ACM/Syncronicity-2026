import { Dashboard } from "./sections/dashboard/Dashboard"
import Footer from "./sections/footer/Footer"
import MeetOurTeam from "./sections/meet-our-team/MeetOurTeam"

export const HomeRoute = () => {
	return (
		<div className="w-full min-h-screen bg-[#131313]">
		<Dashboard /> 
		<MeetOurTeam/>
		<Footer />
		</div>
	)
}
