/**
 * Hello JavaScript - Interactive Webpage
 * Autor: JavaScript Kurs
 * Beschreibung: DOM-Manipulation und Event-Handling Übung
 */

// Globale Variablen für den aktuellen Zustand
let currentTextIndex = 0;
let currentFontIndex = 0;
let currentColorIndex = 0;
let currentSizeIndex = 0;

// Arrays mit verschiedenen Optionen
const texts = [
    "Willkommen zur JavaScript-Übung!<br>Klicke auf die Buttons, um Änderungen zu sehen.",
    "🎉 JavaScript ist fantastisch!<br>Du lernst gerade DOM-Manipulation.",
    "💻 Programmieren macht Spaß!<br>Jeder Klick verändert etwas.",
    "🌟 Gut gemacht!<br>Du beherrschst bereits die Grundlagen.",
    "🚀 Weiter so!<br>JavaScript öffnet viele Türen.",
    "📚 Lernen ist ein Prozess!<br>Übung macht den Meister.",
    "🎯 Präzision und Geduld!<br>Das sind die Schlüssel zum Erfolg."
];

const fonts = [
    "Arial, sans-serif",
    "Georgia, serif",
    "Courier New, monospace",
    "Impact, sans-serif",
    "Comic Sans MS, cursive",
    "Times New Roman, serif",
    "Verdana, sans-serif"
];

const colors = [
    "#333333",    // Dunkelgrau
    "#e74c3c",    // Rot
    "#3498db",    // Blau
    "#2ecc71",    // Grün
    "#9b59b6",    // Lila
    "#f39c12",    // Orange
    "#1abc9c",    // Türkis
    "#e67e22"     // Dunkles Orange
];

const sizes = [
    "1.5em",
    "1.8em",
    "2.2em",
    "1.2em",
    "2.5em",
    "1.0em",
    "3.0em"
];

/**
 * Funktion zum Ändern des Texts
 * Wechselt durch verschiedene Begrüßungstexte
 */
function changeText() {
    const textElement = document.getElementById('mainText');
    currentTextIndex = (currentTextIndex + 1) % texts.length;
    textElement.innerHTML = texts[currentTextIndex];

    // Console-Ausgabe für Debugging
    console.log(`📝 Text geändert zu Index ${currentTextIndex}:`, texts[currentTextIndex]);

    // Animation hinzufügen
    addAnimation(textElement, 'text-changed');
}

/**
 * Funktion zum Ändern der Schriftart
 * Wechselt durch verschiedene Font-Familien
 */
function changeFont() {
    const textElement = document.getElementById('mainText');
    currentFontIndex = (currentFontIndex + 1) % fonts.length;
    textElement.style.fontFamily = fonts[currentFontIndex];

    console.log(`🔤 Schriftart geändert zu Index ${currentFontIndex}:`, fonts[currentFontIndex]);

    // Kurze Hervorhebung
    textElement.style.fontWeight = 'bold';
    setTimeout(() => {
        textElement.style.fontWeight = 'normal';
    }, 300);
}

/**
 * Funktion zum Ändern der Textfarbe
 * Wechselt durch verschiedene Farben
 */
function changeColor() {
    const textElement = document.getElementById('mainText');
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    textElement.style.color = colors[currentColorIndex];

    console.log(`🎨 Farbe geändert zu Index ${currentColorIndex}:`, colors[currentColorIndex]);

    // Kurzer Glow-Effekt
    textElement.style.textShadow = `0 0 10px ${colors[currentColorIndex]}`;
    setTimeout(() => {
        textElement.style.textShadow = 'none';
    }, 500);
}

/**
 * Funktion zum Ändern der Schriftgröße
 * Wechselt durch verschiedene Größen
 */
function changeSize() {
    const textElement = document.getElementById('mainText');
    currentSizeIndex = (currentSizeIndex + 1) % sizes.length;
    textElement.style.fontSize = sizes[currentSizeIndex];

    console.log(`📏 Größe geändert zu Index ${currentSizeIndex}:`, sizes[currentSizeIndex]);

    // Smooth Transition bereits in CSS definiert
}

/**
 * Funktion zum Zurücksetzen aller Änderungen
 * Setzt alle Eigenschaften auf die ursprünglichen Werte zurück
 */
function resetAll() {
    const textElement = document.getElementById('mainText');

    // Zurücksetzen auf ursprüngliche Werte
    currentTextIndex = 0;
    currentFontIndex = 0;
    currentColorIndex = 0;
    currentSizeIndex = 0;

    // Alle Eigenschaften zurücksetzen
    textElement.innerHTML = texts[0];
    textElement.style.fontFamily = fonts[0];
    textElement.style.color = colors[0];
    textElement.style.fontSize = sizes[0];
    textElement.style.fontWeight = 'normal';
    textElement.style.textShadow = 'none';

    console.log('🔄 Alle Einstellungen zurückgesetzt!');
    console.log('📊 Status: Text=' + currentTextIndex + ', Font=' + currentFontIndex +
        ', Color=' + currentColorIndex + ', Size=' + currentSizeIndex);

    // Reset Animation
    addAnimation(textElement, 'reset-animation');
}

