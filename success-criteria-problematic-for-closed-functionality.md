Success Criteria Problematic for Closed Functionality
-----------------------------------------------------

<p class="ednote">This section has been updated to incorporate additional notes for new WCAG 2.1 criteria that are problematic for Closed Functionality. In the next public draft, the WCAG2ICT Task Force will add new WCAG 2.2 criteria and may also make updates to existing WCAG 2.0 content in this section to reflect new insights learned since the 2013 WCAG2ICT Note.</p>

The following success criteria will be problematic for developers of closed functionality. They either discuss making information available in text (which can be read by assistive technologies) or making it “programmatically determinable” (rendered by a user agent and readable by assistive technologies) or discuss doing something else to make content compatible with assistive technologies. Alternate accessibility provisions that would be needed to address the purpose of these success criteria for the closed functionality aspects of products:

<ul>
<li><a href="#non-text-content">1.1.1 Non-text Content</a>—requires text or a text alternative;</li>
<li><a href="#audio-only-and-video-only-prerecorded">1.2.1 Pre-recorded video</a>—requires a text alternative for time based media;</li>
<li><a href="#audio-description-or-media-alternative-prerecorded">1.2.3 Audio description or Media Alternative</a>—one of the options available to authors for success criterion 1.2.3 is that of providing a media alternative that is text—which necessarily relies on a connected assistive technology to be presented;</li>
<li><a href="#info-and-relationships">1.3.1 Info and Relationships</a>—requires information in a programmatically determinable form;</li>
<li><a href="#meaningful-sequence">1.3.2 Meaningful Sequence</a>—requires information in a programmatically determinable form;</li>
<li><a href="#identify-input-purpose">1.3.5 Identify Input Purpose</a>—requires information in a programmatically determinable form;</li>
<li><a href="#resize-text">1.4.4 Resize Text</a>—because the text rendering support in a closed environment may be more limited than the support found in user agents for the Web, meeting Success Criterion 1.4.4 in a closed environment may place a much heavier burden on the content author;</li>
<li><a href="#images-of-text">1.4.5 Images of Text</a>—because there is no need to impose a requirement on all closed functionality that text displayed on the screen actually be represented internally as text (as defined by WCAG 2.2), given that there is no interoperability with assistive technology;</li>
<li><a href="#reflow">1.4.10 Reflow</a>—Many closed functionality products do not allow users to modify the viewport or change font sizes, thus there would be no need to impose a requirement on all closed functionality that content is able to reflow. Additionally, many closed functionality products do not display large chunks of text and only have UI controls. In such cases, two-directional scrolling to access the text and UI controls may be considered essential.</li>
<li><a href="#non-text-contrast">1.4.11 Non-text Contrast</a>—There are cases where applying this Success Criterion to non-web software on closed functionality products is problematic:</li>
<ul>
<li>When the appearance of the content is determined by the hardware and not modifiable by the software author, the non-web software would meet the exception for this Success Criterion.</li>
<div class="note">Hardware requirements for contrast are out of scope for WCAG2ICT (and this Success Criterion), but do exist in other standards' requirements for closed functionality products (e.g. EN 301 549 and Revised 508 Standards).</div>
<li>When the color contrast ratio cannot be programmatically measured due to system limitations (e.g. lockdown), precise quantifiable testing of color contrast cannot be performed by a third party. In such cases, the software author would need to confirm that the color combinations used meet the contrast requirement.</li>
<div class="note">Photographs are not sufficient for testing that content meets this Success Criteria. This is because the quality of the lighting, camera, and physical aspects of the hardware display can dramatically affect the ability to capture the content for testing purposes.</div>
</ul>
<li><a href="#keyboard">2.1.1 Keyboard</a>—requires operation via a keyboard interface which allows alternative input devices;</li>
<li><a href="#page-titled">2.4.2 Page Titled</a>—where software is an integral part of hardware that provides a single function, such as a calculator or IP telephone, there is no need for a title;</li>
<li><a href="#label-in-name">2.5.3 Label in Name</a>—requires information in a programmatically determinable form; specifically, the programmatic name contains the text of the visual label;</li>
<li><a href="#language-of-page">3.1.1 Language of Page</a>—requires information in a programmatically determinable form;</li>
<li><a href="#language-of-parts">3.1.2 Language of Parts</a>—requires information in a programmatically determinable form;</li>
<li><a href="#error-identification">3.3.1 Error Identification</a>—while it's important for errors that can be detected to be described to the user, for closed functionality, the error description doesn't have to be provided in text, as defined in WCAG 2.2;</li>
<li><a href="#parsing">4.1.1 Parsing</a>—the <a href="https://www.w3.org/WAI/WCAG22/Understanding/parsing.html#intent">Intent of 4.1.1</a> is to provide consistency so that different user agents or assistive technologies will yield the same result;</li>
<li><a href="#name-role-value">4.1.2 Name, Role, Value</a>—requires information in a programmatically determinable form.</li>
<li><a href="#status-messages">4.1.3 Status Messages</a>—requires information in a programmatic determinable form. Additionally, software with closed functionality is not typically implemented using markup languages.</li>
<div class="note">Non-web software with closed functionality would need equivalent facilitation to provide access to status messages.</div></li>
</ul>

<div class="note"><p>Some of the above success criteria would apply to systems with closed functionality if they are partially closed or if they allow for the connection of some types of devices. For instance, Success Criterion 2.1.1 Keyboard would apply to systems which have closed functionality to screen readers but which have a physical keyboard or a connector for standard keyboards.</p></div><div class="note">While these guidelines are not suitable for closed functionality as written, they will inform and aid development of built-in accessible alternatives needed with closed functionality.</div>
