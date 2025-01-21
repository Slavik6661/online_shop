import  BaseProduct from './baseProduct';

export interface Tablet extends BaseProduct {
  general: TabletGeneral;
  appearance: TabletAppearance;
  display: TabletDisplay;
  processor: TabletProcessor;
  memory: TabletMemory;
  cameras: TabletCameras;
  audio?: TabletAudio;
  connectivity: TabletConnectivity;
  battery: TabletBattery;
  additional_info: AdditionalInfo;
  dimensions_and_weight: DimensionsAndWeight;
}

export interface TabletGeneral {
  type: string;
  model: string;
  release_year: number;
}

export interface TabletAppearance {
  color?: string;
  material?: string;
}

export interface TabletDisplay {
  type?: string;
  size?: string;
  resolution: string;
  refresh_rate?: string;
  brightness?: string;
  technology?: string;
}

export interface TabletProcessor {
  model?: string;
  cores?: number;
}

export interface TabletMemory {
  RAM?: string;
  storage?: string;
}

export interface TabletCameras {
  rear?: string;
  front?: string;
}

export interface TabletAudio {
  speakers?: string;
  microphones?: number;
}

export interface TabletConnectivity {
  wifi?: string;
  bluetooth?: string;
  cellular?: string;
}

export interface TabletBattery {
  capacity?: string;
  life?: string;
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