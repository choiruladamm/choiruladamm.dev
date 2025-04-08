type Route = {
  title: string;
  path: string;
};

type FooterCol = {
  title: string;
  links: {
    name: string;
    link: string;
    icon?: string;
    leavesWebsite: boolean;
  }[];
};

type Footer = {
  columns: FooterCol[];
  support: {
    buymeacoffee: string;
    message: string;
  };
};

export const routes: Route[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Projects",
    path: "/projects",
  },
];

export const footer: Footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false,
        },
        {
          name: "Projects",
          link: "/projects",
          leavesWebsite: false,
        },
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "GitHub",
          link: "https://github.com/choiruladamm",
          icon: "/static/icons/github-f.svg",
          leavesWebsite: true,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/muhamad-choirul-adam",
          icon: "/static/icons/linkedin-f.svg",
          leavesWebsite: true,
        },
        // {
        //   name: "Dribbble",
        //   link: "https://dribbble.com/Axelldm",
        //   icon: "/static/icons/dribbble-f.svg",
        //   leavesWebsite: true,
        // },
        {
          name: "Gmail",
          link: "mailto:choiruladamm@gmail.com",
          icon: "/static/icons/mail-f.svg",
          leavesWebsite: true,
        },
      ],
    },
  ],
  support: {
    buymeacoffee: "choiruladam",
    message: "I appreciate your support very much!",
  },
};
