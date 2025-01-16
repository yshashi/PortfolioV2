import { motion } from 'framer-motion';
import { styles } from '../styles';

const Hero = () => {
  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/1tlzGRapQ26IDQNgeKqv0Tk1oj2N2h6_b/view?usp=sharing', '_blank');
  };

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Sashikumar</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Senior Full Stack Developer with expertise in<br className="sm:block hidden" />
            building exceptional digital experiences
          </p>
          <button
            onClick={handleDownloadResume}
            className="mt-8 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary bg-[#915eff] hover:bg-[#7f44ff] transition-all"
          >
            Download Resume
          </button>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
