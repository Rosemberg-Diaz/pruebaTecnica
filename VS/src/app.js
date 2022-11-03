import express from "express";
import peopleRoutes from "../routes/people.routes.js";
import userRoutes from "../routes/user.routes.js"
import authRoutes from "../routes/auth.routes.js"
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const app = express();
const jwt = require("jsonwebtoken")
var cors = require('cors')
const cookies = require("cookie-parser")
require("dotenv").config();

app.use(cors())
app.use(express.json());
app.use(cookies())
app.use(peopleRoutes)
app.use(userRoutes)
app.use(authRoutes)


export default app