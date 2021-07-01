// import React from "react";
// import styles from "./editor.module.css";

// const Editor = ({ cards }) => {
//   return (
//     <section className={styles.editor}>
//       <h1 className={styles.title}>Card Maker</h1>
//       {cards.map((item) => (
//         <section className={styles.card}>
//           <div className={styles.col1}>
//             <input className={styles.name} type="text" value={item.name} />
//             <input
//               className={styles.corp}
//               type="text"
//               value={item.corporation}
//             />
//             <select className={styles.thim} id="thim-select">
//               <option value="dark">Dark</option>
//               <option value="light">Light</option>
//               <option value="color">Colorful</option>
//             </select>{" "}
//           </div>
//           <div className={styles.col2}>
//             <input className={styles.job} type="text" value={item.job} />
//             <input className={styles.email} type="text" value={item.email} />
//           </div>
//           <textarea id="introduce" rows="2" cols="33">
//             {item.introduction}
//           </textarea>{" "}
//           <div className={styles.btn}>
//             <button className={styles.nameBtn}>name</button>
//             <button className={styles.deleteBtn}>Delete</button>
//           </div>
//         </section>
//       ))}
//     </section>
//   );
// };

// export default Editor;

import React from "react";
import styles from "./editor.module.css";

const Editor = ({ cards }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {cards.map((item) => (
        <section className={styles.card}>
          <input className={styles.name} type="text" value={item.name} />
          <input className={styles.corp} type="text" value={item.corporation} />
          <select className={styles.thim} id="thim-select">
            <option value="dark">Dark</option>
            <option value="light">Light</option>
            <option value="color">Colorful</option>
          </select>{" "}
          <input className={styles.job} type="text" value={item.job} />
          <input className={styles.email} type="text" value={item.email} />
          <textarea
            className={styles.discription}
            id="introduce"
            rows="2"
            cols="33"
          >
            {item.introduction}
          </textarea>{" "}
          <button className={styles.nameBtn}>name</button>
          <button className={styles.deleteBtn}>Delete</button>
        </section>
      ))}
    </section>
  );
};

export default Editor;
