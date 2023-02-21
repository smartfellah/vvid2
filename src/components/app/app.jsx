import React from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import * as Pages from "../../pages/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { AppHeader } from "../app-header/app-header";

export function App() {
  return (
    <Router>
      <DndProvider backend={HTML5Backend}>
        <AppHeader />
        <Routes>
          <Route path="/" element={<Pages.Home />} />
          <Route path="/profile" element={<Pages.Profile />}>
            <Route index element={<Pages.Profile />} />
            <Route path="snippet-redactor" element={<Pages.Profile />} />
            <Route path="options" element={<Pages.Profile />} />
          </Route>
        </Routes>
      </DndProvider>
    </Router>
  );
}
