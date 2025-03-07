import { Link } from "react-router";
import Footer from "./Footer";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-black text-white font-roboto">
            <div className="flex items-center justify-center h-36 w-full">
                <Link to="/">
                    <img src="g8way.svg" alt="Company Logo" className="w-28 h-7" />
                </Link>
            </div>

            {/* Title Section */}
            <div className="w-full relative bg-[#10E0D7] flex items-center justify-center text-center p-6">
                <h1 className="text-3xl md:text-5xl font-bold uppercase">
                    Privacy Policy
                </h1>
            </div>

            {/* Content Section */}
            <div className="container mx-auto p-6">
                <div className="space-y-6">
                    {/* Table of Contents */}
                    <p>
                        The use of this website <a href="https://g8way-app.com/">g8way-app.com</a> may involve the processing of
                        personal data. In order to make this processing comprehensible for
                        you, we would like to provide you with an overview of this
                        processing. To ensure fair processing, we also inform you about your
                        rights under the European General Data Protection Regulation (GDPR)
                        and the German Federal Data Protection Act (BDSG). GIGA FIBER Development GmbH Untermainkai 27-28 60329 Frankfurt am Main (hereinafter also referred to as “we” or “us”) is responsible for data processing.
                        If you have any questions or suggestions regarding this information or would like to contact us to assert your rights, please send your request to

                    </p>
                    <p>
                        Email:{" "}
                        <a
                            href="mailto:m.diebold@g8way-app.com"
                            className="text-[#10E0D7] hover:underline"
                        >
                            m.diebold@g8way-app.com
                        </a>
                    </p>

                    {/* General Information */}
                    <TitleSection
                        title="1. General Information on Data Processing"
                        description="When using this website, personal data is processed by GIGA FIBER Development GmbH. “Personal data” within the meaning of the GDPR includes all information relating to an identified or identifiable person. The IP address can also be personal data. An IP address is assigned to every device connected to the internet by the internet provider so that it can send and receive data.
We process personal data in compliance with the relevant data protection regulations, in particular the GDPR and the BDSG. Data processing by us only takes place on the basis of legal permission. We process personal data only with your consent (Art. 6 para. 1 lit. a GDPR), for the performance of a contract to which you are a party or at your request for the implementation of pre-contractual measures (Art. 6 para. 1 lit. b GDPR), for compliance with a legal obligation (Art. 6 para. 1 lit. c GDPR) or if the processing is necessary to safeguard our legitimate interests or the legitimate interests of a third party, unless your interests or fundamental rights and freedoms, which require the protection of personal data, prevail (Art. 6 para. 1 lit. f GDPR).
"
                    />

                    <TitleSection
                        title="1.1 External Hosting"
                        description="This website is hosted by an external service provider (hoster). The personal data collected on this website is stored on the hoster’s servers. This may include IP addresses, contact requests, meta and communication data, contract data, contact details, names, website accesses and other data generated via a website.
                        The hoster is used for the purpose of fulfilling the contract with our potential and existing customers (Art. 6 para. 1 lit. b GDPR) and in the interest of a secure, fast and efficient provision of our online offer by a professional provider (Art. 6 para. 1 lit. f GDPR).
                        Our hoster will only process your data to the extent necessary to fulfill its performance obligations and follow our instructions with regard to this data.
                        We use the following hoster:
                        Amazon Web Services, Inc., 410 Terry Avenue North, Seattle WA 98109, USA. (the hosting region is Frankfurt am Main / Europe)"
                    />

                    <TitleSection
                        title="1.2 Duration of Storage"
                        description="Unless otherwise stated in the following information, we only store the data for as long as is necessary to achieve the purpose of processing or to fulfill our contractual or legal obligations. Such statutory retention obligations may arise in particular from commercial or tax law regulations. In this case, we will only process your data for the time stipulated by law and for the purposes pursued.
"
                    />

                    <TitleSection
                        title="1.3 Technical Service Providers"
                        description="Unless otherwise stated in the following information, the data is processed on our own servers and, if applicable, servers of technical service providers in the European Union that have been commissioned by us for this purpose. Hosting is currently carried out on servers of Amazon AWS Europe in Frankfurt am Main. With regard to our website, the data is only processed in accordance with explicit instructions and under contractual obligation to ensure adequate technical and organizational measures for data protection