/**
 * Hilfsfunktion zum Hinzufügen von CSS-Animationen
 * @param {HTMLElement} element - Das zu animierende Element
 * @param {string} animationClass - Die CSS-Klasse für die Animation
 */
function addAnimation(element, animationClass) {
    element.classList.add(animationClass);
    setTimeout(() => {
        element.classList.remove(animationClass);
    }, 500);
}

/**
 * Funktion zur Anzeige des aktuellen Status
 * Gibt alle aktuellen Einstellungen in der Console aus
 */
function showStatus() {
    console.log('📊 Aktueller Status:');
    console.log('├── Text Index:', currentTextIndex, '(' + texts[currentTextIndex].replace('<br>', ' ') + ')');
    console.log('├── Font Index:', currentFontIndex, '(' + fonts[currentFontIndex] + ')');
    console.log('├── Color Index:', currentColorIndex, '(' + colors[currentColorIndex] + ')');
    console.log('└── Size Index:', currentSizeIndex, '(' + sizes[currentSizeIndex] + ')');
}

/**
 * Zufällige Änderung aller Eigenschaften
 * Bonus-Funktion für mehr Interaktivität
 */
function randomizeAll() {
    const textElement = document.getElementById('mainText');

    // Zufällige Indizes generieren
    currentTextIndex = Math.floor(Math.random() * texts.length);
    currentFontIndex = Math.floor(Math.random() * fonts.length);
    currentColorIndex = Math.floor(Math.random() * colors.length);
    currentSizeIndex = Math.floor(Math.random() * sizes.length);

    // Alle Eigenschaften gleichzeitig ändern
    textElement.innerHTML = texts[currentTextIndex];
    textElement.style.fontFamily = fonts[currentFontIndex];
    textElement.style.color = colors[currentColorIndex];
    textElement.style.fontSize = sizes[currentSizeIndex];

    console.log('🎲 Alle Eigenschaften randomisiert!');
    showStatus();
}

// Event Listener die beim Laden der Seite ausgeführt werden
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎯 Hello JavaScript Seite geladen!');
    console.log('📚 Verfügbare Funktionen:');
    console.log('├── changeText() - Text ändern');
    console.log('├── changeFont() - Schriftart ändern');
    console.log('├── changeColor() - Farbe ändern');
    console.log('├── changeSize() - Größe ändern');
    console.log('├── resetAll() - Alles zurücksetzen');
    console.log('├── showStatus() - Status anzeigen');
    console.log('└── randomizeAll() - Alles randomisieren');
    console.log('');
    console.log('⌨️  Keyboard Shortcuts:');
    console.log('├── 1 = Text ändern');
    console.log('├── 2 = Font ändern');
    console.log('├── 3 = Farbe ändern');
    console.log('├── 4 = Größe ändern');
    console.log('├── 0 = Reset');
    console.log('├── s = Status anzeigen');
    console.log('└── r = Randomisieren');
});

// Keyboard Shortcuts für erweiterte Interaktivität
document.addEventListener('keydown', function(event) {
    // Verhindere Shortcuts wenn in einem Input-Feld getippt wird
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        return;
    }

    switch(event.key.toLowerCase()) {
        case '1':
            changeText();
            break;
        case '2':
            changeFont();
            break;
        case '3':
            changeColor();
            break;
        case '4':
            changeSize();
            break;
        case '0':
            resetAll();
            break;
        case 's':
            showStatus();
            break;
        case 'r':
            randomizeAll();
            break;
        case 'h':
            console.log('ℹ️  Hilfe: Verwende die Tasten 1-4, 0 (Reset), s (Status), r (Random), h (Hilfe)');
            break;
    }
});

// Erweiterte Funktionalität: Klick-Counter
let clickCounter = {
    text: 0,
    font: 0,
    color: 0,
    size: 0,
    reset: 0
};

// Wrapper-Funktionen für das Counting (optional für Statistiken)
const originalChangeText = changeText;
const originalChangeFont = changeFont;
const originalChangeColor = changeColor;
const originalChangeSize = changeSize;
const originalResetAll = resetAll;

// Override der Funktionen mit Counter
changeText = function() {
    clickCounter.text++;
    originalChangeText();
};

changeFont = function() {
    clickCounter.font++;
    originalChangeFont();
};

changeColor = function() {
    clickCounter.color++;
    originalChangeColor();
};

changeSize = function() {
    clickCounter.size++;
    originalChangeSize();
};

resetAll = function() {
    clickCounter.reset++;
    originalResetAll();
};

// Funktion zum Anzeigen der Klick-Statistiken
function showClickStats() {
    console.log('📈 Klick-Statistiken:');
    console.log('├── Text Änderungen:', clickCounter.text);
    console.log('├── Font Änderungen:', clickCounter.font);
    console.log('├── Farb Änderungen:', clickCounter.color);
    console.log('├── Größe Änderungen:', clickCounter.size);
    console.log('└── Resets:', clickCounter.reset);

    const total = clickCounter.text + clickCounter.font + clickCounter.color + clickCounter.size + clickCounter.reset;
    console.log('🔢 Gesamte Klicks:', total);
}