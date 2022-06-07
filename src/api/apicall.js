export async function getData( URL, type="GET", body={}){
    const _data = await fetch(URL,{
        method: type,
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(body)
    });
    const finalData = await _data.json();
    return finalData
}