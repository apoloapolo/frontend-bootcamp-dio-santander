import { DashboardService } from './../dashboard.service';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import Stock from 'src/app/shared/models/stock-model';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  stocks: Stock[] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.fetchStocks();
  }

  fetchStocks() {
    this.dashboardService.getStocks().subscribe(
      stocks => {
        this.stocks = stocks as Stock[];
        console.log(this.stocks);
      }
     );
  }
}
