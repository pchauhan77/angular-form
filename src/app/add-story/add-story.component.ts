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
constructor( public http:HttpClient) { }
 
  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.storyForm);
this.http.post('http://localhost:5000/form', this.storyForm).subscribe(data=>{
  console.log(data);
  
})
    
  }
}
