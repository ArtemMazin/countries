interface IFlags {
  png: string;
  svg: string;
  alt: string;
}

interface IName {
  common: string;
  official: string;
  nativeName: INativeName;
}

interface INativeName {
  nep: {
    official: string;
    common: string;
  };
}

export interface ICountry {
  flags: IFlags;
  name: IName;
  capital: string[];
  region: 'Africa' | 'Asia' | 'Antarctic' | 'Europe' | 'Oceania' | 'Americas';
  population: number;
}
