const express = require('express');

const app = express();



// Init Middleware to send and receive json data
app.use(express.json({ extends: false }));


//Define routes
app.use("/api/products", require("./services/products"));
app.use("/api/shopping", require("./services/shopping"));
app.use("/api/customer", require("./services/customer"));



const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});