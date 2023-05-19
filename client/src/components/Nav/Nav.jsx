import React from 'react';
import { Link } from 'react-router-dom';
import { UserButton } from '@clerk/clerk-react';
import styles from "./Nav.module.css"

import { IoStatsChart, IoSettingsSharp, IoBagSharp } from 'react-icons/io5';

function Nav() {
	return (
		<div className='bg-[#39394B] flex flex-col justify-between items-center h-screen min-w-[180px]'>
			<div className='flex flex-col items-center justify-center mt-16'>
				<div className='flex flex-col items-center justify-center m-1'>
					<Link to={'/home'}>
						<img
							className='opacity-80 w-32'
							src='https://cdn.discordapp.com/attachments/1105243107555037294/1106577865698459788/White_Logo_Social_Media_Lab.png'
						/>
					</Link>
				</div>
				<div />
				<div className='flex w-full mt-12 ml-5'>
					<ul className='flex flex-col gap-2'>
						<li className='flex gap-2 items-center'>
							<span className=' text-lg'>
								<IoStatsChart />
							</span>
							<span>
								<Link
									to='/analytics'
									className=' hover:text-gray-200'>
									Analytics
								</Link>
							</span>
						</li>
						<li className='flex gap-2 items-center'>
							<span className=' text-lg'>
								<IoSettingsSharp />
							</span>
							<span>
								<Link
									to='/settings'
									className=' hover:text-gray-200'>
									Settings
								</Link>
							</span>
						</li>
						<li className='flex gap-2 items-center'>
							<span className='text-[1.5rem]'>
								<IoBagSharp className='w-4' />
							</span>
							<span>
								<Link
									to='/employees'
									className=' hover:text-gray-200'>
									Employees
								</Link>
							</span>
						</li>
					</ul>
				</div>
			</div>

			<div className='flex flex-col justify-center w-full items-center mb-5'>
				{/*<Profile />*/}
				{<UserButton 
        appearance={{
          elements:{
            userButtonPopoverCard:styles.userButtonPopoverCard,
            userButtonPopoverActionButtonText: styles.userButtonPopoverActionButtonText,
            userPreviewMainIdentifier: styles.userPreviewMainIdentifier,
            userPreviewSecondaryIdentifier: styles.userPreviewSecondaryIdentifier
          }
        }}/>}
			</div>
		</div>
	);
}

export default Nav;
