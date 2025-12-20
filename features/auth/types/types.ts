export type OtpState = {
  success: boolean;
  message?: string;
} | null;

export type validateOtpRespinseType = {
  data: {
    accessToken: string;
    refreshToken: string;
    message: string;
  };
};
