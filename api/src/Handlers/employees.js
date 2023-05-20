const postEmployees = require("../controllers/Employees/postEmployees");

const postEmployeesHandler = async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const Employees = await postEmployees(data);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { postEmployeesHandler };
