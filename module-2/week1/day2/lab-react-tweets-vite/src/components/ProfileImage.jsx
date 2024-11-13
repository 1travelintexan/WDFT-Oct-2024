const ProfileImage = ({ imageSrc }) => {
  return (
    <div>
      <img src={imageSrc} className="profile" alt="profile" />
    </div>
  );
};
export default ProfileImage;
