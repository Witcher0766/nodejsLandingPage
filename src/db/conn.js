const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/vishudynamicpage", {
    // useNewUrlParser: true,
    // useUnifieldTopology: true,
    // useCreateIndex:true
}).then(() => {
    console.log(`Connection is successful`);
}).catch((error) => {
    console.log(error);
})