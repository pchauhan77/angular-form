import { Component, OnInit } from '@angular/core';
import { Output, Input, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-add-buttons',
  templateUrl: './add-buttons.component.html',
  styleUrls: ['./add-buttons.component.css']
})
export class AddButtonsComponent implements OnInit {

  storyForm:any={};
  @Input() headerType='';
  @Output() newItemEventButton = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
    addNewItem(value: string) {
      if(this.headerType=='EMPIRE'){
        this.storyForm.empire_first_button=this.storyForm.first_button;
        this.storyForm.empire_second_button=this.storyForm.second_button;
      }
      else if(this.headerType=='FEDERATION'){
        this.storyForm.federation_first_button=this.storyForm.first_button;
        this.storyForm.federation_second_button=this.storyForm.second_button;
      }
      else if(this.headerType=='UNION'){
        this.storyForm.union_first_button=this.storyForm.first_button;
        this.storyForm.union_second_button=this.storyForm.second_button;
      }

    this.newItemEventButton.emit(JSON.stringify(this.storyForm))
  }
}
