import { useTheme } from 'next-themes';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../components/Header'), {
  ssr: false,
});
const Hero = dynamic(() => import('../components/Hero'), {
  ssr: false,
});
const WorkExperience = dynamic(() => import('../components/WorkExperience'), {
  ssr: false,
});
const Skills = dynamic(() => import('../components/Skills'), {
  ssr: false,
});
const Projects = dynamic(() => import('../components/Header'), {
  ssr: false,
});
const ContactMe = dynamic(() => import('../components/ContactMe'), {
  ssr: false,
});
const About = dynamic(() => import('../components/About'), {
  ssr: false,
});

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div className='dark:bg-darkGray h-screen text-lightGray snap-y snap-mandatory w-full overflow-scroll z-0'>
      <Head>
        <title>Derry&#39;s Portofolio</title>
      </Head>
      <Header />
      <section id='hero' className='snap-start'>
        <Hero />
      </section>
      <section id='about' className='snap-center'>
        <About />
      </section>
      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>
      <section id='skills' className='snap-center'>
        <Skills />
      </section>

      <section id='projects' className='snap-center'>
        <Projects />
      </section>

      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>
    </div>
  );
}
