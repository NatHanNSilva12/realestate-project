import bcrypt from "bcrypt";


export const register = async (req, res)=>{
     //db
     const { username, email, password } = req.body; 

     const hashedPassword = await bcrypt.hash(password, 10);

     console.log(hashedPassword)
}

export const login = (req, res)=>{
    //db
}

export const logout = (req, res)=>{
    //db
}