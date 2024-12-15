import  BaseProduct  from './baseProduct';

export interface Speaker extends BaseProduct {
  general: SpeakerGeneral;
  appearance: SpeakerAppearance;
  audio?: SpeakerAudio;
  features: SpeakerFeatures;
  additional_info: AdditionalInfo;
  dimensions_and_weight: DimensionsAndWeight;
}

export interface SpeakerGeneral {
  type: string;
  model: string;
  release_year: number;
}

export interface SpeakerAppearance {
  color?: string;
  material?: string;
}

export interface SpeakerAudio {
  driver_size?: string;
  frequency_response?: string;
  power?: string;
  battery_life?: string;
}

export interface SpeakerFeatures {
  waterproof?: string;
  bluetooth?: string;
  partyboost?: boolean;
  powerbank?: boolean;
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