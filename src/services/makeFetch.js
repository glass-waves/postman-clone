export const makeFetch = async ({ url, method, body  }) => {
    if(method === 'GET' || method === 'DELETE'){
        const res = await fetch(`${url}`);
    } else {
        const res = await fetch(`${url}`, {
            method,
            body,
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
    return await res.json;
}        