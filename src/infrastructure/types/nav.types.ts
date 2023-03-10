export type RootStackParamList = {
  LoginSignUp: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  ChangePassword: undefined;
  SignUp: undefined;
  SignUpDetail: undefined;
  Verification: undefined;
  Welcome: undefined;
  LoginStack: undefined;
  TermsAndConditions: undefined;
  Tab: undefined;
};

export type RootTabParamList = {
  FeedStack: undefined;
  MapStack: undefined;
  EventStack: undefined;
  ChatStack: undefined;
  GalleryStack: undefined;
};

export type FeedStackParamList = {
  Feed: undefined;
  UserProfile: {
    name: string;
    id: number;
    disease: string;
    age: number;
    lastSeen: string;
    likes: number;
    reply: number;
  };
  EditProfile: {
    name: string;
    id: number;
    disease: string;
    age: number;
  };
};

export type TagStackParamList = {
  Tag: undefined;
  Gallery: undefined;
  Camera: undefined;
};
