function namazTimingData() {
    let cityName = document.getElementById("cityName").value;
    let namazTimingResult = document.getElementById("namazTimingResult");

    fetch(`https://api.aladhan.com/v1/timingsByCity?city=${cityName}&country=pakistan&method=1`).then(function (res) {
        return res.json()
    }).then(function (response) {
        namazTimingResult.innerHTML = `
            <div id="maincontent-left">
                <div id="maincontent-left-top">
                    <div id="maincontent-left-top-left">
                        <img src="images/namaz-icon.png" alt="image">
                        <h1>PRAYER <br> TIMES</h1>
                    </div>
                    <div id="maincontent-left-top-right">
                        <p><span>CITY NAME: ${cityName}</span> <br> Date: ${response.data.date.readable}</p>
                    </div>
                </div>
                <div id="maincontent-left-bottom">
                    <div id="Fair" class="namazTiming">
                        <img src="images/Fajr-icon.png" alt="image">
                        <h1>FAJR</h1>
                        <h2>${response.data.timings.Fajr}<sup>AM</sup></h2>
                    </div>
                    <div id="Dhuhr" class="namazTiming">
                        <img src="images/Dhuhr-icon.png" alt="image">
                        <h1>DHUHR</h1>
                        <h2>${response.data.timings.Dhuhr}<sup>PM</sup></h2>
                    </div>
                    <div id="Asr" class="namazTiming">
                        <img src="images/Asr-icon.png" alt="image">
                        <h1>ASR</h1>
                        <h2>${response.data.timings.Asr}<sup>PM</sup></h2>
                    </div>
                    <div id="Maghrib" class="namazTiming">
                        <img src="images/Maghrib-icon.png" alt="image">
                        <h1>MAGHRIB</h1>
                        <h2>${response.data.timings.Maghrib}<sup>PM</sup></h2>
                    </div>
                    <div id="Isha" class="namazTiming">
                        <img src="images/Isha-icon.png" alt="image">
                        <h1>ISHA</h1>
                        <h2>${response.data.timings.Isha}<sup>PM</sup></h2>
                    </div>
                </div>
            </div>
            <div id="maincontent-right">
                <img src="images/namaz-image.png" alt="image">
            </div>`
    }).catch((error) => {
        console.log("Err", error)
    })

}
