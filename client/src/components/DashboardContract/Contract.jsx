import React from "react";
import styles from "../DashboardContract/contract.module.css"
import { Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Title } from "@tremor/react"

const data = [
    {
        invoiseId: 1,
        name:' social media lab',
       profesion: 'ábogado',
        nivel: '1',
        telefono: '1234',
        email: 'prueba@gmail.com',
        status: 'sin contactar'
    },
    {
       invoiseId: 2,
        name:'social media lab',
       profesion: 'profesor',
        nivel: '2',
        telefono: '12345',
        email: 'henry@gmail.com',
        status: 'sin contactar'
    },
    {
        invoiseId: 3,
        name:' social media lab',
       profesion: 'programador',
        nivel: '6',
        telefono: '321',
        email: 'programador@gmail.com',
        status: 'sin contactar'

    },]

const DashboardContract = () => {
    return(
        <>
        <Card>
            <Title></Title>
            <Table className="">
            <TableHead>
                <TableRow className="bg-lime">
                    <TableHeaderCell className=" text-left font-medium">Invoice Id</TableHeaderCell>
                    <TableHeaderCell className=" text-left font-medium">Name</TableHeaderCell>
                    <TableHeaderCell className=" text-left font-medium">Profesion</TableHeaderCell>
                    <TableHeaderCell className=" text-left font-medium">Nivel</TableHeaderCell>
                    <TableHeaderCell className=" text-left font-medium">Telefono</TableHeaderCell>
                    <TableHeaderCell className=" text-left font-medium">Email</TableHeaderCell>
                    <TableHeaderCell className=" text-left font-medium">Status</TableHeaderCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((item) => (
                    <TableRow className={`${styles.styles}`}>
                        <TableCell className=" text-left">{item.invoiseId}</TableCell>
                        <TableCell className=" text-left">{item.name}</TableCell>
                        <TableCell className=" text-left">{item.profesion}</TableCell>
                        <TableCell className=" text-left">{item.nivel}</TableCell>
                        <TableCell className=" text-left">{item.telefono}</TableCell>
                        <TableCell className=" text-left">{item.email}</TableCell>
                        <TableCell className=" text-left">{item.status}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            </Table>
        </Card>
        </>
    )
}

export default DashboardContract;