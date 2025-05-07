"use client";

import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Watch } from "@/types/watch";
import { WatchSchema, WatchUpdateSchema } from "@/services/watch/watch.schema";

interface WatchFormProps {
  watch: Watch | null;
  onSave: (watch: any) => Promise<void>;
  onCancel: () => void;
}

export default function WatchForm({ watch, onSave, onCancel }: WatchFormProps) {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<WatchUpdateSchema | WatchSchema>();

    const [files, setFiles] = useState<File[]>([]);
  // Update form when watch data changes
  //  const handleCreate:SubmitHandler<WatchSchema>=async (data) =>{
  //   const result=await onSave(data)
  //  }

  const onSubmit = (data: WatchUpdateSchema | WatchSchema) => {
   
    onSave({...data,image: files[0]});
  };

  return (
    <div className="bg-white rounded-lg p-6 border">
      <h2 className="text-xl font-bold mb-6">{watch ? "Edit" : "Add"} Watch</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Watch Name
            </label>
            <input
              {...register("name", { required: "Watch name is required" })}
              className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price ($)
          </label>
          <input
            type="number"
            {...register("price", {
              required: "Price is required",
              min: { value: 0, message: "Price must be positive" },
              valueAsNumber: true,
            })}
            step="0.01"
            className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
          />
          {errors.price && (
            <p className="text-red-500 text-xs mt-1">{errors.price.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            rows={3}
            className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
          />
          {errors.description && (
            <p className="text-red-500 text-xs mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        <div>
          <input
            type="file"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                const file = e.target.files[0] as File;
                setFiles([file]);
              }
            }}
            multiple={false}
            accept="image/*"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
            required
          />
        </div>

        <div className="flex justify-end space-x-3 pt-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            {watch ? "Update" : "Save"} Watch
          </button>
        </div>
      </form>
    </div>
  );
}
