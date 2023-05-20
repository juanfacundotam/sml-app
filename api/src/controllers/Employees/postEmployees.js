const Employees = require("../../models/Employees");

const postEmployees = async ({ name, email, rol }) => {
  const employees = await Employees.create({
    name,
    email,
    rol,
  });
  return employees;
};

module.exports = postEmployees;
