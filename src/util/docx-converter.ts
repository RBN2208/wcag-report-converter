import { ConverterOptions, SingleReport } from '../types/types';
import * as docx from "docx";
import {saveAs} from 'file-saver'
import {
  createCriteriaTable,
  createExploreTargetTable,
  createFindingsTable,
  createScopeTable, createSectionHeading
} from './helpers/helpers';


export default function docxConverter(report: SingleReport, options: ConverterOptions) {
  console.log("Converter: Starting word transformation")
  const doc = new docx.Document({
    creator: report.reportFindings.evaluator,
    title: report.reportFindings.title,
    sections: [
      {
        children: [
          createSectionHeading(docx.HeadingLevel.HEADING_1, "Ergebnis des Barrierefreiheit-Audits"),
          createSectionHeading(docx.HeadingLevel.HEADING_2, "Scope des Audits"),
          createScopeTable(report),
          createSectionHeading(docx.HeadingLevel.HEADING_2, "Erkundung der Website"),
          createExploreTargetTable(report),
          createSectionHeading(docx.HeadingLevel.HEADING_2, "Allgemeine Ergebnisse"),
          createFindingsTable(report),
          createSectionHeading(docx.HeadingLevel.HEADING_2, "Ergebnisse nach Kriterien"),
          createCriteriaTable(report, options.criteria)
        ]
      }
    ]
  })

  docx.Packer.toBlob(doc).then((blob) => {
    console.log("Converter: Document created, init download");
    saveAs(blob, report.reportFindings.title);
  });
}




