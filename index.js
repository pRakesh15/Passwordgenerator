
let showpassowrd = document.getElementById("passw");
       
let toglebtn = document.getElementById("span");

const tooglepassword = () => {
    if (showpassowrd.type === "password") {
        showpassowrd.setAttribute('type', 'text');
        toglebtn.classList.add('hide');
    }
    else {
        showpassowrd.setAttribute('type', 'password');
        toglebtn.classList.remove('hide')
    }
}

let uchar="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let char = "abcdefghijklmnopqrstuvwxyz";
    let number = "1234567890";
    let Spchar = "~!@#$%^&*";
    const allchar=char+number+uchar+Spchar;
let generatedpassword = (len) => {
    pass = "";
    
    pass += uchar[Math.floor(Math.random() * uchar.length)]
    pass += char[Math.floor(Math.random() * char.length)]
    pass += number[Math.floor(Math.random() * number.length)]
    pass += Spchar[Math.floor(Math.random() * Spchar.length)]
    
    while(len>pass.length)
    {
        pass += allchar[Math.floor(Math.random() * allchar.length)]
    }
    showpassowrd.value=pass;
    
    }
    const copypassword=()=>
    {
        showpassowrd.select();
        document.execCommand("copy");
    }
    const sterngth=(Password)=>
    {
        let i=0;
        if(Password.length>6)
        {
            i++;
        }
        if(Password.length>=8)
        {
            i++;
        }
        if(/[A-Z]/.test(Password))
        {
            i++;
        }
        if(/[0-9]/.test(Password))
        {
            i++;
        }
        if(/[A-Za-z0-8]/.test(Password))
        {
            i++;
        }
        return i;

    }
    let content=document.querySelector('#content')
    content.addEventListener("keyup",(e)=>
    {
        let Password=showpassowrd.value
        let sterenght=sterngth(Password);
        if(sterenght<=2)
        {
            content.classList.add('weak')
            content.classList.remove('medium')
            content.classList.remove('strong')
        }
        else if(sterenght>2 && sterenght<5)
        {
            content.classList.remove('weak')
            content.classList.add('medium')
            content.classList.remove('strong')
        }
        else if(sterenght===""||showpassowrd.value==="")
        {
            content.classList.remove('weak')
            content.classList.remove('medium')
            content.classList.remove('strong')
        }
        else if(sterenght===pass)
        {
            content.classList.remove('weak')
            content.classList.remove('medium')
            content.classList.add('strong')
        }
        else
        {
            content.classList.remove('weak')
            content.classList.remove('medium')
            content.classList.add('strong')
        }
    })


