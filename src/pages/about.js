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
          <div className="flex justify-between items-center max-w-6xl mx-auto">
            <div className="text-2xl font-bold">DS</div>
            <div className="flex space-x-6">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/about" className="nav-link active">About</Link>
              <Link href="/contact" className="nav-link">Contact</Link>
            </div>
          </div>
        </nav>

        <div className="app">
          <h1 className="section-title">About Me</h1>
          
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