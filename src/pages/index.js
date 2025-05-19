import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const projects = [
  {
    title: 'Glassy UI Kit',
    description: 'A reusable CSS component system with a frosted glass aesthetic and touch-friendly shadows.',
    image: '/videos/glassrecord.mp4',
    link: 'https://github.com/yourusername/glassy-ui',
    video: true
  },
  {
    title: 'Interactive Portfolio Template',
    description: 'A dynamic portfolio site template using Next.js, Tailwind, and animated project cards.',
    image: '/images/portfolio-template.jpg',
    link: 'https://github.com/yourusername/portfolio-template'
  },
  {
    title: 'Design System Builder',
    description: 'Tooling and UI framework to create consistent design systems with custom theming support.',
    image: '/images/design-system.jpg',
    link: 'https://github.com/yourusername/design-system'
  }
];

export default function Home() {
  const [videoError, setVideoError] = useState({});

  const handleVideoError = (index) => {
    setVideoError(prev => ({...prev, [index]: true}));
  };

  return (
    <>
      <Head>
        <title>Hands | Portfolio</title>
        <meta name="description" content="Web design portfolio of Hands, showcasing creative and technical project work." />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-black to-neutral-900 text-white">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-32 px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Hey, I&apos;m Hands</h1>
          <p className="text-lg md:text-xl max-w-2xl text-neutral-300">
            Web designer & creative developer. I build slick, performance-optimized interfaces with a touch of flash and a whole lot of polish.
          </p>
          <div className="mt-8">
            <Link href="#projects" legacyBehavior>
              <a className="inline-block px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300">
                View My Work
              </a>
            </Link>
          </div>
        </section>

        {/* Projects Preview */}
        <section id="projects" className="py-24 px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="glass-card overflow-hidden flex flex-col p-4">
                <div className="overflow-hidden flex justify-center items-center h-48 bg-neutral-800 rounded-lg">
                  {project.video && !videoError[index] ? (
                    <video 
                      src={project.image} 
                      alt={project.title}
                      className="h-full w-auto object-contain"
                      autoPlay
                      muted
                      loop
                      playsInline
                      onError={() => handleVideoError(index)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <p className="text-neutral-400 px-4 text-center">
                        {project.video ? 
                          "Video not found. Add a video file at &apos;public/videos/glassrecord.mp4&apos;" : 
                          "Image not found"
                        }
                      </p>
                    </div>
                  )}
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-neutral-400 mb-4">{project.description}</p>
                  <a href={project.link} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-24 bg-neutral-950 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Let&apos;s Build Something</h2>
            <p className="text-neutral-400 mb-6">Open to freelance opportunities and collaborations. Let&apos;s connect and make something impactful.</p>
            <a href="mailto:youremail@example.com" className="inline-block px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300">
              Get in Touch
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
