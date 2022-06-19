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

export interface AudioType {
  attributes: {
    name: string;
    alternativeText: string;
    caption: string;
    url: string;
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

export interface PodcastType {
  attributes: {
    title: string;
    audio: {
      data: AudioType[];
    };
  };
}
