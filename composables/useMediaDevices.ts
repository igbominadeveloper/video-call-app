import useMediaPermissions from '~/stores/mediaPermissions';

export default function useMediaDevices() {
  const devices = useMediaPermissions();
  const permissions = computed(() => Object.fromEntries(devices.value));
  const isStreaming = ref(false);

  const handleControl = (control: Control) => {
    const isSet = devices.value.has(control);
    if (isSet) {
      devices.value.delete(control);
      return;
    }

    devices.value.set(control, true);
  };

  const requestPermission = () => {
    if (process.client) {
      // we want to see the devices that users have given permission to already
      // when they change some things, we want to update it in the state of devices to ask permission for
      // then when they click on 'start recording', we then use the devices they have granted permission to
      // then we listen to the devices,
      // if they reject any of the ones they checked
      // we will show the waiting page with the missing device as an error
      // if they grant permission, then we will build something that uses it

      const atLeastOneTrue = Object.values(permissions.value).some(
        (value) => value === true
      );

      if (!atLeastOneTrue) {
        throw createError('You must select at least one device');
      }

      navigator.mediaDevices.getUserMedia(permissions.value).then((stream) => {
        const videoTracks = stream.getVideoTracks();
        const video = document.querySelector(
          'video#video-stream'
        ) as HTMLVideoElement;
        video.srcObject = stream;
        video.autoplay = true;

        isStreaming.value = true;
      });
    }
  };

  return {
    devices,
    handleControl,
    permissions,
    requestPermission,
    isStreaming,
  };
}
