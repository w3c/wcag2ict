Success criteria problematic for closed functionality
-----------------------------------------------------

There are success criteria that can be problematic for developers of ICT with closed functionality.  Some criteria discuss making information available in text (which can be read by assistive technologies), making it “programmatically determinable” (rendered by a user agent and readable by assistive technologies), or doing something else to make content compatible with assistive technologies.  Where ICT with closed functionality doesn’t support use of assistive technology or the platform does not have an accessibility API, providing equivalent information and operation through another mechanism, such as functions built into the software that behave like assistive technology, would help meet the intent of these success criteria. See also the [Comments on Closed Functionality](#comments-on-closed-functionality) section.

Other success criteria would apply to ICT with closed functionality either if they are partially closed or if they allow for the connection of some types of devices. As an example, Success Criterion 2.1.1 Keyboard would apply to ICT that is closed to screen readers, but have a physical keyboard, a connector for standard keyboards, or allow the installation of alternate keyboards.  While these criteria, as written, are not always applicable to ICT with closed functionality, most of them can inform and aid development of built-in features needed to make ICT with closed functionality accessible. 

## Level A and Level AA criteria

For non-web software on ICT with closed functionality, those who implement this document (WCAG2ICT) should consider the applicability of individual WCAG 2 success criteria on a criterion-by-criterion basis. Alternate accessibility provisions might be needed to cover the user needs addressed by the following Level A and AA success criteria:

### [1.1.1 Non-text Content](#non-text-content) {#problematic-for-closed-non-text-content}

Depends upon text (or a text alternative) being in a programmatically
determinable form.

### [1.2.1 Audio-only and video-only (pre-recorded)](#audio-only-and-video-only-prerecorded) {#problematic-for-closed-audio-only-and-video-only-prerecorded}

One of the options available to authors for Success Criterion 1.2.1 is
providing a media alternative that is text which, in the absence of
connected assistive technology, would need to be made available in
different modalities.

### [1.2.3 Audio description or Media Alternative](#audio-description-or-media-alternative-prerecorded) {#problematic-for-closed-audio-description-or-media-alternative-prerecorded}

One of the options available to authors for Success Criterion 1.2.3 is
providing a media alternative that is text which, in the absence of
connected assistive technology, would need to be made available in
different modalities.

### [1.3.1 Info and Relationships](#info-and-relationships) {#problematic-for-closed-info-and-relationships}

Requires that information be in a programmatically determinable form or
in text (that is programmatically determinable).

### [1.3.2 Meaningful Sequence](#meaningful-sequence) {#problematic-for-closed-meaningful-sequence}

Requires information (i.e, a correct reading sequence) in a
programmatically determinable form. An equivalent for ICT with closed
functionality would be to provide a meaningful reading sequence through
auditory output or some other non-visual means that helps users
correlate the output with the corresponding information displayed on the
screen.

### [1.3.4 Orientation](#orientation) {#problematic-for-closed-orientation}

ICT with closed functionality that has fixed-in-place displays or other
limitations that prevent modifying the physical display orientation
should be considered as examples that are covered under the essential
exception. See the note in the section [Applying SC 1.3.4 Orientation to
non-web software](#applying-sc-1-3-4-orientation-to-non-web-software).

### [1.3.5 Identify Input Purpose](#identify-input-purpose) {#problematic-for-closed-identify-input-purpose}

Depends upon information in a programmatically determinable form; in the
absence of programmatic capabilities, text labels need to be specific
and be provided to the user in other modalities (e.g. auditory).

### [1.3.6 Identify Purpose (Level AAA)](#identify-purpose) {#problematic-for-closed-identify-purpose}

Depends upon information in a programmatically determinable form; in the
absence of programmatic capabilities, information on the purpose of user
interface components, icons and regions need to be specific and be
provided to the user in other modalities (e.g. auditory).

### [1.4.2 Audio Control](#audio-control) {#problematic-for-closed-audio-control}

The intent of this success criterion is to avoid interference of audio
with assistive products, which are not available in ICT with closed
functionality. If the built-in accessibility features of the ICT with
closed functionality provide speech output, then the interference may
happen and this success criterion applies. In addition, there are
existing requirements in standards (e.g., the EN 301 549 and U.S.
Revised 508 Standards) that address volume control for ICT with closed
functionality.

### [1.4.4 Resize Text](#resize-text) {#problematic-for-closed-resize-text}

Non-web software on ICT with closed functionality may offer more limited
text rendering support than the support found in user agents for the
web. As a result, meeting Success Criterion 1.4.4 in a closed
environment may place a much heavier burden on the content author.

### [1.4.5 Images of Text](#images-of-text) {#problematic-for-closed-images-of-text}

To enable assistive technology to modify displayed text (e.g., adjusting
contrast, increasing font size), machine-readable text is needed, as
opposed to mere images of text. Not all ICT with closed functionality
has the capability to support visual modification of displayed text or
images of text, given there is no interoperability with assistive
technology and/or lack of platform support.

### [1.4.10 Reflow](#reflow) {#problematic-for-closed-reflow}

Some non-web software on ICT with closed functionality does not support
scrolling content, or zooming, or changing the size of a viewport or
scrollable content area to the specified width/height (examples include,
but are not limited to, software for self-service transaction machines
or kiosks). Therefore, some other requirements beyond WCAG's would be
needed for ICT with closed functionality to ensure that content is
readable by persons with low vision without scrolling in two dimensions.

<div class="note">
Some ICT with closed functionality does not display large chunks of text
and only has UI controls. In such cases, two-dimensional scrolling to
access the text and UI controls may be considered essential, thus
meeting an exception, and the success criterion would be satisfied.
</div class="note">

### [1.4.12 Text Spacing](#text-spacing) {#problematic-for-closed-text-spacing}

In non-web software on ICT with closed functionality the ability for
users to modify line, paragraph, letter, or word spacing is rarely
supported. Regardless, the success criterion applies as written and as
noted in the [Applying SC 1.4.12 Text Spacing to non-web documents and
non-web
software](#applying-sc-1-4-12-text-spacing-to-non-web-documents-and-non-web-software).

### [2.1.1 Keyboard](#keyboard) {#problematic-for-closed-keyboard}

This is based on the assumption that assistive technologies have access
to the keyboard interface and can thus provide alternate ways for
keyboard input alongside any other mechanism (internal or external)
provided for keyboard input. In products that do not accept input from a
keyboard interface and are therefore closed to assistive technologies
that involve alternate keyboard input methods, some requirements beyond
WCAG\'s would be needed to ensure that content is operable by people
with disabilities for whom it is necessary to use alternate keyboard
input methods.

<div class="note">
A keypad that provides full access to functionality might be considered
a keyboard.
</div>

### [2.1.2 No Keyboard Trap](#no-keyboard-trap) {#problematic-for-closed-no-keyboard-trap}

This criterion applies when focus can be moved using a keyboard
interface. In some ICT with closed functionality, tactile input like
numeric keypads or other functional groups of keys may be available, but
there is no mechanism for onscreen focus; for example, the keys are
mapped directly to functions without moving focus between on-screen
controls. In this case, there is no concept of focus, and therefore
keyboard traps cannot exist and this success criterion would be
satisfied.

### [2.1.4 Character Key Shortcuts](#character-key-shortcuts) {#problematic-for-closed-character-key-shortcuts}

ICT with closed functionality might lack a mechanism for keyboard
shortcuts because their mode of operation revolves around a single key
performing a single function. For such systems, this success criterion
is satisfied.

### [2.4.1 Bypass Blocks](#bypass-blocks) {#problematic-for-closed-bypass-blocks}

The WCAG2ICT interpretation of this success criterion replaces \"sets of
Web pages\" with \"sets of software programs\" which are extremely
rare - especially for non-web software on ICT with closed functionality.
However, being able to bypass blocks of content that are repeated within
software is generally considered best practice.

### [2.4.4 Link Purpose (In Context)](#link-purpose-in-context) {#problematic-for-closed-link-purpose-in-context}

This success criterion relies upon text and context being made available
in a programmatically determinable form.

### [2.4.5 Multiple Ways](#multiple-ways) {#problematic-for-closed-multiple-ways}

The WCAG2ICT interpretation of this success criterion replaces \"set of
Web pages\" with \"set of software programs\". Such sets, particularly
in the context of non-web software on ICT with closed functionality, are
exceedingly rare. There are a number of notes in the section [Applying
SC 2.4.5 Multiple Ways to non-web documents and non-web
software](#applying-sc-2-4-5-multiple-ways-to-non-web-documents-and-non-web-software)
that are applicable to non-web software on ICT with closed
functionality.

### [2.4.7 Focus Visible](#focus-visible) {#problematic-for-closed-focus-visible}

Presumes that there is a mode of operation where focus can be moved and
controlled by keyboard. Some ICT with closed functionality may offer
tactilely discernible input such as a numeric keypad or other functional
groups of keys, but do not offer any mechanism for conveying focus
because the user interface is designed not to need that. For example,
the keys are used to select options from a spoken menu rather than to
move an onscreen focus element between multiple options. In this case,
there is no concept of focus, thus there is no need for a visible
indicator and this success criterion would be satisfied.

### [2.4.13 Focus Appearance](#focus-appearance) {#problematic-for-closed-focus-appearance}

Presumes that there is a mode of operation where focus can be moved and
controlled by keyboard. Some ICT with closed functionality may offer
tactilely discernible input such as a numeric keypad or other functional
groups of keys, but do not offer any mechanism for conveying focus
because the user interface is designed not to need that. For example,
the keys are used to select options from a spoken menu rather than to
move an onscreen focus element between multiple options. In this case,
there is no concept of focus, thus there is no need for a visible
indicator and this success criterion would be satisfied.

### [2.5.2 Pointer Cancellation](#pointer-cancellation) {#problematic-for-closed-pointer-cancellation}

As noted in the section [Applying SC 2.5.2 Pointer Cancellation to
non-web documents and non-web
software](#applying-sc-2-5-2-pointer-cancellation-to-non-web-documents-and-non-web-software),
examples of 'essential' functionality are features for meeting
environmental energy usage requirements (like waking a device from
sleep, power saver mode, and low power state).

### [2.5.3 Label in Name](#label-in-name) {#problematic-for-closed-label-in-name}

Requires information in a programmatically determinable form;
specifically, the programmatic name contains the text of the visual
label.

### [2.5.5 Target Size (Enhanced)](#target-size-enhanced) {#problematic-for-closed-target-size-enhanced}

This success criterion uses CSS pixels for defining the target size. ICT
with closed functionality may not use CSS pixels as a standard
measurement, but the definition of 'CSS pixel' still applies as
described in [Applying "CSS pixel" to non-web documents and non-web
software](#applying-css-pixel-to-non-web-documents-and-non-web-software).
If the system supports a density-independent pixel measurement, it
should be used in place of CSS pixels.

<div class="note">
If the viewing distance and pixel density of the system are unknown,
approximating the reference pixel as described in Applying "CSS pixel"
to non-web documents and non-web software is not possible.
</div>

<div class="note">
For non-web software designed to run on specific known hardware, a
physical size standard would be more straightforward to apply, as
calculations for a CSS pixel are dependent on the viewing distance or
pixel density of the display.
</div>

### [2.5.8 Target Size (Minimum)](#target-size-minimum) {#problematic-for-closed-target-size-minimum}

This success criterion uses CSS pixels for defining the target size. ICT
with closed functionality may not use CSS pixels as a standard
measurement, but the definition of 'CSS pixel' still applies as
described in [Applying "CSS pixel" to non-web documents and non-web
software](#applying-css-pixel-to-non-web-documents-and-non-web-software).
If the system supports a density-independent pixel measurement, it
should be used in place of CSS pixels.

<div class="note">
If the viewing distance and pixel density of the system are unknown,
approximating the reference pixel as described in Applying "CSS pixel"
to non-web documents and software is not possible.
</div>

<div class="note">
For non-web software designed to run on specific known hardware, a
physical size standard would be more straightforward to apply, as
calculations for a CSS pixel are dependent on the viewing distance or
pixel density of the display.
</div>

### [3.1.1 Language of Page](#language-of-page) {#problematic-for-closed-language-of-page}

Depends upon language information being in a programmatically
determinable form intended to drive correct pronunciation. Where another
mechanism achieves correct pronunciation for ICT with closed
functionality, such as self-voicing, the intent of this success
criterion would be met.

### [3.1.2 Language of Parts](#language-of-parts) {#problematic-for-closed-language-of-parts}

Depends upon language information in a programmatically determinable
form intended to drive correct pronunciation. Where another mechanism
achieves correct pronunciation for ICT with closed functionality, such
as self-voicing, the intent of this success criterion would be met.

### [3.1.3 Unusual Words](#unusual-words) {{#problematic-for-closed-unusual-words}

This success criterion is problematic to apply to ICT with closed
functionality as support may not be available for a
[mechanism](https://www.w3.org/TR/WCAG22/#dfn-mechanism) to provide
definitions of words or phrases. However, if the ICT with closed
functionality has a help function, this can be used as a mechanism for
software that can provide definitions of words or phrases. This would
address the user needs identified in [Intent from Understanding Success
Criterion
3.1.3](https://www.w3.org/WAI/WCAG22/Understanding/unusual-words.html#intent).

### [3.2.3 Consistent Navigation](#consistent-navigation) {#problematic-for-closed-consistent-navigation}

This success criterion is interpreted to only apply to "sets of software
programs" which are very rare. See the third note in the section
[Applying SC 3.2.3 Consistent Navigation to non-web
software](#applying-sc-3-2-3-consistent-navigation-to-non-web-software).

### [3.2.4 Consistent Identification](#consistent-identification) {#problematic-for-closed-consistent-identification}

This success criterion is interpreted to only apply to "sets of software
programs" which are very rare. See the second note in the section
[Applying SC 3.2.4 Consistent Identification to non-web documents and
non-web
software](#applying-sc-3-2-4-consistent-identification-to-non-web-documents-and-non-web-software).

### [3.2.6 Consistent Help](#consistent-help) {#problematic-for-closed-consistent-help}

The WCAG2ICT interpretation of this success criterion replaces \"sets of
Web pages\" with \"sets of software programs\" which are extremely
rare - especially for non-web software on ICT with closed functionality.
However, providing consistent access to help is generally considered
best practice.

### [3.3.1 Error Identification](#error-identification) {#problematic-for-closed-error-identification}

Requires error information to be provided as text, noting that the WCAG
definition of text is that it be \"programmatically determinable\".

### [3.3.8 Accessible Authentication (Minimum)](#accessible-authentication-minimum) {#problematic-for-closed-accessible-authentication-minimum}

There are situations where meeting this success criterion is problematic
for ICT with closed functionality:

- Systems that are designed for shared use (such as in a public library)
  or have closed functionality might block mechanisms typically used to
  assist the user, such as copying authentication information from a
  password manager. Instead, an alternative authentication method might
  be needed, such as an identity card scanner.
- Where standards for banking or security have authentication
  requirements that are regulated or strictly enforced, those
  requirements may be judged to take legal precedence over Success
  Criterion 3.3.8 Accessible Authentication (Minimum).

### [4.1.1 Parsing](#parsing21) {#problematic-for-closed-parsing21}

- When WCAG 2.0 and 2.1 were written, the [Intent of Success Criterion
  4.1.1](https://www.w3.org/TR/2013/NOTE-UNDERSTANDING-WCAG20-20130905/ensure-compat-parses.html#ensure-compat-parses-intent-head)
  was to provide consistency so that different user agents or assistive
  technologies would yield the same result.
- In WCAG 2.2, Success Criterion 4.1.1 Parsing was made obsolete and
  WCAG 2.2 removed it as a requirement, so this success criterion is not
  applicable.

### [4.1.2 Name, Role, Value](#name-role-value) {#problematic-for-closed-name-role-value}

Requires information in a programmatically determinable form.

### [4.1.3 Status Messages](#status-messages) {#problematic-for-closed-status-messages}

Depends upon status messages being programmatically determinable using
role or properties.

<div class="note">
Non-web software on ICT with closed functionality would need equivalent
facilitation to provide access to status messages.
</div>

## Level AAA criteria

Level AAA success criteria should be considered, where possible, for applicable content because they cover user needs that are not met in full with Level A and AA success criteria. However, WCAG 2 [5.2.1 Conformance Level](https://www.w3.org/TR/WCAG22/#cc1) NOTE 2 indicates that it is not recommended that Level AAA conformance be required. This is especially true for ICT with closed functionality, where assistive technology and/or platform support (including [user agents](#dfn-user-agents)) may not be available to satisfy these criteria. The applicability of the following WCAG 2 Level AAA success criteria is considered problematic to apply to ICT with closed functionality:

### [1.2.6 Sign Language (Prerecorded) (Level AAA)](#sign-language-prerecorded) {#problematic-for-closed-sign-language-prerecorded}

Live sign language translation may not currently be logistically
feasible for ICT with closed functionality.

### [1.2.8 Media Alternative (Prerecorded) (Level AAA)](#media-alternative-prerecorded) {#problematic-for-closed-media-alternative-prerecorded}

One of the options available to authors for Success Criterion 1.2.8 is
providing a media alternative that is text which, in the absence of
connected assistive technology, would need to be made available in
different modalities.

### [1.2.9 Audio-only (Live) (Level AAA)](#audio-only-live) {#problematic-for-closed-audio-only-live}

One of the options available to authors for Success Criterion 1.2.9 is
providing a media alternative that is text which, in the absence of
connected assistive technology, would need to be made available in
different modalities.

### [1.4.8 Visual Presentation (Level AAA)](#visual-presentation) {#problematic-for-closed-visual-presentation}

In non-web software on ICT with closed functionality the ability for
users to modify presentation aspects of text is rarely supported and
there may not be the capability to use platform services to make text
size/spacing adjustments. Therefore, some other requirements beyond
WCAG's would be needed for ICT with closed functionality to ensure that
content is readable by persons with low vision. As a result, meeting
Success Criterion 1.4.8 in a closed environment may place a much heavier
burden on the content author.

### [1.4.9 Images of Text (No Exception) (Level AAA)](#images-of-text-no-exception) {#problematic-for-closed-images-of-text-no-exception}

To enable assistive technology to modify displayed text (e.g., adjusting
contrast, increasing font size), machine-readable text is needed, as
opposed to mere images of text. Not all ICT with closed functionality
has the capability to support visual modification of displayed text or
images of text, given there is no interoperability with assistive
technology and/or lack of platform support.

### [2.1.3 Keyboard (No Exception) (Level AAA)](#keyboard-no-exception) {#problematic-for-closed-keyboard-no-exception}

Assumes operation via a keyboard interface which also allows for
alternative input devices. It may not be possible to satisfy this
success criterion when the ICT does not have a built-in keyboard, and it
also does not support an alternative input method (hardware or software)
that provides keyboard-like access to all functionality.

<div class="note">
A keypad that provides full access to functionality might be considered
a keyboard.
</div>

### [2.2.5 Re-authenticating (Level AAA)](#re-authenticating) {#problematic-for-closed-re-authentication}

ICT with closed functionality may offer more limitations on how much
data can be kept between sessions. This is particularly true of systems
that are designed to be used in public environments.

### [2.4.8 Location (Level AAA)](#location) {#problematic-for-closed-location}

The WCAG2ICT interpretation of this success criterion replaces \"sets of
Web pages\" with \"sets of software programs\" which are extremely
rare - especially for non-web software on ICT with closed functionality.
However, allowing the user to know their location in a complex non-web
document or non-web software is generally considered best practice.

### [2.4.9 Link Purpose (Link Only)](#link-purpose-in-context) {#problematic-for-closed-link-purpose-in-context}

This success criterion relies upon text and context being made available
in a programmatically determinable form.

### [2.4.10 Section Headings](#section-headings) {#problematic-for-closed-section-headings}

Requires information in a programmatically determinable form.

### [2.4.12 Focus Not Obscured (Enhanced)](#focus-not-obscured-enhanced) {#problematic-for-closed-focus-not-obscured}

Presumes that there is a mode of operation where focus can be moved and
controlled by keyboard. Some ICT with closed functionality may offer
tactilely discernible input such as a numeric keypad or other functional
groups of keys, but do not offer any mechanism for conveying focus
because the user interface is designed not to need that. For example,
the keys are used to select options from a spoken menu rather than to
move an onscreen focus element between multiple options. In this case,
there is no concept of focus, thus there is no need for a visible
indicator and this success criterion would be satisfied.

### [3.3.5 Help](#help) {#problematic-for-closed-help}

This success criterion is problematic to apply to ICT with closed
functionality as they may not support the provision of context-sensitive
help. However, as noted in \[glossary item context-sensitive help\],
clear labels or other information provided by the system can act as
context-sensitive help.

### [3.3.9 Accessible Authentication (Enhanced)](#accessible-authentication-enhanced) {#problematic-for-closed-accessible-authentication-enhanced}

There are situations where meeting this success criterion is problematic
for ICT with closed functionality. Systems that are designed for shared
use (such as in a public library) or have closed functionality might
block mechanisms typically used to assist the user, such as copying
authentication information from a password manager. Instead, an
alternative authentication method might be needed.
