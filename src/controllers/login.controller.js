

//POST
export const loginUser = async (req,res)=>{
    const user = req.body;

    res.json("recibido");
}

//POST
export const signup = async (req,res) => {
    const clientData = req.body;
    /*
    clientData.forEach( client => {
        fireRecord.push({

        });
    });
    */
    res.json('entregado');
}

export const list = async (req, res) => {
    
}