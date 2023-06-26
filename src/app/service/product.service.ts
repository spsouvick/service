import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 products:any=[
  {
    prod_name:'mobile',
    prod_id: 'P01',
    desc:"Mobile loren ipsum",
    Image:"assets/mobile store.webp",
    sub_prod: [
      {
        sub_id:'m01',
        desc:'Loren ipsum',
        company:'iphone',
        color:'red',
        price:'15000',
        prodImg:'assets/iphone.png',
      },
      {
        sub_id:'m02',
        desc:'Loren ipsum',
        company:'vivo',
        color:'black',
        price:'10000',
        prodImg:'assets/vivo.webp',
      },
      {
        sub_id:'m03',
        desc:'Loren ipsum',
        company:'oneplus',
        color:'yelllow',
        price:'10000',
        prodImg:'assets/oneplus.jpg',
      }
    ]
  },
  {
    prod_name:'laptop',
    prod_id: 'P02',
    desc:"Laptop loren ipsum",
    Image:"assets/logo.avif",
    sub_prod: [
      {
        sub_id:'L01',
        desc:'Loren ipsum',
        company:'lenovo',
        color:'pink',
        price:'20000',
        prodImg:'assets/lenovo.png',
      },
      {
      sub_id:'L02',
      desc:'Loren ipsum',
      company:'asus',
      color:'green',
      price:'25000',
      prodImg:'assets/asus.webp',
      },
      {
        sub_id:'L03',
        desc:'Loren ipsum',
        company:'dell',
        color:'green',
        price:'35000',
        prodImg:'assets/dell.jpg',
      }
    ]
  },
  {
  prod_name:'watch',
  prod_id: 'P03',
  desc:"Laptop loren ipsum",
  Image:"assets/wat.webp",
  sub_prod: [
    {
      sub_id:'w01',
      desc:'Loren ipsum',
      company:'boat',
      color:'sky',
      price:'2500',
      prodImg:'assets/boat.webp',
    },
    {
    sub_id:'w02',
    desc:'Loren ipsum',
    company:'noise',
    color:'green',
    price:'2000',
    prodImg:'assets/noise.webp',
    },
    {
      sub_id:'w03',
      desc:'Loren ipsum',
      company:'firebolt',
      color:'green',
      price:'1500',
      prodImg:'assets/firebolt.webp',
    }
  ]
  },
 ];
 
  constructor() { }
}
