type CardProps = Tables<"user-detail">;

type CardComponent = (props: CardProps) => JSX.Element;
type BackdropComponent = (props: CardProps & PropsWithChildren) => JSX.Element;

type ThemeType = {
  Front: CardComponent;
  Back: CardComponent;
  Backdrop: BackdropComponent;
  ModelColor: string;
};
