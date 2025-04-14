import React, { useState } from "react";

interface CodeBlockProps {
  code: string;
}

export default function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Function to apply color highlighting
  const formatCode = (code: string) => {
    return code.split('\n').map((line, index) => {
      // Comment highlighting
      if (line.trim().startsWith('#')) {
        return <span key={index} className="text-hypr-accent">{line}</span>;
      }
      
      // Configuration section highlighting
      if (line.match(/^[a-zA-Z_]+\s*{/)) {
        return (
          <span key={index}>
            <span className="text-hypr-secondary">{line.split('{')[0]}</span>
            {'{'}
          </span>
        );
      }
      
      // Color-related properties
      if (line.trim().startsWith('col.')) {
        return (
          <span key={index}>
            <span className="text-pink-400">{line.split('=')[0]}</span>
            {line.includes('=') ? '=' + line.split('=')[1] : ''}
          </span>
        );
      }
      
      return <span key={index}>{line}</span>;
    });
  };

  return (
    <div className="code-block bg-hypr-code-bg rounded-lg border border-hypr-border p-4 relative">
      <button 
        className="copy-btn bg-hypr-bg/70 hover:bg-hypr-bg text-xs px-2 py-1 rounded-md transition"
        onClick={handleCopy}
      >
        <i className={`fa${copied ? 's fa-check' : 's fa-copy'} mr-1`}></i> 
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <pre className="text-sm font-fira overflow-x-auto">
        {formatCode(code).map((formattedLine, index) => (
          <React.Fragment key={index}>
            {formattedLine}
            {index < code.split('\n').length - 1 && '\n'}
          </React.Fragment>
        ))}
      </pre>
    </div>
  );
}
