import React from "react";
import { useFormStatus } from "react-dom";
function Submit() {
  const { pending, data } = useFormStatus();
  console.log(pending, data);
  return (
    <div>
      <input type="text" name="name" placeholder="Name" />
      <button type="submit">{pending ? "Submiting" : "Submit"}</button>
      <p>{data ? `Sercing for ${data.get("name")}` : ``}</p>
    </div>
  );
}

const handleSubmit = async (query) => {
  await new Promise((res) => setTimeout(res, 1000));
};
export default function FormState() {
  return (
    <form action={handleSubmit}>
      <Submit />
    </form>
  );
}
