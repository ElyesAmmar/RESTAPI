const User=  require("../model/User");

exports.getUsers = async(req, res)=>{
    try{
       const result= await User.find({})
       return res.status(200).send({msg:"getting Users success", response: result})
    }catch(error){
        console.log(error)
        return res.status(500).send({msg:"getting Users failed"})
    }
}
exports.postUser = async(req, res)=>{
    try{
        const query= req.body;
        const newUser= new User(query);
        newUser.save()
        return res.status(200).send({msg:"adding user successfully", response:newUser})
        
      
    }catch(error){
        console.log(error)
        return res.status(500).send({msg:"addding Users failed"})
    }
}

// const {UserName, Email}= req.body;
//         if(!UserName || !Email){
//             return res.status(200).send({msg:"please enter all fields"})
//         }