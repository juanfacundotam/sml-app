const Lead = require("../../models/Lead");

const getLead10Unchecked = async (email) => {
  console.log("hola");
  const leadUnchecked = await Lead.find({
    corredor: "nikitocja@gmail.com",
    checked: false,
    view: true,
  })
    .limit(10)
    .exec();

  let count;
  if (leadUnchecked.length > 0) {
    count = 10 - leadUnchecked.length;
  } else {
    count = 10;
  }

  console.log(count);

  const leadRest = await Lead.find({
    checked: false,
    view: false,
    corredor: "",
  })
    .limit(count)
    .exec();
  const limitedLeadRest = leadRest.slice(0, count);
  console.log(limitedLeadRest.length);

  if (limitedLeadRest.length > 0) {
    limitedLeadRest.forEach((element) => {
      element.corredor = email;
      element.view = true;
      element.save();
    });
  }

  console.log("chau");

  return [...leadUnchecked, ...limitedLeadRest];
};

module.exports = getLead10Unchecked;

// const emailProp = email.email;
// const leadChequedInactive = await Lead.find({
//   checked: true,
//   vendedor: emailProp,
//   status: "Sin contactar",
//   level: { $nin: ["incidencia", "0", "", "-"] },
// })
//   .limit(5)
//   .exec();

// const leadChequedInactiveNoResponde = await Lead.find({
//   checked: true,
//   vendedor: emailProp,
//   $or: [{ status: "No responde" }],
//   level: { $nin: ["incidencia", "0", "", "-"] },
// });

// let count = 0;

// count = 5 - leadChequedInactive.length;
// console.log(count);

// const leadRest = await Lead.find({
//   checked: true,
//   vendedor: "",
//   status: "Sin contactar",
//   level: { $nin: ["incidencia", "0", "", "-"] },
// })
//   .limit(count)
//   .exec();

// if (leadRest.length > 0) {
//   leadRest.forEach((element) => {
//     element.vendedor = emailProp;
//     element.save();
//   });
// }

// return [
//   ...leadChequedInactive,
//   ...leadRest,
//   ...leadChequedInactiveNoResponde,
// ];
