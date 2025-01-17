import  BaseProduct  from './baseProduct';

export interface Laptop extends BaseProduct {
  general: LaptopGeneral;
  appearance: LaptopAppearance;
  input_devices?: InputDevices;
  display: LaptopDisplay;
  processor: Processor;
  memory: LaptopMemory;
  graphics?: Graphics;
  storage?: Storage;
  webcam: Webcam;
  built_in_equipment: BuiltInEquipment;
  internet: Internet;
  ports: Ports;
  power: LaptopPower;
  additional_info: AdditionalInfo;
  dimensions_and_weight: DimensionsAndWeight;
}

export interface LaptopGeneral {
  type: string;
  model: string;
  line?: string;
  manufacturer_code?: string;
  release_year: number;
  gaming_laptop?: boolean;
}

export interface LaptopAppearance {
  construction?: string;
  top_cover_color?: string;
  manufacturer_color?: string;
  cover_material?: string;
  body_material?: string;
  lid_opening?: string;
}

interface InputDevices {
  keyboard_layout: string;
  numeric_keypad: boolean;
  key_backlight: string;
  touchpad: string;
  fingerprint_scanner: boolean;
  mechanical_keyboard: boolean;
  waterproof_keyboard: boolean;
}

export interface LaptopDisplay {
  type?: string;
  diagonal?: string;
  resolution: string;
  coating?: string;
  touchscreen?: boolean;
  max_refresh_rate?: string;
  brightness?: string;
  pixel_density?: string;
  HDR?: string;
  additional_display?: boolean;
}

interface Processor {
  model: string;
  total_cores?: number;
  performance_cores?: number;
  efficiency_cores?: number;
  max_threads?: number;
  max_frequency?: string;
  efficiency_cores_frequency?: string;
  generation?: string;
}

export interface LaptopMemory {
  type?: string;
  capacity?: string;
  slots?: string;
  max_capacity?: string;
  free_slots?: number;
}

interface Graphics {
  type: string;
  integrated_model: string;
  discrete_model?: boolean;
}

interface Storage {
  total_SSD_capacity: string;
  free_slots: boolean;
}

interface Webcam {
  resolution: string;
  face_recognition: boolean;
  shutter: boolean;
}

interface BuiltInEquipment {
  microphone: boolean;
  memory_card_reader: boolean;
  optical_drive: boolean;
  sensors: string;
}

interface Internet {
  wireless_interfaces: string;
  ethernet_port: boolean;
}

interface Ports {
  video_ports: string;
  video_port_version: string;
  audio_ports: string;
  usb_type_a_ports: boolean;
  usb_type_c_ports: string;
  thunderbolt: string;
  additional_interfaces: boolean;
}

export interface LaptopPower {
  usb_power_delivery?: boolean;
  battery_type?: string;
  battery_capacity?: string;
  approximate_battery_life?: string;
  adapter_output_power?: string;
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