const formatFileSize = (sizeInBytes: number) => {
  //rough size calculation
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB'];

  for (const unit of units) {
    if (sizeInBytes < 1024) {
      return `${sizeInBytes.toFixed(2)} ${unit}`;
    }
    sizeInBytes /= 1024;
  }

  return `${sizeInBytes.toFixed(2)} ${units[units.length - 1]}`;
};
export default formatFileSize;
