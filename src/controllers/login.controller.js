//GET
export const loginUser = async (req,res)=>{
    const user = req.body;

    return res.json("recibido");
}

//POST
export const signup = async (req,res) => {
    let clientData = req.body;
    clientData.forEach( client => {
        fireRecord.push({

        });
    });
    res.json('entregado');
}