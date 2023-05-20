import React from 'react';

function BestSellers() {
	return (
		<div className='flex flex-col   h-[450px] w-[465px] bg-[#39394b] rounded-xl space-y-44'>
		
			<div className='mt-[25px] ml-[15px] text-gray-700 text-lg font-medium _title_1b7ez_1'>Top best selers</div>
		
				<div className='flex justify-center items-center gap-0.5rem ml-1rem mb-3rem'>
			<img
				className='w-12 h-12 rounded-full'
				src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFADjIwjVTPKIf_2YkWdv2-N5TPzIItNC0TQ&usqp=CAU'
				alt='profile avatar'
			/>
			<div className='text-white text-sm'>
				<p>Easin Arafat</p>
				<p>Free Account</p>
			</div>
		</div>
		</div>
	
	);
}

export default BestSellers;
