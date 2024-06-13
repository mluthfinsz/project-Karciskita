import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SearchBeforeLoginPage from "./page/SearchBeforeLoginPage";
import SearchAfterLoginPage from "./page/SearchAfterLoginPage";
import AboutBeforeLoginPage from "./page/AboutBeforeLoginPage";
import AboutAfterLoginPage from "./page/AboutAfterLoginPage";
import ResultBeforeLogin from "./page/ResultBeforeLogin";
import ResultAfterLogin from "./page/ResultAfterlogin";
import CreateEvent from "./page/CreateEvent";
import CreateEventSuccess from "./page/CreateEventSuccess";
import Login from "./page/Login";
import Register from "./page/Register";
import Profile from "./page/Profile";
import TicketInfo from "./page/TicketInfo";
import ConfirmProggress from "./page/ConfirmProggress";
import ConfirmSuccess from "./page/ConfirmSuccess";
import PaymentConfirm from "./page/PaymentConfirm";
import PaymentSuccess from "./page/PaymentSuccess";
import OthersAfterLogin from "./page/OthersAfterLogin";
import CreateEventBaru from "./page/CreateEventBaru/CreateEvent";
import SeminarBefore from "./page/SeminarBefore";
import CreateEventAfter from "./page/CreateEventAfter";
import PilihanLogin from "./page/PilihanLogin";

{
  /*admin*/
}
import LoginAdmin from "./page/LoginAdmin";
import Dashboard from "./page/dashboard";
import Event from "./page/event";
import DetailEvent from "./page/detail-event";
import Participant from "./page/participant";
import Cash from "./page/cash";
import ChangePasswordModal from "./page/change";

{
  /*seminar*/
}
import Seminar from "./page/SeminarAfter";
import SeminarCareer from "./page/SeminarCareer";
import SeminarUG from "./page/SeminarUG";

{
  /*other*/
}
import WorkshopPertama from "./page/WorkshopPertama";
import WorkshopKedua from "./page/WorkshopKedua";
import WorkshopKetiga from "./page/WorkshopKetiga";
{
  /*concert*/
}
import ConcertSoundfest from "./page/ConcertSoundfest";
import ConcertBigbang from "./page/ConcertBigbang";
import ConcertJava from "./page/ConcertJava";
import OthersBeforeLogin from "./page/OthersBeforeLogin";
import PrivacyPolicy from "./page/PrivacyPolicy";

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/pilihan" element={<PilihanLogin />} />
        <Route path="/seminarbefore" element={<SeminarBefore />} />
        <Route path="/workshoppertama" element={<WorkshopPertama />} />
        <Route path="/workshopkedua" element={<WorkshopKedua />} />
        <Route path="/othersbeforelogin" element={<OthersBeforeLogin />} />
        <Route path="/workshopketiga" element={<WorkshopKetiga />} />
        <Route path="/pilihanlogin" element={<PilihanLogin />} />

        {/*Seminar*/}
        <Route path="/seminarafter" element={<Seminar />} />
        <Route path="/seminarcareer" element={<SeminarCareer />} />
        <Route path="/seminarug" element={<SeminarUG />} />

        {/*concert*/}
        <Route path="/concertsoundfest" element={<ConcertSoundfest />} />
        <Route path="/concertbigbang" element={<ConcertBigbang />} />
        <Route path="/concertjava" element={<ConcertJava />} />

        {/*Admin*/}
        <Route path="/loginadmin" element={<LoginAdmin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/event" element={<Event />} />
        <Route path="/detail-event" element={<DetailEvent />} />
        <Route path="/participant" element={<Participant />} />
        <Route path="/cash" element={<Cash />} />
        <Route path="/change" element={<ChangePasswordModal />} />

        {/* 1 */}
        <Route path="/" element={<SearchBeforeLoginPage />} />
        <Route path="/CreateEventBaru" element={<CreateEventBaru />} />
        <Route path="/OthersAfterLogin" element={<OthersAfterLogin />} />
        <Route path="/createeventafter" element={<CreateEventAfter />} />

        {/* 2 */}
        <Route path="/afterLogin" element={<SearchAfterLoginPage />} />

        {/* 3 */}
        <Route path="/about" element={<AboutBeforeLoginPage />} />

        {/* 4 */}
        <Route path="/aboutAfterLogin" element={<AboutAfterLoginPage />} />

        {/* 5 */}
        <Route path="/result" element={<ResultBeforeLogin />} />

        {/* 6 */}
        <Route path="/resultAfterLogin" element={<ResultAfterLogin />} />

        <Route path="/seminarbefore" element={<Seminar />} />

        {/* 7 */}
        <Route path="/create" element={<CreateEvent />} />

        {/* 8 */}
        <Route path="/createSuccess" element={<CreateEventSuccess />} />

        {/* 10 */}
        <Route path="/Login" element={<Login />} />

        {/* 11 */}
        <Route path="/register" element={<Register />} />

        {/* 12 */}
        <Route path="/profile" element={<Profile />} />

        {/* 13 */}
        <Route path="/ticketinfo" element={<TicketInfo />} />

        {/* 14 */}
        <Route path="/confirmprogress" element={<ConfirmProggress />} />

        {/* 15 */}
        <Route path="/confirmsuccess" element={<ConfirmSuccess />} />

        {/* 15 */}
        <Route path="/paymentconfirm" element={<PaymentConfirm />} />

        {/* 15 */}
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
      </Routes>
    </Router>
  );
};

export default App;
