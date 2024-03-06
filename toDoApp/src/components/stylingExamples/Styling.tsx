// export default function Styling() {
//   return (
//     <div>
//       <h1 style={heading}> Inline Styling</h1>
//     </div>
//   );
// }

// export default function Styling() {
//   const heading = { color: "blue", fontSize: "100px" };

//   return (
//     <div>
//       <h1 style={heading}> Inline Styling</h1>
//     </div>
//   );
// }

/**
 * Using Style Sheets
 *
 * */
// import "../css/style.css";
// export default function Styling() {
//   return (
//     <div>
//       <h1 className="header"> Inline Styling</h1>
//     </div>
//   );
// }

/**
 *  Using CSS Modules to style
 */
import styles from "./Styling.module.css";

export default function Styling() {
  return (
    <div>
      <h1 className={styles.header}> Inline Styling</h1>
    </div>
  );
}
