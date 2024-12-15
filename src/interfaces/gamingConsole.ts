import  BaseProduct from './baseProduct';

export interface GamingConsole extends BaseProduct {
  general: GamingConsoleGeneral;
  appearance: GamingConsoleAppearance;
  processor: GamingConsoleProcessor;
  graphics: GamingConsoleGraphics;
  memory: GamingConsoleMemory;
  features: GamingConsoleFeatures;
  connectivity: GamingConsoleConnectivity;
  additional_info: AdditionalInfo;
  dimensions_and_weight: DimensionsAndWeight;
}

export interface GamingConsoleGeneral {
  type: string;
  model: string;
  release_year: number;
}

export interface GamingConsoleAppearance {
  color?: string;
  material?: string;
}

export interface GamingConsoleProcessor {
  model?: string;
  cores?: number;
  frequency?: string;
}

export interface GamingConsoleGraphics {
  model?: string;
  frequency?: string;
  ray_tracing?: boolean;
}

export interface GamingConsoleMemory {
  RAM?: string;
  storage?: string;
}

export interface GamingConsoleFeatures {
  _4K_gaming?: boolean;
  HDR?: boolean;
  VR_support?: boolean;
  backward_compatibility?: string;
}

export interface GamingConsoleConnectivity {
  HDMI?: string;
  USB?: string;
  bluetooth?: string;
  wifi?: string;
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