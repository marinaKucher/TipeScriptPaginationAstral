import {ICard} from "../types/data";

function getNewImages<ICard>( url: string, config: RequestInit = {} ): Promise<ICard>
{
    return fetch(url, config)
        .then((response) => response.json())
        .then((data) => data as ICard);
}

export default getNewImages