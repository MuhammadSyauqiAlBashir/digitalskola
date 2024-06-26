"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import { IoCloudDownloadOutline, IoPersonCircle } from "react-icons/io5";
import { ReactNode, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 1024, min: 0 },
    items: 1,
  },
};
const responsive2 = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 1024, min: 0 },
    items: 1,
  },
};
const CarouselItem = ({ children }) => {
  return <div className="bg-white rounded-md h-80 xl:h-72">{children}</div>;
};
const CarouselItem2 = ({ children }) => {
  return (
    <div className="bg-white rounded-md w-full h-80 xl:h-72">{children}</div>
  );
};
const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return <button onClick={() => onClick()} />;
};

export default function Home() {
  const [guests, setGuests] = useState(null);
  if (!guests) {
    const getUser = async () => {
      const { value: name } = await Swal.fire({
        title: "Input your Name",
        input: "text",
        inputLabel: "Your Full Name",
        inputPlaceholder: "Enter your name",
      });
      if (name) {
        setGuests(name);
        Swal.fire(`Welcome ${name}`);
      }
    };
    getUser();
  }
  const testimoniRef = useRef(null);

  const handleLihatTestimoniClick = () => {
    if (!testimoniRef.current) return;
    testimoniRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <main className="flex bg-[url('/bg.png')] bg-no-repeat bg-cover min-h-screen flex-col py-4 px-8 md:py-12 md:px-20 lg:py-12 lg:px-20 xl:py-20 xl:px-32 2xl:py-32 2xl:px-60">
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="py-8 px-4 gap-12">
          <p>Hi {guests}, Selamat datang di</p>
          <h1 className="text-6xl font-medium leading-tight py-6">
            Digital Marketing Job Guarantee BootCamp
          </h1>
          <p>
            Raih karir impian dengan pelatihan intensif dan eksklusif bersama
            high-achievers dengan jaminan 100% uang kembali
          </p>
          <p className="mt-6">
            100% Alumni Job Guarantee Program telah bekerja di :
          </p>
          <div className="flex flex-row items-center pt-6">
            <img
              className="w-1/2 object-contain h-20"
              src="/bukalapak.svg"
              alt="Bukalapak"
            />
            <img
              className="w-1/2 object-contain h-8"
              src="/gojek.svg"
              alt="Gojek"
            />
          </div>
        </div>
        <div className="py-8 px-4">
          <img
            src="https://pedagoo.com/wp-content/uploads/2020/06/2250x1500_czy-warto-korzystac-ze-szkolen-online-ollh.jpg"
            alt="e-learning"
          />
        </div>
      </section>
      <div className="flex flex-col justify-center items-center py-20">
        <button
          onClick={handleLihatTestimoniClick}
          className="bg-[#0097a3] text-white p-4 rounded-full flex-shrink-0"
        >
          <ArrowDownIcon className="size-6 text-white" />
        </button>
        <p className="text-[#0097a3] mt-6">Lihat Testimoni</p>
      </div>
      <section className="flex flex-col lg:flex-row">
        <div
          className="bg-testimoni-section rounded-3xl lg:w-8/12"
          ref={testimoniRef}
        >
          <div className="flex flex-row justify-center items-center pt-10">
            <IoCloudDownloadOutline className="flex border-white border-2 bg-white rounded-full text-3xl" />
            <h2 className="text-white text-xl ml-6">Pengalaman Alumni</h2>
          </div>
          <div className="p-8 w-full">
            <Carousel
              responsive={responsive}
              showDots={true}
              removeArrowOnDeviceType={["mobile", "desktop"]}
            >
              <CarouselItem className="">
                <div className="flex flex-row p-5">
                  <IoPersonCircle className="text-6xl" />
                  <div>
                    <p className="font-bold">Agus Angga Dwi Wibowo</p>
                    <p className="font-thin">Digital Campaign at SCB Digital</p>
                  </div>
                </div>
                <div className="flex items-center justify-center flex-col">
                  <div className="p-4 border-2 w-5/6 flex justify-center items-center flex-col">
                    <p className="text-gray-500">Sebelum Bootcamp</p>
                    <p>Digital Marketer intern at Katova Creative</p>
                    <ArrowDownIcon className="size-6 text-[#0097a3]" />
                    <p>Setelah dua bulan bekerja di -</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="">
                <div className="flex flex-row p-5">
                  <IoPersonCircle className="text-6xl" />
                  <div>
                    <p className="font-bold">Fa'iz Muhammad Azhar</p>
                    <p className="font-thin">
                      Market Place Operation - Evergreen
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center flex-col">
                  <div className="p-4 border-2 w-5/6 flex justify-center items-center flex-col">
                    <p className="text-gray-500">Sebelum Bootcamp</p>
                    <p>Digital Marketer intern at Katova Creative</p>
                    <ArrowDownIcon className="size-6 text-[#0097a3]" />
                    <p>Setelah dua bulan bekerja di -</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="">
                <div className="flex flex-row p-5">
                  <IoPersonCircle className="text-6xl" />
                  <div>
                    <p className="font-bold">Agus Angga Dwi Wibowo</p>
                    <p className="font-thin">Digital Campaign at SCB Digital</p>
                  </div>
                </div>
                <div className="flex items-center justify-center flex-col">
                  <div className="p-4 border-2 w-5/6 flex justify-center items-center flex-col">
                    <p className="text-gray-500">Sebelum Bootcamp</p>
                    <p>Digital Marketer intern at Katova Creative</p>
                    <ArrowDownIcon className="size-6 text-[#0097a3]" />
                    <p>Setelah dua bulan bekerja di -</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="">
                <div className="flex flex-row p-5">
                  <IoPersonCircle className="text-6xl" />
                  <div>
                    <p className="font-bold">Agus Angga Dwi Wibowo</p>
                    <p className="font-thin">Digital Campaign at SCB Digital</p>
                  </div>
                </div>
                <div className="flex items-center justify-center flex-col">
                  <div className="p-4 border-2 w-5/6 flex justify-center items-center flex-col">
                    <p className="text-gray-500">Sebelum Bootcamp</p>
                    <p>Digital Marketer intern at Katova Creative</p>
                    <ArrowDownIcon className="size-6 text-[#0097a3]" />
                    <p>Setelah dua bulan bekerja di -</p>
                  </div>
                </div>
              </CarouselItem>
            </Carousel>
          </div>
          <div className="flex items-center justify-center py-9">
            <div className="flex justify-center items-center border w-72 h-14 bg-[#0097a3]  rounded-lg">
              <p className="text-white">Lihat Lebih Banyak Testimoni</p>
            </div>
          </div>
          <div className="bg-black bg-opacity-15 p-7 order-last">
            <p className="text-center text-2xl font-bold py-8">
              Apa Kata Mereka
            </p>
            <div className="flex items-center justify-center">
              <div className="border-4 w-full">
                <Carousel
                  responsive={responsive2}
                  customRightArrow={<CustomRightArrow />}
                  removeArrowOnDeviceType={["mobile", "desktop"]}
                >
                  <CarouselItem2>
                    <div className="flex flex-row p-5">
                      <IoPersonCircle className="text-6xl" />
                      <div>
                        <p className="font-bold">Agus Angga Dwi Wibowo</p>
                        <p className="font-thin">
                          Digital Campaign at SCB Digital
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center flex-col">
                      <div className="p-4 border-2 w-5/6 flex justify-center items-center flex-col">
                        <p>bootcamp terkeren</p>
                      </div>
                    </div>
                  </CarouselItem2>
                  <CarouselItem2>
                    <div className="flex flex-row p-5">
                      <IoPersonCircle className="text-6xl" />
                      <div>
                        <p className="font-bold">Agus Angga Dwi Wibowo</p>
                        <p className="font-thin">
                          Digital Campaign at SCB Digital
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center flex-col">
                      <div className="p-4 border-2 w-5/6 flex justify-center items-center flex-col">
                        <p>bootcamp terkeren</p>
                      </div>
                    </div>
                  </CarouselItem2>
                  <CarouselItem2>
                    <div className="flex flex-row p-5">
                      <IoPersonCircle className="text-6xl" />
                      <div>
                        <p className="font-bold">Agus Angga Dwi Wibowo</p>
                        <p className="font-thin">
                          Digital Campaign at SCB Digital
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center flex-col">
                      <div className="p-4 border-2 w-5/6 flex justify-center items-center flex-col">
                        <p>bootcamp terkeren</p>
                      </div>
                    </div>
                  </CarouselItem2>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full bg-white shadow-2xl ml-5 p-9 rounded-3xl space-y-6 lg:w-4/12 lg:sticky lg:top-0 lg:-mt-60">
          <p className="">Detail</p>
          <div className="flex items-center justify-center">
            <img
              src="/onlinebootcamp.png"
              className="h-96 w-full"
              alt="online bootcamp"
            />
          </div>
          <p className="font-bold">Online BootCamp</p>
          <p className="text-slate-700 line-through">RP.4.499.999</p>
          <div className="flex flex-row">
            <p className="bg-red-600 border-red-600 border-8">22%</p>
            <p className="text-amber-400 p-2">Rp. 3.499.999</p>
          </div>
          <button className="text-center text-black border-4 rounded-xl border-yellow-400 bg-yellow-400 w-full h-10">
            Daftar Sekarang
          </button>
          <br />
          <button className="text-center text-white border-4 rounded-xl border-green-600 bg-green-600 w-full h-10">
            Klaim Diskon Disini
          </button>
          <p className="w-full text-center">atau</p>
          <a
            href="#"
            className="underline underline-offset-1 items-center justify-center flex"
          >
            Lihat Detail Program
          </a>
        </div>
      </section>
    </main>
  );
}