"
                    />

                    <TitleSection
                        title="1.4. Processing of Server Log Files"
                        description="<p>
                            The provider of the pages automatically collects and stores information in so-called server log files, which your browser automatically transmits to us. These are:
                            </p>
                            <ul>
                             <li>● Browser type and browser version</li>
                             <li>● Operating system used</li>
                             <li>● Referrer URL</li>
                             <li>● Host name of the accessing computer</li>
                             <li>● Time of the server request</li>
                             <li>● IP address</li>
                           </ul>
                           <p>
                             This data is not merged with other data sources.  
                             This data is collected on the basis of <strong>Art. 6 para. 1 lit. f GDPR</strong>.  
                             The website operator has a legitimate interest in the technically error-free presentation and optimization of its website – the server                            log files must be recorded for this purpose.
                           </p>

"
                    />

                    <TitleSection
                        title="Disclaimer"
                        description="Despite careful control of the content, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content.
."
                    />

                    <TitleSection
                        title="2 Contact Form"
                        description="Our website contains a contact form that you can use to send us messages, inquiries or questions about specific products. The transfer of your data is encrypted. To complete the contact form, we also ask you for personal data such as your first name, surname and e-mail address. All data fields marked as mandatory are required to process your request. If you do not provide this data, we will not be able to process your request. The provision of further data is voluntary. Alternatively, you can send us an e-mail message using the addresses provided. We need the personal data entered in connection with the contact form in order to process your request. The legal basis for data processing is therefore Art. 6 para. 1 lit. b GDPR if your request relates to an existing contractual relationship or pre-contractual measures, otherwise Art. 6 para. 1 lit. f GDPR, as we have a legitimate interest in processing your request.
