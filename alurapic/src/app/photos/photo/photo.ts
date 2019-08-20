// interface para tipar o objeto Photo
export interface Photo {
  id:number;
  postDate:Date;
  url:string;
  description:string;
  allowComments:boolean;
  likes:number;
  comments:number;
  userId:number;
}
