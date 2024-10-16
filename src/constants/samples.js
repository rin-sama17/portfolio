import shop from "../assets/samples/shop.png";
import cv from "../assets/samples/cv.png";

export const samples = [
    {
        name: "فروشگاه من",
        caption: "پروژه فروشگاهی یک فروشگاه ساخته شده با ری اکت و لاراول است که با متریال یو ای 'Material ui' دیزاین شده است",
        image: shop,
        languages: [{color:"primary.main",name:"react"},{ color:"secondary.main",name:"laravel"}],
        isDone: true,
        link: ""
    },
    {
        name: "فروشگاه من",
        caption: "پروژه فروشگاهی یک فروشگاه ساخته شده با ری اکت و لاراول است که با متریال یو ای 'Material ui' دیزاین شده است",
        image: cv,
        languages: [{color:"success.main",name:"vue"}, {color:"info.main",name:"tailvind css"}],
        isDone: true,
        link: "https://rin-sama17.github.io/CV"
    },
];
