// export class Students{
//    Constructor(
//     public id: string,
//     public Name:string,
//     public Address:string,
//     public MobileNo: number,
//    ){}

// }
export class Students {
  id: string;
  Name: string;
  Address: string;
  MobileNo: number;

  constructor(id: string, Name: string, Address: string, MobileNo: number) {
    this.id = id;
    this.Name = Name;
    this.Address = Address;
    this.MobileNo = MobileNo;
  }
}
