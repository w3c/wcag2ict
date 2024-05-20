Comments on Conformance
-----------------------

WCAG2ICT is not a standard, so it is not possible to conform to WCAG2ICT. However, some entities may wish to use the information in WCAG2ICT to help establish standards or regulations regarding accessibility in ICT that are based on WCAG 2. While such standards or regulations will need to address matters of conformance themselves, the following notes may be of assistance to those wishing to apply WCAG 2 to non-web documents and software:

1.  The WCAG 2 success criteria and the conformance requirements were designed to work together, such that the language of the success criteria is based on the nature of the conformance requirements. The choice of what level to use for a given criteria (A vs. AA vs. AAA) was further influenced by a number of factors specific to the web domain, as set forth in [Understanding Levels of Conformance](http://www.w3.org/WAI/WCAG22/Understanding/conformance#levels).
2.  In the WCAG 2 conformance model, a [success criterion is satisfied](#dfn-satisfies) if the item being evaluated does not fail it. If the success criterion is in relation to something that does not exist for the item being evaluated (e.g. a success criterion is about captioning audio and there is no audio), where some might consider the criterion "not applicable", the success criterion is automatically met. This approach is central to the way the success criteria in WCAG are structured and worded.
3.  WCAG 2 conformance is applied to the item being evaluated (i.e. web page) as a whole, except when a process includes use of several items, in which case all of the items that are needed in order to complete the process must conform.
4.  In WCAG 2, when conformance depends upon accessibility features of the platform (i.e. browser for web content) or on assistive technologies, WCAG 2 requires that there are assistive technologies, etc. that work with the product (web page).  That is, conformance with WCAG 2 requires that [only accessibility-supported ways of using technologies](https://www.w3.org/TR/WCAG22/#cc4) are relied upon to satisfy the success criteria.
5.  WCAG 2 allows information on part of a page to not conform if the same information is available elsewhere on the page in a conforming fashion. However, WCAG 2 identifies four success criteria that must be met on all areas of the page because they can interfere with the user's ability to access and use other parts of the page:
    *   [1.4.2 Audio Control](http://www.w3.org/TR/WCAG22/#audio-control);
    *   [2.1.2 No Keyboard Trap](http://www.w3.org/TR/WCAG22/#no-keyboard-trap);
    *   [2.2.2 Pause, Stop, Hide](http://www.w3.org/TR/WCAG22/#pause-stop-hide).
    *   [2.3.1 Three Flashes or Below Threshold](http://www.w3.org/TR/WCAG22/#three-flashes-or-below-threshold);

Also, as noted in the Introduction, it wasn't possible to unambiguously carve up software into discrete pieces, and so the unit of evaluation for non-web software is the whole software program. As with any software testing, this can be a very large unit of evaluation, and methods similar to standard software testing may be needed.
