//View Listings
//Must link addListings to this one

import react from 'react'
import axios from 'axios'

    const [description, setDescription] = React.useState('');
    const [type, setType] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [title, setTitle] = React.useState('');
    const [email, setEmail] = React.useState('');

    const listing = [
        description, type, price, title, email
    ];

//Command to fetch list (IMPORTANT)
    const fetchListings = () => {
        axios.get('/api/viewListings');
    };

//Command to delete listing from the list
    const handleRemove = (title) => {
    axios.get('/api/deleteListing')
        .then((res) => {
            console.log(res.data);
            const newList = list.filter((item) => item.title !== title);
            setListingsList(newList);
        });
    };

const listings = () => {
    return (
    <div>
        <h1><link to="Home">Home</link></h1>
        <h1><link to="Chat">Chat</link></h1>
        <h1><link to="Listings">Site Listings</link></h1>

        <h1>Current Listings</h1>
        <div>
        {/* Display list here */
          listing.map((object, i) => <div key={i}>{object.list}
          <button onClick={() => handleRemove(item.title)}></button>
        </div>)}; 
        </div>
    </div>
    );
}

export default listings;