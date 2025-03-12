import Footer from "./Footer";
import { Link } from "react-router";
import ScrollToTop from "./UI/ScrollToTop";

export default function LegalInformation() {
    return (
        <div className="bg-black text-white font-roboto min-h-[960px] flex flex-col justify-between">
              <ScrollToTop/>
            <div>
                {/* Header Section */}
                <div className="flex items-center justify-center h-36 w-full">
                    <Link to="/">
                        <img src="g8way.svg" alt="Company Logo" className="w-28 h-7" />
                    </Link>
                </div>

                {/* Title Section */}
                <div className="relative w-full bg-[#10E0D7] flex items-center justify-center text-center py-10 md:py-16 md:min-h-[250px]">
                    <h1 className="text-3xl md:text-5xl font-bold uppercase">Legal Information</h1>
                    <img className="absolute -bottom-0.5 w-full hidden md:block" src="curve.png" alt="" />
                </div>

                {/* Content Sections */}
                <div className="container mx-auto px-6 py-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

                        {/* Register Court */}
                        <div className="flex flex-col w-full">
                            <h2 className="text-xl font-semibold mb-3 uppercase text-[#10E0D7]">Register Court</h2>
                            <p>GIGA FIBER Development GmbH</p>
                            <p>Untermainkai 27-28</p>
                            <p>D-60329 Frankfurt am Main</p>
                            <p>
                                <a href="mailto:m.diebold@g8way-app.com" className="text-[#10E0D7] hover:underline">
                                    m.diebold@g8way-app.com
                                </a>
                            </p>
                            <p>Represented by: Marlon Diebold (CEO)</p>
                            <p>Commercial Register: tba</p>
                            <p>Register Court: Amtsgericht Frankfurt am Main</p>
                        </div>

                        {/* Copyright */}
                        <div className="flex flex-col w-full">
                            <h2 className="text-xl font-semibold mb-3 uppercase text-[#10E0D7]">Copyright</h2>
                            <p>The texts and illustrations contained in the website are protected by copyright.</p>
                            <p>The copyright lies with GIGA FIBER Development GmbH.</p>
                            <p>Any use of extracts requires prior written consent from GIGA FIBER Development GmbH.</p>
                        </div>

                        {/* Disclaimer */}
                        <div className="flex flex-col w-full">
                            <h2 className="text-xl font-semibold mb-3 uppercase text-[#10E0D7]">Disclaimer</h2>
                            <p>Despite careful content control, we assume no liability for external links.</p>
                            <p>The operators of the linked pages are solely responsible for their content.</p>
                        </div>

                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div className="mt-16">
                <Footer />
            </div>
        </div>
    );
}
