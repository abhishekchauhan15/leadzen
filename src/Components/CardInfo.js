import React, { useState } from "react";
import { Collapse } from "react-bootstrap";

const CardInfo = ({ item }) => {
  const [open, setOpen] = useState(false);
  const fixingPhoneNumber = (phoneNumber) => {
    let phone = phoneNumber.slice(0, 12);
    return phone;
  };
  return (
    <>
      <div class="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 mt-3 p-6">
        <div class="lg:flex items-center text-center">
          <div class="small-container lg:w-1/5 sm:w-full pr-4 pl-4">
            <p>Hello world</p>
          </div>
          <div class="small-container lg:w-1/5 sm:w-full pr-4 pl-4">
            <b>CONTACT</b>
            <p>{item.name}</p>
          </div>
          <div class="small-container lg:w-1/5 sm:w-full pr-4 pl-4">
            <b>STREET</b>
            <p>{item.address.street}</p>
          </div>
          <div class="small-container lg:w-1/5 sm:w-full pr-4 pl-4">
            <b>CITY</b>
            <p>{item.address.city}</p>
          </div>
          <div class="small-container lg:w-1/5 sm:w-full pr-4 pl-4">
            <p>{item.website}</p>
          </div>
          <div class="small-container d-grid">
            <button
              class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-red-600 text-white hover:bg-red-700"
              onClick={() => setOpen(!open)}
              aria-controls="description"
              aria-expanded={open}
            >
              View Details
            </button>
          </div>
        </div>
        <Collapse in={open}>
          <div id="description" class="mt-3">
            <div body class="p-2 container mx-auto sm:px-4">
              <div>
                <b><h6>Description</h6></b>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti adipisci fugit sed! Ullam veritatis facilis non
                  temporibus, id labore quo? Nam possimus illum nulla ipsam
                  explicabo nemo error repellendus vero!
                </p>
              </div>
              <div class="flex flex-wrap  mt-3">
                <div class="md:w-2/5 pr-4 pl-4">
                  <h6>Contact Person</h6>
                  <p>{item.name}</p>
                  <h6>Designation</h6>
                  <p>Proprietor</p>
                  <h6>Email</h6>
                  <p>{item.email}</p>
                  <h6>Phones</h6>
                  <p>{fixingPhoneNumber(item.phone)}</p>
                </div>
                <div class="md:w-3/5 pr-4 pl-4">
                  <b><h6>Address</h6></b>
                  <p>{item.address.street + " " + item.address.suite + " " + item.address.city + " " + item.address.zipcode}</p>
                  <b><h6>City</h6></b>
                  <p>{item.address.city}</p>
                  <b><h6>Pin-code</h6></b>
                  <p>{item.address.zipcode}</p>
                  <b><h6>Country</h6></b>
                  <p>U.S.A</p>
                </div>
              </div>
            </div>
          </div>
        </Collapse>
      </div>
    </>
  );
};


export default CardInfo;
