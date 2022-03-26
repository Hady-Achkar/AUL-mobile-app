export interface PersonalInfo {
  fname: string;
  lname: string;
  fathersName: string;
  dob: Date;
  placeOfBirth: string;
}

export interface ContactInfo {
  phoneNumber: string;
  mobile: string;
  email: string;
}

export interface EducationalInfo {
  highestDegree: string;
  academicType: string;
  prevSchool: string;
}

export interface AulInfo {
  prefMajor: string;
  campus: string;
}

export interface IApplication {
  _id?: string;
  personalInfo: PersonalInfo;
  contactInfo: ContactInfo;
  educationalInfo: EducationalInfo;
  aulInfo: AulInfo;
  createdAt?: Date;
  updatedAt?: Date;
}
