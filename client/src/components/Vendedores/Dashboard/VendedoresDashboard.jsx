import style from './VendedoresDashboard.module.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PaginationOutlined from '../../pagination/PaginationOutlined';
import { getLeadChecked100 } from '../../../redux/actions';
import { IoGrid, IoStatsChart } from 'react-icons/io5';
import { CiWarning, CiInstagram, CiMail, CiEdit } from 'react-icons/ci';

import {
	Card,
	Table,
	TableHead,
	TableRow,
	TableHeaderCell,
	TableBody,
	TableCell,
	Text,
	Title,
	Badge,
} from '@tremor/react';

import Nav from '../../Nav/Nav';

const VendedoresDashboard = () => {
	const { leadChequed100 } = useSelector((state) => state);
	const dispatch = useDispatch();
	const [showCopiedMessage, setShowCopiedMessage] = useState(false);

	const [pageStyle, setPageStyle] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);
	const [cardXPage, setCardXpage] = useState(10);
	const indexLastCard = currentPage * cardXPage;
	const indexFirstCard = indexLastCard - cardXPage;
	const currentCard = leadChequed100.slice(indexFirstCard, indexLastCard);

	const pages = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	useEffect(() => {
		dispatch(getLeadChecked100());
	}, [dispatch]);

	const handleCopyClick = (copyToProps) => {
		navigator.clipboard
			.writeText(copyToProps)
			.then(() => {
				setShowCopiedMessage(true);
				setTimeout(() => setShowCopiedMessage(false), 2000);
			})
			.catch((err) => alert(`Error al copiar: ${err}`));
	};

	return (
		<>
			<Nav />
			<div className='flex flex-col justify-between items-center w-screen m-5'>
				{showCopiedMessage && (
					<p className='mt-2 p-3 bg-[#b9b9b978] text-white rounded-md absolute'>
						Copiado al portapapeles
					</p>
				)}
				<Card className='w-full mt-5'>
					<div className='flex gap-10 items-center'>
						<Title className='font-bold text-[#e2e2e2] text-lg mx-5 mt-2'>
							Dashboard
						</Title>
						<div className='flex gap-5'>
							<Link to={'/vendedores'}>
								<IoGrid className='text-[2rem] text-[#418df0] hover:text-[#3570bd]' />
							</Link>
							<Link
								className='text-5xl'
								to={'/vendedores/analytics'}>
								<IoStatsChart className='text-[2rem] text-[#418df0] hover:text-[#3570bd]' />
							</Link>
						</div>
					</div>

					<Table className='flex mt-5'>
						<TableHead className='text-gray-400 text-14 font-thin'>
							<TableRow className={style.tableRow}>
								<TableHeaderCell className='text-start'>
									Invoice Id
								</TableHeaderCell>
								<TableHeaderCell className='text-start'>Name</TableHeaderCell>
								<TableHeaderCell className='text-start'>
									Profesion
								</TableHeaderCell>
								<TableHeaderCell className='text-start'>
									Country
								</TableHeaderCell>
								{/* <TableHeaderCell className="text-start">
            Phone
          </TableHeaderCell> */}
								<TableHeaderCell className='text-start'>Email</TableHeaderCell>
								<TableHeaderCell className='text-start'>
									Instagram
								</TableHeaderCell>
								<TableHeaderCell className='text-start'>Nivel</TableHeaderCell>
								<TableHeaderCell className='text-start'>Status</TableHeaderCell>
								<TableHeaderCell className='text-start'></TableHeaderCell>
							</TableRow>
						</TableHead>

						<TableBody className=' h-3/4'>
							{currentCard.map((item) => (
								<TableRow
									key={item._id}
									className={style.tableCards}>
									<TableCell className='flex justify-start items-center p-0'>
										<div className='w-24 p-1 px-3 rounded-full text-ellipsis opacity-1 overflow-hidden hover:overflow-visible hover:bg-[#e3e1e1] hover:w-fit hover:text-black z-111 hover:absolute'>
											{item._id}
										</div>
									</TableCell>
									<TableCell className='flex justify-start items-center  p-0'>
										<Text className='w-96 p-1 px-3 rounded-full text-ellipsis opacity-1 overflow-hidden hover:overflow-visible hover:bg-[#e3e1e1] hover:w-fit hover:text-black z-111 hover:absolute'>
											{item.name}
										</Text>
									</TableCell>
									<TableCell className='flex justify-start items-center p-0'>
										<Text className='w-96 p-1 px-3 rounded-full text-ellipsis opacity-1 overflow-hidden hover:overflow-visible hover:bg-[#e3e1e1] hover:w-fit hover:text-black z-111 hover:absolute'>
											{item.category}
										</Text>
									</TableCell>

									<TableCell className='flex justify-start items-center p-0'>
										<Text>{item.province}</Text>
									</TableCell>

									<TableCell className='flex justify-start items-center p-0'>
										{item.email !== '-' ? (
											<div onClick={() => handleCopyClick(item.email)}>
												<div className='cursor-pointer'>
													<CiMail className='text-[30px] mr-5 text-[#418df0]' />
												</div>
											</div>
										) : (
											<div>
												<CiMail className='text-[30px] mr-5 text-[#9eabbe]' />
											</div>
										)}
									</TableCell>
									<TableCell className='flex justify-start items-center p-0 mx-3'>
										{item.instagram ? (
											<div onClick={() => handleCopyClick(item.instagram)}>
												<div className='cursor-pointer'>
													<CiInstagram className='text-[30px] mr-5 text-[#ff598b]' />
												</div>
											</div>
										) : (
											<div>
												<CiInstagram className='text-[30px] mr-5 text-[#9eabbe]' />
											</div>
										)}
									</TableCell>
									<TableCell className='flex justify-start items-center p-0 mx-3'>
										{item.level !== 'incidencia' ? (
											<Text className='text-start bg-[#6254ff] text-white py-2 px-3 text-xl rounded-md'>
												{item.level}
											</Text>
										) : (
											<Text className='text-start bg-[#6254ff] p-1 text-xl rounded-md text-white'>
												<CiWarning className='text-white p-0 text-24' />
											</Text>
										)}
									</TableCell>
									<TableCell className='flex justify-start items-start p-0'>
										<button className='bg-[#ff69b4] text-white rounded-3xl px-6 py-1'>
											Contratado
										</button>
									</TableCell>
									<TableCell className='flex justify-start items-start p-0'>
										<CiEdit className='bg-[#6254ff] text-1 text-white w-10 h-8 rounded-md cursor-pointer' />
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</Card>

				<div className='mb-5'>
					<PaginationOutlined
						pageStyle={pageStyle}
						setPageStyle={setPageStyle}
						cardXPage={cardXPage}
						data={leadChequed100}
						pages={pages}
					/>
				</div>
			</div>
		</>
	);
};

export default VendedoresDashboard;

// import { useState, useEffect } from 'react';
// import style from './DashboardVendedores.module.css';

// import {
// 	Card,
// 	Table,
// 	TableHead,
// 	TableRow,
// 	TableHeaderCell,
// 	TableBody,
// 	TableCell,
// 	Text,
// 	Title,
// 	Badge,
// } from '@tremor/react';

// import { CiGlobe, CiWarning, CiInstagram } from 'react-icons/ci';
// import Nav from '../../Nav/Nav';

// const DashboardVendedores = () => {
// 	const [client, setClient] = useState([
// 		{
// 			InvoiceId: 2222222,
// 			Name: 'Juan Carlos Gomez',
// 			Profesion: 'www.google.com',
// 			Nivel: 1,
// 			Telephone: '+22131234',
// 			Email: 'Hola@gmail.com',
// 			Status: 'Contratado',
// 		},
// 		{
// 			InvoiceId: 2222222,
// 			Name: 'Juan Carlos Gomez',
// 			Profesion: 'www.google.com',
// 			Nivel: 1,
// 			Telephone: '+22131234',
// 			Email: 'Hola@gmail.com',
// 			Status: 'Contratado',
// 		},
// 		{
// 			InvoiceId: 2222222,
// 			Name: 'Juan Carlos Gomez',
// 			Profesion: 'www.google.com',
// 			Nivel: 1,
// 			Telephone: '+22131234',
// 			Email: 'Hola@gmail.com',
// 			Status: 'Contratado',
// 		},
// 		{
// 			InvoiceId: 2222222,
// 			Name: 'Juan Carlos Gomez',
// 			Profesion: 'www.google.com',
// 			Nivel: 1,
// 			Telephone: '+22131234',
// 			Email: 'Hola@gmail.com',
// 			Status: 'Contratado',
// 		},
// 		{
// 			InvoiceId: 2222222,
// 			Name: 'Juan Carlos Gomez',
// 			Profesion: 'www.google.com',
// 			Nivel: 1,
// 			Telephone: '+22131234',
// 			Email: 'Hola@gmail.com',
// 			Status: 'Contratado',
// 		},
// 		{
// 			InvoiceId: 2222222,
// 			Name: 'Juan Carlos Gomez',
// 			Profesion: 'www.google.com',
// 			Nivel: 1,
// 			Telephone: '+22131234',
// 			Email: 'Hola@gmail.com',
// 			Status: 'Contratado',
// 		},
// 		{
// 			InvoiceId: 2222222,
// 			Name: 'Juan Carlos Gomez',
// 			Profesion: 'www.google.com',
// 			Nivel: 1,
// 			Telephone: '+22131234',
// 			Email: 'Hola@gmail.com',
// 			Status: 'Contratado',
// 		},
// 		{
// 			InvoiceId: 2222222,
// 			Name: 'Juan Carlos Gomez',
// 			Profesion: 'www.google.com',
// 			Nivel: 1,
// 			Telephone: '+22131234',
// 			Email: 'Hola@gmail.com',
// 			Status: 'Contratado',
// 		},
// 		{
// 			InvoiceId: 2222222,
// 			Name: 'Juan Carlos Gomez',
// 			Profesion: 'www.google.com',
// 			Nivel: 1,
// 			Telephone: '+22131234',
// 			Email: 'Hola@gmail.com',
// 			Status: 'Contratado',
// 		},
// 		{
// 			InvoiceId: 2222222,
// 			Name: 'Juan Carlos Gomez',
// 			Profesion: 'www.google.com',
// 			Nivel: 1,
// 			Telephone: '+22131234',
// 			Email: 'Hola@gmail.com',
// 			Status: 'Contratado',
// 		},
// 	]);
// 	const [nivel, setNivel] = useState({
// 		1: '',
// 		2: '',
// 		3: '',
// 		4: '',
// 		5: '',
// 		6: '',
// 		7: '',
// 		8: '',
// 		9: '',
// 		10: '',
// 	});
// 	const data = [
// 		{
// 			InvoiceId: 2222222,
// 			Name: 'Juan Carlos Gomez',
// 			Profesion: 'www.google.com',
// 			Nivel: 1,
// 			Telephone: '+22131234',
// 			Email: 'Hola@gmail.com',
// 			Status: 'Contratado',
// 		},
// 		{
// 			InvoiceId: 2222222,
// 			Name: 'Juan Carlos Gomez',
// 			Profesion: 'www.google.com',
// 			Nivel: 1,
// 			Telephone: '+22131234',
// 			Email: 'Hola@gmail.com',
// 			Status: 'Contratado',
// 		},
// 		{
// 			InvoiceId: 2222222,
// 			Name: 'Juan Carlos Gomez',
// 			Profesion: 'www.google.com',
// 			Nivel: 1,
// 			Telephone: '+22131234',
// 			Email: 'Hola@gmail.com',
// 			Status: 'Contratado',
// 		},
// 		{
// 			InvoiceId: 2222222,
// 			Name: 'Juan Carlos Gomez',
// 			Profesion: 'www.google.com',
// 			Nivel: 1,
// 			Telephone: '+22131234',
// 			Email: 'Hola@gmail.com',
// 			Status: 'Contratado',
// 		},
// 		{
// 			InvoiceId: 2222222,
// 			Name: 'Juan Carlos Gomez',
// 			Profesion: 'www.google.com',
// 			Nivel: 1,
// 			Telephone: '+22131234',
// 			Email: 'Hola@gmail.com',
// 			Status: 'Contratado',
// 		},
// 		{
// 			InvoiceId: 2222222,
// 			Name: 'Juan Carlos Gomez',
// 			Profesion: 'www.google.com',
// 			Nivel: 1,
// 			Telephone: '+22131234',
// 			Email: 'Hola@gmail.com',
// 			Status: 'Contratado',
// 		},
// 	];
// 	const handleNivelClick = (event) => {
// 		setNivel({ ...nivel, [event.target.name]: event.target.value });
// 	};
// 	const handleSubmit = (event) => {
// 		event.preventDefault();
// 	};
// 	return (
// 		<div className='flex flex-row w-screen'>
// 			<Nav />
// 			<Card className='w-full m-5 h-screen '>
// 				<div className='flex justify-between items-center m-5'>
// 					<Title className={style.title}>Dashboard</Title>
// 					<button className={style.buttonAdd}>Send </button>
// 				</div>

// 				<Table className={style.table}>
// 					<TableHead className={style.tableHead}>
// 						<TableRow className={style.tableRow}>
// 							<TableHeaderCell className='text-start'>
// 								Invoice Id
// 							</TableHeaderCell>
// 							<TableHeaderCell className='text-start'>Name</TableHeaderCell>
// 							<TableHeaderCell className='text-start'>
// 								Profesion
// 							</TableHeaderCell>
// 							<TableHeaderCell className='text-start'>Nivel</TableHeaderCell>
// 							<TableHeaderCell className='text-start'>
// 								Telephone
// 							</TableHeaderCell>
// 							<TableHeaderCell className='text-start'>Email</TableHeaderCell>
// 							<TableHeaderCell className='text-start'>Status</TableHeaderCell>
// 						</TableRow>
// 					</TableHead>

// 					<TableBody className={style.tableBody}>
// 						{client.map((item, index) => (
// 							<TableRow
// 								key={item.InvoiceId}
// 								className={style.tableCards}>
// 								<TableCell className='flex justify-start items-center p-0'>
// 									<div className='w-8 ml-2 mr-4 rounded-full'>
// 										{item.InvoiceId}
// 									</div>
// 								</TableCell>
// 								<TableCell className='flex justify-start items-center p-0'>
// 									<Text className='text-start'>{item.Name}</Text>
// 								</TableCell>
// 								<TableCell className='flex justify-start items-center p-0'>
// 									<Text className='text-start'>{item.Profesion}</Text>
// 								</TableCell>
// 								<TableCell className='flex justify-start items-center p-0 mx-3'>
// 									<Text className='text-start bg-[#6254ff] py-2 px-3 text-xl rounded-md'>
// 										{item.Nivel}
// 									</Text>
// 								</TableCell>
// 								<TableCell className='flex justify-start items-center p-0'>
// 									<Text className='text-start'>{item.Telephone}</Text>
// 								</TableCell>
// 								<TableCell className='flex justify-start items-center p-0'>
// 									<Text className='text-start'>{item.Email}</Text>
// 								</TableCell>
// 								<TableCell className='flex justify-start items-start p-0'>
// 									<button className='bg-[#ff69b4] rounded-3xl px-6 py-1'>
// 										Contratado
// 									</button>
// 								</TableCell>
// 							</TableRow>
// 						))}
// 					</TableBody>
// 				</Table>
// 			</Card>
// 		</div>
// 	);
// };

// export default DashboardVendedores;
