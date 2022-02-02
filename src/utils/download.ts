export function _download(url: string, filename: string) {
  const link = document.createElement('a');
  document.body.appendChild(link);
  link.href = url;
  link.target = '_blank';
  link.className = 'visually-hidden';
  link.setAttribute('download', filename);
  link.click();
  document.body.removeChild(link);
}
