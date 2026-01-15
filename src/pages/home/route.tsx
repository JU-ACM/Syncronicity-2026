import About from "./sections/about/About"
import { Dashboard } from "./sections/dashboard/Dashboard"
import MeetOurTeam from "./sections/meet-our-team/MeetOurTeam"

export const HomeRoute = () => {
	return (
		<div className="w-full min-h-screen bg-[#131313]">
		<Dashboard /> 
		<About/>
		<MeetOurTeam/>
		</div>
	)
}
