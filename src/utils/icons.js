import { BiCodeAlt, BiFootball, BiRestaurant, BiAngry } from "react-icons/bi";

export const getIcon = (topic) => {
  return topic === "coding" ? (
    <BiCodeAlt />
  ) : topic === "football" ? (
    <BiFootball />
  ) : topic === "cooking" ? (
    <BiRestaurant />
  ) : (
    <BiAngry />
  );
};
