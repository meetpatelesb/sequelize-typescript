import { attendanceType } from "./functional/attendanceType.interface";

export interface attendanceinterface {
  id: number;
  attendanceType: attendanceType;
  attendanceId: number;
  attendanceDate: string;
}

export interface attendanceCreationinterface {
  id: number;
  attendanceType: attendanceType;
  attendanceId: number;
  attendanceDate: Date | string;
}
