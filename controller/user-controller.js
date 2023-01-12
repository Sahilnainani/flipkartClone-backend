import User from "../model/user-schema.js";

export const usersignup= async(req,resp)=>{
    try{
        console.log(req.body)
        const exist = await User.findOne({username:req.body.username})
        if(exist){
            return resp.status(401).json({ message: 'User already exist'});
        }
        const user=req.body;
        const newUser=new User(user);
        await newUser.save()
        resp.status(200).json({ mesage: user });
        console.log(req.body)
    }
    catch(error){
        resp.status(500).json({ message: error.message });
    }
}
export const userlogin= async(req,resp)=>{
    try{
        const username=req.body.username;
        const password=req.body.password;
        let user = await User.findOne({username:username,password:password})
        if(user){
            return resp.status(200).json(`${username} login successful`)
        }
        else{
            return resp.status(401).json('Invalid request')
        }
    }
    catch(error){
        resp.status(500).json({ message: error.message });
    }
}