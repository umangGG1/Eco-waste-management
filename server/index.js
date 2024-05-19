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
const corsOptions = {
    origin: '*', // Allow any origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Include this if you need to handle cookies
    optionsSuccessStatus: 204 // For successful OPTIONS requests
  };
  
  app.use(cors(corsOptions)); // Apply CORS middleware globally
  
  // Handle preflight requests
  app.options('*', cors(corsOptions));

app.use("/api/users" , userRoutes);
app.use("/api/auth" , authRoutes);
app.use("/api/bhawan", bhawanRoutes);

const port = process.env.PORT || 8080;
app.listen(port, ()=>console.log(`Listening on port ${port}...`));
