import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet({ oneTweet }) {
  return (
    <div className="tweet">
      <ProfileImage imageSrc={oneTweet.user.image} />
      <div className="body">
        <div className="top">
          <User name={oneTweet.user.name} handle={oneTweet.user.handle} />
          <Timestamp time={oneTweet.timestamp} />
        </div>
        <Message theMess={oneTweet.message} />
        <Actions />
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
