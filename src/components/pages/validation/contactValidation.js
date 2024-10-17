import * as Yup from "yup";

export const contactValidation = Yup.object().shape({
    fullname: Yup.string().required("نام و نام خانوادگی اجباری میباشد"),
    email: Yup.string().email("ادرس ایمیل معتبر نیست").required("ایمیل اجباری میباشد"),
    subject: Yup.string().required("عنوان اجباری میباشد"),
    massage: Yup.string().required("پیام اجباری میباشد"),
    recaptcha: Yup.string().required("گپتچا اجباری میباشد"),
});