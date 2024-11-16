import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant, fadeIn } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My technical expertise</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <motion.div 
        variants={fadeIn("", "", 0.1, 1)}
        className='flex flex-row flex-wrap justify-center gap-10 mt-10'
      >
        {technologies.map((technology, index) => (
          <div className='w-28 h-28 flex flex-col items-center justify-center' key={technology.name}>
            <img 
              src={technology.icon} 
              alt={technology.name}
              className="w-16 h-16 object-contain mb-2"
            />
            <p className="text-secondary text-[14px]">{technology.name}</p>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
