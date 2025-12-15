function searchphone() {
    let input = document.getElementById('search').value.toLowerCase();
    let phones = document.getElementsByClassName("phone-card");
    let found = 0;
    
    for (let i = 0 ; i<phones.length; i++) {
        let name = phones[i].getElementsByTagName('h3')[0].textContent.toLowerCase();
        if (name.includes(input)) {
            phones[i].style.display = "block";
            found++;
        } else {
            phones[i].style.display = "none";
        }
    }
    if (found === 0 ) {
        document.getElementById('noresults').style.display = "block";
        found++;
        
    } else {
        document.getElementById("noresults").style.display = "none";
    }
}

// oder button
function buy(phone) {
    document.getElementById('oder-form').style.display = "grid";
    const form = document.getElementById('oder-form');
    form.classList.add('showform');
    
    //change prices per phone 
    let selectedphone = "";
    let selectedprice = 0;
    switch (phone) {
        case "iphone":
           selectedphone = "I-phone 16"
            selectedprice = 145000;
            break ;
        case "samsung":
             selectedphone = "samsung s25 ultra";
             selectedprice = 100000;
             break;
        case "techno":
             selectedphone = "Tecno camon 40 ";
             selectedprice = 100000;
             break;
        case "infinix":
             selectedphone = "infinix hot 50";
             selectedprice = 100000;
             break;
        case "oppo":
             selectedphone = "oppo find X7";
             selectedprice = 800000;
             break;
        case "oneplus":
             selectedphone = " one plus 12pro";
             selectedprice = 95000;
             break;
        default :
             selectedphone = "unknown";
             selectedprice = 0;
             break;
        
        
    }
    
document.getElementById('formprice').textContent = "Price: Ksh " + selectedprice;
document.getElementById('formphone').textContent = "Phone: " + selectedphone;
}
//dropdown price change 



//hide 
function closeform() {
    document.getElementById("oder-form").style.display = "none";
    
}
function validateform(e){
    
    const accnumber = document.getElementById('number').value;
    const  cmf = document.getElementById('conf');
    
    if (accnumber.length === 10 ) {
     //   addEventListener(  "DOMContentLoaded",   ()   => {})
        alert('yes')
         const confmsg = document.getElementById('confirm-msg');
    confmsg.style.display= 'flex';
        cost()
       // document.getElementById('conf').style.display = "flex";
        return true;
        
    } else {
        alert('th');
        return false;
        
    }
    
}
// update prices
//document.getElementById('formprice').textContent = selectedprice.value;
//document.getElementById('formphone').textcontent = selectedphone.value;

//scripts for profile

//count down scripts 
                                                                                                                               
document.addEventListener('DOMContentLoaded', function()  { 

 let endtime = localStorage.getItem('countdownend')   
 if (!endtime) {

  endtime = new Date().getTime() +5  * 60 * 1000 ;
  localStorage.setItem('countdownend', endtime);
  
} else {
    endtime = Number(endtime);
}

const countdown = document.getElementById('countdown');

const timer = setInterval(()  => {
    const now = new Date().getTime();
    const distance = endtime - now ;
    if (distance <= 0) {
        clearInterval(timer);
        countdown.innerText = "time is up";
        
        return;
    }
    let minutes = Math.floor(distance / 600000)
    const seconds = Math.floor((distance % 60000) / 1000);
    countdown.innerText =  String(minutes).padStart(2, '0') + ":" + 
    String(seconds).padStart(2, '0') ;

     console.log(minutes, seconds);
     if ( minutes == 5 ) {

     }
}, 1000) ;
  
  });

//complete cost
function cost() 
{
    const confmsg = document.getElementById('confirm-msg');
    confmsg.style.display= 'flex';
   // closeform()
   // setTimeout(()  => {
     //   confmsg.style.display='none';
//    },1000)
}
