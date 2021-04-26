const months = ['Jan', 'Feb' , 'Mar', 'Apr', 'May',
                'Jun', 'Jul', 'Aug', 'Sep', 'Oct',
                'Nov', 'Dec'];
const weekOfDay = ['Sun','Mon', 'Tue' , 'Wed', 'Thu', 'Fri', 'Sat'];

export const getTimeFromTimestamp = (timestamp) => {
    let date = new Date(timestamp * 1000);
    let month = months[date.getMonth()];
    let dow = weekOfDay[date.getDay()];
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    return `${month} ${day}, ${dow} ${hours}:${minutes.substr(-2)}`;
}

export const getTimeOnly = (timestamp) => {
    let date = new Date(timestamp * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    return `${hours}:${minutes.substr(-2)}`;
}

export const tmpinCelsius = (temp) => {
    let Temp = temp - 273.15;
    return Temp.toFixed(2);
}
