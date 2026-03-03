import About from "./sections/about/About"
import { Dashboard } from "./sections/dashboard/Dashboard"
import Events from "./sections/events/Events"
import FAQ from "./sections/faq/FAQ"
import Footer from "./sections/footer/Footer"
import MeetOurTeam from "./sections/meet-our-team/MeetOurTeam"
import WhySection from "./sections/whySection/WhySection"
import ProblemStatement from "./sections/problemStatement/ProblemStatement.tsx"

export const HomeRoute = () => {
	return (
		<div className="w-full min-h-screen bg-[#131313]">
			<Dashboard />
			<WhySection />
			<Events />
			<ProblemStatement/>
			<div className="h-[10vh] md:h-[30vh]" />
			<About />
			<FAQ />
			{/* <MeetOurTeam /> */}
			<Footer />

		</div>
	)
}
