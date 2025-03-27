import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import PriceHistory from "./components/PriceHistory/PriceHistory";
import { SearchContext, SearchProvider } from "./components/SearchQuery";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SearchProvider>
        <App />
      </SearchProvider>
    ),
  },
  {
    path: "/pricehistory",
    element: (
      <SearchProvider>
        <PriceHistory />
      </SearchProvider>
    ),
  },
]);

export default router;
