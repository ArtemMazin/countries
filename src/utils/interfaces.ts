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

export interface ICountries {
  flags: IFlags;
  name: IName;
  capital: [];
  region: 'Africa' | 'Asia' | 'Antarctic' | 'Europe' | 'Oceania' | 'Americas';
  population: number;
}
