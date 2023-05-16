const Corredor = require("../../models/Corredor");

const postCorredor = async ({
  name,
  email,
  birthdate,
  photo,
  country,
  contactNumber,
  description,
  classifications,
  average_delay,
  incidences,
  hired_leads,
  deleted,
}) => {
  const corredor = await Corredor.create({
    name,
    email,
    birthdate,
    photo,
    country,
    contactNumber,
    description,
    classifications,
    average_delay,
    incidences,
    hired_leads,
    deleted,
  });
  return corredor;
};

module.exports = postCorredor;
