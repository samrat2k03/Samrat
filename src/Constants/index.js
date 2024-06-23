import html from "../Assets/html.png"
import css from "../Assets/CSS.png"
import Js from "../Assets/javascript.png"
import reactjs from "../Assets/react-2.svg"
import tailwindcss from "../Assets/tailwindCSS.svg"
import tensorflow from "../Assets/tensorflow-seeklogo.com.svg"
import nodejs from "../Assets/nodejs.svg"
import mongodb from "../Assets/mongodb.png"
import git from "../Assets/git.png"
import github from "../Assets/github.png"
import python from "../Assets/python.png"
import pytorch from "../Assets/pytorch.svg"
import linux from "../Assets/linux.png"
import canva from "../Assets/canvas1.png"
import gfirebase from "../Assets/gfblogo.png"
import flask from "../Assets/flask.png"
import java from "../Assets/java-logo.png"
import sql from "../Assets/sql.png"
import docker from "../Assets/docker-logo.svg"

import nike from "../Assets/projects/nike-new.png"
import mushroom from "../Assets/projects/mushroom.jpg"
import StudentHub from "../Assets/projects/StudentHub.png"
import todoapp from "../Assets/projects/todo1.jpg"
import ecommerce from "../Assets/projects/ecommerce-3.jpg"
import chatWithDocs from "../Assets/projects/chatWithDocs.png"

import hacktoberfest from "../Assets/projects/10@2x.png"
import badge from "../Assets/competition/hacktoberfest2023.png"

import responsiveCertificate from "../Assets/Certificates/Responsive Web Design Certificate/Responsive Web Design Certificate.jpg"
import jsDSA from "../Assets/Certificates/JavaScript Certificate/JavaScript Certificate.jpg"
import dataAnalysis from "../Assets/Certificates/Data Analytics FreeCodeCamp Certificate/Data Analytics FreeCodeCamp Certificate.jpg"
import js from "../Assets/Certificates/GuviCertification - NM9073P62f64v14j84.png"
import mongodbCertificate from "../Assets/Certificates/1-c67f6eba-0e11-4c3e-bc27-fde23622a9fb/1-c67f6eba-0e11-4c3e-bc27-fde23622a9fb.jpg"
import nm from "../Assets/Certificates/courses-tnsdc-skillsnetwork-site-certificates-72ace13054ee4470aa8f0f2c6b532863.jpg"

import linkedinLogo from "../Assets/social/linkedin.png"
import githubLogo from "../Assets/social/github.png"
import instagramLogo from "../Assets/social/instagram.png"
import twitterLogo from "../Assets/social/twitter.png" 
import gmailLogo from "../Assets/social/gmail.png"
import emailLogo from "../Assets/social/email.png"


export const SkillsList = [
    {
        name: "HTML",
        skillImage : html
    },
    {
        name: "CSS",
        skillImage : css
    },{
        name: "JavaScript",
        skillImage : Js
    },{
        name: "ReactJS",
        skillImage : reactjs
    },{
        name: "TailwindCSS",
        skillImage : tailwindcss
    },{
        name: "NodeJS",
        skillImage : nodejs
    },
    {
        name: "Python",
        skillImage : python
    },
    {
        name: "Java",
        skillImage : java
    },
    {
        name: "Flask",
        skillImage : flask
    },
    {
        name: "MongoDB",
        skillImage : mongodb
    },
    {
        name: "MySQL",
        skillImage : sql
    },{
        name: "Google FireBase",
        skillImage : gfirebase
    },{
        name: "Git",
        skillImage : git
    },{
        name: "GitHub",
        skillImage : github
    },{
        name: "TensorFlow",
        skillImage : tensorflow
    },{
        name: "Canva",
        skillImage : canva
    },{
        name: "Linux",
        skillImage : linux
    },{
        name:"Docker",
        skillImage : docker
    }
]

