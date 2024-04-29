import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioComponent } from './radio.component';
import { By } from '@angular/platform-browser';
import { Radio } from './radio';

describe('RadioComponent', () => {
  let component: RadioComponent;
  let fixture: ComponentFixture<RadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadioComponent); // creamos el componente
    component = fixture.componentInstance; // instanciamos clase == new Component
    fixture.detectChanges();  // nos saca el html para no es accesible de momento 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Should show radio singular title', () => {
    it(`title property should be, radiosingulars`, () => {
      expect(component.title).toBe('radiosingulars')
    })

    it (`should show radio singular h1`, () => {
      const h1 = fixture.nativeElement.querySelector('h1');// nativeElement == document (javascript)
      const title = 'radiosingulars';
      expect(h1.textContent).toBe(title);   
    })
  } )
  describe('should search radio station by name', () => {

    it("should have an input with the placeholder,'Escribe el nombre de la emisora'", () =>{
      const placeholder = fixture.nativeElement.querySelector('input').placeholder;
      const valuePlaceholder = 'Escribe el nombre de la emisora';
      expect(placeholder).toBe(valuePlaceholder);
    })
    it('should have a button with the name search', () => {
      const buttonText = fixture.nativeElement.querySelector('#searchButton').textContent;
      const buttonTextValue = 'search';
      expect(buttonText).toBe(buttonTextValue);
    })

    it('searchbutton should search only once', ()=>{
      const searchRadioSpy = jest.spyOn(component,'searchRadio') 
      // creo el espía (mock de searchradio)
      const button = fixture.debugElement.query(By.css('#searchButton')); 
      // traigo el botón
      button.triggerEventHandler('click', null); 
      //simulamos el evento de click
      expect(searchRadioSpy).toHaveBeenCalledTimes(1);
    })

  })

  describe("Radio station list", () => {
    it('should exist a radio station list', () => {
      const radioStationList = fixture.nativeElement.querySelector('ul');
      console.log(radioStationList);
      expect(radioStationList).not.toBeNull();
    })

    it('radio station list should inicialize void', () =>{
      const liArray = fixture.nativeElement.querySelectorAll('li');
      expect(liArray.length).toBe(0);  // no hay elementos <li> dentro de <ul>
    })

    it ('If a succesful search is done, should return at list one result', () =>{
      const searchRadioSpy = jest.spyOn(component,'searchRadio').mockImplementation(()=>{
        component.filterArray = component.radioStation.filter((radio:Radio)=>{
            return radio.name.includes('t');
        })
      });
      const liArray = fixture.nativeElement.querySelectorAll('li');
      const button = fixture.debugElement.query(By.css('#searchButton'));
      //const input = fixture.debugElement.query(By.css('input'));
      //input.triggerEventHandler('keyup','teletaxi');
      //component.inputValue = 'teletaxi';
      button.triggerEventHandler('click', null);
      component.radioStation = [{
        name: "Test",
        url: "test",
        country: "test"
      }]
      fixture.detectChanges(); //vuelva a renderizar la pantalla con list items
     expect(liArray.length).toBeGreaterThan(0);

     //expect(searchRadioSpy).toHaveBeenCalledTimes(1);
      

    })

  })

});
