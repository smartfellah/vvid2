import React, { useEffect } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import * as Pages from "../../pages/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { AppHeader } from "../app-header/app-header";
import { ProtectedRouteElement } from "../protected-route-element/protected-route-element";
import { useDispatch } from "react-redux";
import { sendRequest } from "../../services/actions/auth-actions";

export function App() {
  return (
    <Router>
      <DndProvider backend={HTML5Backend}>
        <AppHeader />
        <Routes>
          <Route path="/" element={<Pages.Home />} />
          <Route path="/constructor" element={<Pages.Constructor />} />
          <Route
            path="/profile"
            element={<ProtectedRouteElement element={<Pages.Profile />} />}
          >
            <Route index element={null} />
            <Route
              path="snippet-redactor"
              element={<Pages.SnippetRedactor />}
            />
            <Route path="options" element={null} />
          </Route>
          <Route
            path="/login"
            element={
              <ProtectedRouteElement element={<Pages.Login />} unAuthOnly />
            }
          />
          <Route
            path="/register"
            element={
              <ProtectedRouteElement element={<Pages.Register />} unAuthOnly />
            }
          />
        </Routes>
      </DndProvider>
    </Router>
  );
}
