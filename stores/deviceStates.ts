import { Control, DeviceStatus } from '~/enums';

export default function mediaPermissions() {
  return useLocalStorage(
    'device-states',
    useState<Map<Control, DeviceStatus>>(
      () =>
        new Map([
          [Control.Audio, DeviceStatus.Off],
          [Control.Video, DeviceStatus.Off],
          [Control.Screen, DeviceStatus.On],
        ])
    )
  );
}
