import  { propertyForSaleArr }  from './properties/propertyForSaleArr.js'
import { placeholderPropertyObj } from './properties/placeholderPropertyObj.js'

// Function to generate HTML for properties
function getPropertyHtml(propertyForSaleArr = [placeholderPropertyObj]) {

    // Using .map() to iterate over the array of properties and destructure necessary fields
    return propertyForSaleArr.map(({ propertyLocation, priceGBP, roomsM2, comment, image }) => {
        
        // Calculating the total square meters by summing up all values in the roomsM2 array using .reduce()
        const total= roomsM2.reduce((total, property)=>{
            return total + property
        }, 0)
    
        // Returning the HTML structure for each property card with interpolated values
        return  `<section class="card">
                    <img src="/images/${image}" alt="${propertyLocation}">
                    <div class="card-right">
                        <h2>${propertyLocation}</h2>
                        <h3>${priceGBP}</h3>
                        <p>${comment}</p>
                        <h3>${total} m&sup2;</h3>
                    </div>
                </section> 
                `
    })

}

// Inserting the generated HTML into the element with id 'container' and joining array elements into a single string
document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr ).join(' ')