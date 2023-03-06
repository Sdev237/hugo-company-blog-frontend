import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Api(url) {
    const [data, setData] = useState([])
    const [isLoding, setIsLoding] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
            .then((response)=>{
                if(!response.ok){
                    throw Error("Sorry, an error occurred while loading...")
                }
                return response.json()
            })
            .then((data)=>{
                setData(data.posts)
                console.log(data);
                setIsLoding(false)
            })

            .catch(error => {
                if(error.name === 'AbortError'){
                    console.log('ferch is stop');
                }else{
                    setError(error.message);
                    setIsLoding(false);
                }
            })
        })

    }, [url])
    
    return{data, isLoding, error}
}
