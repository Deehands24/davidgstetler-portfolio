import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | David Stetler</title>
        <meta name="description" content="Get in touch with David Stetler for project inquiries and collaboration opportunities" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-black to-neutral-900 text-white">
        <nav className="py-6 px-8">
          <div className="flex justify-center items-center max-w-6xl mx-auto space-x-12">
            <Link href="/" className="nav-button">
              <div className="nav-icon">🏠</div>
              <div className="nav-label">Home</div>
            </Link>
            <Link href="/about" className="nav-button">
              <div className="nav-icon">👤</div>
              <div className="nav-label">About</div>
            </Link>
            <Link href="/contact" className="nav-button active">
              <div className="nav-icon">✉️</div>
              <div className="nav-label">Contact</div>
            </Link>
          </div>
        </nav>

        <div className="app">
          <h1 className="section-title">Get In Touch</h1>
          
          <div className="contact-content glass-card p-8 max-w-2xl mx-auto">
            <p className="mb-8 text-center">
              Have a project in mind or just want to connect? I&apos;d love to hear from you!
            </p>
            
            <div className="contact-methods grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <a href="mailto:youremail@example.com" className="contact-method">
                <div className="contact-icon">📧</div>
                <div className="contact-label">Email</div>
                <div className="contact-value">youremail@example.com</div>
              </a>
              
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="contact-icon">💼</div>
                <div className="contact-label">LinkedIn</div>
                <div className="contact-value">linkedin.com/in/yourusername</div>
              </a>
              
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="contact-icon">💻</div>
                <div className="contact-label">GitHub</div>
                <div className="contact-value">github.com/yourusername</div>
              </a>
              
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="contact-icon">🐦</div>
                <div className="contact-label">Twitter</div>
                <div className="contact-value">@yourusername</div>
              </a>
            </div>
            
            <Link href="/" className="inline-block mx-auto mt-6 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
} 