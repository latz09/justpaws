import ServicesModal from "./ServicesModal";

const SelectionItem = ({size, description, key, setSelectionSequence}) => {
	return (
		
			<li
				key={key}
				className='grid  place-items-center border-b border-lightblue hover:bg-primary hover:scale-105 transition duration-500 shadow hover:shadow-lg hover:shadow-lightblue border rounded-ful px-2 py-3 cursor-pointer'
				onClick={() => {
				  setSelectionSequence('Pricing')
				}}
			
			>
				<span> {size}</span>
				<span className='text-sm font-normal'>
					{description}
				</span>
			</li>
	
	);
};

export default SelectionItem;
