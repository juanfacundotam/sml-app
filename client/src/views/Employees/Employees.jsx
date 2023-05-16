import React from "react";
import Detail from "../../components/Lideres/Employees/Detail/Detail";
import Nav from "../../components/Nav/Nav";
import { TableEmployees } from "../../components/Lideres/Employees/TableEmployees/TableEmployees";

function Employees() {
  return (
    <>
      <Nav />
      <TableEmployees />
      <Detail performance={true} />
    </>
  );
}

export default Employees;
