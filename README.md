# 🌾 Kisan: Next-Gen Agricultural Intelligence & E-Commerce Platform

Kisan is a high-performance, modern web application designed for smallholder mixed farmers and commercial livestock producers. The platform aims to solve crucial agricultural challenges—such as price-crash losses from market gluts, middleman exploitation in livestock trade, crop/livestock diseases, and digital accessibility barriers—by providing data-driven tools, direct e-commerce, and AI diagnostics.

---

## 🚀 Key Technological Innovations

### 1. 📊 Anti-Glut Predictive Radar (Smart Crop Planner)
* **The Problem:** When last year's crop prices are high, thousands of nearby farmers plant it simultaneously, leading to a harvest over-supply (glut) that crashes the price.
* **The Solution:** Kisan tracks regional sowing density across districts. The **Saturation Gauge** alerts farmers if a crop is at high risk of a glut, recommending high-profit **contrarian crops** that are currently undersupplied.

### 2. 🐐 Direct Livestock & Meat E-Commerce (Marketplace)
* **Bypassing Middlemen:** Direct marketplace listing for cattle, Nellore sheep, poultry, and fresh meat cuts.
* **By-Weight Pricing:** Transparent weight-based pricing models.
* **WhatsApp Integration:** Instant buyer-seller connection via pre-filled order templates sent directly to WhatsApp.

### 3. 🩺 AI Leaf Blast & Vet Clinic (Photo Scanner)
* **Instant Diagnostic Advisory:** Interactive photo scanner designed to diagnose:
  * **Crops:** Leaf Blast, Rust, etc.
  * **Livestock:** Cattle skin lesions, lumpy skin disease.
  * **Aquaculture:** Fish gill rot, fungal infections.
* **Treatment Guides:** Provides actionable chemical, organic, and prevention plans immediately.

### 4. 🧮 Multi-Species Feed & Yield Calculators
* **FCR (Feed Conversion Ratio) Optimization:** Precision calculators to estimate feed requirements and operational costs:
  * **Cattle Feed & Silage Calculator**
  * **Sheep Fattening & FCR Calculator**
  * **Poultry Broiler Batch Planner**
  * **Fish Pond Biomass & Feed Estimator**

### 5. 🌦️ Localized Mandi Rates & Weather Intel
* **Market transparency:** Real-time mandi rates filtered by district.
* **Micro-climate updates:** Local weather updates to help plan sowing, irrigation, and harvesting cycles.

### 6. 🎙️ Accessibility Voice Widget & Multilingual Support
* **Audio-Assistance:** A custom interactive voice widget providing audio readouts and voice-command navigation.
* **Regional Language Translations:** Seamless switching between English, Telugu (తెలుగు), Hindi (हिन्दी), Kannada (ಕನ್ನಡ), and Tamil (தமிழ்).

---

## 🛠️ Technology Stack

* **Frontend Framework:** React 18 & Vite (fast HMR, modular building)
* **Styling & Theme System:** Tailwind CSS v4 (via `@tailwindcss/vite` compiler integration) and CSS variables for micro-animations and dynamic styling.
* **Icons:** Lucide React
* **Routing:** React Router v7
* **State Management:** Custom AppContext for seamless localized data flow.

---

## 📁 Project Directory Structure

```text
Farmers/
├── dist/                          # Production builds
├── src/
│   ├── components/
│   │   ├── 3D/                    # Holographic / 3D-effect UI components
│   │   ├── Header/                # Navigation & Language selector
│   │   ├── Landing/               # Impact stats and problem statements
│   │   ├── Marketplace/           # Cards, WhatsApp order modals
│   │   ├── Modern/                # Bento grid hero interface
│   │   ├── Navigation/            # Floating Dock menu
│   │   ├── Planner/               # Saturation gauges and crop cards
│   │   ├── Voice/                 # Voice accessibility widget
│   │   ├── UI/                    # Animated backgrounds
│   │   └── ...                    
│   ├── context/
│   │   └── AppContext.jsx         # Context provider for language & listings
│   ├── data/                      # Structured mockup database (crops, diseases, etc.)
│   ├── pages/                     # Main page views (Advisor, Mandi, Marketplace, Doctor, etc.)
│   ├── styles/                    # Global vars, animations, and typography rules
│   ├── App.jsx                    # Routing configuration
│   └── main.jsx                   # React application entry point
├── package.json                   # Project metadata and dependencies
└── vite.config.js                 # Vite compiler configuration
```

---

## 💻 Getting Started

### 📋 Prerequisites
Make sure you have Node.js (version 18+ recommended) installed on your system.

### 🔌 Local Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Sree8778/Kisan.git
   cd Kisan
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173` (or the port specified in terminal).

4. **Build for Production:**
   ```bash
   npm run build
   ```
   This will output production-optimized assets inside the `/dist` directory.

---

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information (if available).