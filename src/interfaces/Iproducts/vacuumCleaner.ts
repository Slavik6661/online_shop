import  BaseProduct  from './baseProduct';

export interface VacuumCleaner extends BaseProduct {
  general: VacuumCleanerGeneral;
  appearance: VacuumCleanerAppearance;
  features: VacuumCleanerFeatures;
  battery: VacuumCleanerBattery;
  additional_info: AdditionalInfo;
  dimensions_and_weight: DimensionsAndWeight;
}

export interface VacuumCleanerGeneral {
  type: string;
  model: string;
  release_year: number;
}

export interface VacuumCleanerAppearance {
  color?: string;
  material?: string;
}

export interface VacuumCleanerFeatures {
  cordless?: boolean;
  suction_power?: string;
  dustbin_capacity?: string;
  HEPA_filter?: boolean;
  laser_detection?: boolean;
}

export interface VacuumCleanerBattery {
  type?: string;
  capacity?: string;
  runtime?: string;
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