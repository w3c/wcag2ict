Success Criteria Problematic for Closed Functionality
-----------------------------------------------------

<p class="ednote">This section will be updated by the WCAG2ICT Task Force to include success criteria added or changed since the 2013 WCAG2ICT Note that are problematic for Closed Functionality.</p>

The following success criteria will be problematic for developers of closed functionality. They either discuss making information available in text (which can be read by assistive technologies) or making it “programmatically determinable” (rendered by a user agent and readable by assistive technologies) or discuss doing something else to make content compatible with assistive technologies. Alternate accessibility provisions that would be needed to address the purpose of these success criteria for the closed functionality aspects of products:

*   [1.1.1 Non-text Content](#non-text-content)—requires text or a text alternative;
*   [1.2.1 Pre-recorded video](#audio-only-and-video-only-prerecorded)—requires a text alternative for time based media;
*   [1.2.3 Audio description or Media Alternative](#audio-description-or-media-alternative-prerecorded)—one of the options available to authors for success criterion 1.2.3 is that of providing a media alternative that is text—which necessarily relies on a connected assistive technology to be presented;
*   [1.3.1 Info and Relationships](#info-and-relationships)—requires information in a programmatically determinable form;
*   [1.3.2 Meaningful Sequence](#meaningful-sequence)—requires information in a programmatically determinable form;
*   [1.3.5 Identify Input Purpose](#identify-input-purpose)—requires information in a programmatically determinable form;
*   [1.4.4 Resize Text](#resize-text)—because the text rendering support in a closed environment may be more limited than the support found in user agents for the Web, meeting Success Criterion 1.4.4 in a closed environment may place a much heavier burden on the content author;
*   [1.4.5 Images of Text](#images-of-text)—because there is no need to impose a requirement on all closed functionality that text displayed on the screen actually be represented internally as text (as defined by WCAG 2.2), given that there is no interoperability with assistive technology;
*   [2.1.1 Keyboard](#keyboard)—requires operation via a keyboard interface which allows alternative input devices;
*   [2.4.2 Page Titled](#page-titled)—where software is an integral part of hardware that provides a single function, such as a calculator or IP telephone, there is no need for a title;
*   [2.5.3 Label in Name](#label-in-name)—requires information in a programmatically determinable form; specifically, the programmatic name contains the text of the visual label;
*   [3.1.1 Language of Page](#language-of-page)—requires information in a programmatically determinable form;
*   [3.1.2 Language of Parts](#language-of-parts)—requires information in a programmatically determinable form;
*   [3.3.1 Error Identification](#error-identification)—while it's important for errors that can be detected to be described to the user, for closed functionality, the error description doesn't have to be provided in text, as defined in WCAG 2.2;
*   [4.1.1 Parsing](#parsing)—the [Intent of 4.1.1](https://www.w3.org/WAI/WCAG22/Understanding/parsing.html#intent) is to provide consistency so that different user agents or assistive technologies will yield the same result;
*   [4.1.2 Name, Role, Value](#name-role-value)—requires information in a programmatically determinable form.
*   [4.1.3 Status Messages](#status-messages)— requires information in a programmatic determinable form. Additionally, software with closed functionality is not typically implemented using markup languages.

<div class="note">

[Non-web software](#software) with closed functionality would need equivalent facilitation to provide access to status messages.</div>

<div class="note">Some of the above success criteria would apply to systems with closed functionality if they are partially closed or if they allow for the connection of some types of devices. For instance, Success Criterion 2.1.1 Keyboard would apply to systems which have closed functionality to screen readers but which have a physical keyboard or a connector for standard keyboards.</div><div class="note">While these guidelines are not suitable for closed functionality as written, they will inform and aid development of built-in accessible alternatives needed with closed functionality.</div>
