import { useState } from "react";
import { Link } from "react-router-dom";

const Two = () => {
  const [copied, setCopied] = useState(false);
  const textToCopy = `
    elements=[1,2,3,4,5];
    k=3;
    combinations=nchoosek(elements,k);
    disp('Combinations:');
    disp(combinations);
  `;
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <div>
      <Link
        to="/"
      >
        Home
      </Link>

      <h1>2: Generate the combinations</h1>
      <button
        onClick={handleCopy}
      >
        {copied ? 'Copied!' : 'Copy to Clipboard'}
      </button>
    </div>
  )
};

export default Two;