import { useState, useEffect } from 'react';
import style from "./TableEmployees.module.css";
import { StatusOnlineIcon } from "@heroicons/react/outline";
import PaginationOutlined from "../../../pagination/PaginationOutlined"
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
} from "@tremor/react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { CiMail } from "react-icons/ci";
//
export const TableEmployees = () => {
  const data = [
    {
      image: "https://i.pravatar.cc/150",
      name: "Cornelio Agilar",
      mail: "tomasaguilar@gmail.com",
      phone: "11-5566-8899",
      position: "Vendedor",

      extra: "...",
    },
    {
      image: "https://i.pravatar.cc/150",
      name: "Cornelio Agilar",
      mail: "tomasaguilar@gmail.com",
      phone: "11-5566-8899",
      position: "Vendedor",

      extra: "...",
    },
    {
      image: "https://i.pravatar.cc/150",
      name: "Tomas Agilar",
      mail: "tomasaguilar@gmail.com",
      phone: "11-5566-8899",
      position: "Corredor",
      extra: "...",
    },
    {
      image: "https://i.pravatar.cc/150",
      name: "Tomas Agilar",
      mail: "tomasaguilar@gmail.com",
      phone: "11-5566-8899",
      position: "Corredor",
      extra: "...",
    },
    {
      image: "https://i.pravatar.cc/150",
      name: "Tomas Adgilar",
      mail: "tomasa@gmail.com",
      phone: "11-5566-8899",
      position: "Vendedor",
      extra: "...",
    },
    {
      image: "https://i.pravatar.cc/150",
      name: "Tomas Agilar",
      mail: "tomr@gmail.com",
      phone: "11-5566-8899",
      position: "Corredor",
      extra: "...",
    },
    {
      image: "https://i.pravatar.cc/150",
      name: "Tomas Agilar",
      mail: "tomasaguilar@gmail.com",
      phone: "11-5566-8899",
      position: "Vendedor",

      extra: "...",
    },
    {
      image: "https://i.pravatar.cc/150",
      name: "Tomas Agilar",
      mail: "tomasaguilar@gmail.com",
      phone: "11-5566-8899",
      position: "Corredor",
      extra: "...",
    },
    {
      image: "https://i.pravatar.cc/150",
      name: "Tomas Agilar",
      mail: "tomasaguilar@gmail.com",
      phone: "11-5566-8899",
      position: "Corredor",
      extra: "...",
    },
    {
      image: "https://i.pravatar.cc/150",
      name: "Tomas Adgilar",
      mail: "tomasa@gmail.com",
      phone: "11-5566-8899",
      position: "Vendedor",
      extra: "...",
    },
    {
      image: "https://i.pravatar.cc/150",
      name: "Tomas Agilar",
      mail: "tomr@gmail.com",
      phone: "11-5566-8899",
      position: "Corredor",
      extra: "...",
    },
    {
      image: "https://i.pravatar.cc/150",
      name: "Tomas Agilar",
      mail: "tomasaguilar@gmail.com",
      phone: "11-5566-8899",
      position: "Vendedor",

      extra: "...",
    },
    {
      image: "https://i.pravatar.cc/150",
      name: "Tomas Agilar",
      mail: "tomasaguilar@gmail.com",
      phone: "11-5566-8899",
      position: "Corredor",
      extra: "...",
    },
    {
      image: "https://i.pravatar.cc/150",
      name: "Tomas Agilar",
      mail: "tomasaguilar@gmail.com",
      phone: "11-5566-8899",
      position: "Corredor",
      extra: "...",
    },
    {
      image: "https://i.pravatar.cc/150",
      name: "Tomas Adgilar",
      mail: "tomasa@gmail.com",
      phone: "11-5566-8899",
      position: "Vendedor",
      extra: "...",
    },
    {
      image: "https://i.pravatar.cc/150",
      name: "Tomas Agilar",
      mail: "tomr@gmail.com",
      phone: "11-5566-8899",
      position: "Corredor",
      extra: "...",
    },
    {
      image: "https://i.pravatar.cc/150",
      name: "Tomas Agilar",
      mail: "tomasaguilar@gmail.com",
      phone: "11-5566-8899",
      position: "Vendedor",

      extra: "...",
    },
    {
      image: "https://i.pravatar.cc/150",
      name: "Tomas Agilar",
      mail: "tomasaguilar@gmail.com",
      phone: "11-5566-8899",
      position: "Corredor",
      extra: "...",
    },
    {
      image: "https://i.pravatar.cc/150",
      name: "Tomas Agilar",
      mail: "tomasaguilar@gmail.com",
      phone: "11-5566-8899",
      position: "Corredor",
      extra: "...",
    },
    {
      image: "https://i.pravatar.cc/150",
      name: "Tomas Adgilar",
      mail: "tomasa@gmail.com",
      phone: "11-5566-8899",
      position: "Vendedor",
      extra: "...",
    },
    {
      image: "https://i.pravatar.cc/150",
      name: "Tomas Agilar",
      mail: "tomr@gmail.com",
      phone: "11-5566-8899",
      position: "Corredor",
      extra: "...",
    },
  ];
  const [pageStyle, setPageStyle] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);
	const [cardXPage, setCardXpage] = useState(10);
	const indexLastCard = currentPage * cardXPage;
	const indexFirstCard = indexLastCard - cardXPage;
	const currentCard = data.slice(indexFirstCard, indexLastCard);

	const pages = (pageNumber) => {
		setCurrentPage(pageNumber);
	};


  return (
    <>
    <div className=' flex flex-col justify-start items-center w-full h-screen'>
      <Card className="bg-[#222131] rounded-none w-full h-screen p-5">
        <div className="flex justify-between items-center">
          <Title className="font-bold text-[#e2e2e2] text-lg ml-4">Employees</Title>
          <button className="bg-indigo-700 text-gray-100 rounded-md px-5 py-2 text-xs mr-3">
            Add Employees +
          </button>
        </div>
        <Table className="">
          <TableHead className={style.tableHead}>
            <TableRow className={style.tableRow}>
              <TableHeaderCell className="text-start">Name</TableHeaderCell>
              <TableHeaderCell className="text-start">Email</TableHeaderCell>
              <TableHeaderCell className="text-start">
                Phone Number
              </TableHeaderCell>
              <TableHeaderCell className="text-start">Position</TableHeaderCell>
              <TableHeaderCell className="text-start">
                <h1></h1>
              </TableHeaderCell>
            </TableRow>
          </TableHead>

          <TableBody className={style.tableBody}>
            {currentCard.map((item, index) => (
              <TableRow key={index} className={style.tableCards}>
                <TableCell className="flex justify-start items-center p-0">
                  <img
                    className="w-8 ml-2 mr-4 rounded-full"
                    src={item.image}
                    alt="avatar image"
                    />
                  <Text className="text-start">{item.name}</Text>
                </TableCell>
                <TableCell className="flex justify-start items-center p-0">
                  <CiMail className={style.icon} />
                  <Text className="text-start">{item.mail}</Text>
                </TableCell>
                <TableCell className="p-0 mx-3">
                  <Text className="text-start">{item.phone}</Text>
                </TableCell>
                <TableCell className="p-0">
                  {item.position === "Corredor" ? (
                    <Text className="bg-[#29c08b]  text-[#050505] text-center p-1 w-20 rounded-lg">
                      {item.position}
                    </Text>
                  ) : (
                    <Text className="bg-[#ca4f8d] text-[#f1f1f1] text-center p-1 px-2 w-20 rounded-lg">
                      {item.position}
                    </Text>
                  )}
                </TableCell>
                <TableCell className="p-0">
                  <a href="">
                    <HiOutlineDotsHorizontal className="text-18" />
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
      <div className=" mb-6">
        <PaginationOutlined
          pageStyle={pageStyle}
          setPageStyle={setPageStyle}
          cardXPage={cardXPage}
          data={data}
          pages={pages}
          />
      </div>
          </div>
    </>
  );
};
