"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import logo from "@/public/logo.png";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import Link from "next/link";
import { useRouter } from "next/router";

const MOBILE_NAV_ITEMS = [
  {
    id: 0,
    navTitle: "home.",
    to: "/",
  },
  {
    id: 1,
    navTitle: "about us.",
    to: "/about",
  },
  {
    id: 2,
    navTitle: "events.",
    to: "/events",
  },
  {
    id: 3,
    navTitle: "classes.",
    to: "/classes",
  },
];

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (prev) {
      if (latest > prev && latest > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    }
  });
  console.log(hidden);

  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2,
      },
    },
    closed: { opacity: 0 },
  };

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  };

  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };

  const fadeInStart = { opacity: 0 };
  const fadeInEnd = { opacity: 1 };
  const fadeInTransition = { duration: 1 };

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="p-5 lg:p-8 fixed z-50 left-0 w-full  top-0"
    >
      <motion.nav
        initial="closed"
        animate={mobileNavOpen ? "opened" : "closed"}
        className="flex justify-between items-center mx-3 lg:mx-10 "
      >
        <div className="overflow-hidden bg-transparent ">
          <motion.h1
            variants={hideNavItemsVariant}
            className=" font-monos text-primary-bee-black tracking-tight font-bold text-base lg:text-2xl"
          >
            The Hive
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.div
            variants={hideNavItemsVariant}
            onClick={() => setMobileNavOpen(true)}
            className="uppercase text-sm lg:text-lg font-medium font-monos text-primary-bee-black cursor-pointer tracking-tight"
          >
            Menu
          </motion.div>
        </div>
        <motion.div
          variants={mobileMenuVariant}
          className="fixed top-0 left-0 flex flex-col items-center w-full h-screen bg-accent-soft-gray"
        >
          <motion.button
            variants={fadeInVariant}
            onClick={() => setMobileNavOpen(false)}
            className="self-end lg:mt-9 mt-6 mr-9 lg:mr-16 outline-none border-none bg-transparent uppercase text-xs lg:text-lg tracking-tight font-monos font-medium text-primary-bee-black cursor-pointer "
          >
            Close
          </motion.button>

          <div className="flex w-full lg:flex-row justify-between flex-col-reverse lg:ml-10 h-5/6 lg:items-center ">
            <motion.ul
              className="px-5 lg:self-end flex lg:flex-col gap-4"
              variants={liVariant}
            >
              <Link href="https://www.facebook.com/profile.php?id=61550785031884&mibextid=ZbWKwL">
                <FaFacebook
                  color={"rgb(82 82 91)"}
                  className="text-3xl lg:text-4xl"
                />
              </Link>
              {/* <Link href="/">
                <FaInstagram color={"rgb(82 82 91)"} size={28} />
              </Link> */}
              <Link href="https://discord.gg/7H7VBWY6vf">
                <FaDiscord
                  color={"rgb(82 82 91)"}
                  className="text-3xl lg:text-4xl"
                />
              </Link>
              <Link href="https://t.me/+pnU0fIZ6MV5iODE9">
                <FaTelegram
                  color={"rgb(82 82 91)"}
                  className="text-3xl lg:text-4xl"
                />
              </Link>
            </motion.ul>
            <motion.ul variants={ulVariant} className="list-none px-6 w-full ">
              {MOBILE_NAV_ITEMS.map((navItem) => (
                <Link
                  href={navItem.to}
                  onClick={() => setMobileNavOpen(false)}
                  prefetch={true}
                  key={navItem.id}
                >
                  <motion.li
                    whileTap={{ scale: 0.95 }}
                    className="my-5 text-zinc-600 transition ease-in-out font-semibold opacity-40 hover:opacity-100 font-monos overflow-hidden select-none cursor-pointer"
                  >
                    <motion.div
                      variants={liVariant}
                      className="text-left  text-5xl lg:text-7xl"
                    >
                      {navItem.navTitle}
                    </motion.div>
                  </motion.li>
                </Link>
              ))}
            </motion.ul>
            <div className="w-1 h-8"></div>
          </div>
          {/* <motion.div variants={fadeInVariant} className="mt-20 flex">
            <h5 className="font-normal text-primary-honey-yellow mr-10">
              +852 5650 2233
            </h5>
            <h5 className="font-normal ">hi@designagency.com</h5>
          </motion.div> */}
        </motion.div>
      </motion.nav>
    </motion.nav>
  );
};

export default Navbar;
