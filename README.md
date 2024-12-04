# Cookie Consent Dialog

A simple cookie consent dialog that allows users to either accept all cookies or customize their cookie preferences. The project tracks and stores user preferences using cookies for browser type, operating system, and screen size.

## Features

- **Accept All Cookies**: Users can accept all cookies at once.
- **Customizable Preferences**: Users can choose which data to save, including:
  - Browser type
  - Operating system
  - Screen width and height
- **Dialogs**: A two-step dialog for accepting cookies and customizing settings.
- **Persistent Preferences**: User preferences are saved in cookies and persist across sessions.

## Project Structure

- `index.html`: Contains the HTML structure for the cookie consent dialog and settings.
- `styles.css`: Styles the consent dialog and layout.
- `script.js`: Handles the logic for displaying dialogs, setting cookies, and reading user preferences.

## How It Works

1. When the page loads, if the user hasn't previously accepted cookies, a cookie consent dialog appears.
2. The user can either:
   - Accept all cookies at once, which stores preferences for the browser type, operating system, and screen size.
   - Open settings to customize which data is saved.
3. The settings page allows the user to toggle the collection of browser, operating system, and screen size data.
4. Once the user confirms their settings, their preferences are saved in cookies, and the dialogs are closed.
5. The cookies remain persistent for 1 day (or until the user clears their cookies).

## Technologies Used

![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=flat&logo=css3&logoColor=white)
![FontAwesome](https://img.shields.io/badge/FontAwesome-%23339AF0.svg?style=flat&logo=font-awesome&logoColor=white)
![Google Fonts](https://img.shields.io/badge/Google%20Fonts-%234285F4.svg?style=flat&logo=google&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=flat&logo=javascript&logoColor=black)
