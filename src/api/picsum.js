const maxLimit = 100;
const url = 'https://picsum.photos/v2/list';

export const getRandomImagesList = async listSize => {
    let limit = Math.floor(Math.random() * maxLimit + listSize);

    try {
        let response = await fetch(`${url}?limit=${limit}`);
        let data = await response.json();

        if (limit > listSize) {
            data = data.slice(limit - listSize, limit);
        }

        return data;
    } catch (e) {
        console.log(e);
    }
}