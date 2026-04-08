import { jsPDF } from "jspdf";
import { toPng } from "html-to-image";

export async function generateResumePDF(
  element: HTMLElement,
  fileName: string = "Resume.pdf",
) {
  try {
    // Hide the element briefly or ensure it's visible for the screenshot
    const originalStyle = element.style.left;
    element.style.left = "0";
    element.style.position = "relative";
    element.style.display = "block";

    const dataUrl = await toPng(element, {
      quality: 0.95,
      pixelRatio: 1.5, // Reduced from 2 to balance quality and file size
      backgroundColor: "#ffffff",
    });

    // Reset styles
    element.style.left = originalStyle;
    element.style.position = "absolute";

    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(dataUrl);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    // Sanitize filename and ensure .pdf extension
    const cleanFileName = fileName
      .replace(/[^a-z0-9.]/gi, "_")
      .replace(/_{2,}/g, "_");
    const finalFileName = cleanFileName.endsWith(".pdf")
      ? cleanFileName
      : `${cleanFileName}.pdf`;

    pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight, undefined, "FAST");
    pdf.save(finalFileName);

    return true;
  } catch (error) {
    console.error("Error generating PDF:", error);
    return false;
  }
}
