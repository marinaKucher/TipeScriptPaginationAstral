const url = 'https://jsonplaceholder.typicode.com/photos?_limit=6&_page=';

function getNewImages<ICard>( page: string, config: RequestInit = {} ): Promise<ICard>
{
    return fetch(url+page, config)
        .then((response) => response.json())
        .then((data) => data as ICard);
}

export default getNewImages