export interface hotelDataType {
  id: number;
  filename: string;
  hotelDesc: string;
  owned_by: {
    fullName: string;
    id: number;
    userName: string;
  };
  placeId: number;
  placeName: string;
  hotelName: string;
  ratings: number;
}
