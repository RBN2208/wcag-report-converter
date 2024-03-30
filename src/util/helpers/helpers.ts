import * as docx from 'docx';
import { AuditSampleAssertion, ConverterOptions, SingleReport } from '../../types/types';
import { CRITERIA_MAP } from '../lib';

export function createExploreTargetTable(report: SingleReport) {
  return new docx.Table({
    width: { size: 100, type: 'pct'},
    rows: [
      new docx.TableRow({
        children: [
          new docx.TableCell({
            width: { size: 30, type: 'pct'},
            margins: tableCellMargin(),
            children: [
              new docx.Paragraph({
                text: "Version des Reporting Tools"
              })
            ]
          }),
          new docx.TableCell({
            width: { size: 70, type: 'pct'},
            margins: tableCellMargin(),
            children: [
              new docx.Paragraph({
                text: report.reportToolVersion
              })
            ]
          })
        ]
      }),
      new docx.TableRow({
        children: [
          new docx.TableCell({
            width: { size: 30, type: 'pct'},
            margins: tableCellMargin(),
            children: [
              new docx.Paragraph({
                text: "Essentielle Funktion des Ziels"
              })
            ]
          }),
          new docx.TableCell({
            width: { size: 70, type: 'pct'},
            margins: tableCellMargin(),
            children: [
              new docx.Paragraph({
                text: report.exploreTarget.essentialFunctionality
              })
            ]
          })
        ]
      }),
      new docx.TableRow({
        children: [
          new docx.TableCell({
            width: { size: 30, type: 'pct'},
            margins: tableCellMargin(),
            children: [
              new docx.Paragraph({
                text: "Benutzte Technologien"
              })
            ]
          }),
          new docx.TableCell({
            width: { size: 70, type: 'pct'},
            margins: tableCellMargin(),
            children: [
              new docx.Paragraph({
                text: report.exploreTarget.technologiesReliedUpon.join(', ')
              })
            ]
          })
        ]
      })
    ]
  })
}

export function createScopeTable(report: SingleReport) {
  return new docx.Table({
    width: { size: 100, type: 'pct'},
    rows: [
      new docx.TableRow({
        children: [
          new docx.TableCell({
            width: { size: 30, type: 'pct'},
            margins: tableCellMargin(),
            children: [
              new docx.Paragraph({
                text: "Geprüfte Website"
              })
            ]
          }),
          new docx.TableCell({
            width: { size: 70, type: 'pct'},
            margins: tableCellMargin(),
            children: [
              new docx.Paragraph({
                text: report.defineScope.scope.title
              })
            ]
          })
        ]
      }),
      new docx.TableRow({
        children: [
          new docx.TableCell({
            width: { size: 30, type: 'pct'},
            margins: tableCellMargin(),
            children: [
              new docx.Paragraph({
                text: "Inhalt der Website"
              })
            ]
          }),
          new docx.TableCell({
            width: { size: 70, type: 'pct'},
            margins: tableCellMargin(),
            children: [
              new docx.Paragraph({
                text: report.defineScope.scope.description
              })
            ]
          })
        ]
      }),
      new docx.TableRow({
        children: [
          new docx.TableCell({
            width: { size: 30, type: 'pct'},
            margins: tableCellMargin(),
            children: [
              new docx.Paragraph({
                text: "Prüfung nach WCAG Version"
              })
            ]
          }),
          new docx.TableCell({
            width: { size: 70, type: 'pct'},
            margins: tableCellMargin(),
            children: [
              new docx.Paragraph({
                text: report.defineScope.wcagVersion
              })
            ]
          })
        ]
      }),
      new docx.TableRow({
        children: [
          new docx.TableCell({
            width: { size: 30, type: 'pct'},
            margins: tableCellMargin(),
            children: [
              new docx.Paragraph({
                text: "Konformitätsziel"
              })
            ]
          }),
          new docx.TableCell({
            width: { size: 70, type: 'pct'},
            margins: tableCellMargin(),
            children: [
              new docx.Paragraph({
                text: report.defineScope.conformanceTarget
              })
            ]
          })
        ]
      }),
      new docx.TableRow({
        children: [
          new docx.TableCell({
            width: { size: 30, type: 'pct'},
            margins: tableCellMargin(),
            children: [
              new docx.Paragraph({
                text: "Zu unterstützende Technologien"
              })
            ]
          }),
          new docx.TableCell({
            width: { size: 70, type: 'pct'},
            margins: tableCellMargin(),
            children: [
              new docx.Paragraph({
                text: report.defineScope.accessibilitySupportBaseline
              })
            ]
          })
        ]
      }),
      new docx.TableRow({
        children: [
          new docx.TableCell({
            width: { size: 30, type: 'pct'},
            margins: tableCellMargin(),
            children: [
              new docx.Paragraph({
                text: "Zusätzliche Merkmale"
              })
            ]
          }),
          new docx.TableCell({
            width: { size: 70, type: 'pct'},
            margins: tableCellMargin(),
            children: [
              new docx.Paragraph({
                text: report.defineScope.additionalEvaluationRequirements
              })
            ]
          })
        ]
      })
    ]
  })
}

