import { BsChatQuote } from 'react-icons/bs';

const Comment = ({ text, name }) => {
	return (
		<div className='font-primary font-normal tracking-wider p-4 grid gap-2 md:gap-4 mx-4 place-items-end '>
			<div className="flex items-center space-x-4">
				
				<span className=" text-primary text-xl">
					<BsChatQuote />{' '}
				</span>
                <span className="text-right">{text}</span>
			</div>
			<div className="place-self-end">--{name}</div>
		</div>
	);
};

export default Comment;