"
                    />

                    <TitleSection
                        title="3 Cookies"
                        description="We use cookies on our website. Cookies are small text files that are stored by your browser when you visit a website. This identifies the browser used and can be recognized by our web server. Our website contains necessary and non-necessary cookies. Necessary cookies are required for our website to function.
                        Insofar as the use of necessary cookies results in the processing of personal data, this is based on the legal basis of Art. 6 para. 1 lit. f GDPR. This processing serves our legitimate interest in making our website more user-friendly, effective and secure.
                        With your consent, we use analysis cookies for analysis and advertising purposes. The legal basis for this is your consent in accordance with Art. 6 para. 1 lit. a GDPR, if you have given it. Your consent can be revoked at any time for the future.
                        So-called “session cookies” are automatically deleted at the end of your visit. Other cookies (“persistent cookies”) are automatically deleted after a specified period, which may vary depending on the cookie. You can delete cookies at any time in the security settings of your browser. You can object to the use of cookies through your browser settings in principle or for certain cases.
                        You have the option via our banner, which is displayed at the end of each session."
                    />

                    <TitleSection
                        title="4. Integrated Third-Party Services and Content"
                        description="We use services and content provided by third-party providers on our website. For such integration, it is technically necessary to process your IP address so that the content can be sent to your browser. Your IP address is therefore transmitted to the respective third-party provider. The details of the data processing and the respective legal basis can be found in the further explanations in this section.
                        Specifically, we use the following third-party services and content:"
                    />
                    <TitleSectionDec
                        title="4.1 GOOGLE ANALYTICS"
                        description={`<p>
                          Our website uses Google Analytics, a web tracking service provided by Google Ireland Ltd, Gordon House, Barrow Street, Dublin 4, Ireland (“Google”). The purpose of our use of the tool is to enable us to analyze your user interactions on websites and to use the statistics and reports obtained to improve our offer and make it more interesting for you as a user.
                             </p>

                           <p>
                             We record the interactions between you as a user and our website primarily with the help of cookies, device/browser data, IP addresses, and website or app activities. In Google Analytics, your IP address is also recorded to ensure the security of the service and to provide us as the website operator with information about the country, region, or location from which the respective user comes (so-called “IP location determination”). For your protection, however, we naturally use the anonymization function (“IP masking”), i.e., Google shortens the IP addresses by the last octet within the EU/EEA.
                           </p>

                          <p>
                          Google also processes the data collected via Google Analytics for its own purposes in accordance with its own privacy policy. The data may be stored by Google in user profiles and processed, for example, to improve products, to develop new products, to measure the effectiveness of certain advertising and market research, and to personalize content and advertisements. If you are logged in to Google, your data will be assigned directly to your user account. If you do not wish to be associated with your Google user account, you must log out before activating Google Analytics. We have no influence on the further processing of your data by Google. You can find more information on this in 
                          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google’s privacy policy</a>.
                             </p>

                            <p>
                        The legal basis for the collection and further processing of the information (which takes place for a maximum of 12 months) is the consent given in the Consent Manager (Art. 6 para. 1 lit. a) GDPR). The legal basis for the use of cookies or similar technologies on your end device is § 25 para. 1 TTDSG. You can withdraw your consent at any time without affecting the permissibility of the processing up to the time of withdrawal. The easiest way to revoke your consent is via our Consent Manager or by installing the Google browser add-on, which can be accessed via the following link: 
                         <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer">Google browser add-on</a>.
                       </p>

                       <p>
                         You can find more information on the scope of services provided by Google Analytics at 
                          <a href="https://marketingplatform.google.com/about/analytics/terms/de/" target="_blank" rel="noopener noreferrer">Google Analytics Terms</a>. 
                         Google provides information on data processing when using Google Analytics at the following link: 
                            <a href="https://support.google.com/analytics/answer/6004245?hl=de" target="_blank" rel="noopener noreferrer">Google Analytics Data Processing</a>.
                            </p>

                       <p>
                         In connection with the above-mentioned functions, Google may also transfer the processed data to servers outside the EU, in particular                        adequacy decision concluded between the EU and the USA in accordance with Art. 45 GDPR (“Data Privacy Framework”). According to this,                        the USA is considered a safe third country. Google LLC, 1600 Amphitheater Pkwy, Mountain View, California 94043-1351, USA is certified                        in accordance with the Data Privacy Framework.
                       </p>`} />
                    <TitleSectionDec
                        title="4.2 GOOGLE TAG MANAGER"
                        description={`<p>
  This website uses functions of the web analysis service Google Analytics with the Google Tag Manager. The provider is Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.
</p>
<p>
  Google Analytics uses cookies that are stored on your end device and can be read by us. Details on the cookies used by Google Analytics can be found in our cookie policy. With Google Analytics, we are able to analyze usage data of our website. The data processing takes place on the basis of your consent (Art. 6 para. 1 lit. a GDPR).
</p>
<p>
  The information generated by cookies about your use of our website is usually transferred to a Google server in the USA and stored there. There is no adequacy decision by the EU Commission for the USA. However, as we have activated IP anonymization on our website, your IP address will be shortened by Google beforehand within member states of the European Union. Only in exceptional cases will the full IP address be transmitted to a Google server in the USA and only shortened there (further information on the purpose and scope of data collection can be found, for example, at 
  <a href="https://policies.google.com/privacy?hl=de&gl=de" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>).
</p>
<p>
  We have also concluded an order processing contract with Google LLC (USA) in accordance with Art. 28 GDPR. Google will therefore only use all information strictly for the purpose of evaluating the use of our websites for us and compiling reports on website activity.
</p>
`} />
                    <TitleSectionDec
                        title="4.3 GOOGLE WEB FONTS (LOCAL HOSTING)"
                        description={`<p>
  This site uses so-called web fonts provided by Google for the uniform display of fonts. The Google fonts are installed locally. There is no connection to Google servers.
</p>
<p>
  Further information on Google Web Fonts can be found at 
  <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer">Google Fonts FAQ</a> 
  and in 
  <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer">Google’s Privacy Policy</a>.
</p>`} />
                    <TitleSectionDec
                        title="4.4 FONT AWESOME (LOCAL HOSTING)"
                        description={`<p>
  This site uses Font Awesome for the uniform display of fonts. Font Awesome is installed locally. There is no connection to the servers of Fonticons, Inc.
</p>
<p>
  Further information about Font Awesome can be found in the 
  <a href="https://fontawesome.com/privacy" target="_blank" rel="noopener noreferrer">Font Awesome Privacy Policy</a>.
</p>`} />
                    <TitleSectionDec
                        title="4.5 GOOGLE MAPS"
                        description={`
                        <p>
    This site uses the map service Google Maps. The provider is Google Ireland Limited (“Google”), Gordon House, Barrow Street, Dublin 4, Ireland.  
    To use the functions of Google Maps, it is necessary to save your IP address. This information is usually transmitted to a Google server in the USA and stored there.  
    The provider of this site has no influence on this data transfer. If Google Maps is activated, Google may use Google Web Fonts for the purpose of uniform display of fonts.  
    When you access Google Maps, your browser loads the required web fonts into your browser cache in order to display texts and fonts correctly.
</p>
<p>
    The use of Google Maps is in the interest of an appealing presentation of our online offers and to make it easy to find the places we have indicated on the website.  
    This constitutes a legitimate interest within the meaning of Art. 6 para. 1 lit. f GDPR. If a corresponding consent has been requested, the processing is carried out exclusively  
    on the basis of Art. 6 para. 1 lit. a GDPR; the consent can be revoked at any time.
</p>
<p>
    Data transfer to the USA is based on the standard contractual clauses of the EU Commission. Details can be found here:  
    <a href="https://privacy.google.com/businesses/gdprcontrollerterms/" target="_blank">Google GDPR Controller Terms</a> and  
    <a href="https://privacy.google.com/businesses/gdprcontrollerterms/sccs/" target="_blank">Google Standard Contractual Clauses</a>.
</p>
<p>
    You can find more information on the handling of user data in Google’s privacy policy:  
    <a href="https://policies.google.com/privacy?hl=de" target="_blank">Google Privacy Policy</a>.
</p>
`} />
                    <TitleSectionDec
                        title="4.6 GOOGLE RECAPTCHA"
                        description={`<p>
    We use “Google reCAPTCHA” (hereinafter “reCAPTCHA”) on this website. The provider is Google Ireland Limited (“Google”), Gordon House, Barrow Street, Dublin 4, Ireland.
</p>
<p>
    The purpose of reCAPTCHA is to check whether data is entered on this website (e.g., in a contact form) by a human or by an automated program.  
    For this purpose, reCAPTCHA analyzes the behavior of the website visitor based on various characteristics.  
    This analysis begins automatically as soon as the website visitor enters the website.
</p>
<p>
    The reCAPTCHA analyses run completely in the background. Website visitors are not informed that an analysis is taking place.
</p>
<p>
    The data is stored and analyzed on the basis of Art. 6 para. 1 lit. f GDPR. The website operator has a legitimate interest in protecting its website from abusive automated spying and SPAM.  
    If a corresponding consent has been requested, the processing is carried out exclusively on the basis of Art. 6 para. 1 lit. a GDPR; the consent can be revoked at any time.
</p>
<p>
    For more information about Google reCAPTCHA, please refer to the Google Privacy Policy and the Google Terms of Use at the following links:  
    <a href="https://policies.google.com/privacy?hl=de" target="_blank">Google Privacy Policy</a> and  
    <a href="https://policies.google.com/terms?hl=de" target="_blank">Google Terms of Use</a>.
</p>
`} />
                    <TitleSectionDec
                        title="4.7 GOOGLE REMARKETING"
                        description={`<p>
    GIGA FIBER Development GmbH uses the online advertising program “Google Ads” on its website and in this context conversion tracking (visit action evaluation).  
    Google Conversion Tracking is an analysis service of Google Ireland Limited, Gordon House, 4 Barrow St, Dublin, D04 E5W5, Ireland.
</p>
<p>
    Further information and Google’s privacy policy can be found at:  
    <a href="https://policies.google.com/privacy" target="_blank">Google Privacy Policy</a>.
</p>`} />
                    <TitleSectionDec
                        title="4.8 SOCIAL-MEDIA-PAGES"
                        description={`<p>
    We maintain publicly accessible profiles on social networks. Your visit to these profiles triggers a variety of data processing operations.  
    Below we provide you with an overview of which of your personal data is collected, used and stored by us when you visit our profiles on social networks.
</p>

<h4>4.9 FACEBOOK AND INSTAGRAM</h4>
<p>
    Our Facebook and Instagram pages (hereinafter collectively referred to as “Facebook”) can be accessed via the Meta platform,  
    which is operated in the European Union by Meta Platforms Ireland Ltd, 4 Grand Canal Square, Grand Canal Harbor, Dublin 2, Ireland (“Meta”).
</p>
<p>
    Independent processing of usage data by Meta: When you visit our Facebook page, Meta collects usage data.  
    In principle, Meta is solely responsible for this data processing under data protection law.  
    Meta provides information on this in its data policy at  
    <a href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0" target="_blank">Facebook Privacy Policy</a> and in its cookie policy at  
    <a href="https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0" target="_blank">Facebook Cookie Policy</a>.
</p>`} />
                    <TitleSectionDec
                        title="4.9 FACEBOOK UND INSTAGRAM"
                        description={`<p>
    Our Facebook and Instagram pages (hereinafter collectively referred to as “Facebook”) can be accessed via the Meta platform, which is operated in the European Union by: Meta Platforms Ireland Ltd, 4 Grand Canal Square, Grand Canal Harbor, Dublin 2, Ireland (“Meta”).

Independent processing of usage data by Meta: When you visit our Facebook page, Meta collects usage data. In principle, Meta is solely responsible for this data processing under data protection law. Meta provides information on this in its data policy at <a href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0" target="_blank">Meta Data Policy</a> and in its cookie policy at <a href="https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0" target="_blank">Meta Cookie Policy</a>.

The data collected about you in this context is processed by Meta and may be transferred to countries outside the EU. Meta describes what information it receives and how it is used in its <a href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0" target="_blank">data usage guidelines</a>. These guidelines also provide information about how to contact Meta and how to customize ad settings.

When you access a Facebook page, the IP address assigned to your device is transmitted to Meta. According to Meta, this IP address is anonymized. Meta also stores information about its users’ devices (e.g., as part of the “login notification” function); this may enable Meta to assign IP addresses to individual users.

If you are currently logged into Facebook as a user, a cookie with your Facebook ID is stored on your device. This enables Meta to track that you have visited the respective page and how you have used it. This also applies to all other Facebook pages. Meta is able to use Facebook buttons embedded in websites to record your visits to these websites and assign them to your Facebook profile. This data can be used to offer you customized content or advertising.

If you want to avoid this, you should log out of Facebook or deactivate the “Stay logged in” function, delete the cookies stored on your device, and close and restart your browser. This deletes Facebook information that can be used to identify you directly. This allows you to use the Facebook fan page without revealing your Facebook ID. When you access interactive features on the page (like, comment, share, message, etc.), a Facebook login screen appears. After logging in, you will again be recognizable to Facebook as a user.

According to its own information, Meta stores the data until it is no longer needed to provide the services and Facebook products, or until the respective user account is deleted, whichever occurs first. This depends on the circumstances of the individual case, in particular the type of data, why it is collected and processed, and the relevant legal or operational storage requirements.

In connection with the above-mentioned functions, Meta may also transfer the processed data to servers outside the EU, in particular to Meta Platforms Inc. in the USA, to the extent necessary to provide these services. For the USA, the EU-U.S. Data Privacy Framework is an adequacy decision by the EU Commission that certifies that certified companies have an adequate level of data protection within the meaning of the GDPR. Meta Platforms Inc. is certified under the EU-U.S. Data Privacy Framework and is also registered on the list maintained by the U.S. Department of Commerce (<a href="https://www.dataprivacyframework.gov/" target="_blank">Data Privacy Framework List</a>). Therefore, a consistently high level of data protection is ensured when data is transmitted to Meta Platforms Inc. servers in the United States. Insofar as data is transmitted to the United States, such a third-country transfer is based on Art. 45 (1) sentence 1 GDPR.

Processing of usage data in joint responsibility: When you visit our Facebook page, Meta also uses certain usage data (e.g., whether you have marked certain posts with “Like” or commented on them) to provide us with summarized usage statistics (so-called “Page Insights”). Usage statistics do not allow any conclusions to be drawn about the behavior of individual users, but merely give us an overview of the use of the Facebook page (e.g., which posts were clicked on particularly often). We ourselves have no access to the personal data processed for the creation of the statistics. Which usage actions are logged by Facebook is determined solely by Meta and cannot be set up, changed, or otherwise influenced by us.

We have Facebook provide us with usage statistics in order to improve the posts published on Facebook and to make them as interesting as possible for users.

We and Facebook are jointly responsible for the processing of personal data for the creation of these usage statistics in accordance with Art. 26 GDPR.

The information from Facebook about page insights at <a href="https://de-de.facebook.com/legal/terms/page_controller_addendum" target="_blank">Page Insights Terms</a> describes which data is processed within the scope of joint responsibility and contains the “Page Insights Supplement,” in which Meta and we have contractually specified who fulfills which obligations under the GDPR.

Processing of your data when communicating via Facebook: If you contact us via the Facebook page, for example by commenting on a post or writing us a message via Facebook Messenger, we will process your related personal data (e.g., your name and the content of the communication) in order to process your request.`} />
                    <TitleSectionDec
                        title="4.10 TIKTOK"
                        description={`<p><p>
  Our TikTok profile is accessible via the TikTok platform, which is jointly operated in the European Union by: TikTok Technology Limited, 10 Earlsfort Terrace, Dublin, D02 T380, Ireland and TikTok Information Technologies UK Limited, 6th Floor, One London Wall, London, EC2Y 5EB, England. Both companies (hereafter “TikTok”) act as joint controllers in accordance with Art. 26 GDPR.
</p>

<p>
  Independent processing of usage data by TikTok: When you visit our TikTok profile, TikTok collects usage data. TikTok is solely responsible for this data processing. TikTok provides information on this in the TikTok Privacy Policy at 
  <a href="https://www.tiktok.com/legal/page/eea/privacy-policy/de-DE" style="text-decoration: underline;">TikTok Privacy Policy</a> 
  and the TikTok Cookie Policy at 
  <a href="https://www.tiktok.com/legal/tiktok-website-cookies-policy?lang=de" style="text-decoration: underline;">TikTok Cookie Policy</a>.
</p>

<p>
  TikTok processes personal data for various purposes, including to provide its services, to notify users of changes to the services, to provide users with support, to enable users to share user content with other users, to develop new services or to fulfill legal obligations. TikTok collects the following data about its users, among other things: profile data, user content and usage data, location data, information about the respective contacts/friends.
</p>

<p>
  In connection with the above-mentioned functions, TikTok may also transfer the data processed in the process to TikTok Group servers outside the EU, in particular in the USA, Malaysia and Singapore, insofar as this is necessary to provide these services. Since the data transfer is not covered by an adequacy decision, there are increased risks for you, for example, it may be more difficult to enforce your rights to this data. According to TikTok, data transfers to third countries for which there is no adequacy decision are carried out on the basis of the standard data protection clauses of the EU Commission. This means that TikTok is committed to ensuring compliance with European data protection standards, even when transferring data to third countries. Insofar as data is transferred to the US or another third country, such a third-country transfer is based on Art. 46 (2) (c) GDPR; in the case of TikTok affiliates based in third countries for which an adequacy decision has been made by the EU Commission, it is based on Art. 45 (1) (1) GDPR.
</p>

<p>
  Processing of usage data under joint controllership: TikTok also uses certain data collected from users of the TikTok platform (e.g. how long users have watched a video) to create aggregated usage statistics and make them available to the respective TikTok profile operators (so-called “TikTok Insights”). We also receive such aggregated usage statistics. The information we receive through TikTok Insights does not allow us to draw any conclusions about individual users. We ourselves have no access to personal data that TikTok processes for TikTok Insights. TikTok alone determines which data is processed for TikTok Insights and how. We have no legal or actual influence on the processing by TikTok. We use the reports to adapt our TikTok profile according to user needs and thus continuously optimize it.
</p>

<p>
  We and TikTok are joint controllers for the processing of personal data for the creation of these usage statistics in accordance with Art. 26 GDPR.
</p>

<p>
  In the Joint Controller Terms at 
  <a href="https://ads.tiktok.com/i18n/official/policy/jurisdiction-specific-terms" style="text-decoration: underline;">Joint Controller Terms</a>, 
  we and TikTok have contractually defined which of us fulfills which obligations under the GDPR. It also describes which data is processed within the scope of our joint responsibility.
</p>

<p>
  Processing of your data when communicating via TikTok: If you contact us via our TikTok profile, e.g. by commenting on a post or writing a message via the messenger, we process your data (e.g. your name and the content of the communication) in order to deal with your request.
</p>
</p>

<p><strong>Independent processing of usage data by TikTok:</strong> When you visit our TikTok profile, TikTok collects usage data. TikTok is solely responsible for this data processing. TikTok provides information on this in the TikTok Privacy Policy at <a href="https://www.tiktok.com/legal/page/eea/privacy-policy/de-DE" target="_blank">this link</a> and the TikTok Cookie Policy at <a href="https://www.tiktok.com/legal/tiktok-website-cookies-policy?lang=de" target="_blank">this link</a>.</p>

<p>TikTok processes personal data for various purposes, including to provide its services, to notify users of changes to the services, to provide users with support, to enable users to share user content with other users, to develop new services or to fulfill legal obligations.</p>

<p>In the Joint Controller Terms at <a href="https://ads.tiktok.com/i18n/official/policy/jurisdiction-specific-terms" target="_blank">this link</a>, we and TikTok have contractually defined which of us fulfills which obligations under the GDPR.</p>`} />
                    <TitleSectionDec
                        title="4.11 TWITCH
