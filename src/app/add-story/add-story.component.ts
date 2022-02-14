import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.css']
})
export class AddStoryComponent implements OnInit {
storyForm:any={};
generalStory:string= 'GENERAL STORY';
empireStory:string= 'EMPIRE STORY';
federationStory:string= 'FEDERATION STORY';
unionStory:string= 'UNION STORY';
conclusionStory:string= 'CONCLUSION STORY';
empireButton:string= 'EMPIRE';
federationButton:string= 'FEDERATION';
unionButton:string= 'UNION';
isSubmitted:boolean= false;


constructor( public http:HttpClient) { }
 
  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.storyForm);
   this.http.post('http://localhost:5000/forums/add-forum', this.storyForm).subscribe(data=>{
  console.log(data);
  this.isSubmitted=true;
  
})
    
  }

  addItem(event:string){ 
    this.isSubmitted=false;
     this.storyForm={...this.storyForm,...JSON.parse(`${event}`)}
    
  }
}
