import React from "react";
import CardModel from "@/components/models/CardModel";
import themes from "@/utils/theme-registry";
import { isValidTheme } from "@/utils/theme-utiils";
import CanvasWrapper from "@/components/models/CanvasWrapper";

const input = {
  name: "Abel Ramadhan.",
  title: "Software Engineer",
  link: "https://abelramadhan.vercel.app",
};

export default async function Page() {
  const theme = themes.find((theme) => theme.name === "code-dark");
  const components = isValidTheme(await theme?.getComponents());
  if (!components) return;
  return (
    <div className="h-[100dvh] w-[100dvw] flex items-center justify-center overflow-clip">
      <components.Backdrop>
        <CanvasWrapper>
          <CardModel
            front={<components.Front {...input} />}
            back={<components.Back {...input} />}
          />
        </CanvasWrapper>
      </components.Backdrop>
    </div>
  );
}
