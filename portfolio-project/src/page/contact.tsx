import Orb from "@/effects/Backgrounds/Orb/Orb";
import LagosClock from "@/pageComponents/clock";
import Footer from "@/pageComponents/footer";
import { sendEmail as sendEmailService } from "@/service/emailService";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  interface SendEmailPayload {
    name: string;
    email: string;
    message: string;
  }

  const [formData, setFormData] = useState<SendEmailPayload>({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage(null);

    try {
      const response = await sendEmailService(formData);
      if (response?.success) {
        toast.success("Email sent successfully")
        setStatusMessage(" Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send email")
        setStatusMessage(" Failed to send email. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send email, please try again")
      console.error("Error sending email:", error);
      setStatusMessage(" An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="w-full min-h-screen bg-black text-white flex justify-center items-center px-4 sm:px-6 md:px-12 py-12 md:py-16">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Left Side - Form */}
          <div className="flex-1 md:flex-[2] flex flex-col justify-center w-full">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center md:text-left">
              Contact
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-8 text-center md:text-left">
              Remember, this is not just a story, this is our future
            </p>

            <form className="space-y-6 w-full" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-future mb-2 text-center md:text-left">
                  MESSAGE ME
                </label>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="NAME"
                    className="w-full sm:w-1/2 px-4 py-3 bg-neutral-900 text-gray-300 rounded-lg focus:outline-none"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="EMAIL"
                    className="w-full sm:w-1/2 px-4 py-3 bg-neutral-900 text-gray-300 rounded-lg focus:outline-none"
                    required
                  />
                </div>
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="MESSAGE"
                className="w-full px-4 py-3 h-32 bg-neutral-900 text-gray-300 rounded-lg focus:outline-none"
                required
              />

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-200 transition disabled:opacity-50"
              >
                {isLoading ? "SENDING..." : "SEND EMAIL"}
              </button>

              {statusMessage && (
                <p className="text-center mt-4 text-sm">
                  {statusMessage}
                </p>
              )}
            </form>
          </div>

          {/* Right Side - Orb */}
          <div className="flex-1 md:flex-[1] flex justify-center items-center w-full">
            <div className="w-full h-[250px] sm:h-[350px] md:h-[500px] rounded-3xl overflow-hidden relative">
              <Orb
                hoverIntensity={0.97}
                rotateOnHover={true}
                hue={271}
                forceHoverState={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lagos Clock */}
      <section className="w-full min-h-screen bg-black text-white flex justify-center items-center px-4">
        <LagosClock />
      </section>

      <Footer />
    </>
  );
}
