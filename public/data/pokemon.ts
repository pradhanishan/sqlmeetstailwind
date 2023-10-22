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


export const pokemon: {
    headers: {
        key: string;
        value: string;
    }[];
    data: {
        key: string;
        value: ({
            key: string;
            value: string;
        } | {
            key: string;
            value: string | StaticImageData;
        })[];
    }[];
} = {
    headers: [
        { key: "pokemonId", value: "id" },
        { key: "pokemonName", value: "name" },
        { key: "pokemonTypeId", value: "typeId" },
        { key: "pokemonSprite", value: "sprite" }
    ],
    data: [
        {
            key: "pokemonDataRow0",
            value: [
                { key: "pokemonId0", value: "P-1" },
                { key: "pokemonName0", value: "caterpie" },
                { key: "pokemonTypeId0", value: "PT-1" },
                { key: "pokemonSprite0", value: caterpieImage }
            ]
        },
        {
            key: "pokemonDataRow1",
            value: [
                { key: "pokemonId1", value: "P-2" },
                { key: "pokemonName1", value: "umbreon" },
                { key: "pokemonTypeId1", value: "PT-2" },
                { key: "pokemonSprite1", value: umbreonImage }
            ]
        },
        {
            key: "pokemonDataRow2",
            value: [
                { key: "pokemonId2", value: "P-3" },
                { key: "pokemonName2", value: "dragonair" },
                { key: "pokemonTypeId2", value: "PT-3" },
                { key: "pokemonSprite2", value: dragonairImage }
            ]
        },
        {
            key: "pokemonDataRow3",
            value: [
                { key: "pokemonId3", value: "P-4" },
                { key: "pokemonName3", value: "jolteon" },
                { key: "pokemonTypeId3", value: "PT-4" },
                { key: "pokemonSprite3", value: jolteonImage }
            ]
        },
        {
            key: "pokemonDataRow4",
            value: [
                { key: "pokemonId4", value: "P-5" },
                { key: "pokemonName4", value: "sylveon" },
                { key: "pokemonTypeId4", value: "PT-5" },
                { key: "pokemonSprite4", value: sylveonImage }
            ]
        },
        {
            key: "pokemonDataRow5",
            value: [
                { key: "pokemonId5", value: "P-6" },
                { key: "pokemonName5", value: "riolu" },
                { key: "pokemonTypeId5", value: "PT-6" },
                { key: "pokemonSprite5", value: rioluImage }
            ]
        },
        {
            key: "pokemonDataRow6",
            value: [
                { key: "pokemonId6", value: "P-7" },
                { key: "pokemonName6", value: "charmeleon" },
                { key: "pokemonTypeId6", value: "PT-7" },
                { key: "pokemonSprite6", value: charmeleonImage }
            ]
        },
        {
            key: "pokemonDataRow7",
            value: [
                { key: "pokemonId7", value: "P-8" },
                { key: "pokemonName7", value: "corvisquire" },
                { key: "pokemonTypeId7", value: "PT-8" },
                { key: "pokemonSprite7", value: corvisquireImage }
            ]
        },
        {
            key: "pokemonDataRow8",
            value: [
                { key: "pokemonId8", value: "P-9" },
                { key: "pokemonName8", value: "duskull" },
                { key: "pokemonTypeId8", value: "PT-9" },
                { key: "pokemonSprite8", value: duskullImage }
            ]
        },
        {
            key: "pokemonDataRow9",
            value: [
                { key: "pokemonId9", value: "P-10" },
                { key: "pokemonName9", value: "treecko" },
                { key: "pokemonTypeId9", value: "PT-10" },
                { key: "pokemonSprite9", value: treeckoImage }
            ]
        },
        {
            key: "pokemonDataRow10",
            value: [
                { key: "pokemonId10", value: "P-11" },
                { key: "pokemonName10", value: "hippowdon" },
                { key: "pokemonTypeId10", value: "PT-11" },
                { key: "pokemonSprite10", value: hippowdonImage }
            ]
        },
        {
            key: "pokemonDataRow11",
            value: [
                { key: "pokemonId11", value: "P-12" },
                { key: "pokemonName11", value: "glaceon" },
                { key: "pokemonTypeId11", value: "PT-12" },
                { key: "pokemonSprite11", value: glaceonImage }
            ]
        },
        {
            key: "pokemonDataRow12",
            value: [
                { key: "pokemonId12", value: "P-13" },
                { key: "pokemonName12", value: "eevee" },
                { key: "pokemonTypeId12", value: "PT-13" },
                { key: "pokemonSprite12", value: eeveeImage }
            ]
        },
        {
            key: "pokemonDataRow13",
            value: [
                { key: "pokemonId13", value: "P-14" },
                { key: "pokemonName13", value: "arbok" },
                { key: "pokemonTypeId13", value: "PT-14" },
                { key: "pokemonSprite13", value: arbokImage }
            ]
        },
        {
            key: "pokemonDataRow14",
            value: [
                { key: "pokemonId14", value: "P-15" },
                { key: "pokemonName14", value: "alakazam" },
                { key: "pokemonTypeId14", value: "PT-15" },
                { key: "pokemonSprite14", value: alakazamImage }
            ]
        },
        {
            key: "pokemonDataRow15",
            value: [
                { key: "pokemonId15", value: "P-16" },
                { key: "pokemonName15", value: "cranidos" },
                { key: "pokemonTypeId15", value: "PT-16" },
                { key: "pokemonSprite15", value: cranidosImage }
            ]
        },
        {
            key: "pokemonDataRow16",
            value: [
                { key: "pokemonId16", value: "P-17" },
                { key: "pokemonName16", value: "aggron" },
                { key: "pokemonTypeId16", value: "PT-17" },
                { key: "pokemonSprite16", value: aggronImage }
            ]
        },
        {
            key: "pokemonDataRow17",
            value: [
                { key: "pokemonId17", value: "P-18" },
                { key: "pokemonName17", value: "vaporeon" },
                { key: "pokemonTypeId17", value: "PT-18" },
                { key: "pokemonSprite17", value: vaporeonImage }
            ]
        }
    ]
};

