'use server'

import { mailService } from "@/services/mail.service"

export const createMail = async (formData: {
  subject: string;
  message: string;
}) => {
  const res = await mailService.createMail(formData);
  return res;
};