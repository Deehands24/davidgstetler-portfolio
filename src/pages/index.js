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
        <div className="app" data-clicked={clicked}>
          <h2 className="section-title">Welcome to My Portfolio</h2>

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
