export interface Ticket{
  [key: string]: any;
  "id": number,
  "Room Name":string,
  "Date": string,
  "Source":string,
  "Room Type":string,
  "Total Fare":number,
  "Seat No": string[],
  "Passenger Details": User
}

interface User{
  [key: string]: any;
  "username":string,
  "email":string,
  "mobilenumber":number,
  "aadharnumber":number,
}
