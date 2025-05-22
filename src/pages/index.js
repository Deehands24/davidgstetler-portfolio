import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <Head>
        <title>David Stetler | Portfolio</title>
        <meta name="description" content="David Stetler's portfolio website showcasing full stack development projects" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-black to-neutral-900 text-white">
        {/* Navigation */}
        <nav className="py-6 px-8">
          <div className="flex justify-between items-center max-w-6xl mx-auto">
            <div className="text-2xl font-bold">DS</div>
            <div className="flex space-x-6">
              <Link href="/" className="nav-link active">Home</Link>
              <Link href="/about" className="nav-link">About</Link>
              <Link href="/contact" className="nav-link">Contact</Link>
            </div>
          </div>
        </nav>

        <div className="app" data-clicked={clicked}>
          <h2 className="section-title">Welcome to My Portfolio</h2>

          {/* Profile Image */}
          <div className="profile-container">
            <div className="profile-image-wrapper">
              {/* Replace with your actual image path */}
              <img 
                src="/images/profile/profile.jpg" 
                alt="David Stetler" 
                className="profile-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/250x250?text=David+Stetler";
                }}
              />
            </div>
          </div>

          <div className="bio-container">
            <button
              className={`glassy-btn ${clicked ? "spin" : ""}`}
              onClick={() => setClicked((c) => !c)}
            >
              Hi, I&apos;m David Stetler — a passionate Full Stack Developer who crafts responsive, intuitive user interfaces and scalable backend systems. Whether through traditional code or low-code platforms, I deliver effective and modern solutions. With a strong grasp of data science, I enjoy transforming complex challenges into smart, efficient products.
            </button>
          </div>

          <h3 className="projects-title">Here are projects that I worked on:</h3>

          <div className="projects-container">
            <div className="project-card">
              <div className="project-title">Project One Title</div>
              <img src="https://via.placeholder.com/300x200" alt="Project One" className="project-media" />
              <p className="project-description">Brief description of the project and what technologies or skills were used.</p>
            </div>

            <div className="project-card">
              <div className="project-title">Project Two Title</div>
              <video className="project-media" controls>
                <source src="/videos/glassrecord.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="project-description">Short write-up or key features of the project, video demonstration included.</p>
            </div>

            <div className="project-card">
              <div className="project-title">Project Three Title</div>
              <img src="https://via.placeholder.com/300x200" alt="Project Three" className="project-media" />
              <p className="project-description">Summary of what the project achieved or how it solved a problem.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
