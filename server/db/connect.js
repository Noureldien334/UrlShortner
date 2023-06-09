import mongoose from "mongoose";

export function connection (uri)  {
    return mongoose.connect(uri,
        {
            useNewUrlParser:true,
            useUnifiedTopology: true,
        })
}