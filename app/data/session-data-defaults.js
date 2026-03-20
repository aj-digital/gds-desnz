module.exports = {

  // Case / application shell
  setupComplete: false,
  preApplicationReference: 'PRE-APP-1023',

  // Setup page fields (from PDF)
  yourReference: '',
  acquiringAuthority: '',
  statutoryPower: '',
  schemeName: '',
  schemeType: '',
  localAuthority: '',

  // Section answers - core documents (prototype: text placeholders)
  coreOrderDocument: '',
  coreMapDocument: '',
  coreStatementOfReasons: '',
  coreSupportingDocuments: '',
  coreConfirmations: [],

  // Section answers - planning and environmental
  planningStatus: '',
  planningDecisionDocument: '',
  planningCommitteeReport: '',
  environmentalImpactRequired: '',
  environmentalDocument: '',

  // Section answers - notices and service evidence
  noticesServed: '',
  templateNoticeDocument: '',
  certificateOfServiceDocument: '',
  newspaperPublicationDocument: '',
  siteNoticeDocument: '',

  // Section answers - contacts and access
  primaryContactName: '',
  primaryContactEmail: '',
  primaryContactPhone: '',
  authorisedToAct: false,
  contactDetailsConfirmed: false,

  // Section completion (set in route handlers)
  coreDocumentsComplete: false,
  planningEnvironmentalComplete: false,
  noticesEvidenceComplete: false,
  contactsAccessComplete: false,

  // Submit flow
  checkAnswersComplete: false,
  declarationAgreed: false,
  applicationSubmitted: false,
  submissionReference: ''

}
