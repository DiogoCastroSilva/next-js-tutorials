type IURL = { url: string };

interface IFormats {
  large: IURL;
  medium: IURL;
  small: IURL;
  thumbnail: IURL;
}

interface IImage {
  data: {
    attributes: {
      formats: IFormats;
      alternativeText?: string;
      name: string;
    };
  };
}

interface SingleEvent {
  id: string;
  attributes: {
    name: string;
    slug: string;
    venue: string;
    address: string;
    performers: string;
    date: string;
    time: string;
    description: string;
    image: IImage;
  };
}

export type { SingleEvent };
