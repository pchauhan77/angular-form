import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddStoryComponent } from './add-story/add-story.component';
import { AddStorySubgroupComponent } from './add-story-subgroup/add-story-subgroup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddButtonsComponent } from './add-buttons/add-buttons.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AddStoryComponent,
    AddStorySubgroupComponent,
    AddButtonsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
