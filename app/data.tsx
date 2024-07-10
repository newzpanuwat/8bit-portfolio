interface IMenu {
  label: string;
  refId: string;
  btnClass: string;
}

export const navigationMenus: Array<IMenu> = [
  {
    label: "Hello!",
    refId: "#hello",
    btnClass: "nes-btn is-primary",
  },
  {
    label: "Theses my skills",
    refId: "#skills",
    btnClass: "nes-btn is-success",
  },
  {
    label: "Blogs",
    refId: "#blogs",
    btnClass: "nes-btn is-warning",
  },
  {
    label: "Others",
    refId: "#poc",
    btnClass: "nes-btn is-primary",
  },
  {
    label: "Contact",
    refId: "#contact",
    btnClass: "nes-btn is-error",
  },
];
