let r = document.querySelectorAll('input[type=radio]');
for (var i = 0; i < r.length; i += 5){
    if(i % 2 == 0){
        r[i].checked = true;
    }else{
        r[i].checked = true;
    }
}
document.forms["form1"].submit();
