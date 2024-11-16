import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import parse, { domToReact } from 'html-react-parser';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';
import CodeBlock from '../components/CodeBlock';

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://letsprogram.in/api/blog/${slug}`);
        const data = await response.json();
        setBlog(data.data.blog);
        setRelatedBlogs(data.data.relatedBlogs?.slice(0, 3) || []);
      } catch (error) {
        console.error('Error fetching blog details:', error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlogDetails();
    }
  }, [slug]);

  const processContent = (content) => {
    if (!content) return '';

    const options = {
      replace: ({ name, attribs, children }) => {
        if (name === 'pre' && children[0]?.name === 'code') {
          const code = children[0];
          const language = code.attribs.class?.replace('language-', '') || '';
          const codeContent = code.children[0]?.data || '';
          
          return (
            <CodeBlock language={language}>
              {codeContent}
            </CodeBlock>
          );
        }
      }
    };

    return parse(content, options);
  };

  if (loading) {
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
        <div className='flex justify-center items-center min-h-screen'>
          <div className='w-16 h-16 rounded-full border-t-2 border-b-2 border-white animate-spin'></div>
        </div>
      </div>
    );
  }

  if (!blog) {
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
        <div className='flex flex-col justify-center items-center min-h-screen text-white'>
          <h2 className='text-2xl font-bold'>Blog not found</h2>
          <Link to='/blogs' className='mt-4 text-secondary hover:text-white'>
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

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

      <div className='px-4 pt-28 pb-10 mx-auto max-w-7xl'>
        <motion.div
          variants={staggerContainer()}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className='mb-8'>
            <Link to='/blogs' className='text-secondary hover:text-white'>
              ← Back to Blogs
            </Link>
          </div>

          <div className='p-4 rounded-2xl bg-tertiary md:p-8'>
            <h1 className='mb-6 text-2xl font-bold text-white md:text-4xl'>{blog.title}</h1>

            <div className='flex gap-4 items-center mb-6'>
              <img
                src={blog.authorImage}
                alt={blog.authorName}
                className='w-12 h-12 rounded-full'
              />
              <div>
                <h3 className='font-bold text-white'>{blog.authorName}</h3>
                <p className='text-sm text-secondary'>{blog.designation}</p>
              </div>
            </div>

            <div className='flex flex-wrap gap-2 mb-6'>
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className='px-3 py-1 text-sm rounded-full bg-black/30 text-white/80'
                >
                  #{tag}
                </span>
              ))}
            </div>

            <img
              src={blog.blogImages[2]}
              alt={blog.title}
              className='w-full rounded-xl mb-8 object-cover max-h-[400px]'
            />

            <div className='max-w-none prose prose-invert'>
              {processContent(blog.description)}
            </div>

            <div className='pt-8 mt-8 border-t border-white/10'>
              <p className='text-sm text-secondary'>
                Published on {new Date(blog.dateOfPublish).toLocaleDateString()} • {blog.readTime} min read
              </p>
            </div>
          </div>

          {relatedBlogs.length > 0 && (
            <div className='mt-12'>
              <h2 className={styles.sectionHeadText}>Related Articles</h2>
              <div className='grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3'>
                {relatedBlogs.map((relatedBlog) => (
                  <Link
                    key={relatedBlog.id}
                    to={`/blog/${relatedBlog.slug}`}
                    className='bg-tertiary rounded-2xl p-4 hover:scale-[1.02] transition-transform'
                  >
                    <img
                      src={relatedBlog.blogImages[0]}
                      alt={relatedBlog.title}
                      className='object-cover mb-4 w-full h-48 rounded-xl'
                    />
                    <h3 className='mb-2 text-lg font-bold text-white line-clamp-2'>
                      {relatedBlog.title}
                    </h3>
                    <p className='text-xs text-secondary line-clamp-2'>
                      {relatedBlog.description.replace(/<[^>]*>/g, '')}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default BlogDetails;
