
const SECRET_KEY = "secretkey"

const Authorization = (req, res, next) => {
    try {
        
        const authenticationHeader = req.headers["auth"];

        if (authenticationHeader && authenticationHeader === `${SECRET_KEY}`) {
            next();
        }
        else {

            console.log("Invalid or missing Secreat key".bgRed);
            
            res.status(400).json({
                success : false,
                message : "Invalid or missing Secreat key"
            })
        }


    } catch (error) {
        
        console.log(`Error in handling Authorization : ${error.message}`);
        
        
    }
}

exports.Authorization = Authorization;
