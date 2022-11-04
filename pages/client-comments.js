import { comments } from '../data/comments';
import Comment from '../components/Testimonials/Comment';
import AllComments from '../components/Testimonials/AllComments';
const ClientComments = () => {
	return (
		<div className="py-14 gap-8">
			<AllComments data={comments} />
		</div>
	);
};

export default ClientComments;
