import { useState } from "react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import SubmitButton from "../../assets/images/icon-arrow.svg";

const formSchema = z
  .object({
    day: z.coerce
      .number({ invalid_type_error: "Must be a valid day" })
      .min(1, { message: "This field is required" })
      .max(31, { message: "Must be a valid day" }),
    month: z.coerce
      .number({ invalid_type_error: "Must be a valid month" })
      .min(1, { message: "This field is required" })
      .max(12, { message: "Must be a valid month" }),
    year: z.coerce
      .number({ invalid_type_error: "Must be a valid year" })
      .min(1900, { message: "This field is required" })
      .max(new Date().getFullYear(), { message: "Must be a valid year" }),
  })
  .refine(
    (data) => {
      const maxDays = new Date(data.year, data.month, 0).getDate();
      return data.day >= 1 && data.day <= maxDays;
    },
    {
      path: ["day"],
      message: "Must be a valid date",
    }
  );

type FormSchemaProp = z.infer<typeof formSchema>;

type formInputProp = {
  register: any;
  errors: any;
  text: string;
  size: number;
  placeholder: string;
};

const AgeCalculator = () => {
  const [date, setDate] = useState({
    day: "--",
    month: "--",
    year: "--",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaProp>({
    resolver: zodResolver(formSchema),
  });

  const handleOnSubmit: SubmitHandler<FormSchemaProp> = (data) => {
    const birthDate = new Date(data.year, data.month - 1, data.day);
    const todayDate = new Date();
    const age = new Date(todayDate.getTime() - birthDate.getTime());
    setDate({
      ...date,
      day: (age.getUTCDate() - 1).toString(),
      month: age.getUTCMonth().toString(),
      year: (age.getUTCFullYear() - 1970).toString(),
    });
    console.log(date);
    console.log(birthDate);
  };

  return (
    <div className=" md:min-w-[40rem] px-4 md:px-8 py-8 font-Poppins bg-white rounded-xl rounded-br-[5rem] shadow-sm">
      <div className=" border-b-2 border-b-lightGrey relative">
        <form
          onSubmit={handleSubmit(handleOnSubmit)}
          className=" flex flex-col items-center"
        >
          <div className=" flex items-center justify-between gap-4 md:self-start">
            <FormInput
              register={register}
              errors={errors}
              text="day"
              size={2}
              placeholder="DD"
            />
            <FormInput
              register={register}
              errors={errors}
              text="month"
              size={2}
              placeholder="MM"
            />
            <FormInput
              register={register}
              errors={errors}
              text="year"
              size={4}
              placeholder="YYYY"
            />
          </div>
          <button
            type="submit"
            className=" md:-mt-12 bg-purple rounded-full p-4 w-fit translate-y-1/2 md:self-end"
          >
            <img src={SubmitButton} alt="" />
          </button>
        </form>
      </div>
      <div className=" pt-16 md:pt-8 text-center md:text-left">
        <p className=" italic font-bold text-5xl md:text-6xl text-fontSizeInput">
          <span className=" text-purple mr-2">{date.year}</span>years
        </p>
        <p className=" italic font-bold text-5xl md:text-6xl text-fontSizeInput">
          <span className=" text-purple mr-2">{date.month}</span>months
        </p>
        <p className=" italic font-bold text-5xl md:text-6xl text-fontSizeInput">
          <span className=" text-purple mr-2">{date.day}</span>days
        </p>
      </div>
    </div>
  );
};

const FormInput = ({
  register,
  errors,
  text,
  size,
  placeholder,
}: formInputProp) => (
  <div className=" flex flex-col md:text-2xl">
    <label
      className={` ${
        errors[text] ? "text-lightRed" : "text-smokeyGrey"
      } uppercase text-xs tracking-widest pb-2 `}
      htmlFor={text}
    >
      {text}
    </label>
    <input
      {...register(text)}
      className={` ${
        errors[text] ? "border-lightRed" : "border-smokeyGrey"
      } font-bold border  rounded p-2`}
      size={size}
      type="text"
      placeholder={placeholder}
    />
    <p className=" text-lightRed italic text-xs">{errors[text]?.message}</p>
  </div>
);

export default AgeCalculator;
