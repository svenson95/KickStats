export const basePath = "https://api.football-data.org/v2";

export let fetchData = async (input: RequestInfo): Promise<any> => {
    try {
        const options = {
            headers: {
                'X-Auth-Token': '342413b707f445ebb2666b52c757dff1'
            }
        };
        const res = await fetch(input, options).then(checkForError);
        const json = await res.json();
        console.log(json);
        return json;
    } catch (error) {
        console.log(error);
    }
};

let checkForError = async (res: Response) => {
    if (res.ok) return res;
    throw new Error(res.statusText);
};
