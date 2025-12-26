export type OtpState = {
  success: boolean;
  message?: string;
  status?: number | undefined;
} | null;

export type validateOtpRespinseType = {
  accessToken: string;
  refreshToken: string;
  message: string;
};
