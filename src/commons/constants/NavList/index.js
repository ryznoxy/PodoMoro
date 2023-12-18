import { BiEditAlt, BiTime, BiLeaf } from "react-icons/bi";

export const NavList = [
  {
    title: "timer",
    path: "/",
    icon: <BiTime size={24} />,
  },
  {
    title: "todolist",
    path: "/todolist",
    icon: <BiEditAlt size={24} />,
  },

  {
    title: "about",
    path: "/about",
    icon: <BiLeaf size={24} />,
  },
];
