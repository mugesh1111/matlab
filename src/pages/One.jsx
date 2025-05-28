import { useState } from "react";
import { Link } from "react-router-dom";

const One = () => {
  const [copied, setCopied] = useState(false);
  const textToCopy = `
    elements=[1,2,3];
    permutations=perms(elements);
    disp('Permutations:');
    disp(permutations);
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

      <h1>1: Generate the permutations</h1>
      <button
        onClick={handleCopy}
      >
        {copied ? 'Copied!' : 'Copy to Clipboard'}
      </button>
    </div>
  )
};

export default One;