const Lead = require("../../models/Lead");

const getCorredorLead10 = async (email) => {
  const leadUnchecked = await Lead.find({
    corredor: email,
    checked: false,
  })
    .limit(10)
    .exec();

  let count = 0;
  count = 10 - leadUnchecked.length;
  console.log(count);

  let leadRest = [];

  if (count > 0 && count <= 10) {
    const leadRest = await Lead.find({
      checked: false,
      corredor: "",
    })
      .limit(count)
      .exec();

    if (leadRest.length > 0) {
      await Promise.all(
        leadRest.map(async (element) => {
          element.corredor = email;
          await element.save();
        })
      );
    }
  }

  console.log(...leadUnchecked, ...leadRest);
  console.log("ASD123");
  return [...leadUnchecked, ...leadRest];
};

module.exports = getCorredorLead10;
