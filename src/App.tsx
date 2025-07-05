
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import VerifyEmail from "./pages/auth/VerifyEmail";
import ConnectWallet from "./pages/auth/ConnectWallet";
import CreateEvent from "./pages/CreateEvent";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import NotFound from "./pages/NotFound";
import AttendeeDashboard from "./pages/attendee/Dashboard";
import NFTCollection from "./pages/attendee/NFTCollection";
import EventsBrowse from "./pages/attendee/EventsBrowse";
import AttendeeProfile from "./pages/attendee/Profile";
import EventRegister from "./pages/EventRegister";
import ClaimSuccess from "./pages/ClaimSuccess";
import MobileScanner from "./pages/MobileScanner";
import CheckIn from "./pages/attendee/CheckIn";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Authentication Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route path="/auth/verify-email" element={<VerifyEmail />} />
          <Route path="/auth/connect-wallet" element={<ConnectWallet />} />
          
          {/* Main App Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          
          {/* Event Registration and Claim Routes */}
          <Route path="/attend/:eventId/register" element={<EventRegister />} />
          <Route path="/attend/:eventId/nft-claim/success" element={<ClaimSuccess />} />
          <Route path="/mobile/attendee/scanner" element={<MobileScanner />} />
          <Route path="/check-in/:eventId" element={<CheckIn />} />
          
          {/* Attendee Dashboard Routes */}
          <Route path="/attendee/dashboard" element={<AttendeeDashboard />} />
          <Route path="/attendee/dashboard/upcoming-events" element={<AttendeeDashboard />} />
          <Route path="/attendee/dashboard/past-events" element={<AttendeeDashboard />} />
          <Route path="/attendee/dashboard/nft-collection" element={<NFTCollection />} />
          <Route path="/attendee/dashboard/activity" element={<AttendeeDashboard />} />
          
          {/* Event Routes */}
          <Route path="/attendee/events/browse" element={<EventsBrowse />} />
          <Route path="/attendee/events/search" element={<EventsBrowse />} />
          <Route path="/attendee/events/favorites" element={<EventsBrowse />} />
          <Route path="/attendee/events/recommendations" element={<EventsBrowse />} />
          
          {/* NFT Routes */}
          <Route path="/attendee/nfts/collection" element={<NFTCollection />} />
          
          {/* Profile Routes */}
          <Route path="/attendee/profile" element={<AttendeeProfile />} />
          <Route path="/attendee/profile/personal-info" element={<AttendeeProfile />} />
          <Route path="/attendee/profile/tech-stack" element={<AttendeeProfile />} />
          <Route path="/attendee/profile/wallet-settings" element={<AttendeeProfile />} />
          <Route path="/attendee/profile/notification-preferences" element={<AttendeeProfile />} />
          <Route path="/attendee/profile/privacy-settings" element={<AttendeeProfile />} />
          
          {/* Settings Routes */}
          <Route path="/attendee/settings/account" element={<AttendeeProfile />} />
          <Route path="/attendee/settings/notifications" element={<AttendeeProfile />} />
          <Route path="/attendee/settings/privacy" element={<AttendeeProfile />} />
          <Route path="/attendee/settings/delete-account" element={<AttendeeProfile />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
