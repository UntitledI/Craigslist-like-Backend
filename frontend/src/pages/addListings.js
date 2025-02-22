//Link addListings to Listings page
import React from 'react';
import axios from 'axios';


const AddListings = () => {

  //For input
const [description, setDescription] = React.useState('');
const [type, setType] = React.useState('');
const [price, setPrice] = React.useState('');
const [title, setTitle] = React.useState('');
const [email, setEmail] = React.useState('');

/*
const listing = [
    description, type, price, title, email
];
*/

//Command to submit listing
const handleSubmit = () => {
    console.log(email, description, type, price, title);
    const body = {
      email, description, type, price, title
    };
    axios.post('/api/createListing', body);
  };

  //Commands to update listings
  const handleDescription = (e) => {
    const inputDescription = e.target.value;
    setDescription(inputDescription);
  };
  const handleType = (e) => {
    const inputType = e.target.value;
    setType(inputType);
  };
  const handlePrice = (e) => {
    const inputPrice = e.target.value;
    setPrice(inputPrice);
  };
  const handleTitle = (e) => {
    const inputTitle = e.target.value;
    setTitle(inputTitle);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
  //TODO: Link addListings to the main listings page

    //note: it would be more logical to view listings before adding one
    <div>
        <table>
            <tr>
                <th><link to="Home">Home</link></th>
                <th><link to="Chat">Chat</link></th>
                <th><link to="Listings">Site Listings</link></th>
            </tr>
        </table>

        <h1>Create Listing</h1>
        <div className="Create Listing"> {
            //Redirect to view listings page once 
            <form action="Listings">
            <label>
                Email:
                <input onChange={handleEmail} id="input-email" value={email} />
            </label>
            <label>
                Title:
                <input onChange={handleTitle} id="input-title" value={title} />
            </label>
            <label>
                Type:
                <input onChange={handleType} id="input-type" value={type}/>
            </label>
            <label>
                Description:
                <input onChange={handleDescription} id="input-description" value={description}/>
            </label>
            <label>
                Price:
                <input onChange={handlePrice} id="input-price" value={price}/>
            </label>
            {/*Submit -> handleSubmit*/}
            <button id="submit" onClick={handleSubmit()}>Submit</button>
          </form>
        }
        </div>
    </div>);
}

export default AddListings;