var siteName=document.getElementById("siteName");
var URL=document.getElementById("siteURL");
var tablez=document.getElementById("myTable")
var NameRegex=/^\w{3,}$/;
var URLRegex=/^\w+\.com$/;
var MSG=document.getElementById("MSG");
var WebList=[];
if(localStorage.getItem("Sites"))
{
   WebList=JSON.parse(localStorage.getItem("Sites"))
    UpdateInterface();
}
function CheckSiteName()
{
    if(NameRegex.test(siteName.value))
    {
        siteName.classList.add("is-valid")
        siteName.classList.remove("is-invalid")
        return true;
    }
    else{
        siteName.classList.add("is-invalid")
        siteName.classList.remove("is-valid")
        return false;
    }
}
function CheckURL()
{
    if(URLRegex.test(URL.value))
    {
        URL.classList.add("is-valid")
        URL.classList.remove("is-invalid")
        return true;
    }
    else{
        URL.classList.add("is-invalid")
        URL.classList.remove("is-valid")
        return false;
    }
}
function Add()
{
if(CheckSiteName()&&CheckURL())
{
var site={
name:siteName.value,
URL:URL.value
}
WebList.push(site);
localStorage.setItem("Sites",JSON.stringify(WebList));
UpdateInterface();
}
else
{
MSG.classList.remove("d-none");
MSG.classList.add("d-flex");
}
}
if(MSG.classList.contains("d-flex"))
{

}
function UpdateInterface()
{
    siteName.value="";
    URL.value=""
var tabler="";
for(var ii=0;ii<WebList.length;ii++)
{
tabler+=`
<tr>
<td>${ii+1}</td>
<td>${WebList[ii].name}</td>
<td>
<a href="https://${WebList[ii].URL}"target="_blank" class="btn py-2 px-3 btn-warning">Visit</a>
</td>
<td><button class="btn py-2 px-3 bg-danger" onclick="Delete(${ii})">delete</button></td>
</tr>`
}
tablez.innerHTML=tabler;
console.log("DONE")
}
function Delete(z)
{
WebList.splice(z,1);
localStorage.setItem("Sites",JSON.stringify(WebList));
UpdateInterface();
}
function removeMSG() {
    MSG.classList.add("d-none");
    MSG.classList.remove("d-flex");
  }
  MSG.addEventListener("click", removeMSG);
