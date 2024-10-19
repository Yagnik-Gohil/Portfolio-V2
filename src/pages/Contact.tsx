import { useEffect, useState } from "react";
import ServiceIcon from "../components/ServiceIcon";
import Tag from "../components/Tag";
import { CONTACT, EMAIL, ICON } from "../constant";
import { useBackground } from "../context/background";
import SocialCard from "../components/SocialCard";
import { Link } from "react-router-dom";

const Contact = () => {
  const { setBackground } = useBackground();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setBackground("linear-gradient(135deg, #20d7ff, #00a5cd 75%)");
    return () => setBackground("linear-gradient(135deg, #ffce4c, #ff6321 75%)");
  }, [setBackground]);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission

    const emailData = {
      name,
      email,
      message,
    };
    // Validation check for empty fields
    if (!name || !email || !message) {
      alert("Please fill in all fields."); // Show alert if any field is empty
      return; // Stop the function execution
    }
    const text = `Name: ${emailData.name}\nEmail: ${emailData.email}\nMessage: ${emailData.message}`;
    console.log(text);

    // Clear the form (optional)
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <section className="grid grid-cols-1 xl:grid-cols-2 p-6 md:p-12 bg-[#20d7ff08] border-b border-b-[#ffffff1a] gap-8 items-center">
        <div className="flex flex-col gap-4 items-start">
          <Tag
            background="#20d7ff0d"
            border="#20d7ff33"
            title="Contact"
            color="#20d7ff"
          />
          <h2 className="text-white max-w-[280px] text-2xl md:text-[28px] md:max-w-[320px] lg:text-[32px] lg:max-w-[400px] font-medium leading-[112%]">
            {CONTACT.TITLE}
          </h2>
          <p className="text-[#ffffff80] max-w-[360px] leading-[112%] text-sm">
            {CONTACT.SUMMARY}
          </p>
        </div>
        <div className="flex items-start relative">
          <ServiceIcon
            background="#20d7ff"
            border="#20d7ff1a"
            src={ICON.PEN}
            className="relative z-30"
          />
          <ServiceIcon
            background="#20d7ff59"
            border="#20d7ff1a"
            src={ICON.BOOK}
            className="absolute left-[65px] md:left-[90px] lg:left-[110px] z-20 backdrop-blur-3xl"
          />
          <ServiceIcon
            background="#20d7ff1a"
            border="#20d7ff1a"
            src={ICON.MAIL_BOX}
            className="absolute left-[130px] md:left-[180px] lg:left-[220px] z-10"
          />
        </div>
      </section>
      <section className="grid grid-cols-1 xl:grid-cols-2 p-6 md:p-12 gap-3">
        <div className="flex flex-col p-6 pb-8 gap-8 rounded-xl relative overflow-hidden bg-[#20d7ff0d] border border-[#20d7ff0d]">
          <div className="flex flex-col gap-2">
            <h2 className="text-white max-w-[184px] text-lg md:max-w-[400px] md:text-xl lg:text-2xl lg:max-w-[280px] leading-[112%] font-medium">
              {CONTACT.FORM}
            </h2>
            <p className="text-[#ffffff80] leading-[112%] text-sm">
              {CONTACT.FORM_SUMMARY}
            </p>
          </div>

          <form className="flex flex-col gap-2" onSubmit={submit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-5 py-[18px] bg-[#20d7ff0d] border border-[#20d7ff1a] text-white h-14 rounded-[10px] hover:b-[#20d7ff33] hover:bg-[#20d7ff1a] focus:b-[#20d7ff59] focus:bg-[#20d7ff33] transition-all duration-500 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-5 py-[18px] bg-[#20d7ff0d] border border-[#20d7ff1a] text-white h-14 rounded-[10px] hover:b-[#20d7ff33] hover:bg-[#20d7ff1a] focus:b-[#20d7ff59] focus:bg-[#20d7ff33] transition-all duration-500 outline-none"
            />
            <textarea
              placeholder="How can I help you?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="px-5 py-[18px] bg-[#20d7ff0d] border border-[#20d7ff1a] text-white min-h-36 rounded-[10px] hover:b-[#20d7ff33] hover:bg-[#20d7ff1a] focus:b-[#20d7ff59] focus:bg-[#20d7ff33] transition-all duration-500 outline-none"
            />
            <input
              type="submit"
              value="Send a Message"
              className="p-4 rounded-[10px] bg-[#20d7ff33] border border-[#20d7ff1a] text-[#20d7ff] leading-[112%] hover:bg-[#20d7ff59] transition-all duration-500 hover:shadow-card"
            />
          </form>
          <div className="flex flex-col justify-start items-center absolute top-0 right-0 left-0">
            <div
              className="rounded-[100px] w-60 h-16 mt-[-32px] bg-[#20d7ff33]"
              style={{ filter: "blur(50px)" }}
            ></div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col p-6 pb-8 gap-5 rounded-xl relative overflow-hidden bg-[#20d7ff0d] border border-[#20d7ff0d]">
            <h2 className="text-white max-w-[184px] text-lg md:max-w-[400px] md:text-xl lg:text-2xl lg:max-w-[280px] leading-[112%] font-medium">
              {CONTACT.SOCIAL_LINK}
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {CONTACT.LINK.map((item, index) => {
                return <SocialCard item={item} key={index} />;
              })}
            </div>
            <div className="flex flex-col justify-start items-center absolute top-0 right-0 left-0">
              <div
                className="rounded-[100px] w-60 h-16 mt-[-32px] bg-[#20d7ff33]"
                style={{ filter: "blur(50px)" }}
              ></div>
            </div>
          </div>

          <div className="bg-[#20d7ff1a] w-full text-[#20d7ff] border border-[#bf6fff1a] relative flex flex-col gap-[14px] flex-1 justify-start items-start overflow-hidden p-6 rounded-xl">
            <div className="flex flex-col gap-2">
              <h2 className="text-white max-w-[184px] text-lg md:max-w-[400px] md:text-xl lg:text-2xl lg:max-w-[280px] leading-[112%] font-medium">
                {CONTACT.CONTACT}
              </h2>
              <p className="text-[#ffffff80] leading-[112%] text-sm">
                {CONTACT.CONTACT_SUMMARY}
              </p>
            </div>
            <Link
              to={EMAIL}
              className="bg-[#ffffff1a] hover:bg-[#ffffff4d] rounded-[10px] px-4 py-3 flex items-center justify-center text-[#ffffffa6] hover:text-white transition-colors duration-300 shadow-card"
            >
              <div className="">Send Mail</div>
            </Link>
            <div className="flex justify-center items-center absolute bg-[#20d7ff1a] border-[#20d7ff33] border p-[28px] md:p-8 rounded-[50%] top-auto right-[-16px] bottom-[-8px] md:right-[-14px] md:bottom-[-14px] lg:p-10 lg:right-[-16px] lg:bottom-[-24px] left-auto">
              <img
                src={ICON.MAIL}
                className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
              ></img>
            </div>
            <div className="flex flex-col justify-start items-center absolute top-0 right-0 left-0">
              <div
                className="rounded-[100px] w-60 h-16 mt-[-32px] bg-[#20d7ff33]"
                style={{ filter: "blur(50px)" }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
