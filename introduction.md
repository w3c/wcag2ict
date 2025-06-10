## Introduction

### Background
This document is an update to a W3C [Working Group Note](https://www.w3.org/2005/10/Process-20051014/tr#WGNote) to incorporate new guidelines, success criteria, and definitions added in WCAG 2.1 and 2.2. 

[Guidance on Applying WCAG 2.0 to Non-Web Information and Communications Technologies (WCAG2ICT)](https://www.w3.org/TR/2013/NOTE-wcag2ict-20130905/), approved in September 2013, described how WCAG 2.0 could be applied to non-web documents and software. WCAG2ICT was organized to mirror WCAG's sections: Perceivable, Operable, Understandable, and Robust.  WCAG2ICT clarified when and how WCAG success criteria could be applied to non-web documents and software.  Some were applicable without modification and some were applicable with edits and/or notes.  Glossary terms were also reviewed. Level AAA success criteria were not addressed in the 2013 WCAG2ICT Working Group Note. 

The 2013 WCAG2ICT has been relied upon in regulations and legislation.  One example is \[\[etsi-en-301-549\]\] (Europe) and other standards that reference or incorporate EN 301 549 (e.g., India, Kenya, Australia).  Another example is Section 508 (U.S.) [Application of WCAG 2.0 to Non-Web ICT](https://www.federalregister.gov/documents/2017/01/18/2017-00395/information-and-communication-technology-ict-standards-and-guidelines#h-36), which looked to WCAG2ICT for detailed direction with providing specific guidance and exceptions to particular criteria from being applied to non-web technology.  Section 508 incorporated by reference WCAG as the [Accessibility Standard applicable to non-web documents](https://www.access-board.gov/ict/#E205.4) and requires [WCAG Conformance for non-web software](https://www.access-board.gov/ict/#E207.2).


### Guidance in this Document

This document provides informative guidance (guidance that is not [normative](https://www.w3.org/TR/WCAG22/#dfn-normative) and that does not set requirements) with regard to the interpretation and application of Web Content Accessibility Guidelines (WCAG) to non-web information and communications technologies (ICT). This document is a [Working Group Note](https://www.w3.org/2021/Process-20211102/#WGNote) (in contrast to WCAG 2.0, WCAG 2.1, and WCAG 2.2, which are W3C Recommendations).  Specifically, this document provides informative guidance on applying WCAG 2.0, 2.1, and 2.2 Level A and AA success criteria to non-web ICT, specifically to non-web documents and software.  

<div class="note">Hereafter, the use of WCAG 2 means all WCAG 2.x versions &mdash; 2.0, 2.1, and 2.2.</div>

This document is intended to help clarify how to use WCAG 2 to make non-web documents and software more accessible to people with disabilities. Addressing accessibility involves addressing the needs of people with auditory, cognitive, neurological, physical, speech, and visual impairments, as well as accessibility needs of people due to the effects of aging. Although WCAG 2 addresses some user needs for people with cognitive and learning disabilities as well as mental health related disabilities, following the WCAG supplement [Making Content Usable for People with Cognitive and Learning Disabilities](https://www.w3.org/TR/coga-usable/) is recommended for non-web ICT to address the user needs of these groups. Developers are also encouraged to obtain testing input from persons with disabilities using applications and content.

Although this document covers a wide range of issues, it is not able to address all the needs of all people with disabilities. Since WCAG 2 was developed for the Web, addressing accessibility for non-web documents and software may involve requirements and considerations beyond those included in this document. Authors and developers are encouraged to seek relevant advice about current best practices to ensure that non-web documents and software are accessible, as much as possible, to people with disabilities. The following supporting documents contain helpful information to learn about the user needs, intent, and generalized implementation techniques to support a wider range of people with disabilities:

* [WCAG 2 Overview](https://www.w3.org/WAI/standards-guidelines/wcag/)
* [Techniques for WCAG 2.2](https://www.w3.org/WAI/WCAG22/Techniques/) \[\[WCAG22-TECHS\]\]
* [How to Meet WCAG (Quick Reference)](https://www.w3.org/WAI/WCAG22/quickref/)
* [Additional Accessibility Guidelines Working Group - Publications](https://www.w3.org/groups/wg/ag/publications/)
  
While WCAG 2 was designed to be technology-neutral, it assumes the presence of a “user agent” such as a browser, media player, or assistive technology as a means to access web content. As a result, the application of WCAG 2 to documents and software in non-web contexts necessitates some interpretation in order to determine how the intent of each WCAG 2 success criterion could be met in these different contexts of use. Therefore, the bulk of the Task Force's work involved evaluating how each WCAG 2 success criterion would apply in the context of non-web ICT, if it were applied to non-web ICT.

The Task Force found that the majority of success criteria from WCAG 2 can be applied to non-web documents and software with either no or minimal changes. Since many of the Level A and AA success criteria do not include any web-related terms, they apply directly as written and as described in the “Intent” sections from the [Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/) \[\[UNDERSTANDING-WCAG22\]\] resource. Additional notes were provided, as needed, to provide assistance in applying them to non-web documents and software.

#### Interpretation of Web Terminology in a Non-web Context

When certain web-specific terms or phrases like “web page(s)” were used in success criteria, those were replaced with non-web terms or phrases like “non-web document(s) and software”. Additional notes were also provided to explain the terminology replacements.

A small number of success criteria are written to apply to “a set of web pages” or “multiple web pages” and depend upon all pages in the set to share some characteristic or behavior. Since the unit of conformance in WCAG 2 is a single web page, the task force agreed that the equivalent unit of conformance for non-web documents is a single document. It follows that an equivalent unit of evaluation for a “set of web pages” would be a “set of documents”. Since it isn't possible to unambiguously carve up non-web software into discrete pieces, a single “web page” was equated to a “software program” and a “set of web pages” was equated to a “set of software programs”.  Both of these terms are defined in the Key Terms section of this document. See “[set of documents](#set-of-documents)” and “[set of software programs](#set-of-software-programs)” to determine when a group of documents or pieces of software are considered a set. 
<div class="note">Sets of software that meet this definition appear to be extremely rare.</div>

Not all success criteria have been fully adopted in all local regulations and legislation, and may not be applicable to all technologies. WCAG2ICT has been used in some regulations to determine whether or not to apply certain success criteria. For example, some local standards such as Section 508 in the US, and EN 301 549 in Europe, state that WCAG 2.0 Success Criteria 2.4.1 Bypass Blocks, 2.4.5 Multiple Ways, 3.2.3 Consistent Navigation, and 3.2.4 Consistent Identification do not apply to non-web documents and non-web software. In addition, EN 301 549 also states that 2.4.2 Page Titled and 3.1.2 Language of Parts do not apply to non-web software. In contrast, the U.S. Department of Justice regulation Nondiscrimination on the Basis of Disability; Accessibility of Web Information and Services of State and Local Government Entities (89 FR 31320, 24 April 2024) directs implementers to utilize the guidance in this document to determine the applicability and how to apply the requirements to mobile applications. Since this document does not specifically say which criteria can or should apply, those implementing this document (WCAG2ICT) should consider the applicability of individual success criteria to non-web documents and software.

The glossary terms were also reviewed and most of them applied to non-web documents and software, as written. Some applied with additional notes or edits (largely related to phrases like “web page(s)”), and a small number of terms were only used in Level AAA success criteria which are not addressed by the WCAG2ICT Note at this time.

### Excluded from Scope

The following are out of scope for this document:

*   This document does not seek to determine which WCAG 2 provisions (principles, guidelines, or success criteria) should or should not apply to non-web documents and software, but rather how they would apply, if applied.
*   This document does not propose changes to WCAG 2 or its supporting documents; it does not include interpretations for implementing WCAG 2 in web technologies. During the development of this document, the WCAG2ICT Task Force did seek clarification on the intent of a number of the success criteria, which led to clarifications in the Understanding WCAG 2 document.
*   This document is not sufficient by itself to ensure accessibility in non-web documents and software. As a web standard, WCAG does not fully cover all accessibility requirements for non-user interface aspects of platforms, user-interface components as individual items, or software on ICT with closed functionality (where there is no assistive technology to communicate programmatic information).
*   This document does not comment on hardware aspects of products, because the basic constructs on which WCAG 2 is built do not apply to these.
*   This document does not provide supporting techniques for implementing WCAG 2 in non-web documents and software.
*   This document is purely an informative Note about non-web ICT, not a standard, so it does not describe how non-web ICT should conform to it.

### Document Overview

This document includes text quoted from the WCAG 2.2 principles, guidelines, success criteria, and glossary definitions without any changes. The guidance provided by this document for each principle, guideline, success criterion, and definition is preceded by a heading beginning with “Applying…”. This guidance was created by the WCAG2ICT Task Force, then reviewed and approved by the Accessibility Guidelines Working Group.

### Document Conventions

The following stylistic conventions are used in this document:

*   Quotes from WCAG 2 are in `<blockquote>` elements and visually styled with a gray bar on the left, and immediately follow the heading for the principle, guideline, or success criterion.
*   Additional guidance provided by this document begins with the phrase “Applying” and has no special visual styling.
*   Replacement text that is presented to show how an SC would read as modified by the advice in this document are in `<ins>` elements visually styled as bold green text with a dotted underline.
*   Notes are slightly inset and begin with the phrase “NOTE”. Each note is in its own inset box styled in pale green with a darker green line on the left side of the box.
*   References to glossary items from WCAG 2 are presented in `<cite>` elements visually styled as ordinary text with a dotted underline, and contain title attributes noting these are WCAG definitions. They turn blue with a yellow background when mouse or keyboard focus is placed over them.
*   References to glossary items in this document are presented in `<cite>` elements visually styled as ordinary text with a dark gray underline.
*   Hereafter, the short title “WCAG2ICT” is used to reference this document.
*   In headings the term "Success Criterion" has been shortened to “SC” for brevity.

### Comparison with the 2013 WCAG2ICT Note

The following changes and additions have been made to update the 2013 WCAG2ICT document to incorporate the [new features in WCAG 2.1](https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1), the [new features in WCAG 2.2](https://www.w3.org/TR/WCAG22/#new-features-in-wcag-2-2), and the change to 4.1.1 Parsing listed in the [Comparison with WCAG 2.1](https://www.w3.org/TR/WCAG22/#comparison-with-wcag-2-1) section:

* New [Background](#background) section to explain the history and known uses of WCAG2ICT
* New key terms introduced by WCAG2ICT
    * [closed functionality](#closed-functionality)
    * [menu-driven interface](#menu-driven-interface)
    * [platform software](#platform-software)
    * [virtual keyboard](#virtual-keyboard)
* New WCAG 2.1 success criteria and guidelines
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
* New WCAG 2.2 success criteria
    * [Success Criterion 2.4.11 Focus Not Obscured (Minimum)](#focus-not-obscured-minimum)
    * [Success Criterion 2.5.7 Dragging Movements](#dragging-movements)
    * [Success Criterion 2.5.8 Target Size (Minimum)](#target-size-minimum)
    * [Success Criterion 3.2.6 Consistent Help](#consistent-help)
    * [Success Criterion 3.3.7 Redundant Entry](#redundant-entry)
    * [Success Criterion 3.3.8 Accessible Authentication](#accessible-authentication-minimum)
* Obsolete and Removed WCAG 2.2 success criteria that have errata for WCAG 2.0 and 2.1
    * [Success Criterion 4.1.1 Parsing](#parsing22)
* New terms from WCAG 2.1 and 2.2
    * dragging movements, focus indicator, minimum bounding box, pointer input, process, single pointer, state, and status message were added to [Glossary Items that Apply to All Technologies](#glossary-items-that-apply-to-all-technologies)
    * motion animation, perimeter, region, and user inactivity were added to [Glossary Items Used only in AAA Success Criteria](#glossary-items-used-only-in-aaa-success-criteria)
    * added to [Glossary Items with Specific Guidance](#glossary-items-with-specific-guidance): 
        * [cognitive function test](#dfn-cognitive-function-test)
        * [css pixel](#dfn-css-pixels)
        * [down event](#dfn-down-event)
        * [keyboard shortcut](#dfn-keyboard-shortcuts)
        * [style property](#dfn-style-properties)
        * [target](#dfn-targets)
        * [up event](#dfn-up-event)
* Updated terms
    * [large scale](#dfn-large-scale)
    * [set of web pages](#dfn-set-of-web-pages)
    * [set of non-web documents](#set-of-documents)
    * [set of software programs](#set-of-software-programs)
* Updated sections
    <div class=note">In this Note, most of the existing sections have undergone WCAG2ICT Task Force review and updates. Many sections needed only minor editorial and link URL updates, such as the guidance for the WCAG 2.0 success criteria.</div>
