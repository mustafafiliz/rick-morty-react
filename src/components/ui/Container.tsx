import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="container mx-auto lg:p-0 px-4">{children}</div>;
};

export default Container;
