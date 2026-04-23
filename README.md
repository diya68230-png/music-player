# Music Player Web App

A responsive and interactive **music player built using vanilla JavaScript**, designed to replicate core features of modern streaming platforms while maintaining clean logic and smooth user experience.

---

## Overview

This project focuses on building a fully functional audio player from scratch without using external libraries. It demonstrates handling of real-time audio playback, dynamic UI updates, and playlist management.

---

## Features

* Play and pause audio
* Navigate between songs (next / previous)
* Shuffle mode with proper randomization
* Repeat mode for continuous playback
* Click-to-play song selection
* Dynamic "Now Playing" section
* Interactive progress bar with seek control
* Real-time UI synchronization with audio state

---

## Key Implementation Details

* Separation of **original playlist** and **active playback order**
* Accurate mapping between UI selection and shuffled order
* Efficient event handling for seamless interaction
* Clean state management using variables like `currentSong`, `order`, and flags

---

## Tech Stack

* HTML
* CSS
* JavaScript (Vanilla)

---

## Folder Structure

```id="b0z6rq"
Music-Player/
│
├── index.html
├── style.css
├── script.js
│
├── Audio/
│   ├── 1.mp3
│   ├── 2.mp3
│   └── ...
│
├── images/
│   ├── 1.jpg
│   ├── 2.jpg
│   └── ...
```

---

## How to Run

1. Clone or download the repository
2. Open the project folder
3. Run using a local server (recommended)

   * Example: Live Server in VS Code
4. Open `index.html` in your browser

---

## Challenges Solved

* Fixed index mismatch between UI and playback logic
* Implemented consistent behavior for shuffle and manual selection
* Managed edge cases like last song playback and repeat mode
* Ensured synchronization between UI controls and audio state

---

## Author

Diya Shah

---


