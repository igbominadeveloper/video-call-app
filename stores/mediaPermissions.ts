import { Control } from '~/enums';

export default function mediaPermissions() {
  return useLocalStorage(
    'permissions',
    useState(() => new Map<Control, boolean>())
  );
}
