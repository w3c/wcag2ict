Comments on Definitions in WCAG 2 Glossary
----------------------------------------------------------

<div class="ednote">
    
This draft of WCAG2ICT added guidance on applying new WCAG 2.2 glossary terms to non-web documents and software. The following terms were added since the First Public Working Draft: Cognitive function test,  dragging movements, encloses, focus indicator, minimum bounding box, and perimeter. Of those terms, only [perimeter](#dfn-perimeter) needed WCAG2ICT guidance when applied to non-web documents and software. In addition, guidance for the term [CSS pixel](#dfn-css-pixels) was updated to address public comments.</div>
    
The following is a complete list of definitions from the WCAG 2 glossary. Some items apply to all technologies and do not require additional guidance in this document; guidance on the remainder follows.

### Glossary Items that Apply to All Technologies

The following glossary items apply to all technologies and do not need further interpretation for non-web ICT.

*   abbreviation
*   alternative to time-based media
*   ASCII art
*   audio
*   audio description
*   audio-only
*   blinking
*   CAPTCHA
*   captions
*   conformance
*   correct reading sequence
*   dragging movements
*   emergency
*   encloses
*   essential
*   extended audio description
*   flash
*   focus indicator
*   functionality
*   human language
*   idiom
*   image of text
*   informative
*   jargon
*   large scale (text)
*   legal commitments
*   link purpose
*   live
*   lower secondary education level
*   mechanism
*   media alternative for text
*   minimum bounding box
*   navigated sequentially
*   non-text content
*   normative
*   on a full-screen window
*   paused
*   pointer input
*   prerecorded
*   presentation
*   primary education level
*   process
*   programmatically determined link context
*   pure decoration
*   real-time event
*   relationships
*   relied upon (technologies that are)
*   same relative order
*   sign language
*   sign language interpretation
*   single pointer
*   specific sensory experience
*   state
*   status message
*   synchronized media
*   text
*   text alternative
*   used in an unusual or restricted way
*   user-controllable
*   video
*   video-only
*   visually customized

### Glossary Items Used only in AAA Success Criteria

This document does not provide guidance on applying AAA success criteria to non-web ICT, including the following definitions.

*   blocks of text
*   context-sensitive help
*   motion animation
*   region
*   section
*   supplemental content
*   user inactivity

### Glossary Items with Specific Guidance

Additional guidance is provided for the following glossary entries from WCAG 2 when applying them to non-web documents and software.

#### dfn-accessibility-supported

##### Applying “accessibility supported” to Non-Web Documents and Software

This applies directly as written and as described in the WCAG 2 glossary, replacing “browsers and other user agents” with “user agents or other software”, replacing “user agents” with “user agents or other software”, replacing “web content technology” with “non-web document or software technology”, adding “or other software extension” after “plug-in”, and replacing all five of the Notes with a single Note: “Note: The concepts behind the five Notes and in Understanding Accessibility Supported are applicable to web technologies. The same or similar factors are applicable for non-web technologies.”

With these substitutions and addition, it would read:

<DL><DT>accessibility supported</DT><DD>

supported by users' [assistive technologies](#dfn-assistive-technologies) as well as the accessibility features in <INS>**[[user agents](#dfn-user-agents) or other [software](#software)]**</INS>

To qualify as an accessibility-supported use of a <INS>**[[non-web document](#document) or software]**</INS> [technology](#dfn-technologies) (or feature of a technology), both 1 and 2 must be satisfied for a <INS>**[non-web document or software]**</INS> technology (or feature):

1.  **The way that the <INS>[non-web document or software technology]</INS> is used must be supported by users' assistive technology (AT).** This means that the way that the technology is used has been tested for interoperability with users' assistive technology in the [human language(s)](https://www.w3.org/TR/WCAG22/#dfn-human-language-s) of the [content](#content-on-and-off-the-web),
    
    **AND**
    
2.  **The <INS>[non-web document or software]</INS> technology must have accessibility-supported user agents <INS>[or other software]</INS> that are available to users.** This means that at least one of the following four statements is true:

    
    1.  The technology is supported natively in widely-distributed user agents <INS>**[or other software]**</INS> that are also accessibility supported (such as HTML and CSS);
        
        **OR**
        
    2.  The technology is supported in a widely-distributed plug-in <INS>**[or other software extension]**</INS> that is also accessibility supported;
        
        **OR**
        
    3. The content is available in a closed environment, such as a university or corporate network, where the user agent <INS>**[or other software]**</INS> required by the technology and used by the organization is also accessibility supported;
        
        **OR**
        
    4.  The user agent(s) that support the technology are accessibility supported and are available for download or purchase in a way that:
        
        *   does not cost a person with a disability any more than a person without a disability **and**
            
        *   is as easy to find and obtain for a person with a disability as it is for a person without disabilities.     

<div class="note">

<INS>**[The concepts behind the five Notes and in [Understanding Accessibility Supported](http://www.w3.org/WAI/WCAG22/Understanding/conformance#accessibility-support) are applicable to web technologies. The same or similar factors are applicable for non-web technologies.]**</INS></div></DD></DL>

#### dfn-ambiguous-to-users-in-general

##### Applying “ambiguous to users in general” to Non-Web Documents and Software

This applies directly as written and as described in the WCAG 2 glossary, replacing “Web page” with “non-web document or software”.

With this substitution, it would read:

<DL><DT>ambiguous to users in general</DT><DD>

the purpose cannot be determined from the link and all information of the <INS>**[[non-web document](#document) or [software](#software)]**</INS> presented to the user simultaneously with the link (i.e., readers without disabilities would not know what a link would do until they activated it)

<div class="example">

The word guava in the following sentence “One of the notable exports is guava” is a link. The link could lead to a definition of guava, a chart listing the quantity of guava exported or a photograph of people harvesting guava. Until the link is activated, all readers are unsure and the person with a disability is not at any disadvantage.</div>
</DD></DL>

#### dfn-assistive-technologies

##### Applying “assistive technology” to Non-Web Documents and Software

This applies directly as written and as described in the WCAG 2 glossary, replacing “acts as a user agent” with “acts stand-alone”, replacing “a mainstream user agent” with “mainstream information and communication technologies (ICT)” (later “mainstream ICT])”, and replacing “Web content” with “content”.

With these substitutions, it would read:

<DL><DT>assistive technology (as used in this document)</DT><DD>

hardware and/or software that acts <INS>**[stand-alone]**</INS>, or along with <INS>**[mainstream information and communication technologies (ICT)]**</INS>, to provide functionality to meet the requirements of users with disabilities that go beyond those offered by <INS>**[mainstream ICT]**</INS>

<div class="note">

Functionality provided by assistive technology includes alternative presentations (e.g., as synthesized speech or magnified content), alternative input methods (e.g., voice), additional navigation or orientation mechanisms, and content transformations (e.g., to make tables more accessible).</div>
<div class="note">

Assistive technologies often communicate data and messages with <INS>**[mainstream ICTs]**</INS> by using and monitoring APIs.</div>
<div class="note">

The distinction between <INS>**[mainstream ICTs]**</INS> and assistive technologies is not absolute. Many <INS>**[mainstream ICTs]**</INS> provide some features to assist individuals with disabilities. The basic difference is that <INS>**[mainstream ICTs]**</INS> target broad and diverse audiences that usually include people with and without disabilities. Assistive technologies target narrowly defined populations of users with specific disabilities. The assistance provided by an assistive technology is more specific and appropriate to the needs of its target users. The <INS>**[mainstream ICT]**</INS> may provide important functionality to assistive technologies like retrieving <INS>**[[content](#content-on-and-off-the-web)]**</INS> from program objects or parsing markup into identifiable bundles.</div>
<div class="example">

Assistive technologies that are important in the context of this document include the following:

- screen magnifiers, and other visual reading assistants, which are used by people with visual, perceptual and physical print disabilities to change text font, size, spacing, color, synchronization with speech, etc. in order to improve the visual readability of rendered text and images;    
- screen readers, which are used by people who are blind to read textual information through synthesized speech or braille;
- text-to-speech software, which is used by some people with cognitive, language, and learning disabilities to convert text into synthetic speech;
- speech recognition software, which may be used by people who have some physical disabilities;
- alternative keyboards, which are used by people with certain physical disabilities to simulate the keyboard (including alternate keyboards that use head pointers, single switches, sip/puff and other special input devices.);
- alternative pointing devices, which are used by people with certain physical disabilities to simulate mouse pointing and button activations.</div>
</DD></DL>

#### dfn-change-of-context

##### Applying “changes of context” to Non-Web Documents and Software

This applies directly as written and as described in the WCAG 2 glossary, replacing “Web page” and “page” with “non-web document or content presented by software”.

With this substitution, it would read:

<DL><DT>changes of context</DT><DD>

major changes in the content of the <INS>**[[non-web document](#document) or [content](#content-on-and-off-the-web) presented by [software](#software)]**</INS> that, if made without user awareness, can disorient users who are not able to view the entire <INS>**non-web document or content presented by software]**</INS> simultaneously

Changes in context include changes of:

1.  [user agent](#dfn-user-agents);
   
2.  [viewport](#dfn-viewport);
    
3.  focus;
    
4.  content that changes the meaning of the <INS>**[non-web document or content presented by software]**</INS>.  

<div class="note">

A change of content is not always a change of context. Changes in content, such as an expanding outline, dynamic menu, or a tab control do not necessarily change the context, unless they also change one of the above (e.g., focus).</div>
<div class="example">

Opening a new window, moving focus to a different component, going to a new page (including anything that would look to a user as if they had moved to a new page) or significantly re-arranging the content of a page are examples of changes of context.</div>
</DD></DL>
<div class="note">

A change in the user agent might include bringing up a new window, or might be a significant change in the menus and/or toolbars that are displayed and available for interacting with some portion of the document.</div>

#### dfn-cognitive-function-test

##### Applying “cognitive function test” to Non-Web Documents and Software

This applies directly as written and as described in the WCAG 2.2 glossary, replacing “Web sites” with “Web sites, non-web documents, and software”.

With this substitution, it would read:

<DL><DT>cognitive function test</DT><DD>

A task that requires the user to remember, manipulate, or transcribe information. Examples include, but are not limited to:

memorization, such as remembering a username, password, set of characters, images, or patterns. The common identifiers name, e-mail, and phone number are not considered cognitive function tests as they are personal to the user and consistent across **<INS>[Web sites, [non-web documents](#document), and [software](#software)]</INS>**;

* transcription, such as typing in characters;
* use of correct spelling;
* performance of calculations;
* solving of puzzles.

</DD></DL>

#### dfn-conforming-alternate-versions

##### Applying “conforming alternate version” to Non-Web Documents and Software

The guidance in this document does not use the term “conforming alternate version”.

See the section [Comments on Conformance](#comments-on-conformance).

#### dfn-content

##### Applying “content (Web Content)” to Non-Web Documents and Software

See the guidance on [content in the Key Terms section](#content-on-and-off-the-web).

#### dfn-contrast-ratio

##### Applying “contrast ratio” to Non-Web Documents and Software

This applies directly as written and as described in the WCAG 2 glossary.

Because relative luminance is defined such that it cannot directly apply to hardware, please note the text in the introduction which reads: “This document does not comment on hardware aspects of products, non-UI aspects of platforms, or the application of WCAG 2 for user-interface components as a category, because the basic constructs on which the WCAG 2 and / or its conformance are built do not apply to these.”

#### dfn-css-pixels

##### Applying “CSS pixel” to Non-Web Documents and Software
<div class="ednote">The WCAG2ICT task force has added additional notes around how “CSS pixel” should be applied to non-web software. These changes were made in response to public comments received on the previous draft. </div>

This applies directly as written and as described in the WCAG 2 glossary.

<div class="note">
[Non-web software](#software) and its accompanying [platform software](#platform-software) do not use CSS pixel measurements. Therefore, use platform-defined density-independent pixel measurements which approximate the CSS reference pixel. Examples of platform-defined density-independent pixel measurements include: points (pt) for iOS and macOS, density-independent pixels (dp) for Android, and effective pixels (epx) for Windows.</div>

<div class="note">
Examples where a density-independent pixel may not be defined in the platform:

- Software designed for specific hardware, such as kiosks or office equipment, where the author knows the physical screen size and, potentially, the pixel density.
- Software, such as streaming apps on smart TV platforms or similar software, where the author may lack information about the physical screen size but may know an appropriate viewing distance or viewing angle.

When there is no platform-defined density-independent pixel measurement, the reference pixel size can be approximated in the following manner:

- Determine a viewing distance that matches the use case and display type. For instance, in the case of a touchscreen, the viewing distance is normally less than the length of an arm, typically around 28 inches (71 cm).
- Calculate the size of the reference pixel: Divide the viewing distance by 2688. The number 2688 is obtained by dividing 28 inches (arm's length) by the derived reference pixel size (1/96 inch). </div>

<div class="note">
Most software and devices are usable at more than one viewing distance. However, only viewing distances that are plausible for the product can be considered an appropriate approximation for the reference pixel. For example, in software designed for use with a touchscreen, a visual-angle pixel longer than 0.11 inch (0.28 mm) would not be plausible, because this would signify a viewing distance of more than arm’s length. </div>

<div class="note">
People with low vision often use devices at less than the standard viewing distance. However, basing the density-independent pixel on a typical viewing distance provides a balance of benefits for users with disabilities. If a longer viewing distance were chosen as the basis for the density-independent pixel, the viewport would be measured with a smaller number of larger pixels, causing Success Criterion 1.4.10 Reflow to be less stringent. If a shorter viewing distance were chosen, user interface components would be measured with a larger number of smaller pixels, causing some success criteria, such as 2.5.8 Target Size, to be less stringent. </div>

#### dfn-down-event

From the [WCAG 2 definition for down-event](https://www.w3.org/TR/WCAG22/#dfn-down-event):

##### Applying “down-event” to Non-Web Documents and Software

This applies directly as written and as described in the WCAG 2 glossary.
 
<div class="note">
    
The down-event may have different names on different platforms. For example <INS>**["PointerPressed” or “mousedown”]**</INS>.</div>

#### dfn-general-flash-and-red-flash-thresholds

##### Applying “general flash and red flash thresholds” to Non-Web Documents and Software

This applies directly as written and as described in the WCAG 2 glossary.

<div class="note">

Because this deals with relative luminance and not luminance, it can only be applied to information on a display, not to hardware sources of light.</div>

#### dfn-input-error

##### Applying “input error” to Non-Web Documents and Software

This applies directly as written and as described in the WCAG 2 glossary, replacing “Web page” with “non-web document or software”.

With this substitution, it would read:

<DL><DT>input error</DT><DD>

information provided by the user that is not accepted

<div class="note">This includes:

1.  Information that is required by the <INS>**[[non-web document](#document) or [software](#software)]**</INS> but omitted by the user
    
2.  Information that is provided by the user but that falls outside the required data format or values
</div>    

</DD></DL>

#### dfn-keyboard-interface

##### Applying “keyboard interface” to Non-Web Documents and Software

This applies directly as written and as described in the WCAG 2 glossary.

<div class="note">

Keyboard interface does not refer to a physical device but to the interface between the software and any keyboard or keyboard substitute (i.e., an interface where the software accepts text or other keystroke input). Underlying [platform software](#platform-software) may provide device independent input services to applications that enable operation via such a keyboard interface. [Software](#software) that supports operation via such platform device independent services would be operable via a keyboard interface and would satisfy the success criterion.</div>
<div class="note">

This success criterion does not imply that software always needs to directly support a keyboard or “keyboard interface”. Nor does it imply that software always needs to provide a [virtual keyboard](#virtual-keyboard).</div>

#### dfn-keyboard-shortcuts

##### Applying “keyboard shortcut” to Non-Web Documents and Software

This applies directly as written and as described in the WCAG 2 glossary.

<div class="note">

A key command issued by a long press of a key (2 seconds or more) and other accessibility features provided by the platform are not considered a keyboard shortcut. Such commands often occur when there are limited keys, or no modifier keys, present on a device.</div>

#### dfn-labels

##### Applying “label” to Non-Web Documents and Software

This applies directly as written and as described in the WCAG 2 glossary, replacing “Web Content” with “content” and adding “or by accessibility features of software” after “assistive technology” in Note 1.

With this substitution, it would read:

<DL><DT>label</DT><DD>

[text](https://www.w3.org/TR/WCAG22/#dfn-text) or other component with a [text alternative](https://www.w3.org/TR/WCAG22/#dfn-text-alternative) that is presented to a user to identify a component within <INS>**[[content](#content-on-and-off-the-web)]**</INS>

<div class="note">

A label is presented to all users whereas the [name](#dfn-name) may be hidden and only exposed by assistive technology <INS>**[or by accessibility features of software]**</INS>. In many (but not all) cases the name and the label are the same.</div>
<div class="note">

The term label is not limited to the label element in HTML.</div></DD></DL>

#### dfn-name

##### Applying “name” to Non-Web Documents and Software

This applies directly as written and as described in the WCAG 2 glossary, replacing “Web content” with “content” and adding “or by accessibility features of software” after “assistive technology” in Note 1.

With this substitution, it would read:

<DL><DT>name</DT><DD>

text by which software can identify a component within <INS>**[[content](#content-on-and-off-the-web)]**</INS> to the user

<div class="note">

The name may be hidden and only exposed by assistive technology <INS>**[or by accessibility features of software]**</INS>, whereas a [label](#dfn-labels) is presented to all users. In many (but not all) cases, the label and the name are the same.</div>
<div class="note">

This is unrelated to the name attribute in HTML.</div>
</DD></DL>
<div class="note">

“AccessibleName” (or the corresponding term used in different APIs) of the Accessibility API of the platform is an example of such a name.</div>

#### dfn-perimeter

##### Applying “perimeter” to Non-Web Documents and Software

This applies directly as written and as described in the WCAG 2 glossary, replacing "CSS pixel" with "platform-defined density-independent pixel".

With this substitution, it would read:

<DL><DT>perimeter</DT><DD>

continuous line forming the boundary of a shape not including shared pixels, or the minimum bounding box, whichever is shortest.

<div class="example">
    
The perimeter calculation for a 2 **<INS>[platform-defined density-independent pixel]</INS>** perimeter around a rectangle is 4h+4w, where h is the height and w is the width. For a 2 **<INS>[platform-defined density-independent pixel]</INS>** perimeter around a circle it is 4𝜋r.</div>
<div class="note">

In technologies where CSS is not used, the definition of 'CSS pixel' applies as described in [Applying “CSS pixel” to Non-Web Documents and Software](#applying-css-pixel-to-non-web-documents-and-software).</div>
</DD></DL>

#### dfn-programmatically-determinable

##### Applying “programmatically determined” to Non-Web Documents and Software

This applies directly as written and as described in the WCAG 2 glossary, replacing “user agents, including assistive technologies” with “assistive technologies and accessibility features of software” and adding and “accessibility features of software” after “assistive technology”.

With this substitution, it would read:

<DL><DT>programmatically determined (programmatically determinable)</DT><DD>

determined by [software](#software) from author-supplied data provided in a way that different <INS>**[[assistive technologies](#dfn-assistive-technologies) and accessibility features of software]**</INS>, can extract and present this information to users in different modalities

<div class="example">

Determined in a markup language from elements and attributes that are accessed directly by commonly available assistive technology <INS>**[and accessibility features of software]**</INS>.</div>
<div class="example">

Determined from technology-specific data structures in a non-markup language and exposed to assistive technology <INS>**[and accessibility features of software]**</INS> via an accessibility API that is supported by commonly available assistive technology <INS>**[and accessibility features of software]**</INS>.</div>

</DD></DL><div class="note">

Software typically enables content to be programmatically determined through the use of [accessibility services of platform software](#accessibility-services-of-platform-software). Non-web documents typically enable [content](#content-on-and-off-the-web) to be programmatically determined through the use of accessibility services of the user agent.</div>

#### dfn-programmatically-set

##### Applying “programmatically set” to Non-Web Documents and Software

This applies directly as written and as described in the WCAG 2 glossary, replacing “user agents, including assistive technologies” with “assistive technologies and accessibility features of software”.

With this substitution, it would read:

<DL><DT>programmatically set</DT><DD>

set by software using methods that are supported by <INS>**[[assistive technologies](#dfn-assistive-technologies) and accessibility features of software]**</INS>

</DD></DL><div class="note">

Software typically enables [content](#content-on-and-off-the-web) to be programmatically determined through the use of [accessibility services of platform software](#accessibility-services-of-platform-software). Non-web documents typically enable content to be programmatically determined through the use of accessibility services of the user agent.</div>

#### dfn-relative-luminance

##### Applying “relative luminance” to Non-Web Documents and Software

This applies directly as written and as described in the WCAG 2 glossary, replacing “Web content” with “content”.

With this substitution, it would read:

<DL><DT>relative luminance</DT><DD>

the relative brightness of any point in a colorspace, normalized to 0 for darkest black and 1 for lightest white

<div class="note">For the sRGB colorspace, the relative luminance of a color is defined as L = 0.2126 \* **R** + 0.7152 \* **G** + 0.0722 \* **B** where **R**, **G** and **B** are defined as:

- if RsRGB <= 0.03928 then **R** = RsRGB/12.92 else **R** = ((RsRGB+0.055)/1.055) ^ 2.4
- if GsRGB <= 0.03928 then **G** = GsRGB/12.92 else **G** = ((GsRGB+0.055)/1.055) ^ 2.4
- if BsRGB <= 0.03928 then **B** = BsRGB/12.92 else **B** = ((BsRGB+0.055)/1.055) ^ 2.4  

and RsRGB, GsRGB, and BsRGB are defined as:

- RsRGB = R8bit/255
- GsRGB = G8bit/255
- BsRGB = B8bit/255
    
The “^” character is the exponentiation operator. (Formula taken from [\[sRGB\]](http://www.w3.org/TR/WCAG22/#bib-srgb)).</div>
<div class="note">Before May 2021 the value of 0.04045 in the definition was different (0.03928). It was taken from an older version of the specification and has been updated. It has no practical effect on the calculations in the context of these guidelines.</div>
<div class="note">

Almost all systems used today to view <INS>**[[content](#content-on-and-off-the-web)]**</INS> assume sRGB encoding. Unless it is known that another color space will be used to process and display the content, authors should evaluate using sRGB colorspace. If using other color spaces, see [Understanding Success Criterion 1.4.3](http://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum).</div>
<div class="note">

If dithering occurs after delivery, then the source color value is used. For colors that are dithered at the source, the average values of the colors that are dithered should be used (average R, average G, and average B).</div>
<div class="note">

Tools are available that automatically do the calculations when testing contrast and flash.</div>
<div class="note">
    
A [MathML version of the relative luminance definition](http://www.w3.org/TR/WCAG22/relative-luminance.html) is available.</div>
</DD></DL>

<div class="note">Because relative luminance is defined such that it cannot directly apply to hardware, please note the text in the introduction which reads: “This document does not comment on hardware aspects of products, non-UI aspects of platforms, or the application of WCAG 2 for user-interface components as a category, because the basic constructs on which the WCAG 2 and / or its conformance are built do not apply to these.”</div>

#### dfn-role

##### Applying “role” to Non-Web Documents and Software

This applies directly as written and as described in the WCAG 2 glossary, replacing “Web content” with “content”.

With this substitution, it would read:

<DL><DT>role</DT><DD>

text or number by which software can identify the function of a component within <INS>**[[content](#content-on-and-off-the-web)]**</INS>

<div class="example">

A number that indicates whether an image functions as a hyperlink, command button, or check box.</div>
</DD></DL>
<div class="note">

“AccessibleRole” (or the corresponding term used in different APIs) of the Accessibility API of the platform is an example of such a role.</div>

#### dfn-same-functionality

##### Applying “same functionality” to Non-Web Documents and Software

This applies directly as written and as described in the WCAG 2 glossary, adding a second example (and numbering the first).

With these substitutions, it would read:

<DL><DT>same functionality</DT><DD>

same result when used

<div class="example"> 

A submit “search” button on one web page and a “find” button on another web page may both have a field to enter a term and list topics in the Web site related to the term submitted. In this case, they would have the same functionality but would not be labeled consistently.</div>
<div class="example">

A ribbon icon that saves the document that looks like an arrow pointing into a folder in one case, and an arrow pointing into a hard drive in another. In this case as well, they would have the same functionality but would not be labeled consistently.</div></DD></DL>

#### dfn-satisfies

##### Applying “satisfies a success criterion” to Non-Web Documents and Software

This applies directly as written and as described in the WCAG 2 glossary, replacing “page” with “non-web document or software”.

With this substitution, it would read:

<DL><DT>satisfies a success criterion</DT><DD>
    
the success criterion does not evaluate to 'false' when applied to the <INS>**[[non-web document](#document) or [software](#software)]**</INS>

<div class="note">
    
Though WCAG2ICT and WCAG 2 don't use this exact phrase, in this document there are variations of the phrase that use this definition. See "success criteria is satisfied" in [Section 6 Comments on Conformance](#comments-on-conformance) and "satisfy any success criterion" in the notes for the definition of [set of software programs](#set-of-software-programs).</div></DD></DL>

#### dfn-set-of-web-pages

##### Applying “set of Web pages” to Non-Web Documents and Software

See the guidance on [set of documents](#set-of-documents) and [set of software programs](#set-of-software-programs) in the [Key Terms](#key-terms) section.

<div class="note">

For success criteria that use the term “set of web pages”, either explicitly or implicitly ([2.4.1](#bypass-blocks), [2.4.5](#multiple-ways), [3.2.3](#consistent-navigation), and [3.2.4](#consistent-identification)), simply substitute "set of non-web documents" and "set of software programs" when applying this to non-web technologies.</div>

#### dfn-structure

##### Applying “structure” to Non-Web Documents and Software

This applies directly as written and as described in the WCAG 2 glossary, replacing “a Web page” with “non-web documents or software” and replacing “collection of Web pages” with “set of documents or set of software programs”.

With these substitutions, it would read:

<DL><DT>structure</DT><DD>

1.  The way the parts of <INS>**[[non-web documents](#document) or [software](#software)]**</INS> are organized in relation to each other; and
    
2.  The way a <INS>**[[set of documents](#set-of-documents) or [set of software programs](#set-of-software-programs)]**</INS> is organized

</DD></DL><div class="note">

See the guidance on [sets of documents](#set-of-documents) and [sets of software programs](#set-of-software-programs) in the Key Terms section.</div>

#### dfn-style-properties

#####  Applying “style property” to Non-Web Documents and Software

This applies directly as written and as described in the WCAG 2 glossary, replacing “user agent(s)” with “user agent(s) or platform software”, "web content" with "content", replacing "in-line styles, author style sheets" with "programmatically-set styles", and replacing "user agent interface settings, user style sheets" with "user agent, platform software or other software settings".

With these substitutions, it would read:

<DL><DT>style property</DT><DD>

property whose value determines the presentation (e.g. font, color, size, location, padding, volume, synthesized speech prosody) of content elements as they are rendered (e.g. onscreen, via loudspeaker, via braille display) by <INS>**[[user agents](#user-agent) or [platform software](#platform-software)]**</INS>

Style properties can have several origins:

- <INS>**[User agent or platform software]**</INS> **default styles:** The default style property values applied in the absence of any author or user styles. Some <INS>**[content]**</INS> technologies specify a default rendering, others do not;
- **Author styles:** Style property values that are set by the author as part of the content (e.g. <INS>**[programmatically-set styles]**</INS>);
- **User styles:** Style property values that are set by the user (e.g. via <INS>**[user agent, platform software or other [software](#software)]**</INS> interface settings)
</DD></DL>

#### dfn-targets

#####  Applying “target” to Non-Web Documents and Software
This applies directly as written and as described in the WCAG 2 glossary, replacing “page” with “non-web document or content presented by software”.

With this substitution, it would read:

<DL><DT>target</DT><DD>
    
region of the display that will accept a pointer action, such as the interactive area of a user interface component

<div class="note">
    
If two or more targets are overlapping, the overlapping area should not be included in the measurement of the target size, except when the overlapping targets perform the same action or open the same <INS>**[[non-web document](#document) or [content](#content-on-and-off-the-web) presented by [software](#software)]**</INS>.</div></DD></DL>

#### dfn-technologies

##### Applying “technology” to Non-Web Documents and Software

This applies directly as written and as described in the WCAG 2 glossary, replacing “web content” with “non-web document or software”, “user agents” with “user agents or other software”, removing the notes, and replacing the example with “Example: Some common examples of non-web document and software technologies include ODF, OOXML, Java, and C++.”

With these substitutions, it would read:

<DL><DT>technology (<INS>**[non-web document or software]**</INS>)</DT><DD>

[mechanism](https://www.w3.org/TR/WCAG22/#dfn-mechanism) for encoding instructions to be rendered, played or executed by <INS>**[[user agents](#user-agent) or other [software](#software)]**</INS>.

<div class="example">

Some common examples of <INS>**[non-web document and software technologies include ODF, OOXML, Java, and C++]**</INS>.</div></DD></DL>

#### dfn-up-event

##### Applying “up-event” to Non-Web Documents and Software

This applies directly as written and as described in the WCAG 2 glossary.
 
<div class="note">
    
The up-event may have different names on different platforms, such as <INS>**[“PointerReleased” or “mouseup”]**</INS>.</div>

#### dfn-user-agents

##### Applying “user agent” to Non-Web Documents and Software

See the [guidance on user agent in the Key Terms section](#user-agent).

#### dfn-user-interface-components

##### Applying “user interface component” to Non-Web Documents and Software

This applies directly as written and as described in the WCAG 2 glossary, replacing the example with “Example: A software program has 2 controls: a text field for entering a file name and a drop down list box for choosing a folder. Each is a user interface component with a name that is settable by the software.”

With this substitution, it would read:

<DL><DT>user interface component</DT><DD>

a part of the [content](#content-on-and-off-the-web) that is perceived by users as a single control for a distinct function

<div class="note">

Multiple user interface components may be implemented as a single programmatic element. "Components" here is not tied to programming techniques, but rather to what the user perceives as separate controls.</div>
<div class="note">

User interface components include form elements and links as well as components generated by scripts.</div>
<div class="note">

What is meant by "component" or "user interface component" here is also sometimes called "user interface element".</div>
<div class="example">

A [software](#software) program has 2 controls: a text field for entering a file name and a drop down list box for choosing a folder. Each is a user interface component with a name that is settable by the software.</div>
</DD></DL>

#### dfn-viewport

##### Applying “viewport” to Non-Web Documents and Software

This applies directly as written and as described in the WCAG 2 glossary, replacing “user agent” with “software”.

With this substitution, it would read:

<DL><DT>viewport</DT><DD>

object in which the <INS>**[[software](#software)]**</INS> presents [content](#content-on-and-off-the-web)

<div class="note">

The <INS>**[software]**</INS> presents content through one or more viewports. Viewports include windows, frames, loudspeakers, and virtual magnifying glasses. A viewport may contain another viewport (e.g., nested frames). Interface components created by the <INS>**[software]**</INS> such as prompts, menus, and alerts are not viewports.</div>
<div class="note">

This definition is based on [User Agent Accessibility Guidelines 1.0 Glossary](http://www.w3.org/TR/WAI-USERAGENT/glossary.html).</div>
</DD></DL>

#### dfn-web-page-s

##### Applying “Web Page” to Non-Web Documents and Software

This applies directly as written and as described in the WCAG 2 glossary.

<div class="note">

For those success criteria that use the term “web page”, WCAG2ICT provides specific replacement term(s) for “Web page”.</div>
