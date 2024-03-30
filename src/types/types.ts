export type SelectSampleStructuredSample = {
  id: string
  type: string[],
  date: Date
  description: string
  title: string
}

export type AuditSampleAssertion = {
  type: string,
  date: Date,
  mode: {
    type: string,
    ['@value']: string
  },
  result: {
    type: string,
    date: Date,
    description: string,
    outcome: {
      id: string,
      type: string[],
      title: string
    }
  },
  subject: {
    id: string,
    type: string[],
    date: Date,
    description: string,
    title: string
  },
  test: {
    id: string,
    type: string[],
    date: Date
  }
  order?: number,
}

export type SingleReport = {
  language: string,
  type: string,
  reportToolVersion: string,
  defineScope: {
    id:string,
    scope: {
      description: string,
      title: string,
    },
    conformanceTarget: string,
    accessibilitySupportBaseline: string,
    additionalEvaluationRequirements: string,
    wcagVersion: string,
  },
  exploreTarget: {
    id: string,
    essentialFunctionality: string,
    pageTypeVariety: string,
    technologiesReliedUpon: string[],
  },
  selectSample: {
    id:string,
    structuredSample: SelectSampleStructuredSample[],
    randomSample: {
      id: string,
      type: string[],
      date: Date,
      description: string,
      title: string,
    }
  },
  auditSample: AuditSampleAssertion[],
  reportFindings: {
    date: {
      type: string,
      ['@value']: string,
    },
    summary: string,
    title: string,
    commissioner: string,
    evaluator: string,
    documentSteps: {id: string}[],
    evaluationSpecifics: string,
  }
}


export type ConverterOptions = {
  criteria?: {
    exclude: {
      notChecked: boolean,
      cannotTell: boolean,
      notPresent: boolean
    }
  }
}
