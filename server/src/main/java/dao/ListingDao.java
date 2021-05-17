package dao;

import dto.ListingDto;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import mongo.MongoConnection;
import org.bson.Document;

public class ListingDao extends MongoDao<ListingDto>
        implements DataAccessObject<ListingDto> {

    private static ListingDao instance;

    public static ListingDao getInstance(){
        if(instance == null){
            instance = new ListingDao(new MongoConnection());
        }
        return instance;
    }

    ListingDao(MongoConnection connection){
        super(connection);
        collection = mongoConnection.getCollection("MyCollection", ListingDto.class);
    }


    @Override
    public ListingDto put(ListingDto item) {
        Random rand = new Random();
        int randID = rand.nextInt(1000)+1;
        ListingDto newListing = new ListingDto(String.valueOf(randID), item.description, item.type, item.price, item.title, item.email);
        collection.insertOne(newListing);
        return item;
    }

    @Override
    public List<ListingDto> getItems() {
        List<ListingDto> listings = collection.find().into(new ArrayList<>());
        return listings;
    }

    @Override
    public void delete(String id) {
        collection.deleteOne(new Document("entryId", id));
    }

}
