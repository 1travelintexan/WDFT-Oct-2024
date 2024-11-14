import { useSearchParams } from "react-router-dom";
const AboutPage = () => {
  //the useSearchParams returns and array with the queries inside index 0
  const [theQueries] = useSearchParams();
  //after you get the return from useSearchParams you have to call the .get()
  const theTestQuery = theQueries.get("test");
  const thePizzaQuery = theQueries.get("test2");
  console.log(theTestQuery, thePizzaQuery);

  return <div>AboutPage</div>;
};
export default AboutPage;
