import axios from 'axios'
import { getKeyValue , TOKEN_DICTIONARY } from './storage.service.js'

const getIcons = (icon) => {
    switch (icon.slice(0,2)) {
        case '01':
            return '☀️'
        case '02':
            return '🌤️'
        case '03':
            return '☁️'
        case '04':
            return '☁️'
        case '09':
            return '🌧️'
        case '10':
            return '🌦️'
        case '11':
            return '⛈️'
        case '13':
            return '🌨️'
        case '50':
            return '🌫️'
        default:
            return '🌡️'
        }
}

const getWeather = async (city) => {
    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token)
    if(!token){
        throw new Error('Token is required, please run "-t [API_KEY]"') 
    }

    const {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather',{
        params:{
            q:city,
            appid:token,
            units:'metric',
            lang:'en'}
    })

    
    // console.log(data);
    return data
    // const url = new URL('https://api.openweathermap.org/data/2.5/weather')
    // url.searchParams.append('q',city)
    // url.searchParams.append('appid',token)
    // url.searchParams.append('units','metric')
    // url.searchParams.append('lang','en')


    // https.get(url,res => {
    //     let data = ''
    //     res.on('data',chunk => {
    //         data += chunk
    //     })
    //     res.on('end',() => {
    //         console.log(JSON.parse(data))
    //     })
    // })
}

export {getWeather,getIcons}