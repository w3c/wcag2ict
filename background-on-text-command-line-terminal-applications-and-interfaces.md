Background on Text / Command-line / Terminal Applications and Interfaces
------------------------------------------------------------------------

How text interfaces are realized
--------------------------------

The interface of a text application is realized through a server application directing which characters should be placed on the screen, along with either a hardware terminal or a terminal application that displays the characters. The client terminal application for text applications is analogous to a web user agent for web pages. Also like web applications, text applications may execute primarily on a remote server or execute locally.

Some text applications render like a TeleTYpewriter (TTY); their output is always appended, like an ever growing file. Such text applications are often called “command-line applications” or occasionally “TTY-applications”, and their output can optionally be redirected to a file for later review. Others explicitly place text into a matrix of fixed width character cells on a screen (sometimes with specific foreground and background colors).

Historically, input to the text application itself is provided exclusively through a keyboard interface, though Automatic Speech Recognition (ASR) based voice input is sometimes now an alternative option - especially on mobile devices.

How text applications have been made accessible via assistive technology
------------------------------------------------------------------------

Strategies for making text applications accessible through assistive technology involve two key tasks: (1) obtaining all of the text displayed in the interface, and (2) performing an analysis on that text to detect screen updates and attempt to discern structural elements.

For example, a text application screen reader might directly access the matrix of character cells in the interface and provide a screen review mechanism for the user to review that matrix of characters (by sending the output to synthetic speech and/or a braille display). Alternately, a text application screen reader might directly consume the output rendered (perhaps by acting as its own terminal application or by analyzing the “TTY” output). A text application screen reader might also attempt to analyze the spacing and layout of the text in the matrix, to provide features such as reading columns of text in a multi-column layout; discerning headers through analysis of line spacing, indentation, and capitalization; and discerning input fields or user interface components by scanning for the use of inverse video, for text appearing in brackets, or for text from the character graphics codepage (ASCII codes greater than ‘0x7F’). Some of this analysis might also be done through the use of filter tools that transform the output of a program (e.g., through reformatting “TTY” output rendered to a file or as direct input to a filter tool).

Similarly, a text application screen magnifier would gain access to the matrix of character cells to magnify them or re-display them in a larger font. It would scan for screen refreshes and updates and then apply heuristics to what had changed in order to decide what sub-matrix of character cells should appear in a magnified view. It would also scan for inverse video and a moving text cursor to track text being input by the user (and might combine the text matrix scanning with scanning of the keyboard input to match user input to what is appearing on the screen).

Applying WCAG 2 to text applications
--------------------------------------

To apply WCAG to text applications, it is necessary to apply the glossary terms [accessibility supported](#dfn-accessibility-supported) and [programmatically determined](#dfn-programmatically-determinable) in the context of how text applications are rendered and the history of assistive technologies that made them accessible.

As noted above, in a text interface the terminal application renders the characters on the screen, just as a Web browser typically renders content for a Web application. As an example, for success criterion [1.4.4 Resize Text](http://www.w3.org/TR/WCAG22/#resize-text), a text application could achieve 200 percent resizing when the terminal application client that is rendering it has this capability (cf. WCAG 2 Technique [G142 Using a technology that has commonly-available user agents that support zoom](http://www.w3.org/WAI/WCAG22/Techniques/general/G142)). Many web pages and web applications use this approach to meet success criterion [1.4.4 Resize Text](http://www.w3.org/TR/WCAG22/#resize-text) through no explicit action of their own.

A similar approach could also be used for success criterion [1.4.3 Contrast (minimum)](http://www.w3.org/TR/WCAG22/#contrast-minimum) (cf. WCAG 2 Technique [G148: Not specifying background color, not specifying text color, and not using technology features that change those defaults](http://www.w3.org/WAI/WCAG22/Techniques/general/G148)): relying on the terminal application client to render the text with sufficient contrast against the background. In fact, many terminal applications allow the user to force all text to share a single user-chosen foreground color (and a single user-chosen background color), overriding the text application's specified colors to meet the user's desires or needs.

Since many assistive technology analysis techniques depend upon discerning the location of the text input cursor, terminal application use of “soft cursors” and “highlight bars” may bypass those analysis techniques and cause failures of success criteria.

<div class="note">It is outside of the scope of this document to define WCAG techniques for non-web ICT. These examples are simply illustrations of how WCAG 2 success criteria can be applied to this class of non-web software applications.</div>

The way to think about "accessibility supported" and "programmatically determined" may seem a little different for text applications, but the definitions are unchanged. Unlike the semantic objects of graphical user interfaces and web pages, the output of text-based applications consists of plain text. A terminal emulator acts as the user agent for text-based applications; it might render some content such as escape codes as semantic elements, but otherwise exposes only lines of text to assistive technology. Where assistive technology is able to interpret the text and any semantic objects accurately, the content is "programmatically determinable"—even though no explicit markup was necessarily used to make it so.

<div class="note">The terminal application itself is “traditional” non-web software ICT. It is only for the text application that there is a need to take this approach with these glossary terms.</div>
