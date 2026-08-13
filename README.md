# SIGNAL – Sign Language Translation System

**SIGNAL (System for Intelligence Gesture and Natural Language)** is a real-time sign language translation web application designed to bridge the communication gap between the deaf and hearing communities.

The system captures hand gestures through a webcam, detects hand landmarks using **MediaPipe**, classifies gestures using a **Random Forest Machine Learning model**, and converts recognized signs into text, translated languages, and speech.

## 🚀 Features

* Real-time sign language gesture recognition
* Webcam-based hand gesture detection
* 21-point hand landmark extraction
* Random Forest-based gesture classification
* Sentence generation from recognized signs
* Multilingual translation
* Text-to-Speech output
* Text-to-sign generation
* Sign illustrations for generated text
* Google authentication
* Login and registration
* Responsive and interactive web interface
* Desktop application support using Tkinter
* Offline Text-to-Speech support

## 🛠️ Complete Tech Stack

### Frontend

* **React.js** – User interface development
* **Vite** – Frontend build tool and development server
* **JavaScript / JSX** – Frontend programming
* **HTML5** – Page structure
* **CSS3** – Styling
* **Tailwind CSS** – Utility-based styling
* **React Bootstrap** – UI components and responsive layouts
* **React Scroll** – Smooth page navigation
* **Axios** – Frontend-backend HTTP communication

### Backend

* **Python** – Backend and machine learning development
* **Flask** – Web server and REST API development
* **REST APIs** – Communication between React frontend and Python backend
* **Multithreading** – Real-time webcam processing and gesture detection

### Machine Learning & Computer Vision

* **MediaPipe Hands** – Detection of 21 hand landmarks
* **OpenCV** – Webcam capture, image processing, and video streaming
* **Scikit-learn** – Machine learning framework
* **Random Forest Classifier** – Gesture classification
* **NumPy** – Numerical and feature data processing
* **Pickle** – Serialization and loading of the trained ML model

### Translation

* **Custom Translation Manager** – Local vocabulary-based translation
* Supported languages include:

  * English
  * Hindi
  * Marathi
  * Bengali
  * French
  * Spanish

### Text-to-Speech

* **gTTS (Google Text-to-Speech)** – Generates speech audio for the web application
* **pyttsx3** – Offline Text-to-Speech for the desktop application

### Authentication & Communication Services

* **Google OAuth** – Google-based authentication
* **JWT** – Authentication and session validation
* **Local Storage** – Local user/session data management
* **EmailJS** – Automated welcome/signup emails

### Desktop Application

* **Tkinter** – Desktop graphical user interface
* **OpenCV** – Local webcam and image processing
* **pyttsx3** – Offline speech generation

### Development Tools

* **Visual Studio Code** – Development environment
* **Node.js & npm** – Frontend package management and execution
* **Python & pip** – Backend package management
* **Git & GitHub** – Version control and project hosting
* **ESLint** – JavaScript/React code quality and linting

### Configuration & Build Tools

* **Vite Configuration** – Frontend build and development configuration
* **Tailwind Configuration** – Tailwind CSS setup
* **PostCSS** – CSS processing
* **TypeScript Configuration** – Frontend development configuration

## 🧠 Machine Learning Pipeline

```text
Webcam Input
      ↓
OpenCV Frame Capture
      ↓
MediaPipe Hand Detection
      ↓
21 Hand Landmarks
      ↓
Feature Extraction & Normalization
      ↓
42-Dimensional Feature Vector
      ↓
Random Forest Classifier
      ↓
Gesture Prediction
      ↓
Sentence Generation
      ↓
Multilingual Translation
      ↓
Text + Speech Output
```

## 📊 Dataset

* **51 Gesture Classes**
* **A–Z Alphabets**
* **Numbers 1–10**
* **15 Common Phrases**
* **100 Images per Class**
* **Total: 5,100 Images**
* Hand landmarks are extracted from the images using MediaPipe.
* The processed features are stored using Pickle for model training.

## 🏗️ System Architecture

```text
React Frontend
      ↓
Axios / REST API
      ↓
Flask Backend
      ↓
OpenCV + MediaPipe
      ↓
Random Forest Model
      ↓
Gesture Prediction
      ↓
Translation Manager
      ↓
gTTS
      ↓
Audio Output
```

## 📁 Main Project Structure

```text
SIGNAL-Project/
│
├── client/
│   ├── src/
│   │   ├── Pages/
│   │   │   ├── LandingPage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── MainPage.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── AboutUs.jsx
│   │   │   └── HowItWorks.jsx
│   │   ├── App.jsx
│   │   ├── main.tsx
│   │   ├── index.css
│   │   └── styles.css
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── eslint.config.js
│
└── serveerr/
    ├── core/
    │   ├── collect_imgs.py
    │   ├── create_dataset.py
    │   ├── train_classifier.py
    │   ├── inference_classifier.py
    │   ├── model.p
    │   └── data.pickle
    │
    ├── modules/
    │   ├── translation_manager.py
    │   └── tts_manager.py
    │
    ├── app.py
    ├── main.py
    ├── requirements.txt
    └── temp_audio.mp3
```

## 🎯 Objective

The main objective of SIGNAL is to provide an accessible, fast, and user-friendly communication platform that reduces the communication barrier between sign language users and the hearing community.

## 🔮 Future Scope

* Two-hand gesture recognition
* Larger sign language vocabulary
* AI-based grammatical sentence generation
* Facial expression and body movement recognition
* WebSocket-based real-time communication
* Mobile application using React Native
* Improved multilingual support

## 👩‍💻 Project

**SIGNAL – System for Intelligence Gesture and Natural Language**

A Final Year Engineering Project focused on **Machine Learning, Computer Vision, Natural Language Processing, and Accessible Technology**.
