const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");

const getInfo = async (event) => {
    event.preventDefault();
    const cityVal = cityName.value;

    if (cityVal === "") {
        city_name.innerText = "Please enter a city name before searching.";
    } else {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=28751701724198f47a50a7d9a2ee2684`;
            const response = await fetch(url);
            const data = await response.json();

            city_name.innerText = `${data.name}, ${data.sys.country}`;
            temp_real_val.innerText = data.main.temp;

            const tempMood = data.weather[0].main;

            switch (tempMood) {
                case "Clear":
                    temp_status.innerHTML = `<i class="fas fa-sun" style="color: #eccc68;"></i>`;
                    break;
                case "Clouds":
                    temp_status.innerHTML = `<i class="fas fa-cloud" style="color: #f1f2f6;"></i>`;
                    break;
                case "Rain":
                    temp_status.innerHTML = `<i class="fas fa-rain" style="color: #a4b0be;"></i>`;
                    break;
                default:
                    temp_status.innerHTML = `<i class="fas fa-cloud" style="color: #f1f2f6;"></i>`;
            }
        } catch (error) {
            city_name.innerText = "Please enter a city name Properly";
        }
    }
};

submitBtn.addEventListener("click", getInfo);