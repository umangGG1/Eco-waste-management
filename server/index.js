require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const bhawanRoutes = require("./routes/bhawan");

connection();

app.use(express.json());
app.use(cors(
    {
        origin: ["https://eco-waste-management-client.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));

app.use("/api/users" , userRoutes);
app.use("/api/auth" , authRoutes);
app.use("/api/bhawan", bhawanRoutes);

const port = process.env.PORT || 8080;
app.listen(port, ()=>console.log(`Listening on port ${port}...`));
