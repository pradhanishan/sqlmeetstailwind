import { StaticImageData } from "next/image";

export function filterPokemonDataByName(pokemonNamesToFilter: string[], data: {
    key: string;
    value: ({
        key: string;
        value: string;
    } | {
        key: string;
        value: string | StaticImageData;
    })[];
}[]): {
    key: string;
    value: ({
        key: string;
        value: string;
    } | {
        key: string;
        value: string | StaticImageData;
    })[];
}[] {
    return data.filter((row) => {
        const value = row.value[1].value;
        return typeof value === "string" && pokemonNamesToFilter.includes(value);
    })
}

export function filterPokemonTypesByName(pokemonTypesToFilter:string[],data:{
    key: string;
    value: {
        key: string;
        value: string;
    }[];
}[]){
    return data.filter((row) => {
        const value = row.value[1].value;
        return typeof value === "string" && pokemonTypesToFilter.includes(value);
    })
}