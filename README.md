# Educase Assignment

This project is a multi-framework web application combining **React** and **Vue** components for a seamless user experience. It includes user authentication pages, profile management with camera photo upload, and graceful 404 handling.

---

## Live Demo

Access the live site here:  
[https://educase-assignment-123.netlify.app/](https://educase-assignment-123.netlify.app/)

---

## Technologies Used

- **React 18** for the main UI and routing
- **Vue** components integrated (if applicable, explain where)
- **React Router DOM** for client-side routing
- **Styled-Components** for styling React components
- JavaScript (ES6+)
- Netlify for deployment

---

## Features

- **Home Page** with navigation buttons to Register and Login pages.
- **Register Page** with form validation for full name, phone, email, password, company, and agency selection.
- **Login Page** with email and password input and validation.
- **Account Page** showing user info and an editable profile avatar that can be updated using the device camera or file upload.
- **Not Found Page (404)** with a user-friendly message and a button to navigate back to the Home page.
- Client-side routing powered by **React Router v6**.
- Responsive design with custom styled-components and some utility CSS.
- Avatar photo upload supports **direct camera capture** (mobile devices) or file selection.

---

## Installation & Running Locally

1. Clone the repo:

```bash
git clone https://github.com/rojanagunoori/educase-assignment.git
Navigate into the project folder:

cd educase-assignment
Install dependencies:


npm install
# or
yarn install
Start the development server:


npm run dev
# or
yarn run dev
Open your browser and go to:


http://localhost:5173


Netlify Deployment Process
To deploy this project on Netlify:

Push your code to a GitHub repository (like the one linked below).

Go to Netlify and sign in or create an account.

Click on New site from Git.

Choose GitHub and authenticate if needed.

Select the repository: educase-assignment.

Configure the build settings:

Build command: npm run build (or yarn build)

Publish directory: build

Click Deploy site.

After deployment, your app will be live at a Netlify-generated URL, which you can customize.

Your current live demo is here:
https://educase-assignment-123.netlify.app/

Repository
Check the source code on GitHub:
https://github.com/rojanagunoori/educase-assignment.git

Additional Notes
This project uses both React and Vue components (please specify if/how Vue is integrated).

Camera upload uses the native device camera via input file with capture attribute.

Styling is done via styled-components and Tailwind utility-inspired colors.

License
MIT License

Contact
For questions, feel free to open an issue or reach out via GitHub.



---

**If you want me to help write about the Vue part specifically, just share those details.** Otherwise, this README covers React + dep