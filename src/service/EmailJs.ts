import emailJs from '@emailjs/browser'

const Env = {
  EMAILJS_SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  EMAILJS_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  EMAILJS_PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
}
export type ContactFormData = {
  name: string
  email: string
  message: string
}

export const sendEmail = async (formData: ContactFormData) => {
  try {
    await emailJs.send(
      Env.EMAILJS_SERVICE_ID,
      Env.EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        to_name: 'Akash Srivastava',
        from_email: formData.email,
        to_email: 'akashsrivastava.git@gmail.com',
        message: formData.message,
      },
      Env.EMAILJS_PUBLIC_KEY,
    )
  } catch (error: any) {
    throw Error(error?.message)
  }
}
