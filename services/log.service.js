import chalk from 'chalk';
import dedent from 'dedent-js';


const printError = (error) => {
    console.log(chalk.bgRed('Error'), error)
};

const printSuccess = (msg) => {
    console.log(chalk.bgGreen('Success'), msg)
};

const printHelp = () => {
    console.log(dedent`
        ${chalk.bgCyan('HELP')}
        -s [CITY] for save city
        -h for help
        -t [API_KEY] for set api key
        `);
}

const printWeather = (response, icon) => {
    console.log(dedent`
        ${chalk.blue('WEATHER')} City weather ${response.name}:
        ${icon} ${response.weather[0].description} 
        Temperature: ${response.main.temp}°C (feels like ${response.main.feels_like}°C)
        Humidity: ${response.main.humidity}%
        Wind speed: ${response.wind.speed}m/s
    `);
}

export {
    printError,
    printSuccess,
    printHelp,
    printWeather
    };