"
                        description={`<p>Our Twitch profile can be accessed via the Twitch platform, which is operated by Twitch Interactive, Inc. 350 Bush Street, 2nd Floor, San Francisco, CA 94104, USA.</p>

<p>When you visit our Twitch profile, Twitch collects usage data. Twitch is solely responsible for this data processing. Twitch provides information about this in its privacy policy at <a href="https://www.twitch.tv/p/de-de/legal/privacy-notice/" style="text-decoration: underline;">https://www.twitch.tv/p/de-de/legal/privacy-notice/</a> and in its cookie policy at <a href="https://www.twitch.tv/p/de-de/legal/cookie-notice/" style="text-decoration: underline;">https://www.twitch.tv/p/de-de/legal/cookie-notice/</a>.</p>

<p>Twitch processes personal data for various purposes, including to provide its services, to notify users of changes to the services, to provide users with support, to enable users to share user content with other users, to develop new services or to fulfill legal obligations. Twitch collects the following data about its users, among other things: profile data, user content and usage data, location data, information about the respective contacts.</p>

<p>Twitch also uses certain data collected from users of the Twitch platform (e.g. how long users have watched a video) to create aggregated usage statistics and to make them available to the respective operators of the Twitch profile (so-called “Insights & Analytics”). We also receive such aggregated usage statistics. The information we receive through Twitch Insights does not allow us to identify individual users. We ourselves have no access to personal data that Twitch processes for Twitch Insights. Twitch alone determines which data is processed for Twitch Insights and how. We have no legal or actual influence on the processing by Twitch. We use the reports to adapt our Twitch profile to user needs and to continuously optimize it.</p>

<p>In connection with the above-mentioned functions, Twitch also transmits the processed data to servers outside the EU, in particular in the USA, to the extent necessary to provide these services. Since the data transfer is not covered by an adequacy decision, there are increased risks for you, for example, enforcing your rights to this data may be more difficult. According to Twitch, it takes appropriate measures in these cases to ensure that your data is adequately protected. Insofar as data is transferred to the US or another third country, such a third-country transfer is based on Art. 49 (1) (a) GDPR.</p>

<p>Processing of your data when communicating via Twitch: If you contact us via our Twitch profile, for example by commenting on a post or writing a message via the messenger, we process your data (e.g. your name and the content of the communication) in order to deal with your request.</p>
`} />
                    <TitleSectionDec
                        title="4.12 LINKEDIN
