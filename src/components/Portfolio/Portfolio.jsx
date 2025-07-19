import React, { useState } from "react";
import "./Portfolio.css"; // تأكد من أن هذا المسار صحيح

// استورد الصور مباشرة في بداية الملف
import poert1 from "../../assets/images/poert1.png"; // تأكد من هذه المسارات والأسماء
import port2 from "../../assets/images/port2.png";   // تأكد من هذه المسارات والأسماء
import port3 from "../../assets/images/port3.png";   // تأكد من هذه المسارات والأسماء

export default function Portfolio() {
  const [previewImageSrc, setPreviewImageSrc] = useState(null);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);

  function previewImg(src) {
    setPreviewImageSrc(src);
    setIsPreviewVisible(true);
  }

  function closeImg() {
    setIsPreviewVisible(false);
    setPreviewImageSrc(null);
  }

  return (
    <section
      id="portfolio"
      className="min-vh-100 d-flex justify-content-center align-items-center mt-3 mb-5"
    >
      <div className="container mt-5">
        <div className="title mt-5">
          <h1 className="text-center display-6 fw-bold t-color">
            PORTFOLIO COMPONENT
          </h1>

          <div className="star-container mt-3 mb-3 d-flex justify-content-center align-items-center">
            <div id="line"></div>
            <i className="fa fa-solid fa-star t-color"></i>
            <div id="line"></div>
          </div>
        </div>

        <div className="row g-4 mt-3">
          {/* هنا أجزاء عرض الصور المصغرة */}
          {/* تأكد من أن الصور المستوردة (poert1, port2, port3) معرفة بشكل صحيح في الأعلى */}
          <div className="col-md-6 col-lg-4">
            <div
              className="card overflow-hidden rounded-3 position-relative"
              onClick={() => previewImg(poert1)}
            >
              <img src={poert1} className="img-fluid" alt="poert1" />
              <div className="overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                <i className="fa fa-solid fa-plus fa-5x text-white"></i>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div
              className="card overflow-hidden rounded-3 position-relative"
              onClick={() => previewImg(port2)}
            >
              <img src={port2} className="img-fluid" alt="port2" />
              <div className="overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                <i className="fa fa-solid fa-plus fa-5x text-white"></i>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div
              className="card overflow-hidden rounded-3 position-relative"
              onClick={() => previewImg(port3)}
            >
              <img src={port3} className="img-fluid" alt="port3" />
              <div className="overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                <i className="fa fa-solid fa-plus fa-5x text-white"></i>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div
              className="card overflow-hidden rounded-3 position-relative"
              onClick={() => previewImg(poert1)}
            >
              <img src={poert1} className="img-fluid" alt="poert1" />
              <div className="overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                <i className="fa fa-solid fa-plus fa-5x text-white"></i>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div
              className="card overflow-hidden rounded-3 position-relative"
              onClick={() => previewImg(port2)}
            >
              <img src={port2} className="img-fluid" alt="port2" />
              <div className="overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                <i className="fa fa-solid fa-plus fa-5x text-white"></i>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div
              className="card overflow-hidden rounded-3 position-relative"
              onClick={() => previewImg(port3)}
            >
              <img src={port3} className="img-fluid" alt="port3" />
              <div className="overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                <i className="fa fa-solid fa-plus fa-5x text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* هذا هو الجزء الذي يتسبب في التحذير ويحتاج للتعديل */}
      <div
        className={`preview-img d-flex justify-content-center align-items-center bg-info bg-opacity-25 position-fixed top-0 start-0 w-100 vh-100 ${
          isPreviewVisible ? "d-block" : "d-none"
        }`}
        onClick={closeImg}
      >
        {/* الحل: استخدم التصيير الشرطي لعنصر الصورة <img> */}
        {isPreviewVisible && previewImageSrc && (
          <img
            id="img-preview"
            src={previewImageSrc} // لا داعي لـ || "" لأنك تتأكد من وجود القيمة
            alt="preview img"
            className="w-50 mt-5 rounded-3"
          />
        )}
      </div>
    </section>
  );
}