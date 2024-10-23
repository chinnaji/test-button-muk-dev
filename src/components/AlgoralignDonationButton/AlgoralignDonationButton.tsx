import React, { FC, ReactNode } from "react";
import "./button.css";
interface Props {
  children: ReactNode | ReactNode[];
}

const AlgoralignDonationButton: FC<Props> = ({ children }) => {
  return <button className="donation-button">{children}</button>;
};

export default AlgoralignDonationButton;
