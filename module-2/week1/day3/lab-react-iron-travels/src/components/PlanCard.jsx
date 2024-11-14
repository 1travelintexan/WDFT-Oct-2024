const PlanCard = ({ onePlan, handleDelete, handleFav }) => {
  return (
    <div className="plan-card">
      <img src={onePlan.image} alt={onePlan.destination} />
      <section>
        <h5>
          {onePlan.destination} ({onePlan.days} days)
        </h5>
        <p>{onePlan.description}</p>
        <h5>Price: {onePlan.totalCost}$</h5>
        {onePlan.totalCost < 350 ? (
          <span id="great-deal">Great Deal</span>
        ) : null}
        {onePlan.totalCost > 1500 && <span id="premium">Premium</span>}
        {onePlan.allInclusive && <span id="premium">All Inclusive</span>}
        <button
          onClick={() => {
            handleDelete(onePlan.id);
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            handleFav(onePlan);
          }}
        >
          ♡
        </button>
      </section>
    </div>
  );
};
export default PlanCard;
