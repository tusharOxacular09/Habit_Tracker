## Habit Tracker

A simple habit tracking application built with Node.js, MongoDB, and EJS.

## Features

- **Track Multiple Habits**: Users can add and track various habits such as reading a book, going to the gym, etc.
- **Daily Tracking**: Track the status of each habit daily with options: Done, Not Done, None.
- **Weekly View**: Display a weekly view of each habit, showing the status of the habit for the current and previous 6 days.
- **Status Toggle**: Users can change today's status or any previous day's status for a habit.
- **Persistence**: Data is stored in MongoDB, ensuring persistence and reliability.
- **User Interface**: Designed using EJS templates for dynamic HTML rendering.

## Bonus Features

- **Completion Statistics**: Show statistics like total days completed for each habit since creation.

## Installation

1. Clone the repository:
   git clone https://github.com/tusharOxacular09/Habit_Tracker.git
2. cd habit-tracker
3. npm install
4. Set up MongoDB:
   - Ensure MongoDB is installed and running on your machine or cloud service.
   - Configure MongoDB connection URL in config.js or .env file.
5. npm start

# Usage

- Adding a Habit: Click on the "Add Habit" button and fill out the form to add a new habit.
- Tracking Habits: On the main dashboard, you can see all current habits with their daily status.
- Updating Status: Click on the status icon for today or any previous day to update the habit's status.
- Viewing Weekly Progress: Navigate to the weekly view to see detailed progress for each habit.

# Technologies Used

- Backend: Node.js, Express.js
- Database: MongoDB
- Frontend: EJS (Embedded JavaScript)
- Other Dependencies: Mongoose (MongoDB ODM), Express Sessions, etc.

# Contributing

- Contributions are welcome! Please fork the repository and create a pull request with your suggested changes.

# License

- This project is licensed under the MIT License - see the LICENSE file for details.
