import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>About | David Stetler</title>
        <meta name="description" content="Learn more about David Stetler - Full Stack Developer" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-black to-neutral-900 text-white">
        <nav className="py-6 px-8">
          <div className="flex justify-center items-center max-w-6xl mx-auto space-x-12">
            <Link href="/" className="nav-button">
              <div className="nav-icon">🏠</div>
              <div className="nav-label">Home</div>
            </Link>
            <Link href="/about" className="nav-button active">
              <div className="nav-icon">👤</div>
              <div className="nav-label">About</div>
            </Link>
            <Link href="/contact" className="nav-button">
              <div className="nav-icon">✉️</div>
              <div className="nav-label">Contact</div>
            </Link>
          </div>
        </nav>

        <div className="app">
          <h1 className="section-title">About Me</h1>
          
          <div className="profile-container">
            <div className="profile-image-wrapper">
              <img 
                src="/images/Designer (1).png" 
                alt="Designer Portrait" 
                className="profile-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/250x250?text=Designer";
                }}
              />
            </div>
          </div>
          
          <div className="about-content glass-card p-8 max-w-3xl mx-auto">
            <p className="mb-6">
              As a Full Stack Developer with a passion for creating impactful digital experiences, 
              I combine technical expertise with creative problem-solving to deliver solutions 
              that make a difference.
            </p>
            
            <p className="mb-6">
              My journey in technology began with [your background story]. Today, I specialize 
              in [your key specialties/technologies], helping businesses and individuals bring 
              their ideas to life through code.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 mt-8">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="skill-item">Frontend Development</div>
              <div className="skill-item">Backend Development</div>
              <div className="skill-item">UI/UX Design</div>
              <div className="skill-item">Database Management</div>
              <div className="skill-item">API Integration</div>
              <div className="skill-item">DevOps</div>
            </div>
            
            <Link href="/" className="inline-block mt-6 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
} 