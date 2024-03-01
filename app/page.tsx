import CanvasWrapper from "@/components/models/CanvasWrapper";
import CardModel from "@/components/models/CardModel";
import { Button } from "@/components/ui/button";
import * as defaultTheme from "@/components/themes/minimal-light-theme";
import Image from "next/image";
import { isValidTheme } from "@/utils/theme-utiils";

const input: Tables<"user-detail"> = {
  user_id: "0000",
  username: "John Doe",
  name: "Jajang Sokbreker",
  title: "Engineer",
  theme: "minimal-light",
  created_at: "",
  primary_link: "",
  contact_info: {},
};

export default function Home() {
  const theme = isValidTheme(defaultTheme);
  return (
    <main className="relative min-w-screen min-h-screen bg-background  overflow-x-clip">
      <nav className="w-full h-[8vh] sm:px-[15%] px-[5%] py-3 flex flex-row justify-between items-center border-b">
        <h1 className="text-2xl font-extrabold text-foreground">Namecard</h1>
        <Button size={"sm"}>Dashboard</Button>
      </nav>
      <section className="relative w-full h-[92vh] sm:px-[15%] px-[5%] flex flex-row justify-start sm:items-center items-end dark:bg-dot-white/30 bg-dot-black/30">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="flex-1 space-y-4 z-50 my-4 max-w-96 sm:p-0 p-4 sm:bg-transparent bg-background/30 sm:backdrop-blur-none backdrop-blur-sm rounded sm:border-none border">
          <div className="space-y-2">
            <h1 className="sm:text-6xl text-3xl font-bold drop-shadow-sm">
              Stand out from the crowd!
            </h1>
            <h4 className="sm:text-lg text-sm sm:w-full w-[75%] text-muted-foreground drop-shadow-sm">
              With your own personal namecard made just for you
            </h4>
          </div>
          <div className="space-x-2">
            <Button>Start Now</Button>
            <Button variant={"outline"}>Learn More</Button>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full flex items-center justify-center p-4 bg-muted">
          <p className="text-muted-foreground font-light text-xs">
            <span className="font-semibold">namecards</span> by abelramadhan
          </p>
        </div>
      </section>
      <div className="absolute w-[500px] h-full sm:right-32  -right-32 top-0 z-0">
        <CanvasWrapper>
          <CardModel
            front={<defaultTheme.Front {...input} />}
            back={<defaultTheme.Back {...input} />}
            color={defaultTheme.ModelColor}
          />
        </CanvasWrapper>
      </div>
    </main>
  );
}
