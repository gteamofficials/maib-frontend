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
      data: AudioType;
    };
  };
}

export interface InformationType {
  attributes: {
    category: {
      data: CategoryType;
    };
    title: string;
    type: string;
    description: string;
    date: string;
    coverImage: { data: ImageType };
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

export interface CategoryType {
  attributes: {
    category: string;
  };
}

export interface SalahScheduleType {
  imsak: string;
  subuh: string;
  terbit: string;
  dhuha: string;
  dzuhur: string;
  ashar: string;
  maghrib: string;
  isya: string;
  date: string;
}

export interface HijriDateType {
  hijri: {
    date: string;
    format: string;
    day: string;
    weekday: {
      en: string;
      ar: string;
    };
    month: {
      number: number;
      en: string;
      ar: string;
    };
    year: string;
    designation: {
      abbreviated: string;
      expanded: string;
    };
    holidays: string[];
  };
}
