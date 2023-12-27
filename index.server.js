const express = require("express");
require("dotenv").config();
const dbConfig = require('./src/config/db.config');
const app = express();
var cors = require("cors");
// const authRouter = require("./routes/auth");
const authRouter = require("./src/routes/auth");

app.use(cors());
app.use(express.json());
app.use("/api", authRouter);
//Port and Connect to DB


var corsOptions = {
    origin: "mongodb://localhost:27017"
  };

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
  
//   const db = require("./app/models");
const db = require("./src/models");

  const Role = db.role;
  
  // Use the connection string directly without constructing it manually
//   db.mongoose
//     .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then(() => {
//       console.log("Successfully connect to MongoDB.");
//       initial();
//     })
//     .catch((err) => {
//       console.error("Connection error", err);
//       process.exit(1);
//     });
  
db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`)
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    // Your code here
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit(1);
  });

