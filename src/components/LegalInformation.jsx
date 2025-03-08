import Footer from "./Footer";
import { Link } from "react-router";

export default function LegalInformation() {
    return (
        <div className="min-h-screen bg-black text-white font-roboto">
            <div className="flex items-center justify-center h-36 w-full">
            <Link to="/">
                <img src="g8way.svg" alt="Company Logo" className="w-28 h-7" />
                </Link>
            </div>
            {/* Title Section */}
            <div className="w-full relative bg-[#10E0D7] flex items-center justify-center text-center p-6 md:min-h-[320px]">
                <h1 className="text-3xl md:text-5xl font-bold ">IMPRINT</h1>
            </div>

            {/* Content Sections */}
            <div className="container mx-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Register Court */}
                    <div>
                        <h2 className="text-xl font-semibold mb-2  text-[#10E0D7]">Register Court</h2>
                        <p>GIGA FIBER Development GmbH</p>
                        <p>Untermainkai 27-28</p>
                        <p>D-60329 Frankfurt am Main</p>
                        <p>
                            <a
                                href="mailto:m.diebold@g8way-app.com"
                                className="text-[#10E0D7] hover:underline"
                            >
                                m.diebold@g8way-app.com
                            </a>
                        </p>
                        <p>Represented by: Marlon Diebold (CEO)</p>
                        <p>Commercial Register: tba</p>
                        <p>Register Court: Amtsgericht Frankfurt am Main</p>
                    </div>

                    {/* Copyright */}
                    <div>
                        <h2 className="text-xl font-semibold mb-2  text-[#10E0D7]">Copyright</h2>
                        <p>
                            The texts and illustrations contained in the website are protected
                            by copyright.
                        </p>
                        <p>The copyright lies with GIGA FIBER Development GmbH.</p>
                        <p>
                            Any use of extracts requires the prior written consent of GIGA
                            FIBER Development GmbH.
                        </p>
                    </div>

                    {/* Disclaimer */}
                    <div>
                        <h2 className="text-xl font-semibold mb-2  text-[#10E0D7]">Disclaimer</h2>
                        <p>
                            Despite careful control of the content, we assume no liability for
                            the content of external links.
                        </p>
                        <p>
                            The operators of the linked pages are solely responsible for their
                            content.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
