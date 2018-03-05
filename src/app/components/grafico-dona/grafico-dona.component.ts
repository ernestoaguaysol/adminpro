import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

    // Doughnut
    @Input('data') doughnutChartData: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    @Input('labels') doughnutChartLabels: number[] = [350, 450, 100];
    @Input('chartType') doughnutChartType: string = 'doughnut';

    @Input() leyenda: string = 'Leyenda';

  constructor() { }

  ngOnInit() {
  }

}
