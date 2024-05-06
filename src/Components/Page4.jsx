import React from 'react';
import Newcard from './Newcard';

export default function Page4() {
    const data = [
        {
          id:1,
          price:'$40.00 - $80.00',
          title:'DATA SCIENCE',
          image:'/1.png',
          description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
        },
        {
          id:2,
          price:'$20.00 $18.00',
          title:'FULL STACK DEVELOPMENT',
          image:'/2.jpg',
          description:'This card has supporting text below as a natural lead-in to additional content.'
        },
        {
          id:3,
          price:'$50.00 $25.00',
          title:'DATA SCIENCE',
          image:'/datascience.jpg',
          description:'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.'
        },
        {
          id:4,
          price:'$40.00',
          title:'CYBER SECURITY',
          image:'/cyber.jpg',
          description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
        },
        {
          id:5,
          price:'$40.00',
          title:'CAREER',
          image:'/c1.jpg',
          description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
        },
      ]
    return (
        <div>
            <Newcard data={data} title={data[4].title} price = {data[4].price}  description = {data[4].description} image = {data[4].image}/>

        </div>
    )
}