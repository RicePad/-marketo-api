import React, { useState, useEffect, Fragment } from 'react';
import RestaurantList from '../../components/Restaurants/RestaurantList';
import RestaurantForm from '../../components/Restaurants/RestaurantForm';




const restaurant = () => {
    const [restaurantData, setResstaurantList] = useState([])
    
    useEffect(() => {
        fetch(
            'http://localhost:3000/api/v1/restaurants/',
          {
            method: "GET",
            headers: new Headers({
                'Authorization': 'Basic ' + Buffer.from('jona@example.com:testing123').toString('base64'),
            })
          }
        )   
          .then(response => response.json())
          .then(restaurantData => setResstaurantList(restaurantData))
          .catch(error => console.log(error));
      },[]);
    

    
   
    if(restaurantData <= 0) {
        return <Fragment><h1>Fetching....</h1></Fragment>
    } else {
        return (
            <div>
                <section>
                    <RestaurantForm />
                </section>
                <br/>
                <section>
                    <RestaurantList restaurants={restaurantData}/>
                </section>
            </div>
        )};
    }


export default restaurant;