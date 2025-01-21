import  BaseProduct  from './baseProduct';

export interface TV extends BaseProduct {
  general: TVGeneral;
  display: TVDisplay;
  features: TVFeatures;
  connectivity: TVConnectivity;
  audio?: TVAudio;
  additional_info: AdditionalInfo;
  dimensions_and_weight: DimensionsAndWeight;
}

export interface TVGeneral {
  type: string;
  model: string;
  release_year: number;
}

export interface TVDisplay {
  type?: string;
  size?: string;
  resolution: string;
  refresh_rate?: string;
  HDR?: string;
  brightness?: string;
}

export interface TVFeatures {
  smart_TV?: boolean;
  voice_assistant?: string;
  operating_system?: string;
  apps?: string;
}

export interface TVConnectivity {
  HDMI?: number;
  USB?: number;
  bluetooth?: string;
  wifi?: string;
}

export interface TVAudio {
  speakers?: string;
  power?: string;
  technologies?: string;
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