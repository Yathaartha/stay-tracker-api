export type ROLES = {
  ADMIN: "admin";
  USER: "user";
  HOST: "host";
};

export type UserProfileData = {
  firstName: string;
  lastName: string;
  middleName?: string | null;
  dateOfBirth: Date;
  phoneNymber: string;
  email: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode?: string;
  country: string;
};

export type EditUserProfileData = Partial<UserProfileData>;

