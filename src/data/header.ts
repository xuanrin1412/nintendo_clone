// HEADER 1
export const options = [
    { value: 'All categories' },
    { value: 'Games' },
    { value: 'Hardware' },
    { value: 'Merchandise' },
    { value: 'New & Events' },
    { value: 'Support' },
];
export const trendingTopics = [
    { value: 'Trending topics' },
    { value: 'Nintendo Switch™ - OLED Model: Mario Red Editions' },
    { value: 'Nintendo Switch' },
    { value: 'Super Mario Bros. Wonder' },
    { value: 'Nintendo Switch games' },
    { value: 'Zelda games' },
];
import game from "@/assets/header_2/game.svg"
import hardware from "@/assets/header_2/hardware.svg"
import merchaindise from "@/assets/header_2/merchaindise.svg"
import store from "@/assets/header_2/store.svg"
import characters from "@/assets/header_2/characters.svg"
import sale from "@/assets/header_2/sale.svg"
import one from "@/assets/header_2/1.svg"
import gameMain from "@/assets/header_2/1.svg"
import ninoSwitch from "@/assets/header_2/ninoSwitch.svg"
import notify from "@/assets/header_2/notify.svg"
import calender from "@/assets/header_2/calender.svg"
import compare from "@/assets/header_2/compare.svg"
import onlineService from "@/assets/header_2/onlineService.svg"
import startHaveEyes from "@/assets/header_2/starHaveEyes.svg"
import kids from "@/assets/header_2/kids.svg"
import parent from "@/assets/header_2/parent.svg"
import notiMess from "@/assets/header_2/notiMess.svg"

// HEADER 2
export const games=[
    {
        icon: one,
        mainIcon:gameMain,
        main:"My Nintendo Store",
        Child:[
            {
                icon: game,
                title:"Games",
                features:[
                    "Nintendo Switch game",
                    "Neu releases",
                    "Sale & deals"
                ]
            },
            {
                icon: hardware,
                title:"Hardware",
                features:[
                    "Nintendo Switch systems",
                    "Joy-Con & controllers",
                    "Case & more",
                    "amiibo"
                ]
            },
            {
                icon: hardware,
                title:"Merchaindise",
                features:[
                    "Apparel & accessories",
                    "Joy-Con & controllers",
                    "Home & office",
                    "Plush",
                    "Toys"
                ]
            },
            {
                icon: merchaindise,
                title:"Merchaindise",
                features:[
                    "Apparel & accessories",
                    "Joy-Con & controllers",
                    "Home & office",
                    "Plush",
                    "Toys"
                ]
            },
            {
                icon: store,
                title:"Store exclusives",
                features:[
                    "Exclusive products",
                    "My Nintendo rewards",
                    "Nintendo Switch Online offers"
                ]
            },
            {
                icon: characters,
                title:"Characters",
                features:[
                    "Pikmin",
                    "Splatoon",
                    "Super Mario",
                    "The Legend of Zelda"
                ]
            },
            {
                icon: sale,
                icon_2: store,
                title:"Sales & deals",
                title_2:"Top picks for you",
            },
        ]
    },
    {
        icon: game,
        main:"Games",
        Child:[
            {
                icon: ninoSwitch,
                title:"Nintendo Switch games",
            },
            {
                icon: notify,
                title:"New releases",
            },
            {
                icon: calender,
                title:"Comming soon",
            },
            {
                icon: game,
                title:"New releases",
            },
        ]
    },
    {
        icon: ninoSwitch,
        main:"Nintendo Switch",
        Child:[
            {
                icon: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/Dev/Global%20Navigation/lineup.png",
                title:"Nintendo Switch lineup",
            },
            {
                icon: compare,
                title:"Compare systems",
            },
            {
                icon: onlineService,
                title:"online service",
            },
            {
                icon: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_200/Dev/Global%20Navigation/procon.png",
                title:"Accessories",
            },
            {
                icon: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_200/Dev/Global%20Navigation/oled.png",
                title:"Shop Systerm",
            },
        ]
    },
    {
        icon: notiMess,
        main:"New & Events",
    },
    {
        icon: startHaveEyes,
        main:"Play Nintendo",
        Child:[
            {
                icon: kids,
                title:"For kids",
            },
            {
                icon: parent,
                title:"For parents",
            },
        ]
    },
]