//View Listings
//Must link addListings to this one

import axios from 'axios'
import addListings from './addListings';
import React from 'react';

const listings = ({ ws }) => {
    const [listing, setListing] = React.useState([]);
    const [listings, setListingsList] = React.useState([]);

    //Command to fetch list (IMPORTANT)
        const fetchListings = () => {
            axios.get('/api/viewListings').then((res) => {
                console.log(res.data);
                setListing(res.data);
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
            setListing(parsedData.listing);
        });

    }, []);

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
            <p><link to ={addListings}>Add Listing</link></p>
        </div>
        <div>
        {/* Display list here */
          listings.map((object, i) => <div key={i}>{object.listing}
          
        </div>)}; 
        </div>
    </div>
    );
}

export default listings;