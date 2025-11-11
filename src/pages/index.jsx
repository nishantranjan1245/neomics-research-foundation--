import Layout from "./Layout.jsx";

import Home from "./Home";

import AboutUs from "./AboutUs";

import Programs from "./Programs";

import Research from "./Research";

import GetInvolved from "./GetInvolved";

import Updates from "./Updates";

import Contact from "./Contact";

import Donate from "./Donate";

import Volunteer from "./Volunteer";

import Internship from "./Internship";

import CSRCollaboration from "./CSRCollaboration";

import PartnerWithUs from "./PartnerWithUs";

import PrivacyPolicy from "./PrivacyPolicy";

import TermsOfUse from "./TermsOfUse";

import RefundPolicy from "./RefundPolicy";

import Disclaimer from "./Disclaimer";

import Sitemap from "./Sitemap";

import SustainableFarming from "./SustainableFarming";

import AgriTechResearch from "./AgriTechResearch";

import FarmerTraining from "./FarmerTraining";

import SoilWaterConservation from "./SoilWaterConservation";

import WomenInAgriculture from "./WomenInAgriculture";

import YouthForSustainability from "./YouthForSustainability";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    AboutUs: AboutUs,
    
    Programs: Programs,
    
    Research: Research,
    
    GetInvolved: GetInvolved,
    
    Updates: Updates,
    
    Contact: Contact,
    
    Donate: Donate,
    
    Volunteer: Volunteer,
    
    Internship: Internship,
    
    CSRCollaboration: CSRCollaboration,
    
    PartnerWithUs: PartnerWithUs,
    
    PrivacyPolicy: PrivacyPolicy,
    
    TermsOfUse: TermsOfUse,
    
    RefundPolicy: RefundPolicy,
    
    Disclaimer: Disclaimer,
    
    Sitemap: Sitemap,
    
    SustainableFarming: SustainableFarming,
    
    AgriTechResearch: AgriTechResearch,
    
    FarmerTraining: FarmerTraining,
    
    SoilWaterConservation: SoilWaterConservation,
    
    WomenInAgriculture: WomenInAgriculture,
    
    YouthForSustainability: YouthForSustainability,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/AboutUs" element={<AboutUs />} />
                
                <Route path="/Programs" element={<Programs />} />
                
                <Route path="/Research" element={<Research />} />
                
                <Route path="/GetInvolved" element={<GetInvolved />} />
                
                <Route path="/Updates" element={<Updates />} />
                
                <Route path="/Contact" element={<Contact />} />
                
                <Route path="/Donate" element={<Donate />} />
                
                <Route path="/Volunteer" element={<Volunteer />} />
                
                <Route path="/Internship" element={<Internship />} />
                
                <Route path="/CSRCollaboration" element={<CSRCollaboration />} />
                
                <Route path="/PartnerWithUs" element={<PartnerWithUs />} />
                
                <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
                
                <Route path="/TermsOfUse" element={<TermsOfUse />} />
                
                <Route path="/RefundPolicy" element={<RefundPolicy />} />
                
                <Route path="/Disclaimer" element={<Disclaimer />} />
                
                <Route path="/Sitemap" element={<Sitemap />} />
                
                <Route path="/SustainableFarming" element={<SustainableFarming />} />
                
                <Route path="/AgriTechResearch" element={<AgriTechResearch />} />
                
                <Route path="/FarmerTraining" element={<FarmerTraining />} />
                
                <Route path="/SoilWaterConservation" element={<SoilWaterConservation />} />
                
                <Route path="/WomenInAgriculture" element={<WomenInAgriculture />} />
                
                <Route path="/YouthForSustainability" element={<YouthForSustainability />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}