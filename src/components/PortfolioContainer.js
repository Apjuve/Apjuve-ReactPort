import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState("About");

    const renderPage = () => {
        if (currentPage === "Projects") {
            return <Projects />;
        }
        if (currentPage === "About") {
            return <About />;
        }
        if (currentPage === "Resume") {
            return <Resume />;
        }
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);
    return (
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            <Footer />

            {renderPage()}
        </div>
    );

}