export class FiatAttributes {
  default_sell_amount: string;
  has_wallets: boolean;
  logo: string;
  logo_color: string;
  logo_dark: string;
  logo_white: string;
  name: string;
  numeric_character_reference: string;
  min_withdraw_euro: string;
  precision: number;
  symbol: string;
  symbol_character: string;
  to_eur_rate: string;
  wallet_min_withdrawal: string;
  name_deu: string;
  name_eng: string;
  name_fra: string;
  name_ita: string;
  name_spa: string;
  name_tur: string;
}

export class Fiat {
  type: string;
  attributes: FiatAttributes;
  id: string;
}

export class Attributes {
  commodities: Fiat[];
}

export class Data {
  type: string;
  attributes: Attributes;
}

export class RootObject {
  data: Data;
}
