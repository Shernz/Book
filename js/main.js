function userName()//index page
{
    var user = prompt("Your name?");
    if (user!=null)
    {
        document.getElementById("welcome").innerHTML = user+"!"+" Welcome to this page.!";
    }
    else
    {
        document.getElementById("welcome").innerHTML = "invalid name";
    }
}
//amish
function flip(imageId)
{
    var imagePath = document.getElementById(imageId).src;
    var imageName = imagePath.split('/');
    var covers={'Shiva_Meluha.jpg':'meluha_b.jpg','Shiva-Naga.jpg':'nagaB.jpg',
                'Shiva_Vayuputra.jpg':'vayuB.jpg','Ram_ikshvaku.jpg':'ramB.jpg','Ram_sita.jpg':'sitaB.jpg'};
    var cover;
    for ( cover in covers)
    {
        if (imageName[imageName.length-1] == cover)
        {
            document.getElementById(imageId).src = "img/"+covers[cover];
        }
        if (imageName[imageName.length-1] == covers[cover])
        {
            document.getElementById(imageId).src = "img/"+cover;
        }
    }
}

function confirmHome()
{
    if (confirm("Are you sure you want to quit?"))
    {
        window.location.href="index.html";
    }                   
}
