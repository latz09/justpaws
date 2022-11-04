import AboutBlurb from '../components/about/AboutBlurb';
import LandingHero from '../components/layout/heros/LandingHero';
import SelectDogSize from '../components/services/Modal/PricingModal';
import TestimonialComponent from '../components/Testimonials/TestimonialComponent';

export default function Home() {
	return (
		<div className='grid gap-9 mb-9 bg-gray-100'>
			<LandingHero />
			<TestimonialComponent />
			<AboutBlurb />
			
		</div>
	);
}
