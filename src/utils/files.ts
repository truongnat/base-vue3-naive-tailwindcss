export function imgToCanvas(img: HTMLImageElement) {
  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;

  const ctx = canvas.getContext('2d');
  ctx?.drawImage(img, 0, 0);
  return canvas;
}

export function preloadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });
}

export function preloadVideo(url: string): Promise<HTMLVideoElement> {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    video.volume = 0;
    video.onloadedmetadata = () => resolve(video);
    video.onerror = reject;
    video.src = url;
  });
}

export const pause = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(true), ms);
  });

export async function createPosterForVideo(
  url: string
): Promise<string | undefined> {
  const video = await preloadVideo(url);

  return Promise.race([
    pause(2000) as Promise<undefined>,
    new Promise<string | undefined>((resolve, reject) => {
      video.onseeked = () => {
        if (!video.videoWidth || !video.videoHeight) {
          resolve(undefined);
        }

        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d')!;
        ctx.drawImage(video, 0, 0);
        resolve(canvas.toDataURL('image/jpeg'));
      };
      video.onerror = reject;
      video.currentTime = Math.min(video.duration, 1);
    }),
  ]);
}
