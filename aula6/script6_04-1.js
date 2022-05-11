var uf,i,msg;
msg="";
uf=["SP","RJ","SC","MG"];
//   VI  COND  CONT
for(i=0;i<=3;i++){
   msg+=uf[i]+" ";
}
document.querySelector("#dv1").innerHTML=msg;
// +" "+uf[i]+"<br>"