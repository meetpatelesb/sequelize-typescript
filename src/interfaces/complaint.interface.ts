import { complaintType } from "./functional/complaintType.interface";

export interface complaintinterface {
  id: number;
  complaintType:complaintType
  complaintId: number;
  complaintDetails:string;
}

export interface complaintCreationinterface {
  id: number;
  complaintType:complaintType
  complaintId: number;
  complaintDetails: string;
}
