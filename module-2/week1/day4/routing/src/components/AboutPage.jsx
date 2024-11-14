import { useSearchParams } from "react-router-dom";

const AboutPage = () => {
  const [theQueries] = useSearchParams();
  const theTestQuery = theQueries.get("test");
  const thePizzaQuery = theQueries.get("test2");
  console.log(theTestQuery, thePizzaQuery);
  return <div>AboutPage</div>;
};
export default AboutPage;
