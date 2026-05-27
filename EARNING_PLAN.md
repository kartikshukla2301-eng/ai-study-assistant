# Earning Plan

AI Study Assistant can earn through subscriptions, paid exam packs, and premium AI limits.

## Best MVP Pricing

Start simple:

```text
Free Plan: limited chats and study generations
Pro Plan: monthly subscription with higher usage
Exam Pack: one-time payment for specific subjects
```

Suggested India-friendly pricing:

```text
Free: Rs 0
Pro Monthly: Rs 99 to Rs 199
Semester Pack: Rs 299 to Rs 499
```

## Recommended Payment Gateways

### Razorpay

Best for India-focused launch.

Use Razorpay Subscriptions if you want recurring monthly plans.

Use Razorpay Orders if you want one-time exam packs.

### Stripe

Good for international SaaS.

Use Stripe Checkout for hosted payment pages and Stripe Billing for subscriptions.

## Premium Feature Ideas

Free users:

- 10 chats per day
- 5 study generations per day
- Basic themes

Pro users:

- Unlimited chat history
- Higher daily usage
- PDF summaries
- OCR support
- Exam Kit
- Revision planner
- Priority AI model when a real AI API is connected

## Database Changes Needed For Payments

Add fields to the User model:

```js
plan: "free" | "pro"
subscriptionStatus: "inactive" | "active" | "cancelled"
paymentProvider: "razorpay" | "stripe"
customerId: String
subscriptionId: String
usage: {
  chatsToday: Number,
  studyGenerationsToday: Number,
  resetAt: Date
}
```

## Payment Flow

1. User clicks Upgrade.
2. Backend creates Razorpay/Stripe checkout session.
3. User pays on hosted checkout page.
4. Payment gateway sends webhook to backend.
5. Backend verifies webhook signature.
6. Backend upgrades user plan in MongoDB.
7. Frontend unlocks premium features.

## Public Launch Checklist

- Production deployment complete.
- Google login working.
- MongoDB Atlas connected.
- Payment gateway test mode working.
- Terms and privacy pages added.
- Daily usage limits added.
- Admin analytics added.
- Landing page added.
- Custom domain connected.
