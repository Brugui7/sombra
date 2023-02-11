import { Component, OnInit } from '@angular/core';
import { ElementsService } from 'src/app/core/elements/elements.service';
import { Element } from 'src/app/core/elements/models/element.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  styleUrls: [ './element-page.component.scss' ],
})
export class ElementPageComponent implements OnInit {
  public elements: Element[] = [];
  public element?: Element;
  public sensorsDialog = false;
  public elementForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required])
  })
  elementDialog: boolean = false;
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
    private elementsService: ElementsService,
  ) {}

  ngOnInit() {
    this.retrieveElements();
    this.products = [ ];

    this.cols = [
      {field: 'name', header: 'Name'},
      {field: 'price', header: 'Price'},
      {field: 'category', header: 'Category'},
      {field: 'rating', header: 'Reviews'},
      {field: 'inventoryStatus', header: 'Status'},
    ];
  }

  private retrieveElements(): void {
    this.elementsService.getElements().subscribe(response => {
      this.elements = response.data;
    });
  }

  openNew() {
    this.submitted = false;
    this.elementForm.reset();
    this.elementDialog = true;
  }

  deleteSelectedProducts() {
    this.deleteProductsDialog = true;
  }

  editElement(element: Element) {
    const {id, name, description} = element;
    this.elementForm.setValue({id, name, description});
    this.elementDialog = true;
  }

  deleteElement(product: Element) {
    this.deleteProductDialog = true;
  }

  openSensorsDialog(element: Element) {
    this.element = element;
    this.sensorsDialog = true;
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
    this.elementDialog = false;
    this.submitted = false;
  }

  saveElement() {
    this.submitted = true;
    let request =  this.elementsService.create(this.elementForm.value)
    if (this.elementForm.value.id) {
      request = this.elementsService.update(this.elementForm.value)
    }

    request.subscribe(response => {
      console.log(response);
      this.retrieveElements();
      this.hideDialog();
    });

  }
}
