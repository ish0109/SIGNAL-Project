import pyttsx3
import threading

class TTSEngine:
    def __init__(self):
        self.engine = pyttsx3.init()
        self.engine.setProperty('rate', 150)
        self.lock = threading.Lock()  # prevents multiple threads from running TTS together

    def speak(self, text):
        """Convert text to speech (English only)"""
        thread = threading.Thread(target=self._speak, args=(text,))
        thread.start()

    def _speak(self, text):
        with self.lock:  # Only one thread can run this at a time
            self.engine.say(text)
            self.engine.runAndWait()
