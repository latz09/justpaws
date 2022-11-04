import StoryContainer from '../components/about/Story/StoryContainer';
import { motion } from 'framer-motion';
import jessica from '../public/images/jessica.jpg';
import Image from 'next/image';

const OurFullStory = () => {
	return (
		<>
			{/* <div className="grid place-items-center ">
				<Image src={jessica} alt='' />
			</div> */}
			<div className='grid bg-gray-200 py-8 '>
				<StoryContainer />
			</div>
		</>
	);
};

export default OurFullStory;
