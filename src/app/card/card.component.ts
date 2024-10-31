import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  
  produtos:string[] = []
  
  constructor(){
    this.produtos = [
      "mouse",
      "teclado",
      "tela"
    ]
  }
  
  ngOnInit(): void {
  }

  adicionar(){
    this.produtos.push("eder")
  }
  remover(){
    this.produtos.pop();
  }
}


