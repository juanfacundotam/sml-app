const Leader = require("../../models/Leader");

const postLeader = async ({
  name,
  email,
  birthdate,
  photo,
  country,
  contactNumber,
  description,
  deleted,
}) => {
  const leader = await Leader.create({
    name,
    email,
    birthdate,
    photo,
    country,
    contactNumber,
    description,
    deleted,
  });
  return leader;
};

module.exports = postLeader;
