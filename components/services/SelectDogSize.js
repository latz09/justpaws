import { AiOutlineDash } from 'react-icons/ai';
import { useState } from 'react';
import { pricingAndSizes } from '../../data/pricingAndSizes';
import LandingServiceHeader from './LandingServiceHeader';
import SelectionItem from './SelectionItem';
import ServicesModal from './ServicesModal';
import HeaderAnimation from '../utils/animations/HeaderAnimation';

const SelectDogSize = () => {
	const [dogSize, setDogSize] = useState('');
	const [dogSizeDescription, setDogSizeDescription] = useState('');
	const [selectionSequence, setSelectionSequence] = useState('Services');

	return (
		<div className='text-lightblue grid'>
			{/* <HeaderAnimation word={selectionSequence} />
			 */}
			{selectionSequence}
			{selectionSequence === 'Services' && (
				<div>
					<LandingServiceHeader />

					<div className=' border-2 border-primary rounded-full flex justify-between py-2 px-5'>
						<div className='flex space-x-3 font-bold place-items-center text-lg'>
							<span>{dogSize}</span>
							<span className='italic font-normal text-base'>
								{dogSizeDescription}
							</span>
						</div>
						<span
							className='justify-self-end text-2xl animate-pulse'
							onClick={() => {
								setSelectionSequence('Size');
							}}
						>
							<AiOutlineDash />{' '}
						</span>
					</div>
				</div>
			)}
			{selectionSequence === 'Size' && (
				<div className='item-selection'>
					{pricingAndSizes.map((size) => (
						<SelectionItem
							key={size.id}
							size={size.size}
							description={size.sizeDescription}
							// selectionSequence={selectionSequence}
							setSelectionSequence={setSelectionSequence}
						/>
					))}
				</div>
			)}
			{selectionSequence === 'Pricing' && (
				<div className="grid gap-5">
					<span>description</span>
					<span>
					{/*create a component for the different services filter out {pricingAndSizes} to send the right data to said component.  
					
					create own onclick function over on <SelectionItem/>.  SetSelectionSequence('pricing') setId(1)

					filter the data with the setId .>>?? hopefully
					
					*/}


						<button onClick={() => {
						  setSelectionSequence('Size')
						}}>goback</button>
					</span>
				</div>
			)}
		</div>
	);
};

export default SelectDogSize;
