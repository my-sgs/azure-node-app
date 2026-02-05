const express = require("express");
const app = express();

// Azure gives dynamic port
const PORT = process.env.PORT || 3000;

// Home route
app.get("/", (req, res) => {
  res.send("? Node.js App is Running on Azure App Service!");
});

// Health check
app.get("/health", (req, res) => {
  res.json({
    status: "UP",
    time: new Date()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
