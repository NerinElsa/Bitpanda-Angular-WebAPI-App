  export class Attributes3 {
      asset_id: string;
      allocation: string;
      allocation_percentage: string;
  }

  export class IndexAsset {
      attributes: Attributes3;
  }

  export class IndexAttributes {
      symbol: string;
      name: string;
      sort: number;
      asset_type_name: string;
      asset_group_name: string;
      buy_active: boolean;
      sell_active: boolean;
      withdraw_active: boolean;
      deposit_active: boolean;
      transfer_active: boolean;
      available: boolean;
      maintenance_enabled: boolean;
      min_buy_eur: string;
      min_sell_eur: string;
      min_withdraw_eur: string;
      default_sell_amount: string;
      precision_for_fiat_price: number;
      precision_for_coins: number;
      precision_for_tx: number;
      precision_for_internal: number;
      avg_price: string;
      color: string;
      change_24h: string;
      change_24h_amount: string;
      change_1w: string;
      change_1w_amount: string;
      change_1m: string;
      change_1m_amount: string;
      change_1y: string;
      change_1y_amount: string;
      logo: string;
      logo_dark: string;
      support_destination_tag: boolean;
      allowed_unverified: boolean;
      allowed_documented: boolean;
      allowed_verified: boolean;
      index_assets: IndexAsset[];
      index_provider: string;
      index_original_fiat_symbol: string;
      index_only: boolean;
      info: string;
      unavailable_reason: string;
      maintenance_reason: string;
      wallet_info: string;
      extra_info: string;
      investment_info: string;
      info_integration: string;
      info_deu: string;
      info_eng: string;
      info_fra: string;
      info_ita: string;
      info_spa: string;
      info_tur: string;
      unavailable_reason_deu: string;
      unavailable_reason_eng: string;
      unavailable_reason_fra: string;
      unavailable_reason_ita: string;
      unavailable_reason_spa: string;
      unavailable_reason_tur: string;
      maintenance_reason_deu: string;
      maintenance_reason_eng: string;
      maintenance_reason_fra: string;
      maintenance_reason_ita: string;
      maintenance_reason_spa: string;
      maintenance_reason_tur: string;
      wallet_info_deu: string;
      wallet_info_eng: string;
      wallet_info_fra: string;
      wallet_info_ita: string;
      wallet_info_spa: string;
      wallet_info_tur: string;
      extra_info_deu: string;
      extra_info_eng: string;
      extra_info_fra: string;
      extra_info_ita: string;
      extra_info_spa: string;
      extra_info_tur: string;
      investment_info_deu: string;
      investment_info_eng: string;
      investment_info_fra: string;
      investment_info_ita: string;
      investment_info_spa: string;
      investment_info_tur: string;
      info_integration_deu: string;
      info_integration_eng: string;
      info_integration_fra: string;
      info_integration_ita: string;
      info_integration_spa: string;
      info_integration_tur: string;
  }

  export class Index {
      type: string;
      attributes: IndexAttributes;
      id: string;
  }

  export class Attributes {
      indexes: Index[];
  }

  export class Data {
      type: string;
      attributes: Attributes;
  }

  export class RootObject {
      data: Data;
  }


