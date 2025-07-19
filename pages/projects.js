import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">Gold Price Predictor</h2>
            <p className="text-gray-700">Forecasted gold prices using historical data and ML.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Water & Air Quality Model</h2>
            <p className="text-gray-700">Used linear regression and random forest classifiers.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
