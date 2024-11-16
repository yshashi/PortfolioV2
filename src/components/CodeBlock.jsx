import { useState, useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';

const CodeBlock = ({ children, originalContent }) => {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef(null);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, []);

  const handleCopy = async () => {
    try {
      // Remove HTML tags for clean code copying
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = originalContent || '';
      const cleanText = tempDiv.textContent || tempDiv.innerText || '';
      await navigator.clipboard.writeText(cleanText);
      setCopied(true);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="group relative">
      <div className="overflow-hidden rounded-lg bg-[#1f2937] shadow-lg p-4">
        <pre ref={codeRef}>
          <code>
            {children}
          </code>
        </pre>
      </div>

      <button
        onClick={handleCopy}
        className={"absolute top-3 right-3 px-3 py-1.5 text-sm font-medium " +
                  "bg-gray-700/50 hover:bg-gray-600 text-white rounded-md " +
                  "transition-all duration-200 flex items-center gap-2 " +
                  (copied ? 'opacity-100' : 'opacity-0 group-hover:opacity-100')}
        style={{ opacity: copied ? 1 : undefined }}
      >
        {copied ? (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Copied!
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
              <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
            </svg>
            Copy
          </>
        )}
      </button>
    </div>
  );
};

export default CodeBlock;
