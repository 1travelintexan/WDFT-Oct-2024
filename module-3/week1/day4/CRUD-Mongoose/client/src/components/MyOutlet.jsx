import Navbar from "./Navbar";

export default function MyOutlet({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <h2>The Footer</h2>
    </div>
  );
}
