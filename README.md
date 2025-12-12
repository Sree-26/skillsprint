# 🚀 SkillSprint

**The hyper-local marketplace for campus micro-internships.**
*Connects students who need quick cash with local businesses that need tasks done fast.*

![JavaScript](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![HTML5](https://img.shields.io/badge/Frontend-HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![Gemini](https://img.shields.io/badge/AI-Gemini%20API-8E75B2?style=for-the-badge&logo=googlebard)

---

## 🧐 The Problem
* **Students are broke:** They want to earn money but can't commit to 3-month internships due to academic pressure.
* **Local businesses are slowed down:** Cafes, NGOs, and alumni startups need small tasks (logos, bug fixes, blogs) done quickly but can't afford agencies.

## 💡 The Solution: "Sprints"
SkillSprint is a lightweight **Progressive Web App (PWA)** that replaces long-term contracts with **24-48 hour tasks**.
* **Instant Access:** No app store download required. Works on any campus wifi.
* **Speed:** Tasks are completed in hours, not weeks.
* **The Vibe:** Clean, fast, and trustworthy.

---

## 📱 Features & Screenshots


| **Job Feed** | **Job Detail** | **Profile** |
|:---:|:---:|:---:|
| <img src="assets/feed_mockup.png" width="200" alt="Feed"> | <img src="assets/detail_mockup.png" width="200" alt="Detail"> | <img src="assets/profile_mockup.png" width="200" alt="Profile"> |
| *Real-time gig listing* | *Clear pricing & urgency* | *Gamified earnings* |

---

## 🛠️ Tech Stack (The "Feasible" Build)

We chose a **Vanilla Web Stack** to ensure maximum performance and accessibility on all student devices (Laptops, Android, iOS).

* **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+).
* **Data:** JSON-based local storage (simulating a NoSQL database for the MVP).
* **AI Integration:** Google Gemini API.

---

## 🤖 How We Use Gemini
We don't just use AI for "hype"; we use it to solve specific marketplace friction points:

1.  **Smart Tagging (Auto-Classification):**
    * *The Code:* Our `app.js` sends job descriptions to the Gemini API.
    * *The Result:* Gemini analyzes the text and automatically generates relevant skill tags (e.g., "React", "Photoshop", "SEO") to match the right students.

2.  **Safety & Moderation:**
    * Incoming posts are scanned to ensure they adhere to community guidelines before appearing on the feed.

---

## ⚡ Setup & Installation

To run SkillSprint locally:

1.  **Clone the repo**
    ```bash
    git clone [https://github.com/Sree-26/skillsprint.git](https://github.com/Sree-26/skillsprint.git)
    cd skillsprint
    ```

2.  **Run the App**
    * Simply open `index.html` in any modern browser.
    * *Optional:* Use 'Live Server' in VS Code for the best experience.

3.  **Configure API**
    * Open `app.js` and insert your Gemini API key where indicated:
    ```javascript
    const GEMINI_API_KEY = "YOUR_KEY_HERE";
    ```

---

## 🏆 Hackathon Tracks
Targeting the **"Campus Impact"** and **"Feasibility"** judging criteria.

* **Impact:** Solving a genuine economic need for students (Finding pocket money).
* **Execution:** A zero-dependency, crash-free web platform that works instantly.

---

**Made with 🧡 by Sree**
