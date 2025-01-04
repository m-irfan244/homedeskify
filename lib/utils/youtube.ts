export function getYouTubeThumbnail(videoId: string) {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

export function getYouTubeEmbedUrl(videoId: string) {
  return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
}

export function getVideoDuration(duration: string) {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

  const hours = (match?.[1] || "").replace("H", "");
  const minutes = (match?.[2] || "").replace("M", "");
  const seconds = (match?.[3] || "").replace("S", "");

  let result = "";

  if (hours) result += `${hours}:`;
  if (minutes) result += `${minutes.padStart(2, "0")}:`;
  else result += "00:";
  if (seconds) result += seconds.padStart(2, "0");
  else result += "00";

  return result;
}
