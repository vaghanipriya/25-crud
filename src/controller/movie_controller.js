const { movie_service } = require("../services");

const create_movie = async (req, res) => {
    try {
        //   services
        const data = req.body;
        const new_movie = await movie_service.create_movie_S(data);
        res.status(200).json({
            success: true,
            data: new_movie,
        });
    } catch (error) {
        //  err

        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const get_movie = async(req,res) =>{
  try{

  }catch(error){
    ~
  }
}

module.exports = {
    create_movie,
    get_movie
};
