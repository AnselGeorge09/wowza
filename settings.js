// Get references to the settings elements
const themeSelect = document.getElementById('theme');
const fontSelect = document.getElementById('font');
const musicVolumeSlider = document.getElementById('music-volume');
const sfxVolumeSlider = document.getElementById('sfx-volume');
const languageSelect = document.getElementById('language');
const gameSelect = document.getElementById('game-select');
const settingsForm = document.getElementById('settings-form');
const resetSettingsButton = document.getElementById('reset-settings');

// Load settings from localStorage
loadSettings();

// Add event listeners for the settings elements
settingsForm.addEventListener('submit', saveSettings);
resetSettingsButton.addEventListener('click', resetSettings);

// Load settings from localStorage
function loadSettings() {
  const settings = JSON.parse(localStorage.getItem('gameSettings'));
  if (settings) {
    themeSelect.value = settings.theme;
    fontSelect.value = settings.font;
    musicVolumeSlider.value = settings.musicVolume;
    sfxVolumeSlider.value = settings.sfxVolume;
    languageSelect.value = settings.language;
    gameSelect.value = settings.game;
    applySettings();
  } else {
    // Load the list of available games
    loadGameList();
  }
}

// Save settings to localStorage
function saveSettings(event) {
  event.preventDefault();

  const settings = {
    theme: themeSelect.value,
    font: fontSelect.value,
    musicVolume: musicVolumeSlider.value,
    sfxVolume: sfxVolumeSlider.value,
    language: languageSelect.value,
    game: gameSelect.value
  };

  localStorage.setItem('gameSettings', JSON.stringify(settings));
  applySettings();
}

// Reset settings to default
function resetSettings() {
  themeSelect.value = 'default';
  fontSelect.value = 'Arial';
  musicVolumeSlider.value = 50;
  sfxVolumeSlider.value = 50;
  languageSelect.value = 'en';
  gameSelect.value = 'game1';
  saveSettings(new Event('submit'));
}

// Apply the settings to the game
function applySettings() {
  // Apply the theme
  document.body.className = themeSelect.value;

  // Apply the font
  document.body.style.fontFamily = fontSelect.value;

  // Apply the music and SFX volume
  setMusicVolume(musicVolumeSlider.value);
  setSFXVolume(sfxVolumeSlider.value);

  // Apply the language
  setLanguage(languageSelect.value);

  // Apply the selected game
  loadGame(gameSelect.value);
}

// Example functions to set the music and SFX volume, the language, and load the game
function setMusicVolume(volume) {
  // Implement your game's music volume logic here
  console.log(`Setting music volume to ${volume}%`);
}

function setSFXVolume(volume) {
  // Implement your game's SFX volume logic here
  console.log(`Setting SFX volume to ${volume}%`);
}

function setLanguage(language) {
  // Implement your game's language logic here
  console.log(`Setting language to ${language}`);
}

function loadGame(gameId) {
  // Implement your game loading logic here
  console.log(`Loading game: ${gameId}`);
}

// Load the list of available games
function loadGameList() {
  // Implement your game list loading logic here
  const games = [
    { id: 'game1', name: 'Game 1' },
    { id: 'game2', name: 'Game 2' },
    { id: 'game3', name: 'Game 3' }
  ];

  games.forEach(game => {
    const option = document.createElement('option');
    option.value = game.id;
    option.textContent = game.name;
    gameSelect.add(option);
  });

  gameSelect.value = 'game1';
}