// types.d.ts

export interface CaseModel {
    CaseID: number;
    DateOfNextAppearance: string;
    NatureOfAppearance: string;
    ServicesLanguage?: string;
    AdditionalInformation?: string;
    // Add more fields if necessary
}