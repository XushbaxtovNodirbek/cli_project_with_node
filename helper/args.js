const getArgs = (args) =>{
    const res = {}
    
    const [executer,file,...rest] = args
    rest.forEach((value,index,array)=>{
        if(value.startsWith('-')){ // -h -s -t
            if(index == array.length - 1){ // last
                res[value.substring(1)] = true
            }else if(!array[index+1].startsWith('-')){ // -s city -t token
                res[value.substring(1)] = array[index+1]
            }else{ // -s -t
                res[value.substring(1)] = true
            }
        }
    })
    return res
}

export default getArgs