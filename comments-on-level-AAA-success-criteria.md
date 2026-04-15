Comments on Level AAA success criteria
--------------------------------------
<div class="ednote">
  
The WCAG2ICT Task Force is in process of adding guidance for Level AAA success criteria. We are seeking feedback on the following sections:

- [1.2.6 Sign Language (Prerecorded)](#sign-language-prerecorded)
- [1.2.7 Extended Audio Description (Prerecorded)](#extended-audio-description-prerecorded)
- [1.2.8 Media Alternative (Prerecorded)](#media-alternative-prerecorded)
- [1.2.9 Audio-only (Live)](#audio-only-live)
- [1.4.6 Contrast (Enhanced)](#contrast-enhanced)
- [1.4.8 Visual Presentation](#visual-presentation)
- [1.4.9 Images of Text (No Exception)](#images-of-text-no-exception)
- [2.1.3 Keyboard (No Exception)](#keyboard-no-exception)
- [2.2.3 No Timing](#no-timing)
- [2.2.4 Interruptions](#interruptions)
- [2.2.5 Re-authenticating](#re-authenticating)

The rest of the Level AAA criteria, as noted with editor's notes in the sections below, are still under development.</div>

The sections that follow contain guidance on applying the Level AAA success criteria from WCAG 2 to non-web documents and non-web software. The text of each success criterion from WCAG 2 is copied as quoted text. Following that, the WCAG2ICT guidance is provided. The WCAG2ICT guidance can be found in the sections where the headings begin with "Applying..." to highlight that this is the content specific to this document. Within these sections custom notes added by WCAG2ICT are marked with the text "ADDED".

<div class="ednote">
These two notes apply as written to non-web software and non-web documents.
</div>

From the <a href=https://www.w3.org/TR/WCAG22/#wcag-2-layers-of-guidance target="_blank">WCAG 2 Layers of Guidance</a> section of WCAG 2.2:

<blockquote>Note that even content that conforms at the highest level (AAA) will not be accessible to individuals with all types, degrees, or combinations of disability, particularly in the cognitive, language, and learning areas. Authors are encouraged to consider the full range of techniques, including the advisory techniques, Making Content Usable for People with Cognitive and Learning Disabilities, as well as to seek relevant advice about current best practice to ensure that web content is accessible, as far as possible, to this community. Metadata may assist users in finding content most suitable for their needs.</blockquote>

From the  <a href=https://www.w3.org/TR/WCAG22/#cc1 target="_blank">Conformance level</a> section of WCAG 2.2: 
<div class="note">

<blockquote>It is not recommended that Level AAA conformance be required as a general policy for entire sites because it is not possible to satisfy all Level AAA success criteria for some content.</blockquote></div></div>
  
### 1. Perceivable

#### 1.2 Time-based Media

##### sign-language-prerecorded

###### Applying SC 1.2.6 Sign Language (Prerecorded) to non-web documents and non-web software
This applies directly as written, and as described in [Intent from Understanding Success Criterion 1.2.6](https://www.w3.org/WAI/WCAG22/Understanding/sign-language-prerecorded#intent).

<div class="note wcag2ict">
To date, meeting this success criteria has proven to be infeasible, as there are not enough human sign language interpreters available to handle a fraction of the volume of video content being produced. As compared to captioning and audio description, sign language interpretation is a very specialized skill. Emerging technologies may, in the future, allow translation from text or speech to sign language directly. At that time, those who need sign language could use such an automated translation tool in the same way people who are blind use a screen reader. This would give people who need to have audio content presented in sign language the same ability to access this content that
people who are blind have access to by using their screen readers.
As always, authors should not rely on such solutions until they are commonly available at a quality accepted by the signing community. In the meantime, providing sign language interpretation continues to be a need for native sign language users, especially in the context of any public service content.
</div>

<div class="note wcag2ict">
Some pre-programmed interactions (e.g., a game or VR) are considered “synchronized media” because the audio is timed to correspond with specific visual information.
</div>

<div class="note wcag2ict software">

See also the [Comments on Closed Functionality](#comments-on-closed-functionality).</div>

  
##### extended-audio-description-prerecorded

###### Applying SC 1.2.7 Extended Audio Description (Prerecorded) to non-web documents and non-web software
  
This applies directly as written, and as described in [Intent from Understanding Success Criterion 1.2.7](https://www.w3.org/WAI/WCAG22/Understanding/extended-audio-description-prerecorded#intent).

<div class="note wcag2ict">

Audio descriptions (also called "video descriptions", "descriptive narration", and "described videos") describe important visual information needed to understand the video content, including text displayed in the video. Where the main audio track of the video fully describes important visual information, audio descriptions would not be needed at all as the requirement would already be met. When audio descriptions are needed, one way to implement them is by providing a second audio track for the audio-video media.</div>

##### media-alternative-prerecorded

###### Applying SC 1.2.8 Media Alternative (Prerecorded) to non-web documents and non-web software
  
This applies directly as written, and as described in [Intent from Understanding Success Criterion 1.2.8](https://www.w3.org/WAI/WCAG22/Understanding/media-alternative-prerecorded#intent).

<div class="note wcag2ict">

As described in Intent from Understanding Success Criterion 1.2.8, this success criterion is concerned with providing an accessible alternative to time-based media such as audio visual material. This accessible alternative could be in text form, may provide a running description, and could read something like a book. 

When audio visual media is redundant to other forms of information (such as in text and as audio guidance), the intent of this Success Criterion would be satisfied.</div>
<div class="note wcag2ict">

Prerecorded media is defined as information that is not live. Media content that is generated by a computer on-demand, such as by generative AI is not considered live.</div>
<div class="note wcag2ict">

See also the [Comments on Closed Functionality](#comments-on-closed-functionality).</div>

##### audio-only-live

###### Applying SC 1.2.9 Audio-Only (Live) to non-web documents and non-web software


Where a non-web document technology supports incorporation of live audio-only content, this applies directly as written, and as described in [Intent from Understanding Success Criterion 1.2.9](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-live#intent).
<div class="note wcag2ict documents">

This success criterion is problematic to apply directly to non-web documents (including audio files) that are then played by live audio players (such as  internet radio players). These live audio players may not currently support displaying captions and it may pose a risk if used in vehicles so may not be suitable in all cases.
</div>


###### Applying SC 1.2.9 Audio-Only (Live) to non-web software

This applies directly as written, and as described in [Intent from Understanding Success Criterion 1.2.9](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-live#intent).
<div class="note wcag2ict software">
  
Some ways to satisfy this success criterion would be to provide live captions (also known as subtitles or “subtitles for the hearing impaired") or a text transcript, script, or other text-based alternative.</div>
<div class="note wcag2ict software">
  
When captions are provided, to satisfy this success criterion, they would have to provide a "synchronized [text alternative](https://www.w3.org/TR/WCAG22/#dfn-text-alternative) for both speech and non-speech audio information needed to understand the media content” where non-speech information includes “sound effects, music, laughter, speaker identification and location”.</div>
<div class="note wcag2ict software">
  
See also the [Comments on Closed Functionality](#comments-on-closed-functionality).</div>

#### 1.3 Adaptable

##### identify-purpose

###### Applying SC 1.3.6 Identify Purpose to non-web documents and non-web software
<div class="ednote">
  
Guidance currently under development by the WCAG2ICT Task Force. See GitHub <a href="https://github.com/w3c/wcag2ict/issues/538" target="_blank">Issue 538</a>.</div>

#### 1.4 Distinguishable

##### contrast-enhanced

###### Applying SC 1.4.6 Contrast (Enhanced) to non-web documents and non-web software
This applies directly as written, and as described in [Intent from Understanding Success Criterion 1.4.6](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced#intent). 

<div class="note wcag2ict">
This success criterion only applies to ICT with emissive displays. Reflective displays are out of scope. 
</div>
<div class="note wcag2ict">

See also the [Comments on Closed Functionality](#comments-on-closed-functionality).</div>

##### low-or-no-background-audio

###### Applying SC 1.4.7 Low or No Background Audio to non-web documents and non-web software
This applies directly as written, and as described in [Intent from Understanding Success Criterion 1.4.7](https://www.w3.org/WAI/WCAG22/Understanding/low-or-no-background-audio.html#intent).

##### visual-presentation

###### Applying SC 1.4.8 Visual Presentation to non-web documents and non-web software
This applies directly as written, and as described in Intent from Understanding Success Criterion 1.4.8, replacing “browser or other user agent” with “user agent, platform software, or other non-web software” in Note 1.
With these substitutions, the notes would read:
<div class="note wcag2ict">
Content is not required to use these values. The requirement is that a mechanism is available for users to change these presentation aspects. The mechanism can be provided by the <INS>[**[user agent](#user-agent), [platform software](#platform-software), or other [non-web software](#software)**]</INS>. Content is not required to provide the mechanism.
</div>
<div class="note wcag2ict">Writing systems for some languages use different presentation aspects to improve readability and legibility. If a presentation aspect in this success criterion is not used in a writing system, content in that writing system does not need to use that presentation setting and can conform without it. Authors are encouraged to follow guidance for improving readability and legibility of text in their writing system.
</div>
<div class="note wcag2ict">

See also the [Comments on Closed Functionality](#comments-on-closed-functionality).</div>

##### images-of-text-no-exception

###### Applying SC 1.4.9 Images of Text (No Exception) to non-web documents and non-web software

This applies directly as written, and as described in [Intent from Understanding Success Criterion 1.4.9](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text-no-exception.html#intent).

<div class="note wcag2ict">

See also the [Comments on Closed Functionality](#comments-on-closed-functionality).</div>

### 2. Operable

#### 2.1 Keyboard Accessible

##### keyboard-no-exception

###### Applying SC 2.1.3 Keyboard (No Exception) to non-web documents

This applies directly as written, and as described in [Intent from Understanding Success Criterion 2.1.3](https://www.w3.org/WAI/WCAG22/Understanding/keyboard-no-exception.html#intent).

###### Applying SC 2.1.3 Keyboard (No Exception) to non-web software

Where ICT is or includes non-web software that can be run on a software platform that provides a device-independent keyboard interface service, this applies directly as written, and as described in [Intent from Understanding Success Criterion 2.1.3](https://www.w3.org/WAI/WCAG22/Understanding/keyboard-no-exception.html#intent).

<div class="note wcag2ict software">
Keyboard interface does not refer to a physical device but to the service of platform software (e.g. operating system, browser, etc.) that provides the software with keystrokes from any keyboard or keyboard substitute. When the non-web software supports such a device-independent service of the platform software, and the non-web software functionality is made fully operable through the service, then this success criterion would be satisfied.
</div>

<div class="note wcag2ict software">
A "device-independent keyboard interface service" refers to the platform service that provides keystrokes to any software running on the platform.
</div>

<div class="note wcag2ict software">
Inclusion of an on-screen keyboard can be done as well but does not satisfy this requirement since it does not allow for the use of keyboard alternatives whereas support of input from the device-independent keyboard interface service does.
</div>

<div class="note wcag2ict software">
This success criterion does not imply that non-web software always needs to directly support a keyboard or “keyboard interface” if one is not provided by the platform software. But if one is provided, the software needs to make all functionality available through it - unless the exception applies.
</div>

<div class="note wcag2ict software">
This success criterion also does not imply that non-web software always needs to provide its own virtual keyboard. But if it does, then the non-web software still needs to support keyboard input from any keyboard interface provided by the platform software.
</div>

<div class="note wcag2ict software">
See also the [Comments on Closed Functionality](#comments-on-closed-functionality).</div>

#### 2.2 Enough Time

##### no-timing

###### Applying SC 2.2.3 No Timing to non-web documents and non-web software
This applies directly as written, and as described in [Intent from Understanding Success Criterion 2.2.3](https://www.w3.org/WAI/WCAG22/Understanding/no-timing#intent).

##### interruptions

###### Applying SC 2.2.4 Interruptions to non-web documents and non-web software
This applies directly as written, and as described in [Intent from Understanding Success Criterion 2.2.4](https://www.w3.org/WAI/WCAG22/Understanding/interruptions.html#intent).

##### re-authenticating

###### Applying 2.2.5 Re-authenticating to non-web documents and non-web software
This applies directly as written, and as described in [Intent from Understanding Success Criterion 2.2.5](https://www.w3.org/WAI/WCAG22/Understanding/re-authenticating.html#intent).

<div class="note wcag2ict software">
See also the [Comments on Closed Functionality](#comments-on-closed-functionality).</div>

##### timeouts

###### Applying SC 2.2.6 Timeouts to non-web documents and non-web software
<div class="ednote">
  
Guidance currently under development by the WCAG2ICT Task Force. See GitHub <a href="https://github.com/w3c/wcag2ict/issues/547" target="_blank">Issue 547</a>.</div>

#### 2.3 Seizures and Physical Reactions

##### three-flashes

###### Applying SC 2.3.2 Three Flashes to non-web documents and non-web software
<div class="ednote">
  
Guidance currently under development by the WCAG2ICT Task Force. See GitHub <a href="https://github.com/w3c/wcag2ict/issues/548" target="_blank">Issue 548</a>.</div>

##### Animation from Interactions

###### Applying SC 2.3.3 Animation from Interactions to non-web documents and non-web software
<div class="ednote">
  
Guidance currently under development by the WCAG2ICT Task Force. See GitHub <a href="https://github.com/w3c/wcag2ict/issues/549" target="_blank">Issue 549</a>.</div>

#### 2.4 Navigable

##### location

###### Applying SC 2.4.8 Location to non-web documents and non-web software
<div class="ednote">
  
Guidance currently under development by the WCAG2ICT Task Force. See GitHub <a href="https://github.com/w3c/wcag2ict/issues/550" target="_blank">Issue 550</a>.</div>

##### link-purpose-link-only

###### Applying SC 2.4.9 Link Purpose (Link Only) to non-web documents and non-web software
<div class="ednote">
  
Guidance currently under development by the WCAG2ICT Task Force. See GitHub <a href="https://github.com/w3c/wcag2ict/issues/551" target="_blank">Issue 551</a>.</div>

##### section-headings

###### Applying SC 2.4.10 Section Headings to non-web documents and non-web software
<div class="ednote">
  
Guidance currently under development by the WCAG2ICT Task Force. See GitHub <a href="https://github.com/w3c/wcag2ict/issues/552" target="_blank">Issue 552</a>.</div>

##### focus-not-obscured-enhanced

###### Applying 2.4.12 Focus Not Obscured (Enhanced) to non-web documents and non-web software
<div class="ednote">
  
Guidance currently under development by the WCAG2ICT Task Force. See GitHub <a href="https://github.com/w3c/wcag2ict/issues/553" target="_blank">Issue 553</a>.</div>

##### focus-appearance

###### Applying 2.4.13 Focus Appearance to non-web documents and non-web software
<div class="ednote">
  
Guidance currently under development by the WCAG2ICT Task Force. See GitHub <a href="https://github.com/w3c/wcag2ict/issues/554" target="_blank">Issue 554</a>.</div>

#### 2.5 Input Modalities

##### target-size-enhanced

###### Applying 2.5.5 Target Size (Enhanced) to non-web documents and non-web software
<div class="ednote">
  
Guidance currently under development by the WCAG2ICT Task Force. See GitHub <a href="https://github.com/w3c/wcag2ict/issues/555" target="_blank">Issue 555</a>.</div>

##### concurrent-input-mechanisms

###### Applying 2.5.6 Concurrent Input Mechanisms to non-web documents and non-web software
<div class="ednote">
  
Guidance currently under development by the WCAG2ICT Task Force. See GitHub <a href="https://github.com/w3c/wcag2ict/issues/556" target="_blank">Issue 556</a>.</div>

### 3. Understandable

#### 3.1 Readable

##### unusual-words

###### Applying 3.1.3 Unusual Words to non-web documents and non-web software
<div class="ednote">
  
Guidance currently under development by the WCAG2ICT Task Force. See GitHub <a href="https://github.com/w3c/wcag2ict/issues/558" target="_blank">Issue 558</a>.</div>

##### abbreviations

###### Applying 3.1.4 Abbreviations to non-web documents and non-web software
<div class="ednote">
  
Guidance currently under development by the WCAG2ICT Task Force. See GitHub <a href="https://github.com/w3c/wcag2ict/issues/559" target="_blank">Issue 559</a>.</div>

##### reading-level

###### Applying 3.1.5 Reading Level to non-web documents and non-web software
<div class="ednote">
  
Guidance currently under development by the WCAG2ICT Task Force. See GitHub <a href="https://github.com/w3c/wcag2ict/issues/560" target="_blank">Issue 560</a>.</div>

##### pronunciation

###### Applying SC 3.1.6 Pronunciation to non-web documents and non-web software
<div class="ednote">
  
Guidance currently under development by the WCAG2ICT Task Force. See GitHub <a href="https://github.com/w3c/wcag2ict/issues/561" target="_blank">Issue 561</a>.</div>

#### 3.2 Predictable

##### change-on-request

###### Applying SC 3.2.5 Change on Request to non-web documents and non-web software
<div class="ednote">
  
Guidance currently under development by the WCAG2ICT Task Force. See GitHub <a href="https://github.com/w3c/wcag2ict/issues/562" target="_blank">Issue 562</a>.</div>

#### 3.3 Input Assistance

##### help

###### Applying SC 3.3.5 Help to non-web documents and non-web software
<div class="ednote">
  
Guidance currently under development by the WCAG2ICT Task Force. See GitHub <a href="https://github.com/w3c/wcag2ict/issues/563" target="_blank">Issue 563</a>.</div>

##### error-prevention

###### Applying SC 3.3.5 Help to non-web documents and non-web software
###### Applying SC 3.3.6 Error Prevention to non-web documents and non-web software
<div class="ednote">
  
Guidance currently under development by the WCAG2ICT Task Force. See GitHub <a href="https://github.com/w3c/wcag2ict/issues/564" target="_blank">Issue 564</a>.</div>

##### accessible-authentication-enhanced

###### Applying SC 3.3.9 Accessible Authentication (Enhanced) to non-web documents and non-web software
<div class="ednote">
  
Guidance currently under development by the WCAG2ICT Task Force. See GitHub <a href="https://github.com/w3c/wcag2ict/issues/565" target="_blank">Issue 565</a>.</div>
  
