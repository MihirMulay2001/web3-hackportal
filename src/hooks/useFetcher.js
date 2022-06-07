import React, {useState, useEffect} from 'react'
import {getData} from '../api/apicall'

export default function useFetcher(url, type, setdata) {
    const [loading, setLoading] = useState(false)
    const [data,setData] = useState({});

    useEffect(()=>{
        const foo = async () => {
            setLoading(true)
            const _data = await getData(url, type, setdata)
            setData(_data)
            setLoading(false)
        }
        foo();
    },[])
  return {loading, data}
}
