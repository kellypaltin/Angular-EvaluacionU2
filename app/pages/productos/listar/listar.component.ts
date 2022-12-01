import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { Product } from 'src/app/domain/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  title1= "Tienda de Tecnología"
  title= "Listar productos existentes"


  lstProducts = new Array()
  products: any

  constructor(private router: Router,
    private productService: ProductsService) { }

  ngOnInit(): void {
    this.loadProducts()

  }

  loadProducts(){
    //this.lstProducts = this.productService.getProducts()
    this.products = this.productService.getProductsFire()

    console.log(this.products) //keep in mind lstProducts
  }

  goNewProduct(){
    console.log("llamando crear producto")
    this.router.navigate(['products/create'])
  }

}
