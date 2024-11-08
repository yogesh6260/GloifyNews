# NewsApp

A dynamic and feature-rich news application that provides users with up-to-date news articles, real-time stock market data, customizable preferences, and multi-language support. Built with React Native, this app aims to deliver a seamless and engaging experience for users to stay informed.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Real-time News**: Stay updated with the latest news using the integrated news API.
- **Stock Market Data**: Real-time financial information from NSE and BSE.
- **Customizable Language Support**: Supports multiple languages with persistence, allowing users to select their preferred language.
- **Search Functionality**: Google Custom Search API integration for targeted search results.
- **User Reactions**: Firebase integration to display and store user reactions across devices.
- **Audio and Video Content**: Supports text-to-speech and video playback functionalities.
- **Category Customization**: Show different categories based on user preferences.

## Installation

To set up the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/kranti-gloify/NewsApp.git
   cd NewsApp
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables using `.env` file (Refer to [Configuration](#configuration) for details).

4. Start the development server:

   ```bash
   npm run start
   ```

5. Run on iOS:

   ```bash
   npx react-native run-ios
   ```

6. Run on Android:
   ```bash
   npx react-native run-android
   ```

## Usage

This app provides users with:

- A **headline news section** displaying top stories.
- A **category-based news section** for browsing by interest.
- **Search functionality** for articles, categories, or specific sources.
- **Financial data tickers** for quick insights on market trends.
- **Audio and video screens** for interactive content consumption.

## Screenshots

![Headline Screen](assets/screenshots/headline.png)
![Category Screen](assets/screenshots/category.png)
![Settings](assets/screenshots/settings.png)

## Technologies Used

- **React Native** - Framework for building native apps
- **Redux + Redux-Persist** - State management
- **RTK Query** - API data fetching and caching
- **Firebase** - Real-time database for user reactions
- **i18next** - Internationalization and language support
- **Google Custom Search API** - For magazine and article search
- **YouTube Data API** - Video content integration
- **RapidAPI (Yahoo Finance API)** - Financial data integration
- **react-native-tts** - Text-to-speech for audio screen
- **react-native-blob-util** - File system and networking utility

## Configuration

Ensure you have the following environment variables set in your `.env` file:

```plaintext
NEWS_API_KEY=your_news_api_key
YOUTUBE_API_KEY=your_youtube_api_key
FINANCE_API_KEY=your_finance_api_key
GOOGLE_CUSTOM_SEARCH_API_KEY=your_google_custom_search_key
```

### Firebase Setup

Make sure you have Firebase set up with Firestore for storing user reactions. Add the `google-services.json` (for Android) and `GoogleService-Info.plist` (for iOS) files to the respective directories.

## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature description"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.

## License

This project is licensed under the MIT License.
