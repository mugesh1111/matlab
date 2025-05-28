import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Link
        to="/1"
      >
        1: Generate the permutations
      </Link>
      <br />
      <Link
        to="/2"
      >
        2: Generate the combinations
      </Link>
      <br />
      <Link
        to="/3"
      >
        3: Solve the linear homogeneous recurrences
      </Link>
      <br />
      <Link
        to="/4"
      >
        4: Interpret the factorial representations
      </Link>
      <br />
      <Link
        to="/5"
      >
        5: Find the Adaptive Lattice Filters
      </Link>
      <br />
      <Link
        to="/6"
      >
        6: Verify the properties of Lattices
      </Link>
      <br />
      <Link
        to="/7"
      >
        7: Apply the Boolean data for logical signals
      </Link>
      <br />
      <Link
        to="/8"
      >
        8: Find the homomorphism of direct product
      </Link>
    </div>
  )
};

export default HomePage;