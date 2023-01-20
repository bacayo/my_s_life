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
};

export type FeedStackParamList = {
  Feed: undefined;
  UserProfile: {
    name: string;
    id: number;
    disease: string;
    age: number;
  };
};
