import React from "react";
import CardModel from "@/components/models/CardModel";
import { Back, Front } from "@/components/themes/dark-theme";

const input = {
  name: "Abel Ramadhan.",
  title: "Software Engineer",
  link: "https://abelramadhan.vercel.app",
};

export default function App() {
  return <CardModel front={<Front {...input} />} back={<Back {...input} />} />;
}
