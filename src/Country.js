import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Country = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://restcountries.com/v2/name/${name}`)
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);

  const handleBack = () => {
    navigate("/");
  };

  console.log(country);
  return (
    <div>
      <h1>Name : {country[0]?.name}</h1>
      <img src={country[0]?.flag} alt=".." />
      <br />
      <br />
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default Country;
