import { Component, AfterViewChecked } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
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

  constructor(private myFormBuilder: FormBuilder) { }

}
