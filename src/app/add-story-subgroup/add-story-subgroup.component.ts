import { Component, OnInit } from '@angular/core';
import { Output,Input, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-add-story-subgroup',
  templateUrl: './add-story-subgroup.component.html',
  styleUrls: ['./add-story-subgroup.component.css']
})
export class AddStorySubgroupComponent implements OnInit {
  storyForm:any={};
  @Input() headerType='';
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  addNewItem(value: string) {
    if(this.headerType=='GENERAL STORY'){
      this.storyForm.general_title=this.storyForm.title;
      this.storyForm.general_message=this.storyForm.mymessage;
      this.storyForm.general_win1= this.storyForm.win1
      this.storyForm.general_win2= this.storyForm.win2
    }
    else if(this.headerType=='EMPIRE STORY'){
      this.storyForm.empire_title=this.storyForm.title;
      this.storyForm.empire_message=this.storyForm.mymessage;
      this.storyForm.empire_win1= this.storyForm.win1
      this.storyForm.empire_win2= this.storyForm.win2
    }
    else if(this.headerType=='FEDERATION STORY'){
      this.storyForm.federation_title=this.storyForm.title;
      this.storyForm.federation_message=this.storyForm.mymessage;
      this.storyForm.federation_win1= this.storyForm.win1
      this.storyForm.federation_win2= this.storyForm.win2

    }
    else if(this.headerType=='UNION STORY'){
      this.storyForm.union_title=this.storyForm.title;
      this.storyForm.union_message=this.storyForm.mymessage;
      this.storyForm.union_win1= this.storyForm.win1
      this.storyForm.union_win2= this.storyForm.win2

    }
    else if(this.headerType=='CONCLUSION STORY'){
      this.storyForm.conclusion_title=this.storyForm.title;
      this.storyForm.conclusion_message=this.storyForm.mymessage;
      this.storyForm.conclusion_win1= this.storyForm.win1
      this.storyForm.conclusion_win2= this.storyForm.win2

    }
    this.newItemEvent.emit(JSON.stringify(this.storyForm))
  }

}
