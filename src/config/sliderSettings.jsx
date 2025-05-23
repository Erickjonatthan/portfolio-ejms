export const getSliderSettings = (projectsCount, slidesToShow) => ({
  dots: true,
  infinite: projectsCount > slidesToShow,
  speed: 500,
  arrows: true,
  adaptiveHeight: true,
  autoplay: true,
  slidesToShow: slidesToShow,
  slidesToScroll: slidesToShow,
  accessibility: true,
  focusOnSelect: false,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 4000,
      settings: {
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToShow,
        infinite: projectsCount > slidesToShow,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: projectsCount > 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: projectsCount > 1,
        arrows: false,
      },
    },
  ],
  customPaging: (i) => (
    <button
      className={`w-3 h-3 rounded-full transition-all duration-300 bg-gray-300 hover:bg-[#012286]`}
      aria-label={`Ir para projeto ${i + 1}`}
    />
  ),
  className: "project-carousel pb-10",
  appendDots: (dots) => (
    <div>
      <ul className="custom-dots">{dots}</ul>
    </div>
  ),
});