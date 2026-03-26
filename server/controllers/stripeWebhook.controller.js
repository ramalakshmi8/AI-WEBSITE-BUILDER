import stripe from "../config/stripe.js";
import User from "../models/user.model.js";

const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;

export const stripeWebhook = async (req, res) => {
  const sig = req.headers["stripe-signature"];
  let event;

  // ✅ Verify webhook
  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    console.log("❌ Webhook error:", error.message);
    return res.status(400).json({ message: "webhook error" });
  }

  // ✅ Handle only checkout success
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    const userId = session.metadata?.userId;
    const credits = Number(session.metadata?.credits || 0);
    const plan = session.metadata?.plan;

    // if (!userId) {
    //   return res.status(400).json({ message: "Invalid metadata" });
    // }

    // try {
    //   await User.findByIdAndUpdate(userId, {
    //     $inc: { credits },
    //     plan,
    //   });

    //   console.log("✅ Credits updated:", userId);
    // } catch (err) {
    //   console.log("❌ DB error:", err);
    //   return res.status(500).json({ message: "DB error" });
    // }
    console.log("🔥 WEBHOOK HIT");

if (event.type === "checkout.session.completed") {
  const session = event.data.object;

  console.log("SESSION:", session);
  console.log("METADATA:", session.metadata);

  const userId = session.metadata?.userId;
  const credits = Number(session.metadata?.credits || 0);

  console.log("Updating user:", userId, credits);

  await User.findByIdAndUpdate(userId, {
    $inc: { credits },
  });

  console.log("✅ Credits updated");
}
  }

  return res.status(200).json({ received: true });
};
