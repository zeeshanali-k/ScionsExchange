import { Component, OnInit } from '@angular/core';
import { TransferService } from 'src/app/services/transfer.service';

@Component({
  selector: 'app-exchange-page',
  templateUrl: './exchange-page.component.html',
  styleUrls: ['./exchange-page.component.css'],
  // providers: [ExchangePageComponent]
})
export class ExchangePageComponent implements OnInit {

  constructor(
    private transferService: TransferService
  ) { }

  ngOnInit(): void {

  }

  clicked() {
    console.log("Clicked");
    // this.transferService.getUserBalance().
    //   then(function (retAccount: any) {
    //     // that.user.address = retAccount.account;
    //     // that.user.balance = retAccount.balance;
    //     console.log('transfer.components :: getAccountAndBalance :: that.user');
    //     console.log(retAccount.account);
    //     console.log(retAccount.balance);
    //   }).catch(function (error) {
    //     console.log(error);
    //   });
  }

}
