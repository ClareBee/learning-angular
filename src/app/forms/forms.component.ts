import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { disableHover } from '../utils/utils';
console.log('utils', disableHover)

class Doggo {
 constructor(
   public petName: string,
   public officialName: string,
   public rating?: number,
 ) {  }
}
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  // properties for template form
  ratings = [...Array(10).keys()];

  doggo = new Doggo('BooBoo', 'Buster', 8);

  submitted = false;

  onSubmit() { this.submitted = true; }

  newDoggo() {
    this.doggo = new Doggo('', '', 0);
  }

  // TODO: for development, allows you to spy on submitted values
  get diagnostic() { return JSON.stringify(this.doggo); }

  reactiveMarkdown = `myReactiveForm = new FormGroup({
    rating: new FormControl(''),
    name: new FormGroup({
      petName: new FormControl(''),
      officialName: new FormControl(''),
    })
  });`
  builderMarkdown = `myReactiveFormBuilder = this.myFormBuilder.group({
    rating: [''],
    name: this.myFormBuilder.group({
      petName: [''],
      officialName: ['']
    })
  });


constructor(private myFormBuilder: FormBuilder) { }`
  myReactiveForm = new FormGroup({
      rating: new FormControl(''),
      name: new FormGroup({
        petName: new FormControl(''),
        officialName: new FormControl(''),
      })
    });

  myReactiveFormBuilder = this.myFormBuilder.group({
    rating: [''],
    name: this.myFormBuilder.group({
      petName: [''],
      officialName: ['']
    })
  });

  constructor(private myFormBuilder: FormBuilder){ }
  ngOnInit(){
    disableHover();
  }
}
