🚀 Overview

This project is a mobile automation framework built using Appium and WebdriverIO for testing a Flutter-based Android application.

The framework follows Page Object Model (POM) architecture and supports:

Real device execution
End-to-end business flow automation
Scalable test structure
Gesture-based interactions (W3C actions)

🛠️ Tech Stack
Node.js
Appium v2
WebdriverIO (WDIO)
UiAutomator2 (Android automation engine)
Android SDK (ADB, Emulator)


Invoice-APP/
│
├── test/
│   ├── specs/
│   │   ├── invoice.test.js
│   │   └── estimate.test.js
│   │
│   └── pageobjects/
│       ├── invoice.page.js
│       └── estimate.page.js
│
├── wdio.conf.js
├── package.json
└── README.md


⚙️ Setup Instructions
1️⃣ Install Dependencies
npm install
2️⃣ Start Appium Server
appium
3️⃣ Connect Real Device
adb devices

Ensure device is listed.

4️⃣ Run Tests
Run Invoice Flow
npx wdio run wdio.conf.js --spec ./test/specs/invoice.test.js
Run Estimate Flow
npx wdio run wdio.conf.js --spec ./test/specs/estimate.test.js


🧱 Framework Design
🔹 Page Object Model (POM)
All UI interactions are handled in page classes
Tests contain only business logic

Example:

await EstimatePage.createEstimate();

🔹 Locator Strategy

Priority used:

content-desc (accessibility id) ✅
contains() XPath ✅
Index-based XPath ⚠️
Bounds (coordinate tap) ⚠️ (fallback)
🔹 Gesture Handling

Uses modern W3C Actions API:

await browser.performActions([...]);

Used for:

Scrolling
Tapping coordinate-based elements

📌 Implemented Flows

✅ Invoice Flow

Open Invoice tab
Create invoice
Select customer
Add item
Save & Go Back
Select invoice date
Save as draft
Navigate back

✅ Estimate Flow

Open widget tab
Navigate to Estimates
Create estimate (coordinate tap)
Select customer
Add item
Save & Go Back
Select estimate date
Select expiry date
Save as draft

⚠️ Challenges & Solutions
❌ Issue: Wrong button clicked

Solution: Replaced generic XPath with:

index-based locator OR
coordinate tap (bounds)
❌ Issue: Scroll direction incorrect

Solution: Implemented manual swipe using W3C actions

❌ Issue: Element not visible

Solution: Loop-based scrolling until element appears

❌ Issue: Flutter UI delays

Solution: Added strategic waits and pauses

🔥 Advanced Techniques Used
W3C touch gestures (performActions)
Dynamic scrolling loops
Coordinate-based tapping
Resilient locator strategies
Modular test design
🚀 Future Enhancements
✅ BasePage (common utilities)
🔄 CI/CD integration (GitHub Actions / Jenkins)
📊 Reporting (Allure)
📱 Multi-device support
🔁 Retry & stability improvements
👨‍💻 Author

Muhammad Zakria
muhammadzakria977@gmail.com

⭐ Notes

This framework is designed for:

Real-world mobile automation
Flutter app testing challenges
Scalable QA architecture