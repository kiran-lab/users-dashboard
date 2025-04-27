import { Component, Input } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-role-distribution-chart',
  templateUrl: './role-distribution-chart.component.html',
  styleUrl: './role-distribution-chart.component.scss'
})
export class RoleDistributionChartComponent {
  public chart: any;
  @Input() rolesData: number[] = [];

  ngOnChanges(){
    this.createChart();
  }

  createChart(){
    if (this.chart) {
      this.chart.destroy(); 
    }
    this.chart = new Chart("roleChart", {
      type: 'pie', 
      data: {
        labels: ['Admin','Editor','Viewer'],
           datasets: [{
        label: 'Role',
        data: this.rolesData,
        backgroundColor: [
          '#1c4980',
          '#383838',
          '#600ab2',            
        ],
        hoverOffset: 4
      }],
      },
        options: {
          aspectRatio:2.5
      }
    });
  }
}
