import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

/**
 * Returns a human-readable string indicating the time elapsed since the given
 * Date, timestamp, or string.
 *
 * @example
 * getTimeAgoString(new Date()) // 1 second ago
 * getTimeAgoString(new Date(Date.now() - 1000 * 60 * 60 * 24)) // 1 day ago
 *
 * @param createdAt The date, timestamp, or string to format
 * @returns A human-readable string indicating the time elapsed since the given
 *          date or timestamp
 */
export function getTimeAgoString(createdAt: string | number | Date): string {
  return dayjs(createdAt).fromNow();
}
