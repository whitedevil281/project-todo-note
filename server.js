import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path'
import mongoose from 'mongoose';
import { acdata } from "./models/detailsmodel.js"

// Get the directory name (equivalent of __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()
const port = 3000
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'))
app.set('view engine', 'ejs');
let connection = await mongoose.connect("mongodb://localhost:27017/Todoapp")
app.use(express.json())

app.get('/', (req, res) => {
  res.render("login")
})
app.post('/signup', (req, res) => {
  let details = req.body //array of details of sign up 
  let id = details.username
  let emailid = details.email
  let passwordval = details.pass
  console.log(id, emailid, passwordval);
  const dataac = new acdata({
    email: emailid,
    userid: id,
    pass: passwordval
  })
  dataac.save()
}
)
app.get('/login', async (req, res) => {
  let details = req.body;
  let id = details.username;
  let passwordval = details.pass;
   try {
    let dataac = await acdata.findOne({
      userid: id,
      pass: passwordval
    });
    
    if (dataac) {
      console.log("found"); 
      res.redirect("/todo")
    } else {
      console.log("not found");
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error(error); // Print out any errors
  }
});
app.get('/todo', (req, res) => {
  res.render("main")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})