import Swal from "sweetalert2";
import { useState } from "react";
import Loader from "../loader/Loader"; // Make sure this loader exists and looks nice

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setLoading(true);

    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xqabgqjb", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        Swal.fire("Submitted!", "Your message has been sent!", "success");
        form.reset();
      } else {
        Swal.fire("Failed!", data.message || "Something went wrong!", "error");
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
