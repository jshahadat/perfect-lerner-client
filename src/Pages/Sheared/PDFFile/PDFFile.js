// import React from "react";
// import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
// import Civil from '../../../assets/civil/civil.jpg'

// const styles = StyleSheet.create({
//     body: {
//         paddingTop: 35,
//         paddingBottom: 65,
//         paddingHorizontal: 35,
//     },
//     title: {
//         fontSize: 24,
//         textAlign: "center",
//     },
//     text: {
//         margin: 12,
//         fontSize: 14,
//         textAlign: "justify",
//         fontFamily: "Times-Roman",
//     },
//     image: {
//         marginVertical: 15,
//         marginHorizontal: 100,
//     },
//     header: {
//         fontSize: 12,
//         marginBottom: 20,
//         textAlign: "center",
//         color: "grey",
//     },
//     pageNumber: {
//         position: "absolute",
//         fontSize: 12,
//         bottom: 30,
//         left: 0,
//         right: 0,
//         textAlign: "center",
//         color: "grey",
//     },
// });

// const PDFFile = () => {
//     return (
//         <Document>
//             <Page style={styles.body}>
//                 <Text style={styles.header} fixed></Text>
//                 <Image style={styles.image} src={Civil} />
//                 <Text style={styles.text}>
//                     With global warming and increasing changes to our environment, one of the chief concerns of civil engineers today is climate. You can learn more about environmental engineering by signing up for Delft University of Technology’s intermediate course, Introduction to Water and Climate. There you will learn about the latest engineering interventions for water resources management in rivers, coasts and the urban environment. You will also learn about water supply in places like California and other regions in the Untied States as a project manager, engineering manager, and a professional engineer.

//                     If you are looking for something more introductory, TU Delft also offers Railway Engineering: an Integral Approach, which explores one of the 20th century’s greatest achievements in engineering, the railway system.Learn how railways work, how they evolved over time, and the global influence of trains from an urban, social and economic point of view.

//                     With an array of online courses available, you can explore your interest in civil engineering and lay the foundation for an exciting career.
//                 </Text>
//                 <Text
//                     style={styles.pageNumber}
//                     render={({ pageNumber, totalPages }) =>
//                         `${pageNumber} / ${totalPages}`
//                     }
//                 />
//             </Page>
//         </Document>
//     );
// };

// export default PDFFile;


