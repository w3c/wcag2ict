Success Criteria Problematic for Closed Functionality
-----------------------------------------------------

<p class="ednote">This section will be updated by the WCAG2ICT Task Force to include success criteria added or changed since the 2013 WCAG2ICT Note that are problematic for Closed Functionality.</p>

The following success criteria will be problematic for developers of closed functionality. They either discuss making information available in text (which can be read by assistive technologies) or making it “programmatically determinable” (rendered by a user agent and readable by assistive technologies) or discuss doing something else to make content compatible with assistive technologies. Alternate accessibility provisions that would be needed to address the purpose of these success criteria for the closed functionality aspects of products:

<ul>
<li><a href="#non-text-content">1.1.1 Non-text Content</a>—Requires text or a text alternative in a programmatically determinable form.</li>
<li><a href="#audio-only-and-video-only-prerecorded">1.2.1 Pre-recorded video</a>—One of the options available to authors for success criterion 1.2.1 is that of providing a media alternative that is text—which necessarily relies on a connected assistive technology to be presented.</li>
<li><a href="#audio-description-or-media-alternative-prerecorded">1.2.3 Audio description or Media Alternative</a>—One of the options available to authors for success criterion 1.2.3 is that of providing a media alternative that is text—which necessarily relies on a connected assistive technology to be presented.</li>
<li><a href="#info-and-relationships">1.3.1 Info and Relationships</a>—Requires information in a programmatically determinable form.</li>
<li><a href="#meaningful-sequence">1.3.2 Meaningful Sequence</a>—Requires information in a programmatically determinable form; a correct reading sequence should be output that helps user correlate information that is provided auditorially or through some other non-visual means with the corresponding information displayed on the screen.</li>
<li><a href="#orientation">1.3.4 Orientation</a>—Some closed functionality products have fixed-in-place displays or other limitations to modifying the physical display orientation. See the note in the section <a href="#guidance-when-applying-success-criterion-1-3-4-to-non-web-documents-and-software">Guidance When Applying Success Criterion 1.3.4 to Non-Web Documents and Software</a>.
<li><a href="#identify-input-purpose">1.3.5 Identify Input Purpose</a>—Requires information in a programmatically determinable form;text labels need to be specific and be provided to the user in other modalities (e.g. auditory).</li>
<li><a href="#audio-control">1.4.2 Audio Control</a>There are existing closed functionality requirements in standards such as the EN 301 549 and U.S. Revised 508 Standards (<a href="https://www.access-board.gov/ict/#402.3">402.3 Volume</a>) that cover volume control for closed functionality products.  Since there is no AT (by definition) in a closed functionality product, there is no potential for conflict between self-voiced content and screen reader audio. To avoid potential conflicts between the volume control requirements, this WCAG requirement should not be applied to closed functionality software.</li>
<li><a href="#resize-text">1.4.4 Resize Text</a>—Because the text rendering support in a closed environment may be more limited than the support found in user agents for the Web, meeting Success Criterion 1.4.4 in a closed environment may place a much heavier burden on the content author.</li>
<li><a href="#images-of-text">1.4.5 Images of Text</a>—because there is no need to impose a requirement on all closed functionality that text displayed on the screen actually be represented internally as text (as defined by WCAG 2.2), given that there is no interoperability with assistive technology;</li>
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
