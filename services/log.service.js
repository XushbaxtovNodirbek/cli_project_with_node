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

export {
    printError,
    printSuccess,
    printHelp
    };