export function formatCount(count: number): string {
  if (count < 0) return ""
  if (count < 10000) {
    return count.toString();
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + "万"
  } else {
    return Math.floor(count / 1e7) / 10 + "亿"
  }
}