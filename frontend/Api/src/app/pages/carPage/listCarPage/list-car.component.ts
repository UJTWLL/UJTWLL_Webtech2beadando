import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CurrentUserService } from 'src/app/services/domain/auth/current-user/current-user.service';
import { Car } from 'src/app/services/domain/settings/car/car.model';
import { ProductService } from 'src/app/services/domain/settings/car/product.service';
import { CreateCarComponent } from '../create-car/create-car.component';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private router: Router, public dialog: MatDialog, private service: ProductService, private currentUserService: CurrentUserService) { }

  user: string;
  ELEMENT_DATA: Car[];
  displayedColumns: string[];
  dataSource: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    // console.log(sessionStorage.getItem('currentUser'));
    this.user = this.currentUserService.getUsername();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    this.getAllProducts();
  }

  deleteProduct(product: Car): void {
    console.log(product.licensePlateNumber);
    console.log(product.brand);
    this.service.deleteCar(product._id).subscribe(val => {
      console.log(val);
      this.snackBar.open('Sikeres törlés', '', {
        duration: 3000,
      });
      this.getAllProducts();
    });

  }

  editProduct(car: Car): void {
    localStorage.setItem('licensePlateNumber', car.licensePlateNumber);
    localStorage.setItem('brand', car.brand);
    localStorage.setItem('type', car.type);
    localStorage.setItem('horsepower', car.horsepower.toString());
    localStorage.setItem('price', car.price.toString());
    this.router.navigate(['settings/car', 'edit', car._id]);
  }

  getAllProducts(): void {
    this.service.getCars().subscribe(val => {
      this.ELEMENT_DATA = val;
      this.displayedColumns = ['licensePlateNumber', 'brand', 'type', 'horsepower', 'price', 'delete'];
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
  navigateBack() {
    this.router.navigate(['../../']);
  }
  createProduct(): void {
    const dialogRef = this.dialog.open(CreateCarComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getAllProducts();
    });
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(['../../']);
  }

}
