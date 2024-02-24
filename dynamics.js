//Here fonction of clic buttons on SQR 
    let sqrText = document.querySelector('#sqr-area');
    let copySqr = document.querySelector('.clic-sqr');

    copySqr.addEventListener('click', () => {
        sqrText.select();
        navigator.clipboard.writeText(sqrText.value);
    });

//Here fonction of clic buttons on SQR 
let qsrText = document.querySelector('#qsr-area');
let copyQsr = document.querySelector('.clic-qsr');

copyQsr.addEventListener('click', () => {
    qsrText.select();
    navigator.clipboard.writeText(qsrText.value);
});


/**
 * Ici, c'est un raccourci pour définir le nombre de raffraichissement. Il sera différent entre Casy et la seck-check mais la finalité sera la même
 * @param {*} afunction 
 * @param {number} delay 
 */

let aTimeOut;

function refresh(afunction, delay){
    aTimeOut = setTimeout(afunction, delay)
}

//Je cache ici mes notifications :
let notif = document.querySelector('.notification')
notif.style.display = 'none'

let span = document.querySelector('.question > span')
let yes = document.querySelector('.yes')
let no = document.querySelector('.no')

function visible() {
    notif.style.display = 'block';
}

function casy(){
    let today = new Date(); 
    let time = {
            day : today.getDay(),
            hour : today.getHours(), 
            minutes : today.getMinutes(), 
        }

    if(time.hour == 10 || time.hour == 13 || time.hour == 18){

        visible();

        yes.addEventListener('click', () => {

//Changer uniquement ce qui est entre guillemets

            window.open('https://iwww.casy.ikea.com/');
            setTimeout(() => {notif.style.display = 'none'}, 2000)
        })
        no.addEventListener('click', () => {
            setTimeout(() => {notif.style.display = 'none'}, 200)
        })
    }
}

clearTimeout(aTimeOut);//Casy

refresh(casy, 1000*60*5)
casy()


function secCheck(){
    let today = new Date(); 
    let time = {
            day : today.getDay(),
            hour : today.getHours(), 
            minutes : today.getMinutes(), 
        }

    if((time.day == 1 && (time.hour == 9 || time.hour == 14))|| (time.day == 2 && (time.hour == 9 || time.hour == 14))){

        visible();

        let span = document.querySelector('.question > span')
        span.textContent = "Rappel Sec-Check"
        let img = document.querySelector('.emoji')
        img.innerHTML = '<img src="img/seccheck.png" height="50" style="border-radius: 50%;" >'

        yes.addEventListener('click', () => {

//Changer uniquement ce qui est entre guillemets, en 1 le fichier Ahmed

            window.open('https://iweof-my.sharepoint.com/personal/ahmed_riadi_ingka_ikea_com/_layouts/15/onedrive.aspx?CT=1672136795508&OR=OWA%2DNT&CID=632c99bc%2Dbd6b%2D6c7e%2D0bc1%2Dbeaea50d51f5&id=%2Fteams%2Fo365g%5Fall%5Fretfr434%2FShared%20Documents%2FS%C3%A9curit%C3%A9%2FContr%C3%B4les%20hedomadaire%2FRecovery&listurl=https%3A%2F%2Fiweof%2Esharepoint%2Ecom%2Fteams%2Fo365g%5Fall%5Fretfr434%2FShared%20Documents&viewid=eec24853%2Db50d%2D4ebf%2Daff7%2D58bafa667fa0');//archives;

//En 2 notre seck check
            window.open('https://iweof.sharepoint.com/teams/o365g_recovery_retfr434/Shared%20Documents/Forms/AllItems.aspx?id=%2Fteams%2Fo365g%5Frecovery%5Fretfr434%2FShared%20Documents%2FCommun%2F01%20%2D%20SECK%20CHECK&viewid=7e9052c5%2Df5b1%2D4f8f%2Db87a%2Dc76979bf13b2');//sec-check
            setTimeout(() => {notif.style.display = 'none'}, 2000)
        })
        no.addEventListener('click', () => {
            setTimeout(() => {notif.style.display = 'none'}, 200)
        })

        /*if(confirm('ALERTE CASY : Il est l\'heure de faire ta capture !')){
            window.open('https://iwww.casy.ikea.com/');//Casy
        }
        else{
            alert('OK, je te relance plus tard.');
        }*/  
    }
}

clearTimeout(aTimeOut);//Casy

refresh(secCheck, 1000*60*5)
secCheck()



        /*if(confirm('ALERTE CASY : Il est l\'heure de faire ta capture !')){
            window.open('https://iwww.casy.ikea.com/');//Casy
        }
        else{
            alert('OK, je te relance plus tard.');
        }*/