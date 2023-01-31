import React, { useState } from "react";
import ErrorBoundary from "./lib/components/ErrorBoundary";
import { render } from "react-dom";
import { Table } from "./lib";
import { useSortableData } from "./lib/customHooks/useSortableData";
import { mockData ,mockHeaderArr } from "./utils/constants";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './utils/theme';
import { GlobalStyles } from './utils/global';
import "./index.css";

export default function App() {
  const [filteredData] = useState(mockData);
  const [currentPage, setCurrentPage] = useState(1);
  const [theme, setTheme] = useState('light');

  const { items, requestSort} =
    useSortableData(filteredData);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
    <div className="App">
    <ErrorBoundary>
      <Table
              data={items}
              title={"Employee Details"}
              requestSort={requestSort}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              headerTitleArr={mockHeaderArr}
              applySortonCol={["position_applied","total_experience"]}
            />
    </ErrorBoundary>
    </div>
    </ThemeProvider>
  );
}


render(<App />, document.getElementById("root"));



