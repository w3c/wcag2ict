function fetchWcagInfo() {

    return fetch('wcag.json').then((response) => {
        return response.json();
    }).then((data) => {
        let wcag = data;

        wcag.principles.forEach(function (princ) {
            prepPrinc(princ);
        });
        wcag.terms.forEach(function (term) {
            prepTerm(term);
        });
    }).then((data) => {
        return finalCleanup();
    });
}

function prepPrinc(princ) {
    prepSec(princ);

    princ.guidelines.forEach(function (gl) {
        prepGl(gl);
    });
}

function prepGl(gl) {
    prepSec(gl);

    gl.successcriteria.forEach(function (sc) {
        prepSc(sc);
    });
}

function prepSc(sc) {
    prepSec(sc);

    // insert sc Level on separate line
    var bq = document.querySelector('#' + sc.id + ' blockquote');
    if (bq) {
        var el = document.createElement('p');
        el.innerHTML = sc.level ? '(Level ' + sc.level + ')' : '(Obsolete and removed)';
        bq.before(el);
    }
}

function slugify(string) {
    return string
        .replace(/\s/g, '-')
        .replace(/[%()=:.,!#$@"'/\\|?*+&]/g, '')
        .replace(/^-+|-+$/g, '')
        .replace(/-+/g, '-')
        .toLowerCase();
    // console.log(string);
}

function prepSec(n) {
    var nid = n.id;
    var nsec = document.querySelector('#' + nid);
    if (nsec) {
        var nname = n.num + (n.num.includes('.') ? ' ' : '. ') + n.handle;
        // get the TOC item
        var tocitem = document.querySelector('a[class="tocxref"][href="#' + nid + '"]');
        // last child is the text
        var tocitemtxt = tocitem.childNodes[tocitem.childNodes.length - 1];
        // update toc text
        tocitemtxt.nodeValue = nname;
        // header element of section
        var nheader = nsec.querySelector('h1, h2, h3, h4, h5, h6');
        // last node of the header is the text content
        var nhtxt = nheader.childNodes[nheader.childNodes.length - 1];
        // update header text
        nhtxt.nodeValue = nname;

        // find header wrapper
        var nhead = nheader.parentNode;
        // insert SC quote after header
        var bq = document.createElement("blockquote");
        bq.setAttribute("class", "wcag-quote");

        var content = n.content
        content = content.replace(/id="(h-note)(-(.*?))?"/g, 'id="wcag-note$1-$2"')
        content = content.replace(/id="(issue-container-generatedID)(-(.*?))?"/g, 'id="wcag-note$1-$2"')
        bq.innerHTML = content;
        nhead.after(bq);
    }
}

function prepTerm(n) {
    var nid = n.id;
    var nsec = document.querySelector('#' + nid);
    if (nsec) {
        var nname = n.name;
        // get the TOC item
        var tocitem = document.querySelector('a[class="tocxref"][href="#' + nid + '"]');
        // last child is the text
        var tocitemtxt = tocitem.childNodes[tocitem.childNodes.length - 1];
        // update toc text
        tocitemtxt.nodeValue = nname;

        // header element of section
        var nheader = nsec.querySelector('h1, h2, h3, h4, h5, h6');
        // last node of the header is the text content
        var nhtxt = nheader.childNodes[nheader.childNodes.length - 1];
        // update header text
        nhtxt.nodeValue = nname;

        // header wrapper
        var nhead = nheader.parentNode;
        var bq = document.createElement("blockquote");
        bq.setAttribute("class", "wcag-quote");

        var definition = n.definition
        definition = definition.replace(/id="(h-note)(-(.*?))?"/g, 'id="wcag-note$1-$2"')
        definition = definition.replace(/id="(issue-container-generatedID)(-(.*?))?"/g, 'id="wcag-note$1-$2"')
        bq.innerHTML = definition;
        nhead.after(bq);
    }
}

// number notes if there are multiple per section
function numberNotes() {
    var sectionsWithNotes = new Array();
    document.querySelectorAll(".note").forEach(function (note) {
        var container = note.closest("dd");
        if (container == null) container = note.closest("blockquote");
        if (container == null) container = note.closest("section");
        sectionsWithNotes.push(container);
    });

    sectionsWithNotes.forEach(function (sec) {
        if (sec.noteprocessed) return;
        var allNotes = sec.querySelectorAll(":first-child.note-title");
        var notes = []
        allNotes.forEach(note => {
            var parentElement = note.parentElement;
            notes.push(note.parentElement);
        });
        // no notes, shouldn't happen
        if (notes.length == 0) return;
        // one note
        if (notes.length == 1) {
            // respec note, do nothing
            // included note, add marker
            if (notes[0].querySelector(".marker span") == null) addNoteMarker(notes[0], "Note: ");
        }
        // more than one note, number them
        if (notes.length > 1) {
            var count = 1;
            notes.forEach(function (note) {
                if (sec.nodeName == "SECTION" && (note.closest('dd') != null || note.closest('blockquote') != null)) return;
                if (sec.nodeName == "SECTION" && note.closest('section') != sec) return;
                var span = note.querySelector(".marker span");
                if (span != null) { // respec note
                    span.textContent = "Note " + count;
                } else { // included note
                    addNoteMarker(note, "Note " + count + ": ");
                }
                count++;
            });
        }
        sec.noteprocessed = true;
    });

    function addNoteMarker(note, markerText) {
        span = document.createElement("span");
        span.textContent = markerText;
        var p = note.querySelector("p");
        if (p != null) p.insertBefore(span, p.firstChild);
        else note.insertBefore(span, note.firstChild);
    }
}

// change the numbering of examples to remove number from lone examples in a section, and restart numbering for multiple in each section
function renumberExamples() {
    var sectionsWithExamples = new Array();
    document.querySelectorAll(".example").forEach(function (example) {
        var container = example.closest("dd"); // use dd container if present
        if (container == null) container = example.closest("blockquote"); // otherwise blockquote
        if (container == null) container = example.closest("section"); // otherwise section
        sectionsWithExamples.push(container);
    });

    sectionsWithExamples.forEach(function (sec) {
        if (sec.exprocessed) return;
        var examples = sec.querySelectorAll(".example");
        // no examples, shouldn't happen
        if (examples.length == 0) return;
        if (examples.length == 1) {
            // respec example, do nothing
            // included example, add marker
            if (examples[0].querySelector(".marker span") == null) addExampleMarker(examples[0], "Example: ");
        }
        // one example, remove the numbering
        // more than one example, number them
        // more than one example, number them
        if (examples.length > 1) {
            var count = 1;
            examples.forEach(function (example) {
                if (sec.nodeName == "SECTION" && (example.closest('dd') != null || example.closest('blockquote') != null)) return;
                if (sec.nodeName == "SECTION" && example.closest('section') != sec) return;
                var span = example.querySelector(".marker span");
                if (span != null) { // respec example
                    span.textContent = "Example " + count;
                } else { // included example
                    addExampleMarker(example, "Example " + count + ": ");
                }
                count++;
            });
        }
        sec.exprocessed = true;
    });

    function addExampleMarker(example, markerText) {
        span = document.createElement("span");
        span.textContent = markerText;
        var p = example.querySelector("p");
        if (p != null) p.insertBefore(span, p.firstChild);
        else example.insertBefore(span, example.firstChild);
    }
}

function getTocLink(id) {
    return document.querySelector('a[class="tocxref"][href="#' + id + '"]');
}

function getTocItem(id) {
    var tocLink = getTocLink(id);
    if (tocLink != null) {
        var tocItem = tocLink.parentElement;
        return tocItem;
    } else {
        return null;
    }
}

function hideDeepNums() {
    document.querySelectorAll("#comments-by-guideline-and-success-criterion section").forEach(function (item) {
        var id = item.id;
        if (id.startsWith("applying-")) {
            var tocItem = getTocItem(id);
            if (tocItem != null) tocItem.remove();
            var secno = item.querySelector("bdi.secno");
            if (secno != null) secno.remove();
        }
    });
}

function hideDeepNumsGlossary() {
    document.querySelectorAll("#glossary-items-with-specific-guidance section").forEach(function (item) {
        var id = item.id;
        if (id.startsWith("applying-")) {
            var tocItem = getTocItem(id);
            if (tocItem != null) tocItem.remove();
            var secno = item.querySelector("bdi.secno");
            if (secno != null) secno.remove();
        }
    });
}
function addHeadingIds() {
    var headingsWithMissingIds = document.querySelectorAll("h3:not([id]), h4:not([id]), h5:not([id])");
    headingsWithMissingIds.forEach(heading => {
        var id = heading.innerText.toLowerCase().replace(/\s|\(|\)/g, "-");
        heading.setAttribute("id", id);
    });
}
function removeNumbering() {
    // Select all headings, tocItems, and elements with an aria-label attribute in the document
    var elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    // Iterate over each element
    elements.forEach(element => {
        // Use regex to remove numbering from the text
        element.textContent = element.textContent.replace(/^[0-9.]+\s*/, '');
        if (element.nextElementSibling.hasAttribute("aria-label")) {
            element.nextSibling.setAttribute("aria-label", "Permalink for Section " + element.textContent);
        }
    });
    // update tocItems
    var tocItems = document.querySelectorAll('a[class="tocxref"]');
    tocItems.forEach(tocItem => {
        tocItem.textContent = tocItem.textContent.replace(/^[0-9.]+\s*/, '');
    });
}
function removeChange() {
    elements = document.querySelectorAll(".change")
    elements.forEach(element => {
        element.remove();
    });
}

function furtherProcessNotesAndExamples() {
    let allNotes = document.querySelectorAll(".note");
    allNotes.forEach(note => {
        let noteTitle = note.querySelector("div > span").textContent;
        if (note.querySelector(".wcag2ict")) {
            noteTitle = noteTitle + " (Added)";
        }
        if (note.querySelector(".replaced")) {
            noteTitle = noteTitle + " (Replaced)";
        }
        if (note.querySelector(".modified")) {
            noteTitle = noteTitle + " (Modified)";
        }
        if (note.querySelector(".original")) {
            noteTitle = noteTitle + " (Original)";
	}
        if (note.querySelector(".documents")) {  
            noteTitle = noteTitle + " (for non-web documents)";
        }
        if (note.querySelector(".software")) {  
            noteTitle = noteTitle + " (for non-web software)";
        }
        note.querySelector("div > span").textContent = noteTitle;
    })
    let wcag2ictExamples = document.querySelectorAll("div.example.wcag2ict");
    wcag2ictExamples.forEach(example => {
        example.innerHTML = example.innerHTML.replace("Example:", "Example (Added):");
    })
}
function makeChangeLog() {

  // Build the query string for the GitHub API
  const params = new URLSearchParams({
    q: 'repo:w3c/wcag2ict is:pr is:merged merged:>2024-11-15',
    per_page: '100'
  });
  const url = `https://api.github.com/search/issues?${params.toString()}`;
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        console.warn('Failed to fetch changelog data:', response.status);
        return null;
      }
      return response.json();
    })
    .then(data => {
      if (!data || !data.items) return;
      const mergedPRs = data.items;
      // Find the element with id 'changelog' and append a ul with PR links
      const changelog = document.getElementById('changelog');
      if (changelog) {
        const ul = document.createElement('ul');
        mergedPRs.forEach(pr => {
          if (pr.title.startsWith('[Editorial]')) {
            return;
          }
          const li = document.createElement('li');
          const span = document.createElement('span');
          span.textContent = new Date(pr.closed_at).toISOString().split('T')[0] + " ";
          const a = document.createElement('a');
          a.href = pr.html_url;
          a.textContent = pr.title;
          li.appendChild(span);
          li.appendChild(a);
          ul.appendChild(li);
        });
        changelog.appendChild(ul);
      }
    })
    .catch(error => {
      console.warn('Error fetching changelog:', error);
    });
}

function finalCleanup() {
    hideDeepNums();
    hideDeepNumsGlossary();
    numberNotes();
    renumberExamples();
    addHeadingIds();
    removeNumbering();
    removeChange();
    furtherProcessNotesAndExamples();
    return makeChangeLog();
}

function postRespec() {
    return fetchWcagInfo();
}
