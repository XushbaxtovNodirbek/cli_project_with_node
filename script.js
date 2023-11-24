import getArgs from './helper/args.js';
import { printError, printSuccess, printHelp, printWeather  } from './services/log.service.js';
import { saveKeyValue,TOKEN_DICTIONARY , getKeyValue} from './services/storage.service.js';
import { getWeather, getIcons } from './services/api.service.js';

const saveToken = async (token) => {
    try{
        if(!token.length){
            printError('Token is required');
            return;
        }
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess('Token saved');
    }catch(error){
        printError(error.message);
    }
}
const saveCity = async (city) => {
    try{
        if(!city.length){
            printError('City is required');
            return;
        }
        await saveKeyValue(TOKEN_DICTIONARY.city, city);
        printSuccess('City saved');
    }catch(error){
        printError(error.message);
    }
}

const startCLI = () => {
    const args = getArgs(process.argv)

    // console.log(args); 

    const getForcast = async () => {
        try{
        const city = await getKeyValue(TOKEN_DICTIONARY.city)
        const response = await getWeather(process.env.CITY ?? city)
        printWeather(response,getIcons(response.weather[0].icon))
        }catch(error){
            if(error?.response?.status === 404){
                 printError('City not found')
            }else if(error?.response?.status === 401){
                 printError('Token is invalid')
            }else{
                 printError(error.message)
            }
        }
    }

    if(args.h){
        // help
        return printHelp();
    }
    if(args.s){
        // save city
        return saveCity(args.s)
    }
    if(args.t){
        // save token
        return saveToken(args.t)  
    }

    getForcast()
    // result
    // getWeather(process.env.CITY ?? 'London').then(data => {
    //     console.log(data);
    // })
}

startCLI()