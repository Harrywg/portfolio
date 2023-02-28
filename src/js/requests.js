
//For wakatime json
function alterDateFormat(date) {
    let withoutDay = date.substring(4, date.length);
    let withoutYear = withoutDay.substring(0, (withoutDay.length - 4))
    return withoutYear;
}
$.ajax({
    type: 'GET',
    url: 'https://wakatime.com/share/@f84fe8f0-b5a8-4518-86b9-369b455d7800/700437ab-859f-49c4-8a6c-8cb5857d3bdb.json',
    dataType: 'jsonp',
    success: function (response) {
        let daysArr = response.data;
        // console.log(daysArr)
        let startDate = alterDateFormat(daysArr[0].range.text);
        let endDate = alterDateFormat(daysArr[daysArr.length - 1].range.text)
        let totalHours = 0;
        let totalMinutes = 0;
        daysArr.forEach((day) => {
            totalHours += day.grand_total.hours;
            totalMinutes += day.grand_total.minutes;
        })

        totalHours = Math.round(totalHours + (totalMinutes / 60));

        let hours = document.createElement('p');
        hours.id = 'wakatime-hours'
        hours.textContent = `${totalHours} hours`

        let time = document.createElement('p');
        time.id = 'wakatime-date';
        time.textContent = `${startDate} - ${endDate}`;

        document.getElementById('wakatime').appendChild(time)
        document.getElementById('wakatime').appendChild(hours)
    },
});
