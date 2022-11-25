for(var i = 0; i < 5; i++){
    document.write("★");
}
document.write("<br><br>");

for(var j = 0; j < 2; j++){
    for(var i = 0; i < 3; i++){
        document.write("★");
    }
    document.write("<br>");
}
document.write("<br>");

for(var j = 0; j < 4; j++){
    for(var i = 0; i < 5; i++){
    document.write("★");
    }
    document.write("<br>"); 
}
document.write("<br>");

for(var j=0; j < 3; j++){
    for(var i = 0; i < 3; i++){
        if(i % 2 == 0){
            document.write("★");
        }else{
            document.write("☆");
        }
    }
    document.write("<br>");
}
document.write("<br>");

for(var j=0; j < 4; j++){
    for(var i = 0; i < 5; i++){
        if(i % 2 == 0){
            document.write("★");
        }else{
            document.write("☆");
        }
    }
    document.write("<br>");
}
document.write("<br>");

for(var i = 1; i <= 5; i++){
    for(j = 1; j <= i; j++){
        document.write("★");
    }
    document.write("<br>");
}
document.write("<br>");

function circArea(rad){
    return rad*rad*3.14;
}
document.write(circArea(5) + "<br>");
document.write(circArea(7) + "<br>");
document.write(circArea(10) + "<br>");

document.write("<br>");

function yuuenPrice(grp, a, c, aPrice = 500, cPrice = 200){
    document.write(grp + "グループの合計金額は" + (a*aPrice + c*cPrice) + "円です。<br>");
}
yuuenPrice("A",2,4);
yuuenPrice("B",1,5);
yuuenPrice("C",3,7);

document.write("<br>");

for(var i = 0; i < 5; i++){
    for(var j = 0; j < 5; j++){
        if((i+j) % 2 == 0){
            document.write("★");
        }else{
            document.write("☆");
        }
    }
    document.write("<br>");
}

document.write("<br>");

for(var i = 0; i < 5; i++){
    for(var j = 0; j < 5; j++){
        if(i==j){
            document.write("☆");
        }else{
            document.write("★");
        }
    }
    document.write("<br>");
}

document.write("<br>");

for(var i = 1; i <= 5; i++){
    for(j = 1; j <= i; j++){
        if(i == j){
            document.write("☆");
        }else{
            document.write("★");
        }
    }
    document.write("<br>");
}