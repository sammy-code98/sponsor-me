// this is the api endpoint that interacts with the stripe

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import { NextApiRequest, NextApiResponse } from "next";
const URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://sponsor-me.vercel.app/";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { amount } = req.body;

  const items = [
    {
      price_data: {
        currency: "usd",
        product_data: {
          name: `sponsoring sammy`,
        },
        unit_amout: amount * 100,
      },
      quantity: 1,
    },
  ];
  const session = await stripe.checkout.sessions.create({
    line_items: items,
    mode: "payment",
    success_url: `${URL}/sucess`,
    cancel_url: URL,
  });
  res.status(200).json({ id: session.id });
};

export default handler;
