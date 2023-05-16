import style from "./TableEmployees.module.css";
import { StatusOnlineIcon } from "@heroicons/react/outline";
import PaginationOutlined from "../../pagination/PaginationOutlined";
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
import Nav from "../../Nav/Nav";
import { useEffect, useState } from "react";
//
export const AnalyticLeader = () => {
  const clients = [
    {
      id: "876364",
      client: "Social Media Lab",
      profesion: "Abogado",
      nivel: 1,
      telefono: "+492563627",
      Email: "arroragaur@gmail.com",
      status: true,
    },
    {
      id: "131231",
      client: "juenito jobs",
      profesion: "macdonalero",
      nivel: 0,
      telefono: "+222222222",
      Email: "siemprepar@gmail.com",
      status: false,
    },
    {
      id: "223456",
      client: "juenito jobs",
      profesion: "macdonalero",
      nivel: 2,
      telefono: "+222222222",
      Email: "siemprepar@gmail.com",
      status: true,
    },
    {
      id: "242562",
      client: "juenito jobs",
      profesion: "macdonalero",
      nivel: 0,
      telefono: "+222222222",
      Email: "siemprepar@gmail.com",
      status: false,
    },
    {
      id: "295267",
      client: "juenito jobs",
      profesion: "macdonalero",
      nivel: 0,
      telefono: "+222222222",
      Email: "siemprepar@gmail.com",
      status: false,
    },
    {
      id: "211111",
      client: "juenito jobs",
      profesion: "macdonalero",
      nivel: 0,
      telefono: "+222222222",
      Email: "siemprepar@gmail.com",
      status: true,
    },
    {
      id: "222222",
      client: "juenito jobs",
      profesion: "macdonalero",
      nivel: 0,
      telefono: "+222222222",
      Email: "siemprepar@gmail.com",
      status: true,
    },
    {
      id: "244444",
      client: "juenito jobs",
      profesion: "macdonalero",
      nivel: 0,
      telefono: "+222222222",
      Email: "siemprepar@gmail.com",
      status: true,
    },
    {
      id: "255555",
      client: "juenito jobs",
      profesion: "macdonalero",
      nivel: 0,
      telefono: "+222222222",
      Email: "siemprepar@gmail.com",
      status: false,
    },
    {
      id: "266666",
      client: "juenito jobs",
      profesion: "macdonalero",
      nivel: 0,
      telefono: "+222222222",
      Email: "siemprepar@gmail.com",
      status: true,
    },
    {
      id: "277777",
      client: "juenito jobs",
      profesion: "macdonalero",
      nivel: 0,
      telefono: "+222222222",
      Email: "siemprepar@gmail.com",
      status: false,
    },
    {
      id: "288888",
      client: "juenito jobs",
      profesion: "macdonalero",
      nivel: 0,
      telefono: "+222222222",
      Email: "siemprepar@gmail.com",
      status: false,
    },
    {
      id: "299999",
      client: "juenito jobs",
      profesion: "macdonalero",
      nivel: 0,
      telefono: "+222222222",
      Email: "siemprepar@gmail.com",
      status: false,
    },
    {
      id: "888888",
      client: "juenito jobs",
      profesion: "macdonalero",
      nivel: 0,
      telefono: "+222222222",
      Email: "siemprepar@gmail.com",
      status: false,
    },
    {
      id: "777777",
      client: "juenito jobs",
      profesion: "macdonalero",
      nivel: 0,
      telefono: "+222222222",
      Email: "siemprepar@gmail.com",
      status: false,
    },
    {
      id: "666666",
      client: "juenito jobs",
      profesion: "macdonalero",
      nivel: 0,
      telefono: "+222222222",
      Email: "siemprepar@gmail.com",
      status: false,
    },
    {
      id: "555555",
      client: "juenito jobs",
      profesion: "macdonalero",
      nivel: 0,
      telefono: "+222222222",
      Email: "siemprepar@gmail.com",
      status: false,
    },
    {
      id: "444444",
      client: "juenito jobs",
      profesion: "macdonalero",
      nivel: 0,
      telefono: "+222222222",
      Email: "siemprepar@gmail.com",
      status: false,
    },
    {
      id: "333333",
      client: "juenito jobs",
      profesion: "macdonalero",
      nivel: 0,
      telefono: "+222222222",
      Email: "siemprepar@gmail.com",
      status: false,
    },
    {
      id: "111111",
      client: "juenito jobs",
      profesion: "macdonalero",
      nivel: 0,
      telefono: "+222222222",
      Email: "siemprepar@gmail.com",
      status: false,
    },
    {
      id: "123213",
      client: "Loquito",
      profesion: "macdonalero",
      nivel: 0,
      telefono: "+222222222",
      Email: "siemprepar@gmail.com",
      status: true,
    },
  ];
  const [data, setData] = useState([]);
  useEffect(() => {
    const data = clients.filter((item) => item.status === true);
    setData(data);
  }, []);

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
      <Nav />
      <div className="w-full h-screen flex flex-col">
        <Card className="w-full h-full bg-[#222131] rounded-none p-5">
          <div className="flex justify-between items-center mx-5">
            <Title className={style.title}>Analytics</Title>
          </div>
          <Table>
            <TableHead className="text-gray-300 text-14 font-thin">
              <TableRow className="flex items-center justify-around p-3 ">
                <TableHeaderCell className="flex justify-center items-center p-0">
                  <Text className="text-start w-28 p-0">ID</Text>
                </TableHeaderCell>
                <TableHeaderCell className="flex justify-center items-center p-0">
                  <Text className="text-center w-40 p-0">Name</Text>
                </TableHeaderCell>
                <TableHeaderCell className="flex justify-center items-center p-0">
                  <Text className="text-center w-40 p-0">Profesion</Text>
                </TableHeaderCell>
                <TableHeaderCell className="flex justify-center items-center p-0">
                  <Text className="text-center w-48 p-0">Nivel</Text>
                </TableHeaderCell>
                <TableHeaderCell className="flex justify-center items-center p-0">
                  <Text className="text-center w-48 p-0">Email</Text>
                </TableHeaderCell>
                <TableHeaderCell className="flex justify-center items-center p-0">
                  <Text className="text-center w-40 p-0">TelePhone</Text>
                </TableHeaderCell>
                <TableHeaderCell className="flex justify-center items-center p-0">
                  <Text className="text-center w-48 p-0">Status</Text>
                </TableHeaderCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {currentCard.map((item) => (
                <TableRow
                  key={item.id}
                  className="flex items-center justify-around bg-gray-700 text-gray-400 text-sm p-3 rounded-lg h-14 my-5"
                >
                  <TableCell className="flex justify-center items-center p-0">
                    <Text className="text-start w-28">{item.id}</Text>
                  </TableCell>
                  <TableCell className="flex justify-center items-center p-0 ">
                    <Text className="text-center w-40">{item.client}</Text>
                  </TableCell>
                  <TableCell className="flex justify-center items-center p-0">
                    <Text className="text-center w-40">{item.profesion}</Text>
                  </TableCell>
                  <TableCell className="flex justify-center items-center p-0">
                    <Text className="text-center w-48">{item.nivel}</Text>
                  </TableCell>
                  <TableCell className="flex justify-center items-center p-0">
                    <CiMail className={style.icon} />
                    <Text className="text-center w-48">{item.Email}</Text>
                  </TableCell>
                  <TableCell className="flex justify-center items-center p-0">
                    <Text className="text-center w-40">{item.telefono}</Text>
                  </TableCell>
                  <TableCell className="flex justify-center items-center p-0">
                    {item.status ? (
                      <Text className="bg-[#26af7f]  text-[#1f1e1e]   px-2 py-1.5 rounded-xl text-center w-48">
                        Contactado
                      </Text>
                    ) : (
                      <Text className="bg-[#b44f82] text-[#e0dfdf] w-full px-2 py-1.5 rounded-xl text-center">
                        No Contactado
                      </Text>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
        <PaginationOutlined
          pageStyle={pageStyle}
          setPageStyle={setPageStyle}
          cardXPage={cardXPage}
          data={data}
          pages={pages}
        />
      </div>
    </>
  );
};
