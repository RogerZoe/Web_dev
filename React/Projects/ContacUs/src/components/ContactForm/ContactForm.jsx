import React from "react";

import Button from "../Button/Button";
import { MdOutlineComment } from "react-icons/md";
import { MdCall } from "react-icons/md";
import Service from "../../Images/Service.png";

const ContactHeader = () => {
  return (
    <main className="h-full  flex justify-center items-center gap-34">
      <div className="flex flex-col gap-4  ">
        <div className="flex  gap-3 ">
          <Button
            name="VIA SUPPORT CHAT"
            image=<MdOutlineComment fontSize={"20px"} />
          />
          <Button name="VIA CALL" image=<MdCall fontSize={"20px"} /> />
        </div>
        <Button
          isOutline={true}
          name="VIA EMAIL FROM"
          image=<MdOutlineComment fontSize={"20px"} />
        />
        <div>
          {/* <form action="">
            <fieldset className="border p-4 ">
              <legend className="px-2 text-sm">Name</legend>
              <input type="text" id="name" className="w-full border  " />
            </fieldset>
          </form> */}
          <form action="" className="flex gap-4 flex-col">
            <div className="border relative p-2">
              <label
                className="absolute bottom-8 border-t-transparent bg-white px-2 left-4"
                htmlFor="Name"
              >
                Name
              </label>
              <input type="text" className="w-full outline-none " />
            </div>
            <div className="border relative p-2">
              <label
                className="absolute bottom-8 border-t-transparent bg-white px-2 left-4"
                htmlFor="E-mail"
              >
                E-Mail
              </label>
              <input type="mail" className="w-full outline-none " />
            </div>
            <div className="border relative p-2">
              <label
                className="absolute -top-4 px-2 border-t-transparent bg-white "
                htmlFor=""
              >
                Text
              </label>
              <textarea
                className="w-full outline-none p-2"
                name="Text"
                placeholder="Enter your text here"
              ></textarea>
            </div>
          </form>
        </div>
        <div className="flex justify-end">
          <div className="mt-2">
            <Button name="SUBMIT" />
          </div>
        </div>
      </div>
      <div>
        <img src={Service} className="h-[408px] w-[608px]" alt="service" />
      </div>
    </main>
  );
};

export default ContactHeader;
