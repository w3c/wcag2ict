Comments on Closed Functionality
--------------------------------

As noted in the Introduction, WCAG 2.2 assumes the presence of a “user agent” such as a browser, media player, or assistive technology as a means to access web content. Many of the success criteria in WCAG 2.2 assume web content will be accessed by ICT where assistive technologies can be connected to it or installed on it. The assistive technologies then present the web content to people with disabilities in an accessible form. 

ICT products with [closed functionality](#closed-functionality) do not allow the use of some assistive technologies for all of their functions. In many cases such ICT products also lack a “user agent” or its equivalent. As a result, ICT following the WCAG success criteria by themselves will not make information accessible on ICT with closed functionality. Where assistive technologies or user agents are not available to address the intent of these success criteria, something else needs to be provided or be required to facilitate accessibility as WCAG 2.2 intends. It is outside the [WCAG2ICT Task Force Work Statement](http://www.w3.org/WAI/GL/task-forces/wcag2ict/work-statement) to say what the additional measures are, but this Note points out which success criteria depend on assistive technologies—and therefore would not work by themselves in products with closed functionality.

<div class="example">
From the last draft:  Examples the task force has considered when developing guidance include: printers, watches, iOT devices, telephones (including mobile and IP phones), smart speakers and televisions, set-top boxes (e.g. cable box, DVR), tablets, VR headsets, self-service transaction machines and kiosks used for a variety of purposes.
From the definition:  retail self-checkout machine, automated banking machine (a.k.a. Automated Teller Machine, or ATM), ticket kiosk, calculator, printer, smart TV, set-top box and a computer that is locked down so that users may not adjust settings due to a policy.

Update to definition: self-service transaction machines or kiosks (e.g. retail self-service checkout, ticketing kiosk, or automated banking machine), entertainment devices (smart TV, set-top box, VR headsets)

Some of the examples the task force has considered when developing guidance include the software of:

*   a self-service transaction machine or kiosk (e.g. retail self-checkout machine, ticketing kiosk, or automated banking machine) that provides an audio interface for blind and vision-impaired users as and tactile keys as an alternative to touch screen operation for both blind users and those who can't operate a touch screen.
*   an ebook reader or standalone ebook software that allows assistive technologies to access all of the user interface controls of the ebook program (open functionality) but does not allow the assistive technologies to access the actual content of book (closed functionality).
*   an operating system that requires the user to provide log in credentials before it allows any assistive technologies to be loaded. The log-in portion would be closed functionality.</div>

There are other existing standards that provide accessibility requirements for both hardware and software aspects of closed functionality products. This document does not comment on those standards, but do note that WCAG success criteria should not be used as requirements for hardware aspects of closed functionality products. Instead, this Note indicates considerations for applying WCAG criteria to closed functionality software and when that might be problematic due to the underlying assumptions built into the WCAG criteria. See [Appendix A: Success Criteria Problematic for Closed Functionality](#success-criteria-problematic-for-closed-functionality) for a list of success criteria for which this is relevant.