export const projects = [
    {
        name: "Ecommerce Scraper",
        description : "Scraping product details in Ecommerce sites like Amazon, Flipkart and compares the prize, reviews of the product.",
        technology:"MERN Stack",
        github:"https://github.com/samrat2k03/Ecommerce-Scraper.git",
        live:"https://github.com/samrat2k03/Ecommerce-Scraper.git",
        coverPhoto: ecommerce,
        height: 250,
        width:250,
    },
    {
        name: "Chat With Docs",
        description : "You can collaborate with you own data and it can responds like a virtual assistant,providing responses based on the user's data.", 
        technology:"Python, Google Gemini API, StreamLit",
        github:"https://github.com/samrat2k03/Chat-with-docs.git",
        live:"https://github.com/samrat2k03/Chat-with-docs.git",
        coverPhoto: chatWithDocs,
        height: 400,
        width:400,
    },
    {
        name: "Student Hub",
        description : "Advanced version of student information system. Students can chat, discuss, registering their profiles and direct communication with institute.",
        technology:"ReactJs, Sass, Firebase, FireStore",
        github:"https://github.com/samrat2k03/V2---Student-Hub.git",
        live:"https://student-hub-1.web.app/",
        coverPhoto: StudentHub,
        height: 400,
        width:400,
        category:"Full Stack Web Application"
    },
    {
        name: "Mushroom Classification using Artificial Intelligence",
        description : "Classifying various mushroom species from around the world using deep learning techniques, relying on mushroom images for precise identification.",
        technology:"HTML, CSS, JavaScript, Python, Flask, Tensorflow",
        github:"https://github.com/samrat2k03/AI-Mushroom-Classification-Analysis.git",
        live:"https://github.com/samrat2k03/AI-Mushroom-Classification-Analysis/blob/master/README.md",
        coverPhoto:mushroom,
        height: 350,
        width:350,
        category:"Machine Learning with Web"
    },
    {
        name: "Nike Landing Page",
        description : "This Nike landing page is a dynamic and visually appealing web application that provides an engaging and interactive user experience.",
        technology:"ReactJs, TailWindCSS",
        github:"https://github.com/samrat2k03/nike-landing-page.git",
        live:"https://nike-landing-page-samrat.netlify.app/",
        coverPhoto: nike,
        height: 300,
        width:300,
        category:"Frontend"
    }
  
]

export const competitions = [
    {
        name:"Hacktoberfest 2023",
        year:"2023",
        logo: hacktoberfest,
        certificates:badge
    }
]

export const certificates = [
    {
        name:"Project Uncovering the hidden treasures of the mushroom kingdom | IBM",
        certificate:nm,
        links:"https://courses.tnsdc.skillsnetwork.site/certificates/72ace13054ee4470aa8f0f2c6b532863"
    },
    {
        name:"Responsive Web Design @FreeCodeCamp.org",
        certificate:responsiveCertificate,
        links:"https://www.freecodecamp.org/certification/fcc4dec29fc-59c5-491d-918b-985ed593b9b1/responsive-web-design"
    },
    {
        name:"JavaScript Algorithms and Data Structures @FreeCodeCamp.org",
        certificate:jsDSA,
        links:"https://www.freecodecamp.org/certification/fcc4dec29fc-59c5-491d-918b-985ed593b9b1/javascript-algorithms-and-data-structures"
    },
    {
        name:"Data Analysis with Python @FreeCodeCamp.org",
        certificate:dataAnalysis,
        links:"https://www.freecodecamp.org/certification/fcc4dec29fc-59c5-491d-918b-985ed593b9b1/data-analysis-with-python-v7"
    },
    {
        name:"JavaScript @GUVI",
        certificate:js,
        links:"https://www.guvi.in/verify-certificate?id=NM9073P62f64v14j84"
    },
    {
        name:"MongoDB Essentials - A Complete MongoDB Guide @Infosys | SpringBoard",
        certificate:mongodbCertificate,
        links:"https://drive.google.com/file/d/16mQRwzJUJxx29Xj7pPvoyxzxGuZ1bemY/view"
    }
]

export const socialMedia = [
    {
        name:"LinkedIn",
        link:"https://www.linkedin.com/in/samrat-2k03/",
        logo:linkedinLogo
    },
    {
        name:"GitHub",
        link:"https://github.com/samrat2k03",
        logo:githubLogo
    },
    {
        name:"Instagram",
        link:"https://www.instagram.com/the.samrat28/",
        logo:instagramLogo
    },
    {
        name:"Twittter",
        link:"https://twitter.com/samratapr28",
        logo:twitterLogo
    },
    {
        name:"Gmail",
        link:"mailto:samratapr40@gmail.com",
        logo:gmailLogo
    }
]
