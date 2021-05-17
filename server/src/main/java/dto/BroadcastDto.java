package dto;

import java.util.List;

public class BroadcastDto {

    public final List<ListingDto> listings;
    public final Integer totalUsers;

    public BroadcastDto(List<ListingDto> listings, Integer totalUsers) {
        this.listings = listings;
        this.totalUsers = totalUsers;
    }
}
