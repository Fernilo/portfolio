const sections = document.querySelectorAll('.section');
const sectionBtns = document.querySelectorAll('.controlls');
const sectionBtn = document.querySelectorAll('.control:not(.flag)');
const allSections = document.querySelector('.main-content');

function pageTransitions()
{
    for (let index = 0; index < sectionBtn.length; index++) {
        sectionBtn[index].addEventListener('click' , function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn' , '');
            this.className += ' active-btn';
        })
        
    }


    allSections.addEventListener('click' , (e) => {
        const id = e.target.dataset.id;
        //console.log(i)
        if(id) {
            //remove selected from the button
            // sectionBtns.forEach((btn)=>{
            //     btn.classList.remove('active');
            // })
            const btns = sectionBtns[0].children;
            for (let btn of btns) {
                btn.classList.remove('active');
                
            }
            e.target.classList.add('active');
           
            //hide the others sections
            sections.forEach((section)=>{
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click' , () =>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })

    //Selector de idioma
    const flagsElement = document.getElementById("flags");
    const textsToChange = document.querySelectorAll("[data-section]")
    
    const changeLanguage = async (language) => {
        const requestJson = await fetch(`../languages/${language}.json`)
        const texts = await requestJson.json();

        for (const textToChange of textsToChange) {
            console.log(textToChange);
        }
    }
    flagsElement.addEventListener('click' , (e) => {
        //e.target se refiere al elemento que disparo el evento
        changeLanguage(e.target.parentElement.dataset.language);
    })
}

pageTransitions();