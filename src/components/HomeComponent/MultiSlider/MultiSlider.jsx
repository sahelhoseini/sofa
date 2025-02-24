import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./style.css";
import { ProductCart } from "../../../components";
const MultiSlider = ({ sliderImage }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: {
      perView: 4, // نمایش تنها یک اسلاید در هر زمان
      spacing: 10,
    },
  });

  // افزودن autoplay
  useEffect(() => {
    if (!instanceRef.current) return; // اگر اسلایدر بارگذاری نشده باشد، برگردید

    const interval = setInterval(() => {
      instanceRef.current.next(); // به اسلاید بعدی بروید
    }, 3000); // زمان بین تغییر اسلایدها (در میلی‌ثانیه)

    return () => clearInterval(interval); // پاک کردن interval هنگامUnmount
  }, [instanceRef]);

  return (
    <>
      <div className="navigation-wrapper">
        <p className="font-extrabold md:text-2xl text-center mb-3">
          TOP SELLERS
        </p>
        <div ref={sliderRef} className="keen-slider">
          {sliderImage.map((item, index) => (
            <div className="keen-slider__slide" key={index}>
              <ProductCart image={item} name={"woody"} price={"50.00"} />
            </div>
          ))}
        </div>

        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />
            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
    </>
  );
};

function Arrow(props) {
  const disabled = props.disabled ? " arrowbtn--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrowbtn ${
        props.left ? "arrowbtn--left" : "arrowbtn--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

export default MultiSlider;
