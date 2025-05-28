import { useState } from "react";
import { Link } from "react-router-dom";

const Six = () => {
  const [copied, setCopied] = useState(false);
  const textToCopy = `
    clc;
    lattice = [1,2, 3,4;
              2, 3, 4, 5;
              3, 4, 5, 6;
              4, 5, 6, 7];
    closure_check_matrix_addition = isequal(size(lattice + lattice), size(lattice));
    associativity_check = isequal((lattice + lattice) + lattice, lattice + (lattice + lattice));
    commutativity_check = isequal(lattice + lattice, lattice + lattice);
    identity_element = zeros(size(lattice));
    identity_check = all(all(lattice + identity_element == lattice)) && all(all(identity_element + lattice == lattice));
    inverse_check = true;
    for i = 1:numel(lattice)
        element = lattice(i);
        inverse = -element;
        if element + inverse ~= 0
            inverse_check = false;
            break;
        end
    end
    disp(['Closure: ', num2str(closure_check_matrix_addition)]);
    disp(['Associativity: ', num2str(associativity_check)]);
    disp(['Commutativity: ', num2str(commutativity_check)]);
    disp(['Identity Element: ', num2str(identity_check)]);
    disp(['Inverse Element: ', num2str(inverse_check)]);
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

      <h1>6: Verify the properties of Lattices</h1>
      <button
        onClick={handleCopy}
      >
        {copied ? 'Copied!' : 'Copy to Clipboard'}
      </button>
    </div>
  )
};

export default Six;