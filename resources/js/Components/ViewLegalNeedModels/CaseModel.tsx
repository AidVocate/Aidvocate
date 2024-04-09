export interface CaseModel {
    CaseID: number;
    DateOfNextAppearance: string;
    NatureOfAppearance: string;
    CourtDocuments?: string;
    ServicesLanguage?: string;
    AdditionalInformation?: string;
    Approved: boolean;
}
