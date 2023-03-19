import { ProgressSpinnerService } from './core/components/progress-spinner/progress-spinner/services/progress-spinner.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-template';
  /**
   *
   */
  constructor(private spinner:ProgressSpinnerService,
    private toast:ToastrService) {
    
  }
  ngOnInit(): void {
    
  }
}
