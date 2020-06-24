const { Router } = require("express");
const router = Router();
const stripe = require("stripe")(
    "sk_test_51GsNKcFWHBGX5OZcHlPqc7lym4HtrZ5ZcVnkXoRRRPJOt0EWPgBjoBeUqKEKnSrF1RkS8XjGzJi6f78bwKp21itn00jIJvrQAn"
  );
router.post("/checkout", async (req, res) => {
    const customer = await stripe.customers.create({
      email: req.body.stripeEmail,
      source: req.body.stripeToken,
    });
    const charge = await stripe.charges.create({
      amount: "3000",
      currency: "usd",
      customer: customer.id,
      description: "100 suscriptores",
    });
    console.log(charge.id);
    res.send("resivido");
  });