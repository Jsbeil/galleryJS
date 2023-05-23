let arrSlider = [
    {
        id: 0 ,
        img: "mir.jpg",
        img2: "mir1.jpg",
        img3: "mir2.jpg"
    },
    {
        id: 1 ,
        img: "red.jpg",
        img2: "red1.jpg",
        img3: "red2.jpg"
    },
    {
        id: 2 ,
        img: "troi.jpg",
        img2: "troi1.jpg",
        img3: "troi2.jpg"
    }
];
let photo = document.getElementById('slider');
let photo1 = document.getElementById('1');
let photo2 = document.getElementById('2');
function aaaa(){
    const id = event.target.id;
    for(let i = 0 ; i < arrSlider.length;i ++){
        if(id === Arrgalery[i].id){
                photo.src = arrSlider[i].img2;
        }
    }
   

   
}


