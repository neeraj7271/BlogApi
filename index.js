import express from "express";
import data from "./data.js";
import cors from "cors"



const app = express();

app.use(cors())




const port = process.env.PORT || 3000;

// Define a sample endpoint

app.get("/", (req, res) => {
  res.json({data: data});
})

app.get("/page=:page", (req, res) => {
  let index = req.params.page;
  console.log(index);
  

  if(index > data.length) {
    res.json({data: "data not found"});
  }
  
  res.json({ data: data[`page${index}`]});
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});