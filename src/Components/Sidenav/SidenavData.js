import React from "react";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

export const sidenavData = [
  {
    title: "Explore New Recepies",
    icon: <FastfoodIcon />,
    link: "/new-blogs",
  },
  {
    title: "Friends",
    icon: <PersonAddIcon />,
    link: "/friends",
  },
  {
    title: "Community",
    icon: <Diversity3Icon />,
    link: "/community",
  },
  {
    title: "Profile",
    icon: <PersonIcon />,
    link: "/profile",
  },
  {
    title: "Logout",
    icon: <LogoutIcon />,
    link: "/logout",
  },
];
