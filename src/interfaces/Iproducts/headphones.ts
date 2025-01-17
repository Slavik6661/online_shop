import  BaseProduct  from './baseProduct';

export interface Headphones extends BaseProduct {
  general: HeadphonesGeneral;
  appearance: HeadphonesAppearance;
  audio?: HeadphonesAudio;
  features: HeadphonesFeatures;
  battery: HeadphonesBattery;
  connectivity: HeadphonesConnectivity;
  additional_info: AdditionalInfo;
  dimensions_and_weight: DimensionsAndWeight;
}

export interface HeadphonesGeneral {
  type: string;
  model: string;
  release_year: number;
}

export interface HeadphonesAppearance {
  color?: string;
  material?: string;
}

export interface HeadphonesAudio {
  driver_size?: string;
  frequency_response?: string;
  impedance?: string;
  sensitivity?: string;
}

export interface HeadphonesFeatures {
  noise_cancelling?: boolean;
  voice_assistant?: string;
  multipoint_connection?: boolean;
  quick_attention_mode?: boolean;
}

export interface HeadphonesBattery {
  life?: string;
  quick_charge?: string;
}

export interface HeadphonesConnectivity {
  bluetooth?: string;
  codecs?: string;
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