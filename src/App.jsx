import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import RecordData from "./components/recorddata/RecordData";
import Auth from "./components/auth/Auth";
import VideoRepo from "./components/videorepository/VideoRepo";
import SingleVideoView from "./components/singlevideoview/SingleVideoView";
import EmailSenderCard from "./components/emailsent/EmailSenderCard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/*" element={<Auth />} />
          <Route path="/videorepo/*" element={<> <VideoRepo /> <Footer /></>} />
          <Route path="/singlevideoview/*" element={<> <SingleVideoView /> </>} />
          <Route path="/email/*" element={<> <EmailSenderCard /> </>} />
          <Route
            path="/*"
            element={
              <>
                <Navbar />
                <Routes>
                  <Route path="/" exact element={<Home />} />
                  <Route path="/recorddata" element={<RecordData />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
