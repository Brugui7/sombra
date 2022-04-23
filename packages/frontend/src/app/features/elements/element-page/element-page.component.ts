import { Component, OnInit } from '@angular/core';
import { ElementsService } from 'src/app/core/elements/elements.service';

interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  image?: string;
  price?: number;
  category?: string;
  quantity?: number;
  inventoryStatus?: string;
  rating?: number;
}

@Component({
  templateUrl: './element-page.component.html',
  //providers: [ MessageService, ConfirmationService ],
  styleUrls: ['./element-page.component.scss'] ,
})
export class ElementPageComponent implements OnInit {
  public elements: Element[] = [];
  public element?: Element;
  productDialog: boolean = false;
  deleteProductDialog: boolean = false;
  deleteProductsDialog: boolean = false;
  products: Product[] = [];
  product?: Product;
  selectedElements: Element[] = [];
  submitted?: boolean;
  cols = [
    {field: 'id', header: 'Id'},
    {field: 'name', header: 'Name'},
    {field: 'description', header: 'Description'},
  ];
  rowsPerPageOptions = [ 5, 10, 20 ];

  constructor(
    private elementsService: ElementsService
  ) {}

  ngOnInit() {
    this.elementsService.getElements().subscribe(response => {
      this.elements = response.data;
    });
    this.products = [
      {
        "id": "1027",
        "code": "acvx872gc",
        "name": "Yellow Earbuds",
        "description": "Product Description",
        "image": "yellow-earbuds.jpg",
        "price": 89,
        "category": "Electronics",
        "quantity": 35,
        "inventoryStatus": "INSTOCK",
        "rating": 3
      },
      {
        "id": "1028",
        "code": "tx125ck42",
        "name": "Yoga Mat",
        "description": "Product Description",
        "image": "yoga-mat.jpg",
        "price": 20,
        "category": "Fitness",
        "quantity": 15,
        "inventoryStatus": "INSTOCK",
        "rating": 5
      },
      {
        "id": "1029",
        "code": "gwuby345v",
        "name": "Yoga Set",
        "description": "Product Description",
        "image": "yoga-set.jpg",
        "price": 20,
        "category": "Fitness",
        "quantity": 25,
        "inventoryStatus": "INSTOCK",
        "rating": 8
      }
    ];

    this.cols = [
      {field: 'name', header: 'Name'},
      {field: 'price', header: 'Price'},
      {field: 'category', header: 'Category'},
      {field: 'rating', header: 'Reviews'},
      {field: 'inventoryStatus', header: 'Status'},
    ];
  }

  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
  }

  deleteSelectedProducts() {
    this.deleteProductsDialog = true;
  }

  editElement(product: Element) {
    this.product = {...product};
    this.productDialog = true;
  }

  deleteElement(product: Element) {
    this.deleteProductDialog = true;
    this.product = {...product};
  }

  confirmDeleteSelected() {
    this.deleteProductsDialog = false;
    this.elements = this.elements.filter(val => !this.selectedElements.includes(val));
    /*this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Products Deleted',
      life: 3000,
    });*/
    this.selectedElements = [];
  }

  confirmDelete() {
    this.deleteProductDialog = false;
    this.products = this.products!.filter(val => val.id !== this.product!.id);
    /*this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Product Deleted',
      life: 3000,
    });*/
    this.product = {};
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;
    console.log(this.element);
  }
}
