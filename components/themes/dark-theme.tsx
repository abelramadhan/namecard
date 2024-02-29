import { CornerDownRightIcon } from "lucide-react";
import { Illustration } from "../ui/glowing-stars";
import Link from "next/link";
import { PropsWithChildren } from "react";

const Front = (props: CardProps) => {
  return (
    <div className="h-full w-full bg-neutral-900 text-white border border-gray-700 rounded-sm flex flex-col justify-between p-4 antialiased">
      <div>
        <Illustration mouseEnter={false} />
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="p-4 flex flex-col gap-2 justify-end">
          <h1 className="font-bold text-xl z-2">{props.name}</h1>
          <h4 className="text-gray-500 text-xs">{props.title}</h4>
        </div>
        <div className="p-4">
          {props.primary_link && (
            <Link href={props.primary_link}>
              <div className="bg-white p-2 rounded-full z-2 hover:bg-gray-200 transition-colors cursor-pointer">
                <CornerDownRightIcon className="text-neutral-900" size={18} />
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const Back = (props: CardProps) => {
  return (
    <div className="h-full w-full bg-neutral-900 text-white border border-gray-700 rounded-sm flex justify-center items-center p-4 antialiased">
      <h1 className="font-bold text-xl">{props.name}</h1>
    </div>
  );
};

const Backdrop = (props: CardProps & PropsWithChildren) => {
  return (
    <div className="h-full w-full bg-neutral-900 bg-dot-white/[0.1] font-mono">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-neutral-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      {props.children}
    </div>
  );
};

const ModelColor = "#374151";

export { Front, Back, Backdrop, ModelColor };
