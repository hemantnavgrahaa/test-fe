import React from "react";

interface IProps {
  params: { id: string };
}

const Cat = ({ params: { id } }: IProps) => {
  return <div>id : {id.replaceAll("%20", " ")}</div>;
};

export default Cat;
