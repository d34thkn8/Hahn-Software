import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InfoComponent } from './info/info.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ParameterFinderComponent } from './parameter-finder/parameter-finder.component';
import { ChatComponent } from './chat/chat.component';
import { CopyToolComponent } from './copy-tool/copy-tool.component';
@NgModule({
  declarations: [
    HomeComponent,
    InfoComponent,
    ParameterFinderComponent,
    ChatComponent,
    CopyToolComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FlexLayoutModule,
    MatExpansionModule
  ]
})
export class MainModule { }
