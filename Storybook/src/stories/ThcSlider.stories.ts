import ThcSwiper from "../components/ThcSwiper/index.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "Smokers.mx/ThcSwiper",
  component: ThcSwiper,
  tags: ["autodocs"],
  argTypes: {
    loading: {
      control: { type: "boolean" }
    }
  },
  args: {
    effect: "slide",
    speed: 500
  }
};

export default meta;

export const Default = {
  args: {
    loading: false,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    customPagination: false,
    customNavigation: false,
    slides: [
      {
        id: 233213,
        name: "Slide 01"
      },
      {
        id: 233213,
        name: "Slide 02"
      }
    ]
  }
};

export const CustomNavigation = {
  args: {
    loading: false,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    slidesPerView: 1,
    customPagination: false,
    customNavigation: true,
    slides: [
      {
        id: 233213,
        name: "Slide 01"
      },
      {
        id: 233213,
        name: "Slide 02"
      }
    ]
  }
};

export const CustomPagination = {
  args: {
    loading: false,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    customPagination: true,
    customNavigation: false,
    slides: [
      {
        id: 233213,
        name: "Slide 01"
      },
      {
        id: 233213,
        name: "Slide 02"
      },
      {
        id: 233213,
        name: "Slide 02"
      },
      {
        id: 233213,
        name: "Slide 02"
      }
    ]
  }
};

export const Carousel = {
  args: {
    loading: false,
    slidesPerView: 3,
    loop: true,
    customPagination: false,
    customNavigation: false,
    slides: [
      {
        id: 233213,
        name: "Slide 01"
      },
      {
        id: 233213,
        name: "Slide 02"
      },
      {
        id: 23323443,
        name: "Slide 03"
      },
      {
        id: 31312312,
        name: "Slide 04"
      }
    ]
  }
};

export const CarouselNavigation = {
  args: {
    loading: false,
    loop: true,
    slidesPerView: 3,
    customPagination: false,
    customNavigation: true,
    slides: [
      {
        id: 233213,
        name: "Slide 01"
      },
      {
        id: 233213,
        name: "Slide 02"
      },
      {
        id: 23323443,
        name: "Slide 03"
      },
      {
        id: 31312312,
        name: "Slide 04"
      }
    ]
  }
};
