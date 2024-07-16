import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";


export const register = async (req, res)=>{
     //db
     const { username, email, password } = req.body; 

     //criptografar a senha em hash

     const hashedPassword = await bcrypt.hash(password, 10);

     console.log(hashedPassword)

     //criar usuario em mongodb e salvar 

     const newUser = await prisma.user.create({
        data: {
            username,
            email,
            password:hashedPassword,
        }
     })

     console.log(newUser)

     res.status(201).json({ message: "Usuario criado com sucesso"});
}

export const login = (req, res)=>{
    //db
}

export const logout = (req, res)=>{
    //db
}