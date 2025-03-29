import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

interface DateProps {
  date?: string;
  classname?: string;
}

export default function Date({ date = "", classname = "" }: DateProps) {
    const formattedDate = dayjs(date)
        .utc()
        .tz('Asia/Tokyo')
        .format("YYYY年MM月DD日");
    return <time className={classname} dateTime={formattedDate} suppressHydrationWarning>{formattedDate}</time>
} 