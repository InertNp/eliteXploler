export interface packageBookType {
  id: number;
  status: string;
  checkInDate: string;
  checkOutDate: string;
  additionalRequest: string;
  packageId: number;
  hotel: {
    id: number;
    hotelName: string;
    ratings: number;
    placeId: number;
    placeName: string;
  };
  apackage: {
    id: number;
    packageName: string;
    packageDesc: string;
    price: number;
    hotelId: number;
  };
  bookedBy: {
    id: number;
    fullName: string;
    phoneNo: string;
    userName: string;
  };
}
