import resident from '../assets/games/jogo-resident-evil-2.png'
import mortal from '../assets/games/jogo-mortal-combat.png'
import guardians from '../assets/games/jogo-guardian.png'
// import gta from '../assets/games//jogo-gta-V.png'
import batlefield from '../assets/games/jogo-batlefield-v.png'


import memoria from '../assets/pc/memoria.png'
import placa from '../assets/pc/placa.png'
import teclado from '../assets/pc/teclado.png'
import mouse from '../assets/pc/mouse.png'


export const gameItems = [
    {
        name: 'Resident Evil 2 Remake',
        id: 1,
        price: 'R$ 230,00',
        plataform: 'Playstation 4',
        img: resident,
        param: 'residentevil2remake',
        amount: 0
    },
    {
        name: 'Guardiões da Galaxia',
        id: 2,
        price: 'R$ 150,00',
        plataform: 'Playstation 4',
        img: guardians,
        param: 'guardiasofgalaxy',
        amount: 0
    },
    {
        name: 'Mortal Kombat',
        id: 3,
        price: 'R$ 100,00',
        plataform: 'Playstation 4',
        img: mortal,
        param: 'mortalkombat',
        amount: 0
    },
    {
        name: 'Batlefield',
        id: 5,
        price: 'R$ 130,00',
        plataform: 'Playstation 4',
        img: batlefield,
        param: 'batlefieldv',
        amount: 0
    }
]

export const pcItems = [
    {
        name: 'Memoria',
        id: 1,
        price: 'R$ 200,00',
        marca: 'HyperX',
        img: memoria,
        param: 'memoriahyperx',
        amount: 0
    },
    {
        name: 'G-Force 4090',
        id: 2,
        price: 'R$ 1500,00',
        marca: 'Nvidia',
        img: placa,
        param: 'placadevideo',
        amount: 0
    },
    {
        name: 'Mouse',
        id: 3,
        price: 'R$ 100,00',
        marca: 'Razer',
        img: mouse,
        param: 'mouse',
        amount: 0
    },
    {
        name: 'Teclado Mecanico',
        id: 4,
        price: 'R$ 225,00',
        marca: 'Razer',
        img: teclado,
        param: 'teclado',
        amount: 0
    }
]
