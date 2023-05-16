let Arrgalery = [
    {
        id: "0",
        scr: "red.jpg",
        Nametitle:"Костел",
        title: "Построенный в начале XVI в. магнатом Ю. И. Ильиничем замок стал первым частнособственническим замком на землях Беларуси"
    },
    {
        id: "1",
        scr: "troi.jpg",
        Nametitle:"Троицкое",
        title: "Построенный в начале XVI в. магнатом Ю. И. Ильиничем замок стал первым частнособственническим замком на землях Беларуси2"
    },
    {
        id: "2",
        scr: "mir.jpg",
        Nametitle:"Мир",
        title: "Построенный в начале XVI в. магнатом Ю. И. Ильиничем замок стал первым частнособственническим замком на землях Беларуси3"
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
            <img class="img-open" onclick="closeImg()" src="${Arrgalery[i].scr}"></img>
            <div class="img-title-open">${Arrgalery[i].title}</div>
            `; 
        }
          
    }     
}