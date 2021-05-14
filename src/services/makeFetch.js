export const makeFetch = async ({ url, method, body  }) => {
    let res;
    if(method === 'GET' || method === 'DELETE'){
        res = await fetch(`${url}`);
    } else {
        res = await fetch(`${url}`, {
            method,
            body,
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
    const json = await res.json;
    return JSON.stringify(json, null, 2);
}        