import getArgs from './helper/args.js';
import { printError, printSuccess, printHelp } from './services/log.service.js';
import { saveKeyValue,TOKEN_DICTIONARY } from './services/storage.service.js';
import { getWeather } from './services/api.service.js';

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

const startCLI = () => {
    const args = getArgs(process.argv)

    // console.log(args); 

    if(args.h){
        // help
        printHelp();
    }
    if(args.s){
        // save city
    }
    if(args.t){
        // save token
        saveToken(args.t)  
    }

    // result
    getWeather('London')
}

startCLI()