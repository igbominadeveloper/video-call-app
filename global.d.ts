import { Control, DeviceStatus } from './enums';
declare global {
  interface Recording {
    duration: number;
    title: string;
    subTitle: string;
    videoUrl: string;
    thumbnail: string;
    views: number;
    size: number;
    lastModified: string;
  }

  type DeviceState = Map<Control, DeviceStatus>;
}

export {};
