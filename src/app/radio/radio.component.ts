import { Component, OnInit } from '@angular/core';
import radios from '../data/data.json' ;
import { Radio } from './radio';
import { FormsModule } from '@angular/forms';

//importamos el json:
// lee un json y lo convierte en un objeto y le pone el nombre que le pongamos (radios)

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss'
})
export class RadioComponent implements OnInit{
  //this: accedemos a una propiedad de la clase
  title = 'radiosingulars'; //inferencia de tipos: ya que le hemos dado el value a la propiedad typescript ya interpreta el tipo de dato.
  valuePlaceholder = 'Escribe el nombre de la emisora';
  buttonTextValue = 'search';
  radioStation:Radio[] = [];
  inputValue!:string;
  filterArray!:Radio[];
  ngOnInit():void{
    this.radioStation = radios;

  }
  searchRadio(){
    console.log(this.inputValue);
    this.filterArray = this.radioStation.filter((radio:Radio)=>{
      return radio.name.includes(this.inputValue);
    })
    // otra posibilidad es quitar "}" para evitar el return

  }

}
