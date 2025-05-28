import { useState } from "react";
import { Link } from "react-router-dom";

const Four = () => {
  const [copied, setCopied] = useState(false);
  const textToCopy = `
    clc
    n = 3;
    f = factorial(n);
    disp(['n = ', num2str(n)]);
    disp(['f = ', num2str(f)]);
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

      <h1>4: Interpret the factorial representations</h1>
      <button
        onClick={handleCopy}
      >
        {copied ? 'Copied!' : 'Copy to Clipboard'}
      </button>
    </div>
  )
};

export default Four;