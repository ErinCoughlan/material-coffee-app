import {CommonModule} from '@angular/common';
import {Component, Input, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
// tslint:disable-next-line:max-line-length
import {MdButtonModule, MdButtonToggleModule, MdCardModule, MdCheckboxModule, MdDialog, MdDialogConfig, MdDialogContent, MdDialogModule, MdDialogRef, MdIconModule, MdInputModule, MdSelectModule, MdSnackBar, MdSnackBarModule} from '@angular/material';

import {MenuItem} from './../coffee';

export interface OrderResult {
  customerName?: string;
  asap?: boolean;
}

@Component({
  selector: 'app-coffee-card',
  templateUrl: './coffee-card.component.html',
  styleUrls: ['./coffee-card.component.css']
})
export class CoffeeCardComponent {
  @Input() menuItem: MenuItem;

  constructor(private dialog: MdDialog, private snackbar: MdSnackBar) {}

  orderCoffee() {
    const config: MdDialogConfig = {
      data: {
        menuItem: this.menuItem,
      },
    };

    const dialogRef = this.dialog.open(OrderDialogComponent, config);
    dialogRef.afterClosed().subscribe((result: OrderResult) => {
      if (result) {
        const message = result.asap ?
            `Emergency ${this.menuItem.name} for ${result.customerName}.` :
            `${this.menuItem.name} on the way for ${result.customerName}.`;

        this.snackbar.open(message, '', {
          duration: 1000,
        });
      }
    });
  }

  getFavoriteIcon(): string {
    return this.menuItem.favorite ? 'favorite' : 'favorite_border';
  }

  favorite() {
    this.menuItem.favorite = !this.menuItem.favorite;
  }
}

@Component({
  templateUrl: './coffee-card.dialog.html',
  styleUrls: ['./coffee-card.component.css']
})
export class OrderDialogComponent {
  menuItem: MenuItem;
  customerName: string;
  asap: boolean;

  constructor(public dialogRef: MdDialogRef<MdDialogContent>) {
    this.menuItem = dialogRef.config.data.menuItem;
  }

  closeDialog() {
    const result: OrderResult = {
      customerName: this.customerName,
      asap: this.asap,
    };
    this.dialogRef.close(result);
  }
}


@NgModule({
  declarations: [CoffeeCardComponent, OrderDialogComponent],
  exports: [CoffeeCardComponent, OrderDialogComponent],
  entryComponents: [OrderDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdDialogModule,
    MdIconModule,
    MdInputModule,
    MdSnackBarModule,
  ],
})
export class CoffeeCardModule {
}
