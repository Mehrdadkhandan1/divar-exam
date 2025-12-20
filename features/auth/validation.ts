// features/auth/validation.ts
export const validatePhone = (phone: string) => {
  if (!phone) return false;
  if (!/^\d{10,11}$/.test(phone)) return false;
  return true; // یعنی درست است
};
