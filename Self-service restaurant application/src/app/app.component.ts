import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {korpaProizvod, Proizvod, Proizvodi} from "./ListeProizvoda";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.obojifig(1);
  }
  title = 'Self-service restaurant app';
  trenutnaLista: Proizvod[] = Proizvodi.listaAkcija;
  korpa: korpaProizvod[] = [];
  pretraga="";
  trenutno = "akcijski";
  obojifig(id:number) {
    let Elementi = document.getElementsByTagName('figure');
    // @ts-ignore
    for(let x of Elementi) {
      x.style.border ="1px solid rgb(243,168,60)";
    }
    setTimeout(()=>{
      // @ts-ignore
     Elementi[id-1].style.border ="6px solid rgb(243,168,60)";
    },50);
  }
  boldirajIzabrane() {
    let elementi = document.getElementsByClassName("proizvod");
    // @ts-ignore
    for(let x of elementi) {
      if(this.korpa.filter(p=>p.id == x.id.substring(8,x.id.length)).length!=0){
        x.style.border ="5px solid rgb(243,168,60)";
      }
      else {
        x.style.border ="2px solid rgb(243,168,60)";
      }
    }
  }

  otvoriAkcijske() {
    this.trenutno = "akcijski";
    this.obojifig(1);
    this.trenutnaLista = Proizvodi.listaAkcija;
    let elementi = document.getElementsByClassName("slika-proizvoda");
    // @ts-ignore
    document.getElementById("nutritivna_slika").style.width = "180px";
    setTimeout(()=>{
      this.boldirajIzabrane();
      // @ts-ignore
      for(let x of elementi) {
        x.style.width="100%";
      } },50);
  }

  IzracunajCijenu() {
    let cijena = document.getElementById("ukupna_cijena");
    let bezPDV = document.getElementById("cijena_bez_pdv");
    let pdv = document.getElementById("pdv");
    let ukupna =0;
    for(let x of this.korpa) {
      // @ts-ignore
      ukupna+= x.kolicina * x.cijena;
    }
    // @ts-ignore
    cijena.innerHTML = ukupna.toFixed(2) +" KM";
    // @ts-ignore
    bezPDV.innerHTML = (ukupna- ukupna*0.17).toFixed(2) + " KM";
    // @ts-ignore
    pdv.innerHTML = (ukupna*0.17).toFixed(2) +" KM";


  }
  istakniProizvod(id:number) {
    let parent = document.getElementById(String("proizvod"+id));
    // @ts-ignore
    if(this.korpa.filter(p=> p.id ==id ).length==0 ) {
    // @ts-ignore
    parent.style.border = "5px solid rgb(243,168,60)";
    let element = this.trenutnaLista.filter(p=>p.id == id)[0];
      this.korpa.push({
      // @ts-ignore
      id:element.id,
      // @ts-ignore
      naziv: element.nazivProizvoda,
      // @ts-ignore
      cijena: element.cijena,
        kolicina:1
    });
  }
    else {
      // @ts-ignore
      parent.style.border = "2px solid rgb(243,168,60)";
      // @ts-ignore
     this.korpa = this.korpa.filter(p=> p.id !=id);
    }
    this.IzracunajCijenu();
  }

  povecaj(element:korpaProizvod) {
    if(element.kolicina !=9) {
      element.kolicina+=1
      this.IzracunajCijenu();
    }

  }
  smanji(element:korpaProizvod) {
    if(element.kolicina !=1) {
      element.kolicina-=1
    }
    else if(element.kolicina ==1) {
      this.korpa= this.korpa.filter(p=>p.id!=element.id);
    }
    setTimeout(()=>{
    this.boldirajIzabrane(); },50);
    this.IzracunajCijenu();
  }


  otvoriNutritivne(x: Proizvod) {
    // @ts-ignore
    document.getElementById("sakrij").style.display="block";
    // @ts-ignore
    document.getElementById("nutritivna_naziv").innerHTML = x.nazivProizvoda;
    // @ts-ignore
    document.getElementById("nutritivna_slika").src = x.slika
    // @ts-ignore
    document.getElementById("dodaci").innerHTML = x.nutritivneVrijednosti.Dodaci;
    // @ts-ignore
    document.getElementById("kalorije").innerHTML = x.nutritivneVrijednosti.Kalorije.toFixed(1) +" kcal";
    // @ts-ignore
    document.getElementById("ugljikohidrati").innerHTML = x.nutritivneVrijednosti.Ugljikohidrati.toFixed(2) +" g";
    // @ts-ignore
    document.getElementById("proteini").innerHTML = x.nutritivneVrijednosti.Proteini.toFixed(1) +" g";
    // @ts-ignore
    document.getElementById("masti").innerHTML = x.nutritivneVrijednosti.Masti.toFixed(1) +" g";
    // @ts-ignore
    document.getElementById("nutritivne-div").style.display="block";

  }

  zatvoriNutritivne() {
    // @ts-ignore
    document.getElementById("nutritivne-div").style.display="none";
    // @ts-ignore
    document.getElementById("sakrij").style.display="none";
  }
  otvoriPica() {
    this.trenutno="pica";
    this.obojifig(6);
    this.trenutnaLista = Proizvodi.listaPica;
    let elementi = document.getElementsByClassName("slika-proizvoda");
    // @ts-ignore
    document.getElementById("nutritivna_slika").style.width = "100px";
    // @ts-ignore
    setTimeout(()=>{
      this.boldirajIzabrane();
      // @ts-ignore
    for(let x of elementi) {
      x.style.width="60%";
    } },50);
  }

  otvoriBurgere() {
    this.trenutno="burgeri";
    this.obojifig(2);
    this.trenutnaLista = Proizvodi.listaBurgera;
    let elementi = document.getElementsByClassName("slika-proizvoda");
    // @ts-ignore
    document.getElementById("nutritivna_slika").style.width = "180px";
 setTimeout(()=>{
     this.boldirajIzabrane();
      // @ts-ignore
      for(let x of elementi) {
        x.style.width="100%";
      } },50);

  }

  otvoriTortilje() {
    this.trenutno="tortilje";
    this.obojifig(3);
    this.trenutnaLista = Proizvodi.listaTortilja;
    let elementi = document.getElementsByClassName("slika-proizvoda");
    // @ts-ignore
    document.getElementById("nutritivna_slika").style.width = "180px";
    setTimeout(()=>{
      this.boldirajIzabrane();
      // @ts-ignore
      for(let x of elementi) {
        x.style.width="100%";
      } },50);
  }
  otvoriPomfrite() {
    this.trenutno="pomfriti";
    this.obojifig(4);
    this.trenutnaLista = Proizvodi.ListaPomfriti;
    let elementi = document.getElementsByClassName("slika-proizvoda");
    // @ts-ignore
    document.getElementById("nutritivna_slika").style.width = "180px";
    setTimeout(()=>{
      this.boldirajIzabrane();
      // @ts-ignore
      for(let x of elementi) {
        x.style.width="100%";
      } },50);
  }
  otvoriKolace() {
    this.trenutno="kolaci";
    this.obojifig(5);
    this.trenutnaLista = Proizvodi.listaKolaca;
    let elementi = document.getElementsByClassName("slika-proizvoda");
    // @ts-ignore
    document.getElementById("nutritivna_slika").style.width = "100px";
    setTimeout(()=>{
      this.boldirajIzabrane();
      // @ts-ignore
      for(let x of elementi) {
        x.style.width="60%";
      } },50);
  }
  pretraziArtikle() {
    if(this.pretraga=="") {
      if(this.trenutno=="akcijski") {
        this.trenutnaLista= Proizvodi.listaAkcija;
      }
      else if (this.trenutno=="burgeri") {
        this.trenutnaLista= Proizvodi.listaBurgera;
      }
      else if (this.trenutno == "tortilje") {
        this.trenutnaLista = Proizvodi.listaTortilja;
      }
      else if(this.trenutno =="pomfriti") {
        this.trenutnaLista = Proizvodi.ListaPomfriti;
      }
      else if(this.trenutno == "kolaci") {
        this.trenutnaLista = Proizvodi.listaKolaca;
      }
      else {
        this.trenutnaLista = Proizvodi.listaPica;
      }

      setTimeout(()=> {this.boldirajIzabrane();},50);
      return;
    }
    let lista :any[] = [Proizvodi.ListaPomfriti,Proizvodi.listaTortilja, Proizvodi.listaBurgera,
    Proizvodi.listaAkcija, Proizvodi.listaPica,Proizvodi.listaKolaca];
    let pretragaLista :Proizvod[] = [];
    for(let i =0; i<lista.length; i++) {
      for(let j =0; j<lista[i].length;j++) {
        if(lista[i][j].nazivProizvoda.toLowerCase().includes(this.pretraga.toLowerCase())){
          pretragaLista.push(lista[i][j]);
        }
      }
    }
     this.trenutnaLista = pretragaLista;
     setTimeout(()=> {this.boldirajIzabrane();},50);
  }

  otvoriPlacanje() {
    if(this.korpa.length ==0) {
      alert("Vaša korpa je prazna!");
      return;
    }
    // @ts-ignore
    document.getElementById("pregled-korpe").style.display="none";
    // @ts-ignore
    document.getElementById("placanje-dialog").style.display="block";
  }

  zatvoriPlacanje() {
    // @ts-ignore
    document.getElementById("placanje-dialog").style.display="none";
    // @ts-ignore
    document.getElementById("pregled-korpe").style.display="block";
  }

  otvoriRB() {
    // @ts-ignore
    document.getElementById("placanje-dialog").style.display ="none";
    // @ts-ignore
    document.getElementById("redni-broj").style.display ="block";
    // @ts-ignore
    document.getElementById("sakrij").style.display="block";
    let brojac =5;
    // @ts-ignore
    document.getElementById("redni-broj-value").innerHTML = Math.floor(Math.random()*100)+1;
    // @ts-ignore
    document.getElementById("sekunde").innerHTML =brojac.toString();
    setInterval(()=>{
      brojac--;
      // @ts-ignore
      document.getElementById("sekunde").innerHTML =brojac.toString();
      if(brojac==0) {
        location.reload();
      }
    },1000);
  }

  ocistiKorpu() {
    this.korpa = [];
    setTimeout(()=> {this.boldirajIzabrane();},50);
    this.IzracunajCijenu();
    // @ts-ignore
    document.getElementById("komentar").value="";
  }
  sortirajPoCijeni() {
    this.trenutnaLista = this.trenutnaLista.slice().sort((a,b) => a.cijena - b.cijena);
  }
  sortirajPoAbecedi(){
    this.trenutnaLista = this.trenutnaLista.slice().sort((a,b) => a.nazivProizvoda.localeCompare(b.nazivProizvoda));
  }
  otvoriKorpu() {
    if(this.korpa.length ==0) {
      alert("Vaša korpa je prazna!");
      return;
    }
    let ukupna =0;
    for(let x of this.korpa) {
      // @ts-ignore
      ukupna+= x.kolicina * x.cijena;
    }
    // @ts-ignore
    document.getElementById("ukupna").innerHTML = ukupna.toFixed(2) +" KM";
    // @ts-ignore
    document.getElementById("bez_pdv").innerHTML = (ukupna- ukupna*0.17).toFixed(2) + " KM";
    // @ts-ignore
    document.getElementById("pdv-iznos").innerHTML = (ukupna*0.17).toFixed(2) +" KM";
    // @ts-ignore
    document.getElementById("pdv_stopa").innerHTML = "17%";
    //@ts-ignore
    document.getElementById("pregled-korpe").style.display ="block";
    // @ts-ignore
    document.getElementById("sakrij").style.display="block";
  }

  zatvoriPregledKorpe() {
    //@ts-ignore
    document.getElementById("pregled-korpe").style.display ="none";
    // @ts-ignore
    document.getElementById("sakrij").style.display="none";
  }
}
// @ts-ignore
