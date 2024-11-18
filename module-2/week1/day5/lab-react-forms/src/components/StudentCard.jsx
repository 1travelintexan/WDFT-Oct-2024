import profileIcon from "../assets/profile-icon.png";

function StudentCard({
  fullName,
  email,
  phone,
  program,
  image,
  graduated,
  className,
}) {
  return (
      <div
        className={`StudentCard flex justify-between items-center p-3 mb-2 bg-white shadow-sm rounded border border-gray-200 hover:bg-gray-50 ${className}`}
      >
        <span
          className="flex items-center justify-center"
          style={{ flexBasis: "16%" }}
        >
          <img
            src={image || profileIcon}
            alt={`${fullName}`}
            className="rounded-full w-10 h-10 object-cover border-2 border-gray-300"
          />
        </span>
        <span style={{ flexBasis: "16%" }}>
          {fullName}
        </span>
        <span style={{ flexBasis: "16%" }}>{program}</span>
        <span style={{ flexBasis: "16%" }}>{email}</span>
        <span style={{ flexBasis: "16%" }}>{phone}</span>
        <span style={{ flexBasis: "16%" }}>{graduated ? "✅" : "⬜️"}</span>
      </div>
  );
}

export default StudentCard;
