const Favorites = ({ favs }) => {
  return (
    <div>
      <h3>Favorites</h3>
      {favs.map((oneFav) => (
        <h6 key={oneFav.id}>{oneFav.destination}</h6>
      ))}
    </div>
  );
};
export default Favorites;
