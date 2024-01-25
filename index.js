import express from "express";
import data from "./data.js";



const app = express();




const port = process.env.PORT || 3000;

// Define a sample endpoint

app.get("/", (req, res) => {
  res.json({data: data});
})

app.get("/page=:page", (req, res) => {
  let index = req.params.page;

  if(index > data.length) {
    res.json({data: "data not found"});
  }
  
  res.json({ data: data[index]});
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});