"
                        description={`<p>We maintain a company profile on the LinkedIn portal, an offering of LinkedIn Ireland Unlimited Company, Wilton Place, Dublin 2, Ireland. We use the LinkedIn profile to present our company and to get in touch with potential employees.</p>

<p>You have the option of contacting us via our LinkedIn profile. In doing so, we process the available profile data (e.g. job title, company name, industry, education, professional experience, skills, contact details, photo) and the content of the message in order to process your request. The legal basis for this data processing is Art. 6 (1) (b) GDPR if the communication serves the purpose of fulfilling the contract or implementing pre-contractual measures, otherwise Art. 6 (1) (f) GDPR. We have a legitimate interest in contacting our users via our LinkedIn profile and answering inquiries.</p>

<p>In addition, you can share our posts, like them or comment on them. The information about the interaction as well as the profile data are processed by us. The legal basis for the data processing is Art. 6 (1) point f GDPR. We have a legitimate interest in understanding the response to our posts and communicating with users.</p>

<p>When you visit our LinkedIn profile, personal data may be processed by LinkedIn. We have no influence on this data processing. The purpose and scope of the data processing by LinkedIn, as well as the related rights and setting options for protecting the privacy of users, can be found in LinkedIn’s data protection declaration. LinkedIn’s data protection declaration can be found at: <a href="https://www.linkedin.com/legal/privacy-policy?_l=de_DE" style="text-decoration: underline;">https://www.linkedin.com/legal/privacy-policy?_l=de_DE</a>.</p>
`} />
                    <TitleSectionDec
                        title="4.13 YOUTUBE
