import  BaseProduct  from './baseProduct';

export interface Smartwatch extends BaseProduct {
  general: SmartwatchGeneral;
  appearance: SmartwatchAppearance;
  display: SmartwatchDisplay;
  features: SmartwatchFeatures;
  battery: SmartwatchBattery;
  connectivity: SmartwatchConnectivity;
  compatibility: SmartwatchCompatibility;
  additional_info: AdditionalInfo;
  dimensions_and_weight: DimensionsAndWeight;
}

export interface SmartwatchGeneral {
  type: string;
  model: string;
  release_year: number;
}

export interface SmartwatchAppearance {
  case_material?: string;
  strap_material?: string;
  color?: string;
}

export interface SmartwatchDisplay {
  type?: string;
  size?: string;
  resolution?: string;
  protection?: string;
}

export interface SmartwatchFeatures {
  health_monitoring?: string;
  fitness_tracking?: string;
  water_resistance?: string;
  GPS?: boolean;
  NFC?: boolean;
  voice_assistant?: string;
}

export interface SmartwatchBattery {
  type?: string;
  capacity?: string;
  battery_life?: string;
}

export interface SmartwatchConnectivity {
  bluetooth?: string;
  wifi?: string;
  LTE?: boolean;
}

export interface SmartwatchCompatibility {
  OS?: string;
}

interface AdditionalInfo {
  biometric_security?: string;
  headphones_included?: boolean;
  charger_included?: boolean;
  package_contents: string;
  LED_indicator?: boolean;
  additional_features?: string;
  delivery_features?: string;
  TPM_support?: boolean;
}

interface DimensionsAndWeight {
  width: string;
  height?: string;
  thickness: string;
  weight: string;
  depth?: string;
}