Key Terms
---------

<p class="ednote">This section will be updated by the WCAG2ICT Task Force to include definitions that were added or changed since the 2013 WCAG2ICT Note.</p>

There are two key glossary terms from WCAG 2.2 that need to be interpreted significantly differently when applied to non-web ICT. These are: “content” and “user agent”. In addition, the glossary term “Web page” in WCAG 2.2 is replaced with newly defined terms “document” and “software”, and both “set of web pages” and “multiple web pages” are replaced with the newly defined terms “set of documents” and “set of software programs”. Finally, since non-Web software doesn't leverage the WCAG 2.2 notion of a user agent, we introduced the new term “accessibility services of platform software”. The remaining glossary terms from WCAG 2.2 are addressed in [Chapter 7 Comments on WCAG 2.2 Glossary Definitions](http://w3c.github.io/wcag2ict/#comments-on-wcag-2-2-definitions). Terms defined and used in WCAG2ICT are applicable only to the interpretation of the guidance in this document. The particular definitions should not be interpreted as having applicability to situations beyond the scope of WCAG2ICT. Further information on usage of these terms follows.

### Accessibility Services of Platform Software

The term **accessibility services of platform software**, as used in WCAG2ICT, has the meaning below:

<DL><DT>accessibility services of platform software (as used in WCAG2ICT)</DT><DD>

