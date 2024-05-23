interface IFlags {
  png: string;
  svg: string;
  alt: string;
}

interface ILanguage {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface IRegion {
  region: 'Africa' | 'Asia' | 'Antarctic' | 'Europe' | 'Oceania' | 'Americas' | 'All';
}

interface ICurrency {
  code: string;
  name: string;
  symbol: string;
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
  region: IRegion['region'];
  population: number;
}

export interface IDetailCountry {
  name: string;
  nativeName: string;
  flag: string;
  flags: [
    {
      png: string;
    },
    {
      svg: string;
    },
  ];
  capital: string;
  population: number;
  region: IRegion;
  subregion: string;
  topLevelDomain: string[];
  borders: string[];
  currency: ICurrency;
  languages: ILanguage[];
}
