import Image from 'next/image';
import dog from '../../../public/images/trim.jpg';
import ServiceHeader from '../../services/servicePage/ServiceHeader';

const ServiceHero = ({ setModalIsOpen }) => {
	return (
		<div className='relative w-full h-[25vh] lg:h-[45vh] '>
			<Image
				src={dog}
				alt=''
				priority='true'
				layout='fill'
				objectFit='cover'
				objectPosition='left'
				placeholder='blur'
			/>

			<div className='relative h-full bg-black bg-opacity-80 '>
				<div className='grid place-items-center border h-full'>
					<ServiceHeader setModalIsOpen={setModalIsOpen} />
				</div>{' '}
			</div>
		</div>
	);
};

export default ServiceHero;
