import { Pixelify_Sans } from 'next/font/google';
import { Space_Mono } from 'next/font/google';
import InfiniteSkills from '../components/InfiniteSkills';
import ProjectCard, { Project } from '../components/ProjectCard';

const pixelifySans = Pixelify_Sans({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});
const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export default function Home() {
  const projects: Project[] = [
    {
      name: "Animeflix",
      description: "Anime streaming platform with a vast collection of anime shows and movies.",
      url: "https://anime-flix-two.vercel.app",
      image: "https://placehold.co/600x400/3b4252/e5e9f0?text=Animeflix",
      github: "https://github.com/dipak-01/animeflix",
      technologies: ["React", "Next.js", "Tailwind"]
    },
    {
      name: "Upstyle",
      description: "Sneaker e-commerce website with trendy sneaker collections.",
      url: "https://sahil7741.github.io/UpStyle/frontend/html/index.html",
      image: "https://placehold.co/600x400/3b4252/e5e9f0?text=Upstyle",
      github: "https://github.com/dipak-01/E-commerce-Website",
      technologies: ["Javascript", "CSS"]
    },
    {
      name: "QuickIntell",
      description: "AI-powered business intelligence tool for quick data insights.",
      url: "https://quickintell.vercel.app",
      image: "https://placehold.co/600x400/3b4252/e5e9f0?text=QuickIntell",
      github: "https://github.com/dipak-01/quickintell",
      technologies: ["React", "Node", "TypeScript"]
    },
    {
      name: "Flash",
      description: "The all-in-one platform for sports enthusiasts to form teams, book venues, and connect with fellow players.",
      url: "https://flash-frontend-plum.vercel.app",
      image: "https://placehold.co/600x400/3b4252/e5e9f0?text=Flash",
      github: "https://github.com/dipak-01/Flash-Frontend",
      technologies: ["Next.js", "Tailwind", "TypeScript"]
    }
  ];

  return (
    <div className={`container mx-auto py-5 sm:py-10 px-3 sm:px-4 ${spaceMono.className}`}>
      <div className="sm:max-w-1/3 py-20 mx-auto">
        <header className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8">
          <div className={`text-3xl sm:text-4xl bg-gray-900 ${pixelifySans.className} px-3 py-1 rounded mb-3 sm:mb-0 sm:mr-4`}>dk.</div>
          <div>
            <h1 className="text-xl sm:text-2xl text-gray-400">Dipak Kurkute</h1>
            <p className="text-base sm:text-lg text-gray-500">Web Developer</p>
          </div>
        </header>
        
        <section className="mb-6 sm:mb-8 text-gray-400">
          <p className="text-base sm:text-lg">
            I am a web developer with 1 years of experience in web development.
            I specialize in creating responsive and user-friendly web applications.
          </p>
        </section>

        <section className="mb-6 sm:mb-8">
          <h2 className="text-base sm:text-lg text-gray-300 mb-3 border-b border-gray-700 pb-2"># Skills</h2>
          <InfiniteSkills />
        </section>
        
        <section className="mb-6 sm:mb-8">
          <h2 className="text-base sm:text-lg text-gray-300 font-semibold mb-3 border-b border-gray-700 pb-2"># Projects</h2>
          <div className="grid grid-cols-1 gap-4 mt-4">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>
        
        <section className="mb-6 sm:mb-8">
          <h2 className="text-base sm:text-lg text-gray-300 font-semibold mb-3 border-b border-gray-700 pb-2"># Resume</h2>
          <a href="/Resume.pdf" download className="text-blue-400 hover:underline flex items-center">
            <span>Download my resume</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </section>
        
        <section className="mb-6 sm:mb-8">
          <h2 className="text-base sm:text-lg text-gray-300 font-semibold mb-3 border-b border-gray-700 pb-2"># Contact</h2>
          <ul className="space-y-2">
            <li className="break-words flex items-center justify-between">
              <span className="font-medium">Email: </span>
              <a href="mailto:deepakkurkutedk007@gmail.com" className="text-blue-400 hover:text-blue-300 flex items-center group">
                <span>deepakkurkutedk007@gmail.com</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </li>
            <li className="break-words flex items-center justify-between">
              <span className="font-medium">GitHub: </span>
              <a href="https://github.com/dipak-01" className="text-blue-400 hover:text-blue-300 flex items-center group">
                <span>github.com/dipak-01</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </li>
            <li className="break-words flex items-center justify-between">
              <span className="font-medium">LinkedIn: </span>
              <a href="https://www.linkedin.com/in/dipak-kurkute-2a4451256/" className="text-blue-400 hover:text-blue-300 flex items-center group">
                <span>linkedin.com/in/dipak-kurkute</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
