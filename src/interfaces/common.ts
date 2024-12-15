export interface ConstructionAndProtection {
    body_type: string;
    material: string;
    protection: string;
    screen_protection: string;
    IP_rating: string;
    notch_type: string;
  }
  
  export interface OSAndProcessor {
    OS: string;
    OS_version: string;
    Google_Mobile_Services: boolean;
    processor_model: string;
    core_count: number;
    max_frequency?: string;
    process_technology: string;
    GPU: string;
  }
  
  export interface Memory {
    RAM: string;
    virtual_RAM_expansion?: string;
    internal_storage?: string;
    memory_card_slot?: boolean;
  }
  
  export interface MainCamera {
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
  
  export interface VideoRecording {
    formats: string;
    resolutions: string;
    slow_motion: boolean;
    zoom: string;
    features: string;
  }
  
  export interface FrontCamera {
    dual_camera: boolean;
    megapixels: string;
    aperture: number;
    autofocus: boolean;
    flash: boolean;
    video_resolutions: string;
    features: string;
    modes: string;
  }
  
  export interface Audio {
    stereo_speakers: boolean;
    audio_formats: string;
  }
  
  export interface Communications {
    bluetooth_version: number;
    wifi_standard: string;
    NFC: boolean;
    navigation_systems: string;
    IR_port: boolean;
    other_technologies: string;
  }
  
  export interface PortsAndSensors {
    charging_interface: string;
    headphone_jack: string;
    OTG_support: boolean;
    sensors: string;
  }
  
  export interface Power {
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
  
  export interface AdditionalInfo {
    biometric_security?: string;
    headphones_included?: boolean;
    charger_included?: boolean;
    package_contents: string;
    LED_indicator?: boolean;
    additional_features?: string;
    delivery_features?: string;
    TPM_support?: boolean;
  }
  
  export interface DimensionsAndWeight {
    width: string;
    height: string;
    thickness: string;
    weight: string;
    depth?: string;
  }
  
  export interface InputDevices {
    keyboard_layout: string;
    numeric_keypad: boolean;
    key_backlight: string;
    touchpad: string;
    fingerprint_scanner: boolean;
    mechanical_keyboard: boolean;
    waterproof_keyboard: boolean;
  }
  
  export interface Processor {
    model: string;
    total_cores?: number;
    performance_cores?: number;
    efficiency_cores?: number;
    max_threads?: number;
    max_frequency?: string;
    efficiency_cores_frequency?: string;
    generation?: string;
  }
  
  export interface Graphics {
    type: string;
    integrated_model: string;
    discrete_model?: boolean;
  }
  
  export interface Storage {
    total_SSD_capacity: string;
    free_slots: boolean;
  }
  
  export interface Webcam {
    resolution: string;
    face_recognition: boolean;
    shutter: boolean;
  }
  
  export interface BuiltInEquipment {
    microphone: boolean;
    memory_card_reader: boolean;
    optical_drive: boolean;
    sensors: string;
  }
  
  export interface Internet {
    wireless_interfaces: string;
    ethernet_port: boolean;
  }
  
  export interface Ports {
    video_ports: string;
    video_port_version: string;
    audio_ports: string;
    usb_type_a_ports: boolean;
    usb_type_c_ports: string;
    thunderbolt: string;
    additional_interfaces: boolean;
  }
  
  export interface Features {
    health_monitoring?: string;
    fitness_tracking?: string;
    water_resistance?: string;
    GPS?: boolean;
    NFC?: boolean;
    voice_assistant?: string;
    smart_TV?: boolean;
    apps?: string;
    noise_cancelling?: boolean;
    multipoint_connection?: boolean;
    quick_attention_mode?: boolean;
    "4K_gaming"?: boolean;
    HDR?: boolean;
    VR_support?: boolean;
    backward_compatibility?: string;
    cordless?: boolean;
    suction_power?: string;
    dustbin_capacity?: string;
    HEPA_filter?: boolean;
    laser_detection?: boolean;
    waterproof?: string;
    partyboost?: boolean;
    powerbank?: boolean;
  }
  
  export interface Battery {
    type: string;
    capacity: string;
    battery_life?: string;
    runtime?: string;
    life?: string;
    quick_charge?: string;
  }
  
  export interface Connectivity {
    HDMI?: string;
    USB?: string;
    bluetooth?: string;
    wifi?: string;
    "5G"?: boolean;
  }
  
  export interface Cameras {
    rear: string;
    front: string;
  }
  
  export interface AudioFeatures {
    driver_size: string;
    frequency_response: string;
    impedance: string;
    sensitivity: string;
  }
  
  export interface AdditionalFeatures {
    package_contents: string;
  }
  