# User Directory (React.js App)

## Live Website
[Click here to visit](https://user-directory-alpha.vercel.app/)

## Project Overview
This is a **React.js** application that fetches and displays a list of users from an API. The app features various functionalities such as searching, sorting, viewing user details, and handling both loading and error states. It’s designed to be simple and responsive, making it suitable for mobile and desktop devices.

---

## Features
- **Fetches user data**: Pulls user data from a public API (https://jsonplaceholder.typicode.com/users).
- **Search functionality**: Allows users to search for people by name.
- **Sorting options**: Users can sort the list alphabetically (A-Z and Z-A).
- **User detail page**: Clicking on a user takes you to a detailed view with additional information such as email, phone, company, and website.
- **Loading and Error Handling**: Displays loading indicators while fetching data, and handles potential errors gracefully.

---

## Technologies Used
- **React.js**: The main library for building the user interface.
- **Vite**: A modern build tool that provides fast development and production builds.
- **Tailwind CSS**: A utility-first CSS framework for styling the app.
- **React Router**: Used for navigation between the home and user detail pages.
- **npm**: For managing dependencies and running the development server.

---

## How to Run Locally

To run this project on your local machine, follow these steps:

1. **Clone the Repository**  
   First, clone the repository to your local machine by running the following command in your terminal:
   ```bash
   git clone https://github.com/MohammadAsrar/user-directory.git

2. **Install Vite build tool and npm**
   For more details visit the official site of Vite [Vite build tool](https://vite.dev/guide/)

3. **Navigate to the Project Directory**
   After cloning the repo, go into the project directory:
   ```bash
   cd user-directory

4. **Install Dependencies**
   Use npm to install the project dependencies:
   ```bash
   npm install
   
5. **Start the Development Server**
   Run the following command to start the development server and launch the app in your browser:
   ```bash
   npm run dev
   ```
   This will open the application in your default browser at 
   [http://localhost:5173](http://localhost:5173) (or any other port 
   displayed in the terminal).

6. **Building for Production**
   To create a production-ready build, run:
   ```bash
   npm run build
   ```
   This will generate an optimized build in the dist/ folder. You can then 
   deploy this build to any static hosting platform.

---

## How to Deploy

Once you've tested the project locally, you can deploy it online using platforms like Netlify or Vercel.


**Deployment on Netlify**

1. Go to [Netlify](https://www.netlify.com/) and create an account or log in.
2. Link your GitHub repository to Netlify by clicking "Add New Site" → "Import from Git".
3. Choose the repository and follow the instructions to configure the build.
4. For the build settings:
  - Build Command: npm run build
  - Publish Directory: dist
5. Click "Deploy Site". After a few moments, you will receive a live URL to your app.

**Deployment on Vercel**

1. Go to [Vercel](https://vercel.com/) and create an account or log in.
2. Click New Project and import your GitHub repository.
3. Vercel will automatically detect the build settings (for Vite).
4. Click Deploy, and your site will be live within minutes.

---

## Contact

For any questions or feedback, feel free to reach out to me at [mohammadasrar266@gmail.com](mohammadasrar266@gmail.com).
