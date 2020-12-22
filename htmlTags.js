// HTML Table tags
const tags = [
  {
    tag: "<table>",
    name: "table",
    description: "The wrapper element for all HTML tables.",
  },
  {
    tag: "<thead>",
    name: "Table Head",
    description: "The set of rows defining the column headers in a table.",
  },
  {
    tag: "<tbody>",
    name: "Table Body",
    description: "The set of rows containing actual table data.",
  },
  {
    tag: "<tr>",
    name: "Table Row",
    description: "The table row container.",
  },
  {
    tag: "<td>",
    name: "Table Data",
    description: "The table row container.",
  },
  {
    tag: "<tfoot>",
    name: "Table Foot",
    description: "The set of rows defining the footer in a table.",
  },
  {
    tag: "<form>",
    name: "Form",
    description: "Defines an HTML form for user input",
  },
  {
    tag: "<input>",
    name: "Input",
    description: "Defines an input control",
  },
  {
    tag: "<textarea>",
    name: "Text Area",
    description: "Defines a multiline input control (text area)",
  },
];

// HTML table attributes
const attributes = [
  {
    attribute: "abbr",
    value: "abbreviated_text",
    description:
      "Deprecated − Specifies an abbreviated version of the content in a cell.",
  },
  {
    attribute: "align",
    value: "right left center justify char",
    description: "Deprecated − Specifies the background color of the table.",
  },
  {
    attribute: "bgcolor",
    value: "rgb(x,x,x) #hexcode colorname",
    description:
      "Deprecated − Specifies an abbreviated version of the content in a cell.",
  },
  {
    attribute: "border",
    value: "pixels",
    description:
      "Deprecated − Specifies the border width. A value of '0' means no border.",
  },
  {
    attribute: "cellpadding",
    value: "pixels or %",
    description:
      "	Deprecated − Specifies the space between the cell borders and their contents.",
  },
  {
    attribute: "cellspacing",
    value: "pixels or %",
    description: "Deprecated − Specifies the space between cells.",
  },
  {
    attribute: "frame",
    value: "void above below hsides lhs rhs vsides box border",
    description:
      "Deprecated − Used in conjunction with the border attribute, specifies which side of the frame that makes up the border surrounding the table is displayed.",
  },
  {
    attribute: "rules",
    value: "none groups rows cols all",
    description:
      "Deprecated − Used in conjunction with the border attribute, specifies which rules appear between the cells of the table.",
  },
  {
    attribute: "width",
    value: "pixels or %",
    description: "	Deprecated − Specifies the width of the table.",
  },
  {
    attribute: "abbr",
    value: "abbreviated_text",
    description:
      "Deprecated − Specifies an abbreviated version of the content in a cell.",
  },
];
// dom element
const thbody = document.getElementById("table-head-body");

// map html tags to tublar display
tags.map((tag) => {
  const tr = document.createElement("tr");
  const tagTd = document.createElement("td");
  const span = document.createElement("span");
  span.textContent = tag.tag;
  span.className = "code";
  tagTd.appendChild(span);
  const nameTd = document.createElement("td");
  nameTd.textContent = tag.name;
  const descriptionTd = document.createElement("td");
  descriptionTd.textContent = tag.description;
  tr.appendChild(tagTd);
  tr.appendChild(nameTd);
  tr.appendChild(descriptionTd);
  thbody.appendChild(tr);
});

// map html attributes to tabular display
const tbody = document.getElementById("table-body");

attributes.map((el) => {
  const tr = document.createElement("tr");
  const attributeTd = document.createElement("td");
  const span = document.createElement("span");
  span.className = "code";
  span.textContent = el.attribute;
  attributeTd.appendChild(span);
  const valueTd = document.createElement("td");
  valueTd.textContent = el.value;
  const descriptionTd = document.createElement("td");
  descriptionTd.textContent = el.description;
  tr.appendChild(attributeTd);
  tr.appendChild(valueTd);
  tr.appendChild(descriptionTd);
  tbody.appendChild(tr);
});
