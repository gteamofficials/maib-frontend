export interface CardProps {
  media: {
    src: string;
    alt: string;
  };
  title: string;
  date: string;
  href: string;
}

export interface CardWithBodyProps extends CardProps {
  body: string;
}
