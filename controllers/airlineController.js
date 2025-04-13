import client from '../connection.js'

//Get all airlines - /api/airlines/
const index = async (req,res) => {
    try {
        const result = await client.query('SELECT * FROM AIRLINES');
        if(result.length === 0 ){
            return res.status(400).json({message:"no airlines found "});
        }
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json( {error:error.message} )
    }
}

export{ index }