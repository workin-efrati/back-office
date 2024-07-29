export function timeFormat(mongoDBDate) {
    const currentDate = new Date(mongoDBDate);
    return `${currentDate}`;
}
