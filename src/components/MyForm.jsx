// MyForm.js

import React from "react";
import { useForm } from "react-hook-form";

const MyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Reset the form after successful submission
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {isSubmitSuccessful && (
        <p className="successful">Successfully submitted the form!</p>
      )}
      <label>First Name</label>
      <input
        {...register("firstName", {
          required: "First Name is required",
        })}
      />
      {errors.firstName && <p>{errors.firstName.message}</p>}

      <label>Last Name</label>
      <input
        {...register("lastName", {
          required: "Last Name is required",
        })}
      />
      {errors.lastName && <p>{errors.lastName.message}</p>}

      <label>Email</label>
      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Invalid email address",
          },
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <label>Password</label>
      <input
        type="password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 5,
            message: "Password must be more than 4 characters",
          },
          maxLength: {
            value: 20,
            message: "Password cannot be more than 20 characters",
          },
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit" disabled={Object.keys(errors).length > 0}>
        Submit
      </button>

      {/* Display success message on successful submission */}
    </form>
  );
};

export default MyForm;
