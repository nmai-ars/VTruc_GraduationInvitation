import { useRef, useState, useEffect } from "react";
import "./App.css";

function App() {
  const [opened, setOpened] = useState(false);
  const guests = {
  kiwikiwi: "KiwiKiwi",
  vantrinh: "Vân Trinh",
  camquy: "Cẩm Quy",
  lehang: "Lê Hằng",
  mydung: "Mỹ Dung",
  emvan: "Em Vân",
  emphuc: "Em Phúc",
  huynhnhu: "Huỳnh Như",
  thanhngan: "Thanh Ngân",
  yennhi: "Yến Nhi",
  thanhhuyen: "Thanh Huyền",
  thuyen: "Thu Uyên",
  hoangbao: "Hoàng Bảo",
  nmai: "nờ mai"
};

const path = window.location.pathname
  .replace("/", "")
  .toLowerCase();

const guestName = guests[path] || "Bạn";
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef(null);

  const openInvitation = () => {
    setOpened(true);

    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setMusicOn(true))
        .catch(() => {});
    }
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (musicOn) {
      audioRef.current.pause();
      setMusicOn(false);
    } else {
      audioRef.current
        .play()
        .then(() => setMusicOn(true))
        .catch(() => {});
    }
  };

  return (
    <div className="app">

      <audio
        ref={audioRef}
        src="/music/graduation.mp3"
        loop
      />

      {!opened ? (
        <div className="welcome">

          <div className="decor decor-1">♡</div>
          <div className="decor decor-2">✦</div>
          <div className="decor decor-3">✿</div>
          <div className="decor decor-4">♡</div>

          <p className="year">2026</p>

          <div className="graduation-cap">🎓</div>

          <h1>Happy</h1>
          <h2>Graduation</h2>

          <div className="line"></div>

          <p className="name">Vy Trúc</p>

          <p className="welcome-text">
            Một ngày đặc biệt đang đến...
          </p>

          <button
            className="open-button"
            onClick={openInvitation}
          >
            MỞ THIỆP
          </button>

        </div>
      ) : (

        <main className="invitation">

          <div className="graduation-sash">
            <span>🎓</span>
            <strong>H<br />A<br />P<br />P<br />Y<br />  <br />G<br />R<br />A<br />D<br />U<br />A<br />T<br />I<br />O<br />N<br />   <br /></strong>
          </div>

          {/* NÚT NHẠC */}

          <button
            className="music-button"
            onClick={toggleMusic}
          >
            {musicOn ? "♫  Nhạc đang phát" : "♫  Bật nhạc"}
          </button>


          {/* PHẦN ĐẦU */}

          <section className="hero">

            <p className="small-title">
              ✦ HAPPY GRADUATION ✦
            </p>

            <h1>Vy Trúc</h1>

            <p className="graduation-text">
              Thân mời
            </p>

            <div className="guest-name">
              {guestName}
            </div>

            <p className="invitation-text">
              đến tham dự lễ tốt nghiệp
              <br />
              và chung vui trong ngày đặc biệt này.
            </p>

            <div className="photo-frame">
              <img
                src="/images/vy-truc.jpg"
                alt="Vy Trúc"
              />
            </div>

          </section>


          {/* THỜI GIAN */}

          <section className="date-section">

            <p className="section-label">
              THE SPECIAL DAY
            </p>

            <h2>Thời gian</h2>

            <div className="date-content">

              <div className="big-time">
                11 giờ 00 phút
              </div>

              <div className="date-line">
                Thứ Tư
              </div>

              <div className="date-full">
                Ngày 30 tháng 9 năm 2026
              </div>

            </div>

          </section>


          {/* ĐỊA ĐIỂM */}

          <section className="location-section">

            <p className="section-label">
              THE CEREMONY
            </p>

            <h2>Địa điểm</h2>

            <div className="location-content">

              <div className="location-icon">
                ♡
              </div>

              <h3>
                Hội trường Trường Công nghệ
                <br />
                Thông tin & Truyền thông Việt – Hàn
              </h3>

              <p>
                470 Trần Đại Nghĩa,
                <br />
                Ngũ Hành Sơn, Đà Nẵng
              </p>

            </div>


            {/* MAP */}

            <div className="map-card">

              <iframe
                title="Google Maps"
                src="https://www.google.com/maps?q=Trường+Công+nghệ+Thông+tin+và+Truyền+thông+Việt+Hàn,+470+Trần+Đại+Nghĩa,+Ngũ+Hành+Sơn,+Đà+Nẵng&output=embed"
                loading="lazy"
                allowFullScreen
              ></iframe>

              <a
                className="map-button"
                href="https://www.google.com/maps/search/?api=1&query=Trường+Công+nghệ+Thông+tin+và+Truyền+thông+Việt+Hàn+470+Trần+Đại+Nghĩa+Đà+Nẵng"
                target="_blank"
                rel="noreferrer"
              >
                📍 Mở Google Maps
              </a>

            </div>

          </section>


          {/* COUNTDOWN */}

          <Countdown />


          {/* KẾT */}

          <section className="closing">

            <div className="flowers">
              🌸
            </div>

            <h2>
              Hẹn gặp bạn
              <br />
              trong ngày đặc biệt này!
            </h2>

            <p>
              Sự hiện diện của bạn sẽ làm ngày tốt nghiệp
              của Vy Trúc trở nên thật đáng nhớ. ♡
            </p>

            <div className="signature">
              With love,
              <br />
              <strong>Vy Trúc</strong>
            </div>

          </section>

        </main>
      )}
    </div>
  );
}


function Countdown() {

  const calculateTime = () => {

    const target = new Date(
      "2026-09-30T11:00:00+07:00"
    );

    const now = new Date();

    const difference = target - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    return {
      days: Math.floor(
        difference / (1000 * 60 * 60 * 24)
      ),

      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),

      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),

      seconds: Math.floor(
        (difference / 1000) % 60
      )
    };
  };


  const [time, setTime] = useState(
    calculateTime()
  );


  useEffect(() => {

    const timer = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(timer);

  }, []);


  return (

    <section className="countdown-section">

      <p className="section-label">
        COUNTDOWN
      </p>

      <h2>
        Đếm ngược đến ngày đặc biệt
      </h2>

      <div className="countdown">

        <div>
          <strong>{time.days}</strong>
          <span>Ngày</span>
        </div>

        <div>
          <strong>{time.hours}</strong>
          <span>Giờ</span>
        </div>

        <div>
          <strong>{time.minutes}</strong>
          <span>Phút</span>
        </div>

        <div>
          <strong>{time.seconds}</strong>
          <span>Giây</span>
        </div>

      </div>

    </section>

  );
}


export default App;