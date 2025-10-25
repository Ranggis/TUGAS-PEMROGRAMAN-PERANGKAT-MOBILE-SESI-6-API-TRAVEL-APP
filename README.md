# API Method App in Travel

A **React Native application** that allows users to explore destinations, manage wishlists, and select their preferred **payment methods**. This app is designed with clean UI, API integration using **MockAPI**, and modern navigation flow using **React Navigation**.

---

## 🚀 Features

* 🏝️ **Explore Destinations** — View popular travel spots such as Labuan Bajo, Venezia, and Amsterdam.
* 💖 **Wishlist System** — Add or remove destinations to your personalized wishlist.
* 💵 **Payment Methods** — Choose between multiple secure payment options like Credit Card, PayPal, Google Pay, and Bank Transfer.
* 🧭 **Smooth Navigation** — Seamless transitions between screens using React Navigation Stack.
* ☁️ **MockAPI Integration** — Fetch destination and wishlist data from a live API endpoint.

---

## 🧩 Tech Stack

| Category      | Technology                          |
| ------------- | ----------------------------------- |
| Framework     | React Native                        |
| Language      | TypeScript                          |
| Navigation    | React Navigation                    |
| API Service   | MockAPI.io                          |
| UI Components | React Native Vector Icons, BlurView |
| Data Fetching | Fetch API                           |

---

## 🔗 API Endpoints

**Base URL:**

```
https://68fc9df096f6ff19b9f5ba25.mockapi.io/ranggis
```

**Endpoints:**

| Endpoint        | Description                              |
| --------------- | ---------------------------------------- |
| `/destinations` | Get list of travel destinations          |
| `/wishlist`     | Manage user wishlist (GET, POST, DELETE) |

Example `destinations` JSON:

```json
[
  {
    "id": "1",
    "name": "Labuan Bajo",
    "image": "https://raw.githubusercontent.com/Ranggis/Api-Image/main/Labuan%20Bajo.png",
    "description": "Destinasi tropis dengan pemandangan laut yang menakjubkan."
  },
  {
    "id": "2",
    "name": "Venezia",
    "image": "https://raw.githubusercontent.com/Ranggis/Api-Image/main/venezia.png",
    "description": "Kota air romantis dengan gondola dan arsitektur klasik."
  }
]
```

---

## 📱 Screens Overview

| Screen                  | Description                                |
| ----------------------- | ------------------------------------------ |
| **StartScreen**         | Landing page with start exploration button |
| **HomeScreen**          | Main screen displaying destinations        |
| **DetailScreen**        | Detailed view of selected destination      |
| **WishlistScreen**      | Displays saved destinations                |
| **ProfileScreen**       | User profile & settings                    |
| **PaymentMethodScreen** | Choose payment method for booking          |
| **HelpSupportScreen**   | Contact & support page                     |

---

## 🖼️ Screenshots

| Home                            | Detail                              | Wishlist                                | Payment Method                        |
| ------------------------------- | ----------------------------------- | --------------------------------------- | ------------------------------------- |
| ![Home](./screenshots/home.png) | ![Detail](./screenshots/detail.png) | ![Wishlist](./screenshots/wishlist.png) | ![Payment](./screenshots/payment.png) |

---

## ⚙️ Installation

1. Clone this repository

   ```bash
   git clone https://github.com/yourusername/TravelApp.git
   ```
2. Navigate into the folder

   ```bash
   cd TravelApp
   ```
3. Install dependencies

   ```bash
   npm install
   ```
4. Start the project

   ```bash
   npx react-native start
   ```

---

## 🧠 Developer Notes

* All API data is fetched from **MockAPI.io**, ensuring easy testing and modification.
* Images are hosted on GitHub using the **raw.githubusercontent.com** path.
* Each feature is modular and can be extended (e.g., add login, dark mode, or real payment gateway integration).

---

## 👨‍💻 Author

**Mochammad Ranggis Refaldi**
*Developed with ❤️ using React Native and TypeScript*

📧 Email: [ranggis@example.com](mailto:ranggis@example.com)
🌐 GitHub: [@Ranggis](https://github.com/Ranggis)
