import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import ApiData from "./components/ApiData";
import Card from "./components/Card";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Layout>
            <section className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Example Cards */}
              <Card title="Total Products" value="152" />
              <Card title="New Orders" value="28" />
              <Card title="Revenue" value="$2,340" />
            </section>

            {/* Dynamic Data from API */}
            <section className="p-6">
              <ApiData />
            </section>
          </Layout>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
