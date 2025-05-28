import { useState } from "react";
import { Link } from "react-router-dom";

const Five = () => {
  const [copied, setCopied] = useState(false);
  const textToCopy = `
    clc;
    clear;

    order = 0;
    delta = 0.01;
    lambda = 0.99;
    numSamples = 1000;
    noisePower = 0.1;

    t = (0:numSamples-1)';
    inputSignal = sin(0.1*t) + 2;
    noise = sqrt(noisePower)*randn(size(inputSignal));
    desiredSignal = 0.5 * inputSignal + noise; % Desired signal is inputSignal scaled by 0.5 plus noise

    w = zeros(order+1,1);
    P = eye(order+1)/delta;

    for n = 1:numSamples
        % For a standard RLS, u is the input vector at time n
        if order == 0
            u = inputSignal(n);
        else
            % This part would need to be expanded for a true FIR filter,
            % where u would be a tapped delay line of inputSignal
            % For simplicity, we'll keep order = 0 for this example.
            error('Order > 0 not fully implemented for input vector u in this example.');
        end

        e = desiredSignal(n) - w' * u;
        k = (P * u) / (lambda + u' * P * u);
        w = w + k * e;
        P = (P - k * u' * P) / lambda;
    end

    disp('Final filter coefficients:');
    disp(w);
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

      <h1>5: Find the Adaptive Lattice Filters</h1>
      <button
        onClick={handleCopy}
      >
        {copied ? 'Copied!' : 'Copy to Clipboard'}
      </button>
    </div>
  )
};

export default Five;