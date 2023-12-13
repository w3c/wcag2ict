Comments on Closed Functionality
--------------------------------

As noted in the Introduction, WCAG 2 assumes the presence of a “user agent” such as a browser, media player, or assistive technology as a means to access web content. Many of the success criteria in WCAG 2 assume web content will be accessed by ICT where assistive technologies can be connected to it or installed on it. The assistive technologies then present the web content to people with disabilities in an accessible form. 

<div class="ednote">Proposal 1: Minor edits</div>
  
ICT with [closed functionality](#closed-functionality) does not allow the use of some assistive technologies for some or all of their functions. In many cases such ICT also lacks a “user agent” or its equivalent. To the extent the ICT is closed, following the WCAG success criteria by themselves will not make the software accessible. Where assistive technologies or user agents are not available to address the intent of these success criteria, something else needs to be provided or be required to facilitate accessibility as WCAG 2 intends. It is outside the [WCAG2ICT Task Force Work Statement](http://www.w3.org/WAI/GL/task-forces/wcag2ict/work-statement) to say what the additional measures are, but WCAG2ICT points out which success criteria depend on assistive technologies—and therefore would not work by themselves in a closed functionality context.

<div class="ednote">Proposal 2: Mitch's proposal with Gregg's edits (from email), and channeling Shadi's intent in his PR. This proposal splits option 1's paragraph into two paragraphs and adds in some examples.</div>

When ICT has [closed functionality](#closed-functionality), the closed portions of the ICT prevent users from attaching, installing, or using one or more kinds of assistive technology. Closed functionality can occur in varying degrees. ICT with integrated hardware and software might be completely closed, such as a payment terminal that provides no user agent for its content nor the opportunity for users to install or attach any kind of assistive technology. An operating system for handheld or wearable devices might be partially closed, restricting the user’s choice of assistive technology software yet allowing the use of alternative keyboards. While an operating system imposes its limitations on all software applications that a user installs on it, an individual software application on an otherwise open platform might implement its own closed functionality.

To the extent the ICT is closed, following the WCAG success criteria by themselves will not make the software accessible. Where assistive technologies or user agents are not available to address the intent of these success criteria, something else needs to be provided or be required to facilitate accessibility as WCAG 2 intends. It is outside the [WCAG2ICT Task Force Work Statement](http://www.w3.org/WAI/GL/task-forces/wcag2ict/work-statement) to say what the additional measures are, but WCAG2ICT points out which success criteria depend on assistive technologies—and therefore would not work by themselves for closed functionality.
<strong>END OF PROPOSAL 2</strong>
<div class="example">
  
In developing guidance for closed functionality, the task force has considered examples of ICT that historically have been partially or fully closed to assistive technologies:

*   self-service transaction machines or kiosks - Examples include machines used for retail self-checkout, point of sales (POS) terminals, ticketing and self check-in, and Automated Teller Machines (ATMs).
*   telephony devices such as IP phones, feature phones, smartphones, and phone-enabled tablets (although such devices are becoming increasingly open and/or supplying AT and accessibility features that software can rely upon to meet WCAG requirements.)
*   entertainment technologies including smart TVs, set-top boxes, smart displays, smart speakers, smart watches, and tablets
*   an ebook reader or standalone ebook software that allows assistive technologies to access all of the user interface controls of the ebook program (open functionality) but does not allow the assistive technologies to access the actual content of book (closed functionality).
*   an operating system that requires the user to provide log in credentials before it allows any assistive technologies to be loaded. The log-in portion would be closed functionality.
*   other technology devices, such as printers, displays, and iOt devices</div>

There are existing standards that provide accessibility requirements for both hardware and software aspects of closed functionality ICT. This document does not comment on those standards, but does note that WCAG success criteria should not be used as requirements for hardware aspects of closed functionality ICT. Instead, WCAG2ICT provides considerations for applying WCAG success criteria to software on closed functionality ICT. It also indicates where and why that might be problematic due to the underlying assumptions built into the WCAG success criteria. See [Appendix A: Success Criteria Problematic for Closed Functionality](#success-criteria-problematic-for-closed-functionality) for a list of success criteria for which this is relevant.
