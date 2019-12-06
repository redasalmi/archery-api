const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// api router
app.use("/api/archery", require("./routes/api/archery"));

// middleware - error handler
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "public", "error.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
