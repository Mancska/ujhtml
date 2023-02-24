window.addEventListener("load", init)
function init(){
const Tartalomelem=document.getElementById("tartalom")
console.log(Tartalomelem)
const tartalommaskep=document.querySelectorAll("#tartalom")
const tartalommaskep1 =document.getElementsByClassName(",taart")
const tartalommaskep2 =document.getElementsByClassName(".taart")
const tartalomelemek = document.querySelectorAll(".taart")

let szoveg =""

let kajak=["milanoi","palacsinta","kenyér lángos"];

tartalomelemek[1].innerHTML=szoveg+"<ul>"
let kepek=["<img src='Mancska_steampunk_mechanic_wolf_his_body_made_of_cogs_and_steel_0f0718b2-8dec-445e-96a4-49511149c724.png' alt='kutya'width='500px'>","<img src='Mancska_schrodingers_cat_peek_out_of_the_box_1a8dda8a-3d89-45ec-a1b0-f87e7aa97811.png' alt='kutya' width='500px'>","<img src='Mancska_ww_II_panda_soldier_in_the_battlefront_polaroid_552e71e4-b43c-4598-8e93-c347f189ae0b.png' alt='kutya' width='500px'>"]
function kiir(kajak){
    for (let index = 0; index < kajak.length; index++) {
    szoveg+="<li>"+kajak[index]+"</li>"+kepek[index];
 }

}}