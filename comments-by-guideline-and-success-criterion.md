Comments by Guideline and Success Criterion
-------------------------------------------

The sections that follow are organized according to the principles, guidelines, and success criteria from WCAG 2.2. The text of each item from WCAG 2.2 is copied as quoted text. Following that, the WCAG2ICT guidance is provided. Finally, the “Intent” from Understanding WCAG 2.2 is copied as quoted text; the Task Force makes no substitutions or edits in this text. In visual presentations, the WCAG2ICT guidance is set out in a box with a blue bar to the left, to highlight that this is the content specific to this document.

### Principle 1: Perceivable

From [Principle 1](http://www.w3.org/TR/WCAG22/#perceivable):

> Information and user interface components must be presentable to users in ways they can perceive.

#### Additional Guidance When Applying Principle 1 to Non-Web Documents and Software:

In WCAG 2.2, the Principles are provided for framing and understanding the success criteria under them but are not required for conformance to WCAG. Principle 1 applies directly as written.

#### Guideline 1.1: Text Alternatives

From [Guideline 1.1](http://www.w3.org/TR/WCAG22/#text-alternatives):

> Provide text alternatives for any non-text content so that it can be changed into other forms people need, such as large print, braille, speech, symbols or simpler language.

##### Additional Guidance When Applying Guideline 1.1 to Non-Web Documents and Software:

In WCAG 2.2, the Guidelines are provided for framing and understanding the success criteria under them but are not required for conformance to WCAG. Guideline 1.1 applies directly as written.

Intent from [Understanding Guideline 1.1 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/text-alternatives#intent):

> The purpose of this guideline is to ensure that all non-text content is also available in [text](http://www.w3.org/TR/WCAG22/#dfn-text). "Text" refers to electronic text, not an image of text. Electronic text has the unique advantage that it is presentation neutral. That is, it can be rendered visually, auditorily, tactilely, or by any combination. As a result, information rendered in electronic text can be presented in whatever form best meets the needs of the user. It can also be easily enlarged, spoken aloud so that it is easier for people with reading disabilities to understand, or rendered in whatever tactile form best meets the needs of a user.
> 
> _Note:_ While changing the content into symbols includes changing it into graphic symbols for people with developmental disorders and speech comprehension difficulties, it is not limited to this use of symbols.

### Success Criterion 1.1.1: Non-text Content (Level A)

From [Success Criterion 1.1.1](http://www.w3.org/TR/WCAG22/#non-text-content):

### Additional Guidance When Applying Success Criterion 1.1.1 to Non-Web Documents and Software:

This applies directly as written, and as described in [Intent from Understanding Success Criterion 1.1.1](http://www.w3.org/WAI/WCAG22/Understanding/non-text-content#intent) (also provided below).

CAPTCHAs do not currently appear outside of the Web. However, if they do appear, this guidance is accurate.

See also the discussion on [Closed Functionality](http://w3c.github.io/wcag2ict/#closed-functionality).

Intent from [Understanding Success Criterion 1.1.1 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/non-text-content#intent):

> The intent of this Success Criterion is to make information conveyed by non-text content accessible through the use of a text alternative. Text alternatives are a primary way for making information accessible because they can be rendered through any sensory modality (for example, visual, auditory or tactile) to match the needs of the user. Providing text alternatives allows the information to be rendered in a variety of ways by a variety of user agents. For example, a person who cannot see a picture can have the text alternative read aloud using synthesized speech. A person who cannot hear an audio file can have the text alternative displayed so that he or she can read it. In the future, text alternatives will also allow information to be more easily translated into sign language or into a simpler form of the same language.
> 
> CAPTCHAs are a controversial topic in the accessibility community. As is described in the paper [Inaccessibility of CAPTCHA](http://www.w3.org/TR/turingtest/), CAPTCHAs intrinsically push the edges of human abilities in an attempt to defeat automated processes. Every type of CAPTCHA will be unsolvable by users with certain disabilities. However, they are widely used, and the Web Content Accessibility Guidelines Working Group believes that if CAPTCHAs were forbidden outright, Web sites would choose not to conform to WCAG rather than abandon CAPTCHA. This would create barriers for a great many more users with disabilities. For this reason the Working Group has chosen to structure the requirement about CAPTCHA in a way that meets the needs of most people with disabilities, yet is also considered adoptable by sites. Requiring two different forms of CAPTCHA on a given site ensures that most people with disabilities will find a form they can use.
> 
> Because some users with disabilities will still not be able to access sites that meet the minimum requirements, the Working Group provides recommendations for additional steps. Organizations motivated to conform to WCAG should be aware of the importance of this topic and should go as far beyond the minimum requirements of the guidelines as possible. Additional recommended steps include:
> 
> *   Providing more than two modalities of CAPTCHAs
>     
> *   Providing access to a human customer service representative who can bypass CAPTCHA
>     
> *   Not requiring CAPTCHAs for authorized users
>     
> 
> ###### Additional information
> 
> Non-text content can take a number of forms, and this Success Criterion specifies how each is to be handled.
> 
> **For non-text content that is not covered by one of the other situations listed below,** such as charts, diagrams, audio recordings, pictures, and animations, text alternatives can make the same information available in a form that can be rendered through any modality (for example, visual, auditory or tactile). Short and long text alternatives can be used as needed to convey the information in the non-text content. Note that **prerecorded audio-only** and **prerecorded video-only** files are covered here. **Live-audio-only** and **Live-video-only** files are covered below (see 3rd paragraph following this one).
> 
> **For non-text content that is a control or accepts user input**, such as images used as submit buttons, image maps or complex animations, a name is provided to describe the purpose of the non-text content so that the person at least knows what the non-text content is and why it is there.
> 
> **Non-text content that is time-based media** is made accessible through _[1.2](http://www.w3.org/WAI/WCAG22/Understanding/time-based-media)_. However, it is important that users know what it is when they encounter it on a page so they can decide what action if any they want to take with it. A text alternative that describes the time-based media and/or gives its title is therefore provided.
> 
> **For Live Audio-only and live video-only content**, it can be much more difficult to provide text alternatives that provide equivalent information as live audio-only and live video-only content. For these types of non-text content, text alternatives provide a descriptive label.
> 
> **Sometimes a test or exercise must be partially or completely presented in non-text format.** Audio or visual information is provided that cannot be changed to text because the test or exercise must be conducted using that sense. For example, a hearing test would be invalid if a text alternative were provided. A visual skill development exercise would similarly make no sense in text form. And a spelling test with text alternatives would not be very effective. For these cases, text alternatives should be provided to describe the purpose of the non-text content; of course, the text alternatives would not provide the same information needed to pass the test.
> 
> **Sometimes content is primarily intended to create a specific sensory experience** that words cannot fully capture. Examples include a symphony performance, works of visual art etc. For such content, text alternatives at least identify the non-text content with a descriptive label and where possible, additional descriptive text. If the reason for including the content in the page is known and can be described it is helpful to include that information.
> 
> **Sometimes there are non-text exercises that are used to prove you are human.** To avoid spam robots and other software from gaining access to a site a device called a CAPTCHA is used. These usually involve visual or auditory tasks that are beyond the current capabilities of Web robots. Providing a text alternative to them would however make them operable by Robots, thus defeating their purpose. In this case a text alternative would describe the purpose of the CAPTCHA, and alternate forms using different modalities would be provided to address the needs of people with different disabilities.
> 
> **Sometimes there is non-text content that really is not meant to be seen or understood by the user.** Transparent images used to move text over on a page; an invisible image that is used to track usage statistics; and a swirl in the corner that conveys no information but just fills up a blank space to create an aesthetic effect are all examples of this. Putting alternative text on such items just distracts people using screen readers from the content on the page. Not marking the content in any way, though, leaves users guessing what the non-text content is and what information they may have missed (even though they have not missed anything in reality). This type of non-text content, therefore, is marked or implemented in a way that assistive technologies (AT) will ignore it and not present anything to the user.
> 
> ###### Specific Benefits of Success Criterion 1.1.1
> 
> *   This Success Criterion helps people who have difficulty perceiving visual content. Assistive technology can read text aloud, present it visually, or convert it to braille.
>     
> *   Text alternatives may help some people who have difficulty understanding the meaning of photographs, drawings, and other images (e.g., line drawings, graphic designs, paintings, three-dimensional representations), graphs, charts, animations, etc.
>     
> *   People who are deaf, are hard of hearing, or who are having trouble understanding audio information for any reason can read the text presentation. Research is ongoing regarding automatic translation of text into sign language.
>     
> *   People who are deaf-blind can read the text in braille.
>     
> *   Additionally, text alternatives support the ability to search for non-text content and to repurpose content in a variety of ways.
>     

Guideline 1.2: Time-based Media
-------------------------------

From [Guideline 1.2](http://www.w3.org/TR/WCAG22/#time-based-media):

> Provide alternatives for time-based media.

Additional Guidance When Applying Guideline 1.2 to Non-Web Documents and Software:
----------------------------------------------------------------------------------

In WCAG 2.2, the Guidelines are provided for framing and understanding the success criteria under them but are not required for conformance to WCAG. Guideline 1.2 applies directly as written.

Intent from [Understanding Guideline 1.2 in Understanding 2.2](http://www.w3.org/WAI/WCAG22/Understanding/time-based-media#intent):

> The purpose of this guideline is to provide access to time-based and synchronized media.This includes media that is:
> 
> *   audio-only
>     
> *   video-only
>     
> *   audio-video
>     
> *   audio and/or video combined with interaction
>     
> 
> To make it easy for authors to quickly determine which success criteria apply to their content, the type of media each success criterion applies to is included in its short name.
> 
> For **audio-only** or **video-only** media, you only need to apply the success criteria that say "**audio-only**" or "**video-only**" in their short name. If your media is not **audio-only** or **video-only**, then all the rest of the success criteria apply.
> 
> Media can also be **live** or **prerecorded**. Each of the success criterion short names clearly tells you if the success criterion applies to **live** or **prerecorded** media.
> 
> **Synchronized media** is defined in the glossary as:
> 
> synchronized media
> 
> [audio](http://www.w3.org/TR/WCAG22/#dfn-audio) or [video](http://www.w3.org/TR/WCAG22/#dfn-video) synchronized with another format for presenting information and/or with time-based interactive components, unless the media is a [media alternative for text](http://www.w3.org/TR/WCAG22/#dfn-media-alternative-for-text) that is clearly labeled as such
> 
> Note that an audio file accompanied by interaction is covered here, as is a video-only file that involves interaction. These are covered because interaction must take place at a particular time. Having a text transcript that said, "for more information, click now," would not be very helpful since the reader would have no idea when the audio said, "now." As a result, synchronized captions would be needed.
> 
> Sometimes, there is so much dialogue that audio description cannot fit into existing pauses in the dialogue. The option at Level A to provide an alternative for time-based media instead of audio description for synchronized media would allow access to all of the information in the synchronized media. This option also allows access to the visual information in non-visual form when audio description is not provided for some other reason.
> 
> For synchronized media that includes interaction, interactive elements (for example links) could be embedded in the alternative for time-based media.
> 
> This guideline also includes (at Level AAA) sign language interpretation for synchronized media as well as an approach called extended audio description. In extended audio description, the video is frozen periodically to allow more audio description to take place than is possible in the existing pauses in the dialogue. This is a case where higher-level Success Criteria build upon the requirements of lower-level Success Criterion with the intention of having cumulative, progressively stronger, requirements.

Success Criterion 1.2.1: Audio-only and Video-only (Prerecorded) (Level A)
--------------------------------------------------------------------------

From [Success Criterion 1.2.1](http://www.w3.org/TR/WCAG22/#audio-only-and-video-only-prerecorded):

Additional Guidance When Applying Success Criterion 1.2.1 to Non-Web Documents and Software:
--------------------------------------------------------------------------------------------

This applies directly as written, and as described in [Intent from Understanding Success Criterion 1.2.1](http://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded#intent) (also provided below).

The alternative can be provided directly in the [non-web document](http://w3c.github.io/wcag2ict/#wcag2ict-def_document) or [software](http://w3c.github.io/wcag2ict/#wcag2ict-def_software) – or provided in an alternate version that meets the success criteria.

See also the discussion on [Closed Functionality](http://w3c.github.io/wcag2ict/#closed-functionality).

Intent from [Understanding Success Criterion 1.2.1 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded#intent):

> The intent of this Success Criterion is to make information conveyed by prerecorded audio-only and prerecorded video-only content available to all users. Alternatives for time-based media that are text based make information accessible because text can be rendered through any sensory modality (for example, visual, auditory or tactile) to match the needs of the user. In the future, text could also be translated into symbols, sign language or simpler forms of the language (future).
> 
> An example of pre-recorded video with no audio information or user interaction is a silent movie. The purpose of the transcript is to provide an equivalent to what is presented visually. For prerecorded video content, authors have the option to provide an audio track. The purpose of the audio alternative is to be an equivalent to the video. This makes it possible for users with and without vision impairment to review content simultaneously. The approach can also make it easier for those with cognitive, language and learning disabilities to understand the content because it would provide parallel presentation.
> 
> _Note:_ A text equivalent is not required for audio that is provided as an equivalent for video with no audio information. For example, it is not required to caption video description that is provided as an alternative to a silent movie.
> 
> See also _[Understanding Success Criterion 1.2.9 Audio-only (Live)](http://www.w3.org/WAI/WCAG22/Understanding/audio-only-live)_
> 
> ###### Specific Benefits of Success Criterion 1.2.1
> 
> *   This Success Criterion helps people who have difficulty perceiving visual content. Assistive technology can read text alternatives aloud, present them visually, or convert them to braille.
>     
> *   Alternatives for timed-based media that are text based may help some people who have difficulty understanding the meaning of prerecorded video content.
>     
> *   People who are deaf, are hard of hearing, or who are having trouble understanding audio information for any reason can read the text presentation. Research is ongoing regarding automatic translation of text into sign language.
>     
> *   People who are deaf-blind can read the text in braille.
>     
> *   Additionally, text supports the ability to search for non-text content and to repurpose content in a variety of ways.
>     

Success Criterion 1.2.2: Captions (Prerecorded) (Level A)
---------------------------------------------------------

From [Success Criterion 1.2.2](http://www.w3.org/TR/WCAG22/#captions-prerecorded):

Additional Guidance When Applying Success Criterion 1.2.2 to Non-Web Documents and Software:
--------------------------------------------------------------------------------------------

This applies directly as written, and as described in [Intent from Understanding Success Criterion 1.2.2](http://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded#intent) (also provided below).

The WCAG 2.2 definition of “[captions](http://www.w3.org/TR/WCAG22/#dfn-captions)” notes that “in some countries, captions are called subtitles”. They are also sometimes referred to as “subtitles for the hearing impaired.” Per the definition in WCAG 2.2, to meet this success criterion, whether called captions or subtitles, they would have to provide “synchronized visual and / or text alternative for both speech and non-speech audio information needed to understand the media [content](http://w3c.github.io/wcag2ict/#wcag2ict-def_content)” where non-speech information includes “sound effects, music, laughter, speaker identification and location”.

Intent from [Understanding Success Criterion 1.2.2 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded#intent):

> The intent of this Success Criterion is to enable people who are deaf or hard of hearing to watch synchronized media presentations. Captions provide the part of the content available via the audio track. Captions not only include dialogue, but identify who is speaking and include non-speech information conveyed through sound, including meaningful sound effects.
> 
> It is acknowledged that at the present time there may be difficulty in creating captions for time-sensitive material and this may result in the author being faced with the choice of delaying the information until captions are available, or publishing time-sensitive content that is inaccessible to the deaf, at least for the interval until captions are available. Over time, the tools for captioning as well as building the captioning into the delivery process can shorten or eliminate such delays.
> 
> Captions are not needed when the synchronized media is, itself, an alternate presentation of information that is also presented via text on the Web page. For example, if information on a page is accompanied by a synchronized media presentation that presents no more information than is already presented in text, but is easier for people with cognitive, language, or learning disabilities to understand, then it would not need to be captioned since the information is already presented on the page in text or in text alternatives (e.g., for images).
> 
> See also _[Understanding Success Criterion 1.2.4 Captions (Live)](http://www.w3.org/WAI/WCAG22/Understanding/captions-live)_.
> 
> ###### Specific Benefits of Success Criterion 1.2.2
> 
> *   People who are deaf or have a hearing loss can access the auditory information in the synchronized media content through captions.
>     

Success Criterion 1.2.3: Audio Description or Media Alternative (Prerecorded) (Level A)
---------------------------------------------------------------------------------------

From [Success Criterion 1.2.3](http://www.w3.org/TR/WCAG22/#audio-description-or-media-alternative-prerecorded):

Additional Guidance When Applying Success Criterion 1.2.3 to Non-Web Documents and Software:
--------------------------------------------------------------------------------------------

This applies directly as written, and as described in [Intent from Understanding Success Criterion 1.2.3](http://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded#intent) (also provided below).

The WCAG 2.2 definition of “[audio description](http://www.w3.org/TR/WCAG22/#dfn-audio-descriptions)” says that “audio description” is “also called ‘video description’ and ‘descriptive narration’”.

Secondary or alternate audio tracks are commonly used for this purpose.

See also the discussion on [Closed Functionality](http://w3c.github.io/wcag2ict/#closed-functionality).

Intent from [Understanding Success Criterion 1.2.3 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded#intent):

> The intent of this Success Criterion is to provide people who are blind or visually impaired access to the visual information in a synchronized media presentation. This Success Criterion describes two approaches, either of which can be used.
> 
> One approach is to provide audio description of the video content. The audio description augments the audio portion of the presentation with the information needed when the video portion is not available. During existing pauses in dialogue, audio description provides information about actions, characters, scene changes, and on-screen text that are important and are not described or spoken in the main sound track.
> 
> The second approach involves providing all of the information in the synchronized media (both visual and auditory) in text form. An alternative for time-based media provides a running description of all that is going on in the synchronized media content. The alternative for time-based media reads something like a screenplay or book. Unlike audio description, the description of the video portion is not constrained to just the pauses in the existing dialogue. Full descriptions are provided of all visual information, including visual context, actions and expressions of actors, and any other visual material. In addition, non-speech sounds (laughter, off-screen voices, etc.) are described, and transcripts of all dialogue are included. The sequence of description and dialogue transcripts are the same as the sequence in the synchronized media itself. As a result, the alternative for time-based media can provide a much more complete representation of the synchronized media content than audio description alone.
> 
> If there is any interaction as part of the synchronized media presentation (e.g., "press now to answer the question") then the alternative for time-based media would provide hyperlinks or whatever is needed to provide the same functionality.
> 
> _Note 1:_ For 1.2.3, 1.2.5, and 1.2.7, if all of the information in the video track is already provided in the audio track, no audio description is necessary.
> 
> _Note 2:_ 1.2.3, 1.2.5, and 1.2.8 overlap somewhat with each other. This is to give the author some choice at the minimum conformance level, and to provide additional requirements at higher levels. At Level A in Success Criterion 1.2.3, authors do have the choice of providing either an audio description or a full text alternative. If they wish to conform at Level AA, under Success Criterion 1.2.5 authors must provide an audio description - a requirement already met if they chose that alternative for 1.2.3, otherwise an additional requirement. At Level AAA under Success Criterion 1.2.8 they must provide an extended text description. This is an additional requirement if both 1.2.3 and 1.2.5 were met by providing an audio description only. If 1.2.3 was met, however, by providing a text description, and the 1.2.5 requirement for an audio description was met, then 1.2.8 does not add new requirements.
> 
> See also _[Understanding Success Criterion 1.2.5 Audio Description (Prerecorded)](http://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded)_, _[Understanding Success Criterion 1.2.7 Extended Audio Description (Prerecorded)](http://www.w3.org/WAI/WCAG22/Understanding/extended-audio-description-prerecorded)_ and _[Understanding Success Criterion 1.2.8 Media Alternative (Prerecorded)](http://www.w3.org/WAI/WCAG22/Understanding/media-alternative-prerecorded)_.
> 
> ###### Specific Benefits of Success Criterion 1.2.3
> 
> *   This Success Criterion may help some people who have difficulty watching video or other synchronized media content, including people who have difficulty perceiving or understanding moving images.
>     

Success Criterion 1.2.4: Captions (Live) (Level AA)
---------------------------------------------------

From [Success Criterion 1.2.4](http://www.w3.org/TR/WCAG22/#captions-live):

Additional Guidance When Applying Success Criterion 1.2.4 to Non-Web Documents and Software:
--------------------------------------------------------------------------------------------

This applies directly as written, and as described in [Intent from Understanding Success Criterion 1.2.4](http://www.w3.org/WAI/WCAG22/Understanding/captions-live#intent) (also provided below).

The WCAG 2.2 definition of “[captions](http://www.w3.org/TR/WCAG22/#dfn-captions)” notes that “In some countries, captions are called subtitles”. They are also sometimes referred to as “subtitles for the hearing impaired.” Per the definition in WCAG 2.2, to meet this success criterion, whether called captions or subtitles, they would have to provide “synchronized visual and / or text alternative for both speech and non-speech audio information needed to understand the media [content](http://w3c.github.io/wcag2ict/#wcag2ict-def_content)” where non-speech information includes “sound effects, music, laughter, speaker identification and location”.

Intent from [Understanding Success Criterion 1.2.4 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/captions-live#intent):

> The intent of this Success Criterion is to enable people who are deaf or hard of hearing to watch **_real-time_** presentations. Captions provide the part of the content available via the audio track. Captions not only include dialogue, but also identify who is speaking and notate sound effects and other significant audio.
> 
> This success criterion was intended to apply to broadcast of synchronized media and is not intended to require that two-way multimedia calls between two or more individuals through web apps must be captioned regardless of the needs of users. Responsibility for providing captions would fall to the content providers (the callers) or the “host” caller, and not the application.
> 
> ###### Specific Benefits of Success Criterion 1.2.4
> 
> *   People who are deaf or have a hearing loss can access the auditory information in the synchronized media content through captions.
>     

Success Criterion 1.2.5: Audio Description (Prerecorded) (Level AA)
-------------------------------------------------------------------

From [Success Criterion 1.2.5](http://www.w3.org/TR/WCAG22/#audio-description-prerecorded):

Additional Guidance When Applying Success Criterion 1.2.5 to Non-Web Documents and Software:
--------------------------------------------------------------------------------------------

This applies directly as written, and as described in [Intent from Understanding Success Criterion 1.2.5](http://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded#intent) (also provided below).

**Note1:** The WCAG 2.2 definition of “[audio description](http://www.w3.org/TR/WCAG22/#dfn-audio-descriptions)” says that audio description is “also called ‘video description’ and ‘descriptive narration’”.

**Note2:** Secondary or alternate audio tracks are commonly used for this purpose.

Intent from [Understanding Success Criterion 1.2.5 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded#intent):

> The intent of this Success Criterion is to provide people who are blind or visually impaired access to the visual information in a synchronized media presentation. The audio description augments the audio portion of the presentation with the information needed when the video portion is not available. During existing pauses in dialogue, audio description provides information about actions, characters, scene changes, and on-screen text that are important and are not described or spoken in the main sound track.
> 
> _Note 1:_ For 1.2.3, 1.2.5, and 1.2.7, if all of the information in the video track is already provided in the audio track, no audio description is necessary.
> 
> _Note 2:_ 1.2.3, 1.2.5, and 1.2.8 overlap somewhat with each other. This is to give the author some choice at the minimum conformance level, and to provide additional requirements at higher levels. At Level A in Success Criterion 1.2.3, authors do have the choice of providing either an audio description or a full text alternative. If they wish to conform at Level AA, under Success Criterion 1.2.5 authors must provide an audio description - a requirement already met if they chose that alternative for 1.2.3, otherwise an additional requirement. At Level AAA under Success Criterion 1.2.8 they must provide an extended text description. This is an additional requirement if both 1.2.3 and 1.2.5 were met by providing an audio description only. If 1.2.3 was met, however, by providing a text description, and the 1.2.5 requirement for an audio description was met, then 1.2.8 does not add new requirements.
> 
> ###### Specific Benefits of Success Criterion 1.2.5
> 
> *   People who are blind or have low vision as well as those with cognitive limitations who have difficulty interpreting visually what is happening benefit from audio description of visual information.
>     

Guideline 1.3: Adaptable
------------------------

From [Guideline 1.3](http://www.w3.org/TR/WCAG22/#adaptable):

> Create content that can be presented in different ways (for example simpler layout) without losing information or structure.

Additional Guidance When Applying Guideline 1.3 to Non-Web Documents and Software:
----------------------------------------------------------------------------------

In WCAG 2.2, the Guidelines are provided for framing and understanding the success criteria under them but are not required for conformance to WCAG. Guideline 1.3 applies directly as written.

Intent from [Understanding Guideline 1.3 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/adaptable#intent):

> The purpose of this guideline is to ensure that all information is available in a form that can be perceived by all users, for example, spoken aloud, or presented in a simpler visual layout. If all of the information is available in a form that can be determined by software, then it can be presented to users in different ways (visually, audibly, tactilely etc.). If information is embedded in a particular presentation in such a way that the structure and information cannot be programmatically determined by the assistive technology, then it cannot be rendered in other formats as needed by the user.
> 
> The Success Criteria under this guideline all seek to ensure that different types of information that are often encoded in presentation are also available so that they can be presented in other modalities.
> 
> *   **structure:** the way the parts of a Web page are organized in relation to each other; and the way a collection of Web pages is organized
>     
> *   **presentation:** rendering of the content in a form that can be perceived by users
>     

Success Criterion 1.3.1: Info and Relationships (Level A)
---------------------------------------------------------

From [Success Criterion 1.3.1](http://www.w3.org/TR/WCAG22/#info-and-relationships):

Additional Guidance When Applying Success Criterion 1.3.1 to Non-Web Documents and Software:
--------------------------------------------------------------------------------------------

This applies directly as written, and as described in [Intent from Understanding Success Criterion 1.3.1](http://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships#intent) (also provided below).

In software, programmatic determinability is best achieved through the use of [accessibility services provided by platform software](http://w3c.github.io/wcag2ict/#wcag2ict-def_accessibility-services) to enable interoperability between software and assistive technologies and accessibility features of software.

See also the discussion on [Closed Functionality](http://w3c.github.io/wcag2ict/#closed-functionality).

Intent from [Understanding Success Criterion 1.3.1 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships#intent):

> The intent of this Success Criterion is to ensure that information and relationships that are implied by visual or auditory formatting are preserved when the presentation format changes. For example, the presentation format changes when the content is read by a screen reader or when a user style sheet is substituted for the style sheet provided by the author.
> 
> Sighted users perceive structure and relationships through various visual cues — headings are often in a larger, bold font separated from paragraphs by blank lines; list items are preceded by a bullet and perhaps indented; paragraphs are separated by a blank line; items that share a common characteristic are organized into tabular rows and columns; form fields may be positioned as groups that share text labels; a different background color may be used to indicate that several items are related to each other; words that have special status are indicated by changing the font family and /or bolding, italicizing, or underlining them; items that share a common characteristic are organized into a table where the relationship of cells sharing the same row or column and the relationship of each cell to its row and/or column header are necessary for understanding; and so on. Having these structures and these relationships programmatically determined or available in text ensures that information important for comprehension will be perceivable to all.
> 
> Auditory cues may be used as well. For example, a chime might indicate the beginning of a new section; a change in voice pitch or speech rate may be used to emphasize important information or to indicate quoted text; etc.
> 
> When such relationships are perceivable to one set of users, those relationships can be made to be perceivable to all. One method of determining whether or not information has been properly provided to all users is to access the information serially in different modalities.
> 
> If links to glossary items are implemented using anchor elements (or the proper link element for the technology in use) and identified using a different font face, a screen reader user will hear that the item is a link when the glossary term is encountered even though they may not receive information about the change in font face. An on-line catalog may indicate prices using a larger font colored red. A screen reader or person who cannot perceive red, still has the information about the price as long as it is preceded by the currency symbol.
> 
> Some technologies do not provide a means to programmatically determine some types of information and relationships. In that case then there should be a text description of the information and relationships. For instance, "all required fields are marked with an asterisk (\*)". The text description should be near the information it is describing (when the page is linearized), such as in the parent element or in the adjacent element.
> 
> There may also be cases where it may be a judgment call as to whether the relationships should be programmatically determined or be presented in text. However, when technologies support programmatic relationships, it is strongly encouraged that information and relationships be programmatically determined rather than described in text.
> 
> _Note:_ It is not required that color values be programmatically determined. The information conveyed by color cannot be adequately presented simply by exposing the value. Therefore, [Success Criterion 1.4.1](http://www.w3.org/TR/WCAG22/#use-of-color) addresses the specific case of color, rather than Success Criterion 1.3.1.
> 
> ###### Specific Benefits of Success Criterion 1.3.1
> 
> *   This Success Criterion helps people with different disabilities by allowing user agents to adapt content according to the needs of individual users.
>     
> *   Users who are blind (using a screen reader) benefit when information conveyed through color is also available in text (including text alternatives for images that use color to convey information).
>     
> *   Users who are deaf-blind using braille (text) refreshable displays may be unable to access color-dependent information.
>     

Success Criterion 1.3.2: Meaningful Sequence (Level A)
------------------------------------------------------

From [Success Criterion 1.3.2](http://www.w3.org/TR/WCAG22/#meaningful-sequence):

Additional Guidance When Applying Success Criterion 1.3.2 to Non-Web Documents and Software:
--------------------------------------------------------------------------------------------

This applies directly as written, and as described in [Intent from Understanding Success Criterion 1.3.2](http://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence#intent) (also provided below).

See also the discussion on [Closed Functionality](http://w3c.github.io/wcag2ict/#closed-functionality).

Intent from [Understanding Success Criterion 1.3.2 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence#intent):

> The intent of this Success Criterion is to enable a user agent to provide an alternative presentation of content while preserving the reading order needed to understand the meaning. It is important that it be possible to programmatically determine at least one sequence of the content that makes sense. Content that does not meet this Success Criterion may confuse or disorient users when assistive technology reads the content in the wrong order, or when alternate style sheets or other formatting changes are applied.
> 
> A sequence is _meaningful_ if the order of content in the sequence cannot be changed without affecting its meaning. For example, if a page contains two independent articles, the relative order of the articles may not affect their meaning, as long as they are not interleaved. In such a situation, the articles themselves may have meaningful sequence, but the container that contains the articles may not have a meaningful sequence.
> 
> The semantics of some elements define whether or not their content is a meaningful sequence. For instance, in HTML, text is always a meaningful sequence. Tables and ordered lists are meaningful sequences, but unordered lists are not.
> 
> The order of content in a sequence is not always meaningful. For example, the relative order of the main section of a Web page and a navigation section does not affect their meaning. They could occur in either order in the programmatically determined reading sequence. As another example, a magazine article contains several callout sidebars. The order of the article and the sidebars does not affect their meaning. In these cases there are a number of different reading orders for a Web page that can satisfy the Success Criterion.
> 
> For clarity:
> 
> 1.  Providing a particular linear order is only required where it affects meaning.
>     
> 2.  There may be more than one order that is "correct" (according to the WCAG 2.2 definition).
>     
> 3.  Only one correct order needs to be provided.
>     
> 
> ###### Specific Benefits of Success Criterion 1.3.2
> 
> *   This Success Criterion may help people who rely on assistive technologies that read content aloud. The meaning evident in the sequencing of the information in the default presentation will be the same when the content is presented in spoken form.
>     

Success Criterion 1.3.3: Sensory Characteristics (Level A)
----------------------------------------------------------

From [Success Criterion 1.3.3](http://www.w3.org/TR/WCAG22/#sensory-characteristics):

Additional Guidance When Applying Success Criterion 1.3.3 to Non-Web Documents and Software:
--------------------------------------------------------------------------------------------

This applies directly as written, and as described in [Intent from Understanding Success Criterion 1.3.3](http://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics#intent) (also provided below).

Intent from [Understanding Success Criterion 1.3.3 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics#intent):

> The intent of this Success Criterion is to ensure that all users can access instructions for using the content, even when they cannot perceive shape or size or use information about spatial location or orientation. Some content relies on knowledge of the shape or position of objects that are not available from the structure of the content (for example, "round button" or "button to the right"). Some users with disabilities are not able to perceive shape or position due to the nature of the assistive technologies they use. This Success Criterion requires that additional information be provided to clarify anything that is dependent on this kind of information.
> 
> Providing information using shape and/or location, however, is an effective method for many users including those with cognitive limitations. This provision should not discourage those types of cues as long as the information is also provided in other ways.
> 
> In some languages, it is commonly understood that "above" refers to the content previous to that point in the content and "below" refers to the content after that point. In such languages, if the content being referenced is in the appropriate place in the reading order and the references are unambiguous, statements such as "choose one of the links below" or "all of the above" would conform to this Success Criterion.
> 
> WCAG was designed to apply only to controls that were displayed on a web page. The intent was to avoid describing controls solely via references to visual or auditory cues. When applying this to instructions for operating physical hardware controls (e.g. a web kiosk with dedicated content), tactile cues on the hardware might be described (e.g. the arrow shaped key, the round key on the right side). This success criterion is not intended to prevent the use of tactile cues in instructions.
> 
> ###### Specific Benefits of Success Criterion 1.3.3
> 
> *   People who are blind and people who have low vision may not be able to understand information if it is conveyed by shape and/or location. Providing additional information other than shape and/or location will allow them to understand the information conveyed by shape and/or alone.
>     

Guideline 1.4: Distinguishable
------------------------------

From [Guideline 1.4](http://www.w3.org/TR/WCAG22/#distinguishable):

> Make it easier for users to see and hear content including separating foreground from background.

Additional Guidance When Applying Guideline 1.4 to Non-Web Documents and Software:
----------------------------------------------------------------------------------

In WCAG 2.2, the Guidelines are provided for framing and understanding the success criteria under them but are not required for conformance to WCAG. Guideline 1.4 applies directly as written.

Intent from [Understanding Guideline 1.4 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/distinguishable#intent):

> While some guidelines are focused on making information available in a form that can be presented in alternate formats, this guideline is concerned with making the default presentation as easy to perceive as possible to people with disabilities. The primary focus is on making it easier for users to separate foreground information from the background. For visual presentations this involves making sure that information presented on top of a background contrasts sufficiently with the background. For audio presentations this involves making sure that foreground sounds are sufficiently louder than the background sounds. Individuals with visual and hearing disabilities have much greater difficulty separating foreground and background information.

Success Criterion 1.4.1: Use of Color (Level A)
-----------------------------------------------

From [Success Criterion 1.4.1](http://www.w3.org/TR/WCAG22/#use-of-color):

Additional Guidance When Applying Success Criterion 1.4.1 to Non-Web Documents and Software:
--------------------------------------------------------------------------------------------

This applies directly as written, and as described in [Intent from Understanding Success Criterion 1.4.1](http://www.w3.org/WAI/WCAG22/Understanding/use-of-color#intent) (also provided below).

Intent from [Understanding Success Criterion 1.4.1 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/use-of-color#intent):

> The intent of this Success Criterion is to ensure that all users can access information that is conveyed by color differences, that is, by the use of color where each color has a meaning assigned to it. If the information is conveyed through color differences in an image (or other non-text format), the color may not be seen by users with color deficiencies. In this case, providing the information conveyed with color through another visual means ensures users who cannot see color can still perceive the information.
> 
> Color is an important asset in design of Web content, enhancing its aesthetic appeal, its usability, and its accessibility. However, some users have difficulty perceiving color. People with partial sight often experience limited color vision, and many older users do not see color well. In addition, people using text-only, limited-color or monochrome displays and browsers will be unable to access information that is presented only in color.
> 
> Examples of information conveyed by color differences: “required fields are red", “error is shown in red", and “Mary's sales are in red, Tom's are in blue". Examples of indications of an action include: using color to indicate that a link will open in a new window or that a database entry has been updated successfully. An example of prompting a response would be: using highlighting on form fields to indicate that a required field had been left blank.
> 
> _Note:_ This should not in any way discourage the use of color on a page, or even color coding if it is redundant with other visual indication.
> 
> ###### Specific Benefits of Success Criterion 1.4.1
> 
> *   Users with partial sight often experience limited color vision.
>     
> *   Some older users may not be able to see color well.
>     
> *   Users who have color-blindness benefit when information conveyed by color is available in other visual ways.
>     
> *   People using text-only, limited color, or monochrome displays may be unable to access color-dependent information.
>     
> *   Users who have problems distinguishing between colors can look or listen for text cues.
>     
> *   People using Braille displays or other tactile interfaces can detect text cues by touch.
>     

Success Criterion 1.4.2: Audio Control (Level A)
------------------------------------------------

From [Success Criterion 1.4.2](http://www.w3.org/TR/WCAG22/#audio-control):

Additional Guidance When Applying Success Criterion 1.4.2 to Non-Web Documents and Software:
--------------------------------------------------------------------------------------------

This applies directly as written, and as described in [Intent from Understanding Success Criterion 1.4.2](http://www.w3.org/WAI/WCAG22/Understanding/audio-control#intent) (also provided below), replacing “on a Web page” with “in a non-web document or software”, “any content” with “any part of a non-web document or software”, “whole page” with “whole document or software”, “on the Web page” with “in the document or software”, and removing “See Conformance Requirement 5: Non-Interference”.

With these substitutions, it would read:

**1.4.2 Audio Control:** If any audio in a [non-web document](http://w3c.github.io/wcag2ict/#wcag2ict-def_document "WCAG2ICT Definition: non-web document") or [software](http://w3c.github.io/wcag2ict/#wcag2ict-def_software "WCAG2ICT Definition: software") plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level. (Level A)

Since any part of a [non-web document](http://w3c.github.io/wcag2ict/#wcag2ict-def_document "WCAG2ICT Definition: non-web document") or [software](http://w3c.github.io/wcag2ict/#wcag2ict-def_software "WCAG2ICT Definition: software") that does not meet this success criterion can interfere with a user's ability to use the whole [document](http://w3c.github.io/wcag2ict/#wcag2ict-def_document "WCAG2ICT Definition: document") or [software](http://w3c.github.io/wcag2ict/#wcag2ict-def_software "WCAG2ICT Definition: software"), all [content](http://w3c.github.io/wcag2ict/#wcag2ict-def_content "WCAG2ICT Definition: content")in the [document](http://w3c.github.io/wcag2ict/#wcag2ict-def_document "WCAG2ICT Definition: document") or [software](http://w3c.github.io/wcag2ict/#wcag2ict-def_software "WCAG2ICT Definition: software") (whether or not it is used to meet other success criteria) must meet this success criterion.

Intent from [Understanding Success Criterion 1.4.2 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/audio-control#intent):

> Individuals who use screen reading software can find it hard to hear the speech output if there is other audio playing at the same time. This difficulty is exacerbated when the screen reader's speech output is software based (as most are today) and is controlled via the same volume control as the sound. Therefore, it is important that the user be able to turn off the background sound. Note: Having control of the volume includes being able to reduce its volume to zero.
> 
> _Note:_ Playing audio automatically when landing on a page may affect a screen reader user's ability to find the mechanism to stop it because they navigate by listening and automatically started sounds might interfere with that navigation. Therefore, we discourage the practice of automatically starting sounds (especially if they last more than 3 seconds), and encourage that the sound be _started_ by an action initiated by the user after they reach the page, rather than requiring that the sound be _stopped_ by an action of the user after they land on the page.
> 
> See also _[Understanding Success Criterion 1.4.7 Low or No Background Audio](http://www.w3.org/WAI/WCAG22/Understanding/low-or-no-background-audio)_.
> 
> ###### Specific Benefits of Success Criterion 1.4.2
> 
> *   Individuals who use screen reading technologies can hear the screen reader without other sounds playing. This is especially important for those who are hard of hearing and for those whose screen readers use the system volume (so they cannot turn sound down and screen reader up).
>     
> *   This Success Criterion also benefits people who have difficulty focusing on visual content (including text) when audio is playing.
>     

Success Criterion 1.4.3: Contrast (Minimum) (Level AA)
------------------------------------------------------

From [Success Criterion 1.4.3](http://www.w3.org/TR/WCAG22/#contrast-minimum):

Additional Guidance When Applying Success Criterion 1.4.3 to Non-Web Documents and Software:
--------------------------------------------------------------------------------------------

This applies directly as written, and as described in [Intent from Understanding Success Criterion 1.4.3](http://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum#intent) (also provided below).

Intent from [Understanding Success Criterion 1.4.3 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum#intent):

> The intent of this Success Criterion is to provide enough contrast between text and its background so that it can be read by people with moderately low vision (who do not use contrast-enhancing assistive technology). For people without color deficiencies, hue and saturation have minimal or no effect on legibility as assessed by reading performance (Knoblauch et al., 1991). Color deficiencies can affect luminance contrast somewhat. Therefore, in the recommendation, the contrast is calculated in such a way that color is not a key factor so that people who have a color vision deficit will also have adequate contrast between the text and the background.
> 
> Text that is decorative and conveys no information is excluded. For example, if random words are used to create a background and the words could be rearranged or substituted without changing meaning, then it would be decorative and would not need to meet this criterion.
> 
> Text that is larger and has wider character strokes is easier to read at lower contrast. The contrast requirement for larger text is therefore lower. This allows authors to use a wider range of color choices for large text, which is helpful for design of pages, particularly titles. 18 point text or 14 point bold text is judged to be large enough to require a lower contrast ratio. (See The American Printing House for the Blind Guidelines for Large Printing and The Library of Congress Guidelines for Large Print under [Related Resources](http://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum#resources)). "18 point" and "bold" can both have different meanings in different fonts but, except for very thin or unusual fonts, they should be sufficient. Since there are so many different fonts, the general measures are used and a note regarding fancy or thin fonts is included.
> 
> _Note:_ Because different image editing applications default to different pixel densities (e.g. 72 PPI or 96 PPI), specifying point sizes for fonts from within an image editing application can be unreliable when it comes to presenting text at a specific size. When creating images of large-scale text, authors should ensure that the text in the resulting image is roughly equivalent to 1.2 and 1.5 em or to 120% or 150% of the default size for body text. For example, for a 72 PPI image, an author would need to use approximately 19 pt and 24 pt font sizes in order to successfully present images of large-scale text to a user.
> 
> The previously-mentioned contrast requirements for text also apply to images of text (text that has been rendered into pixels and then stored in an image format) as stated in Success Criterion 1.4.3.
> 
> This requirement applies to situations in which images of text were intended to be understood as text. Incidental text, such as in photographs that happen to include a street sign, are not included. Nor is text that for some reason is designed to be invisible to all viewers. Stylized text, such as in corporate logos, should be treated in terms of its function on the page, which may or may not warrant including the content in the text alternative. Corporate visual guidelines beyond logo and logotype are not included in the exception.
> 
> In this provision there is an exception that reads "that are part of a picture that contains significant other visual content,". This exception is intended to separate pictures that have text in them from images of text that are done to replace text in order to get a particular look.
> 
> _Note 1:_ Some people with cognitive disabilities require color combinations or hues that have low contrast, and therefore we allow and encourage authors to provide mechanisms to adjust the foreground and background colors of the content. Some of the combinations that could be chosen may have contrast levels that will be lower than those found in the Success Criteria. This is not a violation of this Success Criteria provided there is a mechanism that will return to the default values set out in the Success Criteria.
> 
> _Note 2:_ Images of text do not scale as well as text because they tend to pixelate. It is also harder to change foreground and background contrast and color combinations for images of text, which is necessary for some users. Therefore, we suggest using text wherever possible, and when not, consider supplying an image of higher resolution.
> 
> Although this Success Criterion only applies to text, similar issues occur for data presented in charts or graphs. Good color contrast should also be provided for data presented in these forms.
> 
> See also _[Understanding Success Criterion 1.4.6 Contrast (Enhanced)](http://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced)_.
> 
> ###### Rationale for the Ratios Chosen
> 
> A contrast ratio of 3:1 is the minimum level recommended by [\[ISO-9241-3\]](http://www.w3.org/TR/2013/NOTE-UNDERSTANDING-WCAG20-20130905/appendixD.html#ISO-9241-3) and [\[ANSI-HFES-100-1988\]](http://www.w3.org/TR/2013/NOTE-UNDERSTANDING-WCAG20-20130905/appendixD.html#ANSI-HFES-100-1988) for standard text and vision. The 4.5:1 ratio is used in this provision to account for the loss in contrast that results from moderately low visual acuity, congenital or acquired color deficiencies, or the loss of contrast sensitivity that typically accompanies aging.
> 
> The rationale is based on a) adoption of the 3:1 contrast ratio for minimum acceptable contrast for normal observers, in the ANSI standard, and b) the empirical finding that in the population, visual acuity of 20/40 is associated with a contrast sensitivity loss of roughly 1.5 [\[ARDITI-FAYE\]](http://www.w3.org/TR/2013/NOTE-UNDERSTANDING-WCAG20-20130905/appendixD.html#ARDITI-FAYE). A user with 20/40 would thus require a contrast ratio of 3 \* 1.5 = 4.5 to 1. Following analogous empirical findings and the same logic, the user with 20/80 visual acuity would require contrast of about 7:1.
> 
> Hues are perceived differently by users with color vision deficiencies (both congenital and acquired) resulting in different colors and relative luminance contrasts than for normally sighted users. Because of this, effective contrast and readability are different for this population. However, color deficiencies are so diverse that prescribing effective general use color pairs (for contrast) based on quantitative data is not feasible. Requiring good luminance contrast accommodates this by requiring contrast that is independent of color perception. Fortunately, most of the luminance contribution is from the mid and long wave receptors which largely overlap in their spectral responses. The result is that effective luminance contrast can generally be computed without regard to specific color deficiency, except for the use of predominantly long wavelength colors against darker colors (generally appearing black) for those who have protanopia. (We provide an advisory technique on avoiding red on black for that reason). For more information see [\[ARDITI-KNOBLAUCH\]](http://www.w3.org/TR/2013/NOTE-UNDERSTANDING-WCAG20-20130905/appendixD.html#ARDITI-KNOBLAUCH-1994) [\[ARDITI-KNOBLAUCH-1996\]](http://www.w3.org/TR/2013/NOTE-UNDERSTANDING-WCAG20-20130905/appendixD.html#ARDITI-KNOBLAUCH-1996) [\[ARDITI\]](http://www.w3.org/TR/2013/NOTE-UNDERSTANDING-WCAG20-20130905/appendixD.html#ARDITI).
> 
> The contrast ratio of 4.5:1 was chosen for level AA because it compensated for the loss in contrast sensitivity usually experienced by users with vision loss equivalent to approximately 20/40 vision. (20/40 calculates to approximately 4.5:1.) 20/40 is commonly reported as typical visual acuity of elders at roughly age 80. [\[GITTINGS-FOZARD\]](http://www.w3.org/TR/2013/NOTE-UNDERSTANDING-WCAG20-20130905/appendixD.html#GITTINGS-FOZARD)
> 
> The contrast ratio of 7:1 was chosen for level AAA because it compensated for the loss in contrast sensitivity usually experienced by users with vision loss equivalent to approximately 20/80 vision. People with more than this degree of vision loss usually use assistive technologies to access their content (and the assistive technologies usually have contrast enhancing, as well as magnification capability built into them). The 7:1 level therefore generally provides compensation for the loss in contrast sensitivity experienced by users with low vision who do not use assistive technology and provides contrast enhancement for color deficiency as well.
> 
> _Note:_ Calculations in [\[ISO-9241-3\]](http://www.w3.org/TR/2013/NOTE-UNDERSTANDING-WCAG20-20130905/appendixD.html#ISO-9241-3) and [\[ANSI-HFES-100-1988\]](http://www.w3.org/TR/2013/NOTE-UNDERSTANDING-WCAG20-20130905/appendixD.html#ANSI-HFES-100-1988) are for body text. A relaxed contrast ratio is provided for text that is much larger.
> 
> ###### Notes on formula
> 
> Conversion from nonlinear to linear RGB values is based on IEC/4WD 61966-2-1 [\[IEC-4WD\]](http://www.w3.org/TR/2013/NOTE-UNDERSTANDING-WCAG20-20130905/appendixD.html#IEC-4WD) and on "A Standard Default Color Space for the Internet - sRGB" [\[sRGB\]](http://www.w3.org/TR/2013/NOTE-UNDERSTANDING-WCAG20-20130905/appendixD.html#sRGB).
> 
> The formula (L1/L2) for contrast is based on [\[ISO-9241-3\]](http://www.w3.org/TR/2013/NOTE-UNDERSTANDING-WCAG20-20130905/appendixD.html#ISO-9241-3) and [\[ANSI-HFES-100-1988\]](http://www.w3.org/TR/2013/NOTE-UNDERSTANDING-WCAG20-20130905/appendixD.html#ANSI-HFES-100-1988) standards.
> 
> The ANSI/HFS 100-1988 standard calls for the contribution from ambient light to be included in the calculation of L1 and L2. The .05 value used is based on Typical Viewing Flare from [\[IEC-4WD\]](http://www.w3.org/TR/2013/NOTE-UNDERSTANDING-WCAG20-20130905/appendixD.html#IEC-4WD) and the [\[sRGB\]](http://www.w3.org/TR/2013/NOTE-UNDERSTANDING-WCAG20-20130905/appendixD.html#sRGB) paper by M. Stokes et al.
> 
> This Success Criterion and its definitions use the terms "contrast ratio" and "relative luminance" rather than "luminance" to reflect the fact that Web content does not emit light itself. The contrast ratio gives a measure of the relative luminance that would result when displayed. (Because it is a ratio, it is dimensionless.)
> 
> _Note 1:_ Refer to [related resources](http://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced#resources) for a list of tools that utilize the contrast ratio to analyze the contrast of Web content.
> 
> _Note 2:_ See also _[Understanding Success Criterion 2.4.7 Focus Visible](http://www.w3.org/WAI/WCAG22/Understanding/focus-visible)_ for techniques for indicating keyboard focus.
> 
> _Note 3:_ It is sometimes helpful for authors to not specify colors for certain sections of a page in order to help users who need to view content with specific color combinations to view the content in their preferred color scheme. Refer to _[Understanding Success Criterion 1.4.5 Images of Text](http://www.w3.org/WAI/WCAG22/Understanding/images-of-text)_ for more information.
> 
> ###### Specific Benefits of Success Criterion 1.4.3
> 
> *   People with low vision often have difficulty reading text that does not contrast with its background. This can be exacerbated if the person has a color vision deficiency that lowers the contrast even further. Providing a minimum luminance contrast ratio between the text and its background can make the text more readable even if the person does not see the full range of colors. It also works for the rare individuals who see no color.
>     

Success Criterion 1.4.4: Resize text (Level AA)
-----------------------------------------------

From [Success Criterion 1.4.4](http://www.w3.org/TR/WCAG22/#resize-text):

Additional Guidance When Applying Success Criterion 1.4.4 to Non-Web Documents and Software:
--------------------------------------------------------------------------------------------

This applies directly as written, and as described in [Intent from Understanding Success Criterion 1.4.4](http://www.w3.org/WAI/WCAG22/Understanding/resize-text#intent) (also provided below).

[Content](http://w3c.github.io/wcag2ict/#wcag2ict-def_content) for which there are software players, viewers or editors with a 200 percent zoom feature would automatically meet this success criterion when used with such players, unless the content will not work with zoom.

The Intent section refers to the ability to allow users to enlarge the text on screen at least up to 200% without needing to use [assistive technologies](http://w3c.github.io/wcag2ict/#wcag2ict-def_at). This means that the application provides some means for enlarging the text 200% (zoom or otherwise) without loss of [content](http://w3c.github.io/wcag2ict/#wcag2ict-def_content) or functionality or that the application works with the platform features that meet this requirement.

See also the discussion on [Closed Functionality](http://w3c.github.io/wcag2ict/#closed-functionality).

Intent from [Understanding Success Criterion 1.4.4 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/resize-text#intent):

> The intent of this Success Criterion is to ensure that visually rendered text, including text-based controls (text characters that have been displayed so that they can be seen \[vs. text characters that are still in data form such as ASCII\]) can be scaled successfully so that it can be read directly by people with mild visual disabilities, without requiring the use of assistive technology such as a screen magnifier. Users may benefit from scaling all content on the Web page, but text is most critical.
> 
> The scaling of content is primarily a user agent responsibility. User agents that satisfy [UAAG 1.0 Checkpoint 4.1](http://www.w3.org/TR/WAI-USERAGENT/guidelines.html#tech-configure-text-scale) allow users to configure text scale. The author's responsibility is to create Web content that does not prevent the user agent from scaling the content effectively. Authors may satisfy this Success Criterion by verifying that content does not interfere with user agent support for resizing text, including text-based controls, or by providing direct support for resizing text or changing the layout. An example of direct support might be via server-side script that can be used to assign different style sheets.
> 
> The author cannot rely on the user agent to satisfy this Success Criterion for HTML content if users do not have access to a user agent with zoom support. For example, if they work in an environment that requires them to use IE 6.
> 
> If the author is using a technology whose user agents do not provide zoom support, the author is responsible to provide this type of functionality directly or to provide content that works with the type of functionality provided by the user agent. If the user agent doesn't provide zoom functionality but does let the the user change the text size, the author is responsible for ensuring that the content remains usable when the text is resized.
> 
> Some user interface components that function as a label and require activation by the user to access content are not wide enough to accommodate the label's content. For example, in Web mail applications the subject column may not be wide enough to accommodate every possible subject header, but activating the subject header takes the user to the full message with the full subject header. In Web-based spreadsheets, cell content that is too long to be displayed in a column can be truncated, and the full content of the cell is available to the user when the cell receives focus. The content of a user interface component may also become too wide in user interfaces where the user can resize the column width. In this type of user interface component, line wrapping is not required; truncation is acceptable if the component's full content is available on focus or after user activation and an indication that this information can be accessed, is provided to the user in some way besides the fact that it is truncated.
> 
> Content satisfies the Success Criterion if it can be scaled up to 200%, that is, up to twice the width and height. Authors may support scaling beyond that limit, however, as scaling becomes more extreme, adaptive layouts may introduce usability problems. For example, words may be too wide to fit into the horizontal space available to them, causing them to be truncated; layout constraints may cause text to overlap with other content when it is scaled larger; or only one word of a sentence may fit on each line, causing the sentence to be displayed as a vertical column of text that is difficult to read.
> 
> The working group feels that 200% is a reasonable accommodation that can support a wide range of designs and layouts, and complements older screen magnifiers that provide a minimum magnification of 200%. Above 200%, zoom (which resizes text, images, and layout regions and creates a larger canvas that may require both horizontal and vertical scrolling) may be more effective than text resizing. Assistive technology dedicated to zoom support would usually be used in such a situation and may provide better accessibility than attempts by the author to support the user directly.
> 
> _Note:_ Images of text do not scale as well as text because they tend to pixelate, and therefore we suggest using text wherever possible. It is also harder to change foreground and background contrast and color combinations for images of text, which are necessary for some users.
> 
> See also _[Understanding Success Criterion 1.4.8 Visual Presentation](http://www.w3.org/WAI/WCAG22/Understanding/visual-presentation)_.
> 
> ###### Specific Benefits of Success Criterion 1.4.4
> 
> *   This Success Criterion helps people with low vision by letting them increase text size in content so that they can read it.
>     

Success Criterion 1.4.5: Images of Text (Level AA)
--------------------------------------------------

From [Success Criterion 1.4.5](http://www.w3.org/TR/WCAG22/#images-of-text):

Additional Guidance When Applying Success Criterion 1.4.5 to Non-Web Documents and Software:
--------------------------------------------------------------------------------------------

This applies directly as written, and as described in [Intent from Understanding Success Criterion 1.4.5](http://www.w3.org/WAI/WCAG22/Understanding/images-of-text#intent) (also provided below).

See also the discussion on [Closed Functionality](http://w3c.github.io/wcag2ict/#closed-functionality).

Intent from [Understanding Success Criterion 1.4.5 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/images-of-text#intent):

> The intent of this Success Criterion is to encourage authors, who are using technologies which are capable of achieving their desired default visual presentation, to enable people who require a particular visual presentation of text to be able to adjust the text presentation as needed. This includes people who require the text in a particular font size, foreground and background color, font family, line spacing or alignment.
> 
> If an author can use text to achieve the same visual effect, he or she should present the information as text rather than using an image. If for any reason, the author cannot format the text to get the same effect, the effect won't be reliably presented on the commonly available user agents, or using a technology to meet this criterion would interfere with meeting other criteria such as 1.4.4, then an image of text can be used. This includes instances where a particular presentation of text is essential to the information being conveyed, such as type samples, logotypes, branding, etc. Images of text may also be used in order to use a particular font that is either not widely deployed or which the author doesn't have the right to redistribute, or to ensure that the text would be anti-aliased on all user agents.
> 
> Images of text can also be used where it is possible for users to customize the image of text to match their requirements.
> 
> The definition of image of text contains the note: "Note: This does not include text that is part of a picture that contains significant other visual content." Examples of such pictures include graphs, screenshots, and diagrams which visually convey important information through more than just text.
> 
> Techniques for satisfying this Success Criterion are the same as those for Success Criterion 1.4.9, except that they only need to apply if the visual presentation can be achieved with the technologies that the author is using. For Success Criterion 1.4.9, the sufficient techniques would be applied only when the user can customize the output.
> 
> See also _[Understanding Success Criterion 1.4.9 Images of Text (No Exception)](http://www.w3.org/WAI/WCAG22/Understanding/images-of-text-no-exception)_.
> 
> ###### Specific Benefits of Success Criterion 1.4.5
> 
> *   People with low vision (who may have trouble reading the text with the authored font family, size and/or color).
>     
> *   People with visual tracking problems (who may have trouble reading the text with the authored line spacing and/or alignment).
>     
> *   People with cognitive disabilities that affect reading.
>     

Principle 2: Operable
---------------------

From [Principle 2](http://www.w3.org/TR/WCAG22/#operable):

> User interface components and navigation must be operable.

Additional Guidance When Applying Principle 2 to Non-Web Documents and Software:
--------------------------------------------------------------------------------

In WCAG 2.2, the Principles are provided for framing and understanding the success criteria under them but are not required for conformance to WCAG. Principle 2 applies directly as written.

Guideline 2.1: Keyboard Accessible
----------------------------------

From [Guideline 2.1](http://www.w3.org/TR/WCAG22/#keyboard-accessible):

> Make all functionality available from a keyboard.

Additional Guidance When Applying Guideline 2.1 to Non-Web Documents and Software:
----------------------------------------------------------------------------------

In WCAG 2.2, the Guidelines are provided for framing and understanding the success criteria under them but are not required for conformance to WCAG. Guideline 2.1 applies directly as written.

Intent from [Understanding Guideline 2.1 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/keyboard-accessible#intent):

> If all [functionality](http://www.w3.org/TR/WCAG22/#dfn-functionality) can be achieved using the keyboard, it can be accomplished by keyboard users, by speech input (which creates keyboard input), by mouse (using on-screen keyboards), and by a wide variety of assistive technologies that create simulated keystrokes as their output. No other input form has this flexibility or is universally supported and operable by people with different disabilities, as long as the keyboard input is not time-dependent.
> 
> Note that providing universal keyboard input does not mean that other types of input should not be supported. Optimized speech input, optimized mouse/pointer input, etc., are also good. The key is to provide keyboard input and control as well.
> 
> Some devices do not have native keyboards—for example, a PDA or cell phone. If these devices have a Web browsing capability, however, they will have some means of generating text or "keystrokes". This guideline uses the term "[keyboard interface](http://www.w3.org/TR/WCAG22/#dfn-keyboard-interface)" to acknowledge that Web content should be controlled from keystrokes that may come from a keyboard, keyboard emulator, or other hardware or software that generates keyboard or text input.

Success Criterion 2.1.1: Keyboard (Level A)
-------------------------------------------

From [Success Criterion 2.1.1](http://www.w3.org/TR/WCAG22/#keyboard):

Additional Guidance When Applying Success Criterion 2.1.1 to Non-Web Documents and Software:
--------------------------------------------------------------------------------------------

This applies directly as written, and as described in [Intent from Understanding Success Criterion 2.1.1](http://www.w3.org/WAI/WCAG22/Understanding/keyboard#intent) (also provided below).

This does not imply that software must directly support a keyboard or “keyboard interface”. Nor does it imply that software must provide a soft keyboard. Underlying platform software may provide device independent input services to applications that enable operation via a keyboard. Software that supports operation via such platform device independent services would be operable by a keyboard and would comply.

See also the discussion on [Closed Functionality](http://w3c.github.io/wcag2ict/#closed-functionality).

Intent from [Understanding Success Criterion 2.1.1 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/keyboard#intent):

> The intent of this Success Criterion is to ensure that, wherever possible, content can be operated through a keyboard or keyboard interface (so an alternate keyboard can be used). When content can be operated through a keyboard or alternate keyboard, it is operable by people with no vision (who cannot use devices such as mice that require eye-hand coordination) as well as by people who must use alternate keyboards or input devices that act as keyboard emulators. Keyboard emulators include speech input software, sip-and-puff software, on-screen keyboards, scanning software and a variety of assistive technologies and alternate keyboards. Individuals with low vision also may have trouble tracking a pointer and find the use of software much easier (or only possible) if they can control it from the keyboard.
> 
> Examples of "specific timings for individual keystrokes" include situations where a user would be required to repeat or execute multiple keystrokes within a short period of time or where a key must be held down for an extended period before the keystroke is registered.
> 
> The phrase "except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints" is included to separate those things that cannot reasonably be controlled from a keyboard.
> 
> Most actions carried out by a pointing device can also be done from the keyboard (for example, clicking, selecting, moving, sizing). However, there is a small class of input that is done with a pointing device that cannot be done from the keyboard in any known fashion without requiring an inordinate number of keystrokes. Free hand drawing, watercolor painting, and flying a helicopter through an obstacle course are all examples of functions that require path dependent input. Drawing straight lines, regular geometric shapes, re-sizing windows and dragging objects to a location (when the path to that location is not relevant) do not require path dependent input.
> 
> The use of MouseKeys would not satisfy this Success Criterion because it is not a keyboard equivalent to the application; it is a mouse equivalent (i.e., it looks like a mouse to the application).
> 
> It is assumed that the design of user input features takes into account that operating system keyboard accessibility features may be in use. For example, modifier key locking may be turned on. Content continues to function in such an environment, not sending events that would collide with the modifier key lock to produce unexpected results.
> 
> ###### Specific Benefits of Success Criterion 2.1.1
> 
> *   People who are blind (who cannot use devices such as mice that require eye-hand coordination)
>     
> *   People with low vision (who may have trouble finding or tracking a pointer indicator on screen)
>     
> *   Some people with hand tremors find using a mouse very difficult and therefore usually use a keyboard
>     

Success Criterion 2.1.2: No Keyboard Trap (Level A)
---------------------------------------------------

From [Success Criterion 2.1.2](http://www.w3.org/TR/WCAG22/#no-keyboard-trap):

Additional Guidance When Applying Success Criterion 2.1.2 to Non-Web Documents and Software:
--------------------------------------------------------------------------------------------

This applies directly as written, and as described in [Intent from Understanding Success Criterion 2.1.2](http://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap#intent) (also provided below), replacing “page” and “Web page” with “non-web document or software” and removing “See Conformance Requirement 5: Non-Interference”.

With these substitutions, it would read:

**2.1.2 No Keyboard Trap:** If keyboard focus can be moved to a component of the [non-web document](http://w3c.github.io/wcag2ict/#wcag2ict-def_document "WCAG2ICT Definition: non-web document") or [software](http://w3c.github.io/wcag2ict/#wcag2ict-def_software "WCAG2ICT Definition: software") using a [keyboard interface](http://www.w3.org/TR/WCAG22/#dfn-keyboard-interface "WCAG Definition: keyboard interface"), then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away. (Level A)

Since any content that does not meet this success criterion can interfere with a user's ability to use the whole [non-web document](http://w3c.github.io/wcag2ict/#wcag2ict-def_document "WCAG2ICT Definition: non-web document") or [software](http://w3c.github.io/wcag2ict/#wcag2ict-def_software "WCAG2ICT Definition: software"), all content on the [non-web document](http://w3c.github.io/wcag2ict/#wcag2ict-def_document "WCAG2ICT Definition: non-web document") or [software](http://w3c.github.io/wcag2ict/#wcag2ict-def_software "WCAG2ICT Definition: software") (whether it is used to meet other success criteria or not) must meet this success criterion.

Standard exit methods may vary by platform. For example, on many desktop platforms, the Escape key is a standard method for exiting.

Intent from [Understanding Success Criterion 2.1.2 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap#intent):

> The intent of this Success Criterion is to ensure that that content does not "trap" keyboard focus within subsections of content on a Web page. This is a common problem when multiple formats are combined within a page and rendered using plug-ins or embedded applications.
> 
> There may be times when the functionality of the Web page restricts the focus to a subsection of the content, as long as the user knows how to leave that state and "untrap" the focus.
> 
> ###### Specific Benefits of Success Criterion 2.1.2
> 
> *   People who rely on a keyboard or keyboard interface to use the Web including people who are blind and people with physical disabilities.
>     

Guideline 2.2: Enough Time
--------------------------

From [Guideline 2.2](http://www.w3.org/TR/WCAG22/#enough-time):

> Provide users enough time to read and use content.

Additional Guidance When Applying Guideline 2.2 to Non-Web Documents and Software:
----------------------------------------------------------------------------------

In WCAG 2.2, the Guidelines are provided for framing and understanding the success criteria under them but are not required for conformance to WCAG. Guideline 2.2 applies directly as written.

Intent from [Understanding Guideline 2.2 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/enough-time#intent):

> Many users who have disabilities need more time to complete tasks than the majority of users: they may take longer to physically respond, they may take longer to read things, they may have low vision and take longer to find things or to read them, or they may be accessing content through an assistive technology that requires more time. This guideline focuses on ensuring that users are able to complete the tasks required by the content with their own individual response times. The primary approaches deal with eliminating time constraints or providing users enough additional time to allow them to complete their tasks. Exceptions are provided for those cases where this is not possible.

Success Criterion 2.2.1: Timing Adjustable (Level A)
----------------------------------------------------

From [Success Criterion 2.2.1](http://www.w3.org/TR/WCAG22/#timing-adjustable):

Additional Guidance When Applying Success Criterion 2.2.1 to Non-Web Documents and Software:
--------------------------------------------------------------------------------------------

This applies directly as written, and as described in [Intent from Understanding Success Criterion 2.2.1](http://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable#intent) (also provided below), replacing “the content” with “non-web documents or software”.

With this substitution, it would read:

**2.2.1 Timing Adjustable:** For each time limit that is set by [non-web documents](http://w3c.github.io/wcag2ict/#wcag2ict-def_document "WCAG2ICT Definition: non-web documents") or [software](http://w3c.github.io/wcag2ict/#wcag2ict-def_software "WCAG2ICT Definition: software"), at least one of the following is true: (Level A)

*   **Turn off:** The user is allowed to turn off the time limit before encountering it; or
    
*   **Adjust:** The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting; or
    
*   **Extend:** The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, “press the space bar”), and the user is allowed to extend the time limit at least ten times; or
    
*   **Real-time Exception:** The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible; or
    
*   **Essential Exception:** The time limit is [essential](http://www.w3.org/TR/WCAG22/#dfn-essential "WCAG Definition: essential") and extending it would invalidate the activity; or
    
*   **20 Hour Exception:** The time limit is longer than 20 hours.
    

This success criterion helps ensure that users can complete tasks without unexpected changes in content or context that are a result of a time limit. This success criterion should be considered in conjunction with [Success Criterion 3.2.1](http://www.w3.org/TR/WCAG22/#on-focus), which puts limits on changes of content or context as a result of user action.

Intent from [Understanding Success Criterion 2.2.1 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable#intent):

> The intent of this Success Criterion is to ensure that users with disabilities are given adequate time to interact with Web content whenever possible. People with disabilities such as blindness, low vision, dexterity impairments, and cognitive limitations may require more time to read content or to perform functions such as filling out on-line forms. If Web functions are time-dependent, it will be difficult for some users to perform the required action before a time limit occurs. This may render the service inaccessible to them. Designing functions that are not time-dependent will help people with disabilities succeed at completing these functions. Providing options to disable time limits, customize the length of time limits, or request more time before a time limit occurs helps those users who require more time than expected to successfully complete tasks. These options are listed in the order that will be most helpful for the user. Disabling time limits is better than customizing the length of time limits, which is better than requesting more time before a time limit occurs.
> 
> Any process that happens without user initiation after a set time or on a periodic basis is a time limit. This includes partial or full updates of content (for example, page refresh), changes to content, or the expiration of a window of opportunity for a user to react to a request for input.
> 
> It also includes content that is advancing or updating at a rate beyond the user's ability to read and/or understand it. In other words, animated, moving or scrolling content introduces a time limit on a users ability to read content.
> 
> In some cases, however, it is not possible to change the time limit (for example, for an auction or other real-time event) and exceptions are therefore provided for those cases.
> 
> **Notes regarding server time limits**
> 
> *   Timed server redirects can be found below under Common Failures.
>     
> *   Non-timed server redirects (e.g., 3xx response codes) are not applicable because there is no time limit: they work instantly.
>     
> *   This Success Criterion applies only to time limits that are set by the content itself. For example, if a time limit is included in order to address security concerns, it would be considered to have been set by the content because it is designed to be part of the presentation and interaction experience for that content. Time limits set externally to content, such as by the user agent or by factors intrinsic to the Internet are not under the author's control and not subject to WCAG conformance requirements. Time limits set by Web servers should be under the author's/organization's control and are covered. (Success Criteria [2.2.3](http://www.w3.org/TR/WCAG22/#no-timing), [2.2.4](http://www.w3.org/TR/WCAG22/#interruptions) and [2.2.5](http://www.w3.org/TR/WCAG22/#re-authenticating) may also apply.)
>     
> *   Ten times the default was chosen based on clinical experience and other guidelines. For example, if 15 seconds is allowed for a user to respond and hit a switch, 150 seconds would be sufficient to allow almost all users to hit a switch even if they had trouble.
>     
> *   20 seconds was also based on clinical experience and other guidelines. 20 seconds to hit 'any switch' is sufficient for almost all users including those with spasticity. Some would fail, but some would fail all lengths of time. A reasonable period for requesting more time is required since an arbitrarily long time can provide security risks to all users, including those with disabilities, for some applications. For example, with kiosks or terminals that are used for financial transactions, it is quite common for people to walk away without signing off. This leaves them vulnerable to those walking up behind them. Providing a long period of inactivity before asking, and then providing a long period for the person to indicate that they are present can leave terminals open for abuse. If there is no activity the system should ask if the user is there. It should then ask for an indication that a person is there ('hit any key') and then wait long enough for almost anyone to respond. For "hit any key," 20 seconds would meet this. If the person indicates that they are still present, the device should return the user to the exact condition that existed before it asked the question.
>     
> *   20 hours was chosen as an upper limit because it is longer than a full waking day.
>     
> 
> In cases where timing is not an intrinsic requirement but giving users control over timed events would invalidate the outcome, a third party can control the time limits for the user (for example, granting double time on a test).
> 
> See also _[Understanding Success Criterion 2.2.3 No Timing](http://www.w3.org/WAI/WCAG22/Understanding/no-timing)_.
> 
> ###### Specific Benefits of Success Criterion 2.2.1
> 
> *   People with physical disabilities often need more time to react, to type and to complete activities. People with low vision need more time to locate things on screen and to read. People who are blind and using screen readers may need more time to understand screen layouts, to find information and to operate controls. People who have cognitive or language limitations need more time to read and to understand. People who are deaf and communicate in sign language may need more time to read information printed in text (which may be a second language for some).
>     
> *   In circumstances where a sign-language interpreter may be relating audio content to a user who is deaf, control over time limits is also important.
>     
> *   People with reading disabilities, cognitive limitations, and learning disabilities who may need more time to read or comprehend information can have additional time to read the information by pausing the content.
>     

Success Criterion 2.2.2: Pause, Stop, Hide (Level A)
----------------------------------------------------

From [Success Criterion 2.2.2](http://www.w3.org/TR/WCAG22/#pause-stop-hide):

Additional Guidance When Applying Success Criterion 2.2.2 to Non-Web Documents and Software:
--------------------------------------------------------------------------------------------

This applies directly as written, and as described in [Intent from Understanding Success Criterion 2.2.2](http://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide#intent) (also provided below), replacing “page” and “Web page” with “non-web documents and software” and removing “See Conformance Requirement 5: Non-Interference” in Note 2 of the success criterion.

With this substitution, it would read:

**2.2.2 Pause, Stop, Hide:** For moving, [blinking](http://www.w3.org/TR/WCAG22/#dfn-blinking "WCAG Definition: blinking"), scrolling, or auto-updating information, all of the following are true: (Level A)

*   **Moving, blinking, scrolling:** For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to [pause](http://www.w3.org/TR/WCAG22/#dfn-pause "WCAG Definition: pause"), stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is [essential](http://www.w3.org/TR/WCAG22/#dfn-essential "WCAG Definition: essential"); and
    
*   **Auto-updating:** For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential.
    

For requirements related to flickering or flashing content, refer to [Guideline 2.3](http://www.w3.org/TR/WCAG22/#seizures-and-physical-reactions).

Since any [content](http://w3c.github.io/wcag2ict/#wcag2ict-def_content "WCAG2ICT Definition: content") that does not meet this success criterion can interfere with a user's ability to use the whole [non-web documents](http://w3c.github.io/wcag2ict/#wcag2ict-def_document "WCAG2ICT Definition: non-web documents") and [software](http://w3c.github.io/wcag2ict/#wcag2ict-def_software "WCAG2ICT Definition: software"), all content on the [non-web documents](http://w3c.github.io/wcag2ict/#wcag2ict-def_document "WCAG2ICT Definition: non-web documents") and [software](http://w3c.github.io/wcag2ict/#wcag2ict-def_software "WCAG2ICT Definition: software") (whether it is used to meet other success criteria or not) must meet this success criterion.

[Content](http://w3c.github.io/wcag2ict/#wcag2ict-def_content "WCAG2ICT Definition: Content") that is updated periodically by software or that is streamed to the user agent is not required to preserve or present information that is generated or received between the initiation of the pause and resuming presentation, as this may not be technically possible, and in many situations could be misleading to do so.

An animation that occurs as part of a preload phase or similar situation can be considered essential if interaction cannot occur during that phase for all users and if not indicating progress could confuse users or cause them to think that [content](http://w3c.github.io/wcag2ict/#wcag2ict-def_content "WCAG2ICT Definition: content") was frozen or broken.

While the success criteria uses the term “information”, the WCAG 2.2 Intent section makes it clear that this is to be applied to all content. Any [content](http://w3c.github.io/wcag2ict/#wcag2ict-def_content), whether informative or decorative, that is updated automatically, blinks, or moves may create an accessibility barrier.

Intent from [Understanding Success Criterion 2.2.2 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide#intent):

> The intent of this Success Criterion is to avoid distracting users during their interaction with a Web page.
> 
> "Moving, blinking and scrolling" refers to content in which the visible content conveys a sense of motion. Common examples include motion pictures, synchronized media presentations, animations, real-time games, and scrolling stock tickers. "Auto-updating" refers to content that updates or disappears based on a preset time interval. Common time-based content includes audio, automatically updated weather information, news, stock price updates, and auto-advancing presentations and messages. The requirements for moving, blinking and scrolling content and for auto-updating content are the same except that:
> 
> *   authors have the option of providing the user with a means to control the frequency of updates when content is auto-updating and
>     
> *   there is no five second exception for auto-updating since it makes little sense to auto-update for just three seconds and then stop
>     
> 
> Content that moves or auto-updates can be a barrier to anyone who has trouble reading stationary text quickly as well as anyone who has trouble tracking moving objects. It can also cause problems for screen readers.
> 
> Moving content can also be a severe distraction for some people. Certain groups, particularly those with attention deficit disorders, find blinking content distracting, making it difficult for them to concentrate on other parts of the Web page. Five seconds was chosen because it is long enough to get a user's attention, but not so long that a user cannot wait out the distraction if necessary to use the page.
> 
> Content that is paused can either resume in real-time or continue playing from the point in the presentation where the user left off.
> 
> 1.  Pausing and resuming where the user left off is best for users who want to pause to read content and works best when the content is not associated with a real-time event or status.
>     
>     _Note:_ See _[Understanding Success Criterion 2.2.1 Timing Adjustable](http://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable)_ for additional requirements related to time-limits for reading.
>     
> 2.  Pausing and jumping to current display (when pause is released) is better for information that is real-time or "status" in nature. For example, weather radar, a stock ticker, a traffic camera, or an auction timer, would present misleading information if a pause caused it to display old information when the content was restarted.
>     
>     _Note:_ Hiding content would have the same result as pausing and jumping to current display (when pause is released).
>     
> 
> For a mechanism to be considered "a mechanism for the user to pause," it must provide the user with a means to pause that does not tie up the user or the focus so that the page cannot be used. The word "pause" here is meant in the sense of a "pause button" although other mechanisms than a button can be used. Having an animation stop only so long as a user has focus on it (where it restarts as soon as the user moves the focus away) would not be considered a "mechanism for the user to pause" because it makes the page unusable in the process and would not meet this SC.
> 
> It is important to note that the terms "blinking" and "flashing" can sometimes refer to the same content.
> 
> *   "Blinking" refers to content that causes a distraction problem. Blinking can be allowed for a short time as long as it stops (or can be stopped)
>     
> *   "Flashing" refers to content that can trigger a seizure (if it is more than 3 per second and large and bright enough). This cannot be allowed even for a second or it could cause a seizure. And turning the flash off is also not an option since the seizure could occur faster than most users could turn it off.
>     
> *   Blinking usually does not occur at speeds of 3 per second or more, but it can. If blinking occurs faster than 3 per second, it would also be considered a flash.
>     
> 
> ###### Specific Benefits of Success Criterion 2.2.2
> 
> *   Providing content that stops blinking after five seconds or providing a mechanism for users to stop blinking content allows people with certain disabilities to interact with the Web page.
>     
> *   One use of content that blinks is to draw the visitor's attention to that content. Although this is an effective technique for all users with vision, it can be a problem for some users if it persists. For certain groups, including people with low literacy, reading and intellectual disabilities, and people with attention deficit disorders, content that blinks may make it difficult or even impossible to interact with the rest of the Web page.
>     

Guideline 2.3: Seizures
-----------------------

From [Guideline 2.3](http://www.w3.org/TR/WCAG22/#seizures-and-physical-reactions):

> Do not design content in a way that is known to cause seizures.

Additional Guidance When Applying Guideline 2.3 to Non-Web Documents and Software:
----------------------------------------------------------------------------------

In WCAG 2.2, the Guidelines are provided for framing and understanding the success criteria under them but are not required for conformance to WCAG. Guideline 2.3 applies directly as written.

Intent from [Understanding Guideline 2.3 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/seizures-and-physical-reactions#intent):

> Some people with seizure disorders can have a seizure triggered by flashing visual content. Most people are unaware that they have this disorder until it strikes. In 1997, a cartoon on television in Japan sent over 700 children to the hospital, including about 500 who had seizures. Warnings do not work well because they are often missed, especially by children who may in fact not be able to read them.
> 
> The objective of this guideline is to ensure that content that is marked as conforming to WCAG 2.2 avoids the types of flash that are most likely to cause seizure when viewed even for a second or two.

Success Criterion 2.3.1: Three Flashes or Below Threshold (Level A)
-------------------------------------------------------------------

From [Success Criterion 2.3.1](http://www.w3.org/TR/WCAG22/#three-flashes-or-below-threshold):

Additional Guidance When Applying Success Criterion 2.3.1 to Non-Web Documents and Software:
--------------------------------------------------------------------------------------------

This applies directly as written, and as described in [Intent from Understanding Success Criterion 2.3.1](http://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold#intent) (also provided below), replacing “Web pages” with “non-web documents or software” , “the whole page” with “the whole non-web document or software”, “the Web page” with “the non-web document or software”, and removing “See Conformance Requirement 5: Non-Interference”.

With these substitutions, it would read:

**2.3.1 Three Flashes or Below Threshold:**[Non-web documents](http://w3c.github.io/wcag2ict/#wcag2ict-def_document "WCAG2ICT Definition: Non-web documents") or [software](http://w3c.github.io/wcag2ict/#wcag2ict-def_software "WCAG2ICT Definition: software") do not contain anything that flashes more than three times in any one second period, or the [flash](http://www.w3.org/TR/WCAG22/#dfn-flashes "WCAG Definition: flash") is below the [general flash and red flash thresholds](http://www.w3.org/TR/WCAG22/#dfn-general-flash-and-red-flash-thresholds "WCAG Definition: general flash and red flash thresholds"). (Level A)

Since any content that does not meet this success criterion can interfere with a user's ability to use the whole [non-web document](http://w3c.github.io/wcag2ict/#wcag2ict-def_document "WCAG2ICT Definition: non-web document") or [software](http://w3c.github.io/wcag2ict/#wcag2ict-def_software "WCAG2ICT Definition: software"), all content on the [non-web document](http://w3c.github.io/wcag2ict/#wcag2ict-def_document "WCAG2ICT Definition: non-web document") or [software](http://w3c.github.io/wcag2ict/#wcag2ict-def_software "WCAG2ICT Definition: software") (whether it is used to meet other success criteria or not) must meet this success criterion.

Intent from [Understanding Success Criterion 2.3.1 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold#intent):

> The intent of this Success Criterion is to allow users to access the full content of a site without inducing seizures due to photosensitivity.
> 
> Individuals who have photosensitive seizure disorders can have a seizure triggered by content that flashes at certain frequencies for more than a few flashes. People are even more sensitive to red flashing than to other colors, so a special test is provided for saturated red flashing. These guidelines are based on guidelines for the broadcasting industry as adapted for computer screens, where content is viewed from a closer distance (using a larger angle of vision).
> 
> Flashing can be caused by the display, the computer rendering the image or by the content being rendered. The author has no control of the first two. They can be addressed by the design and speed of the display and computer. The intent of this criterion is to ensure that flicker that violates the flash thresholds is not caused by the content itself. For example, the content could contain a video clip or animated image of a series of strobe flashes, or close-ups of rapid-fire explosions.
> 
> This Success Criterion replaces a much more restrictive criterion in WCAG 1.0 that did not allow any flashing (even of a single pixel) within a broad frequency range (3 to 50 Hz). This Success Criterion is based on existing specifications in use in the UK and by others for television broadcast and has been adapted for computer display viewing. The 1024 x 768 screen is used as the reference screen resolution for the evaluation. The 341 x 256 pixel block represents a 10 degree viewport at a typical viewing distance. (The 10 degree field is taken from the original specifications and represents the central vision portion of the eye, where people are most susceptible to photo stimuli.)
> 
> The combined area of flashes occurring concurrently and contiguously means the total area that is actually flashing at the same time. It is calculated by adding up the contiguous area that is flashing simultaneously within any 10 degree angle of view.
> 
> _Note:_ The terms "blinking" and "flashing" can sometimes refer to the same content.
> 
> *   "Blinking" refers to content that causes a distraction problem. Blinking can be allowed for a short time as long as it stops (or can be stopped)
>     
> *   "Flashing" refers to content that can trigger a seizure (if it is more than 3 per second and large and bright enough). This cannot be allowed even for a second or it could cause a seizure. And turning the flash off is also not an option since the seizure could occur faster than most users could turn it off.
>     
> *   Blinking usually does not occur at speeds of 3 per second or more, but it can. If blinking occurs faster than 3 per second, it would also be considered a flash.
>     
> 
> ###### Specific Benefits of Success Criterion 2.3.1
> 
> *   Individuals who have seizures when viewing flashing material will be able to view all of the material on a site without having a seizure and without having to miss the full experience of the content by being limited to text alternatives. This includes people with photosensitive epilepsy as well as other photosensitive seizure disorders.
>     

Guideline 2.4: Navigable
------------------------

From [Guideline 2.4](http://www.w3.org/TR/WCAG22/#navigable):

> Provide ways to help users navigate, find content, and determine where they are.

Additional Guidance When Applying Guideline 2.4 to Non-Web Documents and Software:
----------------------------------------------------------------------------------

In WCAG 2.2, the Guidelines are provided for framing and understanding the success criteria under them but are not required for conformance to WCAG. Guideline 2.4 applies directly as written.

Intent from [Understanding Guideline 2.4 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/navigable#intent):

> The intent of this guideline is to help users find the content they need and allow them to keep track of their location. These tasks are often more difficult for people with disabilities. For finding, navigation, and orientation, it is important that the user can find out what the current location is. For navigation, information about the possible destinations needs to be available. Screen readers convert content to synthetic speech which, because it is audio, must be presented in linear order. Some Success Criteria in this guideline explain what provisions need to be taken to ensure that screen reader users can successfully navigate the content. Others allow users to more easily recognize navigation bars and page headers and to bypass this repeated content. Unusual user interface features or behaviors may confuse people with cognitive disabilities.
> 
> As described in The [Motive Web Design Glossary](http://www.motive.co.nz/glossary/navigation.php), navigation has two main functions:
> 
> *   to tell the user where they are
>     
> *   to enable the user to go somewhere else
>     
> 
> This guideline works closely with [Guideline 1.3](http://www.w3.org/TR/WCAG22/#adaptable), which ensures that any structure in the content can be perceived, a key to navigation as well. Headings are particularly important mechanisms for helping users orient themselves within content and navigate through it. Many users of assistive technologies rely on appropriate headings to skim through information and easily locate the different sections of content. Satisfying [Success Criterion 1.3.1](http://www.w3.org/TR/WCAG22/#info-and-relationships) for headings also addresses some aspects of Guideline 2.4.

Success Criterion 2.4.1: Bypass Blocks (Level A)
------------------------------------------------

From [Success Criterion 2.4.1](http://www.w3.org/TR/WCAG22/#bypass-blocks):

Additional Guidance When Applying Success Criterion 2.4.1 to Non-Web Documents and Software:
--------------------------------------------------------------------------------------------

This applies directly as written and described in [Intent from Understanding Success Criterion 2.4.1](http://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks#intent) (also provided below), replacing “Web pages” with “non-web documents in a set of non-web documents” or “software programs in a set of software programs” to explicitly state that the multiple documents (or software programs) are part of a set rather than any two documents or pieces of software.

With these substitutions, this success criterion would read:

(for non-web documents)

**2.4.1 Bypass Blocks:** A mechanism is available to bypass blocks of content that are repeated on multiple [non-web documents](http://w3c.github.io/wcag2ict/#wcag2ict-def_document "WCAG2ICT Definition: non-web documents") in a [set of non-web documents](http://w3c.github.io/wcag2ict/#wcag2ict-def_set-of-documents "WCAG2ICT Definition: set of non-web documents").

(for software programs)

**2.4.1 Bypass Blocks:** A mechanism is available to bypass blocks of content that are repeated on multiple [software programs](http://w3c.github.io/wcag2ict/#wcag2ict-def_software "WCAG2ICT Definition: software programs") in a [set of software programs](http://w3c.github.io/wcag2ict/#wcag2ict-def_set-of-software-programs "WCAG2ICT Definition: set of software programs").

: See [set of documents](http://w3c.github.io/wcag2ict/#wcag2ict-def_set-of-documents) and [set of software programs](http://w3c.github.io/wcag2ict/#wcag2ict-def_set-of-software-programs) in the Key Terms section of the Introduction to determine when a group of documents or pieces of software is considered a set for this success criterion. (Sets of software that meet this definition appear to be extremely rare.)

Individual documents or software programs (not in a set) would automatically meet this success criterion because this success criterion applies only to things that appear in a set.

Although not required by the success criterion, being able to bypass blocks of content that are repeated _within_ non-web documents or software directly addresses user needs identified in the Intent section for this Success Criterion, and is generally considered best practice.

Many software user interface components have built-in mechanisms to navigate directly to / among them, which also have the effect of skipping over or bypassing blocks of content.

Intent from [Understanding Success Criterion 2.4.1 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks#intent):

> The intent of this Success Criterion is to allow people who navigate sequentially through content more direct access to the primary content of the Web page. Web pages and applications often have content that appears on other pages or screens. Examples of repeated blocks of content include but are not limited to navigation links, heading graphics, and advertising frames. Small repeated sections such as individual words, phrases or single links are not considered blocks for the purposes of this provision.
> 
> This is in contrast to a sighted user's ability to ignore the repeated material either by focusing on the center of the screen (where main content usually appears) or a mouse user's ability to select a link with a single mouse click rather than encountering every link or form control that comes before the item they want.
> 
> It is not the intent of this Success Criterion to require authors to provide methods that are redundant to functionality provided by the user agent. Most web browsers provide keyboard shortcuts to move the user focus to the top of the page, so if a set of navigation links is provided at the bottom of a web page providing a "skip" link may be unnecessary.
> 
> _Note:_ Although this Success Criterion deals with blocks of content that are repeated on multiple pages, we also strongly promote structural markup on individual pages as per Success Criteria 1.3.1.
> 
> Although the success criterion does not specifically use the term “within a set of web pages”, the concept of the pages belonging to a set is implied. An author would not be expected to avoid any possible duplication of content in any two pages that are not in some way related to each other; that are not "Web pages that share a common purpose and that are created by the same author, group or organization” (the definition of set of web pages).
> 
> _Note:_ Even for web pages that are not in a set, if a web page has blocks of text that are repeated within the page it may be helpful (but not required) to provide a means to skip over them.
> 
> ###### Specific Benefits of Success Criterion 2.4.1
> 
> *   When this Success Criterion is not satisfied, it may be difficult for people with some disabilities to reach the main content of a Web page quickly and easily.
>     
> *   Screen reader users who visit several pages on the same site can avoid having to hear all heading graphics and dozens of navigation links on every page before the main content is spoken.
>     
> *   People who use only the keyboard or a keyboard interface can reach content with fewer keystrokes. Otherwise, they might have to make dozens of keystrokes before reaching a link in the main content area. This can take a long time and may cause severe physical pain for some users.
>     
> *   People who use screen magnifiers do not have to search through the same headings or other blocks of information to find where the content begins each time they enter a new page.
>     
> *   People with cognitive limitations as well as people who use screen readers may benefit when links are grouped into lists
>     

Success Criterion 2.4.2: Page Titled (Level A)
----------------------------------------------

From [Success Criterion 2.4.2](http://www.w3.org/TR/WCAG22/#page-titled):

Additional Guidance When Applying Success Criterion 2.4.2 to Non-Web Documents and Software:
--------------------------------------------------------------------------------------------

This applies directly as written, and as described in [Intent from Understanding Success Criterion 2.4.2](http://www.w3.org/WAI/WCAG22/Understanding/page-titled#intent) (also provided below) replacing “Web pages” with “non-web documents or software”.

With this substitution, it would read:

**2.4.2 Page Titled:**[Non-web documents](http://w3c.github.io/wcag2ict/#wcag2ict-def_document "WCAG2ICT Definition: Non-web documents") or [software](http://w3c.github.io/wcag2ict/#wcag2ict-def_software "WCAG2ICT Definition: software") have titles that describe topic or purpose. (Level A)

As described in the WCAG intent (also provided below), the name of a [non-web software application](http://w3c.github.io/wcag2ict/#wcag2ict-def_software) or [non-web document](http://w3c.github.io/wcag2ict/#wcag2ict-def_document) (e.g. document, media file, etc.) is a sufficient title if it describes the topic or purpose.

See also the discussion on [Closed Functionality](http://w3c.github.io/wcag2ict/#closed-functionality).

Intent from [Understanding Success Criterion 2.4.2 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/page-titled#intent):

> The intent of this Success Criterion is to help users find content and orient themselves within it by ensuring that each Web page has a descriptive title. Titles identify the current location without requiring users to read or interpret page content. When titles appear in site maps or lists of search results, users can more quickly identify the content they need. User agents make the title of the page easily available to the user for identifying the page. For instance, a user agent may display the page title in the window title bar or as the name of the tab containing the page.
> 
> In cases where the page is a document or a web application, the name of the document or web application would be sufficient to describe the purpose of the page. Note that it is not required to use the name of the document or web application; other things may also describe the purpose or the topic of the page.
> 
> [Success Criteria 2.4.4](http://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context) and [2.4.9](http://www.w3.org/WAI/WCAG22/Understanding/link-purpose-link-only) deal with the purpose of links, many of which are links to web pages. Here also, the name of a document or web application being linked to would be sufficient to describe the purpose of the link. Having the link and the title agree, or be very similar, is good practice and provides continuity between the link 'clicked on' and the web page that the user lands on.
> 
> ###### Specific Benefits of Success Criterion 2.4.2
> 
> *   This criterion benefits all users in allowing users to quickly and easily identify whether the information contained in the Web page is relevant to their needs.
>     
> *   People with visual disabilities will benefit from being able to differentiate content when multiple Web pages are open.
>     
> *   People with cognitive disabilities, limited short-term memory and reading disabilities also benefit from the ability to identify content by its title.
>     
> *   This criterion also benefits people with severe mobility impairments whose mode of operation relies on audio when navigating between Web pages.
>     

Success Criterion 2.4.3: Focus Order (Level A)
----------------------------------------------

From [Success Criterion 2.4.3](http://www.w3.org/TR/WCAG22/#focus-order):

Additional Guidance When Applying Success Criterion 2.4.3 to Non-Web Documents and Software:
--------------------------------------------------------------------------------------------

This applies directly as written, and as described in [Intent from Understanding Success Criterion 2.4.3](http://www.w3.org/WAI/WCAG22/Understanding/focus-order#intent) (also provided below) replacing “a Web page” with “non-web documents or software”.

With this substitution, it would read:

**2.4.3 Focus Order:** If [non-web documents](http://w3c.github.io/wcag2ict/#wcag2ict-def_document "WCAG2ICT Definition: non-web documents") or [software](http://w3c.github.io/wcag2ict/#wcag2ict-def_software "WCAG2ICT Definition: software") can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability. (Level A)

Intent from [Understanding Success Criterion 2.4.3 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/focus-order#intent):

> The intent of this Success Criterion is to ensure that when users navigate sequentially through content, they encounter information in an order that is consistent with the meaning of the content and can be operated from the keyboard. This reduces confusion by letting users form a consistent mental model of the content. There may be different orders that reflect logical relationships in the content. For example, moving through components in a table one row at a time or one column at a time both reflect the logical relationships in the content. Either order may satisfy this Success Criterion.
> 
> The way that sequential navigation order is determined in Web content is defined by the technology of the content. For example, simple HTML defines sequential navigation via the notion of tabbing order. Dynamic HTML may modify the navigation sequence using scripting along with the addition of a tabindex attribute to allow focus to additional elements. If no scripting or tabindex attributes are used, the navigation order is the order that components appear in the content stream. (See HTML 4.01 Specification, section 17.11, "Giving focus to an element").
> 
> An example of keyboard navigation that is not the sequential navigation addressed by this Success Criterion is using arrow key navigation to traverse a tree component. The user can use the up and down arrow keys to move from tree node to tree node. Pressing the right arrow key may expand a node, then using the down arrow key, will move into the newly expanded nodes. This navigation sequence follows the expected sequence for a tree control - as additional items get expanded or collapsed, they are added or removed from the navigation sequence.
> 
> The focus order may not be identical to the programmatically determined reading order (see Success Criterion 1.3.2) as long as the user can still understand and operate the Web page. Since there may be several possible logical reading orders for the content, the focus order may match any of them. However, when the order of a particular presentation differs from the programmatically determined reading order, users of one of these presentations may find it difficult to understand or operate the Web page. Authors should carefully consider all these users as they design their Web pages.
> 
> For example, a screen reader user interacts with the programmatically determined reading order, while a sighted keyboard user interacts with the visual presentation of the Web page. Care should be taken so that the focus order makes sense to both of these sets of users and does not appear to either of them to jump around randomly.
> 
> For clarity:
> 
> 1.  Focusable components need to receive focus in an order that preserves meaning and operability only when navigation sequences affect meaning and operability.
>     
> 2.  In those cases where it is required, there may be more than one order that will preserve meaning and operability.
>     
> 3.  If there is more than one order that preserves meaning and operability, only one of them needs to be provided.
>     
> 
> ###### Specific Benefits of Success Criterion 2.4.3
> 
> These techniques benefit keyboard users who navigate documents sequentially and expect the focus order to be consistent with the sequential reading order.
> 
> *   People with mobility impairments who must rely on keyboard access for operating a page benefit from a logical, usable focus order.
>     
> *   People with disabilities that make reading difficult can become disoriented when tabbing takes focus someplace unexpected. They benefit from a logical focus order.
>     
> *   People with visual impairments can become disoriented when tabbing takes focus someplace unexpected or when they cannot easily find the content surrounding an interactive element.
>     
> *   Only a small portion of the page may be visible to an individual using a screen magnifier at a high level of magnification. Such a user may interpret a field in the wrong context if the focus order is not logical.
>     

Success Criterion 2.4.4: Link Purpose (In Context) (Level A)
------------------------------------------------------------

From [Success Criterion 2.4.4](http://www.w3.org/TR/WCAG22/#link-purpose-in-context):

Additional Guidance When Applying Success Criterion 2.4.4 to Non-Web Documents and Software:
--------------------------------------------------------------------------------------------

This applies directly as written and as described in [Intent from Understanding Success Criterion 2.4.4](http://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context#intent) (also provided below), replacing both “web page” and “page” with “non-web documents and software” in the Intent from Understanding Success Criterion 2.4.4.

In software, a “link” is any text string or image in the user interface outside a user interface control that behaves like a hypertext link. This does not include general user interface controls or buttons. (An OK button, for example, would not be a link.)

Intent from [Understanding Success Criterion 2.4.4 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context#intent):

> The intent of this Success Criterion is to help users understand the purpose of each link so they can decide whether they want to follow the link. Whenever possible, provide link text that identifies the purpose of the link without needing additional context. Assistive technology has the ability to provide users with a list of links that are on the Web page. Link text that is as meaningful as possible will aid users who want to choose from this list of links. Meaningful link text also helps those who wish to tab from link to link. Meaningful links help users choose which links to follow without requiring complicated strategies to understand the page.
> 
> The text of, or associated with, the link is intended to describe the purpose of the link. In cases where the link takes one to a document or a web application, the name of the document or web application would be sufficient to describe the purpose of the link (which is to take you to the document or web application). Note that it is not required to use the name of the document or web application; other things may also describe the purpose of the link.
> 
> [Success Criterion 2.4.2](http://www.w3.org/WAI/WCAG22/Understanding/page-titled) deals with the titles of pages. Here also, the name of a document or web application being presented on the page would be sufficient to describe the purpose of the page. Having the link and the title agree, or be very similar, is good practice and provides continuity between the link 'clicked on' and the web page that the user lands on.
> 
> In some situations, authors may want to provide part of the description of the link in logically related text that provides the context for the link. In this case the user should be able to identify the purpose of the link without moving focus from the link. In other words, they can arrive on a link and find out more about it without losing their place. This can be achieved by putting the description of the link in the same sentence, paragraph, list item, the heading immediately preceding the link, or table cell as the link, or in the table header cell for a link in a data table, because these are directly associated with the link itself.
> 
> This context will be most usable if it precedes the link. (For instance, if you must use ambiguous link text, it is better to put it at the end of the sentence that describes its destination, rather than putting the ambiguous phrase at the beginning of the sentence.) If the description follows the link, there can be confusion and difficulty for screen reader users who are reading through the page in order (top to bottom).
> 
> Links with the same destination should have the same descriptions (per [Success Criterion 3.2.4](http://www.w3.org/TR/WCAG22/#consistent-identification)), but links with different purposes and destinations should have different descriptions.
> 
> The Success Criterion includes an exception for links for which the purpose of the link cannot be determined from the information on the Web page. In this situation, the person with the disability is not at a disadvantage; there is no additional context available to understand the link purpose. However, whatever amount of context is available on the Web page that can be used to interpret the purpose of the link must be made available in the link text or programmatically associated with the link to satisfy the Success Criterion.
> 
> _Note:_ There may be situations where the purpose of the link is is supposed to be unknown or obscured. For instance, a game may have links identified only as door #1, door #2, and door #3. This link text would be sufficient because the purpose of the links is to create suspense for all users.
> 
> See also _[Understanding Success Criterion 2.4.9 Link Purpose (Link Only)](http://www.w3.org/WAI/WCAG22/Understanding/link-purpose-link-only)_.
> 
> ###### Specific Benefits of Success Criterion 2.4.4
> 
> *   This Success Criterion helps people with motion impairment by letting them skip links that they are not interested in, avoiding the keystrokes needed to visit the referenced content and then returning to the current content.
>     
> *   People with cognitive limitations will not become disoriented by multiple means of navigation to and from content they are not interested in.
>     
> *   People with visual disabilities will be able to determine the purpose of a link by exploring the link's context.
>     

Success Criterion 2.4.5: Multiple Ways (Level AA)
-------------------------------------------------

From [Success Criterion 2.4.5](http://www.w3.org/TR/WCAG22/#multiple-ways):

Additional Guidance When Applying Success Criterion 2.4.5 to Non-Web Documents and Software:
--------------------------------------------------------------------------------------------

This applies directly as written and described in [Intent from Understanding Success Criterion 2.4.5](http://www.w3.org/WAI/WCAG22/Understanding/multiple-ways#intent) (also provided below), replacing “Web page(s)” with “non-web document(s)” and “software program(s)”.

With these substitutions, this success criterion would read:

(for non-web documents)

**2.4.5 Multiple Ways:** More than one way is available to locate a [non-web document](http://w3c.github.io/wcag2ict/#wcag2ict-def_document "WCAG2ICT Definition: non-web document") within a [set of non-web documents](http://w3c.github.io/wcag2ict/#wcag2ict-def_set-of-documents "WCAG2ICT Definition: set of non-web documents") except where the [non-web document](http://w3c.github.io/wcag2ict/#wcag2ict-def_document "WCAG2ICT Definition: non-web document") is the result of, or a step in, a process.

(for software programs)

**2.4.5 Multiple Ways:** More than one way is available to locate a [software program](http://w3c.github.io/wcag2ict/#wcag2ict-def_software "WCAG2ICT Definition: software program") within a [set of software programs](http://w3c.github.io/wcag2ict/#wcag2ict-def_set-of-software-programs "WCAG2ICT Definition: set of software programs") except where the [software program](http://w3c.github.io/wcag2ict/#wcag2ict-def_software "WCAG2ICT Definition: software program") is the result of, or a step in, a process.

: See [set of documents](http://w3c.github.io/wcag2ict/#wcag2ict-def_set-of-documents) and [set of software programs](http://w3c.github.io/wcag2ict/#wcag2ict-def_set-of-software-programs) in the Key Terms section of the Introduction to determine when a group of documents or software is considered a set for this success criterion. (Sets of software that meet this definition appear to be extremely rare.).

The definitions of “[set of documents](http://w3c.github.io/wcag2ict/#wcag2ict-def_set-of-documents)” and “[set of software programs](http://w3c.github.io/wcag2ict/#wcag2ict-def_set-of-software-programs)” in the Key Terms section if the Introduction are predicated on the ability to navigate from each element of the set to each other, and navigation is a type of locating. So the mechanism used to navigate between elements of the set will be one way of locating information in the set. Non-web environments, generally major operating systems with browse and search capabilities, often provide infrastructure and tools that provide mechanisms for locating content in a set of non-web documents or a set of software programs. For example, it may be possible to browse through the files or programs that make up a set, or search within members of the set for the names of other members. A file directory would be the equivalent of a site map for documents in a set, and a search function in a file system would be equivalent to a web search function for web pages. Such facilities may provide additional ways of locating information in the set.

An example of the use of “a software program that is part of process”, that would meet the exception for this Success Criterion, would be one where programs are interlinked but the interlinking depends on program A being used before program B, for validation or to initialize the dataset etc.

While some users may find it useful to have multiple ways to locate some groups of user interface elements within a document or software program, this is not required by the success criterion (and may pose difficulties in some situations).

The definitions of “[set of documents](http://w3c.github.io/wcag2ict/#wcag2ict-def_-documents)” and “[set of software programs](http://w3c.github.io/wcag2ict/#wcag2ict-def_set-of-software-programs)” in WCAG2ICT require every item in the set to be independently reachable, and so nothing in such a set can be a “step in a process” that can't be reached any other way. The purpose of the exception—that items in a process are exempt from meeting this success criterion—is achieved by the definition of set.

Intent from [Understanding Success Criterion 2.4.5 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/multiple-ways#intent):

> The intent of this Success Criterion is to make it possible for users to locate content in a manner that best meets their needs. Users may find one technique easier or more comprehensible to use than another.
> 
> Even small sites should provide users some means of orientation. For a three or four page site, with all pages linked from the home page, it may be sufficient simply to provide links from and to the home page where the links on the home page can also serve as a site map.
> 
> ###### Specific Benefits of Success Criterion 2.4.5
> 
> *   Providing an opportunity to navigate sites in more than one manner can help people find information faster. Users with visual impairments may find it easier to navigate to the correct part of the site by using a search, rather than scrolling through a large navigation bar using a screen magnifier or screen reader. A person with cognitive disabilities may prefer a table of contents or site map that provides an overview of the site rather than reading and traversing through several Web pages. Some users may prefer to explore the site in a sequential manner, moving from Web page to Web page in order to best understand the concepts and layout.
>     
> *   Individuals with cognitive limitations may find it easier to use search features than to use a hierarchical navigation scheme that be difficult to understand.
>     

Success Criterion 2.4.6: Headings and Labels (Level AA)
-------------------------------------------------------

From [Success Criterion 2.4.6](http://www.w3.org/TR/WCAG22/#headings-and-labels):

Additional Guidance When Applying Success Criterion 2.4.6 to Non-Web Documents and Software:
--------------------------------------------------------------------------------------------

This applies directly as written, and as described in [Intent from Understanding Success Criterion 2.4.6](http://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels#intent) (also provided below).

In [software](http://w3c.github.io/wcag2ict/#wcag2ict-def_software), headings and labels are used to describe sections of [content](http://w3c.github.io/wcag2ict/#wcag2ict-def_content) and controls respectively. In some cases it may be unclear whether a piece of static text is a heading or a label. But whether treated as a label or a heading, the requirement is the same: that if they are present they describe the topic or purpose of the item(s) they are associated with.

Intent from [Understanding Success Criterion 2.4.6 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels#intent):

> The intent of this Success Criterion is to help users understand what information is contained in Web pages and how that information is organized. When headings are clear and descriptive, users can find the information they seek more easily, and they can understand the relationships between different parts of the content more easily. Descriptive labels help users identify specific components within the content.
> 
> Labels and headings do not need to be lengthy. A word, or even a single character, may suffice if it provides an appropriate cue to finding and navigating content.
> 
> _Note:_ This success criterion does not require headings or labels. This success criterion requires that if headings or labels are provided, they be descriptive. Also note that, if headings or labels are provided, they must meet _[Understanding Success Criterion 1.3.1 Info and Relationships](http://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)_.
> 
> ###### Specific Benefits of Success Criterion 2.4.6
> 
> *   Descriptive headings are especially helpful for users who have disabilities that make reading slow and for people with limited short-term memory. These people benefit when section titles make it possible to predict what each section contains.
>     
> *   People who have difficulty using their hands or who experience pain when doing so will benefit from techniques that reduce the number of keystrokes required to reach the content they need.
>     
> *   This Success Criterion helps people who use screen readers by ensuring that labels and headings are meaningful when read out of context, for example, in a Table of Contents, or when jumping from heading to heading within a page.
>     
>     This Success Criterion may also help users with low vision who can see only a few words at a time.
>     

Success Criterion 2.4.7: Focus Visible (Level AA)
-------------------------------------------------

From [Success Criterion 2.4.7](http://www.w3.org/TR/WCAG22/#focus-visible):

Additional Guidance When Applying Success Criterion 2.4.7 to Non-Web Documents and Software:
--------------------------------------------------------------------------------------------

This applies directly as written, and as described in [Intent from Understanding Success Criterion 2.4.7](http://www.w3.org/WAI/WCAG22/Understanding/focus-visible#intent) (also provided below).

Intent from [Understanding Success Criterion 2.4.7 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/focus-visible#intent):

> The purpose of this success criterion is to help a person know which element has the keyboard focus.
> 
> The purpose of this success criterion is to help a person know which element among multiple elements has the keyboard focus. If there is only one keyboard actionable control on the screen, the success criterion would be met because the visual design presents only one keyboard actionable item.
> 
> Note that a keyboard focus indicator can take different forms. One common way is a caret within the text field to indicate that the text field has the keyboard focus. Another is a visual change to a button to indicate that that button has the keyboard focus.
> 
> ###### Specific Benefits of Success Criterion 2.4.7
> 
> *   This Success Criterion helps anyone who relies on the keyboard to operate the page, by letting them visually determine the component on which keyboard operations will interact at any point in time.
>     
> *   People with attention limitations, short term memory limitations, or limitations in executive processes benefit by being able to discover where the focus is located.
>     

Principle 3: Understandable
---------------------------

From [Principle 3](http://www.w3.org/TR/WCAG22/#understandable):

> Information and the operation of user interface must be understandable.

Additional Guidance When Applying Principle 3 to Non-Web Documents and Software:
--------------------------------------------------------------------------------

In WCAG 2.2, the Principles are provided for framing and understanding the success criteria under them but are not required for conformance to WCAG. Principle 3 applies directly as written.

Guideline 3.1: Readable
-----------------------

From [Guideline 3.1](http://www.w3.org/TR/WCAG22/#readable):

> Make text content readable and understandable.

Additional Guidance When Applying Guideline 3.1 to Non-Web Documents and Software:
----------------------------------------------------------------------------------

In WCAG 2.2, the Guidelines are provided for framing and understanding the success criteria under them but are not required for conformance to WCAG. Guideline 3.1 applies directly as written.

Intent from [Understanding Guideline 3.1 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/readable#intent):

> The intent of this guideline is to allow text content to be read by users and by assistive technology, and to ensure that information necessary for understanding it is available.
> 
> People with disabilities experience text in many different ways. For some the experience is visual; for some it is auditory; for some it is tactile; for still others it is both visual and auditory. Some users experience great difficulty in recognizing written words yet understand extremely complex and sophisticated documents when the text is read aloud, or when key processes and ideas are illustrated visually or interpreted as sign language. For some users, it is difficult to infer the meaning of a word or phrase from context, especially when the word or phrase is used in an unusual way or has been given a specialized meaning; for these users the ability to read and understand may depend on the availability of specific definitions or the expanded forms of acronyms or abbreviations. User agents, including speech-enabled as well as graphical applications, may be unable to present text correctly unless the language and direction of the text are identified; while these may be minor problems for most users, they can be enormous barriers for users with disabilities. In cases where meaning cannot be determined without pronunciation information (for example, certain Japanese Kanji characters), pronunciation information must be available as well

Success Criterion 3.1.1: Language of Page (Level A)
---------------------------------------------------

From [Success Criterion 3.1.1](http://www.w3.org/TR/WCAG22/#language-of-page):

Additional Guidance When Applying Success Criterion 3.1.1 to Non-Web Documents and Software:
--------------------------------------------------------------------------------------------

This applies directly as written, and as described in [Intent from Understanding Success Criterion 3.1.1](http://www.w3.org/WAI/WCAG22/Understanding/language-of-page#intent) (also provided below) replacing “each web page” with non-web documents or software.

With these substitutions, it would read:

**3.1.1 Language of Page:** The default [human language](http://www.w3.org/TR/WCAG22/#dfn-human-language-s "WCAG Definition: human language") of [non-web documents](http://w3c.github.io/wcag2ict/#wcag2ict-def_document "WCAG2ICT Definition: non-web documents") or [software](http://w3c.github.io/wcag2ict/#wcag2ict-def_software "WCAG2ICT Definition: software") can be [programmatically determined](http://www.w3.org/TR/WCAG22/#dfn-programmatically-determinable "WCAG Definition: programmatically determined"). (Level A)

Where software platforms provide a “locale / language” setting, applications that use that setting and render their interface in that “locale / language” would comply with this success criterion. Applications that do not use the platform “locale / language” setting but instead use an [accessibility-supported](http://w3c.github.io/wcag2ict/#wcag2ict-def_accessibility-supported) method for exposing the human language of the [software](http://w3c.github.io/wcag2ict/#wcag2ict-def_software) would also comply with this success criterion. Applications implemented in technologies where [assistive technologies](http://w3c.github.io/wcag2ict/#wcag2ict-def_at) cannot determine the human language and that do not support the platform “locale / language” setting may not be able to meet this success criterion in that locale / language.

See also the discussion on [Closed Functionality](http://w3c.github.io/wcag2ict/#closed-functionality).

Intent from [Understanding Success Criterion 3.1.1 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/language-of-page#intent):

> The intent of this Success Criterion is to ensure that content developers provide information in the Web page that user agents need to present text and other linguistic content correctly. Both assistive technologies and conventional user agents can render text more accurately when the language of the Web page is identified. Screen readers can load the correct pronunciation rules. Visual browsers can display characters and scripts correctly. Media players can show captions correctly. As a result, users with disabilities will be better able to understand the content.
> 
> The default human language of the Web page is the default text-processing language as discussed in [Internationalization Best Practices: Specifying Language in XHTML & HTML Content](http://www.w3.org/TR/i18n-html-tech-lang/). When a Web page uses several languages, the default text-processing language is the language which is used most. (If several languages are used equally, the first language used should be chosen as the default human language.)
> 
> _Note:_ For multilingual sites targeting Conformance Level A, the Working Group strongly encourages developers to follow Success Criterion 3.1.2 as well even though that is a Level AA Success Criterion.
> 
> ###### Specific Benefits of Success Criterion 3.1.1
> 
> This Success Criterion helps:
> 
> *   people who use screen readers or other technologies that convert text into synthetic speech;
>     
> *   people who find it difficult to read written material with fluency and accuracy, such as recognizing characters and alphabets or decoding words;
>     
> *   people with certain cognitive, language and learning disabilities who use text-to-speech software
>     
> *   people who rely on captions for synchronized media.
>     

Success Criterion 3.1.2: Language of Parts (Level AA)
-----------------------------------------------------

From [Success Criterion 3.1.2](http://www.w3.org/TR/WCAG22/#language-of-parts):

Additional Guidance When Applying Success Criterion 3.1.2 to Non-Web Documents and Software:
--------------------------------------------------------------------------------------------

This applies directly as written, and as described in [Intent from Understanding Success Criterion 3.1.2](http://www.w3.org/WAI/WCAG22/Understanding/language-of-parts#intent) (also provided below) replacing “content” with “non-web document or software”.

With these substitutions, it would read:

**3.1.2 Language of Parts:** The [human language](http://www.w3.org/TR/WCAG22/#dfn-human-language-s "WCAG Definition: human language") of each passage or phrase in the [non-web document](http://w3c.github.io/wcag2ict/#wcag2ict-def_document "WCAG2ICT Definition: non-web document") or [software](http://w3c.github.io/wcag2ict/#wcag2ict-def_software "WCAG2ICT Definition: software") can be [programmatically determined](http://w3c.github.io/wcag2ict/#wcag2ict-def_programmaticallydetermined "WCAG Definition: programmatically determined") except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text. (Level AA)

There are some [software](http://w3c.github.io/wcag2ict/#wcag2ict-def_software) and [non-web document](http://w3c.github.io/wcag2ict/#wcag2ict-def_document) technologies where there is no assistive technology supported method for marking the language for the different passages or phrases in the [non-web document](http://w3c.github.io/wcag2ict/#wcag2ict-def_document) or software, and it would not be possible to meet this success criterion with those technologies.

See also the discussion on [Closed Functionality](http://w3c.github.io/wcag2ict/#closed-functionality).

Intent from [Understanding Success Criterion 3.1.2 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/language-of-parts#intent):

> The intent of this Success Criterion is to ensure that user agents can correctly present content written in multiple languages. This makes it possible for user agents and assistive technologies to present content according to the presentation and pronunciation rules for that language. This applies to graphical browsers as well as screen readers, braille displays, and other voice browsers.
> 
> Both assistive technologies and conventional user agents can render text more accurately if the language of each passage of text is identified. Screen readers can use the pronunciation rules of the language of the text. Visual browsers can display characters and scripts in appropriate ways. This is especially important when switching between languages that read from left to right and languages that read from right to left, or when text is rendered in a language that uses a different alphabet. Users with disabilities who know all the languages used in the Web page will be better able to understand the content when each passage is rendered appropriately.
> 
> When no other language has been specified for a phrase or passage of text, its human language is the default human language of the Web page (see Success Criterion 3.1.1). So the human language of all content in single language documents can be programmatically determined.
> 
> Individual words or phrases in one language can become part of another language. For example, "rendezvous" is a French word that has been adopted in English, appears in English dictionaries, and is properly pronounced by English screen readers. Hence a passage of English text may contain the word "rendezvous" without specifying that its human language is French and still satisfy this Success Criterion. Frequently, when the human language of text appears to be changing for a single word, that word has become part of the language of the surrounding text. Because this is so common in some languages, single words should be considered part of the language of the surrounding text unless it is clear that a change in language was intended. If there is doubt whether a change in language is intended, consider whether the word would be pronounced the same (except for accent or intonation) in the language of the immediately surrounding text.
> 
> Most professions require frequent use of technical terms which may originate from a foreign language. Such terms are usually not translated to all languages. The universal nature of technical terms also facilitate communication between professionals.
> 
> Some common examples of technical terms include: Homo sapiens, Alpha Centauri, hertz, and habeas corpus.
> 
> Identifying changes in language is important for a number of reasons:
> 
> *   It allows braille translation software to follow changes in language, e.g., substitute control codes for accented characters, and insert control codes necessary to prevent erroneous creation of Grade 2 braille contractions.
>     
> *   Speech synthesizers that support multiple languages will be able to speak the text in the appropriate accent with proper pronunciation. If changes are not marked, the synthesizer will try its best to speak the words in the default language it works in. Thus, the French word for car, "voiture" would be pronounced "voyture" by a speech synthesizer that uses English as its default language.
>     
> *   Marking changes in language can benefit future developments in technology, for example users who are unable to translate between languages themselves will be able to use machines to translate unfamiliar languages.
>     
> *   Marking changes in language can also assist user agents in providing definitions using a dictionary.
>     
> 
> ###### Specific Benefits of Success Criterion 3.1.2
> 
> This Success Criterion helps:
> 
> *   people who use screen readers or other technologies that convert text into synthetic speech;
>     
> *   people who find it difficult to read written material with fluency and accuracy, such as recognizing characters and alphabets, decoding words, and understanding words and phrases;
>     
> *   people with certain cognitive, language and learning disabilities who use text-to-speech software;
>     
> *   people who rely on captions to recognize language changes in the soundtrack of synchronized media content.
>     

Guideline 3.2: Predictable
--------------------------

From [Guideline 3.2](http://www.w3.org/TR/WCAG22/#predictable):

> Make Web pages appear and operate in predictable ways.

Additional Guidance When Applying Guideline 3.2 to Non-Web Documents and Software:
----------------------------------------------------------------------------------

In WCAG 2.2, the Guidelines are provided for framing and understanding the success criteria under them but are not required for conformance to WCAG. Guideline 3.2 applies directly as written, replacing “web pages” with “non-web documents or software”.

With this substitution, this guideline would read:

Guideline 3.2 Predictable: Make [non-web documents](http://w3c.github.io/wcag2ict/#wcag2ict-def_document "WCAG2ICT Definition: non-web documents") or [software](http://w3c.github.io/wcag2ict/#wcag2ict-def_software "WCAG2ICT Definition: software") appear and operate in predictable ways.

Intent from [Understanding Guideline 3.2 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/predictable#intent):

> The intent of this Guideline is to help users with disabilities by presenting content in a predictable order from Web page to Web page and by making the behavior of functional and interactive components predictable. It is difficult for some users to form an overview of the Web page: screen readers present content as a one-dimensional stream of synthetic speech that makes it difficult to understand spatial relationships. Users with cognitive limitations may become confused if components appear in different places on different pages.
> 
> For example, people who use screen magnifiers see only part of the screen at any point in time; a consistent layout makes it easier for them to find navigation bars and other components. Placing repeated components in the same relative order within a set of Web pages allows users with reading disabilities to focus on an area of the screen rather than spending additional time decoding the text of each link. Users with limited use of their hands can more easily determine how to complete their tasks using the fewest keystrokes.

Success Criterion 3.2.1: On Focus (Level A)
-------------------------------------------

From [Success Criterion 3.2.1](http://www.w3.org/TR/WCAG22/#on-focus):

Additional Guidance When Applying Success Criterion 3.2.1 to Non-Web Documents and Software:
--------------------------------------------------------------------------------------------

This applies directly as written, and as described in [Intent from Understanding Success Criterion 3.2.1](http://www.w3.org/WAI/WCAG22/Understanding/on-focus#intent) (also provided below).

Some compound documents and their user agents are designed to provide significantly different viewing and editing functionality depending upon what portion of the compound document is being interacted with (e.g. a presentation that contains an embedded spreadsheet, where the menus and toolbars of the user agent change depending upon whether the user is interacting with the presentation content, or the embedded spreadsheet content). If the user uses a mechanism other than putting focus on that portion of the compound document with which they mean to interact (e.g. by a menu choice or special keyboard gesture), any resulting [change of context](http://w3c.github.io/wcag2ict/#wcag2ict-def_context-change "WCAG2ICT Definition: change of context") wouldn't be subject to this success criterion because it was not caused by a change of focus.

Intent from [Understanding Success Criterion 3.2.1 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/on-focus#intent):

> The intent of this Success Criterion is to ensure that functionality is predictable as visitors navigate their way through a document. Any component that is able to trigger an event when it receives focus must not change the context. Examples of changing context when a component receives focus include, but are not limited to:
> 
> *   forms submitted automatically when a component receives focus;
>     
> *   new windows launched when a component receives focus;
>     
> *   focus is changed to another component when that component receives focus;
>     
> 
> Focus may be moved to a control either via the keyboard (e.g. tabbing to a control) or the mouse (e.g. clicking on a text field). Moving the mouse over a control does not move the focus unless scripting implements this behavior. Note that for some types of controls, clicking on a control may also activate the control (e.g. button), which may, in turn, initiate a change in context.
> 
> _Note:_ What is meant by "component" here is also sometimes called "user interface element" or "user interface component''.
> 
> ###### Specific Benefits of Success Criterion 3.2.1
> 
> *   This Success Criterion helps people with visual disabilities, cognitive limitations, and motor impairments by reducing the chance that a change of context will occur unexpectedly.
>     

Success Criterion 3.2.2: On Input (Level A)
-------------------------------------------

From [Success Criterion 3.2.2](http://www.w3.org/TR/WCAG22/#on-input):

Additional Guidance When Applying Success Criterion 3.2.2 to Non-Web Documents and Software:
--------------------------------------------------------------------------------------------

This applies directly as written, and as described in [Intent from Understanding Success Criterion 3.2.2](http://www.w3.org/WAI/WCAG22/Understanding/on-input#intent) (also provided below).

Intent from [Understanding Success Criterion 3.2.2 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/on-input#intent):

> The intent of this Success Criterion is to ensure that entering data or selecting a form control has predictable effects. Changing the setting of any user interface component is changing some state in the control that will persist when the user is no longer interacting with it. So checking a checkbox or entering text into a text field changes its setting, but activating a link or a button does not. Changes in context can confuse users who do not easily perceive the change or are easily distracted by changes. Changes of context are appropriate only when it is clear that such a change will happen in response to the user's action.
> 
> _Note:_ This Success Criterion covers changes in context due to changing the setting of a control. Clicking on links or tabs in a tab control is activating the control, not changing the setting of that control.
> 
> _Note:_ What is meant by "component" and "user interface component" here is also sometimes called "user interface element".
> 
> ###### Specific Benefits of Success Criterion 3.2.2
> 
> *   This Success Criterion helps users with disabilities by making interactive content more predictable. Unexpected changes of context can be so disorienting for users with visual disabilities or cognitive limitations that they are unable to use the content.
>     
> *   Individuals who are unable to detect changes of context are less likely to become disoriented while navigating a site. For example:
>     
>     *   Individuals who are blind or have low vision may have difficulty knowing when a visual context change has occurred, such as a new window popping up. In this case, warning users of context changes in advance minimizes confusion when the user discovers that the back button no longer behaves as expected.
>         
> *   Some individuals with low vision, with reading and intellectual disabilities, and others who have difficulty interpreting visual cues may benefit from additional cues in order to detect changes of context.
>     

Success Criterion 3.2.3: Consistent Navigation (Level AA)
---------------------------------------------------------

From [Success Criterion 3.2.3](http://www.w3.org/TR/WCAG22/#consistent-navigation):

Additional Guidance When Applying Success Criterion 3.2.3 to Non-Web Documents and Software:
--------------------------------------------------------------------------------------------

This applies directly as written and described in [Intent from Understanding Success Criterion 3.2.3](http://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation#intent) (also provided below), replacing “web pages” with “non-web documents” and “software programs”.

With these substitutions, this success criterion would read:

(for non-web documents)

**3.2.3 Consistent Navigation:** Navigational mechanisms that are repeated on multiple [non-web documents](http://w3c.github.io/wcag2ict/#wcag2ict-def_document "WCAG2ICT Definition: non-web documents") within a [set of non-web documents](http://w3c.github.io/wcag2ict/#wcag2ict-def_set-of-documents "WCAG2ICT Definition: set of non-web documents") occur in the same relative order each time they are repeated, unless a change is initiated by the user.

(for software programs)

**3.2.3 Consistent Navigation:** Navigational mechanisms that are repeated on multiple [software programs](http://w3c.github.io/wcag2ict/#wcag2ict-def_software "WCAG2ICT Definition: software programs") within a [set of software programs](http://w3c.github.io/wcag2ict/#wcag2ict-def_set-of-software-programs "WCAG2ICT Definition: set of software programs") occur in the same relative order each time they are repeated, unless a change is initiated by the user.

See [set of documents](http://w3c.github.io/wcag2ict/#wcag2ict-def_set-of-documents) and [set of software programs](http://w3c.github.io/wcag2ict/#wcag2ict-def_set-of-software-programs) in the Key Terms section of the Introduction to determine when a group of documents or software programs is considered a set for this success criterion. (Sets of software that meet this definition appear to be extremely rare.)

Although not required by this success criterion, ensuring that navigation elements have consistent order when repeated _within_ non-web documents or software programs directly addresses user needs identified in the Intent section for this Success Criterion, and is generally considered best practice.

Intent from [Understanding Success Criterion 3.2.3 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation#intent):

> The intent of this Success Criterion is to encourage the use of consistent presentation and layout for users who interact with repeated content within a set of Web pages and need to locate specific information or functionality more than once. Individuals with low vision who use screen magnification to display a small portion of the screen at a time often use visual cues and page boundaries to quickly locate repeated content. Presenting repeated content in the same order is also important for visual users who use spatial memory or visual cues within the design to locate repeated content.
> 
> It is important to note that the use of the phrase "same order" in this section is not meant to imply that subnavigation menus cannot be used or that blocks of secondary navigation or page structure cannot be used. Instead, this Success Criterion is intended to assist users who interact with repeated content across Web pages to be able to predict the location of the content they are looking for and find it more quickly when they encounter it again.
> 
> Users may initiate a change in the order by using adaptive user agents or by setting preferences so that the information is presented in a way that is most useful to them.
> 
> ###### Specific Benefits of Success Criterion 3.2.3
> 
> *   Ensuring that repeated components occur in the same order on each page of a site helps users become comfortable that they will able to predict where they can find things on each page. This helps users with **cognitive limitations**, users with **low vision**, users with **intellectual disabilities**, and also those who are **blind**.
>     

Success Criterion 3.2.4: Consistent Identification (Level AA)
-------------------------------------------------------------

From [Success Criterion 3.2.4](http://www.w3.org/TR/WCAG22/#consistent-identification):

Additional Guidance When Applying Success Criterion 3.2.4 to Non-Web Documents and Software:
--------------------------------------------------------------------------------------------

This applies directly as written and described in [Intent from Understanding Success Criterion 3.2.4](http://www.w3.org/WAI/WCAG22/Understanding/consistent-identification#intent) (also provided below), replacing “web pages” with “non-web documents” and “software programs”.

With these substitutions, this success criterion would read:

(for non-web documents)

**3.2.4 Consistent Identification:** Components that have the [same functionality](http://w3c.github.io/wcag2ict/#wcag2ict-def_samefunctionality "WCAG2ICT Definition: same functionality") within a [set of non-web documents](http://w3c.github.io/wcag2ict/#wcag2ict-def_set-of-documents "WCAG2ICT Definition: set of non-web documents") are identified consistently.

(for programs)

**3.2.4 Consistent Identification:** Components that have the [same functionality](http://www.w3.org/TR/WCAG22/#dfn-same-functionality "WCAG Definition: same functionality") within a [set of software programs](http://w3c.github.io/wcag2ict/#wcag2ict-def_set-of-software-programs "WCAG2ICT Definition: set of software programs") are identified consistently.

: See [set of documents](http://w3c.github.io/wcag2ict/#wcag2ict-def_set-of-documents) and [set of software programs](http://w3c.github.io/wcag2ict/#wcag2ict-def_set-of-software-programs) in the Key Terms section of the Introduction to determine when a group of documents or software programs is considered a set for this success criterion. (Sets of software that meet this definition appear to be extremely rare.)

Although not required by this success criterion, ensuring that component identification be consistent when they occur more than once _within_ non-web documents or software programs directly addresses user needs identified in the Intent section for this Success Criterion, and is generally considered best practice.

Intent from [Understanding Success Criterion 3.2.4 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/consistent-identification#intent):

> The intent of this Success Criterion is to ensure consistent identification of functional components that appear repeatedly within a set of Web pages. A strategy that people who use screen readers use when operating a Web site is to rely heavily on their familiarity with functions that may appear on different Web pages. If identical functions have different labels on different Web pages, the site will be considerably more difficult to use. It may also be confusing and increase the cognitive load for people with cognitive limitations. Therefore, consistent labeling will help.
> 
> This consistency extends to the text alternatives. If icons or other non-text items have the same functionality, then their text alternatives should be consistent as well.
> 
> If there are two components on a web page that both have the same functionality as a component on another page in a set of web pages, then all 3 must be consistent. Hence the two on the same page will be consistent.
> 
> While it is desirable and best practice always to be consistent within a single web page, 3.2.4 only addresses consistency within a set of web pages where something is repeated on more than one page in the set.
> 
> ###### Specific Benefits of Success Criterion 3.2.4
> 
> *   People who learn functionality on one page on a site can find the desired functions on other pages if they are present.
>     
> *   When non-text content is used in a consistent way to identify components with the same functionality, people with difficulty reading text or detecting text alternatives can interact with the Web without depending on text alternatives.
>     
> *   People who depend on text alternatives can have a more predictable experience. They can also search for the component if it has a consistent label on different pages.
>     

Guideline 3.3: Input Assistance
-------------------------------

From [Guideline 3.3](http://www.w3.org/TR/WCAG22/#input-assistance):

Additional Guidance When Applying Guideline 3.3 to Non-Web Documents and Software:
----------------------------------------------------------------------------------

In WCAG 2.2, the Guidelines are provided for framing and understanding the success criteria under them but are not required for conformance to WCAG. Guideline 3.3 applies directly as written.

Intent from [Understanding Guideline 3.3 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/input-assistance#intent):

> Everyone makes mistakes. However, people with some disabilities have more difficulty creating error-free input. In addition, it may be harder for them to detect that they have made an error. Typical error indication methods may not be obvious to them because of a limited field of view, limited color perception, or use of assistive technology. This guideline seeks to reduce the number of serious or irreversible errors that are made, increase the likelihood that all errors will be noticed by the user, and help users understand what they should do to correct an error.

Success Criterion 3.3.1: Error Identification (Level A)
-------------------------------------------------------

From [Success Criterion 3.3.1](http://www.w3.org/TR/WCAG22/#error-identification):

Additional Guidance When Applying Success Criterion 3.3.1 to Non-Web Documents and Software:
--------------------------------------------------------------------------------------------

This applies directly as written, and as described in [Intent from Understanding Success Criterion 3.3.1](http://www.w3.org/WAI/WCAG22/Understanding/error-identification#intent) (also provided below).

See also the discussion on [Closed Functionality](http://w3c.github.io/wcag2ict/#closed-functionality).

Intent from [Understanding Success Criterion 3.3.1 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/error-identification#intent):

> The intent of this Success Criterion is to ensure that users are aware that an error has occurred and can determine what is wrong. The error message should be as specific as possible. In the case of an unsuccessful form submission, re-displaying the form and indicating the fields in error is insufficient for some users to perceive that an error has occurred. Screen reader users, for example, will not know there was an error until they encounter one of the indicators. They may abandon the form altogether before encountering the error indicator, thinking that the page simply is not functional. Per the definition in WCAG 2.2, an "input error" is information provided by the user that is not accepted. This includes:
> 
> *   information that is required by the web page but omitted by the user, or
>     
> *   information that is provided by the user but that falls outside the required data format or allowed values.
>     
> 
> For example:
> 
> *   the user fails to enter the proper abbreviation in to state, province, region, etc. field;
>     
> *   the user enters a state abbreviation that is not a valid state;
>     
> *   the user enters a non existent zip or postal code;
>     
> *   the user enters a birth date 2 years in the future;
>     
> *   the user enters alphabetic characters or parentheses into their phone number field that only accepts numbers;
>     
> *   the user enters a bid that is below the previous bid or the minimum bid increment.
>     
> 
> _Note:_ If a user enters a value that is too high or too low, and the coding on the page automatically changes that value to fall within the allowed range, the user's error would still need to be described to them as required by the success criterion. Such an error description telling the person of the changed value would meet both this success criterion (Error Identification) and [Success Criterion 3.3.3 (Error Suggestion)](http://www.w3.org/WAI/WCAG22/Understanding/error-suggestion).
> 
> The identification and description of an error can be combined with programmatic information that user agents or assistive technologies can use to identify an error and provide error information to the user. For example, certain technologies can specify that the user's input must not fall outside a specific range, or that a form field is required. Currently, few technologies support this kind of programmatic information, but the Success Criterion does not require, nor prevent it.
> 
> It is perfectly acceptable to indicate the error in other ways such as image, color etc, in addition to the text description.
> 
> See also _[Understanding Success Criterion 3.3.3 Error Suggestion](http://www.w3.org/WAI/WCAG22/Understanding/error-suggestion)_.
> 
> ###### Specific Benefits of Success Criterion 3.3.1
> 
> *   Providing information about input errors in text allows users who are blind or colorblind to perceive the fact that an error occurred.
>     
> *   This Success Criterion may help people with cognitive, language, and learning disabilities who have difficulty understanding the meaning represented by icons and other visual cues.
>     

Success Criterion 3.3.2: Labels or Instructions (Level A)
---------------------------------------------------------

From [Success Criterion 3.3.2](http://www.w3.org/TR/WCAG22/#labels-or-instructions):

Additional Guidance When Applying Success Criterion 3.3.2 to Non-Web Documents and Software:
--------------------------------------------------------------------------------------------

This applies directly as written, and as described in [Intent from Understanding Success Criterion 3.3.2](http://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions#intent) (also provided below).

Intent from [Understanding Success Criterion 3.3.2 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions#intent):

> The intent of this success criterion is to have content authors place instructions or labels that identify the controls in a form so that users know what input data is expected. Instructions or labels may also specify data formats for fields especially if they are out of the customary formats or if there are specific rules for correct input. Content authors may also choose to make such instructions available to users only when the individual control has focus especially when instructions are long and verbose.
> 
> The intent of this Success Criterion is not to clutter the page with unnecessary information but to provide important cues and instructions that will benefit people with disabilities. Too much information or instruction can be just as much of a hindrance as too little. The goal is to make certain that enough information is provided for the user to accomplish the task without undue confusion or navigation.
> 
> _Note:_ When labels are provided for input objects, the input object's relationship to the label (or to redundant text serving as the label) must be programmatically determinable or available in text per _[Understanding Success Criterion 1.3.1 Info and Relationships](http://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)_.
> 
> ###### Specific Benefits of Success Criterion 3.3.2
> 
> *   When label elements are associated with input elements the label is spoken by screen readers when the field receives focus and users with impaired motor control are helped by a larger clickable area for the control, since clicking on the label or the control will activate the control.
>     
> *   Field labels located in close proximity to the associated field assist users of screen magnifiers because the field and label are more likely to visible within the magnified area of the page.
>     
> *   Providing examples of expected data formats help users with cognitive, language and learning disabilities to enter information correctly.
>     
> *   Clearly identifying required fields prevents a keyboard only user from submitting an incomplete form and having to navigate the redisplayed form to find the uncompleted field and provide the missing information.
>     

Success Criterion 3.3.3: Error Suggestion (Level AA)
----------------------------------------------------

From [Success Criterion 3.3.3](http://www.w3.org/TR/WCAG22/#error-suggestion):

Additional Guidance When Applying Success Criterion 3.3.3 to Non-Web Documents and Software:
--------------------------------------------------------------------------------------------

This applies directly as written, and as described in [Intent from Understanding Success Criterion 3.3.3](http://www.w3.org/WAI/WCAG22/Understanding/error-suggestion#intent) (also provided below).

Intent from [Understanding Success Criterion 3.3.3 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/error-suggestion#intent):

> The intent of this Success Criterion is to ensure that users receive appropriate suggestions for correction of an input error if it is possible. The WCAG 2.2 definition of "input error" says that it is "information provided by the user that is not accepted" by the system. Some examples of information that is not accepted include information that is required but omitted by the user and information that is provided by the user but that falls outside the required data format or allowed values.
> 
> Success Criterion 3.3.1 provides for notification of errors. However, persons with cognitive limitations may find it difficult to understand how to correct the errors. People with visual disabilities may not be able to figure out exactly how to correct the error. In the case of an unsuccessful form submission, users may abandon the form because they may be unsure of how to correct the error even though they are aware that it has occurred.
> 
> The content author may provide the description of the error, or the user agent may provide the description of the error based on technology-specific, programmatically determined information.
> 
> ###### Specific Benefits of Success Criterion 3.3.3
> 
> *   Providing information about how to correct input errors allows users who have learning disabilities to fill in a form successfully. Users who are blind or have impaired vision understand more easily the nature of the input error and how to correct it. People with motion impairment can reduce the number of times they need to change an input value.
>     

Success Criterion 3.3.4: Error Prevention (Legal, Financial, Data) (Level AA)
-----------------------------------------------------------------------------

From [Success Criterion 3.3.4](http://www.w3.org/TR/WCAG22/#error-prevention-legal-financial-data):

Additional Guidance When Applying Success Criterion 3.3.4 to Non-Web Documents and Software:
--------------------------------------------------------------------------------------------

This applies directly as written, and as described in [Intent from Understanding Success Criterion 3.3.4](http://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data#intent) (also provided below) replacing “web pages” with “non-web documents or software”.

With this substitution, it would read:

**3.3.4 Error Prevention (Legal, Financial, Data):** For [non-web documents](http://w3c.github.io/wcag2ict/#wcag2ict-def_document "WCAG2ICT Definition: non-web documents") or [software](http://w3c.github.io/wcag2ict/#wcag2ict-def_software "WCAG2ICT Definition: software") that cause [legal commitments](http://www.w3.org/TR/WCAG22/#dfn-legal-commitments "WCAG Definition: legal commitments") or financial transactions for the user to occur, that modify or delete [user-controllable](http://www.w3.org/TR/WCAG22/#dfn-user-controllable "WCAG Definition: user-controllable") data in data storage systems, or that submit user test responses, at least one of the following is true: (Level AA)

1.  **Reversible:** Submissions are reversible.
    
2.  **Checked:** Data entered by the user is checked for [input errors](http://w3c.github.io/wcag2ict/#wcag2ict-def_input-error "WCAG2ICT Definition: input errors") and the user is provided an opportunity to correct them.
    
3.  **Confirmed:** A [mechanism](http://www.w3.org/TR/WCAG22/#dfn-mechanism "WCAG Definition: mechanism") is available for reviewing, confirming, and correcting information before finalizing the submission.
    

Intent from [Understanding Success Criterion 3.3.4 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data#intent):

> The intent of this Success Criterion is to help users with disabilities avoid serious consequences as the result of a mistake when performing an action that cannot be reversed. For example, purchasing non-refundable airline tickets or submitting an order to purchase stock in a brokerage account are financial transactions with serious consequences. If a user has made a mistake on the date of air travel, he or she could end up with a ticket for the wrong day that cannot be exchanged. If the user made a mistake on the number of stock shares to be purchased, he or she could end up purchasing more stock than intended. Both of these types of mistakes involve transactions that take place immediately and cannot be altered afterwards, and can be very costly. Likewise, it may be an unrecoverable error if users unintentionally modify or delete data stored in a database that they later need to access, such as their entire travel profile in a travel services web site. When referring to modification or deletion of 'user controllable' data, the intent is to prevent mass loss of data such as deleting a file or record. It is not the intent to require a confirmation for each save command or the simple creation or editing of documents, records or other data.
> 
> Users with disabilities may be more likely to make mistakes. People with reading disabilities may transpose numbers and letters, and those with motor disabilities may hit keys by mistake. Providing the ability to reverse actions allows users to correct a mistake that could result in serious consequences. Providing the ability to review and correct information gives the user an opportunity to detect a mistake before taking an action that has serious consequences.
> 
> User-controllable data is user-viewable data that the user can change and/or delete through an intentional action. Examples of the user controlling such data would be updating the phone number and address for the user's account, or deleting a record of past invoices from a website. It does not refer such things as internet logs and search engine monitoring data that the user can't view or interact with directly.
> 
> ###### Specific Benefits of Success Criterion 3.3.4
> 
> *   Providing safeguards to avoid serious consequences resulting from mistakes helps users with all disabilities who may be more likely to make mistakes.
>     

Principle 4: Robust
-------------------

From [Principle 4](http://www.w3.org/TR/WCAG22/#robust):

> Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.

Additional Guidance When Applying Principle 4 to Non-Web Documents and Software:
--------------------------------------------------------------------------------

In WCAG 2.2, the Principles are provided for framing and understanding the success criteria under them but are not required for conformance to WCAG. Principle 4 applies directly as written replacing “user agents, including assistive technologies” with “assistive technologies and accessibility features of software”.

With this substitution, it would read:

Principle 4: Robust - Content must be robust enough that it can be interpreted reliably by a wide variety of [assistive technologies](http://w3c.github.io/wcag2ict/#wcag2ict-def_at "WCAG2ICT Definition: assistive technologies") and accessibility features of software.

Guideline 4.1: Compatible
-------------------------

From [Guideline 4.1](http://www.w3.org/TR/WCAG22/#compatible):

> Maximize compatibility with current and future user agents, including assistive technologies.

Additional Guidance When Applying Guideline 4.1 to Non-Web Documents and Software:
----------------------------------------------------------------------------------

In WCAG 2.2, the Guidelines are provided for framing and understanding the success criteria under them but are not required for conformance to WCAG. Guideline 4.1 applies directly as written, replacing “user agents, including assistive technologies” with “assistive technologies and accessibility features of software”.

With this substitution, it would read:

Guideline 4.1 Compatible: Maximize compatibility with current and future [assistive technologies](http://w3c.github.io/wcag2ict/#wcag2ict-def_at "WCAG2ICT Definition: assistive technologies") and accessibility features of software.

Intent from [Understanding Guideline 4.1 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/compatible#intent):

> The purpose of this guideline is to support compatibility with current and future user agents, _especially_ assistive technologies (AT). This is done both by 1) ensuring that authors do not do things that would break AT (e.g., poorly formed markup) or circumvent AT (e.g., by using unconventional markup or code) and 2) exposing information in the content in standard ways that assistive technologies can recognize and interact with. Since technologies change quickly, and AT developers have much trouble keeping up with rapidly changing technologies, it is important that content follow conventions and be compatible with APIs so that AT can more easily work with new technologies as they evolve.

Success Criterion 4.1.1: Parsing (Level A)
------------------------------------------

From [Success Criterion 4.1.1](http://www.w3.org/TR/WCAG22/#parsing):

Additional Guidance When Applying Success Criterion 4.1.1 to Non-Web Documents and Software:
--------------------------------------------------------------------------------------------

This applies directly as written, and as described in [Intent from Understanding Success Criterion 4.1.1](http://www.w3.org/WAI/WCAG22/Understanding/parsing#intent) (also provided below), replacing “In content implemented using markup languages” with “For non-web documents or software that use markup languages, in such a way that the markup is separately exposed and available to assistive technologies and accessibility features of software or to a user-selectable user agent”.

With these substitutions, it would read:

**4.1.1 Parsing:**For [non-web documents](http://w3c.github.io/wcag2ict/#wcag2ict-def_document "WCAG2ICT Definition: non-web documents") or [software](http://w3c.github.io/wcag2ict/#wcag2ict-def_software "WCAG2ICT Definition: software") that use markup languages, in such a way that the markup is separately exposed and available to [assistive technologies](http://w3c.github.io/wcag2ict/#wcag2ict-def_at "WCAG2ICT Definition: assistive technologies") and accessibility features of software or to a user-selectable [user agent](http://w3c.github.io/wcag2ict/#wcag2ict-def_useragent "WCAG2ICT Definition: user agent"), elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features. (Level A)

Start and end tags that are missing a critical character in their formation, such as a closing angle bracket or a mismatched attribute value quotation mark are not complete.

Markup is not always available to [assistive technologies](http://w3c.github.io/wcag2ict/#wcag2ict-def_at) or to user selectable [user agents](http://w3c.github.io/wcag2ict/#wcag2ict-def_useragent) such as browsers. Software sometimes uses markup languages internally for persistence of the software user interface, in ways where the markup is never available to assistive technology (either directly or through a document object model (DOM)), or to a user agent (such as a browser). In such cases, conformance to this provision would have no impact on accessibility as it can have for web content where it is exposed.

Examples of markup that is separately exposed and available to [assistive technologies](http://w3c.github.io/wcag2ict/#wcag2ict-def_at) and to [user agents](http://w3c.github.io/wcag2ict/#wcag2ict-def_useragent) include: documents encoded in HTML, ODF, and OOXML. In these examples, the markup can be parsed entirely in two ways: (a) by assistive technologies which may directly open the document, (b) by assistive technologies using DOM APIs of user agents for these document formats.

Examples of markup used internally for persistence of the software user interface that are never exposed to [assistive technology](http://w3c.github.io/wcag2ict/#wcag2ict-def_at) include but are not limited to: XUL, GladeXML, and FXML. In these examples assistive technology only interacts with the user interface of generated software.

See also the discussion on [Closed Functionality](http://w3c.github.io/wcag2ict/#closed-functionality).

Intent from [Understanding Success Criterion 4.1.1 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/parsing#intent):

> The intent of this Success Criterion is to ensure that user agents, including assistive technologies, can accurately interpret and parse content. If the content cannot be parsed into a data structure, then different user agents may present it differently or be completely unable to parse it. Some user agents use "repair techniques" to render poorly coded content.
> 
> Since repair techniques vary among user agents, authors cannot assume that content will be accurately parsed into a data structure or that it will be rendered correctly by specialized user agents, including assistive technologies, unless the content is created according to the rules defined in the formal grammar for that technology. In markup languages, errors in element and attribute syntax and failure to provide properly nested start/end tags lead to errors that prevent user agents from parsing the content reliably. Therefore, the Success Criterion requires that the content can be parsed using only the rules of the formal grammar.
> 
> _Note 1:_ The concept of "well formed" is close to what is required here. However, exact parsing requirements vary amongst markup languages, and most non XML-based languages do not explicitly define requirements for well formedness. Therefore, it was necessary to be more explicit in the success criterion in order to be generally applicable to markup languages. Because the term "well formed" is only defined in XML, and (because end tags are sometimes optional) valid HTML does not require well formed code, the term is not used in this success criterion.
> 
> _Note 2:_ With the exception of one success criterion ( _[Understanding Success Criterion 1.4.4 Resize text](http://www.w3.org/WAI/WCAG22/Understanding/resize-text)_, which specifically mentions that the effect specified by the success criterion must be achieved without relying on an assistive technology) authors can meet the success criteria with content that assumes use of an assistive technology (or access features in use agents) by the user, where such assistive technologies (or access features in user agents) exist and are available to the user.
> 
> ###### Specific Benefits of Success Criterion 4.1.1
> 
> *   Ensuring that Web pages have complete start and end tags and are nested according to specification helps ensure that assistive technologies can parse the content accurately and without crashing.
>     

Success Criterion 4.1.2: Name, Role, Value (Level A)
----------------------------------------------------

From [Success Criterion 4.1.2](http://www.w3.org/TR/WCAG22/#name-role-value):

Additional Guidance When Applying Success Criterion 4.1.2 to Non-Web Documents and Software:
--------------------------------------------------------------------------------------------

This applies directly as written, and as described in [Intent from Understanding Success Criterion 4.1.2](http://www.w3.org/WAI/WCAG22/Understanding/name-role-value#intent) (also provided below), replacing the note with: “This success criterion is primarily for software developers who develop or use custom user interface components. For example, standard user interface components on most accessibility-supported platforms already meet this success criterion when used according to specification.”.

With this substitution, it would read:

**4.1.2 Name, Role, Value:** For all [user interface components](http://w3c.github.io/wcag2ict/#wcag2ict-def_user-interface-component "WCAG2ICT Definition: user interface components") (including but not limited to: form elements, links and components generated by scripts), the [name](http://w3c.github.io/wcag2ict/#wcag2ict-def_name "WCAG2ICT Definition: name") and [role](http://w3c.github.io/wcag2ict/#wcag2ict-def_role "WCAG2ICT Definition: role") can be [programmatically determined](http://w3c.github.io/wcag2ict/#wcag2ict-def_programmaticallydetermined "WCAG2ICT Definition: programmatically determined"); states, properties, and values that can be set by the user can be [programmatically set](http://w3c.github.io/wcag2ict/#wcag2ict-def_programmaticallyset "WCAG2ICT Definition: programmatically set"); and notification of changes to these items is available to [user agents](http://w3c.github.io/wcag2ict/#wcag2ict-def_useragent "WCAG2ICT Definition: user agents"), including [assistive technologies](http://w3c.github.io/wcag2ict/#wcag2ict-def_at "WCAG2ICT Definition: assistive technologies"). (Level A)

This success criterion is primarily for software developers who develop or use custom user interface components. Standard user interface components on most [accessibility-supported](http://w3c.github.io/wcag2ict/#wcag2ict-def_accessibility-supported "WCAG2ICT Definition: accessibility-supported") platforms already meet this success criterion when used according to specification.

For conforming to this success criterion, it is usually best practice for software user interfaces to use the accessibility services provided by platform software. These accessibility services enable interoperability between software user interfaces and both assistive technologies and accessibility features of software in standardized ways. Most platform accessibility services go beyond programmatic exposure of name and role, and programmatic setting of states, properties and values (and notification of same), and specify additional information that could or should be exposed and / or set (for instance, a list of the available actions for a given user interface component, and a means to programmatically execute one of the listed actions).

For document formats that support interoperability with assistive technology, standard user interface components often meet this success criterion when used according to the general design and accessibility guidance for the document format.

See also the discussion on [Closed Functionality](http://w3c.github.io/wcag2ict/#closed-functionality).

Intent from [Understanding Success Criterion 4.1.2 in Understanding WCAG 2.2](http://www.w3.org/WAI/WCAG22/Understanding/name-role-value#intent):

> The intent of this Success Criterion is to ensure that Assistive Technologies (AT) can gather information about, activate(or set) and keep up to date on the status of user interface controls in the content.
> 
> When standard controls from accessible technologies are used, this process is straightforward. If the user interface elements are used according to specification the conditions of this provision will be met. (See examples of Success Criterion 4.1.2 below)
> 
> If custom controls are created, however, or interface elements are programmed (in code or script) to have a different role and/or function than usual, then additional measures need to be taken to ensure that the controls provide important information to assistive technologies and allow themselves to be controlled by assistive technologies.
> 
> A particularly important state of a user interface control is whether or not it has focus. The focus state of a control can be programmatically determined, and notifications about change of focus are sent to user agents and assistive technology. Other examples of user interface control state are whether or not a checkbox or radio button has been selected, or whether or not a collapsible tree or list node is expanded or collapsed.
> 
> _Note:_ Success Criterion 4.1.2 requires a programmatically determinable name for all user interface components. Names may be visible or invisible. Occasionally, the name must be visible, in which case it is identified as a label. Refer to the definition of name and label in the glossary for more information.
> 
> ###### Specific Benefits of Success Criterion 4.1.2
> 
> *   Providing role, state, and value information on all user interface components enables compatibility with assistive technology, such as screen readers, screen magnifiers, and speech recognition software, used by people with disabilities.
>