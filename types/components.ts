export interface CardPropsMedia {
  src: string;
  alt: string;
}

export interface CardProps {
  media: CardPropsMedia;
  title: string;
  date: string;
  href: string;
}

export interface CardWithBodyProps extends CardProps {
  body: string;
}
