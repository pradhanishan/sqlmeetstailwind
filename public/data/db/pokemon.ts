import aggronImage from "@/public/images/sprites/aggron.png";
import alakazamImage from "@/public/images/sprites/alakazam.png";
import arbokImage from "@/public/images/sprites/arbok.png";
import caterpieImage from "@/public/images/sprites/caterpie.png";
import charmeleonImage from "@/public/images/sprites/charmeleon.png";
import corvisquireImage from "@/public/images/sprites/corvisquire.png";
import cranidosImage from "@/public/images/sprites/cranidos.png";
import dragonairImage from "@/public/images/sprites/dragonair.png";
import duskullImage from "@/public/images/sprites/duskull.png";
import eeveeImage from "@/public/images/sprites/eevee.png";
import glaceonImage from "@/public/images/sprites/glaceon.png";
import hippowdonImage from "@/public/images/sprites/hippowdon.png";
import jolteonImage from "@/public/images/sprites/jolteon.png";
import rioluImage from "@/public/images/sprites/riolu.png";
import sylveonImage from "@/public/images/sprites/sylveon.png";
import treeckoImage from "@/public/images/sprites/treecko.png";
import umbreonImage from "@/public/images/sprites/umbreon.png";
import vaporeonImage from "@/public/images/sprites/vaporeon.png";

import { StaticImageData } from 'next/image';

export type TPokemon = {
    id: string;
    name: string;
    pokemonTypeId: string;
    sprite: StaticImageData;
}[];

export const Pokemon: TPokemon = [
    {
        id: "P-1",
        name: "caterpie",
        pokemonTypeId: "PT-1", // Bug
        sprite: caterpieImage
    },
    {
        id: "P-2",
        name: "umbreon",
        pokemonTypeId: "PT-2", // Dark
        sprite: umbreonImage
    },
    {
        id: "P-3",
        name: "dragonair",
        pokemonTypeId: "PT-3", // Dragon
        sprite: dragonairImage
    },
    {
        id: "P-4",
        name: "jolteon",
        pokemonTypeId: "PT-4", // Electric
        sprite: jolteonImage
    },
    {
        id: "P-5",
        name: "sylveon",
        pokemonTypeId: "PT-5", // Fairy
        sprite: sylveonImage
    },
    {
        id: "P-6",
        name: "riolu",
        pokemonTypeId: "PT-6", // Fighting
        sprite: rioluImage
    },
    {
        id: "P-7",
        name: "charmeleon",
        pokemonTypeId: "PT-7", // Fire
        sprite: charmeleonImage
    },
    {
        id: "P-8",
        name: "corvisquire",
        pokemonTypeId: "PT-8", // Flying
        sprite: corvisquireImage
    },
    {
        id: "P-9",
        name: "duskull",
        pokemonTypeId: "PT-9", // Ghost
        sprite: duskullImage
    },
    {
        id: "P-10",
        name: "treecko",
        pokemonTypeId: "PT-10", // Grass
        sprite: treeckoImage
    },
    {
        id: "P-11",
        name: "hippowdon",
        pokemonTypeId: "PT-11", // Ground
        sprite: hippowdonImage
    },
    {
        id: "P-12",
        name: "glaceon",
        pokemonTypeId: "PT-12", // Ice
        sprite: glaceonImage
    },
    {
        id: "P-13",
        name: "eevee",
        pokemonTypeId: "PT-13", // Normal
        sprite: eeveeImage
    },
    {
        id: "P-14",
        name: "arbok",
        pokemonTypeId: "PT-14", // Poison
        sprite: arbokImage
    },
    {
        id: "P-15",
        name: "alakazam",
        pokemonTypeId: "PT-15", // Psychic
        sprite: alakazamImage
    },
    {
        id: "P-16",
        name: "cranidos",
        pokemonTypeId: "PT-16", // Rock
        sprite: cranidosImage
    },
    {
        id: "P-17",
        name: "aggron",
        pokemonTypeId: "PT-17", // Steel
        sprite: aggronImage
    },
    {
        id: "P-18",
        name: "vaporeon",
        pokemonTypeId: "PT-18", // Water
        sprite: vaporeonImage
    }
];
