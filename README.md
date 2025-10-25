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
    "description": "Destinasi tropis dengan pemandangan laut yang menakjubkan.",
    "screen": "DetailLabuanBajoScreen"
  },
  {
    "id": "2",
    "name": "Venezia",
    "image": "https://raw.githubusercontent.com/Ranggis/Api-Image/main/venezia.png",
    "description": "Kota air romantis dengan gondola dan arsitektur klasik.",
    "screen": "DetailVeneziaScreen"
  },
  {
    "id": "3",
    "name": "Amsterdam",
    "image": "https://raw.githubusercontent.com/Ranggis/Api-Image/main/amsterdam.png",
    "description": "Kota kanal indah di Belanda dengan budaya yang unik dan kehidupan malam yang ramai.",
    "screen": "DetailAmsterdamScreen"
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
| **Settings Screen**     | Settings Page                              |

---

## 🖼️ Screenshots

| Start Screen                            | Home Screen                              | Ticket Screen                               | Profil Screen                        |
| ------------------------------- | ----------------------------------- | --------------------------------------- | ------------------------------------- |
| ![Start Screen](https://github.com/Ranggis/TUGAS-PEMROGRAMAN-PERANGKAT-MOBILE-SESI-6-API-TRAVEL-APP/blob/main/Hasil%20Implementasi/Screenshot_2025-10-25-22-01-52-74_c5521371e7af5ef65d6934ac1923943a.jpg) | ![Home Screen](https://github.com/Ranggis/TUGAS-PEMROGRAMAN-PERANGKAT-MOBILE-SESI-6-API-TRAVEL-APP/blob/main/Hasil%20Implementasi/Screenshot_2025-10-25-22-01-57-75_c5521371e7af5ef65d6934ac1923943a.jpg) | ![Ticket Screen](https://github.com/Ranggis/TUGAS-PEMROGRAMAN-PERANGKAT-MOBILE-SESI-6-API-TRAVEL-APP/blob/main/Hasil%20Implementasi/Screenshot_2025-10-25-22-02-08-02_c5521371e7af5ef65d6934ac1923943a.jpg) | ![Profil Screen](https://github.com/Ranggis/TUGAS-PEMROGRAMAN-PERANGKAT-MOBILE-SESI-6-API-TRAVEL-APP/blob/main/Hasil%20Implementasi/Screenshot_2025-10-25-22-02-10-42_c5521371e7af5ef65d6934ac1923943a.jpg) |

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

**Ranggis**
*Developed with ☕ using React Native and TypeScript*

📧 Email: [ranggis@example.com](mailto:ranggis@gmail.com)
🌐 GitHub: [@Ranggis](https://github.com/Ranggis)
