let Arrgalery = [
    {
        id: "0",
        scr: "red.jpg",
        Nametitle:"Костел",
        title: "В храме святого Симеона и святой Елены находится полномасштабная копия Туринской Плащаницы.",
        href: "https://msj.by/katolicheskie-xramy/krasnyj-kostel-v-minske/",
        img: ["red.jpg","red1.jpg","red2.jpg"]
    },
    {
        id: "1",
        scr: "troi.jpg",
        Nametitle:"Троицкое",
        title: "Троицкое предместье — исторический район города Минска, расположенный в северо-восточной части исторического центра на левом берегу реки Свислочь.",
        href: "https://www.belarus.by/ru/travel/belarus-life/trinity-suburb",
        img: ["troi.jpg","troi1.jpg","troi2.jpg"]
    },
    {
        id: "2",
        scr: "mir.jpg",
        Nametitle:"Мир",
        title: "Построенный в начале XVI в. магнатом Ю. И. Ильиничем замок стал первым частнособственническим замком на землях Беларуси",
        href: "https://mirzamak.by/",
        img: ["mir.jpg","mir1.jpg","mir2.jpg"]
    }
];

let galery = document.getElementById('galery');
let imgGalery = document.getElementById('imgOpen');
let imgCollection = document.getElementById('imgCollection');


for(let i = 0 ; i < Arrgalery.length; i++){
    galery.innerHTML += `
    <div class="galery-item">
       <img class="galery-img" onclick="openImg()" onmouseover="sliderSwap()" onmouseout="sliderStop()"  id=${Arrgalery[i].id} src=${Arrgalery[i].scr}></img>
        <div class="galert-title">${Arrgalery[i].Nametitle}</div>
    </div>`;
}
let j = 0; 
let intervalId;
function sliderSwap(){
    const id = event.target.id
    for(let i = 0; i < Arrgalery.length; i++){
        let myImg = document.getElementById(`${Arrgalery[i].id}`);
            if(id === Arrgalery[i].id){
               intervalId  =  setInterval(function (){
                    myImg.src = Arrgalery[i].img[j++];
                    j = (j+1)% Arrgalery[i].img.length;
                    console.log(id)
                },1000);
            } 
       
    }
}
function sliderStop(){
    clearInterval(intervalId);
    const id = event.target.id
    for(let i = 0 ; i < Arrgalery.length; i ++ ){
        let myImg = document.getElementById(`${Arrgalery[i].id}`);
        if(id === Arrgalery[i].id){
            myImg.src = Arrgalery[i].scr;
            
        }
    }

}

function closeImg(){
    imgCollection.innerHTML = '';
}

function openImg(){
    const id = event.target.id;
    for(let i = 0 ; i < Arrgalery.length; i ++){
        if(id === Arrgalery[i].id){
            imgCollection.innerHTML = `
            <img class="img-open" onclick="closeImg()" src="${Arrgalery[i].scr}"></img>
            <a href=${Arrgalery[i].href}><div class="img-title-open">${Arrgalery[i].title}</div></a>
            `; 
        }
          
    }     
}


console.log(Arrgalery);