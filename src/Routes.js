import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import SignUp from "./containers/SignUp";
import GetAllTables from "./containers/Tables";
import GetAvailableTables from "./containers/AvailableTables";
import GetInTables from "./containers/InDoorTables";
import GetOutTables from "./containers/OutDoorTables";
import AddTables from "./containers/AddTables";
import DeleteTables from "./containers/DeleteTables";

export default function Links() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/tables" element={<GetAllTables />} />
            <Route path="/availableTables" element={<GetAvailableTables />} />
            <Route path="/indoor" element={<GetInTables />} />
            <Route path="/outdoor" element={<GetOutTables />} />
            <Route path="/addTables" element={<AddTables />} />
            <Route path="/deleteTables" element={<DeleteTables />} />
            {
                /* Finally, catch all unmatched routes */
            }
            <Route path="*" element={<NotFound />} />;
        </Routes>
    );

}