export function createFindingsTable(report: SingleReport) {
  return new docx.Table({
    width: { size: 100, type: 'pct'},
    rows: [
      new docx.TableRow({
        children: [
          new docx.TableCell({
            width: { size: 30, type: 'pct'},
            margins: tableCellMargin(),
            children: [
              new docx.Paragraph({
                text: "Auftraggeber"
              })
            ]
          }),
          new docx.TableCell({
            width: { size: 70, type: 'pct'},
            margins: tableCellMargin(),
            children: [
              new docx.Paragraph({
                text: report.reportFindings.commissioner
              })
            ]
          })
        ]
      }),
      new docx.TableRow({
        children: [
          new docx.TableCell({
            width: { size: 30, type: 'pct'},
            margins: tableCellMargin(),
            children: [
              new docx.Paragraph({
                text: "Prüfer"
              })
            ]
          }),
          new docx.TableCell({
            width: { size: 70, type: 'pct'},
            margins: tableCellMargin(),
            children: [
              new docx.Paragraph({
                text: report.reportFindings.evaluator
              })
            ]
          })
        ]
      }),
      new docx.TableRow({
        children: [
          new docx.TableCell({
            width: { size: 30, type: 'pct'},
            margins: tableCellMargin(),
            children: [
              new docx.Paragraph({
                text: "Prüfdatum"
              })
            ]
          }),
          new docx.TableCell({
            width: { size: 70, type: 'pct'},
            margins: tableCellMargin(),
            children: [
              new docx.Paragraph({
                text: report.reportFindings.date['@value']
              })
            ]
          })
        ]
      }),
      new docx.TableRow({
        children: [
          new docx.TableCell({
            width: { size: 30, type: 'pct'},
            margins: tableCellMargin(),
            children: [
              new docx.Paragraph({
                text: "Besonderheiten"
              })
            ]
          }),
          new docx.TableCell({
            width: { size: 70, type: 'pct'},
            margins: tableCellMargin(),
            children: [
              new docx.Paragraph({
                text: report.reportFindings.evaluationSpecifics
              })
            ]
          })
        ]
      }),
      new docx.TableRow({
        children: [
          new docx.TableCell({
            width: { size: 30, type: 'pct'},
            margins: tableCellMargin(),
            children: [
              new docx.Paragraph({
                text: "Zusammenfassung"
              })
            ]
          }),
          new docx.TableCell({
            width: { size: 70, type: 'pct'},
            margins: tableCellMargin(),
            children: [
              new docx.Paragraph({
                text: report.reportFindings.summary
              })
            ]
          })
        ]
      })
    ]
  })
}

export function createCriteriaTable(report: SingleReport, options: ConverterOptions['criteria']) {
  const auditRows: docx.TableRow[] = [];
  let remappedAudits = [];
  remappedAudits = report.auditSample.map((audit) => {
    const criteriaObj = CRITERIA_MAP.find(obj => obj.provided === audit.test.id);
    if (criteriaObj) {
      audit.test.id = criteriaObj.remap;
      audit.order = criteriaObj.order
    }
    return audit;
  })

  if (options?.exclude.notChecked || options?.exclude.cannotTell) {
    remappedAudits = remappedAudits.filter((audit: AuditSampleAssertion) => {
      if (options.exclude.notChecked && audit.result.outcome.id === 'earl:untested') {
        return false;
      }
      if (options.exclude.cannotTell && audit.result.outcome.id === 'earl:cantTell') {
        return false;
      }
      if (options.exclude.notPresent && audit.result.outcome.id === 'earl:inapplicable') {
        return false;
      }
      return true;
    })
  }
  remappedAudits.sort((auditA,auditB) => {
    const remapA = auditA.test.id.split('.').map(Number);
    const remapB = auditB.test.id.split('.').map(Number);
    for (let i = 0; i < Math.min(remapA.length, remapB.length); i++) {
      if (remapA[i] !== remapB[i]) {
        return remapA[i] - remapB[i];
      }
    }
    return remapA.length - remapB.length;
  })

  remappedAudits.forEach((audit) => {
    auditRows.push(new docx.TableRow({
        children: [
          new docx.TableCell({
            width: { size: 15, type: 'pct'},
            margins: tableCellMargin(),
            children: [
              new docx.Paragraph({
                text: audit.test.id
              })
            ]
          }),
          new docx.TableCell({
            width: { size: 15, type: 'pct'},
            margins: tableCellMargin(),
            children: [
              new docx.Paragraph({
                text: audit.result.outcome.title || "Untested"
              })
            ]
          }),
          new docx.TableCell({
            width: {size: 70, type: 'pct'},
            margins: tableCellMargin(),
            children: [
              new docx.Paragraph({
                text: audit.result.description
              })
            ]
          })
        ]})
    );
  })
  return new docx.Table({
    width: { size: 100, type: 'pct'},
    rows: auditRows
  });
}

export function createSectionHeading(level: any, text: string, isBold: boolean = true) {
  return new docx.Paragraph({
    heading: level,
    spacing: {
      before: 250,
      after: 150
    },
    children: [
      new docx.TextRun({
        text: text,
        font: 'sans-serif',
        bold: isBold
      })
    ]
  })
}

function tableCellMargin() {
  return {
    top: 50,
    right: 100,
    left: 100,
    bottom: 50
  }
}
