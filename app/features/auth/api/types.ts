export type RegisterResponse = {
  success: true;
  data: {
    accessToken: string;
    refreshToken: string;
    expiresAtUtc: string;
    isVerified: true;
    nextStep: string;
    message: string;
  };
  message: string;
  errors: [
    {
      code: string;
      description: string;
    },
  ];
};

export type RegisterRequest = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};
