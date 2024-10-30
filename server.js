import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import cors from "cors"
const app = express();

const PORT = 3000;

// Middleware for parsing form data
app.use(bodyParser.json());
app.use(cors({
    origin: "http://127.0.0.1:5500", // Allow requests from the frontend
    credentials: true, // Allow session cookies to be sent cross-origin
  }));


app.use(
  session({
    secret: "StrongestPasswordInTheWorld123@", // Secure key
    resave: false,
    saveUninitialized: false, // Only save sessions with data
    cookie: { maxAge: 60000, secure: false }, // Set secure: true for HTTPS in production
  })
);

app.post("/register", (req, res) => {
    console.log("Working");
  console.log(req.body);
  console.log(req);
  req.session.userId=req.body.username;
  return res.status(200).json({ message: "Success"});
});
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
