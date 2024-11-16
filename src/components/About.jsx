import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm an experienced Senior Full Stack Developer with a strong foundation in both .NET/C# and JavaScript ecosystems, specializing in TypeScript, React, Angular, Node.js, and Express.js. I excel in building scalable, high-performance web applications and implementing complex business logic, with experience leading development teams. My technical toolkit includes expertise in databases like MongoDB and PostgreSQL, containerization with Docker, and cloud platforms such as AWS and Azure. As a quick learner and proactive collaborator, I'm dedicated to creating user-centric, efficient solutions that solve real-world challenges. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {/* Add service cards here if needed */}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
