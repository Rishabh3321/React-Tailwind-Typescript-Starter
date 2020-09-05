import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex justify-between">
      <div className="bg-gray-800 w-1/5 h-screen">
        <a
          href="https://reactjs.org/"
          className="w-full h-1/6 px-2 pt-6 pb-2 border-gray-900 mb-2 text-gray-100 pl-4 non-italic font-hairline text-xl block"
        >
          React Js
        </a>
        <a
          href="https://reactrouter.com/web/guides/quick-start"
          className="w-full h-1/6 px-2 pt-6 pb-2 border-gray-900 mb-2 text-gray-100 pl-4 non-italic font-hairline text-xl block"
        >
          React Route
        </a>
        <a
          href="https://www.typescriptlang.org/"
          className="w-full h-1/6 px-2 pt-6 pb-2 border-gray-900 mb-2 text-gray-100 pl-4 non-italic font-hairline text-xl block"
        >
          Typescript
        </a>
        <a
          href="https://tailwindcss.com/"
          className="w-full h-1/6 px-2 pt-6 pb-2 border-gray-900 mb-2 text-gray-100 pl-4 non-italic font-hairline text-xl block"
        >
          Tailwind
        </a>
        <a
          href="https://tailwindcomponents.com/cheatsheet/"
          className="w-full h-1/6 px-2 pt-6 pb-2 border-gray-900 mb-2 text-gray-100 pl-4 non-italic font-hairline text-xl block"
        >
          Tailwind CheatSheet
        </a>
      </div>
      <div className="bg-teal-100 w-4/5 h-screen ">{children}</div>
    </div>
  );
};

export default Layout;
