"use client";
import React, { useState } from "react";
import { Tags } from "@/components/general/tags";
import { MdEmail, MdPhone } from "react-icons/md";
import { CopyIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IoMdDoneAll } from "react-icons/io";
import Social_links from "@/components/data-display/Social-links";
import SendMessage from "@/components/general/SendMessage";

const Contact = () => {
  const [isCopyid, setIsCopyid] = useState({ email: false, phone: false });

  return (
    <section
      id="contact"
      className="bg-violet-100 dark:bg-[#1b1b40] pt-16 py-3"
    >
      <Tags>Get In Touch</Tags>
      <div className=" max-w-7xl mx-auto px-3 py-4 flex justify-center max-md:flex-col gap-3">
        {/* left side */}
        <div className="md:w-1/2 p-4 rounded-md bg-gray-200 dark:bg-gray-700">
          <div className="text-center text-gray-600 dark:text-gray-400 font-semibold text-lg max-w-200 mx-auto">
            What’s next? Feel free to reach out to me if you are looking for a
            developer, have a query, or simply want to connect.
          </div>
          <div className="flex justify-center flex-col flex-wrap content-center gap-4">
            {/* email and phone  */}
            <div className="py-8 text-3xl font-bold font-mono">
              <div className="email flex-center flex-wrap gap-3">
                <MdEmail />
                <a href="mailto:mrp005c@gmail.com" className="break-all">
                  mrp005c@gmail.com
                </a>
                <Button
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText("mrp005c@gmail.com");
                      setIsCopyid({ ...isCopyid, email: true });
                      const timeoutId = setTimeout(() => {
                        setIsCopyid({ ...isCopyid, email: false });
                        clearTimeout(timeoutId);
                      }, 3000);
                    } catch (error) {
                      console.log(error);
                    }
                  }}
                  size={"icon-lg"}
                  variant={"ghost"}
                >
                  {isCopyid.email ? <IoMdDoneAll /> : <CopyIcon />}
                </Button>
              </div>
              <div className="phone flex-center flex-wrap gap-3">
                <MdPhone />
                <a href="tel:+8801756535801" className="break-all">
                  +8801756535801
                </a>
                <Button
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText("+8801756535801");
                      setIsCopyid({ ...isCopyid, phone: true });
                      const timeoutId = setTimeout(() => {
                        setIsCopyid({ ...isCopyid, phone: false });
                        clearTimeout(timeoutId);
                      }, 3000);
                    } catch (error) {
                      console.log(error);
                    }
                  }}
                  size={"icon-lg"}
                  variant={"ghost"}
                >
                  {isCopyid.phone ? <IoMdDoneAll /> : <CopyIcon />}
                </Button>
              </div>
            </div>

            {/* social links */}

            <div className="flex-center flex-col">
              <div className="text-lg font-semibold">
                You may also find me on these platforms!
              </div>
              <Social_links />
            </div>
          </div>
        </div>

        {/* right side  */}

        <SendMessage />
      </div>
    </section>
  );
};

export default Contact;
