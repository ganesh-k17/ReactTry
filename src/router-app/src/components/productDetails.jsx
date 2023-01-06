import React, { Component } from "react";
import { useParams } from "react-router-dom";


const ProductDetails = (props)  => {

    let {id} = useParams();
    console.log("id", id);

    return (
      <div>
        <h1>Product Details - {id}</h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
}

export default ProductDetails;



// import React, { Component } from "react";
// import { useParams } from "react-router-dom";

// class ProductDetails extends Component {

//   constructor(){        // Wont work... to useParams(), it should be functional component.
//     super();
//     let { id } = useParams();
//     console.log("id", id);
//   }

//   handleSave = () => {
//     // Navigate to /products
//   };


//   render() {

//     return (
//       <div>
//         <h1>Product Details - </h1>
//         <button onClick={this.handleSave}>Save</button>
//       </div>
//     );
//   }
// }

// export default ProductDetails;
