import React from "react";

import Detail from "../../components/Lideres/Employees_components/Detail/Detail";
import Nav from "../../components/Nav/Nav";
import { TableEmployees } from "../../components/Lideres/Dashboard/TableEmployees/TableEmployees";

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
