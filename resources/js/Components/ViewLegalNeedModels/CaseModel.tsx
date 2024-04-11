export interface CaseModel {
    CaseID: number;
    id: number;
    DateOfNextAppearance: string;
    NatureOfAppearance: string;
    CourtDocuments?: string;
    ServicesLanguage?: string;
    AdditionalInformation?: string;
    Approved: boolean;
}
