import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { FaVolumeUp } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import "../Pages/MainPage.css";
import NavigationBar from "../Pages/Navbar";

const API_BASE = "http://127.0.0.1:5000";

function MainPage() {
  const [detectedWord, setDetectedWord] = useState("");
  const [translatedWord, setTranslatedWord] = useState("");
  const [sentence, setSentence] = useState("");
  const [inputText, setInputText] = useState("");
  const [signImages, setSignImages] = useState([]);
  const [language, setLanguage] = useState("english");
  const audioRef = useRef(null);

  // 🔁 Poll detected word
  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get(`${API_BASE}/detected_word`)
        .then((res) => setDetectedWord(res.data.word))
        .catch(() => {});
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // 🔁 Poll sentence depending on language
  useEffect(() => {
    const interval = setInterval(() => {

      if (language === "english") {

        axios
          .get(`${API_BASE}/sentence`)
          .then((res) => setSentence(res.data.sentence))
          .catch(() => {});

      } else {

        axios
          .get(`${API_BASE}/translate_sentence`)
          .then((res) => setSentence(res.data.translated))
          .catch(() => {});

      }

    }, 1000);

    return () => clearInterval(interval);
  }, [language]);

  // 🌐 Translate detected word
  useEffect(() => {
    if (!detectedWord) return;

    axios
      .get(`${API_BASE}/translate?word=${encodeURIComponent(detectedWord)}`)
      .then((res) => setTranslatedWord(res.data.translated))
      .catch(() => {});
  }, [detectedWord]);

  const toggleLanguage = () => {
    setLanguage((p) => (p === "english" ? "marathi" : "english"));
  };

  // 🔊 Speak sentence
  const handleSpeak = () => {
    const text = sentence || detectedWord;
    if (!text || !audioRef.current) return;

    let lang = "en";

    if (language === "marathi") {
      lang = "mr";
    }

    audioRef.current.src =
      `${API_BASE}/speak?text=${encodeURIComponent(text)}&lang=${lang}`;

    audioRef.current.load();
    audioRef.current.play().catch(() => {});
  };

  // ⭐ Clear sentence
  const clearSentence = () => {
    axios
      .get(`${API_BASE}/clear_sentence`)
      .then(() => setSentence(""))
      .catch(() => {});
  };

  // 🖐 Text → Signs
  const commonPhrases = [
    "hello","thank you","sorry","please","call me","i love you",
    "yes","good","eat","be quiet","i am deaf"
  ];

  const handleShowSigns = () => {
    const text = inputText.toLowerCase().trim();
    if (!text) return;

    let images = [];

    if (commonPhrases.includes(text)) {
      images.push(`${API_BASE}/sign_images/${text.replaceAll(" ", "_")}.png`);
    } else {
      images = text
        .split("")
        .filter((c) => /[a-z0-9]/.test(c))
        .map((c) => `${API_BASE}/sign_images/${c}.png`);
    }

    setSignImages(images);
  };

  const displayWord =
    language === "english" ? detectedWord : translatedWord;

  return (
    <div style={{ minHeight: "100vh", marginTop: "4rem", background: "black" }}>
      <NavigationBar />

      <div className="container">
        <div className="row">

          {/* LEFT */}
          <div className="col-md-6 mb-4">
            <div className="card p-4">
              <h2>Sign Language Live Stream</h2>

              <img
                src={`${API_BASE}/video`}
                alt="Live Stream"
                style={{
                  width: "100%",
                  maxHeight: "320px",
                  border: "2px solid black",
                }}
              />

              <h3 className="mt-3">Detected Word: {displayWord || "-"}</h3>

              <h4 className="mt-2">Sentence: {sentence || "-"}</h4>

              <button
                className="btn btn-danger mt-2"
                onClick={clearSentence}
              >
                Clear Sentence
              </button>

              <div className="d-flex gap-2 mt-2">
                <button className="btn btn-purple w-50" onClick={toggleLanguage}>
                  <MdLanguage /> Switch
                </button>

                <button className="btn btn-purple w-50" onClick={handleSpeak}>
                  <FaVolumeUp /> Speak
                </button>
              </div>

              <audio ref={audioRef} controls className="w-100 mt-3" />
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-md-6 mb-4">
            <div className="card p-4">
              <h2>Convert Text to Signs</h2>

              <input
                className="form-control mb-3"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter text"
              />

              <button
                onClick={handleShowSigns}
                className="btn btn-purple mb-3"
              >
                Show Signs
              </button>

              <div className="d-flex flex-wrap gap-2">
                {signImages.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="sign"
                    width="80"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default MainPage;