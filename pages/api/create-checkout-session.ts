// this is the api endpoint that interacts with the stripe

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import { NextApiRequest, NextApiResponse } from "next";
const URL = "http://localhost:3000";

const handler = async(req:NextApiRequest,  res:NextApiResponse) => 
