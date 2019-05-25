import React from 'react'
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font
} from '@react-pdf/renderer';

import ReactDOM from "react-dom";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    marginLeft: "30"
  },
  section: {
    margin: 5,
    padding: 5,
    fontSize: 12,
    flexDirection: 'row',
    // border: '3px solid pink',
  },
  title: {
    margin: 5,
    fontSize: 15,
    textAlign: "center",
    backgroundColor: "#e4e4e4",
    textTransform: "uppercase"
  },
  body: {
    flexGrow: 1
  },
  row: {
    flexDirection: "row",
    width: "100%",
    height: 130,
    // border: "3px solid yellow"
  },
  rowSmallHeight: {
    flexDirection: "row",
    width: "100%",
    height: 85,
    // border: "3px solid yellow"
  },
  block: {
    flexGrow: 1
  },
  text: {
    width: "33.330%",
    margin: 5,
    fontFamily: "Oswald",
    textAlign: "justify"
  },
  leftColumn: {
    flexDirection: "column",
    fontSize: 12,
    marginLeft: 30,
    marginRight: 15,
    marginTop: 5,
    height: 90,
    // border: "3px solid red",
  },
  rightColumn: {
    flexDirection: "column",
    flexGrow: 10,
    fontSize: 12,
    marginLeft: 15,
    marginRight: 30,
    marginTop: 5,
    height: 90,
    // border: "3px solid blue",
  },
  line: {
    fontFamily: "Oswald",
    textAlign: "justify",
    fontSize: 12,
    margin: 5,
    padding: 5,
    width: 80,
    flexDirection: "row",
    // border: '3px solid orange'
  }
});

Font.register(`../fonts/Roboto-Regular.ttf`, { family: "Roboto" });
Font.register(
  "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
  { family: "Oswald" }
);

const MyDocument = (props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>{props.text}</Text>
      </View>
    </Page>
  </Document>
);
export const renderPDFInDOM = estimateState => {
  console.log(estimateState);
  const Wrapper = () => (
    <div>
      <MyDocument text={estimateState} />
    </div>
  );
  ReactDOM.render(<Wrapper />, document.getElementById('pdf'));
};

export default MyDocument
