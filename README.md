# Student-Grade-Calculator-Report-Card-Generator

A professional, fully responsive web application built with HTML, CSS, JavaScript, and some Bootstrap that allows teachers to compute student grades, generate report cards, and manage class rankings. Designed as a real-world solution for schools looking to automate student grade processing. 

⭐ Project Overview:

This application enables teachers to:
Enter student information
Add unlimited subjects and scores
Automatically calculate grades and GPA
Generate a real-time report card
Visualize GPA performance with charts
Download the report card as a PDF
Automatically save and rank students based on GPA

The goal is to create a modern, practical tool that can be used by real schools while demonstrating strong frontend development skills.

🧩 Features
🔐 1. Secure Login Page
        A simple access gate to ensure only authorized users enter the dashboard.
        Redirects to the grade calculator upon successful login.

🧑‍🎓 2. Student Information Section
        Capture full name, student ID, and classroom before calculating grades.

📚 3. Dynamic Subject & Score Input
        Add unlimited subjects
        Delete any subject row
        Clean and interactive UI using Bootstrap

🧮 4. Automatic GPA & Grade Calculation
        Computes grade letters and GPA instantly
        Validates score inputs

📊 5. Report Card Generator
      Displays grades in a clean, structured format
      Generates a GPA chart using Chart.js
      Allows PDF download of the full report card

🏆 6. Class Ranking System
      Stores GPA records using LocalStorage
      Ranks all students from highest to lowest GPA
      Displays results in a table format

📱 7. Fully Responsive Design
      Works on mobile, tablet, and desktop
      Uses Bootstrap grid system for professional layout

💻 Technology Stack: Category	Tools Used
      Frontend	HTML, CSS, JavaScript
      UI Framework	Bootstrap 5
      Charts	Chart.js
      PDF Export	html2pdf.js
      Storage	LocalStorage
      Icons/Branding	Custom School Logo
      
📁 Project Structure
StudentGradeCalculator/
│
├── index.html          # Login page
├── dashboard.html       # Grade calculator + ranking system
├── style.css            # Application styling
├── script.js            # Grade calculation + PDF generation
├── rank.js              # Student ranking logic
├── Elite.png            # School logo
└── README.md            # Documentation

🚀 How to Run the Project: 
      1. Download or Clone the Repository
      2. Open the App: 
          Open index.html in your browser
          Log in using the preset credentials: (Email: admin@eliteacademy.com, Password: 12345)
      3. Navigate the Dashboard
          Enter student info → Add subjects → Enter scores
          Click Calculate Grades
          View the report card → Download PDF
          GPA is auto-saved → Ranking displayed

📘 Intended Purpose
      The project is intended for:
          Schools looking to automate grading
          Teachers want faster, more accurate result processing
          Students learning frontend web development
          Anyone building an academic management solution prototype
This app solves a real educational problem while demonstrating industry-standard frontend techniques.

🔧 Future Enhancements (Optional)
      These upgrades can transform the project into a full school MIS:
      Database integration (MySQL, MongoDB, Firebase)
      User account creation and roles
      Student portal + parent access
      Bulk CSV upload of student scores
      Backend API (Node.js, PHP, Python/FastAPI, or Django)
      Cloud deployment (Netlify, Vercel, GitHub Pages)

📝 Author
Group 5 Web Development Team

Note: the Schoold name and logo are used in this project just for demonstration purposes 
