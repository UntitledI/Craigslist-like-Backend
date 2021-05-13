package dao;

import dto.ListingDto;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import mongo.MongoConnection;
import org.bson.Document;

public class ListingDao extends MongoDao<ListingDto>
        implements DataAccessObject<ListingDto> {

    Random rand = new Random();
    int randID = rand.nextInt(1000);

    // use lazy loading for the singleton
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
        //fill this out
        collection.insertOne(item);
        return item;
    }

    @Override
    public List<ListingDto> getItems() {
        // use .into
        List<ListingDto> listings = collection.find().into(new ArrayList<>());
        // fill this out
        return listings;
    }

    @Override
    public void delete(String id) {
        // fill this out;
        collection.deleteOne(new Document("entryId", id));
    }

}
