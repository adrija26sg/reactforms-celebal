# React Registration Form

This project is a modern React application featuring a beautiful registration form with advanced UI/UX, validation, and a details display page.
##IMAGES
![image](https://github.com/user-attachments/assets/b2aa3d63-2f89-4d1e-baaf-4326247d638e)
![image](https://github.com/user-attachments/assets/f81dddbe-e569-4192-b0fa-68ecd89ed8a5)
![image](https://github.com/user-attachments/assets/2c43727a-d3ca-4918-9a54-a509e7b18ce0)


## Features

- **Modern UI/UX**: Sleek, glassmorphic card design with a parallax background for a visually appealing experience.
- **Responsive Design**: Fully responsive and mobile-friendly layout.
- **Registration Form**: Fields for First Name, Last Name, Username, E-mail, Password (show/hide), Phone Number (with country code), Country (dropdown), City (dropdown), PAN Number, and Aadhar Number.
- **Validation**: Real-time validation for required fields and specific formats (email, phone, PAN, Aadhar).
- **Error Messages**: Clear, user-friendly error messages for invalid inputs.
- **Submit Button**: Disabled until all fields are filled correctly.
- **Details Page**: After successful submission, the form data is displayed on a new route in a glassmorphic card.
- **Favicon**: Includes a modern favicon for a professional look.

## Setup Instructions

1. **Clone the Repository**:

   ```bash
   git clone <repository-url>
   cd reactforms
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Development Server**:

   ```bash
   npm run dev
   ```

4. **Access the Application**: Open your browser and go to `http://localhost:3000`.

## Technologies Used

- **React**: For building the user interface.
- **React Router**: For navigation between the form and details pages.
- **Vite**: For fast development and building.
- **Modern CSS**: Parallax, glassmorphism, and responsive design.

## Project Structure

- `src/components/RegistrationForm.jsx`: Registration form with validation and modern design.
- `src/components/DisplayDetails.jsx`: Displays the submitted form data in a glassmorphic card.
- `src/App.jsx`: Sets up routing for the application.
- `src/index.css`: Global styles for parallax, glassmorphism, and responsiveness.

