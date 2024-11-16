import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const BlogCard = ({ blog, index }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/blog/${blog.slug}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        damping: 12,
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      onClick={handleReadMore}
      className='p-5 rounded-2xl sm:w-[360px] w-full bg-tertiary hover:shadow-card cursor-pointer'
    >
      <div className='relative w-full h-[220px] group'>
        <img
          src={blog.blogImages[0]}
          alt={blog.title}
          className='object-cover w-full h-full rounded-xl'
        />
        <div className='flex absolute inset-0 justify-center items-center bg-black bg-opacity-50 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
          <span className='px-4 py-2 text-lg font-semibold text-white rounded-lg bg-primary'>Read More</span>
        </div>
      </div>

      <div className='mt-5'>
        <div className='flex gap-3 items-center'>
          <img
            src={blog.authorImage}
            alt={blog.authorName}
            className='w-8 h-8 rounded-full'
          />
          <div>
            <h3 className='text-white font-bold text-[14px]'>
              {blog.authorName}
            </h3>
            <p className='text-secondary text-[12px]'>{blog.designation}</p>
          </div>
        </div>

        <h3 className='text-[18px] font-bold mt-4 text-white line-clamp-2 leading-tight'>
          {blog.title}
        </h3>
        
        <p className='mt-3 text-secondary text-[14px] line-clamp-3 leading-relaxed'>
          {blog.description}
        </p>

        <div className='flex flex-wrap gap-2 mt-4'>
          {blog.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className='text-[12px] bg-black/30 px-3 py-1 rounded-full text-white/80 font-medium'
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className='flex justify-between items-center pt-4 mt-4 border-t text-secondary border-white/10'>
          <span className='text-[12px] font-medium'>
            {new Date(blog.dateOfPublish).toLocaleDateString()}
          </span>
          <span className='text-[12px] font-medium'>
            {blog.readTime} min read
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pageNumbers.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pageNumbers.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    return pageNumbers;
  };

  return (
    <div className='flex flex-wrap gap-2 justify-center'>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded ${
          currentPage === 1
            ? 'bg-tertiary text-secondary cursor-not-allowed'
            : 'bg-tertiary text-white hover:bg-white hover:text-primary'
        }`}
      >
        Prev
      </motion.button>
      {getPageNumbers().map((number, index) => (
        <motion.button
          key={index}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => typeof number === 'number' && onPageChange(number)}
          className={`px-3 py-1 rounded ${
            currentPage === number
              ? 'bg-white text-primary'
              : number === '...'
              ? 'bg-transparent text-white cursor-default'
              : 'bg-tertiary text-white hover:bg-white hover:text-primary'
          }`}
        >
          {number}
        </motion.button>
      ))}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded ${
          currentPage === totalPages
            ? 'bg-tertiary text-secondary cursor-not-allowed'
            : 'bg-tertiary text-white hover:bg-white hover:text-primary'
        }`}
      >
        Next
      </motion.button>
    </div>
  );
};

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchBlogs(currentPage);
  }, [currentPage]);

  const fetchBlogs = async (page) => {
    try {
      setLoading(true);
      const response = await fetch(`https://letsprogram.in/api/blog?page=${page}&pageSize=9`);
      const data = await response.json();
      setBlogs(data.data.blogs);
      setTotalPages(data.data.totalPages);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className='min-h-screen bg-primary'>
      <nav className='flex fixed top-0 z-20 items-center py-5 w-full bg-primary'>
        <div className='flex justify-between items-center px-4 mx-auto w-full max-w-7xl'>
          <Link to='/' className='flex gap-2 items-center'>
            <p className='text-white text-[18px] font-bold cursor-pointer flex'>
              Sashikumar &nbsp;
              <span className='hidden sm:block'> | Portfolio</span>
            </p>
          </Link>
        </div>
      </nav>

      <div className='px-4 pt-28 mx-auto max-w-7xl'>
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='flex flex-col justify-between items-center mb-8 sm:flex-row'
        >
          <div>
            <p className={styles.sectionSubText}>My latest articles</p>
            <h2 className={styles.sectionHeadText}>Blog.</h2>
          </div>
          <div className='mt-4 sm:mt-0'>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='grid grid-cols-1 gap-6 justify-items-center sm:grid-cols-2 lg:grid-cols-3'
        >
          {loading ? (
            <div className='col-span-full flex items-center justify-center min-h-[50vh]'>
              <div className='w-16 h-16 rounded-full border-t-2 border-b-2 border-white animate-spin'></div>
            </div>
          ) : (
            blogs.map((blog, index) => (
              <BlogCard key={`${blog._id}-${index}`} blog={blog} index={index} />
            ))
          )}
        </motion.div>

        <div className='pb-10 mt-10 sm:hidden'>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
