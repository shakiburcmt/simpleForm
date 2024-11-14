import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-4xl mx-auto bg-white p-6 rounded shadow"
    >
      <h2 className="text-xl font-semibold mb-4">Contacts / Create</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="mb-1">First Name:</label>
          <input
            {...register("firstName")}
            className="border p-2 rounded h-9"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Last Name:</label>
          <input {...register("lastName")} className="border p-2 rounded h-9" />
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Organization:</label>
          <select
            {...register("organization")}
            className="border p-2 rounded h-9"
          >
            <option value="Bashirian PLC">Bashirian PLC</option>
            <option value="Another Organization">Another Organization</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Email:</label>
          <input
            type="email"
            {...register("email")}
            className="border p-2 rounded h-9"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Phone:</label>
          <input
            type="tel"
            {...register("phone")}
            className="border p-2 rounded h-9"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Address:</label>
          <input {...register("address")} className="border p-2 rounded h-9" />
        </div>

        <div className="flex flex-col">
          <label className="mb-1">City:</label>
          <input {...register("city")} className="border p-2 rounded h-9" />
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Region:</label>
          <input {...register("region")} className="border p-2 rounded h-9" />
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Country:</label>
          <select {...register("country")} className="border p-2 rounded h-9">
            <option value="Canada">Canada</option>
            <option value="USA">USA</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Postal Code:</label>
          <input
            {...register("postalCode")}
            className="border p-2 rounded h-9"
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4 ml-auto block"
      >
        Create Contact
      </button>
    </form>
  );
};

export default ContactForm;
