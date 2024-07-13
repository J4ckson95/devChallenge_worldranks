/// <reference types="vite/client" />
interface Name {
  common: string;
  official: string;
  nativeName: {
    fra: {
      official: string;
      common: string;
    };
  };
}

interface Currency {
  name: string;
  symbol: string;
}

interface IDD {
  root: string;
  suffixes: string[];
}

interface Translation {
  official: string;
  common: string;
}

interface Translations {
  [key: string]: Translation;
}

interface Demonyms {
  eng: {
    f: string;
    m: string;
  };
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

interface Car {
  signs: string[];
  side: string;
}

interface Flags {
  png: string;
  svg: string;
}

interface CapitalInfo {
  latlng: number[];
}

interface PostalCode {
  format: string;
  regex: string;
}

export type Country = {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: {
    [key: string]: Currency;
  };
  idd: IDD;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: {
    [key: string]: string;
  };
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: object; // Assuming this is an object, update as needed
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
};
export interface DataProps {
  data: Country;
}
