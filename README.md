# AI Website Builder 🚀

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white)
![Render](https://img.shields.io/badge/Render-6E40E1?style=for-the-badge&logo=render&logoColor=white)

**AI Website Builder** is an AI-powered SaaS platform that automatically generates websites and deploys them **in one click**. It includes a **credit-based system, secure Stripe payments, authentication, and production deployment**.

---

## 🌐 Live Demo

Try it live here: [https://ai-website-builder-1-c4i0.onrender.com](https://ai-website-builder-1-c4i0.onrender.com)

---

## 🔥 Features

- **AI Website Generation:** Describe your idea → AI generates fully functional websites.
- **One-Click Deployment:** Instantly deploy websites with a live URL.
- **Credit-Based System:** Each website generation consumes user credits.
- **Stripe Payment Integration:** Secure credit purchase with real-time updates via webhooks.
- **Premium Animations:** Smooth UI powered by Framer Motion.
- **Authentication & Protected Routes:** User accounts with JWT authentication.
- **Production Deployment:** Frontend + backend hosted on Render Cloud.

---

## 🛠 Tech Stack

**Frontend:** React.js, Tailwind CSS, Framer Motion  
**Backend:** Node.js, Express.js, MongoDB  
**Payments:** Stripe Checkout + Webhooks  
**Deployment:** Render Cloud Hosting  

---

## ⚙️ Getting Started (Local Setup)

### Prerequisites

- Node.js (v18+)
- MongoDB (local or Atlas)
- Stripe account (for payments)
- Render account (optional, for deployment)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/ai-website-builder.git
cd ai-website-builder
Install dependencies:
# Frontend
cd client
npm install

# Backend
cd ../server
npm install

Create a .env file in the server folder:
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
FRONTEND_URL=http://localhost:3000

Run the development servers:
# Backend
cd server
npm run dev

# Frontend
cd client
npm start
