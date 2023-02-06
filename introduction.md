## Introduction

### Background

The previously published version of the W3C [Working Group Note](http://www.w3.org/2005/10/Process-20051014/tr#WGNote) was approved in September 2013. It was titled, [Guidance on Applying WCAG 2.0 to Non-Web Information and Communications Technologies (WCAG2ICT)](https://www.w3.org/TR/2013/NOTE-wcag2ict-20130905/), and describes how WCAG 2.0 can be applied to ICT, specifically to non-web documents and software. WCAG2ICT is organized by sections to mirror those found in WCAG: Perceivable, Operable, Understandable, and Robust.  WCAG2ICT clarifies when and how WCAG success criteria should be applied to non-web documents and software.  Some success criteria are applicable without modification and some are applicable with edits and/or notes.  Glossary terms were also reviewed for applicability as written.  Level AAA Success Criteria were not addressed in the 2013 WCAG2ICT Working Group Note.

WCAG2ICT has been relied upon in regulations and legislation.  One example is EN 301 549[^1] (Europe) and other standards that reference or incorporate EN 301 549 (e.g. India, Kenya, Australia).  Another example is Section 508 (U.S.) [Application of WCAG 2.0 to Non-Web ICT](https://www.federalregister.gov/documents/2017/01/18/2017-00395/information-and-communication-technology-ict-standards-and-guidelines#h-36), which looked to WCAG2ICT for detailed direction with providing specific guidance and exceptions to particular criteria from being applied to non-web technology.  Section 508 incorporated by reference (IBR) WCAG as the [Accessibility Standard applicable to non-web documents](https://www.access-board.gov/ict/#E205.4) and requires [WCAG Conformance for non-web software](https://www.access-board.gov/ict/#E207.2).

[^1]: EN 301 549 [V3.2.1]([https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf) 2.2 Informative references, p. 13 \[i26]. 

### Guidance in this Document

This document provides informative guidance (guidance that is not [normative](https://www.w3.org/TR/WCAG22/#dfn-normative) and that does not set requirements) with regard to the interpretation and application of [Web Content Accessibility Guidelines (WCAG) 2.2](http://www.w3.org/TR/WCAG22/) \[\[WCAG22\]\] to non-web information and communications technologies (ICT). This document is a [Working Group Note](https://www.w3.org/2021/Process-20211102/#WGNote) (in contrast to WCAG 2.1 and WCAG 2.2, which are W3C Recommendations).  Specifically, this document provides informative guidance on applying WCAG 2.2 Level A and AA success criteria to non-web ICT, specifically to non-web documents and software.

This document is intended to help clarify how to use WCAG 2.2 to make non-web documents and software more accessible to people with disabilities. Addressing accessibility involves addressing the needs of people with auditory, cognitive, neurological, physical, speech, and visual disabilities, and the needs of people with accessibility requirements due to the effects of aging. Although this document covers a wide range of issues, it is not able to address all the needs of all people with disabilities. Because WCAG 2.2 was developed for the Web, addressing accessibility for non-web documents and software may involve requirements and considerations beyond those included in this document. Authors and developers are encouraged to seek relevant advice about current best practices to ensure that non-web documents and software are accessible, as much as possible, to people with disabilities.

While WCAG 2.2 was designed to be technology-neutral, it assumes the presence of a “user agent” such as a browser, media player, or assistive technology as a means to access web content. Therefore, the application of WCAG 2.2 to documents and software in non-web contexts required some interpretation in order to determine how the intent of each WCAG 2.2 success criterion could be met in these different contexts of use. Therefore, the bulk of the Task Force's work involved evaluating how each WCAG 2.2 success criterion would apply in the context of non-web ICT, if it were applied to non-web ICT.

The Task Force found that the majority of success criteria from WCAG 2.2 can apply to non-web documents and software with either no or minimal changes. Since many of the Level A and AA success criteria do not include any web related terms, they apply directly as written and as described in the “Intent” sections from the [Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/) \[\[UNDERSTANDING-WCAG22\]\] resource. Additional notes were provided, as needed, to provide assistance in applying them to non-web documents and software.

When certain Web-specific terms or phrases like “web page(s)” were used in success criteria, those were replaced with non-web terms or phrases like “non-web document(s) and software”. Additional notes were also provided to explain the terminology replacements.

A small number of success criteria are written to apply to “a set of web pages” or “multiple web pages” and require all pages in the set to share some characteristic or behavior. Since the unit of conformance in WCAG 2.2 is a single web page, the task force agreed that the equivalent unit of conformance for non-web documents is a single document. It follows that an equivalent unit of evaluation for a “set of web pages” would be a ”set of documents”. Since it isn't possible to unambiguously carve up non-web software into discrete pieces, a single “web page” was equated to a “software program” and a “set of web pages” was equated to a “set of software programs.  Both of these new terms are defined in the Key Terms section of this document. See “[set of documents](http://w3c.github.io/wcag2ict/#wcag2ict-def_set-of-documents)” and “[set of software programs](http://w3c.github.io/wcag2ict/#wcag2ict-def_set-of-software-programs)” to determine when a group of documents or pieces of software are considered a set. 
<div class="note">Sets of software that meet this definition appear to be extremely rare.</div>

The glossary terms were also reviewed and most of them applied to non-Web documents and software, as written. Some applied with additional notes or edits (largely related to phrases like “Web page(s)”), and a small number of terms were only used in Level AAA success criteria which are not addressed by the WCAG2ICT Note at this time.

### Excluded from Scope

The following are out of scope for this document:

*   This document does not seek to determine which WCAG 2.2 provisions (principles, guidelines, or success criteria) should or should not apply to non-web documents and software, but rather how they would apply, if applied.
*   This document does not propose changes to WCAG 2.2 or its supporting documents; it does not include interpretations for implementing WCAG 2.2 in web technologies. During the development of this document, the WCAG2ICT Task Force did seek clarification on the intent of a number of the success criteria, which led to clarifications in the Understanding WCAG 2.2 document.
*   This document is not sufficient by itself to ensure accessibility in non-web documents and software. As a web standard, WCAG does not fully cover all accessibility requirements for non-user interface aspects of platforms, user-interface components as individual items, nor closed product software (where there is no Assistive Technology to communicate programmatic information). 
*   This document does not provide supporting techniques for implementing WCAG 2.2 in non-web documents and software.
*   This document is purely an informative Note about non-web ICT, not a standard, so it does not describe how non-web ICT should conform to it.

### Document Overview

This document includes text quoted from the WCAG 2.2 principles, guidelines, and success criteria, without any changes. It also includes excerpted text from the “Intent” sections of the WCAG 2.2 supporting document [Understanding WCAG 2.2 (Public Review Draft)](http://www.w3.org/WAI/WCAG22/Understanding/) \[\[UNDERSTANDING-WCAG22\]\]. The guidance provided by this document for each success criterion is preceded by a heading beginning with “Additional Guidance…”. This guidance was created by the WCAG2ICT Task Force, then reviewed and approved by the AG Working Group.

Additional supporting documents for WCAG 2.2, such as the [WCAG 2 Overview](http://www.w3.org/WAI/intro/wcag.php), [Techniques for WCAG 2.2](http://www.w3.org/WAI/WCAG22/Techniques/) \[\[WCAG22-TECHS\]\], and [How to Meet WCAG (Quick Reference)](http://www.w3.org/WAI/WCAG21/quickref/), remain available for web content, but have not been changed to apply to non-web documents and software.

### Document Conventions
<div style="ednote">The visual styling and programmatic structure details for calling out content in this section will be updated once the details have been worked out.</div>

The following stylistic conventions are used in this document:

*   Quotes from WCAG 2.2 and Understanding WCAG 2.2 are in `<blockquote>` elements and visually styled as pale yellow inset boxes in slightly smaller text. They are prefaced by a reference to the original source such as “From {reference title} in {document}”.
*   Additional guidance provided by this document begins with the phrase “Additional guidance” and is visually styled in pale blue boxes labeled by a heading having a dark blue background.
*   Quotes from WCAG 2.2 begin with “From” and the success criterion number and name, and are presented as modified by the advice in this document with the modifications in `<ins>` elements visually styled as bold red text with dotted underlines.
*   Notes are slightly inset and begin with the phrase “NOTE”. If there are multiple notes for a specific item, each is in its own inset box styled in pale green with a darker green line on the left side of the box.
*   References to glossary items from WCAG 2.2 are presented in `<cite>` elements visually styled as ordinary text with a dotted underline, and contain title attributes noting these are WCAG definitions. They turn blue with a yellow background when mouse or keyboard focus is placed over them.
*   References to glossary items in this document are presented in `<cite>` elements visually styled as ordinary text with a dashed underline, and contain title attributes noting these are Task Force definitions. They turn green with a yellow background when mouse or keyboard focus is placed over them. Note that some terms defined in WCAG 2.2 are redefined in WCAG2ICT and links are updated accordingly (except in direct quotes).
*   Hereafter, the short title “WCAG2ICT” is used to reference this document.

### Comparison with the 2013 WCAG2ICT Note

<p class="ednote">This section is to be developed by the WCAG2ICT Task Force.</p>
