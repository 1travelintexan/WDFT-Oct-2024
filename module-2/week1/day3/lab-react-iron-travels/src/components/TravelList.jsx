import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import PlanCard from "./PlanCard";
import Favorites from "./Favorites";
const TravelList = () => {
  const [plans, setPlans] = useState(travelPlansData);
  const [favs, setFavs] = useState([]);

  //js land...
  function handleDelete(planId) {
    const filteredPlans = plans.filter((onePlan) => {
      if (planId !== onePlan.id) {
        return true;
      }
    });
    setPlans(filteredPlans);
    // console.log("deleted", planId, filteredPlans, plans);
  }
  function handleFav(wholePlan) {
    console.log("fav clicked", wholePlan);
    setFavs([wholePlan, ...favs]);
  }
  return (
    <div className="travel-container">
      <div>
        {plans.map((onePlan) => (
          <PlanCard
            key={onePlan.id}
            onePlan={onePlan}
            handleDelete={handleDelete}
            handleFav={handleFav}
          />
        ))}
      </div>
      <Favorites favs={favs} />
    </div>
  );
};
export default TravelList;
