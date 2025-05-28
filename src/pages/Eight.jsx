import { useState } from "react";
import { Link } from "react-router-dom";

const Eight = () => {
  const [copied, setCopied] = useState(false);
  const textToCopy = `
    clc;
    clear;

    G1 = [1,2,3];
    G2 = [4,5];

    disp('Direct product elements and their homomorphic images:');
    for i = 1:length(G1)
        for j = 1:length(G2)
            g1 = G1(i);
            g2 = G2(j);
            homomorphic_image = g1 * g2;
            fprintf('(G1: %d, G2: %d) -> H: %d\n', g1, g2, homomorphic_image);
        end
    end
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

      <h1>8: Find the homomorphism of direct product</h1>
      <button
        onClick={handleCopy}
      >
        {copied ? 'Copied!' : 'Copy to Clipboard'}
      </button>
    </div>
  )
};

export default Eight;