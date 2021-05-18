//View Listings
//Must link addListings to this one page

import axios from 'axios'
import AddListings from './AddListings';
import React from 'react';

const Listings = ({ ws }) => {
    const [listings, setListingsList] = React.useState([]);

    //Command to fetch list (IMPORTANT)
        const fetchListings = () => {
            axios.get('/api/viewListings').then((res) => {
                console.log(res.data);
                setListingsList(res.data);
            });
        };
    
    //Command to delete listing from the list
    /*
        const handleRemove = (id) => {
        axios.delete('/api/deleteListing')
            .then((res) => {
                console.log(res.data);
                const newList = listing.filter((item) => item.id !== id);
                setListingsList(newList);
            }).then(fetchListings);
        };
        */

    React.useEffect(() => {

        fetchListings();

        ws.addEventListener('listing', (listing) => {
            console.log(listing);
            const parsedData = JSON.parse(listing.data);
            console.log(parsedData);
            setListingsList(parsedData.listing);
        });

    }, []);

    return (
    <div>
        <h1>view listings</h1>
        <table>
            <tr>
                <th><link to="Home">Home</link></th>
                <th><link to="Chat">Chat</link></th>
                <th><link to="Listings">Site Listings</link></th>
                <th><link to="AddListings">Site Listings</link></th>
            </tr>
        </table>

        <h1>Current Listings</h1>
        <div>
            <p><link to ={AddListings}>Add Listing</link></p>
        </div>
        <div>
        {/* Display list here */
          listings.map((object, i) => <div key={i}>{object.listing}
          
        </div>)}; 
        </div>
    </div>
    );
}

export default Listings;