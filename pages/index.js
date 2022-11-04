import Link from 'next/link';
import AboutBlurb from '../components/about/AboutBlurb';
import LandingHero from '../components/layout/heros/LandingHero';
import TestimonialComponent from '../components/Testimonials/TestimonialComponent';
import MoreCommentsLink from '../components/utils/MoreCommentsLink';

export default function Home() {
	return (
		<div className='grid gap-14 pb-14 bg-gray-100'>
			<LandingHero />
			<AboutBlurb />
			<TestimonialComponent />
		<MoreCommentsLink />
		</div>
	);
}
