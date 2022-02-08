export function currentUrlWithPortNumber(port: number) {
  const fullAddressArray = window.location.href.split('://');
  const fullAddressName = window.location.href.split('://')[1].split('.');
  const addressName = `${fullAddressName[0]}-${port}`;
  fullAddressName[0] = addressName;
  return `${fullAddressArray[0]}://${fullAddressName.join('.')}`;
}
