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
  nativeName: any;
}

export interface ICountry {
  flags: IFlags;
  name: IName;
  capital: string[];
  region: IRegion['region'];
  population: number;
}

export interface IDetailCountry {
  name: IName;
  flag: string;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };

  capital: string;
  population: number;
  region: string;
  subregion: string;
  tld: string[];
  borders: string[];
  currencies: any;
  languages: any;
}
