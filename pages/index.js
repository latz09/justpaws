import Link from 'next/link';
import AboutBlurb from '../components/about/AboutBlurb';
import LandingHero from '../components/layout/heros/LandingHero';
import SelectDogSize from '../components/services/Modal/PricingModal';
import TestimonialComponent from '../components/Testimonials/TestimonialComponent';
import { ButtonLink } from '../components/utils/Utils';

export default function Home() {
	return (
		<div className='grid gap-14 mb-9 bg-gray-100'>
			<LandingHero />
			<TestimonialComponent />
			<div>
				{/* <Link href={'/contact-us'} >
					<a>More Client Comments</a>
				</Link> */}
			</div>
			<AboutBlurb />
			
		</div>
	);
}
