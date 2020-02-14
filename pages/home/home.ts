import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   
  public valor:string;
  public urlVideo:string="";
  public lastVideo:HTMLVideoElement;

  constructor(public navCtrl: NavController) {
    this.valor = "";
    this.lastVideo =document.createElement('video');
    
  }

outracoisa(e){

  this.urlVideo = this.valor;
  this.urlVideo = "http://lb.kstream.org/vod/serie/Riverdale/classic_18452.mp4/video.m3u8?token=162e41fbdb3389b0fbcd1d6b636f7268";

 /* if (this.lastVideo && this.lastVideo.) {
         this.lastVideo.stop(); //Para o video anterior
    }*/

    var video = document.createElement('video');

    video.src = this.urlVideo;
    video.autoplay = true;

    var videoContainer = document.querySelector("#tela");

    videoContainer.innerHTML = ""; //Limpa elementos dentro do container ou video anterior

    videoContainer.appendChild(video);

    this.lastVideo = video; //Define para poder ser parado se trocar de video
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
