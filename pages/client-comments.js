import { comments } from '../data/comments';
import Comment from '../components/Testimonials/Comment';
import AllComments from '../components/Testimonials/AllComments';
import TestimonialComponent from '../components/Testimonials/TestimonialComponent';
import TestimonialsHero from '../components/layout/heros/TestimonialsHero';
const ClientComments = () => {
	return (
		<div className='grid'>
			<TestimonialsHero />
			<AllComments data={comments} />
		</div>
	);
};

export default ClientComments;
