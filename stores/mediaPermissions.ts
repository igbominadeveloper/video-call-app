export default function mediaPermissions() {
  return useState(() => new Map<Control, boolean>());
}
