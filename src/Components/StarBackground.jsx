// import { useEffect, useState } from "react";

// export const StarBackground = () => {
//   const [stars, setStars] = useState([]);

//   useEffect(() => {
//     generateStars();

//     const handleResize = () => {
//       generateStars();
//     };

//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const generateStars = () => {
//     const numberOfStars = Math.floor(
//       (window.innerWidth * window.innerHeight) / 10000
//     );

//     const newStars = [];

//     for (let i = 0; i < numberOfStars; i++) {
//       newStars.push({
//         id: i,
//         size: Math.random() * 3 + 1,
//         x: Math.random() * 100,
//         y: Math.random() * 100,
//         opacity: Math.random() * 0.5 + 0.5,
//         animationDuration: Math.random() * 4 + 2,
//       });
//     }

//     setStars(newStars);
//   };

//   return (
//     <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
//       {stars.map((star) => (
//         <div
//           key={star.id}
//           className="star animate-pulse-subtle"
//           style={{
//             width: star.size + "px",
//             height: star.size + "px",
//             left: star.x + "%",
//             top: star.y + "%",
//             opacity: star.opacity,
//             animationDuration: star.animationDuration + "s",
//           }}
//         />
//       ))}
//     </div>
//   );
// };



// import { useEffect, useState } from "react";

// export const StarBackground = () => {
//   const [stars, setStars] = useState([]);

//   useEffect(() => {
//     generateStars();

//     const handleResize = () => generateStars();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const generateStars = () => {
//     const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);
//     const newStars = Array.from({ length: numberOfStars }).map((_, i) => ({
//       id: i,
//       size: Math.random() * 3 + 1,
//       x: Math.random() * 100,
//       y: Math.random() * 100,
//       opacity: Math.random() * 0.5 + 0.5,
//       duration: Math.random() * 4 + 2,
//     }));
//     setStars(newStars);
//   };

//   return (
//     <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden ">
//       {stars.map((star) => (
//         <div
//           key={star.id}
//           className="star animate-pulse-subtle  "
//           style={{
//             width: `${star.size}px`,
//             height: `${star.size}px`,
//             left: `${star.x}%`,
//             top: `${star.y}%`,
//             opacity: star.opacity,
//             animationDuration: `${star.duration}s`,
//             backgroundColor:"blue"
//           }}
//         />
//       ))}
//     </div>
//   );
// };













// import { useEffect, useState } from "react";

// export const StarBackground = () => {
//   const [stars, setStars] = useState([]);

//   useEffect(() => {
//     generateStars();

//     const handleResize = () => generateStars();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const generateStars = () => {
//     const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);
//     const newStars = Array.from({ length: numberOfStars }).map((_, i) => ({
//       id: i,
//       size: Math.random() * 3 + 1,
//       x: Math.random() * 100,
//       y: Math.random() * 100,
//       duration: Math.random() * 4 + 2,
//       delay: Math.random() * 2,  
//       color: Math.random() > 0.5 ? "white" : "blue",  
//     }));
//     setStars(newStars);
//   };

//   return (
//     <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
//       {stars.map((star) => (
//         <div
//           key={star.id}
//           className="star animate-pulse-subtle"
//           style={{
//             width: `${star.size}px`,
//             height: `${star.size}px`,
//             left: `${star.x}%`,
//             top: `${star.y}%`,
//             backgroundColor: star.color,
//             animationDuration: `${star.duration}s`,
//             animationDelay: `${star.delay}s`,
//           }}
//         />
//       ))}
//     </div>
//   );
// };







import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    generateStars();

    const handleResize = () => generateStars();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);
    const newStars = Array.from({ length: numberOfStars }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,           // random size 1px - 4px
      x: Math.random() * 100,               // random x position
      y: Math.random() * 100,               // random y position
      duration: Math.random() * 4 + 2,      // random pulse duration
      delay: Math.random() * 2,             // random animation delay
      color: "blue",                         // all stars blue
    }));
    setStars(newStars);
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            backgroundColor: star.color,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
};
