import {
  UseFormRegister,
  UseFormHandleSubmit,
  FormState,
  SubmitHandler,
  FieldErrors,
} from "react-hook-form";

import SubmitButton from "../../assets/images/icon-arrow.svg";

type FormFieldValues = {
  day: number;
  month: number;
  year: number;
};

type FormProps = {
  handleSubmit: UseFormHandleSubmit<FormFieldValues>;
  register: UseFormRegister<FormFieldValues>;
  errors: FieldErrors<FormFieldValues>;
  handleOnSubmit: SubmitHandler<FormFieldValues>;
};

const Form = ({
  handleSubmit,
  register,
  errors,
  handleOnSubmit,
}: FormProps) => (
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
);

type FormInputProps = {
  register: any;
  errors: any;
  text: string;
  size: number;
  placeholder: string;
};
const FormInput = ({
  register,
  errors,
  text,
  size,
  placeholder,
}: FormInputProps) => (
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

export default Form;
