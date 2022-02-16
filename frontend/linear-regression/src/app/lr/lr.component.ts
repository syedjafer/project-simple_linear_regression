import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/services/api.service';

@Component({
  selector: 'app-lr',
  templateUrl: './lr.component.html',
  styleUrls: ['./lr.component.css']
})
export class LrComponent implements OnInit {
  x_val_line: any = [];
  y_val_line: any = [];

  x_scatter: any = [];
  y_scatter: any = [];

  experience :any;

  public graph: any = {
    data: [
        { x: this.x_scatter, y: this.y_scatter, type: 'scatter',  marker: {color: 'red'} },
        { x: this.x_val_line, y: this.y_val_line, type: 'line' },
    ],
    layout: {width: 800, height: 400, title: 'A Fancy Plot'}
};

  constructor(public restApi: RestApiService) { }

  ngOnInit(): void {
    this.restApi.getData().subscribe({
      next: data => {
          this.x_val_line = data.x;
          this.y_val_line = data.y;
          console.log("Data ", data);
          this.graph = {
            data: [
                { x: this.x_scatter, y: this.y_scatter, type: 'scatter',  marker: {color: 'red'} },
                { x: this.x_val_line, y: this.y_val_line, type: 'line' },
            ],
            layout: {width: 800, height: 400, title: 'Experince vs Salary'}
        };
      },
      error: error => {
          
          console.error('There was an error!', error);
      }
  })
  }

  getExperience(){
console.log(this.experience);
    this.restApi.getPredictedValue(this.experience).subscribe({
      next: data =>{
        this.x_scatter = [this.experience];
        this.y_scatter = [data.y];
        this.graph = {
          data: [
              { x: this.x_scatter, y: this.y_scatter, type: 'scatter',  marker: {color: 'red'} },
              { x: this.x_val_line, y: this.y_val_line, type: 'line' },
          ],
          layout: {width: 800, height: 400, title: 'Experince vs Salary'}
      };

      },
      error: error => {
          
        console.error('There was an error!', error);
    }
    })
  }


}
