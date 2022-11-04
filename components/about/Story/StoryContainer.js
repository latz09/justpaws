import Paragraph from './Paragraph';
import { paragraphs } from '../../../data/ourStory';

const StoryContainer = () => {
	return (
		<div className='max-w-3xl mx-auto grid gap-2 my-4 px-2 md:px-0'>
			{paragraphs.map((paragraph) => (
				<div key={paragraph.id} className="p-4">
					<Paragraph text={paragraph.text} />
				</div>
			))}
		</div>
	);
};

export default StoryContainer;
