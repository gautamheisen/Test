import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import{HelperserviceService} from '../helperservice.service'
import { UpdateInventoryComponent } from '../update-inventory/update-inventory.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit,AfterViewInit {
  @ViewChild(UpdateInventoryComponent) upc : UpdateInventoryComponent;

  constructor(private helper:HelperserviceService) { }
inventorylist :any
modifyinventory = false
obj = {}
searchtext = "ab";
  ngOnInit(): void {
    this.helper.getInventoryList().subscribe(data=>{
      console.log(data)
      this.inventorylist=data.body;
    })
    console.log(this.upc)
  }
  ngAfterViewInit() {
    console.log(this.upc);
  }
Modify(type,data){
if(type=='Update'){
  this.modifyinventory = true
  this.obj ={id:data.id,name : data.name,description:data.description,price:data.price}
}
else if(type=='New'){
  this.modifyinventory = true
  this.obj ={id:'',name : '',description:'',price:''}
}
else if(type=='Delete'){
  this.modifyinventory = false
  this.helper.DeleteInventory(data).subscribe(response=>{
    console.log(response)
  })
}
}
OnModifyInventory(){
  this.modifyinventory = false
}
}
