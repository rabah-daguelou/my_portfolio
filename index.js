
let icon=document.querySelector('.icon');
let btnHumberger=document.querySelector('.btn-humburger');
let navbarNav=document.querySelector('.menu');



btnHumberger.addEventListener('click', ()=>{
    btnHumberger.classList.toggle('active');
    navbarNav.classList.toggle('menuBackground')
})

/* Animation enveloppes */

let myDiv=document.querySelector('.technologie');

let face1= document.querySelector('.face1');
let face2= document.querySelector('.face2');

let technologies=[
    {
        name:'<i class="fa-brands fa-html5"></i>',
        color: "orange"
    },
    {
        name:'<i class="fa-brands fa-css3-alt"></i>',
        color: "blue"
    },
    {
        name:'<i class="fa-brands fa-js"></i>',
        color: "yellow"
    },
    {
        name:'<i class="fa-brands fa-bootstrap"></i>',
        color: "rgb(110, 6, 105)"
    },
    {
        name: '<i class="fa-brands fa-sass"></i>',
        color: 'rgb(221, 13, 232)'
    },
    {
        name: '<i class="fa-brands fa-vuejs"></i>',
        color: 'rgb(48, 231, 167)'
    },
    {
        name: '<i class="fa-brands fa-node"></i>',
        color: 'rgb(11, 168, 61)'
    },
    {
        name: '<i class="fa-brands fa-square-git"></i>',
        color: '#000'
    },
    {
    name: '<i class="fa-brands fa-npm"></i>',
    color: 'rgb(231, 57, 57)'
},
    
]

let i=0

// Enveloppe 1 //

// ouvre chaque 1 s
setInterval(() => {
    face1.style="transform:rotateX(180deg)";
}, 1000);

// Ferme chaque 2 s
setInterval(() => {
    face1.style="transform:rotateX(0deg)"
}, 2000);

// enveloppe 2 //

setTimeout(() => {
    // ouvre chaque 1s
setInterval(() => {
    face2.style="transform:rotateX(180deg)";
    
}, 1000);

// Ferme chaque 2s
setInterval(() => {
    face2.style="transform:rotateX(0deg)"
    
}, 2000);
}, 1500);
//


// Animation des tech

let enveloppe2=document.querySelector(".enveloppe2")
enveloppe2.style="z-index:-1"

    setInterval(() => {
    
    myDiv.style='animation: fly 2s linear infinite';
    myDiv.innerHTML=technologies[i].name;
    myDiv.style.color=technologies[i].color;
      
    i++
    i<technologies.length? i : i=0;
}, 2000);

/* Fin animation enveloppes */

/* Animation de what I do */

let doing=document.querySelector('.doing')

let firstArray= [

    "Intégrer des maquettes en HTML et CSS",
    " Dynamiser des sites web avec des animations CSS ", 
    " Optimiser l'accessibilité et le référencement naturel SEO ",
    " Interagir avec un web service en utilisant JavaScript Vanilla",
    " Développer des API avec NodeJs et Express",
    " Implémenter et gérer l'authentification et la sécurité des API ",
    " Implémenter et gérer les bases de données relationnelles et non relationnelles"
]

let firstArrayElement=0;
let firstcounter;

/** Ecrire lettre par lettre */

function firstArrayFunction() {
    
    doing.innerHTML="";
    if (firstArrayElement<firstArray.length){
        let secondArray=firstArray[firstArrayElement].split('');
        let timeWritePerLetter;
        function writePerLetter (){
            if(secondArray.length>0) {
                doing.innerHTML+=(secondArray.shift());
            } else {
                clearTimeout(timeWritePerLetter);
            }
            timeWritePerLetter=setTimeout(writePerLetter, 100);
        }
        
        writePerLetter()
     //
       firstcounter=setTimeout(()=>{
           firstArrayElement++;  
           firstArrayFunction() 
        }, 10000)
    } else {
        firstArrayElement=0;
        firstcounter=setTimeout(()=>{
            firstArrayFunction() 
        }, 10000)
    }
}

firstArrayFunction()



/* Animation flèche vers le bas */
let arrow1=document.querySelector(".bottom_arrow1");
arrow1.addEventListener('click', ()=>{
    scrollTo({
        top: 720,
        behavior:"smooth"
    });

    bonjour.innerHTML='';
    writeBonjour(0)
});
/* */

/** */



/* Animation Bonjour */

let bonjour=document.getElementById("bonjour");
let l=0;
let letters=["B", "o", "n", "j", "o", "u", "r"];

function writeBonjour(l) {
    if(bonjour.textContent!=='Bonjour'|| scrollY==500) {
        setTimeout(() => {
        bonjour.append(letters[l]);
        l++
        writeBonjour(l)
    }, 100);
  } 
}

/* Animation Description */
let description=document.querySelector('.about');

window.addEventListener('scroll', ()=>{
    if(window.scrollY>400){
        description.classList.add('description');
    }
})

/* Animation citation */

let myBlockquote=document.querySelector(".myBlockquote")
let citation=" Quiconque arrête d'apprendre, à vingt ou quatre-vingts ans, devient \
vieux. Celui qui continue d'apprendre reste jeune. Dans la vie, le plus \
beau est de rester jeune d'esprit. "


let citation1=citation.split('');

let timeWrite;
function write2 (){
    if(citation1.length>0) {
        myBlockquote.innerHTML+=(citation1.shift());
    } else {
        clearTimeout(timeWrite);
    }
    timeWrite=setTimeout(write2, 30);
}
write2();

setTimeout(() => {
    myBlockquote.innerHTML+='<br><span> Henry Ford </span>'
}, 6500);


/**/

/* Mes projets */

import { myProjects } from "./projects.js";
let projects=document.getElementById('projects')

for (let i = 0; i< myProjects.length; i++) {
    
    let project=document.createElement('div')
    project.classList.add('project')
    let projectUrl=document.createElement('a')
    let projectCard=document.createElement('div');
    let projectImage=document.createElement('img');
    projectImage.setAttribute('class', 'urlImage')

    projects.appendChild (project);
    project.appendChild (projectUrl);
    projectUrl.appendChild (projectImage);

    projectUrl.setAttribute('href',myProjects[i].url )

    
    projectImage.setAttribute('src', myProjects[i].image)
    
    
    project.appendChild(projectCard);
    
    projectCard.classList.add('card');
    

    let projectText=myProjects[i].text.split('');
    
    for( let j=0; j<projectText.length; j++) {
        let projectSpan=document.createElement('span');
        projectCard.appendChild(projectSpan);
        projectSpan.innerHTML=projectText[j];
        let mySpans=projectCard.querySelectorAll('span')
        for (let i =0; i<mySpans.length; i++) {
            
            mySpans[i].style.transform= `rotate(${i*12}deg)`;
           
        }   
    }

    
    

}  



/* */

