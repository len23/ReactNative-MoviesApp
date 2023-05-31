export type IProvider = {
  logo_path: string;
  provider_id: number;
  provider_name: string;
  display_priority: number;
};

export type Transaction = {
  [transactionType: string]: Array<IProvider>;
};

export type ICountryProvider = {
  image: string;
  results: { [country: string]: Transaction };
};
