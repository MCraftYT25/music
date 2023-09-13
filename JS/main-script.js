const VERSION = "1.1";
const VERSIONDATE = "2023-09-13"
const YEAR = "2023";
const COMPANY = "VSK1 GmbH";

main();

function main() 
{
    document.getElementById('footer').innerText = COMPANY + " " + YEAR + " " + "V" + VERSION;
}

let x = 0;

function chgcolor()
{
    if(x == 0)
    {
        document.body.style.setProperty("--main-color", "#333");
        document.body.style.setProperty("--bg-color", "#333");
        document.body.style.setProperty("--font-color", "rgb(253,217,141)");
        x = x + 1;
    } else {
        document.body.style.setProperty("--main-color", "rgb(253,217,141)");
        document.body.style.setProperty("--bg-color", "rgb(253,217,141)");
        document.body.style.setProperty("--font-color", "black");
            
        x = x - 1;
    }      
}