services provided by an operating system, [user agent](#user-agent), or other platform software that enable non-web [documents](#document) or [software](#software) to expose information about the user interface and events to assistive technologies and accessibility features of software
</DD></DL>
<div class="note">These services are commonly provided in the form of accessibility APIs (application programming interfaces), and they provide two-way communication with assistive technologies, including exposing information about objects and events.</div>

### Content (on and off the Web)

WCAG 2.2 defines "**content**" as:
>information and sensory experience to be communicated to the user by means of a [user agent](https://www.w3.org/TR/WCAG22/#dfn-user-agents), including code or markup that defines the content's [structure](https://www.w3.org/TR/WCAG22/#dfn-structure), [presentation](https://www.w3.org/TR/WCAG22/#dfn-presentation), and interactions

For non-web content it is necessary to view this a bit more broadly. Within WCAG2ICT, the term “content” is used as follows:

<DL><DT>content (non-web content) (as used in WCAG2ICT)</DT><DD>

information and sensory experience to be communicated to the user by means of <INS>[software](#software)</INS>, including code or markup that defines the content's [structure](#dfn-structure), [presentation](https://www.w3.org/TR/WCAG22/#dfn-presentation), and interactions
</DD></DL>
<div class="note">

Non-web content occurs in two places; documents and software. When content occurs in a document, a user agent is needed in order to communicate the content's information and sensory experience to the user. When content occurs in software, a separate user agent isn't required—the software itself performs that function.</div>

Within WCAG2ICT wherever “content” or “web content” appears in a success criterion or Intent it should be replaced with “content” using the definition above.

### Document

The term **document**, as used in WCAG2ICT, has the meaning below:

<DL><DT>document (as used in WCAG2ICT)</DT><DD>

assembly of [content](#content-on-and-off-the-web), such as a file, set of files, or streamed media that functions as a single item rather than a collection, that is not part of software and that does not include its own user agent
</DD></DL>
<div class="note">

A document always requires a user agent to present its content to the user.</div>
<div class="note">

Letters, spreadsheets, emails, books, pictures, presentations, and movies are examples of documents.</div>
<div class="note">

Software configuration and storage files such as databases and virus definitions, as well as computer instruction files such as source code, batch/script files, and firmware, are examples of files that function as part of [software](#software) and thus are not examples of documents. If and where software retrieves “information and sensory experience to be communicated to the user” from such files, it is just another part of the content that occurs in software and is covered by WCAG2ICT like any other parts of the software. Where such files contain one or more embedded documents, the embedded documents remain documents under this definition.</div>
<div class="note">

A collection of files zipped together into an archive, stored within a single virtual hard drive file, or stored in a single encrypted file system file, do not constitute a single document when so collected together. The software that archives/encrypts those files or manages the contents of the virtual hard drive does not function as a user agent for the individually collected files in that collection because that software is not providing a non-fully functioning presentation of that content.</div>
<div class="note">

Anything that can present its own content without involving a user agent, such as a self playing book, is not a document but is software.</div>
<div class="note">

A single document may be composed of multiple files such as the video content, closed caption text, etc. This fact is not usually apparent to the end-user consuming the document / content. This is similar to how a single web page can be composed of content from multiple URIs (e.g. the page text, images, the JavaScript, a CSS file etc.).</div>

<div class="example">

**Example:** An assembly of files that represented the video, audio, captions and timing files for a movie would be a document.

**Counterexample:** A binder file used to bind together the various exhibits for a legal case would not be a document.</div>

### Set of Documents

The term **set of documents**, as used in WCAG2ICT, has the meaning below:

<DL><DT>set of documents (non-web) (as used in WCAG2ICT)</DT><DD>

group of [documents](#document) that are published together, and where the items all refer to each other by name or link
</DD></DL>
<div class="note">

Republishing or bundling previously published documents as a collection does not constitute a set of documents.</div>
<div class="note">

If a set is broken apart, the individual parts are no longer part of a set, and would be evaluated as any other individual document is evaluated.</div>

<div class="example">

**Example:** One example of a set of documents would be a three-part report where each part is a separate file. At the beginning of each file the table of contents for “navigating” to the other parts is repeated.</div>

### Set of Software Programs

The term **set of software programs**, as used in WCAG2ICT, has the meaning below:

<DL><DT>set of software programs (as used in WCAG2ICT)</DT><DD>

group of [software](#software) programs that are distributed together and that can be launched and used independently from each other, but that are interlinked each with every other one such that users can navigate from one program to another via a consistent method that appears in each member of the set
</DD></DL>
<div class="note">

This definition of “set of software programs” is derived from the characteristics of a “set” of web pages, and is used for mapping WCAG success criteria to software. Although such sets occur frequently for web pages, such sets appear to be extremely rare for software.</div>
<div class="note">

Redistributing or bundling previously distributed software as a collection does not constitute a set of software programs.</div>
<div class="note">

Consistent does not mean identical. For example, if a list of choices is provided it might not include the name of the current program.</div>
<div class="note">

If a member of the set is separated from the set, it is no longer part of a set, and would be evaluated as any other individual software program.</div>
<div class="note">

Any software program that is not part of a set, per this definition, would automatically satisfy any success criterion that is specified to apply to “sets of” software (as is true for any success criterion that is scoped to only apply to some other type of content).</div>
<div class="note">

If there is any ambiguity whether the group is a set, then the group is not a set.</div>
<div class="note">

If there is no independent method to launch the software programs (as is common in closed products), those programs would not meet the definition of a "set of software programs".</div>
<div class="note">

Although the term “software” is used throughout this document because this would apply to stand alone software programs as well as individual software components and the software components in software-hardware combinations, the concept of “set of software programs” would only apply (by definition) to programs that can be launched separately from each other. Therefore, for the provisions that use the phrase “set of” (success criteria 2.4.1, 2.4.5, 3.2.3, and 3.2.4), the phrase “set of software programs” is used.</div>
<div class="example">

**Example:** One example of a set of software programs would be a group of programs that can be launched and used separately but are distributed together and all have a menu that allows users to launch, or switch to, each of the other programs in the group.

**Counterexamples:** Examples of things that are **not** sets of software programs:

* A suite of programs for authoring different types of documents (text, spreadsheets, presentations, etc.) where the programs don't provide an explicit, consistent means to launch, or switch to, each of the other programs in the group.
* An office package consisting of multiple programs that launches as a single program that provides multiple functionalities such as writing, spreadsheet, etc., but the only way to navigate between programs is to open a document in one of the programs.
* A bundle of software programs that is sold together but the only way to navigate between the programs in the bundle is to use a platform software level menu to navigate between them (and not via a menu provided by each program that allows you to navigate to just the other programs in this bundle).
* A group of programs that was a set, but the programs have been moved to separate locations so that their “set” behaviors were disrupted and no longer work. Even though they _were_ a set at one time, because they are no longer installed as a set they no longer _are_ a set and would not need to meet any success criteria that apply to sets of software.</div>

### Software

The term **software** as used in WCAG2ICT, has the meaning below:

<DL><DT>software (as used in WCAG2ICT)</DT><DD>

software products or software aspects of hardware-software products that have a user interface and do not require a separate [user agent](#user-agent) to present any of its [content](#content-on-and-off-the-web)
</DD></DL>
<div class="note">

For software, the user interface and any other embedded content is covered by these guidelines. The software provides a function equivalent to a user agent for the embedded content.</div>
<div class="note">

Software without a user interface does not have content and is not covered by these guidelines. For example, driver software with no user interface would not be covered.</div>
<div class="note">

Because software with a user interface provides a function equivalent to a user agent in addition to content, the application of some WCAG 2.2 success criteria would be different for content embedded in software versus content in a document, where it is viewed through a separate user agent (e.g. browser, player, viewer, etc.).</div>

### User Agent

WCAG 2.2 defines user agent as follows:

><DL><DT>user agent</DT><DD>
> 
> any software that retrieves and presents Web content for users
> 
</DD></DL>
<div class="example">

>Example: Web browsers, media players, plug-ins, and other programs—including [assistive technologies](#dfn-assistive-technologies)—that help in retrieving, rendering, and interacting with Web content.</div>
For non-web ICT, “user agent” needs to be viewed differently. In WCAG 2.2, the term “user agent” only refers to retrieval and display of web content. For non-web ICT, the term “user agent” refers to retrieval and display of separate content that is _not on the Web_, which WCAG2ICT refers to as a “document”. Within WCAG2ICT, the term “user agent” is used as follows:

<DL><DT>user agent (as used in WCAG2ICT)</DT><DD>

any [software](#software) that retrieves and presents documents for users
</DD></DL>
<div class="note">

Software that only displays the [content](#content-on-and-off-the-web) contained within it is not considered to be a user agent. It is just considered to be software.</div>
<div class="note">

An example of software that is not a user agent is a calculator application that doesn't retrieve the calculations from outside the software to present it to a user. In this case, the calculator software is not a user agent, it is simply software with a user interface.</div>
<div class="note">

Software that only shows a preview of content such as a thumbnail or other non-fully functioning presentation is not providing user agent functionality.</div>
