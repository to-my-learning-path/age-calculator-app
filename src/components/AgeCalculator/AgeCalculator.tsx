import { useState } from "react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Form from "./Form";
import Display from "./Display";

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
  };

  return (
    <div className=" md:min-w-[40rem] px-4 md:px-8 py-8 font-Poppins bg-white rounded-xl rounded-br-[5rem] shadow-sm">
      <Form
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
        handleOnSubmit={handleOnSubmit}
      />
      <Display date={date} />
    </div>
  );
};

export default AgeCalculator;
