let Arrgalery = [
    {
        id: "0",
        scr: "red.jpg",
        Nametitle:"Костел",
        title: "В храме святого Симеона и святой Елены находится полномасштабная копия Туринской Плащаницы.",
        href: "https://msj.by/katolicheskie-xramy/krasnyj-kostel-v-minske/"
    },
    {
        id: "1",
        scr: "troi.jpg",
        Nametitle:"Троицкое",
        title: "Троицкое предместье — исторический район города Минска, расположенный в северо-восточной части исторического центра на левом берегу реки Свислочь.",
        href: "https://www.belarus.by/ru/travel/belarus-life/trinity-suburb"
    },
    {
        id: "2",
        scr: "mir.jpg",
        Nametitle:"Мир",
        title: "Построенный в начале XVI в. магнатом Ю. И. Ильиничем замок стал первым частнособственническим замком на землях Беларуси",
        href: "https://mirzamak.by/"
    }
];

let galery = document.getElementById('galery');
let imgGalery = document.getElementById('imgOpen');
let imgCollection = document.getElementById('imgCollection');

for(let i = 0 ; i < Arrgalery.length; i++){
    galery.innerHTML += `
    <div class="galery-item">
       <img class="galery-img" onclick="openImg()" id=${Arrgalery[i].id} src=${Arrgalery[i].scr}></img>
        <div class="galert-title">${Arrgalery[i].Nametitle}</div>
    </div>`;
}

function closeImg(){
    imgCollection.innerHTML = '';
}

function openImg(){
    const id = event.target.id;
    for(let i = 0 ; i < Arrgalery.length; i ++){
        if(id === Arrgalery[i].id){
            imgCollection.innerHTML = `
            <a href=${Arrgalery[i].href}><img class="img-open" onclick="closeImg()" src="${Arrgalery[i].scr}"></img></a>
            <div class="img-title-open">${Arrgalery[i].title}</div>
            `; 
        }
          
    }     
}