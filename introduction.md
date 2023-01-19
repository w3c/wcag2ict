## Introduction

### Background

A W3C [Working Group Note](http://www.w3.org/2005/10/Process-20051014/tr#WGNote) on the topic of applying WCAG 2.0 to non-web content was approved in September of 2013.  That Working Group Note, [Guidance on Applying WCAG 2.0 to Non-Web Information and Communications Technologies (WCAG2ICT)](https://www.w3.org/TR/2013/NOTE-wcag2ict-20130905/) describes how WCAG 2.0 can be applied to ICT, specifically to non-web documents and software.  WCAG21CT is organized by sections to mirror those found in WCAG: Perceivable, Operable, Understandable, and Robust.  WCAG2ICT clarifies when and how WCAG success criteria should be applied to non-web documents and software.  Some success criteria are applicable without modification, and some success criteria are applicable with edits and/or as noted.  Glossary terms were also reviewed for applicability as written.  Level AAA Success Criteria were not addressed in the 2013 WCAG2ICT Working Group Note.

WCAG2ICT has been relied upon in regulations and legislation.  One example is EN 301 549[^1] (Europe) and other standards that reference or incorporate EN 301 549 (e.g. India, Kenya, Australia).  Another example is Section 508 (U.S.) [Application of WCAG 2.0 to Non-Web ICT](https://www.federalregister.gov/documents/2017/01/18/2017-00395/information-and-communication-technology-ict-standards-and-guidelines#h-36) which looked to WCAG2ICT for detailed direction with providing specific guidance and exceptions to particular criteria from being applied to non-web technology.  Section 508 provisions incorporates by reference (IBR) WCAG as the [Accessibility Standard applied to non-web documents](https://www.access-board.gov/ict/#E205.4) and requires [WCAG Conformance for non-web software](https://www.access-board.gov/ict/#E207.2).

[^1]: EN 301 549 [V3.2.1]([https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf) 2.2 Informative references, p. 13 \[i26]. 

### Guidance in this Document

This document provides informative guidance (guidance that is not normative, and that does not set requirements) with regard to the interpretation and application of [Web Content Accessibility Guidelines (WCAG) 2.2](http://www.w3.org/TR/WCAG22/) \[\[WCAG22\]\] to non-web information and communications technologies (ICT). This document is an update to the [2013 WCAG2ICT Working Group Note](http://www.w3.org/2005/10/Process-20051014/tr#WGNote) (this is in contrast to WCAG 2.1 and WCAG 2.2, which are W3C Recomendations).  Specifically, this document provides informative guidance on applying WCAG 2.2 success criteria to non-web ICT, specifically to non-web documents and software.

This document is intended to help clarify how to use WCAG 2.2 to make non-web documents and software more accessible to people with disabilities. Addressing accessibility involves addressing the needs of people with auditory, cognitive, neurological, physical, speech, and visual disabilities, and the needs of people with accessibility requirements due to the effects of aging. Although this document covers a wide range of issues, it is not able to address all the needs of all people with disabilities. Because WCAG 2.2 was developed for the Web, addressing accessibility for non-web documents and software may involve requirements and considerations beyond those included in this document. Authors and developers are encouraged to seek relevant advice about current best practices to ensure that non-web documents and software are accessible, as much as possible, to people with disabilities.

While WCAG 2.2 was designed to be technology-neutral, it assumes the presence of a “user agent” such as a browser, media player, or assistive technology as a means to access web content. Therefore, the application of WCAG 2.2 to documents and software in non-web contexts required some interpretation in order to determine how the intent of each WCAG 2.2 success criterion could be met in these different contexts of use. The bulk of the Task Force's work therefore involved evaluating how each WCAG 2.2 success criterion would apply in the context of non-web ICT, if it were applied to non-web ICT.

The Task Force found that the majority of success criteria from WCAG 2.2 can apply to non-web documents and software with no or only minimal changes. Specifically, of the thirty-eight Level A and AA success criteria, twenty-six did not include any web related terms and apply directly as written and as described in the “Intent” sections from the updated [Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/) \[\[UNDERSTANDING-WCAG22\]\]. Thirteen of these twenty-six applied without any additional notes. The other thirteen applied as written but additional notes were also provided for assistance in applying them to either or both non-web documents and software.

Of the remaining twelve success criteria, the Task Force found that eight of them apply as written when replacing certain Web-specific terms or phrases like “web page(s)” with non-web terms or phrases like “non-web document(s) and software” or “for non-web documents and software that use markup languages, in such a way that…” etc. Additional notes were also provided to assist in the application of these.

The remaining four success criteria apply in situations when “a set of web pages”, or “multiple web pages” share some characteristic or behavior. In WCAG 2.2 the “unit of conformance” is the web page. While WCAG2ICT is not a standard, and thus conformance does not apply, it is still useful to look at what a “unit of evaluation” would be for non-web ICT. For non-web documents, WCAG2ICT uses a single document as the “unit of evaluation”, as it is the best analog to a web page. This became the basis for the notion of a “[set of documents](http://w3c.github.io/wcag2ict/#wcag2ict-def_set-of-documents)”, which is used for the remaining four success criteria which in WCAG speak to “sets of web pages”. For non-web software it wasn't possible to unambiguously carve up software into discrete pieces, and so the “unit of evaluation” for non-web software is the software program. This became the basis for the notion of a “[set of software programs](http://w3c.github.io/wcag2ict/#wcag2ict-def_set-of-software-programs)”, which is used for the remaining four success criteria.

The 83 glossary terms were also reviewed. 51 applied to non-Web documents and software as written. Another 28 applied with additional notes or edits (largely related to phrases like “Web page(s)”), and the remaining 4 terms were only used in Level AAA success criteria which are not addressed by this Note.

### Excluded from Scope

The following are out of scope for this document:

*   This document does not seek to determine which WCAG 2.2 provisions (principles, guidelines, or success criteria) should or should not apply to non-web ICT, but rather how they would apply, if applied.
*   This document does not propose changes to WCAG 2.2 itself, nor its supporting documents; and does not include interpretations for implementing WCAG 2.2 in web technologies. During the development of this document, the WCAG2ICT Task Force did seek clarification on the intent of a number of the success criteria, which led to clarifications that are being made to the Understanding WCAG 2.2 document.
*   Because this document deals with applying WCAG, which is a standard for web content accessibility, to ICT it does not deal with such things as closed products and requirements for non-user interface aspects of platforms, nor individual components. As such, this document is not sufficient by itself to ensure accessibility in non-web documents and software.
*   This document does not comment on hardware aspects of products, non-user interface aspects of platforms, or user-interface components as individual items, because the basic constructs on which WCAG 2.2 is built do not apply to these.
*   This document does not provide supporting techniques for implementing WCAG 2.2 in non-web documents and software.
*   As this document is purely an informative Note about non-web ICT, and not a standard, it doesn't describe how non-web ICT should conform to it.

### Document Overview

This document includes excerpted text from WCAG 2.2 principles, guidelines, and success criteria, as quoted from WCAG 2.2 without any changes. It also includes excerpted text from the “Intent” sections of the WCAG 2.2 supporting document [Understanding WCAG 2.2 (Public Review Draft)](http://www.w3.org/WAI/WCAG22/Understanding/) \[\[UNDERSTANDING-WCAG22\]\], as clarified based on input from Task Force discussions and responses to public comments after review and approval by the WCAG Working Group. The guidance provided by this document for each success criteria is preceded by a title beginning “Additional Guidance…”. This guidance was created by the WCAG2ICT Task Force, then reviewed and approved by the WCAG Working Group.

Additional supporting documents for WCAG 2.2, such as the [WCAG 2 Overview](http://www.w3.org/WAI/intro/wcag.php), [Techniques for WCAG 2.2](http://www.w3.org/WAI/WCAG22/Techniques/) \[\[WCAG22-TECHS\]\], and [How to Meet WCAG (Quick Reference)](http://www.w3.org/WAI/WCAG21/quickref/), remain available for web content, but have not been changed to apply to non-web documents and software.

### Document Conventions

The following stylistic conventions are used in this document:

*   Quotes from WCAG 2.2 and Understanding WCAG 2.2 are in `<blockquote>` elements and visually styled as pale yellow inset boxes in slightly smaller text. They are prefaced by a reference to the original source such as “From {reference title} in {document}”.
*   Additional guidance provided by this document begins with the phrase “Additional guidance” and is visually styled in pale blue boxes labeled by a heading having a dark blue background.
*   Quotes from WCAG 2.2 begin with “From” and the success criterion number and name, and are presented as modified by the advice in this document with the modifications in `<ins>` elements visually styled as bold red text with dotted underlines.
*   Notes are slightly inset and begin with the phrase “Note:”. If there are multiple notes for a specific item, they are numbered, e.g., “Note 1:”, etc.
*   References to glossary items from WCAG 2.2 are presented in `<cite>` elements visually styled as ordinary text with a dotted underline, and contain title attributes noting these are WCAG definitions. They turn blue with a yellow background when mouse or keyboard focus is placed over them.
*   References to glossary items in this document are presented in `<cite>` elements visually styled as ordinary text with a dashed underline, and contain title attributes noting these are Task Force definitions. They turn green with a yellow background when mouse or keyboard focus is placed over them. Note that some terms defined in WCAG 2.2 are redefined in WCAG2ICT and links are updated accordingly (except in direct quotes).
*   Hereafter, the short title “WCAG2ICT” is used to reference this document.

### Comparison with the 2013 WCAG2ICT Note

<p class="ednote">This section is to be developed by the WCAG2ICT Task Force.</p>
