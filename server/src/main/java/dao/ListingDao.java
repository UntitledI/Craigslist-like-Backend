package dao;

import dto.ListingDto;
import java.util.ArrayList;
import java.util.List;
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
        collection.insertOne(item);
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
