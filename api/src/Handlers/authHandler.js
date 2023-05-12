const jwt= require("jsonwebtoken")
const TOKEN_KEY="x4TvnErxREtbVCQAlL5dqMI115eNlp5y"
const postAuthHandler = async (req, res) => {
    try {
      const user= req.body.user;
      const key= req.body.key
      if (user==="andres" && key === "1234") {
        const datos= {
            id: "1",
            nombre:"andres",
            email:"andres@mail.com",
            codigo:"ABC123"
        }
        const token= jwt.sign(
          {userId:datos.id, email:datos.email},
          TOKEN_KEY,
          {expiresIn:"2h"}
        )
        let nDatos= {...datos, token}
        res.status(200).json(nDatos);
      }
      
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };

const getAuthHandler= (req, res)=>{
  const datos=[
    {id:1, cliente:"empresa 1", total:2500, fecha:"2022-01-25"},
    {id:2, cliente:"empresa 2", total:500, fecha:"2022-05-11"},
    {id:3, cliente:"empresa 3", total:2200, fecha:"2021-01-15"},
  ]
  res.status(200).json(datos)
}
  
  module.exports = { postAuthHandler, getAuthHandler };