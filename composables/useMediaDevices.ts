import useMediaPermissions from '~/stores/mediaPermissions';
import useDeviceStates from '~/stores/deviceStates';
import { Control, DeviceStatus } from '~/enums';

export default function useMediaDevices() {
  const isStreaming = ref(false);
  const currentStream = ref<MediaStream | null>(null);

  /*
  - no video permission
  - no microphone permission
  - no screen share permission

  - permission on 
    - video off
    - microphone off
    - screenshare off
  */
  const videoIsOn = computed(
    () =>
      (currentStream.value?.getVideoTracks() &&
        currentStream.value.getVideoTracks().length > 0) ??
      false
  );

  const permissions = useMediaPermissions();
  const devices = computed(() => Object.fromEntries(permissions.value));

  const handleControl = (control: Control) => {
    const isSet = permissions.value.has(control);
    if (isSet) {
      permissions.value.delete(control);
      return;
    }
    permissions.value.set(control, true);
  };

  const stopStream = () => {
    currentStream.value?.getVideoTracks()[0].stop();
    currentStream.value?.getAudioTracks()[0].stop();
  };

  const shareScreen = () => {
    navigator.mediaDevices
      .getDisplayMedia({ video: true })
      .then(function (stream) {
        console.log({ stream });

        // Permission granted, handle stream
        // Update radio button state for screen permission granted
      })
      .catch(function (err) {
        // Permission denied or error occurred, handle gracefully
      });
  };

  const currentAudioTrack = ref<MediaStreamTrack | null>(null);
  const currentVideoTrack = ref<MediaStreamTrack | null>(null);

  const requestPermissionForAudioAndVideo = () => {
    if (process.client) {
      // we want to see the devices that users have given permission to already
      // when they change some things, we want to update it in the state of devices to ask permission for
      // then when they click on 'start recording', we then use the devices they have granted permission to
      // then we listen to the devices,
      // if they reject any of the ones they checked
      // we will show the waiting page with the missing device as an error
      // if they grant permission, then we will build something that uses it

      const atLeastOneTrue = Object.values(devices.value).some(
        (value) => value === true
      );

      if (!atLeastOneTrue) {
        throw createError('You must select at least one device');
      }

      navigator.mediaDevices.getUserMedia(devices.value).then((stream) => {
        const [videoTrack, audioTrack] = stream.getTracks();
        currentAudioTrack.value = audioTrack;
        currentVideoTrack.value = videoTrack;
        addEventListeners();

        const video = document.querySelector(
          'video#video-stream'
        ) as HTMLVideoElement;

        currentStream.value = stream;
        video.srcObject = stream;
        video.autoplay = true;
        isStreaming.value = true;
      });
    }
  };

  const addEventListeners = () => {
    if (currentAudioTrack.value) {
      currentAudioTrack.value.addEventListener('ended', () => {
        deviceStatesMap.value.set(Control.Audio, DeviceStatus.Off);
      });
    }

    if (currentVideoTrack.value) {
      currentVideoTrack.value.addEventListener('ended', () => {
        deviceStatesMap.value.set(Control.Video, DeviceStatus.Off);
      });
    }
  };

  /*
  device states map to provide a storage location for device states
  */
  const deviceStatesMap = ref(useDeviceStates());
  const deviceStates = computed(() =>
    Object.fromEntries(deviceStatesMap.value)
  );

  const toggleDeviceState = (device: Control) => {
    const currentState = deviceStatesMap.value.get(device) ?? DeviceStatus.Off;
    if (currentState === DeviceStatus.Off) {
      deviceStatesMap.value.set(device, DeviceStatus.On);
    } else {
      deviceStatesMap.value.set(device, DeviceStatus.Off);
    }
  };

  return {
    isStreaming,
    videoIsOn,
    devices,
    permissions,
    deviceStates,

    toggleDeviceState,
    handleControl,
    requestPermissionForAudioAndVideo,
    shareScreen,
    stopStream,
  };
}
