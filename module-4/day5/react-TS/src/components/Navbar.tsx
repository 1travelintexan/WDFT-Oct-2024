import { SetStateAction } from "react";
type navbarProps = {
  name: string;
  age: number | string;
  owner?: string;
  setCount: React.Dispatch<SetStateAction<number>>;
};

export const Navbar = (props: navbarProps) => {
  return (
    <div>
      {props.name}'s Navbar
      <button onClick={() => props.setCount((prev) => prev + 1)}>
        Change Count
      </button>
    </div>
  );
};
