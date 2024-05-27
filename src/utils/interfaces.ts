interface IFlags {
  png: string;
  svg: string;
  alt: string;
}

export interface IRegion {
  region: 'Africa' | 'Asia' | 'Antarctic' | 'Europe' | 'Oceania' | 'Americas' | 'All';
}

interface IName {
  common: string;
  official: string;
}

export interface ICountry {
  flags: IFlags;
  name: IName;
  nativeName: string;
  capital: string;
  region: IRegion['region'];
  subregion: string;
  population: number;
  borders: string[];
  currency: string;
  languages: string[];
  tld: string[];
}
