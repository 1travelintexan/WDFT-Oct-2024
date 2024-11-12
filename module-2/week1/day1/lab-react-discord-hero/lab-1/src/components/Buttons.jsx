import { HeroBanner } from "./HeroBanner";

export const Buttons = () => {
  return (
    <div className="footer-container">
      <div className="buttons-container">
        <button>Download for Mac</button>
        <button className="btn-black">Open Discord in your Browser</button>
      </div>
      <HeroBanner />
    </div>
  );
};
