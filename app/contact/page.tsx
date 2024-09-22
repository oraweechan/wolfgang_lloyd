"use client";

import { TextInput, Textarea, Button, Group, Container } from "@mantine/core";
import { useForm, UseFormReturnType } from "@mantine/form"; // Correct imports
import { MdEmail } from "react-icons/md"; // Importing email icon from react-icons
import Image from "next/image";

import { instagram, facebook } from "../../utils";
interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const MY_EMAIL = "wolfganglloyd.x@gmail.com"; // Replace with your actual email

export default function Contact() {
  // Use Mantine's useForm hook with typed values
  const form: UseFormReturnType<ContactFormValues> = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validate: {
      name: (value) =>
        value.trim().length < 2
          ? "Name must be at least 2 characters long"
          : null,
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email address",
      message: (value) =>
        value.trim().length === 0 ? "Message is required" : null,
    },
  });

  const handleSubmit = async (values: ContactFormValues) => {
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        form.reset(); // Reset the form after submission
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while sending your message.");
    }
  };

  return (
    <main className="p-16 flex flex-col items-center">
      {/* Header Section */}
      <header className="w-full max-w-4xl mb-8  text-center">
        <h1 className="text-6xl md:text-7xl marker w-fit uppercase">Contact</h1>
        <p className="text-center text-lg text-gray-600 mb-4">
          I look forward to hearing from you! Let’s bring your vision to life
          together.
        </p>
      </header>

      {/* Contact Form Section */}
      <Container className="w-full max-w-4xl md:p-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Section - Additional content */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <div className="flex flex-col items-start gap-2">
              <div className="flex justify-center items-center gap-2">
                <MdEmail size={24} />
                <a
                  href={`mailto:${MY_EMAIL}`}
                  className="text-blue-600 underline hover:text-blue-800 transition"
                >
                  {MY_EMAIL}
                </a>
              </div>
              <div className="flex justify-center items-center gap-2">
                <Image
                  src={instagram.src}
                  alt={instagram.alt}
                  width={24} // Default width for small screens
                  height={24} // Default height for small screens
                  className="md:w-6 md:h-6"
                />
                <a
                  href={`mailto:${MY_EMAIL}`}
                  className="text-blue-600 underline hover:text-blue-800 transition"
                >
                  Instagram
                </a>
              </div>
              <div className="flex justify-center items-center gap-2">
                <Image
                  src={facebook.src}
                  alt={facebook.alt}
                  width={24} // Default width for small screens
                  height={24} // Default height for small screens
                  className="md:w-6 md:h-6"
                />
                <a
                  href={`mailto:${MY_EMAIL}`}
                  className="text-blue-600 underline hover:text-blue-800 transition"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="flex flex-col space-y-4">
            <form onSubmit={form.onSubmit(handleSubmit)} className="space-y-4">
              <div>
                <TextInput
                  label="Name"
                  placeholder="Your name"
                  {...form.getInputProps("name")}
                  classNames={{
                    input:
                      "border-gray-300 focus:ring-blue-500 focus:border-blue-500",
                  }}
                />
              </div>

              <div>
                <TextInput
                  label="Email"
                  placeholder="Your email"
                  {...form.getInputProps("email")}
                  classNames={{
                    input:
                      "border-gray-300 focus:ring-blue-500 focus:border-blue-500",
                  }}
                />
              </div>

              <div>
                <Textarea
                  label="Message"
                  placeholder="Your message"
                  {...form.getInputProps("message")}
                  autosize
                  minRows={4}
                  classNames={{
                    input:
                      "border-gray-300 focus:ring-blue-500 focus:border-blue-500",
                  }}
                />
              </div>

              <div className="text-right">
                <Button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </main>
  );
}
