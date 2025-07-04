# This is Login Page Repository
#  FastAPI Login Page with HTML, CSS, and JavaScript

This project is a simple login page built using **HTML**, **CSS**, and **JavaScript**, backed by a **Python FastAPI** server for authentication. The server validates login credentials against a predefined test user.

##  Features

- Frontend:
  - Responsive login form using HTML and CSS
  - Client-side form validation with JavaScript
- Backend:
  - FastAPI-based server
  - Login authentication using a fixed username and password
  - JSON response for login attempts

##  Test Credentials

Use the following credentials to test the login:

- **Username:** `testuser`
- **Password:** `testpassword`

##  Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Python with FastAPI
- **Server:** Uvicorn (development server)

##  Project Structure

Project
├── Static
│ ├── Style.css
│ └── Script.js
├── Templates
│ └── Login.html
├── __pycache__
├── README.md
└── app.py


##  Setup Instructions

### 1. Clone the Repository

git clone https://github.com/BhavnaDhanrajThombre/Login-Page.git

### 2. Create a Virtual Environment

python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

### 3. Install Dependencies

pip install fastapi uvicorn jinja2

### 4. Run the Server

uvicorn app:app --reload
OR
python -m uvicorn app:app --reload

The app will be running at http://127.0.0.1:8000.

### How It Works

Navigate to page also can navigate /docs to access the login form.
Submit the form with username and password.
FastAPI handles the form submission at login.
If the username is testuser and the password is testpassword, login is successful.
Otherwise, it returns an error message.

### License
This project is open-source and available under the MIT License.
