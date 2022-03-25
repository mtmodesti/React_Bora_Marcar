const headerButton = {
  background: "transparent",
  border: "1px solid transparent",
  padding: "8px 12px",
  color: "var(--color-linen)",

  hover: {
    background: "transparent",
    border: "1px solid var(--color-lavenderGray)",
  },
};

const defaultButton = {
  background: "var(--color-stateBlue)",
  border: "1px solid var(--color-stateBlue)",
  padding: "8px 22px",
  color: "var(--color-linen)",

  hover: {
    background: "var(--color-darkPurple)",
    color: "var(--color-linen)",
    border: "1px solid var(--color-stateBlue)",
  },
};

const addButton = {
  background: "var(--color-darkPurple)",
  border: "1px solid var(--color-darkPurple)",
  padding: "5px 10px",
  color: "var(--color-linen)",

  hover: {
    background: "var(--color-stateBlue)",
    color: "var(--color-linen)",
    border: "1px solid var(--color-darkPurple)",
  },
};

const declineButton = {
  background: "var(--color-linen)",
  border: "1px solid var(--color-darkPurple)",
  padding: "5px 10px",
  color: "var(--color-linen)",

  hover: {
    background: "var(--color-stateBlue)",
    color: "var(--color-linen)",
    border: "1px solid var(--color-darkPurple)",
  },
};

const deleteButton = {
  background: "transparent",
  border: "1px solid var(--color-darkPurple)",
  padding: "5px 10px",
  color: "var(--color-darkPurple)",

  hover: {
    background: "var(--color-stateBlue)",
    color: "var(--color-darkPurple)",
    border: "1px solid var(--color-darkPurple)",
  },
};
const mobileButton = {
  background: "transparent",
  border: "1px solid transparent",
  padding: "8px 1px",
  color: "var(--color-linen)",
  minWidth: "95px",
  hover: {
    background: "transparent",
    border: "1px solid var(--color-lavenderGray)",
  },
};

export const buttonThemes = {
  header: headerButton,
  default: defaultButton,
  add: addButton,
  decline: declineButton,
  delete: deleteButton,
  mobile: mobileButton,
};
