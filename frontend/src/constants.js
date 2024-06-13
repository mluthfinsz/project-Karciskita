import upcoming1 from "./assets/img/upcoming1.png";
import upcoming2 from "./assets/img/upcoming2.png";
import upcoming3 from "./assets/img/upcoming3.png";
import upcoming4 from "./assets/img/upcoming4.png";

import top1 from "./assets/img/top1.png";
import top2 from "./assets/img/top2.png";
import top3 from "./assets/img/top3.png";

import concert1 from "./assets/img/concert1.png";
import concert2 from "./assets/img/concert2.png";
import concert3 from "./assets/img/concert3.png";
import concert4 from "./assets/img/concert4.png";

import workshop1 from "./assets/img/workshop1.png";
import workshop2 from "./assets/img/workshop2.png";
import workshop3 from "./assets/img/workshop3.png";
import workshop4 from "./assets/img/workshop4.png";

import Seminar1 from "./assets/img/Seminar1.jpg";
import Seminar2 from "./assets/img/Seminar2.jpg";

import { RiLock2Fill } from "react-icons/ri";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaCreditCard } from "react-icons/fa6";

export const upComingEvents = [
  {
    id: 1,
    minPrice: "150.000",
    maxPrice: "300.000",
    singer: "NIALL HORAN",
    date: "May 11",
    location: "Beach City International Stadium",
    img: upcoming1,
  },
  {
    id: 2,
    minPrice: "1.050.000",
    maxPrice: "3.350.000",
    singer: "THE DREAM SHOW 3",
    date: "May 18",
    location: "Stadion Utama GBK",
    img: upcoming2,
  },
  {
    id: 3,
    minPrice: "1.600.000",
    maxPrice: "2.600.000",
    singer: "Avenged Sevenfold",
    date: "May 25",
    location: "Stadion Madya GBK",
    img: upcoming3,
  },
  {
    id: 4,
    minPrice: "150.000",
    maxPrice: "300.000",
    singer: "Sounds Fest 2024",
    date: "July 27-28",
    location: "Parking Ground SMB",
    img: upcoming4,
  },
];

export const topSelling = [
  {
    id: 1,
    img: top1,
    title: "The Dream Show 3",
  },
  {
    id: 2,
    img: top2,
    title: "The Life Is But A Dream ",
  },
  {
    id: 3,
    img: top3,
    title: "The Show Live On Tour",
  },
];

export const concert = [
  {
    id: 1,
    title: "Bruno Major",
    minPrice: "350.000",
    maxPrice: "500.000",
    date: "Oct 1",
    location: "Jakarta Convention Cen..",
    img: concert1,
  },
  {
    id: 2,
    title: "Phum Viphurit",
    minPrice: "350.000",
    maxPrice: "500.000",
    date: "Oct 10",
    location: "Jakarta Convention Cen..",
    img: concert2,
  },
  {
    id: 3,
    title: "Sore",
    minPrice: "350.000",
    maxPrice: "500.000",
    date: "Oct 4",
    location: "Jakarta Convention Cen..",
    img: concert3,
  },
  {
    id: 4,
    title: "Sophia Anne Caruso",
    minPrice: "350.000",
    maxPrice: "765.000",
    date: "Oct 30",
    location: "Jakarta Convention Cen..",
    img: concert4,
  },
];

export const OurService = [
  {
    id: 1,
    title: "Online Store with Support Major Payment",
    decription:
      "Accommodating online purchases through the website, We support all the major payment method in Indonesia, from bank transfer to electronic money.",
    logo: FaCreditCard,
  },
  {
    id: 2,
    title: "Admin System",
    decription:
      "Create and monitor your event’s ticket sales reports, in real time anywhere and anytime",
    logo: RiDashboard2Fill,
  },
  {
    id: 3,
    title: "Security",
    decription:
      "We build our system with security in mind, so you as event organizer can focus on your event.",
    logo: RiLock2Fill,
  },
];

export const workshops = [
  {
    id: 1,
    title: "Intro to UI/UX Design",
    minPrice: "200.000",
    maxPrice: "550.000",
    date: "June 20",
    location: "Online",
    img: workshop1,
  },
  {
    id: 2,
    title: "Skills U: UI/UX Design",
    minPrice: "200.000",
    maxPrice: "550.000",
    date: "June 20",
    location: "Online",
    img: workshop2,
  },
  {
    id: 3,
    title: "UI/UX Design Workshop",
    minPrice: "200.000",
    maxPrice: "550.000",
    date: "June 20",
    location: "Online",
    img: workshop3,
  },
  {
    id: 4,
    title: "Coding 105 - UI/UX",
    minPrice: "200.000",
    maxPrice: "550.000",
    date: "June 20",
    location: "Online",
    img: workshop4,
  },
];
