import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    console.log(newUser);

    res.status(201).json({ message: "Usuario criado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao criar usuário" });
  }
};

export const login = async (req, res)=>{
    
    //
    const { username, password } = req.body;

    //checar se o usuario existe
    try{

      const user = await prisma.user.findUnique({
        where:{username}
      })

      if(!user) return res.status(404).json({message:"Credenciais invalidas!"})


        //checar se a senha está certa
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid) return res.status(404).json({message:"Credenciais invalidas!"})

       //gerar um token cookie e enviar para o usuario

       const age = 1000 * 60 * 60 * 24 * 7

       const token = jwt.sign({
        id:user.id
        }, process.env.JWT_SECRET_KEY, 
        {expiresIn: age}
      )

       res.cookie("token", token, {
        httpOnly: true,
        maxAge: age,
       })
       .status(200)
       .json({ message: "Login efetuado com sucesso"})
       
    }catch(err){
      console.log(err)
      res.status(500).json({message:"Falha no login"})
    }

}

export const logout = (req, res)=>{
    res.clearCookie("token").status(200).json({message:"Logout efetuado com sucesso"})
}