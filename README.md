# SIT323/SIT737 - Cloud Native Application Development

## 2.1P: Node.js and Express

This project is a simple web server built with Node.js and Express. It serves a static HTML page and demonstrates how to set up a basic Express server.

---

## **1. Prerequisites**

Before running this project, ensure you have installed the following tools:

- **Git**: [Download and Install Git](https://git-scm.com/)
- **Visual Studio Code**: [Download VS Code](https://code.visualstudio.com/)
- **Node.js**: [Download Node.js](https://nodejs.org/)

#### **Check if Node.js is installed**

Run the following command in your terminal:

```sh
node -v
```

If it returns a version number, Node.js is installed successfully.

#### **Check if npm (Node Package Manager) is installed**

```sh
npm -v
```

If it returns a version number, npm is installed successfully.

---

## **2. Project Setup - Step-by-Step Instructions**

### **Step 1: Clone the Repository**

To start, clone this repository to your local machine using Git:

```sh
git clone https://github.com/your-username/sit323_737-2024-t1-prac2p.git
cd sit323_737-2024-t1-prac2p
```

### **Step 2: Initialize the Project**

Inside the project folder, initialize a Node.js project:

```sh
npm init -y
```

This will create a `package.json` file that manages project dependencies.

### **Step 3: Install Dependencies**

To use Express, install it as a dependency:

```sh
npm install express
```

This command will generate a `node_modules` folder and update the `package.json` file.

---

## **3. Running the Web Server**

### **Step 4: Start the Server**

Run the following command to start the server:

```sh
node server.js
```

If everything is set up correctly, you should see the following message in the terminal:

```
Server is running at http://localhost:3000
```

### **Step 5: Open the Web Page**

Open your browser and go to:

```
http://localhost:3000
```

You should see the HTML page displayed.

---

## **4. Code Explanation**

### **server.js (Main Node.js Server File)**

```javascript
const express = require('express');
const app = express();
const port = 3000;

// Serve static files from 'public' folder
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
```

#### **Key Points:**

- `express.static('public')` → Serves static files from the `public` directory.
- `app.get('/')` → Serves the `index.html` file when the user accesses the root URL.
- `app.listen(port, ...)` → Starts the web server on port 3000.

---

## **5. Project Directory Structure**

```
sit323_737-2024-t1-prac2p
│── public
│   ├── index.html
│── node_modules/ (auto-generated)
│── package.json
│── package-lock.json (auto-generated)
│── index.js
│── README.md
│── .gitignore
```

#### **Explanation:**

- `public/` → Contains static HTML files.
- `index.js` → Main server script using Express.
- `package.json` → Manages project dependencies.
- `README.md` → Project documentation.
- `.gitignore` → Specifies files to ignore in Git.

---

## **6. Git Setup & Submission Instructions**

### **Step 6: Initialize Git**

If you haven't already initialized a Git repository, run:

```sh
git init
```

### **Step 7: Add Files to Git**

Add all project files to the repository:

```sh
git add .
```

### **Step 8: Commit Changes**

Commit your files with a meaningful message:

```sh
git commit -m "Initial commit with Express web server"
```

### **Step 9: Connect to GitHub Repository**

Ensure your local repository is linked to the GitHub repo:

```sh
git remote add origin https://github.com/hiichloee/sit323_737-2024-t1-prac2p.git
```

### **Step 10: Push Code to GitHub**

```sh
git push origin main
```

If your branch is `master`, use:

```sh
git push origin master
```

---

## **7. Final Submission**

After pushing the code to GitHub, submit your repository link:

```
https://github.com/your-username/sit323_737-2024-t1-prac2p
```

