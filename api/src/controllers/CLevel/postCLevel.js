const CLevel = require("../../models/CLevel");

const postCLevel = async ({
  name,
  email,
  birthdate,
  photo,
  country,
  contactNumber,
  description,
  deleted,
}) => {
  const cLevel = await CLevel.create({
    name,
    email,
    birthdate,
    photo,
    country,
    contactNumber,
    description,
    deleted,
  });
  return cLevel;
};

module.exports = postCLevel;
