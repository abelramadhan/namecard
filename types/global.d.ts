type CardProps = {
  name: string;
  title: string;
  link: string;
};

type CardComponent = (props: CardProps) => JSX.Element;
type BackdropComponent = (props: CardProps & PropsWithChildren) => JSX.Element;

type ThemeType = {
  Front: CardComponent;
  Back: CardComponent;
  Backdrop: BackdropComponent;
};
