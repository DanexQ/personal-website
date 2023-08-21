"use client";

const Burger = ({
  active,
  setActive,
}: {
  active: boolean;
  setActive: () => void;
}) => {
  return (
    <button
      className="flex items-center justify-center w-10 h-10 cursor-pointer group sm:hidden"
      onClick={setActive}
    >
      <div
        className={`w-6 h-1 rounded relative transition-all after:transition-all before:transition-all after:content-[''] after:h-1 after:rounded before:-translate-x-1/2 after:-translate-x-1/2 after:bg-text after:absolute before:group-hover:bg-primary before:content-[''] before:h-1 before:rounded before:bg-text before:absolute after:group-hover:bg-primary ${
          active
            ? "bg-transparent after:w-full before:-translate-x-3 before:w-full after:rotate-45 before:-rotate-45"
            : "bg-text after:w-3 before:w-3  after:translate-y-2 before:-translate-y-2 group-hover:bg-primary"
        }`}
      />
    </button>
  );
};

export default Burger;
