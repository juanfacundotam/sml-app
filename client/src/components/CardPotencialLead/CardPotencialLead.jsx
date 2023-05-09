import React from "react";
import styles from '../CardPotencialLead/CardPotencialLead.module.css'
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
            <Table >
            <TableHead>
                <TableRow className={`${styles.tableRow} ${styles.tableRowH}`}>
                    <TableHeaderCell className={`${styles.p}`}>Invoice Id</TableHeaderCell>
                    <TableHeaderCell className={`${styles.p}`}>Name</TableHeaderCell>
                    <TableHeaderCell className={`${styles.p}`}>Profesion</TableHeaderCell>
                    <TableHeaderCell className={`${styles.p}`}>Nivel</TableHeaderCell>
                    <TableHeaderCell className={`${styles.p}`}>Telefono</TableHeaderCell>
                    <TableHeaderCell className={`${styles.p}`}>Email</TableHeaderCell>
                    <TableHeaderCell className={`${styles.p}`}>Status</TableHeaderCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((item) => (
                    <TableRow className={`${styles.tableRow}`}>
                        <TableCell className={`${styles.p}`}>{item.invoiseId}</TableCell>
                        <TableCell className={`${styles.p}`}>{item.name}</TableCell>
                        <TableCell className={`${styles.p}`}>{item.profesion}</TableCell>
                        <TableCell className={`${styles.level} ${"stext-left"}`}>{item.nivel}</TableCell>
                        <TableCell className={`${styles.p}`}>{item.telefono}</TableCell>
                        <TableCell className={`${styles.p}`}>{item.email}</TableCell>
                        <TableCell className={`${styles.status}`}>{item.status}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            </Table>
        </Card>
        </>
    )
}

export default DashboardContract;