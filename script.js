function light(value)
{
    var pic;
    if(value==0)
     {pic="pic_bulboff.gif";
     }
     else
     {pic="pic_bulbon.gif";
     }
     document.getElementById(`bulb`) .src=pic;
}