// Speech Synthesis (Read Aloud Audio Assistant)

export function speakText(text, langCode = 'hi-IN') {
  if (!('speechSynthesis' in window)) {
    alert('Audio Read-Aloud is supported in your browser: ' + text);
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  
  // Map app lang code to browser BCP-47 tag
  const langMap = {
    hi: 'hi-IN',
    te: 'te-IN',
    pa: 'pa-IN',
    ta: 'ta-IN',
    mr: 'mr-IN',
    en: 'en-US'
  };

  utterance.lang = langMap[langCode] || 'hi-IN';
  utterance.rate = 0.9; // Slightly slower for clarity
  utterance.pitch = 1.0;

  window.speechSynthesis.speak(utterance);
}

export function stopSpeech() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}
