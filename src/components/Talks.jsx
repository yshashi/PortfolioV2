import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { talks } from '../constants/talks';

const TalkCard = ({ index, title, conference, date, description, image, slides, video, tags }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
  >
    <div className='bg-tertiary rounded-[20px] py-5 px-6 min-h-[280px] flex justify-evenly items-center flex-col'>
      {image && (
        <img src={image} alt={title} className='object-cover mb-4 w-full h-48 rounded-lg' />
      )}
      <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      <p className='text-secondary text-[16px] text-center'>{conference}</p>
      <p className='text-secondary text-[14px] mt-2'>{date}</p>
      <p className='text-white-100 text-[14px] mt-4 text-center line-clamp-4'>{description}</p>
      
      <div className='flex flex-wrap gap-2 justify-center mt-4'>
        {tags.map((tag) => (
          <span key={tag} className='text-[14px] green-text-gradient px-2 py-1 bg-tertiary rounded-full'>
            {tag}
          </span>
        ))}
      </div>

      <div className='flex gap-4 mt-4'>
        {slides && (
          <a
            href={slides}
            target='_blank'
            rel='noopener noreferrer'
            className='text-secondary hover:text-white'
          >
            View Slides
          </a>
        )}
        {video && (
          <a
            href={video}
            target='_blank'
            rel='noopener noreferrer'
            className='text-secondary hover:text-white'
          >
            Watch Talk
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const Talks = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Presentations</p>
        <h2 className={styles.sectionHeadText}>Recent Conference Talks.</h2>
      </motion.div>

      <div className='grid grid-cols-1 gap-7 mx-auto mt-20 max-w-7xl md:grid-cols-2 lg:grid-cols-3'>
        {talks.map((talk, index) => (
          <TalkCard key={`talk-${index}`} index={index} {...talk} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Talks, 'talks');
