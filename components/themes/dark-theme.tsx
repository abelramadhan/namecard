import { CornerDownRightIcon } from "lucide-react";
import { Illustration } from "../ui/glowing-stars";
import Link from "next/link";

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
          <Link href={props.link}>
            <div className="bg-white p-2 rounded-full z-2 hover:bg-gray-200 transition-colors cursor-pointer">
              <CornerDownRightIcon className="text-neutral-900" size={18} />
            </div>
          </Link>
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

export { Front, Back };
