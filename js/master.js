// Add Class On The Current Link
let currentLink = location.href;
let menu = document.querySelectorAll("a")
for(let i = 0; i < menu.length; i++)
{
    if(menu[i].href === currentLink)
        menu[i].className = "active";
}