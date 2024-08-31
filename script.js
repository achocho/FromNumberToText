function Set(){
let N=document.getElementById("N").value;

let NumText=N.toString();
let NLen=NumText.length;

let Once = ["One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];

let teens=["Eleven","Twelve","Thirteen","Fourteen","FIvteen","Sixteen","Seventeen","Eighteen","Nineteen"];

let tens=["Ten","Twenty","Thirty","Fourty","Fivty","Sixty","Seventy","Eighty","Ninety"];

let decl=["Thousand","Million","Billion"];

output="";
let tempParts=[];
let temp="";
for(let i =NLen-1;i>=0;i--)
{
temp+=NumText[i];
if(temp.length==3)
{
tempParts.push(temp);
temp="";
}
}
if(temp.length!=3 && temp!='')
{
tempParts.push(temp);
}
let Parts=[];
temp="";
for(let i=0;i<tempParts.length;i++)
{
for(let j=tempParts[i].length-1;j>=0;j--)
{
temp+=tempParts[i][j];
}
Parts.push(temp);
temp="";
}
for(let i=Parts.length-1;i>=0;i--){
if(Parts[i].length==3){
output+=Once[parseInt(Parts[i][0])-1]+" Hundred ";
let temNum="";
temNum+=Parts[i][1];
temNum+=Parts[i][2];
if(parseInt(temNum)<20 && parseInt(temNum)>10){
output+="and "+teens[parseInt(Parts[i][2])-1];
}else{
if(Parts[i][1] !="0" && Parts[i][2]!=0){
output+=tens[parseInt(Parts[i][1])-1]+" ";
output+=Once[parseInt(Parts[i][2])-1]+" ";
}
else if(Parts[i][1] =="0" && Parts[i][2]!=0)
{
output+="and "+Once[parseInt(Parts[i][2])-1]+" ";
}else if(Parts[i][1] !="0" && Parts[i][2]==0)
{
output+="and "+tens[parseInt(Parts[i][1])-1]+" ";
}
}
}else if(Parts[i].length==2)
{
output+=tens[parseInt(Parts[i][0])-1]+" ";
output+=Once[parseInt(Parts[i][1])-1]+" ";

}else
{
output+=Once[parseInt(Parts[i][0])-1]+" ";
}
if(i>0)
{
output+=decl[i-1]+" and ";
}
}
document.getElementById("output").innerText=output;
}

