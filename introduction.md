## Introduction

### Background
This document is an update to a W3C [Working Group Note](https://www.w3.org/2005/10/Process-20051014/tr#WGNote) to incorporate new guidelines, success criteria, and definitions added in WCAG 2.1 and 2.2. 

[Guidance on Applying WCAG 2.0 to Non-Web Information and Communications Technologies (WCAG2ICT)](https://www.w3.org/TR/2013/NOTE-wcag2ict-20130905/), approved in September 2013, described how WCAG 2.0 could be applied to non-web documents and software. WCAG2ICT was organized to mirror WCAG's sections: Perceivable, Operable, Understandable, and Robust.  WCAG2ICT clarified when and how WCAG success criteria should be applied to non-web documents and software.  Some were applicable without modification and some were applicable with edits and/or notes.  Glossary terms were also reviewed. Level AAA Success Criteria were not addressed in the 2013 WCAG2ICT Working Group Note. 

The 2013 WCAG2ICT has been relied upon in regulations and legislation.  One example is EN 301 549[^1] (Europe) and other standards that reference or incorporate EN 301 549 (e.g., India, Kenya, Australia).  Another example is Section 508 (U.S.) [Application of WCAG 2.0 to Non-Web ICT](https://www.federalregister.gov/documents/2017/01/18/2017-00395/information-and-communication-technology-ict-standards-and-guidelines#h-36), which looked to WCAG2ICT for detailed direction with providing specific guidance and exceptions to particular criteria from being applied to non-web technology.  Section 508 incorporated by reference WCAG as the [Accessibility Standard applicable to non-web documents](https://www.access-board.gov/ict/#E205.4) and requires [WCAG Conformance for non-web software](https://www.access-board.gov/ict/#E207.2).

[^1]: EN 301 549 [V3.2.1]([https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf) 2.2 Informative references, p. 13 \[i26]. 

### Guidance in this Document

<div class="ednote">This section contains a first pass of updates. It will be re-examined once the Task Force has finished analyzing all of the new WCAG criteria to ensure the summarization of applicability of WCAG criteria to non-web documents and software is accurate.</div>

This document provides informative guidance (guidance that is not [normative](https://www.w3.org/TR/WCAG22/#dfn-normative) and that does not set requirements) with regard to the interpretation and application of [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/) \[\[WCAG22\]\] to non-web information and communications technologies (ICT). This document is a [Working Group Note](https://www.w3.org/2021/Process-20211102/#WGNote) (in contrast to WCAG 2.1 and WCAG 2.2, which are W3C Recommendations).  Specifically, this document provides informative guidance on applying WCAG 2.2 Level A and AA success criteria to non-web ICT, specifically to non-web documents and software.

This document is intended to help clarify how to use WCAG 2.2 to make non-web documents and software more accessible to people with disabilities. Addressing accessibility involves addressing the needs of people with auditory, cognitive, neurological, physical, speech, and visual disabilities, and the needs of people with accessibility requirements due to the effects of aging. Although this document covers a wide range of issues, it is not able to address all the needs of all people with disabilities. Because WCAG 2.2 was developed for the Web, addressing accessibility for non-web documents and software may involve requirements and considerations beyond those included in this document. Authors and developers are encouraged to seek relevant advice about current best practices to ensure that non-web documents and software are accessible, as much as possible, to people with disabilities.

While WCAG 2.2 was designed to be technology-neutral, it assumes the presence of a “user agent” such as a browser, media player, or assistive technology as a means to access web content. Therefore, the application of WCAG 2.2 to documents and software in non-web contexts required some interpretation in order to determine how the intent of each WCAG 2.2 success criterion could be met in these different contexts of use. Therefore, the bulk of the Task Force's work involved evaluating how each WCAG 2.2 success criterion would apply in the context of non-web ICT, if it were applied to non-web ICT.

The Task Force found that the majority of success criteria from WCAG 2.2 can apply to non-web documents and software with either no or minimal changes. Since many of the Level A and AA success criteria do not include any web related terms, they apply directly as written and as described in the “Intent” sections from the [Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/) \[\[UNDERSTANDING-WCAG22\]\] resource. Additional notes were provided, as needed, to provide assistance in applying them to non-web documents and software.

When certain Web-specific terms or phrases like “web page(s)” were used in success criteria, those were replaced with non-web terms or phrases like “non-web document(s) and software”. Additional notes were also provided to explain the terminology replacements.

A small number of success criteria are written to apply to “a set of web pages” or “multiple web pages” and require all pages in the set to share some characteristic or behavior. Since the unit of conformance in WCAG 2.2 is a single web page, the task force agreed that the equivalent unit of conformance for non-web documents is a single document. It follows that an equivalent unit of evaluation for a “set of web pages” would be a ”set of documents”. Since it isn't possible to unambiguously carve up non-web software into discrete pieces, a single “web page” was equated to a “software program” and a “set of web pages” was equated to a “set of software programs.  Both of these new terms are defined in the Key Terms section of this document. See “[set of documents](#set-of-documents)” and “[set of software programs](#set-of-software-programs)” to determine when a group of documents or pieces of software are considered a set. 
<div class="note">Sets of software that meet this definition appear to be extremely rare.</div>

The glossary terms were also reviewed and most of them applied to non-Web documents and software, as written. Some applied with additional notes or edits (largely related to phrases like “Web page(s)”), and a small number of terms were only used in Level AAA success criteria which are not addressed by the WCAG2ICT Note at this time.

### Excluded from Scope

The following are out of scope for this document:

*   This document does not seek to determine which WCAG 2.2 provisions (principles, guidelines, or success criteria) should or should not apply to non-web documents and software, but rather how they would apply, if applied.
*   This document does not propose changes to WCAG 2.2 or its supporting documents; it does not include interpretations for implementing WCAG 2.2 in web technologies. During the development of this document, the WCAG2ICT Task Force did seek clarification on the intent of a number of the success criteria, which led to clarifications in the Understanding WCAG 2.2 document.
*   This document is not sufficient by itself to ensure accessibility in non-web documents and software. As a web standard, WCAG does not fully cover all accessibility requirements for non-user interface aspects of platforms, user-interface components as individual items, nor closed product software (where there is no Assistive Technology to communicate programmatic information).
*   This document does not comment on hardware aspects of products, because the basic constructs on which WCAG 2.2 is built do not apply to these.
*   This document does not provide supporting techniques for implementing WCAG 2.2 in non-web documents and software.
*   This document is purely an informative Note about non-web ICT, not a standard, so it does not describe how non-web ICT should conform to it.

### Document Overview

This document includes text quoted from the WCAG 2.2 principles, guidelines, and success criteria, without any changes. It also includes excerpted text from the “Intent” sections of the WCAG 2.2 supporting document [Understanding WCAG 2.2 (Public Review Draft)](https://www.w3.org/WAI/WCAG22/Understanding/) \[\[UNDERSTANDING-WCAG22\]\]. The guidance provided by this document for each success criterion is preceded by a heading beginning with “Additional Guidance…”. This guidance was created by the WCAG2ICT Task Force, then reviewed and approved by the AG Working Group.

Additional supporting documents for WCAG 2.2, such as the [WCAG 2 Overview](https://www.w3.org/WAI/intro/wcag.php), [Techniques for WCAG 2.2](https://www.w3.org/WAI/WCAG22/Techniques/) \[\[WCAG22-TECHS\]\], and [How to Meet WCAG (Quick Reference)](https://www.w3.org/WAI/WCAG21/quickref/), remain available for web content, but have not been changed to apply to non-web documents and software.

### Document Conventions
<div class="ednote">The visual styling and programmatic structure details for calling out content in this section are current for this draft. This section will be revisited when further style details are worked out.</div>

The following stylistic conventions are used in this document:

*   Quotes from WCAG 2.2 and Understanding WCAG 2.2 are in `<blockquote>` elements and visually styled with a gray bar on the left, and immediately follow the heading for the principle, guideline, or success criterion.
*   Additional guidance provided by this document begins with the phrase “Guidance When Applying” and has no special visual styling.
*   Replacement text that is presented to show how an SC would read as modified by the advice in this document are in `<ins>` elements visually styled as bold green text with a dotted underline.
*   Notes are slightly inset and begin with the phrase “NOTE”. Each note is in its own inset box styled in pale green with a darker green line on the left side of the box.
*   References to glossary items from WCAG 2.2 are presented in `<cite>` elements visually styled as ordinary text with a dotted underline, and contain title attributes noting these are WCAG definitions. They turn blue with a yellow background when mouse or keyboard focus is placed over them.
*   References to glossary items in this document are presented in `<cite>` elements visually styled as ordinary text with a dark gray underline.
*   Hereafter, the short title “WCAG2ICT” is used to reference this document.

### Comparison with the 2013 WCAG2ICT Note

<p class="ednote">The WCAG2CIT Task Force has incorporated all of the new WCAG 2.1 guidelines, criteria and glossary terms. The next draft version will incorporate new WCAG 2.2 criteria and glossary terms.</p>

The following changes and additions have been made to update the 2013 WCAG2ICT document:

* New [Background](#background) section to explain the history and known uses of WCAG2ICT
* New WCAG 2.1 Success Criteria and Guidelines
    * [Success Criterion 1.3.4 Orientation](#orientation)
    * [Success Criterion 1.3.5 Identify Input Purpose](#identify-input-purpose)
    * [Success Criterion 1.4.10 Reflow](#reflow)
    * [Success Criterion 1.4.11 Non-text Contrast](#non-text-contrast)
    * [Success Criterion 1.4.12 Text Spacing](#text-spacing)
    * [Success Criterion 1.4.13 Content on Hover or Focus](#content-on-hover-or-focus)
    * [Success Criterion 2.1.4 Character Key Shortcuts](#character-key-shortcuts)
    * [Guideline 2.5 Input Modalities](#input-modalities)
    * [Success Criterion 2.5.1 Pointer Gestures](#pointer-gestures)
    * [Success Criterion 2.5.2 Pointer Cancellation](#pointer-cancellation)
    * [Success Criterion 2.5.3 Label in Name](#label-in-name)
    * [Success Criterion 2.5.4 Motion Actuation](#motion-actuation)
    * [Success Criterion 4.1.3 Status Messages](#status-messages)
* New WCAG 2.2 Success Criteria
    * [Success Criterion 2.5.8 Target Size (Minimum)](#target-size-minimum)  
* New terms
    * pointer input, process, single pointer, state, status message were added to [Glossary Items that Apply to All Technologies](#glossary-items-that-apply-to-all-technologies)
    * motion animation, region, and user inactivity were added to [Glossary Items Used only in AAA Success Criteria](#glossary-items-used-only-in-aaa-success-criteria)
    * [css pixel](#dfn-css-pixel)
    * [down event](#dfn-down-event)
    * [keyboard shortcut](#dfn-keyboard-shortcut)
    * [style property](#dfn-style-properties)
    * [target](#dfn-target)
    * [up event](#dfn-up-event)
* Updated sections
    <div class="note">In this draft, most sections have undergone WCAG2ICT Task Force review and revisions, except where noted in an editor's note. Many sections required only minor editorial and link URL updates.</div>
