import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import Programs from "./pages/Programs";
import OurProjects from "./pages/OurProjects";
import GirlsRescueCenter from "./pages/GirlsRescueCenter";
import OurImpact from "./pages/OurImpact";
import GetInvolved from "./pages/GetInvolved";
import ContactUs from "./pages/ContactUs";
import Donate from "./pages/Donate";
import Gallery from "./pages/Gallery";
import Blogs from "./pages/Blogs";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={AboutUs} />
      <Route path={"/team"} component={OurTeam} />
      <Route path={"/programs"} component={Programs} />
      <Route path={"/projects"} component={OurProjects} />
      <Route path={"/girls-rescue-center"} component={GirlsRescueCenter} />
      <Route path={"/impact"} component={OurImpact} />
      <Route path={"/get-involved"} component={GetInvolved} />
      <Route path={"/contact"} component={ContactUs} />
      <Route path={"/donate"} component={Donate} />
      <Route path={"/gallery"} component={Gallery} />
      <Route path={"/blogs"} component={Blogs} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow">
              <Router />
            </main>
            <Footer />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
