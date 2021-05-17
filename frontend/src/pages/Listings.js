//View Listings
//Must link addListings to this one

import react from 'react'
import axios from 'axios'
import addListings from './addListings';

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
        }).then(fetchListings);
    };

const listings = () => {
    return (
    <div>
        <table>
            <tr>
                <th><link to="Home">Home</link></th>
                <th><link to="Chat">Chat</link></th>
                <th><link to="Listings">Site Listings</link></th>
            </tr>
        </table>

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