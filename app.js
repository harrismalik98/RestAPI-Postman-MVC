const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true })); // For getting requset data or req.body
app.use(express.json()); // Converting data into JSON format.


const contactRoute = require("./routes/contactRoutes");
app.use("/", contactRoute);



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});