import { ReactNode } from "react";
export const Button1 = ({ children }: { children: ReactNode }): ReactNode => {
  return (
    <button className="btn bg-gradient-to-b from-sky-500 to-sky-900 text-lg font-bold rounded-lg p-4 py-2">
      {children}
    </button>
  );
  <p></p>;
};
