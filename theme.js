window.onload = function(){
   const savedTheme = localStorage.getItem("theme");
    commonThemeFn(savedTheme);
}


function changeTheme(theme){
    const elementId = document.getElementById(theme).id;
    console.log(elementId)
   localStorage.setItem("theme", elementId);
   commonThemeFn(localStorage.getItem("theme")); 
}

function commonThemeFn(savedTheme){
    if(savedTheme==="dark"){
        document.getElementById("white").style.display='block';
        document.getElementById("dark").style.display='none';
        document.querySelector('body').style.backgroundColor ='#fff';
        document.querySelector('body').style.color ='black';
        document.querySelectorAll('.span-class').forEach(element => {
            element.style.color = 'black';
        });

    }else{
        document.getElementById("white").style.display='none';
        document.getElementById("dark").style.display='block'; 
        document.querySelector('body').style.backgroundColor ='black'; 
        document.querySelector('body').style.color = 'white';
        document.querySelector('p').style.color = 'black';
        document.querySelector('h3').style.color = 'black';
    }

}

