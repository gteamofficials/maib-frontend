export interface ImageType {
  attributes: {
    alternativeText: string;
    caption: string;
    name: string;
    url: string;
    formats: {
      large: {
        url: string;
      };
      medium: {
        url: string;
      };
      small: {
        url: string;
      };
      thumbnail: {
        url: string;
      };
    };
  };
}

export interface AboutType {
  attributes: {
    category: string;
    title: string;
    description: string;
    images: {
      data: ImageType[];
    };
  };
}

export interface InformationType {
  attributes: {
    category: string;
    title: string;
    description: string;
    date: string;
    coverImage: ImageType;
    images: {
      data: ImageType[];
    };
    slug: string;
  };
}

export interface ServiceType {
  attributes: {
    title: string;
    description: string;
    icon: {
      data: ImageType;
    };
  };
}
