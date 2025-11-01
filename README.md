# Image-Uploader

A simple web application built using Node.js, Express.js and EJS to upload and serve images

---

## 🚀 Project Overview

This app lets users upload image files and view them via a web interface. It demonstrates:

- Handling file uploads on the server side  
- Storing uploaded files (in `public/uploads` folder)  
- Serving static assets and uploaded images  
- Using Express.js for routing and middleware  
- Simple front-end using EJS templates to show upload form and list of uploaded images  

---

## 🛠 Features

- Upload one or more image files from browser  
- Automatically store uploaded images in `public/uploads/`  
- View uploaded images in a list or gallery view  
- Built with:  
  - Node.js  
  - Express.js  
  - EJS templating  
- Easy to extend: e.g. add user accounts, cloud storage (S3/Cloudinary), image metadata, thumbnails, deletion, etc.

---

## 📁 Project Structure
Image-Uploader/
│
├─ public/ # Static assets
│ ├─ uploads/ # Uploaded image files
│ └─ other static (css/js/images)
├─ views/ # EJS templates (UI)
├─ server.js # App entry point (Express setup + routes)
├─ package.json # Project metadata & dependencies
└─ .gitignore # Files/folders to ignore in git
