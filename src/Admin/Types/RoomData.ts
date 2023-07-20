export interface roomBookingDataType {
  id: number;
  bookedBy: {
    fullName: string;
    id: number;
    phoneNo: number;
    userName: string;
  };
  hotel: {
    id: number;
    hotelName: string;
    placeId: number;
    placeName: string;
  };
  room: {
    id: number;
    roomType: string;
    price: number;
  };
  checkInDate: string;
  checkOutDate: string;
  status: string;
}
