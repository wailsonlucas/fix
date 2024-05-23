const express = require('express');
const app = express();
const port =  8000;
const cors = require('cors');
const jwt = require('jsonwebtoken')
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-authorization']
}));
// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

//authenticatoins middleware
let auth = (role) => {
  return async (req, res, next) => {
    try {
      // this is how you get the jwt token from req body
    let token = res.headers['x-authorization']

    //after you get the jwt toke, you must decoded it to get the id and retrieve the user from DB
    // get rhe user from your Database to verify its role
      let user = {
        id:1,
        username: 'Mohammed',
        role:'teacher' // you can change and play with the roles here -> student/teacher
      }

       //check the role of the user here
      if(user.role === role) { 
        //attach the user from DB to req object so we can access it in the next rout       
        req.user = user
        //we call nect() to move to the next route
        next()
      } else {
        res.status(401).json('your role does not allow you to access this end point')

      }


    }catch(err){
      console.error(err)
      res.status(500).json('something went wrong')
    }
  }
}

// use this route hande user login
app.post('/api/login_etudiant', (req, res) => {
  //get your login credentials
  let {matricule,password } = req.body
  if(!matricule || !password) return console.error('missing credentials')

  //declare redirect_to to use it to dynamicly redirect to specific path based on login role 
  var redirect_to = "";

  //retrieve your user from the database
  let user = {
    id: 99,
    username: "Mohammed",
    role: 'teacher' // change this role to see different out come on fromtend
  }

  //update redirect_to variable base on user role
  if(user.role === 'student') {
    redirect_to = 'Home'
  } else {
    redirect_to = 'teacher'    
  }

  //this is your secret jwt key
  let secret_key = 'you_cant_put_your_secret_key_here'

  // after retrieving the user from DB, sign it's id, and role into a JWT roken
  let token = jwt.sign({id: user.id, role: user.role}, secret_key)

  res.status(200).json({
    message:'login with success',
    token,
    redirect_to
  });
});

app.post('/api/student_data', auth('student'), (req, res) => {
  // get the user from req object
  let { user } = req
  res.status(200).json(user)
})

app.post('/api/teacher_data', auth('teacher'), (req, res) => {
  // get the user from req object
  let { user } = req
 res.status(200).json(user)
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});