"
                        description={`<p>We operate a channel on the YouTube platform, which is provided by Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland. We use the channel to present our company in videos and to get in touch with interested users.</p>

<p>Users can subscribe to our channel, mark our videos as “like” or “dislike”, share our videos, or comment on them. In doing so, we process profile data and the respective interaction. The data processing is based on Article 6(1)(f) GDPR. We have a legitimate interest in contacting our users through our channel and answering questions.</p>

<p>In addition, personal data is processed by Google when you visit our channel. We have no influence on this data processing. It is carried out in accordance with Google’s data protection declaration, which also applies to YouTube. You can find Google’s data protection declaration at: <a href="https://policies.google.com/privacy?hl=de" style="text-decoration: underline;">https://policies.google.com/privacy?hl=de</a>.</p>
`} />
                    <TitleSection
                        title="5. Your rights
"
                        description={`<p>As a person affected by data processing, you have the following rights – in each case under the legal requirements and to the extent permitted by law. You have the right to:</p>

<ul>
    <li>• obtain information about the processing of your personal data (<a href="https://gdpr-info.eu/art-15-gdpr/" style="text-decoration: underline;">Art. 15 GDPR</a>)</li>
    <li>• obtain without undue delay the rectification of inaccurate personal data concerning you and/or the completion of incomplete personal data (<a href="https://gdpr-info.eu/art-16-gdpr/" style="text-decoration: underline;">Art. 16 GDPR</a>)</li>
    <li>• obtain the erasure of personal data concerning you without undue delay (<a href="https://gdpr-info.eu/art-17-gdpr/" style="text-decoration: underline;">Art. 17 GDPR</a>)</li>
    <li>• request the restriction of data processing concerning you (<a href="https://gdpr-info.eu/art-18-gdpr/" style="text-decoration: underline;">Art. 18 GDPR</a>)</li>
    <li>• receive the personal data concerning you, which you have provided, in a structured, machine-readable format and to transmit those data to another controller (<a href="https://gdpr-info.eu/art-20-gdpr/" style="text-decoration: underline;">Art. 20 GDPR</a>)</li>
    <li>• object, on grounds relating to your particular situation, to the processing of personal data concerning you, provided that the processing is based on a legitimate interest; if your data is used for direct marketing purposes, you have the right to object at any time (<a href="https://gdpr-info.eu/art-21-gdpr/" style="text-decoration: underline;">Art. 21 GDPR</a>)</li>
    <li>• withdraw your consent to data processing at any time without affecting the lawfulness of data processing based on consent before its withdrawal (<a href="https://gdpr-info.eu/art-7-gdpr/" style="text-decoration: underline;">Art. 7 (3) GDPR</a>)</li>
    <li>• complain to a supervisory authority about the processing of your data (<a href="https://gdpr-info.eu/art-77-gdpr/" style="text-decoration: underline;">Art. 77 GDPR</a>).</li>
</ul>

`} />
                    <TitleSection
                        title="6. Right of objection"
                        description={`In accordance with Art. 21 GDPR, you have the right to object to any processing based on the legal basis of Art. 6 (1) lit. e or f GDPR. We will then no longer process the personal data unless we can demonstrate compelling legitimate grounds for the processing which override the interests, rights and freedoms of the data subject or for the establishment, exercise or defense of legal claims. If we process personal data about you for the purpose of direct marketing, including profiling, you may object to this processing in accordance with Art. 21 (2) and (3) GDPR. We will then no longer process the personal data for these purposes.`} />
                    <TitleSection
                        title="7. Revocation of consent
"
                        description={`You can revoke a given consent in accordance with Art. 7 (3) GDPR. Such a revocation does not affect the lawfulness of the processing that has taken place up to the revocation on the basis of the consent.`} />
                    <TitleSection
                        title="8. right to lodge a complaint with a supervisory authority
"
                        description={`If you believe that the processing of personal data concerning you violates the provisions of the GDPR, you have the right to lodge a complaint with a supervisory authority in accordance with Art. 77 GDPR.
 
Last updated: March 2025
`} />

                </div>
            </div>

            <Footer />
        </div>
    );
}

const TitleSection = ({ title, description }) => {
    return (
        <section className="my-6">
            <h2 className=" text-xl font-roboto font-semibold mb-2  text-[#10E0D7]">{title}</h2>
            <div
                className="text-white font-roboto"
                dangerouslySetInnerHTML={{ __html: description }}
            />
        </section>
    );
};
const TitleSectionDec = ({ title, description }) => {
    return (
        <section className="my-6">
            <h2 className="text-lg font-roboto font-medium  text-[#10E0D7] mb-2">{title}</h2>
            <div
                className="text-white font-roboto"
                dangerouslySetInnerHTML={{ __html: description }}
            />
        </section>
    );
};
