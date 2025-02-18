import Hero from "../../components/Student/Hero"
import Companies from "../../components/Student/Companies"
import CourseSection from "../../components/Student/CourseSection"
import TestimonialSection from "../../components/Student/TestimonialSection"
import CallToAction from "../../components/Student/CallToAction"
import Footer from "../../components/Student/Footer"

const Home = () => {
  return (
	<div className="flex flex-col items-center space-y-7 text-center">
		<Hero/>
		<Companies/>
		<CourseSection/>
		<TestimonialSection/>
		<CallToAction/>
		<Footer/>
	</div>
  )
}

export default Home