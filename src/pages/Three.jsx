import { useState } from "react";
import { Link } from "react-router-dom";

const Three = () => {
  const [copied, setCopied] = useState(false);
  const textToCopy = `
    N = 10;
    a = zeros(1,N);
    a(1) = 1;
    a(2) = 1;
    for n = 3:N
    a(n) = 2*a(n-1) - a(n-2);
    end
    disp('Computed terms:');
    disp(a);
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

      <h1>3: Solve the linear homogeneous recurrences</h1>
      <button
        onClick={handleCopy}
      >
        {copied ? 'Copied!' : 'Copy to Clipboard'}
      </button>
    </div>
  )
};

export default Three;