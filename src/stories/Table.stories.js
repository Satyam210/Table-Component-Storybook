import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Table } from "../lib";
import { useSortableData } from "../lib/customHooks/useSortableData";
import "./index.css";
import { mockData , mockHeaderArr} from "../utils/constants";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../utils/theme';
import { GlobalStyles } from '../utils/global';

const stories = storiesOf('App Test', module);

stories.add('LightMode-Table', () => {
  const [filteredData, setFilteredData] = useState(mockData);
  const [currentPage, setCurrentPage] = useState(1);
  const [theme, setTheme] = useState('light');
  const { items, requestSort } =
    useSortableData(filteredData);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
    <div className="App">
      <Table
              data={items}
              title={"Employee Details"}
              requestSort={requestSort}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              headerTitleArr={mockHeaderArr}
              applySortonCol={["position_applied","total_experience"]}
            />
    </div>
    </ThemeProvider>)
});

stories.add('DarkMode-Table', () => {
  const [filteredData, setFilteredData] = useState(mockData);
  const [currentPage, setCurrentPage] = useState(1);
  const [theme, setTheme] = useState('dark');
  const { items, requestSort } =
    useSortableData(filteredData);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
    <div className="App">
      <Table
              data={items}
              title={"Employee Details"}
              requestSort={requestSort}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              headerTitleArr={mockHeaderArr}
              applySortonCol={["position_applied","year_of_experience"]}
            />
    </div>
    </ThemeProvider>)
});
