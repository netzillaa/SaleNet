const PDFDocument = require('pdfkit');
const fs = require('fs');

function generatePDF(order) {
  // Create a document
  const doc = new PDFDocument();

  // Pipe its output somewhere, like to a file or HTTP response
  // See below for browser usage
  doc.pipe(fs.createWriteStream('./pdfDocuments/output.pdf'));

  // Add an image, constrain it to a given size, and center it vertically and horizontally
  doc.image('../Frontend/public/images/netzillaLogo.png', {
    fit: [250, 300],
    align: 'center',
    valign: 'center'
  });

  // Add another page
  doc
    .addPage()
    .fontSize(25)
    .text(JSON.stringify(order[0].shop.shopName).slice(1, -1), 100, 100);


  // Finalize PDF file
  doc.end();
}

module.exports = generatePDF;