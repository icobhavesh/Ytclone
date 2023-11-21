import { categories } from "./utils/constant";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="md:flex-col flex overflow-y-auto h-auto md:w-64">
      {categories.map((category) => (
        <button
          className={`category-btn flex items-center ${category.name === selectedCategory
              ? 'bg-black text-red-300 border rounded-full'
              : 'bg-white text-red-600'
            } text-green-400 md:px-4 md:py-2 mt-2 px-2 justify-start`}
          onClick={() => setSelectedCategory(category.name)}
          key={category.name}
        >
          <span
            className={`${category.name === selectedCategory
                ? 'text-red-600'
                : 'text-red-900'
              } font-extrabold m-2`}
          >
            {category.icon}
          </span>
          <span
            className={`${category.name === selectedCategory
                ? 'opacity-100 text-white'
                : 'opacity-80 text-red-800 font-semibold'
              }`}
          >
            {category.name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Sidebar;

// import { categories } from "./utils/constant";

// const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
//   return (
//     <div class=" md:flex-col  flex overflow-y-auto h-auto md:[95%]" >
//     { categories.map((category) => (
//       <button
//         className={`category-btn ${category.name === selectedCategory
//             ? 'bg-black text-red-300 border rounded-full flex justify-center items-center '
//             : 'bg-white text-red-600'
//           } text-green-400 md:px-4 md:py-2  mt-2 px-2 justify-center flex items-center`}
//         onClick={() => setSelectedCategory(category.name)}
//         key={category.name}
//       >
//         <span
//           className={`${category.name === selectedCategory
//               ? 'text-red-600 '
//               : 'text-red-900'
//             } '  font-extrabold m-2   `}
//         >
//           {category.icon}
//         </span>
//         <span
//           className={`${category.name === selectedCategory ? 'opacity-100 text-white' : 'opacity-80 text-red-800  font-semibold'
//             }`}
//         >
//           {category.name}
//         </span>
//       </button>
//       ))}

//     </div>)}
//     export default Sidebar
