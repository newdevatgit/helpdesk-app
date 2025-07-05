// File: src/pages/NewTicket.jsx
import React from "react";
import { useForm } from "react-hook-form";

const NewTicket = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Ticket Submitted:", data);
    // Here you can send data to API or Firebase
  };

  return (
    <div className="p-1 w-auto h-auto max-h-[884px] ">
      <h1 className="text-2xl text-center font-serif font-semibold mb-4">Create New Ticket</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-2 gap-1">
        <div>
          <label className="block mb-1">Ticket No.</label>
          <input {...register("ticketNo", { required: true })} className="w-full bg-[#C4C4C4A1] border rounded px-3 py-2" type="text" placeholder="Enter Ticket No." />
          {errors.ticketNo && <span className="text-red-500 text-sm">Ticket No. is required</span>}
        </div>

        <div>
          <label className="block mb-1">Date</label>
          <input {...register("date", { required: true })} className="w-full bg-[#C4C4C4A1] border rounded px-3 py-2" type="date" />
          {errors.date && <span className="text-red-500 text-sm">Date is required</span>}
        </div>

        <div>
          <label className="block mb-1">Name</label>
          <input {...register("name", { required: true })} className="w-full bg-[#C4C4C4A1] border rounded px-3 py-2" type="text" placeholder="Your Name" />
          {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
        </div>

        <div>
          <label className="block mb-1">Department</label>
          <input {...register("department", { required: true })} className="w-full bg-[#C4C4C4A1] border rounded px-3 py-2" type="text" placeholder="Department" />
          {errors.department && <span className="text-red-500 text-sm">Department is required</span>}
        </div>

        <div className="lg:col-span-2">
          <label className="block mb-1">Subject</label>
          <input {...register("subject", { required: true })} className="w-full bg-[#C4C4C4A1] border rounded px-3 py-2" type="text" placeholder="Subject" />
          {errors.subject && <span className="text-red-500 text-sm">Subject is required</span>}
        </div>

        <div>
          <label className="block mb-1">Category</label>
          <input {...register("category", { required: true })} className="w-full bg-[#C4C4C4A1] border rounded px-3 py-2" type="text" placeholder="Category" />
          {errors.category && <span className="text-red-500 text-sm">Category is required</span>}
        </div>

        <div>
          <label className="block mb-1">Description</label>
          <textarea {...register("description", { required: true })} className="w-full bg-[#C4C4C4A1] border rounded px-3 py-2 h-28 resize-none" placeholder="Describe the issue"></textarea>
          {errors.description && <span className="text-red-500 text-sm">Description is required</span>}
        </div>

        <div>
          <label className="block mb-1">Type</label>
          <input {...register("type", { required: true })} className="w-full bg-[#C4C4C4A1] border rounded px-3 py-2" type="text" placeholder="Type" />
          {errors.type && <span className="text-red-500 text-sm">Type is required</span>}
        </div>

        <div>
          <label className="block mb-1">Priority</label>
          <input {...register("priority", { required: true })} className="w-full bg-[#C4C4C4A1] border rounded px-3 py-2" type="text" placeholder="Priority" />
          {errors.priority && <span className="text-red-500 text-sm">Priority is required</span>}
        </div>

        <div className="lg:col-span-2 flex items-center justify-between mt-4">
          <div>
            <input type="checkbox" id="captcha" className="mr-2" />
            <label htmlFor="captcha" className="text-sm">I'm not a robot</label>
          </div>
          <button
            type="submit"
            className="bg-teal-400 hover:bg-teal-500 text-white font-semibold px-6 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTicket;
