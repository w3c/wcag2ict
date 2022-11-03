Key Terms
---------

Of the 83 glossary terms used in WCAG 2.2 there are two key glossary terms that need to be interpreted significantly differently when applied to non-web ICT. These are: “content” and “user agent”. Further, the glossary term “Web page” in WCAG 2.2 is replaced with newly defined terms “document” and “software”, and both “set of web pages” and “multiple web pages” are replaced with the newly defined terms “set of documents” and “set of software programs”. Finally, as part of addressing the fact that non-Web software doesn't leverage the WCAG 2.2 notion of a user agent, we introduce the new term “accessibility services of platform software”. The remaining 79 glossary terms from WCAG 2.2 are addressed in [Chapter 7 Comments on Definitions in WCAG 2.2 Glossary in Appendix A](http://w3c.github.io/wcag2ict/#comments-on-definitions-in-wcag-2-0-glossary-in-appendix-a). Terms defined and used in WCAG2ICT are applicable only to the interpretation of the guidance in this document. The particular definitions should not be interpreted as having applicability to situations beyond the scope of WCAG2ICT. Further information on usage of these terms follows.

### Accessibility Services of Platform Software

The term **accessibility services of platform software**, as used in WCAG2ICT, has the meaning below:

accessibility services of platform software (as used in WCAG2ICT)

services provided by an operating system, user agent, or other platform software that enable non-web documents or software to expose information about the user interface and events to assistive technologies and accessibility features of software

These services are commonly provided in the form of accessibility APIs (application programming interfaces), and they provide two-way communication with assistive technologies, including exposing information about objects and events.

### Content (on and off the Web)

WCAG 2.2 defines CONTENT as:

For non-web content it is necessary to view this a bit more broadly. Within WCAG2ICT, the term “content” is used as follows:

content (non-web content) (as used in WCAG2ICT)

