import { useState, useEffect } from "react";
import style from "./CorredoresDashboard.module.css";
import Nav from "../../Nav/Nav";

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

import { CiGlobe, CiWarning, CiInstagram } from "react-icons/ci";

const CorredoresDashboard = () => {
  const [client, setClient] = useState([
    {
      id: 1,
      name: "",
      Web: "",
      Instagram: "",
      Nivel: "",
      Incidencia: "",
    },
    {
      id: 2,
      name: "",
      Web: "",
      Instagram: "",
      Nivel: "",
      Incidencia: "",
    },
    {
      id: 3,
      name: "",
      Web: "",
      Instagram: "",
      Nivel: "",
      Incidencia: "",
    },
    {
      id: 4,
      name: "",
      Web: "",
      Instagram: "",
      Nivel: "",
      Incidencia: "",
    },
    {
      id: 5,
      name: "",
      Web: "",
      Instagram: "",
      Nivel: "",
      Incidencia: "",
    },
    {
      id: 6,
      name: "",
      Web: "",
      Instagram: "",
      Nivel: "",
      Incidencia: "",
    },
    {
      id: 7,
      name: "",
      Web: "",
      Instagram: "",
      Nivel: "",
      Incidencia: "",
    },
    {
      id: 8,
      name: "",
      Web: "",
      Instagram: "",
      Nivel: "",
      Incidencia: "",
    },
    {
      id: 9,
      name: "",
      Web: "",
      Instagram: "",
      Nivel: "",
      Incidencia: "",
    },
    {
      id: 10,
      name: "",
      Web: "",
      Instagram: "",
      Nivel: "",
      Incidencia: "",
    },
  ]);

  const [buttonWebStates, setButtonWebStates] = useState(
    client.map(() => false)
  );
  const [buttoninstaStates, setButtoninstaStates] = useState(
    client.map(() => false)
  );
  const [buttonIncidenciaStates, setbuttonIncidenciaStates] = useState(
    client.map(() => false)
  );
  const [webComplete, setWebComplete] = useState(client.map(() => false));
  const [instaComplete, setInstaComplete] = useState(client.map(() => false));

  useEffect(() => {}, [client]);

  const handleClientClick = (event, index) => {
    const { name, value } = event.target;

    setClient((prevState) => {
      const updatedClient = [...prevState];
      updatedClient[index] = {
        ...updatedClient[index],
        [name]: value,
        Nivel: value,
      };
      if (name === "Web") {
        setWebComplete((prevWebComplete) => {
          const updatedWebComplete = [...prevWebComplete];
          updatedWebComplete[index] = value.trim() !== "";
          return updatedWebComplete;
        });
      }
      if (name === "Instagram") {
        setInstaComplete((prevInstaComplete) => {
          const updatedInstaComplete = [...prevInstaComplete];
          updatedInstaComplete[index] = value.trim() !== "";
          return updatedInstaComplete;
        });
      }
      return updatedClient;
    });
  };
  const handleClickWeb = (index) => {
    setButtonWebStates((prevState) => {
      const updatedStates = [...prevState];
      updatedStates[index] = !updatedStates[index];
      return updatedStates;
    });
  };
  const handleClickInsta = (index) => {
    setButtoninstaStates((prevState) => {
      const updated = [...prevState];
      updated[index] = !updated[index];
      return updated;
    });
  };
  const handleClickIncidencia = (index) => {
    setbuttonIncidenciaStates((prevState) => {
      const updatedIncidencia = [...prevState];
      updatedIncidencia[index] = !updatedIncidencia[index];
      return updatedIncidencia;
    });
  };
  const handleClickWebComplete = (index) => {
    setWebComplete((prevState) => {
      const updatedWebComple = [...prevState];
      updatedWebComple[index] = !updatedWebComple[index];
      return updatedWebComple;
    });
  };

  return (
    <>
    <Nav/>
      <Card className="w-full h-screen m-5">
        <div className="flex justify-between items-center m-5">
          <Title className={style.title}>Dashboard</Title>
          <button className={style.buttonAdd}>Send </button>
        </div>

        <Table className={style.table}>
          <TableHead className={style.tableHead}>
            <TableRow className={style.tableRow}>
              <TableHeaderCell className="text-start">
                Invoice Id
              </TableHeaderCell>
              <TableHeaderCell className="text-start">Name</TableHeaderCell>
              <TableHeaderCell className="text-start">Web</TableHeaderCell>
              <TableHeaderCell className="text-start">
                Instagram
              </TableHeaderCell>
              <TableHeaderCell className="text-start">Nivel</TableHeaderCell>
              <TableHeaderCell className="text-start">
                Incidencia
              </TableHeaderCell>
            </TableRow>
          </TableHead>

          <TableBody className={style.tableBody}>
            {client.map((item, index) => (
              <TableRow key={item.id} className={style.tableCards}>
                <TableCell className="flex justify-start items-center p-0">
                  <div className="w-8 ml-2 mr-4 rounded-full">{item.id}</div>
                </TableCell>
                <TableCell className="flex justify-start items-center p-0">
                  <Text className="text-start">
                    <input
                      className={style.inputName}
                      type="text"
                      name="name"
                      value={client[index].name}
                      onChange={(event) => handleClientClick(event, index)}
                      placeholder="Ingrese el nombre"
                    />
                  </Text>
                </TableCell>

                <TableCell className="flex justify-start items-center p-0">
                  {/* Botón de web */}

                  <button
                    type="button"
                    name={item.id}
                    onClick={() => handleClickWeb(index)}
                  >
                    <CiGlobe
                      className={
                        webComplete[index] ? style.iconComplete : style.icon
                      }
                    />
                  </button>
                  {/* Input de web */}
                  {buttonWebStates[index] && (
                    <div className={style.divInput2}>
                      <input
                        className={style.input}
                        type="text"
                        name="Web"
                        value={client[index].Web}
                        onChange={(event) => handleClientClick(event, index)}
                        placeholder="Ingrese la url"
                      />
                      <button
                        className={style.bottomInput}
                        type="button"
                        name={item.id}
                        onClick={() => handleClickWeb(index)}
                      >
                        cerrar
                      </button>
                    </div>
                  )}
                  {buttonWebStates[index] && <div className={style.divInput} />}
                </TableCell>

                <TableCell className="flex justify-start items-center p-0 mx-3">
                  <button
                    type="button"
                    name={item.id}
                    onClick={() => handleClickInsta(index)}
                  >
                    <CiInstagram
                      className={
                        instaComplete[index]
                          ? style.iconInstaComplete
                          : style.icon
                      }
                    />
                  </button>
                  {instaComplete[index] && (
                    <Text className="text-start">{item.Instagram}</Text>
                  )}
                  {buttoninstaStates[index] && (
                    <div className={style.divInput2}>
                      <input
                        className={style.input}
                        type="text"
                        name="Instagram"
                        value={client[index].Instagram}
                        onChange={(event) => handleClientClick(event, index)}
                        placeholder="Ingrese un insta"
                      />
                      <button
                        className={style.bottomInput}
                        type="button"
                        name={item.id}
                        onClick={() => handleClickInsta(index)}
                      >
                        cerrar
                      </button>
                    </div>
                  )}
                  {buttoninstaStates[index] && (
                    <div className={style.divInput} />
                  )}
                </TableCell>

                <TableCell className="flex justify-start items-center p-0">
                  <button
                    className={
                      item.Nivel === "1"
                        ? style.buttonNivelActive
                        : style.buttonNivel
                    }
                    type="button"
                    name={item.id}
                    value="1"
                    onClick={(event) => handleClientClick(event, index)}
                  >
                    1
                  </button>
                  <button
                    className={
                      item.Nivel === "2"
                        ? style.buttonNivelActive
                        : style.buttonNivel
                    }
                    type="button"
                    name={item.id}
                    value="2"
                    onClick={(event) => handleClientClick(event, index)}
                  >
                    2
                  </button>
                  <button
                    className={
                      item.Nivel === "3"
                        ? style.buttonNivelActive
                        : style.buttonNivel
                    }
                    type="button"
                    name={item.id}
                    value="3"
                    onClick={(event) => handleClientClick(event, index)}
                  >
                    3
                  </button>
                </TableCell>

                <TableCell className="flex justify-start items-center p-0">
                  <button
                    type="button"
                    name={item.id}
                    onClick={() => handleClickIncidencia(index)}
                  >
                    <CiWarning className={style.icon} />
                  </button>
                  {buttonIncidenciaStates[index] && (
                    <input
                      type="text"
                      name="Incidencia"
                      value={client[index].Incidencia}
                      onChange={(event) => handleClientClick(event, index)}
                      placeholder="Ingrese un incidencia"
                    />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </>
  );
};

export default CorredoresDashboard;
