import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   
  public valor:string;
  public urlVideo:string="";


  constructor(public navCtrl: NavController) {
    this.valor = "";
    
    
  }

outracoisa(e){

  this.urlVideo = this.valor;
  this.urlVideo = "http://lb.kstream.org/vod/serie/Riverdale/classic_18452.mp4/video.m3u8?token=162e41fbdb3389b0fbcd1d6b636f7268";

  document.getElementById("tela").innerHTML='<video width="80%" controls ><source src="'+this.urlVideo+'" ></video>';


}

teste(e){
  alert('dfdfdfd');
this.criarConta();


}
criarConta(){
try{
  var tagDate;
tagDate = "Josaga" + new Date().getTime();
var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 ) {
      alert(this.responseText);}
 }; 

 var args = "acao=salvar&k=9ADVXhVOVVmaSt2VzhWbh9EdtdFdxATYXFzVUdXTtVmTGRVUxxmROpmUrRlc1AjUhBXbUhUNFVmSKR1V&"+"nome="+tagDate+"&email="+tagDate+"@uber-mail.com"+"&plano=8";
   xhttp.open("POST", "http://cliente.kudaplay.tv/gerador", true);
   xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
   xhttp.send(args);
   
   }catch(e){
alert(e.message);
}
     
  }
 




}
