import { writeFile } from "fs/promises";

const wcagUrl = "https://www.w3.org/WAI/WCAG$VERSION/wcag.json";

const [wcag21, wcag22] = await Promise.all(
  ["21", "22"].map((version) =>
    fetch(wcagUrl.replace("$VERSION", version)).then((response) => {
      if (response.status >= 400)
        throw new Error(`HTTP error code received: ${response.status}`);
      return response.json();
    })
  )
);

const data = wcag22;

// Incorporate both 2.1 and 2.2 versions of Parsing
const compatible = data.principles[3].guidelines[0];
compatible.successcriteria[0].id += "22";
compatible.successcriteria[0].handle =
  compatible.successcriteria[0].handle.replace(/\(.*\)$/, "(WCAG 2.2)");

const parsing21 = wcag21.principles[3].guidelines[0].successcriteria[0];
parsing21.id += "21";
parsing21.handle += " (WCAG 2.1)";
parsing21.content = parsing21.content.replace(/-27/g, "-27-411-21");
compatible.successcriteria.unshift(parsing21);

// Prune unneeded fields
for (const principle of data.principles) {
  delete principle.title;
  delete principle.versions;
  for (const guideline of principle.guidelines) {
    delete guideline.alt_id;
    delete guideline.title;
    delete guideline.versions;
    for (const criterion of guideline.successcriteria) {
      delete criterion.alt_id;
      delete criterion.details;
      delete criterion.title;
      delete criterion.techniques;
      delete criterion.versions;
    }
  }
}

await writeFile("wcag.json", JSON.stringify(data, null, "    ") + "\n");
