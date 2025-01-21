import  BaseProduct  from "../baseProduct";

export interface Smartphone extends BaseProduct {
  general: SmartphoneGeneral;
  appearance: SmartphoneAppearance;
  mobile_connectivity?: MobileConnectivity;
  display: SmartphoneDisplay;
  construction_and_protection?: ConstructionAndProtection;
  OS_and_processor?: OSAndProcessor;
  memory: Memory; 
  main_camera?: MainCamera;
  front_camera?: FrontCamera;
  audio?: Audio;
  communications?: Communications;
  ports_and_sensors: PortsAndSensors;
  power: Power;
  additional_info: AdditionalInfo;
  dimensions_and_weight: DimensionsAndWeight;
}

interface SmartphoneGeneral {
    type: string;
    model: string;
    release_year: number;
  }

  interface SmartphoneAppearance {
    back_color?: string;
    edge_color?: string;
    manufacturer_color?: string;
  }

  interface MobileConnectivity {
    "2G_bands": string;
    "3G_bands": string;
    "4G_support": boolean;
    "4G_bands": string;
    "4G_LTE_Advanced": boolean;
    VoLTE_support: boolean;
    "5G_support": boolean;
    "5G_bands": string;
    SIM_format: string;
    physical_SIM_count: number;
    eSIM_count: number;
  }

  
  interface SmartphoneDisplay {
    diagonal?: string;
    resolution: string;
    technology?: string;
    matrix_type?: string;
    brightness?: string;
    refresh_rate?: string;
    pixel_density?: string;
    aspect_ratio?: string;
  }

  
interface ConstructionAndProtection {
    body_type: string;
    material: string;
    protection: string;
    screen_protection: string;
    IP_rating: string;
    notch_type: string;
  }

  interface OSAndProcessor {
    OS: string;
    OS_version: string;
    Google_Mobile_Services: boolean;
    processor_model: string;
    core_count: number;
    max_frequency?: string;
    process_technology: string;
    GPU: string;
  }

  
interface Memory {
    RAM: string;
    virtual_RAM_expansion?: string;
    internal_storage?: string;
    memory_card_slot?: boolean;
  }

  interface MainCamera {
    camera_count: number;
    megapixels: string;
    aperture: string;
    autofocus: boolean;
    flash_type: string;
    field_of_view: string;
    optical_stabilization: boolean;
    digital_zoom: string;
    optical_zoom: string;
    features: string;
    photo_modes: string;
    video_recording: VideoRecording;
  }

  interface VideoRecording {
    formats: string;
    resolutions: string;
    slow_motion: boolean;
    zoom: string;
    features: string;
  }

  interface FrontCamera {
    dual_camera: boolean;
    megapixels: string;
    aperture: number;
    autofocus: boolean;
    flash: boolean;
    video_resolutions: string;
    features: string;
    modes: string;
  }  

  interface Audio {
    stereo_speakers: boolean;
    audio_formats: string;
  }

  interface Communications {
    bluetooth_version: number;
    wifi_standard: string;
    NFC: boolean;
    navigation_systems: string;
    IR_port: boolean;
    other_technologies: string;
  }

  interface PortsAndSensors {
    charging_interface: string;
    headphone_jack: string;
    OTG_support: boolean;
    sensors: string;
  }

  interface Power {
    battery_type: string;
    battery_capacity: string;
    charger_voltage?: string;
    fast_charging: boolean;
    fast_charging_standards: string;
    wireless_charging: boolean;
    wireless_reverse_charging: boolean;
    music_playback_time: string;
    video_playback_time: string;
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

