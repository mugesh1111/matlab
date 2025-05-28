import { useState } from "react";
import { Link } from "react-router-dom";

const Seven = () => {
  const [copied, setCopied] = useState(false);
  const textToCopy = `
    clc;
    clear;
    signal1=logical([true,false,true,true]);
    signal2=logical([false,true,true,false]);
    disp('Signal 1:');
    disp(sprintf('%d',signal1));
    disp('Signal 2:');
    disp(sprintf('%d',signal2));
    and_result=signal1&signal2;
    or_result=signal1|signal2;
    not_result=~signal1;
    disp('Result of AND operation:');
    disp(sprintf('%d',and_result));
    disp('Result of OR operation:');
    disp(sprintf('%d',or_result));
    disp('Result of NOT operation on Signal 1:');
    disp(sprintf('%d',not_result));
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

      <h1>7 Apply the Boolean data for logical signals</h1>
      <button
        onClick={handleCopy}
      >
        {copied ? 'Copied!' : 'Copy to Clipboard'}
      </button>
    </div>
  )
};

export default Seven;