import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    navigate(`/country/${name}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleName} type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Home;
