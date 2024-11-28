# Weather App 🌤️

A simple, user-friendly weather application built with **ReactJS** that allows users to view real-time weather conditions for any city. The app fetches data from the **OpenWeatherMap API** and displays essential information like temperature, weather conditions, and dynamic icons. To enhance the user experience, it also features animated avatars and a clean, responsive design.

---

## Features 🚀

- **Real-Time Weather Data**: Displays current weather for any city using OpenWeatherMap API.
- **Search Functionality**: Users can search for any city to view its weather.
- **Dynamic Weather Avatars**: Animated avatars change based on the weather (e.g., sunny, rainy, cold).
- **Country Display**: Shows the country alongside the city name.
- **Responsive Design**: Works seamlessly on desktops, tablets, and mobile devices.
- **Extensible**: Ready for additional features like 5-day forecasts or dark mode.

---

## Technologies Used 🛠️

- **ReactJS**: Frontend framework for building UI components.
- **Axios**: For handling API requests.
- **Lottie Animations**: Animated weather avatars.
- **CSS**: For styling and responsiveness.
- **OpenWeatherMap API**: For fetching real-time weather data.

---

## Setup Instructions ⚙️

### Prerequisites
- Node.js and npm installed on your machine.
- OpenWeatherMap API key. [Sign up here](https://home.openweathermap.org/users/sign_up) for a free API key.

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/<repository-name>.git
   ```
2. Navigate to the project directory:
   ```bash
   cd <studentId>_comp3123_labtest2
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
   ```
   REACT_APP_WEATHER_API_KEY=your_api_key
   ```
5. Start the development server:
   ```bash
   npm start
   ```

---

## How to Use 🖱️

1. Enter the name of a city in the search bar.
2. Click "Search" or press `Enter`.
3. View the weather details, including:
   - Temperature
   - Weather description
   - Animated avatar representing the weather
   - Country name below the city

---

## Folder Structure 📂

```
src/
├── animations/        # JSON files for Lottie animations
├── components/        # React components
│   ├── WeatherApp.jsx
│   └── WeatherCard.jsx
├── styles.css         # Styling for the app
├── App.js             # Main app entry
└── index.js           # React entry point
```

---

## Future Enhancements ✨

- **5-Day Forecast**: Extend the app to show weather predictions.
- **Dark Mode**: Add a toggle for light/dark themes.
- **User Favorites**: Save frequently searched cities.
- **Speech-to-Text Search**: Use the Web Speech API for voice-based searches.
- **Geolocation**: Fetch weather for the user’s current location automatically.

---

## License 📜

- Beetle Labs Inc. 🪲. Samuel Gallego Rivera.
- GreenConcepts Inc. 🍋‍🟩

---

## Acknowledgments ❤️

- **OpenWeatherMap**: For providing free API access.
- **LottieFiles**: For beautiful and lightweight animations.
