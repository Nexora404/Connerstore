//search bar
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
        alert('paymt'+ {accnumber});
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
