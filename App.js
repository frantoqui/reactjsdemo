/*Rest API*/
import express from "express";
import bodyparser from "body-parser";
import cors from "cors";



/*API*/
import Dependencies from "./api/dependencies";

/*We use Express for the Rest API*/

const app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use("/dependencies",dependencies);

//if we are here then the specified request is not found
app.use((req,res,next)=> {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

//all other requests are not implemented.
app.use((err,req, res, next) => {
   res.status(err.status || 501);
   res.json({
       error: {
           code: err.status || 501,
           message: err.message
       }
   });
});

module.exports = app;
