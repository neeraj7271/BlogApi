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

app.get("/page:page", (req, res) => {
  const pageNumber = parseInt(req.params.page);
  const pageKey =  `page${pageNumber}`;
  

  if(data[pageKey]) {

    res.json({ data: data[pageKey]});
  } else {
    res.json({error: "Unable to fetch data"});
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});