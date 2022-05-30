const PDFDocument = require('pdfkit');
const fs = require('fs');

function generatePDF(order) {
  let doc = new PDFDocument({ size: "A4", margin: 50 });
  doc.pipe(fs.createWriteStream('../Frontend/src/pdfDocuments/output.pdf'));

  generateHeader(doc);
  generateCustomerInformation(doc, order[0]);
  generateOrderTable(doc, order[0]);
  generateFooter(doc);

  doc.end();
}

function generateHeader(doc) {
  doc
    .image("../Frontend/public/images/netzillaLogo.png", 50, 45, { width: 150 })
    .fillColor("#444444")
    .fontSize(20)
    .fontSize(10)
    .moveDown();
}

function generateCustomerInformation(doc, order) {
  doc
    .fillColor("#444444")
    .fontSize(20)
    .text("Receipt", 50, 160);

  generateHr(doc, 185);

  const CIT = 200;

  doc
    .fontSize(10)
    .font("Helvetica-Bold")
    .text("Invoice Number:", 50, CIT)
    .text("Invoice Date:", 50, CIT + 15)
    .text("Balance Due:", 50, CIT + 30)
    .text("Shop Name:", 300, CIT)
    .text("Shop Address:", 300, CIT + 15)
    
    
    .font("Helvetica")
    .text(order._id, 150, CIT)
    .text(formatDate(new Date()), 150, CIT + 15)
    .text(
      formatCurrency(order.totalPrice),
      150,
      CIT + 30
      )
    .text(order.shop.shopName, 400, CIT)
    .text(order.shop.shopAddress, 400, CIT + 15)
    .moveDown();

  generateHr(doc, 252);
}

function generateOrderTable(doc, order) {
  let i;
  const OTT = 330;

  doc.font("Helvetica-Bold");
  generateTableRow(
    doc,
    OTT,
    "Item",
    "Description",
    "",
    "Quantity",
    "Price"
  );
  generateHr(doc, OTT + 20);
  doc.font("Helvetica");

  for (i = 0; i < order.items.length; i++) {
    const item = order.items[i];
    const itemPrice = order.itemPrice[i];
    const itemQuantity = order.itemQuantity[i];
    const position = OTT + (i + 1) * 30;
    generateTableRow(
      doc,
      position,
      item,
      item.description,
      "",
      itemQuantity,
      formatCurrency(itemPrice)
    );

    generateHr(doc, position + 20);
  }

  const subtotalPosition = OTT + (i + 1) * 30;
  generateTableRow(
    doc,
    subtotalPosition,
    "",
    "",
    "Subtotal",
    "",
    formatCurrency(order.totalPrice)
  );

  const paidToDatePosition = subtotalPosition + 20;
  generateTableRow(
    doc,
    paidToDatePosition,
    "",
    "",
    "Paid To Date",
    "",
    formatCurrency(order.totalPrice)
  );

  const duePosition = paidToDatePosition + 25;
  doc.font("Helvetica-Bold");
  generateTableRow(
    doc,
    duePosition,
    "",
    "",
    "Balance Due",
    "",
    formatCurrency(order.totalPrice - order.totalPrice)
  );
  doc.font("Helvetica");
}

function generateFooter(doc) {
  doc
    .fontSize(10)
    .text(
      "Thank you for shopping, please come again",
      50,
      780,
      { align: "center", width: 500 }
    );
}

function generateTableRow(
  doc,
  y,
  item,
  description,
  unitCost,
  quantity,
  lineTotal
) {
  doc
    .fontSize(10)
    .text(item, 50, y)
    .text(description, 150, y)
    .text(unitCost, 280, y, { width: 90, align: "right" })
    .text(quantity, 370, y, { width: 90, align: "right" })
    .text(lineTotal, 0, y, { align: "right" });
}

function generateHr(doc, y) {
  doc
    .strokeColor("#aaaaaa")
    .lineWidth(1)
    .moveTo(50, y)
    .lineTo(550, y)
    .stroke();
}

function formatCurrency(cents) {
  return "RM " + (cents).toFixed(2);
}

function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return year + "/" + month + "/" + day;
}

module.exports = generatePDF;