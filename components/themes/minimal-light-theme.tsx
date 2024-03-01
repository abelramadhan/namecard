import { ScaleIcon } from "lucide-react";
import { PropsWithChildren } from "react";

const Wrapper = (props: PropsWithChildren) => {
  return (
    <div className="h-full w-full bg-neutral-100 text-neutral-800 border border-neutral-200 rounded-sm antialiased overflow-clip">
      {props.children}
    </div>
  );
};

const Front = (props: CardProps) => {
  return (
    <Wrapper>
      <div className="relative h-full w-full flex flex-row justify-between items-center p-4">
        <div className="h-full flex-1 flex items-end justify-start p-8">
          <div className="mb-4 space-y-2 z-10">
            <h1 className="text-2xl font-bold">{props.name}</h1>
            <h4 className="text-xs text-neutral-400">{props.title}</h4>
          </div>
        </div>
        <div className="flex-1"></div>
        <div className="absolute -top-8 -right-8 opacity-70">
          <ScaleIcon size={240} className="text-neutral-200" />
        </div>
      </div>
    </Wrapper>
  );
};

const Back = (props: CardProps) => {
  return (
    <Wrapper>
      <div className="relative h-full w-full flex flex-row justify-between items-center p-4">
        <div className="flex-1 "></div>
        <div className="h-full flex-2 flex flex-col items-end justify-around px-8 py-12">
          <div className="mb z-10 text-right">
            <h1 className="text-xl font-bold">{props.name}</h1>
            <h4 className="text-xs text-neutral-400">{props.title}</h4>
          </div>
          <ul className="space-y-1 text-end z-10">
            {props.contact_info &&
              Object.values(props.contact_info).map((item, index) => (
                <li key={index} className="text-neutral-400 text-xs">
                  {item}
                </li>
              ))}
          </ul>
        </div>
        <div className="absolute -top-24 -left-16 opacity-40">
          <ScaleIcon size={360} className="text-neutral-200" />
        </div>
      </div>
    </Wrapper>
  );
};

const Backdrop = (props: CardProps & PropsWithChildren) => {
  return (
    <div className="h-full w-full bg-neutral-200 bg-dot-black/[0.1]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-neutral-200 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      {props.children}
    </div>
  );
};

const ModelColor = "#d6d6ce";

export { Front, Back, Backdrop, ModelColor };
