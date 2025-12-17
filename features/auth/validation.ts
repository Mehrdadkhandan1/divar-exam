// features/auth/validation.ts
export const validatePhone = (phone: string) => {
  if (!phone) return "شماره موبایل وارد نشده";
  if (!/^\d{10,11}$/.test(phone)) return "شماره موبایل معتبر نیست";
  return null; // یعنی درست است
};
