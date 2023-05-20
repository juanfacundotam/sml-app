const Lead = require("../../models/Lead");
const Vendedor = require("../../models/Vendedor");

const updateLeadVendedorById = async (id, updatedData) => {


  // const VendedorArrays = Vendedor.find({
  //   $or: [
  //     { leads_contacted: updatedData.dataVendedor.status },
  //     { declined_leads: updatedData.dataVendedor.status },
  //     { unanswered_leads: updatedData.dataVendedor.status },
  //   ]
  // });

  // console.log(VendedorArrays);




  
  const leadCountCheck = await Lead.findById(id);
  if (
    updatedData.dataLead.status === "No responde" &&
    leadCountCheck.noresponde_count < 2
  ) {
    updatedData.dataLead.noresponde_count++;
    updatedData.dataVendedor.llamados = updatedData.dataLead.noresponde_count
  } else if (
    updatedData.dataLead.status === "No responde" &&
    leadCountCheck.noresponde_count === 2
    ) {
      updatedData.dataLead.noresponde_count = 0;
      updatedData.dataLead.status = "Rechazado";
      updatedData.dataLead.status_op = "3 llamados";
      updatedData.dataVendedor.status= "Rechazado"
      updatedData.dataVendedor.status_op = "3 llamados";
    }
    
  const leadUpdate = await Lead.findByIdAndUpdate(id, updatedData.dataLead, {
    new: true,
  });

  const valor = updatedData.dataVendedor;

  // console.log(updatedData.dataLead.status);

  // let property = "";
  // if (updatedData.dataLead.status === "Contratado") {
  //   property = "leads_contacted";
  // } else if (updatedData.dataLead.status === "Rechazado") {
  //   property = "declined_leads";
  // } else if (updatedData.dataLead.status === "No responde") {
  //   property = "unanswered_leads";
  // } else {
  //   property = "hired_leads";
  // }


  const vendedor = await Vendedor.findOneAndUpdate(
    { email: updatedData.dataLead.vendedor },
    { $push: { leads: { $each: [valor] } } },
    { new: true }
  );


  const data = {
    leadUpdate,
    vendedor,
  };

  // Imprimir la publicación completa
  return data;
  // return lead;
};

module.exports = updateLeadVendedorById;
