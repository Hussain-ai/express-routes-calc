const express = require('express')
const app = express()
const port = 3000


app.listen(3000, () =>{
    console.log(`I'm listening to port ${port}`)
})

app.get("/", (req, res) => {
    res.send("Type add,subtract,multiply,devide,modules in the url/ then two numbers to caluclate them");

  });


app.get("/add/:x/:y", (req, res) => {
    let x = parseInt(req.params.x)
    let y = parseInt(req.params.y)
    res.send("The answer is: " + (x + y));
  });

app.get("/subtract/:x/:y", (req, res) => {
    let x = parseInt(req.params.x)
    let y = parseInt(req.params.y)
    res.send("The answer is: " + (req.params.x - req.params.y));
  });

app.get("/multiply/:x/:y", (req, res) => {
    let x = parseInt(req.params.x)
    let y = parseInt(req.params.y)
    res.send("The answer is: " + (req.params.x * req.params.y));
  });
  
app.get("/devide/:x/:y", (req, res) => {
    let x = parseInt(req.params.x)
    let y = parseInt(req.params.y)
      res.send("The answer is: " + (req.params.x / req.params.y));
    });
    
app.get("/modules/:x/:y", (req, res) => {
    let x = parseInt(req.params.x)
    let y = parseInt(req.params.y)
          res.send("The answer is: " + (req.params.x % req.params.y));
        });

// app.get("/calculate/:symbol/:x/:y*", (req, res) => {
//     res.send("type symbol after calculate/")
// let x = parseInt(req.params.x)
// let y = parseInt(req.params.y)
//     if( req.params.symbol = "+" ){
//         res.send("The answer is: "+ (req.params.x + "" +  req.params.symbol + "" + req.params.y))
//     }
//     res.send()
//   })



