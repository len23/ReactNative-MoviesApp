export type DropdownCountryProps = {
  selectedCountry: string | number;
  onChangeCountry: (country: string | number) => void;
  countryList: string[];
};
