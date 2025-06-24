import Swal from "sweetalert2";
import { useState } from "react";
import Loader from "../loader/Loader"; 

const ContactForm = () => {
  const [loading, setLoading] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setLoading(true); // loader on

    try {
      const res = await fetch("https://formsubmit.co/ajax/kashfikhan67@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name.value,
          email: form.email.value,
          message: form.message.value,
        }),
      });

      const data = await res.json();
      setLoading(false); // loader off

      if (data.success === "true") {
        Swal.fire("Submitted!", "Your message has been sent!", "success");
        form.reset();
      } else {
        Swal.fire("Failed!", "Something went wrong!", "error");
      }
    } catch (err) {
      setLoading(false);
      console.error(err);
      Swal.fire("Error!", "Submission failed.", "error");
    }
  };

  return (
    <div>
      {loading && <Loader />} {/* loader visible only when loading = true */}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
        />
        <textarea
          name="message"
          rows="9"
          cols="50"
          placeholder="Message"
          required
          className="rounded-lg bg-lightBrown p-2"
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
