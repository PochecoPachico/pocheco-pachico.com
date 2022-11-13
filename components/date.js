import dayjs from 'dayjs';
dayjs.extend(require('dayjs/plugin/timezone'));
dayjs.extend(require('dayjs/plugin/utc'));

export default function Date({ date = "", classname = "" }) {
    let formattedDate = dayjs.utc(date).tz('Asia/Tokyo').format("YYYY年MM月DD日")
    return <time className={classname} dateTime={formattedDate} suppressHydrationWarning>{formattedDate}</time>
}