information and sensory experience to be communicated to the user by means of [software](http://w3c.github.io/wcag2ict/#wcag2ict-def_software "WCAG2ICT Definition: software"), including code or markup that defines the content's [structure](http://w3c.github.io/wcag2ict/#wcag2ict-def_structure "WCAG2ICT Definition: structure"), [presentation](http://www.w3.org/TR/WCAG22/#dfn-presentation "WCAG Definition: presentation"), and interactions

non-web content occurs in two places; documents and software. When content occurs in a document, a user agent is needed in order to communicate the content's information and sensory experience to the user. When content occurs in software, a separate user agent isn't required—the software itself performs that function.

Within WCAG2ICT wherever “content” or “web content” appears in a success criterion or Intent it should be replaced with “content” using the definition above.

### Document

The term **document**, as used in WCAG2ICT, has the meaning below:

document (as used in WCAG2ICT)

assembly of [content](http://w3c.github.io/wcag2ict/#wcag2ict-def_content "WCAG2ICT Definition: content"), such as a file, set of files, or streamed media that functions as a single item rather than a collection, that is not part of software and that does not include its own user agent

A document always requires a user agent to present its [content](http://w3c.github.io/wcag2ict/#wcag2ict-def_content "WCAG2ICT Definition: content") to the user.

Letters, spreadsheets, emails, books, pictures, presentations, and movies are examples of documents.

Software configuration and storage files such as databases and virus definitions, as well as computer instruction files such as source code, batch/script files, and firmware, are examples of files that function as part of [software](http://w3c.github.io/wcag2ict/#wcag2ict-def_software "WCAG2ICT Definition: software") and thus are not examples of documents. If and where software retrieves “information and sensory experience to be communicated to the user” from such files, it is just another part of the [content](http://w3c.github.io/wcag2ict/#wcag2ict-def_content "WCAG2ICT Definition: content") that occurs in software and is covered by WCAG2ICT like any other parts of the software. Where such files contain one or more embedded documents, the embedded documents remain documents under this definition.

A collection of files zipped together into an archive, stored within a single virtual hard drive file, or stored in a single encrypted file system file, do not constitute a single document when so collected together. The software that archives/encrypts those files or manages the contents of the virtual hard drive does not function as a user agent for the individually collected files in that collection because that software is not providing a non-fully functioning presentation of that content.

Anything that can present its own [content](http://w3c.github.io/wcag2ict/#wcag2ict-def_content "WCAG2ICT Definition: content") without involving a user agent, such as a self playing book, is not a document but is [software](http://w3c.github.io/wcag2ict/#wcag2ict-def_software "WCAG2ICT Definition: software").

A single document may be composed of multiple files such as the video content, closed caption text, etc. This fact is not usually apparent to the end-user consuming the document / [content](http://w3c.github.io/wcag2ict/#wcag2ict-def_content "WCAG2ICT Definition: content"). This is similar to how a single web page can be composed of content from multiple URIs (e.g. the page text, images, the JavaScript, a CSS file etc.).

**Example:** An assembly of files that represented the video, audio, captions and timing files for a movie would be a document.

**Counterexample:** A binder file used to bind together the various exhibits for a legal case would not be a document.

### Set of Documents

The term **set of documents**, as used in WCAG2ICT has the meaning below:

set of documents (non-web) (as used in WCAG2ICT)

group of [documents](http://w3c.github.io/wcag2ict/#wcag2ict-def_document "WCAG2ICT Definition: documents") that are published together, and where the items all refer to each other by name or link

Republishing or bundling previously published documents as a collection does not constitute a set of documents.

If a set is broken apart, the individual parts are no longer part of a set, and would be evaluated as any other individual document is evaluated.

One example of a set of documents would be a three-part report where each part is a separate file. At the beginning of each file the table of contents for “navigating” to the other parts is repeated.

### Set of Software Programs

The term **set of software programs**, as used in WCAG2ICT has the meaning below:

set of software programs (as used in WCAG2ICT)

group of [software](http://w3c.github.io/wcag2ict/#wcag2ict-def_software "WCAG2ICT Definition: software") programs that are distributed together and that can be launched and used independently from each other, but that are interlinked each with every other one such that users can navigate from one program to another via a consistent method that appears in each member of the set

This definition of “set of software programs” is derived from the characteristics of a “set” of web pages, and is used for mapping WCAG success criteria to software. Although such sets occur frequently for web pages, such sets appear to be extremely rare for software.

Redistributing or bundling previously distributed software as a collection does not constitute a set of software programs.

Consistent does not mean identical. For example, if a list of choices is provided it might not include the name of the current program.

If a member of the set is separated from the set, it is no longer part of a set, and would be evaluated as any other individual software program.

Any software program that is not part of a set, per this definition, would automatically satisfy any success criterion that is specified to apply to “sets of” software (as is true for any success criterion that is scoped to only apply to some other type of content).

If there is any ambiguity whether the group is a set, then the group is not a set.

: If there is no independent method to launch the software programs (as is common in closed products), those programs would not meet the definition of a "set of software programs".

Although the term “software” is used throughout this document because this would apply to stand alone software programs as well as individual software components and the software components in software-hardware combinations, the concept of “set of software programs” would only apply (by definition) to programs that can be launched separately from each other. Therefore, for the provisions that use the phrase “set of” (success criteria 2.4.1, 2.4.5, 3.2.3, and 3.2.4), the phrase “set of software programs” is used.

**Example:** One example of a set of software programs would be a group of programs that can be launched and used separately but are distributed together and all have a menu that allows users to launch, or switch to, each of the other programs in the group.

**Counterexamples:** Examples of things that are **not** sets of software programs:

*   A suite of programs for authoring different types of documents (text, spreadsheets, presentations, etc.) where the programs don't provide an explicit, consistent means to launch, or switch to, each of the other programs in the group.
*   An office package consisting of multiple programs that launches as a single program that provides multiple functionalities such as writing, spreadsheet, etc., but the only way to navigate between programs is to open a document in one of the programs.
*   A bundle of software programs that is sold together but the only way to navigate between the programs in the bundle is to use a platform software level menu to navigate between them (and not via a menu provided by each program that allows you to navigate to just the other programs in this bundle).
*   A group of programs that was a set, but the programs have been moved to separate locations so that their “set” behaviors were disrupted and no longer work. Even though they _were_ a set at one time, because they are no longer installed as a set they no longer _are_ a set and would not need to meet any success criteria that apply to sets of software.

### Software

The term **software** as used in WCAG2ICT, has the meaning below:

software (as used in WCAG2ICT)

software products or software aspects of hardware-software products that have a user interface and do not require a separate user agent to present any of its content

For software, the user interface and any other embedded [content](http://w3c.github.io/wcag2ict/#wcag2ict-def_content "WCAG2ICT Definition: content") is covered by these guidelines. The software provides a function equivalent to a user agent for the embedded content.

Software without a user interface does not have content and is not covered by these guidelines. For example, driver software with no user interface would not be covered.

Because software with a user interface provides a function equivalent to a user agent in addition to [content](http://w3c.github.io/wcag2ict/#wcag2ict-def_content "WCAG2ICT Definition: content"), the application of some WCAG 2.2 success criteria would be different for content embedded in software versus content in a document, where it is viewed through a separate user agent (e.g. browser, player, viewer, etc.).

### User Agent

WCAG 2.2 defines user agent as follows:

> user agent
> 
> any software that retrieves and presents Web content for users
> 
> Example: Web browsers, media players, plug-ins, and other programs—including [assistive technologies](http://www.w3.org/TR/WCAG22/#dfn-assistive-technologies)—that help in retrieving, rendering, and interacting with Web content.

For non-web ICT, “user agent” needs to be viewed differently. In WCAG 2.2, the term “user agent” only refers to retrieval and display of web content. For non-web ICT, the term “user agent” refers to retrieval and display of separate content that is _not on the Web_, which WCAG2ICT refers to as a “document”. Within WCAG2ICT, the term “user agent” is used as follows:

user agent (as used in WCAG2ICT)

any [software](http://w3c.github.io/wcag2ict/#wcag2ict-def_software "WCAG2ICT Definition: software") that retrieves and presents documents for users

Software that only displays the [content](http://w3c.github.io/wcag2ict/#wcag2ict-def_content "WCAG2ICT Definition: content") contained within it is not considered to be a user agent. It is just considered to be software.

An example of software that is not a user agent is a calculator application that doesn't retrieve the calculations from outside the software to present it to a user. In this case, the calculator software is not a user agent, it is simply software with a user interface.

Software that only shows a preview of [content](http://w3c.github.io/wcag2ict/#wcag2ict-def_content "WCAG2ICT Definition: content") such as a thumbnail or other non-fully functioning presentation is not providing user agent functionality.